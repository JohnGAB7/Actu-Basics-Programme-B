"""Didactic actuarial primitives for Programme B18 (standard library only).

The functions are transparent teaching implementations, not production pricing,
reserving, mortality, capital or regulatory calculation engines.
"""
from __future__ import annotations

from math import exp, log, sqrt
from typing import Sequence


def exposure_frequency(claim_counts: Sequence[float], exposures: Sequence[float]) -> float:
    if len(claim_counts) != len(exposures) or not claim_counts:
        raise ValueError("claim_counts and exposures must have the same non-zero length")
    if any(n < 0 for n in claim_counts) or any(e <= 0 for e in exposures):
        raise ValueError("counts must be non-negative and exposures strictly positive")
    return sum(claim_counts) / sum(exposures)


def aggregate_moments(mean_n: float, var_n: float, mean_x: float, var_x: float) -> tuple[float, float]:
    """Compound sum moments when N is independent of iid severities X_j."""
    if min(mean_n, var_n, mean_x, var_x) < 0:
        raise ValueError("moments must be non-negative")
    mean_s = mean_n * mean_x
    var_s = mean_n * var_x + var_n * mean_x**2
    return mean_s, var_s


def _solve_linear(matrix: list[list[float]], vector: list[float]) -> list[float]:
    """Gaussian elimination with partial pivoting for small teaching problems."""
    n = len(vector)
    a = [row[:] + [vector[i]] for i, row in enumerate(matrix)]
    for col in range(n):
        pivot = max(range(col, n), key=lambda r: abs(a[r][col]))
        if abs(a[pivot][col]) < 1e-12:
            raise ValueError("singular information matrix; check design matrix")
        a[col], a[pivot] = a[pivot], a[col]
        scale = a[col][col]
        a[col] = [v / scale for v in a[col]]
        for row in range(n):
            if row == col:
                continue
            factor = a[row][col]
            a[row] = [a[row][k] - factor * a[col][k] for k in range(n + 1)]
    return [a[i][-1] for i in range(n)]


def poisson_irls(
    design: Sequence[Sequence[float]],
    counts: Sequence[float],
    exposures: Sequence[float],
    max_iter: int = 100,
    tolerance: float = 1e-10,
) -> dict[str, object]:
    """Fit a Poisson log-link GLM with log(exposure) offset using IRLS.

    Rows of design must include an intercept column if one is desired. This
    minimal implementation omits covariance/robust-SE estimation.
    """
    n = len(counts)
    if n == 0 or len(design) != n or len(exposures) != n:
        raise ValueError("design, counts and exposures must have equal non-zero lengths")
    p = len(design[0])
    if p == 0 or any(len(row) != p for row in design):
        raise ValueError("design must be rectangular and have at least one column")
    if any(y < 0 for y in counts) or any(e <= 0 for e in exposures):
        raise ValueError("counts must be non-negative and exposures strictly positive")
    if any(not float(y).is_integer() for y in counts):
        raise ValueError("Poisson counts must be integers")
    offset = [log(e) for e in exposures]
    beta = [0.0] * p
    converged = False
    iterations = 0
    for iteration in range(1, max_iter + 1):
        eta = [offset[i] + sum(design[i][k] * beta[k] for k in range(p)) for i in range(n)]
        mu = [exp(max(-30.0, min(30.0, value))) for value in eta]
        working = [eta[i] + (counts[i] - mu[i]) / mu[i] - offset[i] for i in range(n)]
        xtwx = [[0.0] * p for _ in range(p)]
        xtwz = [0.0] * p
        for i in range(n):
            w = mu[i]
            for a in range(p):
                xtwz[a] += design[i][a] * w * working[i]
                for b in range(p):
                    xtwx[a][b] += design[i][a] * w * design[i][b]
        updated = _solve_linear(xtwx, xtwz)
        delta = max(abs(updated[k] - beta[k]) for k in range(p))
        beta = updated
        iterations = iteration
        if delta < tolerance:
            converged = True
            break
    eta = [offset[i] + sum(design[i][k] * beta[k] for k in range(p)) for i in range(n)]
    fitted = [exp(max(-30.0, min(30.0, value))) for value in eta]
    return {"coefficients": beta, "fitted_means": fitted, "iterations": iterations, "converged": converged}


def buhlmann_credibility(epv: float, vhm: float, observations: float) -> dict[str, float]:
    if epv < 0 or vhm <= 0 or observations < 0:
        raise ValueError("EPV must be non-negative, VHM positive and n non-negative")
    k = epv / vhm
    z = observations / (observations + k) if observations + k > 0 else 0.0
    return {"K": k, "Z": z}


