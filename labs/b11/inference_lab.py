"""B11 reproducible statistical inference lab — Python standard library only."""
from __future__ import annotations

import math
import random
from statistics import NormalDist
from typing import Sequence


def _finite(values: Sequence[float]) -> list[float]:
    x = [float(v) for v in values]
    if not x or any(not math.isfinite(v) for v in x):
        raise ValueError("values must be non-empty and finite")
    return x


def binomial_pmf(k: int, n: int, p: float) -> float:
    if n < 0 or int(n) != n or k < 0 or int(k) != k or k > n or not 0 <= p <= 1:
        raise ValueError("require integers 0 <= k <= n and p in [0, 1]")
    return math.comb(n, k) * p**k * (1 - p)**(n - k)


def exact_binomial_pvalue(x: int, n: int, p0: float) -> float:
    """Two-sided probability-ordering exact p-value for H0: p=p0."""
    if n < 1 or int(n) != n or x < 0 or int(x) != x or x > n or not 0 <= p0 <= 1:
        raise ValueError("invalid binomial test inputs")
    observed = binomial_pmf(x, n, p0)
    return min(1.0, sum(binomial_pmf(k, n, p0) for k in range(n + 1)
                        if binomial_pmf(k, n, p0) <= observed + 1e-15))


def wilson_interval(x: int, n: int, alpha: float = 0.05) -> tuple[float, float]:
    if n < 1 or int(n) != n or x < 0 or int(x) != x or x > n or not 0 < alpha < 1:
        raise ValueError("require 0 <= x <= n, n >= 1 and alpha in (0, 1)")
    z = NormalDist().inv_cdf(1 - alpha / 2)
    phat = x / n
    z2 = z * z
    den = 1 + z2 / n
    center = (phat + z2 / (2 * n)) / den
    half = z / den * math.sqrt(phat * (1 - phat) / n + z2 / (4 * n * n))
    return center - half, center + half


def poisson_mle(counts: Sequence[int]) -> dict[str, float]:
    x = _finite(counts)
    if any(v < 0 or int(v) != v for v in x):
        raise ValueError("counts must be non-negative integers")
    total = sum(x)
    n = len(x)
    return {
        "n": float(n),
        "estimate": total / n,
        "variance_of_observation_under_model": total / n,
        "variance_of_mle_under_model": total / (n * n),
        "variance_estimate_under_model": total / (n * n),
        "boundary_supremum_at_zero": float(total == 0),
    }


def beta_binomial_update(successes: int, trials: int, a: float, b: float) -> dict[str, float]:
    if (trials < 0 or int(trials) != trials or successes < 0 or int(successes) != successes
            or successes > trials or a <= 0 or b <= 0 or not math.isfinite(a + b)):
        raise ValueError("require 0 <= successes <= trials and positive finite Beta parameters")
    ap, bp = a + successes, b + trials - successes
    return {
        "posterior_a": ap, "posterior_b": bp,
        "posterior_mean": ap / (ap + bp),
        "posterior_variance": ap * bp / ((ap + bp) ** 2 * (ap + bp + 1)),
        "predictive_success_probability": ap / (ap + bp),
    }


def bootstrap_mean_interval(
    values: Sequence[float], repetitions: int = 5000, alpha: float = 0.05, seed: int = 20261121
) -> tuple[float, float]:
    x = _finite(values)
    if repetitions < 100 or int(repetitions) != repetitions or not 0 < alpha < 1:
        raise ValueError("require repetitions >= 100 and alpha in (0, 1)")
    rng = random.Random(seed)
    n = len(x)
    means = [sum(rng.choices(x, k=n)) / n for _ in range(repetitions)]
    means.sort()
    def q(p: float) -> float:
        h = (len(means) - 1) * p
        lo, hi = math.floor(h), math.ceil(h)
        return means[lo] + (h - lo) * (means[hi] - means[lo])
    return q(alpha / 2), q(1 - alpha / 2)


def permutation_mean_difference(
    group_a: Sequence[float], group_b: Sequence[float], repetitions: int = 9999,
    seed: int = 20261121
) -> dict[str, float]:
    """Monte-Carlo two-sided label permutation test under exchangeability."""
    a, b = _finite(group_a), _finite(group_b)
    if repetitions < 99 or int(repetitions) != repetitions:
        raise ValueError("require at least 99 permutations")
    pooled = a + b
    n_a = len(a)
    observed = sum(a) / len(a) - sum(b) / len(b)
    rng = random.Random(seed)
    extreme = 0
    for _ in range(repetitions):
        perm = rng.sample(pooled, len(pooled))
        diff = sum(perm[:n_a]) / n_a - sum(perm[n_a:]) / (len(perm) - n_a)
        if abs(diff) >= abs(observed) - 1e-15:
            extreme += 1
    p_mc = (extreme + 1) / (repetitions + 1)
    return {"observed_difference": observed, "extreme": float(extreme),
            "repetitions": float(repetitions), "p_value_mc": p_mc,
            "mc_se_approx": math.sqrt(p_mc * (1 - p_mc) / (repetitions + 1))}


def one_sample_z_power(n: int, effect: float, sigma: float, alpha: float = 0.05) -> float:
    if n < 1 or effect < 0 or sigma <= 0 or not 0 < alpha < 1:
        raise ValueError("invalid z-test power inputs")
    nd = NormalDist()
    critical = nd.inv_cdf(1 - alpha / 2)
    shift = effect * math.sqrt(n) / sigma
    return 1 - nd.cdf(critical - shift) + nd.cdf(-critical - shift)


def z_test_sample_size(effect: float, sigma: float, alpha: float = 0.05,
                       target_power: float = 0.80) -> int:
    if effect <= 0 or sigma <= 0 or not 0 < alpha < 1 or not 0 < target_power < 1:
        raise ValueError("invalid sample-size inputs")
    nd = NormalDist()
    z_alpha = nd.inv_cdf(1 - alpha / 2)
    z_beta = nd.inv_cdf(target_power)
    return math.ceil(((z_alpha + z_beta) * sigma / effect) ** 2)


def main() -> None:
    print("Wilson 95%:", wilson_interval(7, 10))
    print("Exact binomial p-value:", exact_binomial_pvalue(7, 10, 0.5))
    print("Poisson MLE:", poisson_mle([0, 1, 2, 1, 3, 2]))
    print("Beta-Binomial:", beta_binomial_update(7, 10, 1, 1))
    print("Bootstrap mean CI:", bootstrap_mean_interval([2, 3, 4, 5, 8]))
    print("Permutation:", permutation_mean_difference([1, 2, 3], [4, 5, 6]))
    print("z-test n:", z_test_sample_size(3, 10))


if __name__ == "__main__":
    main()
