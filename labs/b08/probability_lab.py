"""Reproducible B08 probability experiments (Python standard library only)."""
from __future__ import annotations

import json
import math
import random
from statistics import mean, pstdev


SEED = 20261121


def bayes_positive(prevalence: float, sensitivity: float, specificity: float) -> float:
    """P(condition | positive test), with validated probability inputs."""
    values = (prevalence, sensitivity, specificity)
    if any(not 0.0 <= value <= 1.0 for value in values):
        raise ValueError("All inputs must be probabilities in [0, 1].")
    positive_probability = sensitivity * prevalence + (1.0 - specificity) * (1.0 - prevalence)
    if positive_probability == 0.0:
        raise ValueError("The positive-test event has probability zero.")
    return sensitivity * prevalence / positive_probability


def simulate_bernoulli_frequency(p: float, n: int, seed: int = SEED) -> float:
    if not 0.0 <= p <= 1.0 or n <= 0:
        raise ValueError("Require p in [0, 1] and n > 0.")
    rng = random.Random(seed)
    return sum(rng.random() < p for _ in range(n)) / n



def simulate_common_laws(n: int = 100_000, seed: int = SEED + 4) -> dict[str, float]:
    """Empirical moments for Bernoulli, exponential(rate=2), and standard normal."""
    if n <= 1:
        raise ValueError("n must be greater than one.")
    rng = random.Random(seed)
    bernoulli = [float(rng.random() < 0.30) for _ in range(n)]
    exponential = [rng.expovariate(2.0) for _ in range(n)]
    normal = [rng.gauss(0.0, 1.0) for _ in range(n)]
    return {
        "bernoulli_mean": mean(bernoulli),
        "bernoulli_variance": pstdev(bernoulli) ** 2,
        "bernoulli_theoretical_mean": 0.30,
        "bernoulli_theoretical_variance": 0.21,
        "exponential_mean": mean(exponential),
        "exponential_theoretical_mean": 0.50,
        "normal_mean": mean(normal),
        "normal_variance": pstdev(normal) ** 2,
        "normal_theoretical_mean": 0.0,
        "normal_theoretical_variance": 1.0,
    }

def dependent_zero_covariance() -> dict[str, float]:
    """A finite symmetric example: X and X² are dependent but uncorrelated."""
    x_values = (-2.0, -1.0, 1.0, 2.0)
    y_values = tuple(x * x for x in x_values)
    mx, my = mean(x_values), mean(y_values)
    covariance = mean((x - mx) * (y - my) for x, y in zip(x_values, y_values))
    return {"mean_x": mx, "mean_y": my, "covariance": covariance}


def simulate_lln(p: float = 0.30, n: int = 100_000, seed: int = SEED + 1) -> dict[str, float]:
    if not 0.0 <= p <= 1.0 or n <= 0:
        raise ValueError("Require p in [0, 1] and n > 0.")
    rng = random.Random(seed)
    total = 0
    checkpoints = {max(1, n // 100), max(1, n // 10), n}
    path: dict[str, float] = {}
    for i in range(1, n + 1):
        total += rng.random() < p
        if i in checkpoints:
            path[str(i)] = total / i
    return {"theoretical_mean": p, "final_mean": total / n, **{f"mean_at_{k}": v for k, v in path.items()}}


def simulate_clt(repetitions: int = 10_000, sample_size: int = 40, seed: int = SEED + 2) -> dict[str, float]:
    """Standardized means of Exp(rate=1), whose population mean and SD are 1."""
    if repetitions <= 0 or sample_size <= 0:
        raise ValueError("repetitions and sample_size must be positive.")
    rng = random.Random(seed)
    standardized_means = []
    for _ in range(repetitions):
        sample_mean = sum(rng.expovariate(1.0) for _ in range(sample_size)) / sample_size
        standardized_means.append(math.sqrt(sample_size) * (sample_mean - 1.0))
    return {
        "repetitions": float(repetitions),
        "sample_size": float(sample_size),
        "empirical_mean": mean(standardized_means),
        "empirical_sd": pstdev(standardized_means),
        "fraction_within_1_96": sum(abs(z) <= 1.96 for z in standardized_means) / repetitions,
        "normal_reference_95pct": 0.95,
    }


def poisson_count(rate: float, rng: random.Random) -> int:
    """Knuth algorithm; appropriate here for the small illustrative rate."""
    if rate < 0.0:
        raise ValueError("Poisson rate must be nonnegative.")
    if rate == 0.0:
        return 0
    threshold = math.exp(-rate)
    product = 1.0
    count = 0
    while product > threshold:
        count += 1
        product *= rng.random()
    return count - 1


def simulate_compound_poisson(
    exposures: int = 100_000,
    annual_frequency: float = 0.12,
    mean_severity: float = 800.0,
    seed: int = SEED + 3,
) -> dict[str, float]:
    """Aggregate claims for homogeneous independent exposure units."""
    if exposures <= 0 or annual_frequency < 0.0 or mean_severity <= 0.0:
        raise ValueError("Invalid portfolio parameters.")
    rng = random.Random(seed)
    total_claims = 0
    aggregate = 0.0
    for _ in range(exposures):
        count = poisson_count(annual_frequency, rng)
        total_claims += count
        for _ in range(count):
            aggregate += rng.expovariate(1.0 / mean_severity)
    return {
        "exposures": float(exposures),
        "claim_count": float(total_claims),
        "claim_frequency": total_claims / exposures,
        "aggregate_claims": aggregate,
        "aggregate_per_exposure": aggregate / exposures,
        "theoretical_frequency": annual_frequency,
        "theoretical_pure_premium": annual_frequency * mean_severity,
    }


def run_all() -> dict[str, object]:
    return {
        "seed": SEED,
        "E01_empirical_frequency": simulate_bernoulli_frequency(0.20, 100_000),
        "E02_bayes_positive": bayes_positive(0.01, 0.95, 0.90),
        "E03_common_laws": simulate_common_laws(),
        "E04_uncorrelated_dependent": dependent_zero_covariance(),
        "E05_law_of_large_numbers": simulate_lln(),
        "E06_central_limit_theorem": simulate_clt(),
        "E07_compound_poisson_portfolio": simulate_compound_poisson(),
    }


if __name__ == "__main__":
    print(json.dumps(run_all(), indent=2, ensure_ascii=False))
