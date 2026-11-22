import math
import unittest

from labs.b18.actuarial_lab import (
    aggregate_moments,
    annuity_immediate,
    buhlmann_credibility,
    chain_ladder,
    empirical_var_tvar,
    exposure_frequency,
    kaplan_meier,
    poisson_irls,
    term_insurance_epv,
    xs_recovery,
)


class ActuarialLabTests(unittest.TestCase):
    def test_exposure_frequency(self):
        self.assertAlmostEqual(exposure_frequency([2, 4], [1, 2]), 2.0)

    def test_exposure_frequency_rejects_invalid_exposure(self):
        with self.assertRaises(ValueError):
            exposure_frequency([1], [0])

    def test_compound_aggregate_moments_under_independence(self):
        mean, variance = aggregate_moments(2, 3, 10, 25)
        self.assertEqual(mean, 20)
        self.assertEqual(variance, 2 * 25 + 3 * 100)

    def test_poisson_irls_with_exposure_offset(self):
        design = [[1.0], [1.0], [1.0], [1.0]]
        fit = poisson_irls(design, [2, 4, 2, 4], [1, 2, 1, 2])
        self.assertTrue(fit["converged"])
        self.assertAlmostEqual(fit["coefficients"][0], math.log(2.0), places=7)
        self.assertEqual(len(fit["fitted_means"]), 4)

    def test_poisson_irls_singular_design_rejected(self):
        design = [[1.0, 1.0], [1.0, 1.0], [1.0, 1.0]]
        with self.assertRaises(ValueError):
            poisson_irls(design, [1, 2, 3], [1, 1, 1])

    def test_poisson_irls_rejects_noninteger_and_nonfinite_inputs(self):
        with self.assertRaises(ValueError):
            poisson_irls([[1.0], [1.0]], [1.5, 2], [1, 1])
        with self.assertRaises(ValueError):
            poisson_irls([[1.0], [float("nan")]], [1, 2], [1, 1])

    def test_buhlmann_credibility(self):
        result = buhlmann_credibility(epv=20, vhm=5, observations=10)
        self.assertEqual(result["K"], 4)
        self.assertAlmostEqual(result["Z"], 10 / 14)

    def test_kaplan_meier_handles_tied_event_and_censoring(self):
        table = kaplan_meier([1, 2, 2, 3], [True, True, False, True])
        self.assertAlmostEqual(table[0]["survival"], 0.75)
        self.assertAlmostEqual(table[1]["survival"], 0.5)
        self.assertEqual(table[1]["at_risk"], 3)
        self.assertEqual(table[1]["events"], 1)
        self.assertEqual(table[1]["censored"], 1)
        self.assertEqual(table[2]["survival"], 0.0)

    def test_annuity_immediate(self):
        self.assertAlmostEqual(annuity_immediate([0.9, 0.8], 0.0), 1.7)

    def test_annuity_rejects_increasing_survival_probabilities(self):
        with self.assertRaises(ValueError):
            annuity_immediate([0.8, 0.9], 0.0)

    def test_term_insurance_epv_uses_conditional_annual_mortality(self):
        # Death in year 2 requires survival through year 1: 0.9 * 0.2.
        self.assertAlmostEqual(term_insurance_epv([0.1, 0.2], 0.0, 100), 28)

    def test_chain_ladder_volume_weighted_projection(self):
        triangle = [
            [100.0, 150.0, 180.0],
            [120.0, 180.0, None],
            [90.0, None, None],
        ]
        result = chain_ladder(triangle)
        self.assertEqual(result["age_to_age"], [1.5, 1.2])
        self.assertAlmostEqual(result["ultimates"][0], 180.0)
        self.assertAlmostEqual(result["ultimates"][1], 216.0)
        self.assertAlmostEqual(result["ultimates"][2], 162.0)
        self.assertAlmostEqual(result["reserves"][2], 72.0)

    def test_chain_ladder_rejects_non_cumulative_triangle(self):
        with self.assertRaises(ValueError):
            chain_ladder([[100, 90, None]])

    def test_chain_ladder_rejects_malformed_triangle_and_nonfinite_values(self):
        with self.assertRaises(ValueError):
            chain_ladder([[100, None, None], [120, 180, None]])
        with self.assertRaises(ValueError):
            chain_ladder([[100, float("nan"), None]])

    def test_xs_recovery(self):
        self.assertEqual(xs_recovery(120000, 50000, 100000), 70000)
        self.assertEqual(xs_recovery(20000, 50000, 100000), 0)

    def test_empirical_var_tvar_fractional_tail(self):
        result = empirical_var_tvar([1, 2, 3, 4, 100], 0.8)
        self.assertEqual(result["VaR"], 4)
        self.assertEqual(result["TVaR"], 100)
        result2 = empirical_var_tvar([1, 2, 3, 4, 100], 0.6)
        self.assertEqual(result2["TVaR"], 52)

    def test_invalid_quantile_rejected(self):
        with self.assertRaises(ValueError):
            empirical_var_tvar([1, 2], 1.0)
        with self.assertRaises(ValueError):
            empirical_var_tvar([1, float("nan")], 0.95)


if __name__ == "__main__":
    unittest.main()
