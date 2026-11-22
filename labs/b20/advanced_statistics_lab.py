"""Didactic advanced-statistics and research-methods primitives for B20.

Standard library only. These routines illustrate algorithms and diagnostics;
they are not production MCMC, inference, or optimization software.
"""
from __future__ import annotations

from itertools import combinations
from math import ceil, isfinite, log, sqrt
import random
from typing import Callable, Sequence


def _percentile(values: Sequence[float], probability: float) -> float:
    ordered = sorted(values)
    if not ordered or not 0 <= probability <= 1:
        raise ValueError("non-empty values and probability in [0,1] required")
    position = (len(ordered) - 1) * probability
    lower = int(position)
    upper = min(lower + 1, len(ordered) - 1)
    weight = position - lower
    return ordered[lower] * (1 - weight) + ordered[upper] * weight


def bootstrap_mean_ci(
    sample: Sequence[float], n_resamples: int = 2000, alpha: float = 0.05, seed: int = 123
) -> dict[str, float]:
    if not sample or not isinstance(n_resamples, int) or n_resamples < 1 or not isfinite(float(alpha)) or not 0 < alpha < 1:
        raise ValueError("sample, integer positive n_resamples and finite alpha in (0,1) required")
    if any(not isfinite(float(x)) for x in sample):
        raise ValueError("bootstrap sample must be finite")
    rng = random.Random(seed)
    n = len(sample)
    means = [sum(rng.choice(sample) for _ in range(n)) / n for _ in range(n_resamples)]
    mean = sum(sample) / n
    bootstrap_mean = sum(means) / n_resamples
    variance = sum((x - bootstrap_mean) ** 2 for x in means) / max(1, n_resamples - 1)
    return {
        "estimate": mean,
        "lower": _percentile(means, alpha / 2),
        "upper": _percentile(means, 1 - alpha / 2),
        "bootstrap_se": sqrt(variance),
    }


def permutation_test_mean_difference(
    first: Sequence[float],
    second: Sequence[float],
    n_resamples: int = 10000,
    seed: int = 123,
) -> dict[str, float | str]:
    """Two-sided permutation test; exact enumeration when combinations <= n_resamples."""
    if not first or not second or not isinstance(n_resamples, int) or n_resamples < 1:
        raise ValueError("two non-empty samples and integer positive n_resamples required")
    if any(not isfinite(float(x)) for x in [*first, *second]):
        raise ValueError("permutation samples must be finite")
    pooled = list(first) + list(second)
    n1 = len(first)
    observed = sum(first) / len(first) - sum(second) / len(second)
    total = 1
    for i in range(1, min(n1, len(pooled) - n1) + 1):
        total = total * (len(pooled) - i + 1) // i
    extreme = 0
    tolerance = 1e-12
    if total <= n_resamples:
        for indices in combinations(range(len(pooled)), n1):
            chosen = set(indices)
            a = [pooled[i] for i in range(len(pooled)) if i in chosen]
            b = [pooled[i] for i in range(len(pooled)) if i not in chosen]
            statistic = sum(a) / len(a) - sum(b) / len(b)
            if abs(statistic) >= abs(observed) - tolerance:
                extreme += 1
        p_value = extreme / total
        method = "exact"
    else:
        rng = random.Random(seed)
        indices = list(range(len(pooled)))
        for _ in range(n_resamples):
            rng.shuffle(indices)
            a = [pooled[i] for i in indices[:n1]]
            b = [pooled[i] for i in indices[n1:]]
            statistic = sum(a) / len(a) - sum(b) / len(b)
            if abs(statistic) >= abs(observed) - tolerance:
                extreme += 1
        p_value = (extreme + 1) / (n_resamples + 1)
        method = "monte_carlo_plus_one"
    return {"difference": observed, "p_value": p_value, "method": method, "resamples": float(total if method == "exact" else n_resamples)}


