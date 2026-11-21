import math
import unittest

from labs.b10.descriptive_lab import (
    audit_records, descriptive_summary, ecdf, hajek_mean,
    histogram_density, horvitz_thompson_total, missingness_summary,
    pearson_correlation, quantile_type7, row_proportions,
    simpson_example, srs_mean_variance,
)


class DescriptiveLabTests(unittest.TestCase):
    def test_summary_and_type7_quantiles(self):
        x = [2, 3, 3, 7, 10]
        s = descriptive_summary(x)
        self.assertEqual(s["mean"], 5)
        self.assertEqual(s["median"], 3)
        self.assertEqual(s["variance_n"], 9.2)
        self.assertEqual(s["variance_n1"], 11.5)
        self.assertEqual(s["iqr"], 4)
        self.assertEqual(quantile_type7([1, 2, 3, 4], .25), 1.75)

    def test_robust_summary_and_cv_guard(self):
        s = descriptive_summary([1, 2, 2, 3, 100])
        self.assertEqual(s["median"], 2)
        self.assertEqual(s["mad_raw"], 1)
        self.assertIsNone(descriptive_summary([-1, 0, 1])["cv_sample"])
        self.assertIsNone(descriptive_summary([-3, -2, -1])["cv_sample"])
        self.assertIsNone(descriptive_summary([1, 2, 3], ratio_scale=False)["cv_sample"])

    def test_ecdf(self):
        self.assertEqual(ecdf([1, 2, 2, 4], [0, 2, 4]), [(0.0, 0.0), (2.0, .75), (4.0, 1.0)])

    def test_unequal_width_histogram_uses_density(self):
        h = histogram_density([1, 2, 3, 7, 10], [0, 5, 12])
        self.assertAlmostEqual(h[0]["density"], 3 / 25)
        self.assertAlmostEqual(h[1]["density"], 2 / 35)
        self.assertAlmostEqual(sum(row["density"] * (row["right"] - row["left"]) for row in h), 1)

    def test_data_quality_audit(self):
        rows = [
            {"id": "a", "age": 30, "amount": 100},
            {"id": "a", "age": None, "amount": -2},
            {"id": "c", "age": "bad", "amount": 40},
        ]
        audit = audit_records(rows, "id", ["age", "amount"], {"amount": (0, 1000)})
        self.assertEqual(audit["duplicate_keys"], ["a"])
        self.assertEqual(audit["missing_by_field"]["age"], 1)
        self.assertEqual(audit["invalid_numeric"]["amount"], 0)
        self.assertEqual(audit["out_of_range"]["amount"], 1)

    def test_survey_estimators_and_fpc(self):
        self.assertEqual(horvitz_thompson_total([10, 20, 30], [.5, .25, .1]), 400)
        self.assertAlmostEqual(hajek_mean([10, 20, 30], [.5, .25, .1]), 400 / 16)
        self.assertAlmostEqual(srs_mean_variance([10, 20, 30, 40, 50], 2), 75)

    def test_correlation_and_row_proportions(self):
        self.assertAlmostEqual(pearson_correlation([1, 2, 3], [2, 4, 6]), 1)
        proportions = row_proportions({"g": {"yes": 3, "no": 1}})
        self.assertEqual(proportions["g"]["yes"], .75)

    def test_simpson_reversal(self):
        result = simpson_example()
        self.assertGreater(result["stratum_1"]["rate_A"], result["stratum_1"]["rate_B"])
        self.assertGreater(result["stratum_2"]["rate_A"], result["stratum_2"]["rate_B"])
        self.assertLess(result["aggregate"]["rate_A"], result["aggregate"]["rate_B"])

    def test_missingness_rates_include_none_and_nan(self):
        result = missingness_summary([{"x": 1}, {"x": None}, {"x": float('nan')}, {"x": 3}], ["x"])
        self.assertEqual(result["x"]["missing"], 2.0)
        self.assertEqual(result["x"]["observed"], 2.0)
        self.assertAlmostEqual(result["x"]["missing_rate"], .5)

    def test_quality_audit_treats_nan_as_missing_not_invalid_numeric(self):
        rows = [{"id": "a", "amount": float('nan')}, {"id": "b", "amount": 5}]
        audit = audit_records(rows, "id", ["amount"], {"amount": (0, 10)})
        self.assertEqual(audit["missing_by_field"]["amount"], 1)
        self.assertEqual(audit["invalid_numeric"]["amount"], 0)

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            quantile_type7([], .5)
        with self.assertRaises(ValueError):
            histogram_density([1, 2], [0, 2, 1])
        with self.assertRaises(ValueError):
            horvitz_thompson_total([1], [0])
        with self.assertRaises(ValueError):
            pearson_correlation([1, 1], [2, 3])


if __name__ == "__main__":
    unittest.main()
