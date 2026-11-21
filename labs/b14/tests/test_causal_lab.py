import unittest

from labs.b14.causal_lab import (
    aipw_ate, did_2x2, difference_in_means, effective_sample_size,
    example_confounded_table, ipw_ate, iv_wald, local_linear_rd,
    propensity_scores_binary_covariate, propensity_weights,
    randomization_test, weighted_smd,
)


class CausalLabTests(unittest.TestCase):
    def test_difference_in_means(self):
        result = difference_in_means([1, 2, 4, 5], [0, 0, 1, 1])
        self.assertAlmostEqual(result["estimate"], 3.0)
        self.assertGreater(result["standard_error"], 0)

    def test_randomization_test_is_reproducible(self):
        y = [1, 2, 2, 3, 5, 6]
        a = [0, 0, 0, 1, 1, 1]
        one = randomization_test(y, a, 499, seed=7)
        two = randomization_test(y, a, 499, seed=7)
        self.assertEqual(one, two)
        self.assertTrue(0 < one["p_value"] <= 1)

    def test_standardization_reverses_confounded_crude_difference(self):
        result = example_confounded_table()
        self.assertAlmostEqual(result["standardized"]["crude_difference"], 0.02)
        self.assertAlmostEqual(result["standardized"]["ate"], -0.10)
        self.assertAlmostEqual(result["standardized"]["mu1_standardized"], 0.20)
        self.assertAlmostEqual(result["standardized"]["mu0_standardized"], 0.30)

    def test_ipw_and_aipw_agree_in_exact_table(self):
        result = example_confounded_table()
        self.assertAlmostEqual(result["ipw"]["ate"], -0.10)
        self.assertAlmostEqual(result["aipw"], -0.10)
        self.assertGreater(result["ipw"]["ess_treated"], 0)
        self.assertGreater(result["ess"], 0)

    def test_propensity_weights_and_balance(self):
        a = [1, 1, 0, 0]
        e = [0.8, 0.8, 0.2, 0.2]
        ate = propensity_weights(a, e, "ATE")
        att = propensity_weights(a, e, "ATT")
        overlap = propensity_weights(a, e, "OVERLAP")
        self.assertAlmostEqual(ate[0], 1.25)
        self.assertAlmostEqual(att[0], 1.0)
        self.assertAlmostEqual(att[2], 0.25)
        self.assertAlmostEqual(overlap[0], 0.2)
        self.assertAlmostEqual(weighted_smd([1, 1, 0, 0], a, ate), 0.0)

    def test_effective_sample_size(self):
        self.assertAlmostEqual(effective_sample_size([1, 1, 1, 1]), 4.0)
        self.assertLess(effective_sample_size([10, 1, 1, 1]), 4.0)

    def test_iv_wald(self):
        z = [0, 0, 0, 0, 1, 1, 1, 1]
        a = [0, 0, 0, 1, 1, 1, 1, 1]
        y = [1, 2, 1, 2, 5, 6, 5, 6]
        result = iv_wald(y, a, z)
        self.assertAlmostEqual(result["reduced_form"], 4.0)
        self.assertAlmostEqual(result["first_stage"], 0.75)
        self.assertAlmostEqual(result["wald"], 4.0 / 0.75)

    def test_difference_in_differences(self):
        self.assertAlmostEqual(did_2x2(10, 14, 8, 9), 3.0)

    def test_sharp_and_fuzzy_rd(self):
        running = [i / 20 for i in range(-20, 21)]
        treatment = [1 if x >= 0 else 0 for x in running]
        outcome = [2 + 3*x + 5*t for x, t in zip(running, treatment)]
        sharp = local_linear_rd(outcome, running, 0, 0.8)
        self.assertAlmostEqual(sharp["jump_outcome"], 5.0, places=8)
        fuzzy = local_linear_rd(outcome, running, 0, 0.8, treatment)
        self.assertAlmostEqual(fuzzy["jump_treatment"], 1.0, places=8)
        self.assertAlmostEqual(fuzzy["fuzzy_rd"], 5.0, places=8)

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            propensity_scores_binary_covariate([1, 1, 0, 0], [0, 0, 1, 1])
        with self.assertRaises(ValueError):
            propensity_weights([1, 0], [1.0, 0.5])
        with self.assertRaises(ValueError):
            effective_sample_size([1, 0])
        with self.assertRaises(ValueError):
            aipw_ate([1, 2], [1, 0], [0, 1], [0, 0], [1, 1])
        with self.assertRaises(ValueError):
            iv_wald([1, 2], [0, 0], [0, 1])
        with self.assertRaises(ValueError):
            iv_wald([1, 2], [0, 1], [1, 1])
        with self.assertRaises(ValueError):
            aipw_ate([1, 2], [1, 1], [0.5, 0.5], [0, 0], [1, 1])
        with self.assertRaises(ValueError):
            local_linear_rd([1, 2], [-1, 1], bandwidth=1)


if __name__ == "__main__":
    unittest.main()