def kaplan_meier(times: Sequence[float], events: Sequence[bool]) -> list[dict[str, float | int]]:
    """Product-limit survival table; event is True for an observed event."""
    if len(times) != len(events) or not times:
        raise ValueError("times and events must have the same non-zero length")
    if any(t < 0 for t in times):
        raise ValueError("follow-up times must be non-negative")
    grouped: dict[float, list[int]] = {}
    for t, event in zip(times, events):
        grouped.setdefault(float(t), [0, 0])
        grouped[float(t)][0 if event else 1] += 1
    at_risk = len(times)
    survival = 1.0
    greenwood_sum = 0.0
    result = []
    for t in sorted(grouped):
        deaths, censored = grouped[t]
        if deaths > at_risk:
            raise ValueError("events exceed number at risk")
        survival *= (1.0 - deaths / at_risk)
        if deaths and deaths < at_risk:
            greenwood_sum += deaths / (at_risk * (at_risk - deaths))
        se = survival * sqrt(greenwood_sum) if survival > 0 else float("nan")
        result.append({
            "time": t, "at_risk": at_risk, "events": deaths,
            "censored": censored, "survival": survival, "standard_error": se,
        })
        at_risk -= deaths + censored
    return result


def annuity_immediate(survival_probabilities: Sequence[float], interest_rate: float) -> float:
    """EPV of unit annual payments at times 1..n, conditional survival probabilities."""
    if interest_rate <= -1 or any(p < 0 or p > 1 for p in survival_probabilities):
        raise ValueError("interest rate must exceed -1 and survival probabilities lie in [0,1]")
    v = 1.0 / (1.0 + interest_rate)
    return sum((v ** t) * p for t, p in enumerate(survival_probabilities, start=1))


def term_insurance_epv(death_probabilities: Sequence[float], interest_rate: float, benefit: float = 1.0) -> float:
    """EPV for benefit paid at the end of the year of death."""
    if interest_rate <= -1 or benefit < 0 or any(q < 0 or q > 1 for q in death_probabilities):
        raise ValueError("invalid interest, benefit or death probability")
    v = 1.0 / (1.0 + interest_rate)
    return benefit * sum((v ** t) * q for t, q in enumerate(death_probabilities, start=1))


def chain_ladder(cumulative_triangle: Sequence[Sequence[float | None]]) -> dict[str, list[float]]:
    """Volume-weighted Chain-Ladder; triangle rows must be upper-left aligned."""
    if not cumulative_triangle:
        raise ValueError("triangle must not be empty")
    triangle = [list(row) for row in cumulative_triangle]
    width = max(len(row) for row in triangle)
    if any(len(row) != width for row in triangle):
        raise ValueError("all rows must have the same width; use None for unobserved cells")
    observed_lengths = []
    for row in triangle:
        seen_none = False
        observed = 0
        previous = 0.0
        for value in row:
            if value is None:
                seen_none = True
            else:
                if seen_none or value < 0 or value < previous:
                    raise ValueError("triangle must be non-negative, cumulative and upper-left aligned")
                previous = value
                observed += 1
        if observed == 0:
            raise ValueError("each origin period needs at least one observed development")
        observed_lengths.append(observed)
    factors = []
    for j in range(width - 1):
        pairs = [(row[j], row[j + 1]) for row in triangle if row[j] is not None and row[j + 1] is not None]
        denominator = sum(a for a, _ in pairs)
        if not pairs or denominator <= 0:
            raise ValueError("development factor is not estimable")
        factors.append(sum(b for _, b in pairs) / denominator)
    ultimates, reserves = [], []
    for row, length in zip(triangle, observed_lengths):
        latest = float(row[length - 1])
        ultimate = latest
        for factor in factors[length - 1:]:
            ultimate *= factor
        ultimates.append(ultimate)
        reserves.append(ultimate - latest)
    return {"age_to_age": factors, "ultimates": ultimates, "reserves": reserves}


def xs_recovery(loss: float, priority: float, limit: float) -> float:
    if min(loss, priority, limit) < 0:
        raise ValueError("loss, priority and limit must be non-negative")
    return min(max(loss - priority, 0.0), limit)


def empirical_var_tvar(losses: Sequence[float], alpha: float) -> dict[str, float]:
    """Empirical VaR and integrated upper-tail mean (fractional tail weighting)."""
    if not losses or not 0 < alpha < 1:
        raise ValueError("losses must be non-empty and alpha in (0,1)")
    ordered = sorted(float(x) for x in losses)
    n = len(ordered)
    index = max(0, min(n - 1, int((alpha * n + 0.999999999999) // 1) - 1))
    var = ordered[index]
    tail_mass = (1.0 - alpha) * n
    remaining = tail_mass
    weighted = 0.0
    for value in reversed(ordered):
        weight = min(1.0, remaining)
        weighted += weight * value
        remaining -= weight
        if remaining <= 1e-12:
            break
    return {"VaR": var, "TVaR": weighted / tail_mass}
