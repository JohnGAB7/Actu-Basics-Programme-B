import unittest

from labs.b08.probability_lab import (
    bayes_positive,
    dependent_zero_covariance,
    simulate_bernoulli_frequency,
    simulate_clt,
    simulate_compound_poisson,
    simulate_lln,
    simulate_common_laws,
)


class ProbabilityLabTests(unittest.TestCase):
    def test_bayes_base_rate_example(self):
        posterior = bayes_positive(0.01, 0.95, 0.90)
        self.assertAlmostEqual(posterior, 0.08755760368663594, places=12)

    def test_bayes_rejects_invalid_probabilities(self):
        with self.assertRaises(ValueError):
            bayes_positive(1.2, 0.95, 0.90)

    def test_frequency_is_reproducible_and_close_to_parameter(self):
        first = simulate_bernoulli_frequency(0.20, 100_000)
        second = simulate_bernoulli_frequency(0.20, 100_000)
        self.assertEqual(first, second)
        self.assertLess(abs(first - 0.20), 0.01)

    def test_common_law_simulations_match_theoretical_moments(self):
        result = simulate_common_laws(n=50_000)
        self.assertLess(abs(result["bernoulli_mean"] - 0.30), 0.015)
        self.assertLess(abs(result["exponential_mean"] - 0.50), 0.015)
        self.assertLess(abs(result["normal_mean"]), 0.02)
        self.assertLess(abs(result["normal_variance"] - 1.0), 0.04)

    def test_zero_covariance_does_not_imply_independence(self):
        result = dependent_zero_covariance()
        self.assertAlmostEqual(result["covariance"], 0.0, places=12)
        self.assertEqual(result["mean_y"], 2.5)

    def test_lln_final_mean_is_reproducible_and_close(self):
        first = simulate_lln()
        second = simulate_lln()
        self.assertEqual(first, second)
        self.assertLess(abs(first["final_mean"] - 0.30), 0.01)

    def test_clt_standardized_mean_has_reasonable_monte_carlo_behavior(self):
        result = simulate_clt(repetitions=5_000, sample_size=40)
        self.assertLess(abs(result["empirical_mean"]), 0.10)
        self.assertGreater(result["empirical_sd"], 0.80)
        self.assertLess(result["empirical_sd"], 1.20)
        self.assertGreater(result["fraction_within_1_96"], 0.88)
        self.assertLess(result["fraction_within_1_96"], 0.99)

    def test_compound_poisson_portfolio_is_reproducible(self):
        first = simulate_compound_poisson(exposures=20_000)
        second = simulate_compound_poisson(exposures=20_000)
        self.assertEqual(first, second)
        self.assertLess(abs(first["claim_frequency"] - 0.12), 0.015)
        self.assertLess(abs(first["aggregate_per_exposure"] - 96.0), 20.0)


if __name__ == "__main__":
    unittest.main()
