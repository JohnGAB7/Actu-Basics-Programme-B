"""Didactic econometrics and financial-statistics primitives for B19.

Standard library only. These functions are teaching implementations, not
production estimators or substitutes for econometric software.
"""
from __future__ import annotations

from math import ceil, exp, log
from typing import Sequence


def _transpose(a):
    return [list(col) for col in zip(*a)]


def _matmul(a, b):
    bt = _transpose(b)
    return [[sum(x * y for x, y in zip(row, col)) for col in bt] for row in a]


def _solve(a, b):
    n = len(b)
    aug = [list(a[i]) + [b[i]] for i in range(n)]
    for col in range(n):
        pivot = max(range(col, n), key=lambda r: abs(aug[r][col]))
        if abs(aug[pivot][col]) < 1e-12:
            raise ValueError("singular matrix; inspect rank and collinearity")
        aug[col], aug[pivot] = aug[pivot], aug[col]
        d = aug[col][col]
        aug[col] = [v / d for v in aug[col]]
        for row in range(n):
            if row == col:
                continue
            f = aug[row][col]
            aug[row] = [aug[row][k] - f * aug[col][k] for k in range(n + 1)]
    return [aug[i][-1] for i in range(n)]


def _inverse(a):
    n = len(a)
    cols = [_solve(a, [1.0 if i == j else 0.0 for i in range(n)]) for j in range(n)]
    return _transpose(cols)


def _crossprod(x):
    return _matmul(_transpose(x), x)


def ols_fit(design: Sequence[Sequence[float]], outcome: Sequence[float]) -> dict[str, object]:
    """OLS with design matrix supplied explicitly (include intercept if required)."""
    n = len(outcome)
    if n == 0 or len(design) != n:
        raise ValueError("design and outcome must have equal non-zero length")
    p = len(design[0])
    if p == 0 or any(len(row) != p for row in design):
        raise ValueError("design must be rectangular and non-empty")
    xtx = _crossprod(design)
    xty = [sum(design[i][j] * outcome[i] for i in range(n)) for j in range(p)]
    beta = _solve(xtx, xty)
    fitted = [sum(design[i][j] * beta[j] for j in range(p)) for i in range(n)]
    residuals = [outcome[i] - fitted[i] for i in range(n)]
    mean_y = sum(outcome) / n
    sse = sum(e * e for e in residuals)
    sst = sum((y - mean_y) ** 2 for y in outcome)
    return {"coefficients": beta, "fitted": fitted, "residuals": residuals,
            "sse": sse, "r_squared": 1.0 - sse / sst if sst > 0 else float("nan")}


def _sandwich_covariance(design, residuals, lag: int) -> list[list[float]]:
    n, p = len(design), len(design[0])
    if lag < 0 or lag >= n:
        raise ValueError("lag must be between 0 and n-1")
    scores = [[design[i][j] * residuals[i] for j in range(p)] for i in range(n)]
    meat = [[0.0] * p for _ in range(p)]
    for i in range(n):
        for a in range(p):
            for b in range(p):
                meat[a][b] += scores[i][a] * scores[i][b]
    for ell in range(1, lag + 1):
        weight = 1.0 - ell / (lag + 1.0)
        for t in range(ell, n):
            for a in range(p):
                for b in range(p):
                    cross = scores[t][a] * scores[t - ell][b]
                    reverse = scores[t - ell][a] * scores[t][b]
                    meat[a][b] += weight * (cross + reverse)
    bread = _inverse(_crossprod(design))
    return _matmul(_matmul(bread, meat), bread)


def hc0_covariance(design: Sequence[Sequence[float]], residuals: Sequence[float]) -> list[list[float]]:
    """HC0 sandwich covariance; no finite-sample correction."""
    if len(design) != len(residuals) or not design:
        raise ValueError("design and residuals must have equal non-zero length")
    return _sandwich_covariance(design, residuals, lag=0)


def newey_west_covariance(
    design: Sequence[Sequence[float]], residuals: Sequence[float], lag: int
) -> list[list[float]]:
    """Bartlett-kernel HAC covariance; teaching version without small-sample correction."""
    if len(design) != len(residuals) or not design:
        raise ValueError("design and residuals must have equal non-zero length")
    return _sandwich_covariance(design, residuals, lag=lag)


def within_demean(
    outcome: Sequence[float], design: Sequence[Sequence[float]], groups: Sequence[object]
) -> dict[str, object]:
    """Remove group-specific means; group/time effects are not otherwise modelled."""
    if not outcome or len(outcome) != len(design) or len(outcome) != len(groups):
        raise ValueError("outcome, design and groups must have equal non-zero length")
    p = len(design[0])
    if p == 0 or any(len(row) != p for row in design):
        raise ValueError("design must be rectangular and non-empty")
    members = {}
    for i, group in enumerate(groups):
        members.setdefault(group, []).append(i)
    y_out = [0.0] * len(outcome)
    x_out = [[0.0] * p for _ in outcome]
    for indices in members.values():
        y_bar = sum(outcome[i] for i in indices) / len(indices)
        x_bar = [sum(design[i][j] for i in indices) / len(indices) for j in range(p)]
        for i in indices:
            y_out[i] = outcome[i] - y_bar
            x_out[i] = [design[i][j] - x_bar[j] for j in range(p)]
    return {"outcome": y_out, "design": x_out, "groups": len(members)}


