import unittest

from labs.b13.multivariate_lab import (
    correlation_matrix, covariance_matrix, covariance_rank_bound,
    hotelling_one_sample, jacobi_eigen_symmetric, kmeans,
    mahalanobis_squared, pca, roy_f_bound, shrinkage_covariance,
)


class MultivariateLabTests(unittest.TestCase):
    def test_covariance_and_correlation(self):
        x=[[1,2],[2,4],[3,6]]
        self.assertEqual(covariance_matrix(x),[[1.0,2.0],[2.0,4.0]])
        self.assertAlmostEqual(correlation_matrix(x)[0][1],1.0)

    def test_jacobi_eigenvalues(self):
        values,vectors=jacobi_eigen_symmetric([[2,1],[1,2]])
        self.assertAlmostEqual(values[0],3)
        self.assertAlmostEqual(values[1],1)
        self.assertAlmostEqual(vectors[0][0]**2+vectors[1][0]**2,1)

    def test_pca_variance_and_reconstruction_dimension(self):
        x=[[1,2],[2,4],[3,6],[4,8]]
        result=pca(x)
        self.assertAlmostEqual(sum(result["explained_variance_ratio"]),1)
        self.assertAlmostEqual(result["eigenvalues"][0]+result["eigenvalues"][1],
                               covariance_matrix(x)[0][0]+covariance_matrix(x)[1][1])
        self.assertEqual(len(result["scores"]),len(x))
        self.assertEqual(len(result["scores"][0]),2)

    def test_mahalanobis(self):
        self.assertAlmostEqual(mahalanobis_squared([1,2],[0,0],[[1,0],[0,1]]),5)
        self.assertAlmostEqual(mahalanobis_squared([2],[0],[[4]]),1)
        self.assertEqual(jacobi_eigen_symmetric([[4]])[0],[4.0])

    def test_hotelling_t2(self):
        x=[[1,2],[2,1],[3,4],[4,3],[5,5],[6,4]]
        result=hotelling_one_sample(x,[3,3])
        self.assertGreater(result["t_squared"],0)
        self.assertGreater(result["f_statistic"],0)
        self.assertEqual((result["df1"],result["df2"]),(2.0,4.0))

    def test_shrinkage_regularizes_singular_covariance(self):
        s=[[1,1],[1,1]]
        shrunk=shrinkage_covariance(s,.5)
        self.assertGreater(shrunk[0][0]*shrunk[1][1]-shrunk[0][1]*shrunk[1][0],0)
        self.assertEqual(shrinkage_covariance(s,0),s)

    def test_kmeans_reproducible_separation(self):
        x=[[0,0],[0,1],[1,0],[10,10],[10,11],[11,10]]
        a=kmeans(x,2,seed=10,n_init=5)
        b=kmeans(x,2,seed=10,n_init=5)
        self.assertEqual(a,b)
        self.assertTrue(a["converged"])
        self.assertEqual(a["labels"][0],a["labels"][1])
        self.assertNotEqual(a["labels"][0],a["labels"][3])
        self.assertLess(a["inertia"],3)

    def test_rank_bound(self):
        self.assertEqual(covariance_rank_bound(5,10),4)
        self.assertEqual(covariance_rank_bound(20,3),3)


    def test_roy_f_exact_univariate_response(self):
        result = roy_f_bound(0.4, p=1, q=2, v=30)
        self.assertAlmostEqual(result["f_statistic"], 6.0)
        self.assertEqual((result["df1"], result["df2"]), (2, 30))
        self.assertTrue(result["is_exact"])
        self.assertFalse(result["is_upper_bound"])

    def test_roy_f_exact_rank_one_hypothesis(self):
        result = roy_f_bound(0.4, p=3, q=1, v=30)
        self.assertAlmostEqual(result["f_statistic"], 0.4 * 28 / 3)
        self.assertEqual((result["df1"], result["df2"]), (3, 28))
        self.assertTrue(result["is_exact"])

    def test_roy_f_is_upper_bound_otherwise(self):
        result = roy_f_bound(0.4, p=2, q=3, v=30)
        self.assertAlmostEqual(result["f_statistic"], 4.0)
        self.assertTrue(result["is_upper_bound"])
        self.assertTrue(result["p_value_is_lower_bound"])

    def test_roy_f_rejects_invalid_degrees_of_freedom(self):
        with self.assertRaises(ValueError):
            roy_f_bound(0.4, p=0, q=2, v=30)
        with self.assertRaises(ValueError):
            roy_f_bound(0.4, p=3, q=1, v=2)

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            correlation_matrix([[1,2],[1,3],[1,4]])
        with self.assertRaises(ValueError):
            jacobi_eigen_symmetric([[1,2],[0,1]])
        with self.assertRaises(ValueError):
            mahalanobis_squared([1,2],[0,0],[[1,1],[1,1]])
        with self.assertRaises(ValueError):
            hotelling_one_sample([[1,2],[2,1]],[0,0])
        with self.assertRaises(ValueError):
            shrinkage_covariance([[1,0],[0,1]],1.5)
        with self.assertRaises(ValueError):
            shrinkage_covariance([[1,2],[2,1]],.5)
        with self.assertRaises(ValueError):
            kmeans([[1,1],[1,1]],2)


if __name__ == "__main__":
    unittest.main()
