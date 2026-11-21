import math
import unittest

from labs.b19.econometrics_lab import (
    capm_fit,
    empirical_var_es,
    hc0_covariance,
    kupiec_lr_uc,
    log_returns,
    logit_marginal_effect,
    logit_probability,
    newey_west_covariance,
    ols_fit,
    realized_variance,
    simple_returns,
    wald_iv,
    within_demean,
)


class EconometricsLabTests(unittest.TestCase):
    def test_ols_exact_linear_relation(self):
        x = [[1.0, 0.0], [1.0, 1.0], [1.0, 2.0], [1.0, 3.0]]
        fit = ols_fit(x, [1.0, 3.0, 5.0, 7.0])
        self.assertAlmostEqual(fit["coefficients"][0], 1.0)
        self.assertAlmostEqual(fit["coefficients"][1], 2.0)
        self.assertAlmostEqual(fit["r_squared"], 1.0)

    def test_ols_rejects_singular_design(self):
        with self.assertRaises(ValueError):
            ols_fit([[1, 1], [1, 1], [1, 1]], [1, 2, 3])

    def test_hc0_covariance_is_symmetric(self):
        x = [[1.0, 0.0], [1.0, 1.0], [1.0, 2.0], [1.0, 3.0], [1.0, 4.0]]
        residuals = [0.2, -0.1, 0.3, -0.2, 0.1]
        cov = hc0_covariance(x, residuals)
        self.assertAlmostEqual(cov[0][1], cov[1][0])
        self.assertGreaterEqual(cov[0][0], 0)

    def test_newey_west_lag_zero_equals_hc0(self):
        x = [[1.0, 0.0], [1.0, 1.0], [1.0, 2.0], [1.0, 3.0]]
        e = [0.1, -0.2, 0.2, -0.1]
        a = hc0_covariance(x, e)
        b = newey_west_covariance(x, e, 0)
        for i in range(2):
            for j in range(2):
                self.assertAlmostEqual(a[i][j], b[i][j])

    def test_within_demean_removes_group_means(self):
        out = within_demean([2, 4, 10, 14], [[1], [3], [2], [6]], ["A", "A", "B", "B"])
        self.assertEqual(out["groups"], 2)
        self.assertAlmostEqual(sum(out["outcome"][:2]), 0)
        self.assertAlmostEqual(sum(out["outcome"][2:]), 0)
        self.assertAlmostEqual(sum(row[0] for row in out["design"][:2]), 0)

    def test_wald_iv_ratio(self):
        z = [0, 0, 1, 1]
        x = [0, 0, 1, 1]
        y = [1, 1, 3, 3]
        self.assertAlmostEqual(wald_iv(z, x, y), 2.0)

    def test_wald_iv_rejects_irrelevant_instrument(self):
        with self.assertRaises(ValueError):
            wald_iv([1, 1, 1], [0, 1, 2], [1, 2, 3])

    def test_logit_probability_and_marginal_effect(self):
        p = logit_probability(0.0)
        self.assertEqual(p, 0.5)
        self.assertAlmostEqual(logit_marginal_effect(2.0, p), 0.5)

    def test_returns(self):
        prices = [100, 110, 121]
        self.assertAlmostEqual(simple_returns(prices)[0], 0.1)
        self.assertAlmostEqual(log_returns(prices)[1], math.log(1.1))

    def test_capm_beta_and_alpha(self):
        market = [-0.02, -0.01, 0.0, 0.01, 0.02]
        asset = [1.0 + 2.0 * x for x in market]
        fit = capm_fit(asset, market)
        self.assertAlmostEqual(fit["beta"], 2.0)
        self.assertAlmostEqual(fit["alpha"], 1.0)

    def test_empirical_var_es(self):
        result = empirical_var_es([1, 2, 3, 4, 100], 0.8)
        self.assertEqual(result["VaR"], 4)
        self.assertEqual(result["ES"], 100)

    def test_kupiec_statistic_is_zero_at_nominal_rate(self):
        exceptions = [True] + [False] * 99
        self.assertAlmostEqual(kupiec_lr_uc(exceptions, 0.01), 0.0)

    def test_kupiec_statistic_flags_excess_exceptions(self):
        exceptions = [True] * 10 + [False] * 90
        self.assertGreater(kupiec_lr_uc(exceptions, 0.01), 0.0)

    def test_realized_variance(self):
        self.assertAlmostEqual(realized_variance([0.1, -0.2, 0.1]), 0.06)


if __name__ == "__main__":
    unittest.main()
