import math
import unittest

from labs.b20.advanced_statistics_lab import (
    benjamini_hochberg,
    bootstrap_mean_ci,
    delta_method,
    effective_sample_size,
    finite_difference_gradient,
    gradient_descent,
    metropolis_hastings,
    monte_carlo_standard_error,
    permutation_test_mean_difference,
    ridge_regression,
)


class AdvancedStatisticsLabTests(unittest.TestCase):
    def test_bootstrap_is_reproducible(self):
        a = bootstrap_mean_ci([1, 2, 3, 4, 5], n_resamples=500, seed=7)
        b = bootstrap_mean_ci([1, 2, 3, 4, 5], n_resamples=500, seed=7)
        self.assertEqual(a, b)
        self.assertLessEqual(a["lower"], a["estimate"])
        self.assertGreaterEqual(a["upper"], a["estimate"])
        with self.assertRaises(ValueError):
            bootstrap_mean_ci([1, float("nan"), 3], n_resamples=100)

    def test_exact_permutation_test(self):
        result = permutation_test_mean_difference([1, 2, 3], [4, 5, 6], n_resamples=1000)
        self.assertEqual(result["method"], "exact")
        self.assertAlmostEqual(result["p_value"], 0.1)

    def test_delta_method(self):
        result = delta_method([1, 2], [[1, 0.2], [0.2, 4]])
        self.assertAlmostEqual(result["variance"], 17.8)
        self.assertAlmostEqual(result["standard_error"], math.sqrt(17.8))
        with self.assertRaises(ValueError):
            delta_method([1, 2], [[1, 0.2], [0.3, 4]])

    def test_metropolis_hastings_normal_target(self):
        result = metropolis_hastings(lambda x: -0.5 * x * x, 0.0, 8000, 1.0, 42)
        draws = result["draws"][1000:]
        mean = sum(draws) / len(draws)
        variance = sum((x - mean) ** 2 for x in draws) / (len(draws) - 1)
        self.assertGreater(result["acceptance_rate"], 0.1)
        self.assertLess(result["acceptance_rate"], 0.9)
        self.assertAlmostEqual(mean, 0.0, delta=0.15)
        self.assertAlmostEqual(variance, 1.0, delta=0.2)
        with self.assertRaises(ValueError):
            metropolis_hastings(lambda x: float("-inf"), 0.0, 10)

    def test_effective_sample_size_independent_sequence(self):
        result = effective_sample_size([0.1, -0.5, 0.7, -0.2, 0.9, -0.8, 0.3, 0.4])
        self.assertGreater(result, 0)
        self.assertLessEqual(result, 8)
        with self.assertRaises(ValueError):
            effective_sample_size([1, 2, 3, 4], max_lag=-1)

    def test_benjamini_hochberg(self):
        result = benjamini_hochberg([0.01, 0.04, 0.03, 0.2], q=0.05)
        self.assertEqual(result["rejected"], [True, False, False, False])
        with self.assertRaises(ValueError):
            benjamini_hochberg([0.01, float("nan")], q=0.05)
        self.assertAlmostEqual(result["adjusted_p_values"][0], 0.04)

    def test_ridge_regression_unpenalized_intercept(self):
        x = [[1, 0], [1, 1], [1, 2], [1, 3]]
        beta0 = ridge_regression(x, [1, 3, 5, 7], penalty=0)
        beta1 = ridge_regression(x, [1, 3, 5, 7], penalty=1)
        self.assertAlmostEqual(beta0[0], 1.0)
        self.assertAlmostEqual(beta0[1], 2.0)
        self.assertAlmostEqual(beta1[0], 1.0, delta=0.5)
        self.assertLess(beta1[1], beta0[1])

    def test_finite_difference_gradient(self):
        f = lambda x: x[0] ** 2 + 3 * x[1] ** 2
        grad = finite_difference_gradient(f, [2.0, 1.0])
        self.assertAlmostEqual(grad[0], 4.0, places=6)
        self.assertAlmostEqual(grad[1], 6.0, places=6)

    def test_gradient_descent_with_armijo_backtracking(self):
        f = lambda x: (x[0] - 3) ** 2 + 2 * (x[1] + 1) ** 2
        g = lambda x: [2 * (x[0] - 3), 4 * (x[1] + 1)]
        result = gradient_descent(f, g, [0.0, 0.0])
        self.assertTrue(result["converged"])
        self.assertAlmostEqual(result["point"][0], 3.0, delta=1e-5)
        self.assertAlmostEqual(result["point"][1], -1.0, delta=1e-5)

    def test_monte_carlo_standard_error(self):
        result = monte_carlo_standard_error([1, 2, 3, 4])
        self.assertAlmostEqual(result, math.sqrt(5 / 12))


if __name__ == "__main__":
    unittest.main()
