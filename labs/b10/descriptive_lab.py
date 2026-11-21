"""B10 descriptive statistics and sampling laboratory (Python standard library only)."""
from __future__ import annotations

import math
from collections import Counter
from typing import Iterable, Mapping, Sequence


def _nonempty(values: Sequence[float]) -> list[float]:
    x = [float(v) for v in values]
    if not x or any(not math.isfinite(v) for v in x):
        raise ValueError("values must be non-empty and finite")
    return x


def quantile_type7(values: Sequence[float], p: float) -> float:
    """R's default type-7 sample quantile convention."""
    x = sorted(_nonempty(values))
    if not 0 <= p <= 1:
        raise ValueError("p must be in [0, 1]")
    h = (len(x) - 1) * p
    lo = math.floor(h)
    hi = math.ceil(h)
    return x[lo] + (h - lo) * (x[hi] - x[lo])


def descriptive_summary(values: Sequence[float], ratio_scale: bool = True) -> dict[str, float | None]:
    x = _nonempty(values)
    n = len(x)
    mean = sum(x) / n
    ordered = sorted(x)
    median = quantile_type7(x, 0.5)
    q1, q3 = quantile_type7(x, 0.25), quantile_type7(x, 0.75)
    var_n = sum((v - mean) ** 2 for v in x) / n
    var_n1 = sum((v - mean) ** 2 for v in x) / (n - 1) if n > 1 else None
    mad = quantile_type7([abs(v - median) for v in x], 0.5)
    cv = math.sqrt(var_n1) / abs(mean) if ratio_scale and n > 1 and mean != 0 else None
    return {
        "n": float(n), "mean": mean, "median": median, "minimum": ordered[0],
        "q1": q1, "q3": q3, "iqr": q3 - q1, "maximum": ordered[-1],
        "range": ordered[-1] - ordered[0], "variance_n": var_n,
        "variance_n1": var_n1, "sd_n": math.sqrt(var_n),
        "mad_raw": mad, "mad_normal_scaled": 1.4826 * mad,
        "cv_sample": cv,
    }


def ecdf(values: Sequence[float], grid: Sequence[float]) -> list[tuple[float, float]]:
    x = sorted(_nonempty(values))
    return [(float(t), sum(v <= t for v in x) / len(x)) for t in grid]


def histogram_density(values: Sequence[float], breaks: Sequence[float]) -> list[dict[str, float]]:
    x = _nonempty(values)
    b = [float(v) for v in breaks]
    if len(b) < 2 or any(not math.isfinite(v) for v in b) or any(b[i] >= b[i + 1] for i in range(len(b) - 1)):
        raise ValueError("breaks must be finite and strictly increasing")
    if min(x) < b[0] or max(x) > b[-1]:
        raise ValueError("breaks must cover all observations")
    counts = [0] * (len(b) - 1)
    for value in x:
        idx = len(counts) - 1 if value == b[-1] else next(i for i in range(len(counts)) if b[i] <= value < b[i + 1])
        counts[idx] += 1
    return [
        {"left": b[i], "right": b[i + 1], "count": float(counts[i]),
         "frequency": counts[i] / len(x), "density": counts[i] / (len(x) * (b[i + 1] - b[i]))}
        for i in range(len(counts))
    ]


def audit_records(
    records: Sequence[Mapping[str, object]],
    key: str,
    required: Sequence[str],
    numeric_ranges: Mapping[str, tuple[float, float]] | None = None,
) -> dict[str, object]:
    """Audit missing fields, duplicate keys, invalid numerics and range violations."""
    numeric_ranges = numeric_ranges or {}
    missing = {field: sum(r.get(field) is None for r in records) for field in required}
    keys = [r.get(key) for r in records if r.get(key) is not None]
    duplicates = sorted(str(k) for k, count in Counter(keys).items() if count > 1)
    invalid_numeric: dict[str, int] = {}
    out_of_range: dict[str, int] = {}
    for field, (lower, upper) in numeric_ranges.items():
        invalid = 0
        outside = 0
        for row in records:
            value = row.get(field)
            if value is None:
                continue
            try:
                number = float(value)
                if not math.isfinite(number):
                    raise ValueError
            except (TypeError, ValueError):
                invalid += 1
                continue
            if number < lower or number > upper:
                outside += 1
        invalid_numeric[field] = invalid
        out_of_range[field] = outside
    return {
        "rows": len(records), "missing_by_field": missing,
        "duplicate_keys": duplicates, "invalid_numeric": invalid_numeric,
        "out_of_range": out_of_range,
    }


