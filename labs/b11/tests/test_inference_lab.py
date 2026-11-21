import unittest

from labs.b11.inference_lab import (
    beta_binomial_update, bootstrap_mean_interval, exact_binomial_pvalue,
    one_sample_z_power, permutation_mean_difference, poisson_mle,
    wilson_interval, z_test_sample_size,
)


class InferenceLabTests(unittest.TestCase):
    def test_exact_binomial_probability_ordering(self):
        self.assertAlmostEqual(exact_binomial_pvalue(5, 10, .5), 1.0)
        self.assertAlmostEqual(exact_binomial_pvalue(10, 10, .5), 2 / 1024)
        self.assertAlmostEqual(exact_binomial_pvalue(0, 10, .5), 2 / 1024)

    def test_wilson_interval(self):
        lo, hi = wilson_interval(0, 10)
        self.assertGreaterEqual(lo, 0)
        self.assertLess(hi, 1)
        lo, hi = wilson_interval(10, 10)
        self.assertGreater(lo, 0)
        self.assertLessEqual(hi, 1)
        lo, hi = wilson_interval(7, 10)
        self.assertAlmostEqual(lo, .3968, places=3)
        self.assertAlmostEqual(hi, .8922, places=3)

    def test_poisson_mle_and_boundary(self):
        out = poisson_mle([0, 1, 2, 1, 3, 2])
        self.assertEqual(out["estimate"], 1.5)
        self.assertAlmostEqual(out["variance_of_observation_under_model"], 1.5)
        self.assertAlmostEqual(out["variance_of_mle_under_model"], .25)
        self.assertAlmostEqual(out["variance_estimate_under_model"], .25)
        self.assertEqual(poisson_mle([0, 0])["boundary_supremum_at_zero"], 1)

    def test_beta_binomial_update(self):
        out = beta_binomial_update(7, 10, 1, 1)
        self.assertEqual((out["posterior_a"], out["posterior_b"]), (8, 4))
        self.assertAlmostEqual(out["posterior_mean"], 2 / 3)
        self.assertAlmostEqual(out["predictive_success_probability"], 2 / 3)

    def test_bootstrap_reproducibility_and_order(self):
        x = [2, 3, 4, 5, 8]
        ci1 = bootstrap_mean_interval(x, repetitions=1000, seed=12)
        ci2 = bootstrap_mean_interval(x, repetitions=1000, seed=12)
        self.assertEqual(ci1, ci2)
        self.assertLess(ci1[0], ci1[1])

    def test_permutation_plus_one_and_reproducibility(self):
        a, b = [1, 2, 3], [4, 5, 6]
        r1 = permutation_mean_difference(a, b, repetitions=999, seed=7)
        r2 = permutation_mean_difference(a, b, repetitions=999, seed=7)
        self.assertEqual(r1, r2)
        self.assertGreaterEqual(r1["p_value_mc"], 1 / 1000)
        self.assertLessEqual(r1["p_value_mc"], 1)

    def test_power_and_sample_size(self):
        n = z_test_sample_size(effect=3, sigma=10, alpha=.05, target_power=.80)
        self.assertEqual(n, 88)
        self.assertGreaterEqual(one_sample_z_power(n, 3, 10), .80)
        self.assertLess(one_sample_z_power(n - 1, 3, 10), .80)

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            exact_binomial_pvalue(11, 10, .5)
        with self.assertRaises(ValueError):
            wilson_interval(1, 0)
        with self.assertRaises(ValueError):
            beta_binomial_update(4, 3, 1, 1)
        with self.assertRaises(ValueError):
            bootstrap_mean_interval([], 1000)
        with self.assertRaises(ValueError):
            permutation_mean_difference([1], [2], 10)
        with self.assertRaises(ValueError):
            z_test_sample_size(0, 10)


if __name__ == "__main__":
    unittest.main()