def delta_method(gradient: Sequence[float], covariance: Sequence[Sequence[float]]) -> dict[str, float]:
    p = len(gradient)
    if p == 0 or len(covariance) != p or any(len(row) != p for row in covariance):
        raise ValueError("gradient and covariance dimensions must agree and be non-empty")
    if any(not isfinite(float(x)) for x in gradient) or any(not isfinite(float(x)) for row in covariance for x in row):
        raise ValueError("gradient and covariance must be finite")
    if any(abs(covariance[i][j] - covariance[j][i]) > 1e-10 for i in range(p) for j in range(p)):
        raise ValueError("covariance matrix must be symmetric")
    variance = sum(gradient[i] * covariance[i][j] * gradient[j] for i in range(p) for j in range(p))
    if variance < -1e-10:
        raise ValueError("computed delta variance is negative; check covariance matrix")
    variance = max(0.0, variance)
    return {"variance": variance, "standard_error": sqrt(variance)}


def metropolis_hastings(
    log_target: Callable[[float], float],
    initial: float,
    n_iter: int,
    proposal_sd: float = 1.0,
    seed: int = 123,
) -> dict[str, object]:
    if not isinstance(n_iter, int) or n_iter < 2 or not isfinite(float(proposal_sd)) or proposal_sd <= 0 or not isfinite(float(initial)):
        raise ValueError("n_iter must be an integer >=2; initial and proposal_sd must be finite, sd positive")
    rng = random.Random(seed)
    current = float(initial)
    current_log = log_target(current)
    if not isfinite(float(current_log)):
        raise ValueError("initial state must have a finite log target")
    draws = []
    accepted = 0
    for _ in range(n_iter):
        proposal = rng.gauss(current, proposal_sd)
        proposal_log = log_target(proposal)
        if proposal_log != float("-inf") and not isfinite(float(proposal_log)):
            raise ValueError("log_target must not return NaN or positive infinity")
        log_ratio = proposal_log - current_log
        u = max(rng.random(), 1e-300)
        if log(u) < min(0.0, log_ratio):
            current, current_log = proposal, proposal_log
            accepted += 1
        draws.append(current)
    return {"draws": draws, "acceptance_rate": accepted / n_iter}