def horvitz_thompson_total(values: Sequence[float], inclusion_probabilities: Sequence[float]) -> float:
    if len(values) != len(inclusion_probabilities) or not values:
        raise ValueError("values and inclusion probabilities must have equal non-zero length")
    if any(not math.isfinite(float(y)) for y in values) or any(not 0 < float(p) <= 1 for p in inclusion_probabilities):
        raise ValueError("values must be finite and inclusion probabilities in (0, 1]")
    return sum(float(y) / float(p) for y, p in zip(values, inclusion_probabilities))


def hajek_mean(values: Sequence[float], inclusion_probabilities: Sequence[float]) -> float:
    if len(values) != len(inclusion_probabilities) or not values:
        raise ValueError("values and inclusion probabilities must have equal non-zero length")
    if any(not math.isfinite(float(y)) for y in values) or any(not 0 < float(p) <= 1 for p in inclusion_probabilities):
        raise ValueError("values must be finite and inclusion probabilities in (0, 1]")
    weights = [1 / float(p) for p in inclusion_probabilities]
    return sum(w * float(y) for w, y in zip(weights, values)) / sum(weights)


def srs_mean_variance(population_values: Sequence[float], sample_size: int) -> float:
    """Design variance of the SRSWOR sample mean using S² with denominator N-1."""
    x = _nonempty(population_values)
    N = len(x)
    if N < 2 or not 1 <= sample_size <= N:
        raise ValueError("require population size >= 2 and 1 <= sample_size <= N")
    mean = sum(x) / N
    S2 = sum((v - mean) ** 2 for v in x) / (N - 1)
    return (1 - sample_size / N) * S2 / sample_size


def pearson_correlation(x: Sequence[float], y: Sequence[float]) -> float:
    a, b = _nonempty(x), _nonempty(y)
    if len(a) != len(b) or len(a) < 2:
        raise ValueError("x and y must have equal length >= 2")
    ma, mb = sum(a) / len(a), sum(b) / len(b)
    va = sum((v - ma) ** 2 for v in a)
    vb = sum((v - mb) ** 2 for v in b)
    if va == 0 or vb == 0:
        raise ValueError("correlation is undefined for a constant variable")
    return sum((u - ma) * (v - mb) for u, v in zip(a, b)) / math.sqrt(va * vb)


def row_proportions(table: Mapping[str, Mapping[str, int]]) -> dict[str, dict[str, float]]:
    result: dict[str, dict[str, float]] = {}
    for row, cells in table.items():
        if any(value < 0 for value in cells.values()):
            raise ValueError("cell counts must be non-negative")
        total = sum(cells.values())
        if total <= 0:
            raise ValueError("each row must have positive total")
        result[row] = {col: value / total for col, value in cells.items()}
    return result


def simpson_example() -> dict[str, dict[str, float]]:
    """Classic two-stratum reversal: A wins in both strata but loses overall."""
    counts = {
        "stratum_1": {"A_success": 81, "A_total": 87, "B_success": 234, "B_total": 270},
        "stratum_2": {"A_success": 192, "A_total": 263, "B_success": 55, "B_total": 80},
    }
    result: dict[str, dict[str, float]] = {}
    for name, c in counts.items():
        result[name] = {
            "rate_A": c["A_success"] / c["A_total"],
            "rate_B": c["B_success"] / c["B_total"],
        }
    a_rate = (81 + 192) / (87 + 263)
    b_rate = (234 + 55) / (270 + 80)
    result["aggregate"] = {"rate_A": a_rate, "rate_B": b_rate}
    return result


def missingness_summary(records: Sequence[Mapping[str, object]], fields: Sequence[str]) -> dict[str, dict[str, float]]:
    if not records:
        raise ValueError("records must be non-empty")
    return {
        field: {
            "missing": float(sum(row.get(field) is None for row in records)),
            "observed": float(sum(row.get(field) is not None for row in records)),
            "missing_rate": sum(row.get(field) is None for row in records) / len(records),
        }
        for field in fields
    }


if __name__ == "__main__":
    example = [1, 2, 2, 3, 100]
    print("Descriptive summary:", descriptive_summary(example))
    print("Unequal-width histogram:", histogram_density([1, 2, 3, 7, 10], [0, 5, 12]))
    print("SRS mean variance:", srs_mean_variance([10, 20, 30, 40, 50], 2))
    print("Simpson example:", simpson_example())