def wald_iv(instrument: Sequence[float], endogenous: Sequence[float], outcome: Sequence[float]) -> float:
    """Single-instrument, no-covariate Wald ratio; not a general 2SLS estimator."""
    if not instrument or len(instrument) != len(endogenous) or len(instrument) != len(outcome):
        raise ValueError("instrument, endogenous variable and outcome lengths must agree")
    zbar = sum(instrument) / len(instrument)
    xbar = sum(endogenous) / len(endogenous)
    ybar = sum(outcome) / len(outcome)
    cov_zx = sum((instrument[i] - zbar) * (endogenous[i] - xbar) for i in range(len(instrument)))
    cov_zy = sum((instrument[i] - zbar) * (outcome[i] - ybar) for i in range(len(instrument)))
    if abs(cov_zx) < 1e-12:
        raise ValueError("instrument has no first-stage variation")
    return cov_zy / cov_zx


def logit_probability(linear_predictor: float) -> float:
    if linear_predictor >= 0:
        return 1.0 / (1.0 + exp(-linear_predictor))
    e = exp(linear_predictor)
    return e / (1.0 + e)


def logit_marginal_effect(beta: float, probability: float) -> float:
    if not 0 <= probability <= 1:
        raise ValueError("probability must lie in [0,1]")
    return beta * probability * (1.0 - probability)


def simple_returns(prices: Sequence[float]) -> list[float]:
    if len(prices) < 2 or any(p <= 0 for p in prices):
        raise ValueError("at least two strictly positive prices are required")
    return [prices[i] / prices[i - 1] - 1.0 for i in range(1, len(prices))]


def log_returns(prices: Sequence[float]) -> list[float]:
    if len(prices) < 2 or any(p <= 0 for p in prices):
        raise ValueError("at least two strictly positive prices are required")
    return [log(prices[i] / prices[i - 1]) for i in range(1, len(prices))]


def capm_fit(asset_excess: Sequence[float], market_excess: Sequence[float]) -> dict[str, float]:
    """OLS intercept and market beta for aligned excess returns."""
    if len(asset_excess) != len(market_excess) or len(asset_excess) < 2:
        raise ValueError("aligned return series with at least two observations required")
    mx = sum(market_excess) / len(market_excess)
    my = sum(asset_excess) / len(asset_excess)
    variance = sum((x - mx) ** 2 for x in market_excess)
    if variance <= 0:
        raise ValueError("market excess return has zero variance")
    covariance = sum((market_excess[i] - mx) * (asset_excess[i] - my) for i in range(len(asset_excess)))
    beta = covariance / variance
    return {"alpha": my - beta * mx, "beta": beta}


def empirical_var_es(losses: Sequence[float], alpha: float) -> dict[str, float]:
    """Empirical VaR and integrated upper-tail ES with fractional tail weighting."""
    if not losses or not 0 < alpha < 1:
        raise ValueError("losses must be non-empty and alpha in (0,1)")
    ordered = sorted(float(x) for x in losses)
    n = len(ordered)
    var = ordered[max(0, min(n - 1, ceil(alpha * n) - 1))]
    remaining = (1.0 - alpha) * n
    mass = remaining
    weighted = 0.0
    for value in reversed(ordered):
        weight = min(1.0, remaining)
        weighted += weight * value
        remaining -= weight
        if remaining <= 1e-12:
            break
    return {"VaR": var, "ES": weighted / mass}


def kupiec_lr_uc(exceptions: Sequence[bool], expected_exception_rate: float) -> float:
    """Kupiec LR statistic; expected_exception_rate is 1 - VaR confidence (no p-value)."""
    if not exceptions or not 0 < expected_exception_rate < 1:
        raise ValueError("exceptions must be non-empty and expected_exception_rate in (0,1)")
    n = len(exceptions)
    x = sum(bool(v) for v in exceptions)
    phat = x / n

    def log_likelihood(p):
        left = (n - x) * log(1.0 - p) if n - x else 0.0
        right = x * log(p) if x else 0.0
        return left + right

    return max(0.0, -2.0 * (log_likelihood(expected_exception_rate) - log_likelihood(phat)))


def realized_variance(intraday_returns: Sequence[float]) -> float:
    if not intraday_returns:
        raise ValueError("at least one intraday return is required")
    return sum(r * r for r in intraday_returns)
