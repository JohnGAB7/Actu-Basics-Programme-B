import unittest

from labs.b17.data_pipeline_lab import (
    dataset_fingerprint,
    duplicate_keys,
    foreign_key_violations,
    idempotent_upsert,
    month_partition,
    reconcile_totals,
    validate_required_fields,
)


class DataPipelineLabTests(unittest.TestCase):
    def test_required_fields_reports_missing_and_null(self):
        rows = [{"id": 1, "amount": None}, {"id": 2}]
        issues = validate_required_fields(rows, ["id", "amount"])
        self.assertEqual(
            issues,
            [
                {"row": 0, "field": "amount", "issue": "null_value"},
                {"row": 1, "field": "amount", "issue": "missing_field"},
            ],
        )

    def test_duplicate_keys_and_foreign_keys(self):
        self.assertEqual(duplicate_keys([{"id": 1}, {"id": 2}, {"id": 1}], "id"), [1])
        bad = foreign_key_violations(
            [{"policy_id": 10}, {"policy_id": 99}, {"policy_id": None}],
            "policy_id",
            [{"id": 10}],
            "id",
        )
        self.assertEqual(bad, [{"row": 1, "value": 99}])

    def test_upsert_is_idempotent_and_latest_wins(self):
        existing = [{"id": "A", "updated": "2026-01-01", "amount": 10}]
        incoming = [
            {"id": "A", "updated": "2026-02-01", "amount": 12},
            {"id": "B", "updated": "2026-02-01", "amount": 7},
        ]
        once = idempotent_upsert(existing, incoming, "id", "updated")
        twice = idempotent_upsert(once, incoming, "id", "updated")
        self.assertEqual(once, twice)
        self.assertEqual(once[0]["amount"], 12)

    def test_upsert_orders_timezone_aware_timestamps_chronologically(self):
        existing = [{"id": "A", "updated": "2026-01-01T00:30:00+01:00", "amount": 1}]
        incoming = [{"id": "A", "updated": "2025-12-31T23:45:00Z", "amount": 2}]
        self.assertEqual(idempotent_upsert(existing, incoming, "id", "updated")[0]["amount"], 2)

    def test_upsert_rejects_naive_datetime_timestamps(self):
        with self.assertRaises(ValueError):
            idempotent_upsert([], [{"id": "A", "updated": "2026-01-01T10:00:00"}], "id", "updated")

    def test_upsert_rejects_ambiguous_records(self):
        with self.assertRaises(ValueError):
            idempotent_upsert([], [{"id": None, "updated": "2026-01-01"}], "id", "updated")

    def test_reconciliation_detects_count_and_amount_mismatch(self):
        result = reconcile_totals(
            [{"amount": 10}, {"amount": 5}],
            [{"amount": 10}, {"amount": 4}],
            "amount",
        )
        self.assertTrue(result["count_match"])
        self.assertFalse(result["total_match"])

    def test_reconciliation_does_not_treat_missing_amount_as_zero(self):
        result = reconcile_totals(
            [{"amount": 10}, {"amount": None}],
            [{"amount": 10}, {"amount": 0}],
            "amount",
        )
        self.assertTrue(result["count_match"])
        self.assertEqual(result["source_missing_amount_count"], 1)
        self.assertFalse(result["total_match"])

    def test_fingerprint_is_stable_for_same_order(self):
        rows = [{"id": 1, "value": "x"}]
        self.assertEqual(dataset_fingerprint(rows), dataset_fingerprint(rows))
        self.assertNotEqual(dataset_fingerprint(rows), dataset_fingerprint(list(reversed(rows)) + [{"id": 2}]))

    def test_month_partition(self):
        self.assertEqual(month_partition("2026-11-21"), "2026-11")
        self.assertEqual(month_partition("2026-11-21T12:30:00+01:00"), "2026-11")


if __name__ == "__main__":
    unittest.main()