def effective_sample_size(samples: Sequence[float], max_lag: int | None = None) -> float:
    n = len(samples)
    if n < 3:
        raise ValueError("at least three samples are required")
    if any(not isfinite(float(x)) for x in samples):
        raise ValueError("samples must be finite")
    if max_lag is not None and (not isinstance(max_lag, int) or max_lag < 0 or max_lag >= n):
        raise ValueError("max_lag must be an integer in [0,n-1]")
    mean = sum(samples) / n
    variance = sum((x - mean) ** 2 for x in samples) / n
    if variance <= 0:
        return 0.0
    max_lag = min(max_lag if max_lag is not None else n // 2, n - 1)
    tau = 1.0
    for lag in range(1, max_lag + 1):
        covariance = sum((samples[i] - mean) * (samples[i + lag] - mean) for i in range(n - lag)) / (n - lag)
        rho = covariance / variance
        if rho <= 0:
            break
        tau += 2.0 * rho
    return min(float(n), n / tau)


def benjamini_hochberg(p_values: Sequence[float], q: float = 0.05) -> dict[str, list]:
    if not p_values or not isfinite(float(q)) or not 0 < q < 1 or any(not isfinite(float(p)) or p < 0 or p > 1 for p in p_values):
        raise ValueError("finite p-values in [0,1] and q in (0,1) required")
    m = len(p_values)
    order = sorted(range(m), key=lambda i: p_values[i])
    adjusted_sorted = [0.0] * m
    running = 1.0
    for rank_index in range(m - 1, -1, -1):
        rank = rank_index + 1
        i = order[rank_index]
        running = min(running, p_values[i] * m / rank)
        adjusted_sorted[rank_index] = min(1.0, running)
    adjusted = [0.0] * m
    for rank_index, i in enumerate(order):
        adjusted[i] = adjusted_sorted[rank_index]
    return {"adjusted_p_values": adjusted, "rejected": [p <= q for p in adjusted]}


def _solve(matrix: Sequence[Sequence[float]], vector: Sequence[float]) -> list[float]:
    n = len(vector)
    aug = [list(matrix[i]) + [vector[i]] for i in range(n)]
    for col in range(n):
        pivot = max(range(col, n), key=lambda row: abs(aug[row][col]))
        if abs(aug[pivot][col]) < 1e-12:
            raise ValueError("singular system")
        aug[col], aug[pivot] = aug[pivot], aug[col]
        divisor = aug[col][col]
        aug[col] = [v / divisor for v in aug[col]]
        for row in range(n):
            if row == col:
                continue
            factor = aug[row][col]
            aug[row] = [aug[row][k] - factor * aug[col][k] for k in range(n + 1)]
    return [aug[i][-1] for i in range(n)]


def ridge_regression(
    design: Sequence[Sequence[float]], outcome: Sequence[float], penalty: float, penalize_intercept: bool = False
) -> list[float]:
    n = len(outcome)
    if n == 0 or len(design) != n or not isfinite(float(penalty)) or penalty < 0:
        raise ValueError("valid non-empty design/outcome and finite non-negative penalty required")
    p = len(design[0])
    if p == 0 or any(len(row) != p for row in design):
        raise ValueError("design must be rectangular and non-empty")
    if any(not isfinite(float(v)) for row in design for v in row) or any(not isfinite(float(v)) for v in outcome):
        raise ValueError("design and outcome must be finite")
    xtx = [[sum(design[i][a] * design[i][b] for i in range(n)) for b in range(p)] for a in range(p)]
    xty = [sum(design[i][a] * outcome[i] for i in range(n)) for a in range(p)]
    for j in range(p):
        if penalize_intercept or j > 0:
            xtx[j][j] += penalty
    return _solve(xtx, xty)


def finite_difference_gradient(function: Callable[[Sequence[float]], float], point: Sequence[float], step: float = 1e-6) -> list[float]:
    if not point or not isfinite(float(step)) or step <= 0 or any(not isfinite(float(x)) for x in point):
        raise ValueError("point must be finite and step finite and positive")
    result = []
    for j in range(len(point)):
        plus, minus = list(point), list(point)
        plus[j] += step
        minus[j] -= step
        result.append((function(plus) - function(minus)) / (2 * step))
    return result


def gradient_descent(
    objective: Callable[[Sequence[float]], float],
    gradient: Callable[[Sequence[float]], Sequence[float]],
    initial: Sequence[float],
    max_iter: int = 5000,
    tolerance: float = 1e-8,
    initial_step: float = 1.0,
) -> dict[str, object]:
    if not initial or not isinstance(max_iter, int) or max_iter < 1 or not isfinite(float(tolerance)) or tolerance <= 0 or not isfinite(float(initial_step)) or initial_step <= 0 or any(not isfinite(float(v)) for v in initial):
        raise ValueError("invalid optimization settings")
    x = list(map(float, initial))
    value = objective(x)
    if not isfinite(float(value)):
        raise ValueError("objective must be finite at the initial point")
    converged = False
    iterations = 0
    for iteration in range(1, max_iter + 1):
        g = list(gradient(x))
        if len(g) != len(x) or any(not isfinite(float(v)) for v in g):
            raise ValueError("gradient must be finite and match point dimension")
        norm_sq = sum(v * v for v in g)
        if sqrt(norm_sq) < tolerance:
            converged, iterations = True, iteration - 1
            break
        step = initial_step
        while step > 1e-12:
            candidate = [x[i] - step * g[i] for i in range(len(x))]
            candidate_value = objective(candidate)
            if not isfinite(float(candidate_value)):
                raise ValueError("objective returned a non-finite value")
            if candidate_value <= value - 1e-4 * step * norm_sq:
                x, value = candidate, candidate_value
                break
            step *= 0.5
        else:
            iterations = iteration
            break
        iterations = iteration
    if sqrt(sum(v * v for v in gradient(x))) < tolerance:
        converged = True
    return {"point": x, "value": value, "iterations": iterations, "converged": converged}


def monte_carlo_standard_error(values: Sequence[float]) -> float:
    n = len(values)
    if n < 2:
        raise ValueError("at least two Monte Carlo replications are required")
    if any(not isfinite(float(x)) for x in values):
        raise ValueError("Monte Carlo values must be finite")
    mean = sum(values) / n
    sample_variance = sum((x - mean) ** 2 for x in values) / (n - 1)
    return sqrt(sample_variance / n)
