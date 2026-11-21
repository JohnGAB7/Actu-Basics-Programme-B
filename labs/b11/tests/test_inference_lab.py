import unittest
from labs.b11.inference_lab import (
    beta_posterior,beta_predictive_pmf,bernoulli_risk,binomial_tests,
    bootstrap_interval,coverage_simulation,permutation_test,poisson_mle,
    required_n_mean,sample_means,proportion_interval,
)


class InferenceLabTests(unittest.TestCase):
    def test_clt_simulation_reproducibility(self):
        a=sample_means("normal",40,3000,17); b=sample_means("normal",40,3000,17)
        self.assertEqual(a,b); self.assertAlmostEqual(sum(a)/len(a),0,delta=.03)
        e=sample_means("exponential",40,3000,18)
        self.assertAlmostEqual(sum(e)/len(e),1,delta=.03)

    def test_exact_bernoulli_risk(self):
        r=bernoulli_risk(.3,10)
        self.assertAlmostEqual(r["sample_mean"]["mse"],.021)
        self.assertAlmostEqual(r["beta_uniform_mean"]["bias"],.4/12)
        self.assertAlmostEqual(r["beta_uniform_mean"]["mse"],r["beta_uniform_mean"]["variance"]+r["beta_uniform_mean"]["bias"]**2)

    def test_poisson_mle_boundary(self):
        self.assertAlmostEqual(poisson_mle([2,3,5]),10/3)
        self.assertEqual(poisson_mle([0,0,0]),0)

    def test_wilson_interval_and_coverage(self):
        w=proportion_interval(1,20,"wilson"); d=proportion_interval(1,20,"wald")
        self.assertTrue(0<=w[0]<=w[1]<=1); self.assertGreater(d[1]-d[0],w[1]-w[0])
        c=coverage_simulation(.05,20,4000,2026)
        self.assertGreater(c["wilson"],c["wald"])

    def test_sample_size(self):
        self.assertEqual(required_n_mean(10,3),88)

    def test_likelihood_tests(self):
        r=binomial_tests(12,20,.5)
        self.assertGreater(r["lr"],0); self.assertGreater(r["wald"],0); self.assertGreater(r["score"],0)
        self.assertIsNone(binomial_tests(20,20,.5)["wald"])

    def test_bootstrap_and_permutation(self):
        a=bootstrap_interval([1,2,2,3,10],repetitions=500,seed=11)
        self.assertEqual(a,bootstrap_interval([1,2,2,3,10],repetitions=500,seed=11))
        p=permutation_test([1,2,3],[4,5,6],1000,9)
        self.assertGreaterEqual(p["p_value"],1/1001); self.assertLessEqual(p["p_value"],1)

    def test_beta_binomial(self):
        post=beta_posterior(6,8,2,2)
        self.assertEqual((post["a"],post["b"]),(8,4)); self.assertAlmostEqual(post["mean"],2/3)
        probs=[beta_predictive_pmf(k,5,8,4) for k in range(6)]
        self.assertAlmostEqual(sum(probs),1,places=10)

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError): sample_means("uniform",10,100)
        with self.assertRaises(ValueError): poisson_mle([-1,2])
        with self.assertRaises(ValueError): proportion_interval(3,2)
        with self.assertRaises(ValueError): required_n_mean(0,1)


if __name__=="__main__": unittest.main()
