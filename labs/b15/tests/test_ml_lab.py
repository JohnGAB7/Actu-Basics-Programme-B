import math
import unittest

from labs.b15.ml_lab import (
    calibration_bins, classification_metrics, gaussian_mixture_1d_em,
    group_metrics, knn_predict, ridge_lasso_1d,
)


class MachineLearningLabTests(unittest.TestCase):
    def test_ridge_and_lasso_closed_forms(self):
        ridge = ridge_lasso_1d([-1, 1], [-2, 2], alpha=0.5, method="ridge")
        lasso = ridge_lasso_1d([-1, 1], [-2, 2], alpha=0.5, method="lasso")
        self.assertAlmostEqual(ridge["slope"], 2 / 1.5)
        self.assertAlmostEqual(lasso["slope"], 1.5)
        zero = ridge_lasso_1d([-1, 1], [-0.2, 0.2], alpha=1.0, method="lasso")
        self.assertAlmostEqual(zero["slope"], 0.0)

    def test_knn_regression_and_classification(self):
        self.assertEqual(knn_predict([0, 1, 2], [0, 10, 20], [0.1], k=1), [0.0])
        self.assertEqual(knn_predict([0, 1, 2], ["a", "b", "b"], [1.1], k=2, task="classification"), ["b"])

    def test_classification_metrics(self):
        m = classification_metrics([1, 0, 1, 0], [0.9, 0.8, 0.4, 0.1], 0.5)
        self.assertEqual((m["tp"], m["fp"], m["tn"], m["fn"]), (1.0, 1.0, 1.0, 1.0))
        self.assertAlmostEqual(m["accuracy"], 0.5)
        self.assertAlmostEqual(m["brier"], 0.255)

    def test_calibration_bins_and_group_metrics(self):
        y = [1, 0, 1, 0, 1, 0]
        p = [0.9, 0.8, 0.7, 0.2, 0.6, 0.1]
        cal = calibration_bins(y, p, 3)
        self.assertTrue(0 <= cal["ece"] <= 1)
        groups = group_metrics(y, p, ["A", "A", "A", "B", "B", "B"], 0.5)
        self.assertEqual(set(groups), {"A", "B"})
        self.assertIn("selection_rate", groups["A"])

    def test_gaussian_mixture_em(self):
        x = [-2.2, -2.0, -1.8, -2.1, -1.9, 1.8, 2.0, 2.2, 1.9, 2.1]
        fit = gaussian_mixture_1d_em(x, 2)
        self.assertAlmostEqual(sum(fit["weights"]), 1.0)
        self.assertLess(fit["means"][0], -1.0)
        self.assertGreater(fit["means"][1], 1.0)
        self.assertTrue(all(v > 0 for v in fit["variances"]))
        self.assertGreaterEqual(fit["iterations"], 1)

    def test_em_log_likelihood_matches_returned_parameters(self):
        x = [-2.2, -2.0, -1.8, -2.1, -1.9, 1.8, 2.0, 2.2, 1.9, 2.1]
        fit = gaussian_mixture_1d_em(x, 2, max_iter=1)
        expected = 0.0
        for value in x:
            terms = [
                math.log(w) - 0.5 * math.log(2 * math.pi * var)
                - (value - mean) ** 2 / (2 * var)
                for w, mean, var in zip(fit["weights"], fit["means"], fit["variances"])
            ]
            maximum = max(terms)
            expected += maximum + math.log(sum(math.exp(term - maximum) for term in terms))
        self.assertAlmostEqual(fit["log_likelihood"], expected, places=12)
        self.assertFalse(fit["converged"])

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            ridge_lasso_1d([1, 1], [1, 2])
        with self.assertRaises(ValueError):
            knn_predict([1], [1], [1], k=2)
        with self.assertRaises(ValueError):
            classification_metrics([0, 2], [0.2, 0.3])
        with self.assertRaises(ValueError):
            classification_metrics([0, 0.5], [0.2, 0.3])
        with self.assertRaises(ValueError):
            calibration_bins([0, 1], [0.1, 1.2])
        with self.assertRaises(ValueError):
            gaussian_mixture_1d_em([1, 1, 1], 2)


if __name__ == "__main__":
    unittest.main()
