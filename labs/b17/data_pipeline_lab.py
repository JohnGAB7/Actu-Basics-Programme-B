"""Didactic data-quality and ingestion primitives for Programme B17.

Standard-library only. These functions are intentionally small and auditable;
they are not a production orchestration or database framework.
"""
from __future__ import annotations

from collections import Counter
from datetime import date, datetime
import hashlib
import json
from typing import Any, Iterable, Mapping, Sequence


def validate_required_fields(rows: Sequence[Mapping[str, Any]], required: Sequence[str]) -> list[dict[str, Any]]:
    """Return row-indexed missing-field and null-value violations."""
    issues = []
    for index, row in enumerate(rows):
        for field in required:
            if field not in row:
                issues.append({"row": index, "field": field, "issue": "missing_field"})
            elif row[field] is None:
                issues.append({"row": index, "field": field, "issue": "null_value"})
    return issues


def duplicate_keys(rows: Sequence[Mapping[str, Any]], key: str) -> list[Any]:
    """Return duplicate key values in first-seen order; null keys are invalid."""
    values = [row.get(key) for row in rows]
    counts = Counter(values)
    return [value for value, count in counts.items() if count > 1]


def foreign_key_violations(
    child_rows: Sequence[Mapping[str, Any]],
    child_key: str,
    parent_rows: Sequence[Mapping[str, Any]],
    parent_key: str,
) -> list[dict[str, Any]]:
    parent_values = {row.get(parent_key) for row in parent_rows}
    return [
        {"row": i, "value": row.get(child_key)}
        for i, row in enumerate(child_rows)
        if row.get(child_key) is not None and row.get(child_key) not in parent_values
    ]


def idempotent_upsert(
    existing: Sequence[Mapping[str, Any]],
    incoming: Sequence[Mapping[str, Any]],
    key: str,
    updated_at: str,
) -> list[dict[str, Any]]:
    """Merge records by key, keeping the latest timestamp; ties favour incoming.

    Records are returned in deterministic key order. A missing key or timestamp
    is rejected rather than silently creating an ambiguous record.
    """
    merged: dict[Any, dict[str, Any]] = {}
    for source, rows in (("existing", existing), ("incoming", incoming)):
        for row in rows:
            if row.get(key) is None or row.get(updated_at) is None:
                raise ValueError(f"{source} record requires non-null {key!r} and {updated_at!r}")
            current = merged.get(row[key])
            if current is None or str(row[updated_at]) >= str(current[updated_at]):
                merged[row[key]] = dict(row)
    return [merged[k] for k in sorted(merged, key=lambda value: str(value))]


def reconcile_totals(
    source: Iterable[Mapping[str, Any]],
    target: Iterable[Mapping[str, Any]],
    amount_field: str,
) -> dict[str, Any]:
    """Compare row counts and exact Python numeric totals (no implicit rounding)."""
    left, right = list(source), list(target)
    left_total = sum((row.get(amount_field) or 0 for row in left), 0)
    right_total = sum((row.get(amount_field) or 0 for row in right), 0)
    return {
        "source_count": len(left),
        "target_count": len(right),
        "source_total": left_total,
        "target_total": right_total,
        "count_match": len(left) == len(right),
        "total_match": left_total == right_total,
    }


def dataset_fingerprint(rows: Sequence[Mapping[str, Any]]) -> str:
    """Hash canonical JSON rows; callers must define stable row ordering."""
    payload = json.dumps(list(rows), sort_keys=True, separators=(",", ":"), default=str)
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def month_partition(value: str) -> str:
    """Return YYYY-MM for an ISO date/datetime string."""
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00")) if "T" in value else date.fromisoformat(value)
    return parsed.strftime("%Y-%m")
