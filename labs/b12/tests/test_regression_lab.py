import math
import random
import unittest
from labs.b12.regression_lab import (
    binomial_deviance, intraclass_correlation, logistic_1d, ols_diagnostics,
    ols_simple, poisson_1d, poisson_deviance, ridge_lasso_simple,
)


class RegressionLabTests(unittest.TestCase):
    def test_ols_closed_form(self):
        fit=ols_simple([1,2,3,4,5],[5,8,11,14,17])
        self.assertAlmostEqual(fit["intercept"],2)
        self.assertAlmostEqual(fit["slope"],3)
        self.assertAlmostEqual(fit["r_squared"],1)
        self.assertAlmostEqual(fit["sse"],0)

    def test_ols_diagnostics(self):
        x=[1,2,3,4,5,6,7]
        y=[2,4,6,8,10,12,30]
        d=ols_diagnostics(x,y)
        self.assertTrue(all(0<=h<=1 for h in d["leverage"]))
        self.assertEqual(len(d["cooks_distance"]),len(x))
        self.assertEqual(max(d["cooks_distance"]),d["cooks_distance"][-1])

    def test_ridge_and_lasso_shrink(self):
        result=ridge_lasso_simple([1,2,3,4,5],[2,4,6,8,10],100)
        self.assertLess(abs(result["ridge_slope"]),abs(result["ols_slope"]))
        self.assertEqual(result["lasso_slope"],0)

    def test_logistic_fit(self):
        rng=random.Random(2026)
        x=[(i-50)/10 for i in range(100)]
        y=[int(rng.random()<1/(1+math.exp(-(-.2+.8*v)))) for v in x]
        fit=logistic_1d(x,y)
        self.assertTrue(math.isfinite(fit["slope"]))
        self.assertGreater(fit["slope"],0)
        self.assertTrue(fit["converged"])
        self.assertTrue(all(0<p<1 for p in fit["fitted"]))
        self.assertGreater(binomial_deviance(y,fit["fitted"]),0)

    def test_poisson_offset_fit(self):
        x=[(i-15)/10 for i in range(30)]
        exposure=[1+(i%3) for i in range(30)]
        y=[round(e*math.exp(.2+.3*v)) for e,v in zip(exposure,x)]
        fit=poisson_1d(x,y,exposure)
        self.assertTrue(math.isfinite(fit["slope"]))
        self.assertGreater(fit["slope"],0)
        self.assertTrue(fit["converged"])
        self.assertGreaterEqual(fit["deviance"],0)
        self.assertGreaterEqual(poisson_deviance(y,fit["fitted_means"]),0)

    def test_icc(self):
        self.assertAlmostEqual(intraclass_correlation(.4,.6),.4)
        with self.assertRaises(ValueError):
            intraclass_correlation(-1,1)

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            ols_simple([1,1,1],[2,3,4])
        with self.assertRaises(ValueError):
            logistic_1d([1,2,3],[0,0,0])
        with self.assertRaises(ValueError):
            logistic_1d([1,2,3],[0,1,1],max_iter=0)
        with self.assertRaises(ValueError):
            poisson_1d([1,2,3],[0,0,0])
        with self.assertRaises(ValueError):
            poisson_1d([1,2,3],[1,2,3],max_iter=0)
        with self.assertRaises(ValueError):
            intraclass_correlation(float('nan'),1)
        with self.assertRaises(ValueError):
            poisson_deviance([1],[float('nan')])


if __name__=="__main__": unittest.main()
