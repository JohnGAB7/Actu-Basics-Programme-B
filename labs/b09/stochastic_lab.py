"""Reproducible stochastic-process laboratory for B09 (standard library only)."""
from __future__ import annotations

import math
import random
from typing import Sequence


def validate_transition_matrix(matrix: Sequence[Sequence[float]]) -> None:
    n = len(matrix)
    if n == 0 or any(len(row) != n for row in matrix):
        raise ValueError("transition matrix must be non-empty and square")
    for row in matrix:
        if any(value < 0 for value in row) or not math.isclose(sum(row), 1.0, abs_tol=1e-10):
            raise ValueError("each transition row must be non-negative and sum to one")


def propagate_markov(initial: Sequence[float], matrix: Sequence[Sequence[float]], steps: int) -> list[float]:
    validate_transition_matrix(matrix)
    n = len(matrix)
    if len(initial) != n or any(value < 0 for value in initial) or not math.isclose(sum(initial), 1.0, abs_tol=1e-10):
        raise ValueError("initial distribution must match the state space and sum to one")
    if steps < 0:
        raise ValueError("steps must be non-negative")
    distribution = list(initial)
    for _ in range(steps):
        distribution = [sum(distribution[i] * matrix[i][j] for i in range(n)) for j in range(n)]
    return distribution


def stationary_two_state(p01: float, p10: float) -> tuple[float, float]:
    if not (0 < p01 <= 1 and 0 < p10 <= 1):
        raise ValueError("transition probabilities must be in (0, 1]")
    total = p01 + p10
    return p10 / total, p01 / total


def absorption_one_transient(stay_probability: float) -> dict[str, float]:
    q = stay_probability
    if not 0 <= q < 1:
        raise ValueError("stay probability must be in [0, 1)")
    return {"mean_steps": 1 / (1 - q), "variance_steps": q / (1 - q) ** 2}


def simulate_poisson_arrivals(rate: float, horizon: float, rng: random.Random | None = None) -> list[float]:
    if rate <= 0 or horizon < 0:
        raise ValueError("rate must be positive and horizon non-negative")
    rng = rng or random.Random()
    arrivals: list[float] = []
    time = 0.0
    while True:
        time += rng.expovariate(rate)
        if time > horizon:
            return arrivals
        arrivals.append(time)


def poisson_pmf(k: int, mean: float) -> float:
    if k < 0 or int(k) != k or mean < 0:
        raise ValueError("k must be a non-negative integer and mean non-negative")
    return math.exp(-mean) * mean**k / math.factorial(k) if mean else float(k == 0)


def simulate_renewal_count(mean_interarrival: float, horizon: float, rng: random.Random | None = None) -> int:
    if mean_interarrival <= 0 or horizon < 0:
        raise ValueError("mean interarrival must be positive and horizon non-negative")
    rng = rng or random.Random()
    time = 0.0
    count = 0
    while True:
        time += rng.expovariate(1 / mean_interarrival)
        if time > horizon:
            return count
        count += 1


def simulate_symmetric_random_walk(steps: int, rng: random.Random | None = None) -> list[int]:
    if steps < 0:
        raise ValueError("steps must be non-negative")
    rng = rng or random.Random()
    path = [0]
    for _ in range(steps):
        path.append(path[-1] + (1 if rng.random() < 0.5 else -1))
    return path


def simulate_brownian_path(horizon: float, steps: int, rng: random.Random | None = None) -> list[float]:
    if horizon <= 0 or steps <= 0:
        raise ValueError("horizon and steps must be positive")
    rng = rng or random.Random()
    dt = horizon / steps
    path = [0.0]
    for _ in range(steps):
        path.append(path[-1] + math.sqrt(dt) * rng.gauss(0.0, 1.0))
    return path


def quadratic_variation(path: Sequence[float]) -> float:
    if len(path) < 2:
        raise ValueError("path must contain at least two points")
    return sum((path[i + 1] - path[i]) ** 2 for i in range(len(path) - 1))


def run_all(seed: int = 20261121) -> dict[str, object]:
    rng = random.Random(seed)
    matrix = [[0.8, 0.2], [0.3, 0.7]]
    return {
        "markov_after_2": propagate_markov([1.0, 0.0], matrix, 2),
        "stationary": stationary_two_state(0.2, 0.3),
        "absorption_q_075": absorption_one_transient(0.75),
        "poisson_arrivals": simulate_poisson_arrivals(4.0, 1.0, rng),
        "poisson_p0_mean_2": poisson_pmf(0, 2.0),
        "renewal_count": simulate_renewal_count(2.0, 100.0, rng),
        "random_walk": simulate_symmetric_random_walk(20, rng),
        "brownian_qv": quadratic_variation(simulate_brownian_path(1.0, 5000, rng)),
    }


if __name__ == "__main__":
    for name, value in run_all().items():
        print(f"{name}: {value}")
