"""Didactic data-quality and ingestion primitives for Programme B17.

Standard-library only. These functions are intentionally small and auditable;
they are not a production orchestration or database framework.
"""
from __future__ import annotations

from collections import Counter
from datetime import date, datetime, timezone
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


def _timestamp_sort_key(value: Any) -> datetime:
    """Parse an ISO date or timezone-aware ISO 8601 timestamp and normalize to UTC.

    Date-only values are interpreted as midnight UTC. Datetimes must carry an
    explicit UTC offset; naive local times are rejected as ambiguous.
    """
    if isinstance(value, datetime):
        parsed = value
    elif isinstance(value, date):
        parsed = datetime.combine(value, datetime.min.time(), tzinfo=timezone.utc)
    elif isinstance(value, str):
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        if parsed.tzinfo is None:
            if len(value) == 10:
                parsed = parsed.replace(tzinfo=timezone.utc)
            else:
                raise ValueError("datetime timestamps must include an explicit UTC offset")
    else:
        raise TypeError("updated_at must be an ISO date, ISO 8601 string, date, or datetime")
    if parsed.tzinfo is None:
        raise ValueError("datetime timestamps must include an explicit UTC offset")
    return parsed.astimezone(timezone.utc)


def idempotent_upsert(
    existing: Sequence[Mapping[str, Any]],
    incoming: Sequence[Mapping[str, Any]],
    key: str,
    updated_at: str,
) -> list[dict[str, Any]]:
    """Merge by key using chronological timestamps; ties favour later input rows.

    ISO date-only values mean midnight UTC. Datetimes require an explicit offset
    and are compared as instants in UTC. Missing keys/timestamps are rejected.
    """
    merged: dict[Any, tuple[datetime, dict[str, Any]]] = {}
    for source, rows in (("existing", existing), ("incoming", incoming)):
        for row in rows:
            if row.get(key) is None or row.get(updated_at) is None:
                raise ValueError(f"{source} record requires non-null {key!r} and {updated_at!r}")
            timestamp = _timestamp_sort_key(row[updated_at])
            current = merged.get(row[key])
            if current is None or timestamp >= current[0]:
                merged[row[key]] = (timestamp, dict(row))
    return [merged[k][1] for k in sorted(merged, key=lambda value: str(value))]


def reconcile_totals(
    source: Iterable[Mapping[str, Any]],
    target: Iterable[Mapping[str, Any]],
    amount_field: str,
) -> dict[str, Any]:
    """Compare row counts and exact Python numeric totals (no implicit rounding)."""
    left, right = list(source), list(target)
    def is_missing(value: Any) -> bool:
        if value is None:
            return True
        try:
            return bool(value != value)  # catches NaN without a pandas dependency
        except (TypeError, ValueError):
            return False

    source_values = [row.get(amount_field) for row in left]
    target_values = [row.get(amount_field) for row in right]
    source_missing = sum(amount_field not in row or is_missing(row.get(amount_field)) for row in left)
    target_missing = sum(amount_field not in row or is_missing(row.get(amount_field)) for row in right)
    left_total = sum((value for value in source_values if not is_missing(value)), 0)
    right_total = sum((value for value in target_values if not is_missing(value)), 0)
    return {
        "source_count": len(left),
        "target_count": len(right),
        "source_total": left_total,
        "target_total": right_total,
        "source_missing_amount_count": source_missing,
        "target_missing_amount_count": target_missing,
        "count_match": len(left) == len(right),
        "total_match": source_missing == 0 and target_missing == 0 and left_total == right_total,
    }


def dataset_fingerprint(rows: Sequence[Mapping[str, Any]]) -> str:
    """Hash canonical JSON rows; callers must define stable row ordering."""
    payload = json.dumps(list(rows), sort_keys=True, separators=(",", ":"), default=str)
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def month_partition(value: str) -> str:
    """Return YYYY-MM for an ISO date/datetime string."""
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00")) if "T" in value else date.fromisoformat(value)
    return parsed.strftime("%Y-%m")
