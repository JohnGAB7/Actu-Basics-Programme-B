"""Small, dependency-free teaching utilities for Programme B / B16.

These routines are intentionally transparent reference implementations, not a
replacement for validated forecasting libraries or production risk systems.
"""
from __future__ import annotations

from math import sqrt
from typing import Sequence


def difference(values: Sequence[float], lag: int = 1) -> list[float]:
    if lag < 1 or lag >= len(values):
        raise ValueError("lag must be between 1 and len(values)-1")
    return [values[i] - values[i - lag] for i in range(lag, len(values))]


def autocorrelation(values: Sequence[float], max_lag: int) -> list[float]:
    n = len(values)
    if n < 2 or max_lag < 0 or max_lag >= n:
        raise ValueError("require n >= 2 and 0 <= max_lag < n")
    mean = sum(values) / n
    centered = [x - mean for x in values]
    denom = sum(x * x for x in centered)
    if denom == 0:
        raise ValueError("autocorrelation undefined for a constant series")
    return [
        sum(centered[t] * centered[t - lag] for t in range(lag, n)) / denom
        for lag in range(max_lag + 1)
    ]


def ar1_forecast(last_value: float, phi: float, horizon: int, intercept: float = 0.0) -> list[float]:
    if horizon < 1:
        raise ValueError("horizon must be positive")
    forecasts = []
    value = last_value
    for _ in range(horizon):
        value = intercept + phi * value
        forecasts.append(value)
    return forecasts


def forecast_errors(actual: Sequence[float], predicted: Sequence[float]) -> dict[str, float]:
    if len(actual) == 0 or len(actual) != len(predicted):
        raise ValueError("actual and predicted must have equal positive length")
    errors = [a - p for a, p in zip(actual, predicted)]
    return {
        "mae": sum(abs(e) for e in errors) / len(errors),
        "rmse": sqrt(sum(e * e for e in errors) / len(errors)),
    }


def mase(actual: Sequence[float], predicted: Sequence[float], training: Sequence[float], seasonality: int = 1) -> float:
    if seasonality < 1 or len(training) <= seasonality:
        raise ValueError("training must contain more observations than seasonality")
    scale = sum(abs(training[i] - training[i - seasonality])
                for i in range(seasonality, len(training))) / (len(training) - seasonality)
    if scale == 0:
        raise ValueError("MASE undefined when the naive training scale is zero")
    return forecast_errors(actual, predicted)["mae"] / scale


def rolling_origin_splits(n: int, initial: int, horizon: int, step: int = 1):
    """Yield (train_end_exclusive, test_start, test_end_exclusive) indices."""
    if initial < 2 or horizon < 1 or step < 1 or initial + horizon > n:
        raise ValueError("invalid rolling-origin dimensions")
    origin = initial
    while origin + horizon <= n:
        yield (origin, origin, origin + horizon)
        origin += step


def garch11_variance(
    residuals: Sequence[float], omega: float, alpha: float, beta: float, initial_variance: float
) -> list[float]:
    if omega <= 0 or alpha < 0 or beta < 0 or initial_variance <= 0:
        raise ValueError("require omega > 0, alpha,beta >= 0 and positive initial variance")
    variance = initial_variance
    output = []
    for eps in residuals:
        variance = omega + alpha * eps * eps + beta * variance
        output.append(variance)
    return output


def kalman_scalar_filter(
    observations: Sequence[float],
    transition: float,
    observation_loading: float,
    process_variance: float,
    observation_variance: float,
    initial_state: float,
    initial_variance: float,
) -> list[tuple[float, float]]:
    """Scalar linear-Gaussian Kalman filter; None observations skip updates."""
    if process_variance < 0 or observation_variance <= 0 or initial_variance < 0:
        raise ValueError("invalid variance parameter")
    state, variance = initial_state, initial_variance
    filtered = []
    for obs in observations:
        pred_state = transition * state
        pred_var = transition * transition * variance + process_variance
        if obs is None:
            state, variance = pred_state, pred_var
        else:
            innovation_var = observation_loading**2 * pred_var + observation_variance
            gain = pred_var * observation_loading / innovation_var
            state = pred_state + gain * (obs - observation_loading * pred_state)
            variance = (1.0 - gain * observation_loading) * pred_var
        filtered.append((state, variance))
    return filtered
