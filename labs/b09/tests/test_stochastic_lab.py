import math
import random
import unittest

from stochastic_lab import (
    absorption_one_transient,
    poisson_pmf,
    propagate_markov,
    quadratic_variation,
    simulate_brownian_path,
    simulate_poisson_arrivals,
    simulate_renewal_count,
    simulate_symmetric_random_walk,
    stationary_two_state,
)


class StochasticLabTests(unittest.TestCase):
    def test_markov_propagation_and_stationarity(self):
        matrix = [[0.8, 0.2], [0.3, 0.7]]
        self.assertEqual(propagate_markov([1.0, 0.0], matrix, 0), [1.0, 0.0])
        result = propagate_markov([1.0, 0.0], matrix, 2)
        self.assertAlmostEqual(result[0], 0.70)
        self.assertAlmostEqual(result[1], 0.30)
        stationary = stationary_two_state(0.2, 0.3)
        self.assertAlmostEqual(stationary[0], 0.6)
        self.assertAlmostEqual(stationary[1], 0.4)
        self.assertAlmostEqual(stationary[0] * 0.2, stationary[1] * 0.3)

    def test_invalid_markov_inputs(self):
        with self.assertRaises(ValueError):
            propagate_markov([1.0, 0.0], [[0.8, 0.3], [0.3, 0.7]], 2)

    def test_absorption_geometry(self):
        result = absorption_one_transient(0.75)
        self.assertAlmostEqual(result["mean_steps"], 4)
        self.assertAlmostEqual(result["variance_steps"], 12)

    def test_poisson_law_and_arrivals(self):
        self.assertAlmostEqual(poisson_pmf(0, 2), math.exp(-2))
        self.assertAlmostEqual(sum(poisson_pmf(k, 2) for k in range(30)), 1.0, places=10)
        arrivals = simulate_poisson_arrivals(4, 5, random.Random(123))
        self.assertEqual(arrivals, simulate_poisson_arrivals(4, 5, random.Random(123)))
        self.assertTrue(all(0 < t <= 5 for t in arrivals))
        self.assertEqual(arrivals, sorted(arrivals))

    def test_renewal_rate_and_reproducibility(self):
        a = simulate_renewal_count(2, 20000, random.Random(77))
        b = simulate_renewal_count(2, 20000, random.Random(77))
        self.assertEqual(a, b)
        self.assertAlmostEqual(a / 20000, 0.5, delta=0.015)

    def test_random_walk_is_a_martingale_increment_example(self):
        path = simulate_symmetric_random_walk(100, random.Random(9))
        self.assertEqual(path, simulate_symmetric_random_walk(100, random.Random(9)))
        self.assertEqual(len(path), 101)
        self.assertTrue(all(abs(path[i + 1] - path[i]) == 1 for i in range(100)))

    def test_brownian_quadratic_variation(self):
        path = simulate_brownian_path(1, 10000, random.Random(2026))
        self.assertEqual(path, simulate_brownian_path(1, 10000, random.Random(2026)))
        self.assertAlmostEqual(quadratic_variation(path), 1.0, delta=0.06)


if __name__ == "__main__":
    unittest.main()
