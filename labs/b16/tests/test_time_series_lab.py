import unittest

from time_series_lab import (
    autocorrelation, ar1_forecast, difference, forecast_errors,
    garch11_variance, kalman_scalar_filter, mase, rolling_origin_splits,
)


class TimeSeriesLabTests(unittest.TestCase):
    def test_difference(self):
        self.assertEqual(difference([1, 3, 6, 10]), [2, 3, 4])
        self.assertEqual(difference([1, 2, 4, 8], 2), [3, 6])

    def test_autocorrelation_zero_lag(self):
        self.assertAlmostEqual(autocorrelation([1, 2, 3, 4], 2)[0], 1.0)

    def test_ar1_forecast(self):
        self.assertEqual(ar1_forecast(8, 0.5, 3), [4.0, 2.0, 1.0])

    def test_forecast_errors(self):
        result = forecast_errors([2, 4], [1, 5])
        self.assertEqual(result["mae"], 1.0)
        self.assertAlmostEqual(result["rmse"], 1.0)

    def test_mase(self):
        self.assertAlmostEqual(mase([3, 5], [2, 4], [1, 2, 3, 4], 1), 1.0)

    def test_rolling_origin(self):
        self.assertEqual(list(rolling_origin_splits(10, 4, 2, 2)),
                         [(4, 4, 6), (6, 6, 8), (8, 8, 10)])

    def test_garch_positive(self):
        out = garch11_variance([0.0, 1.0], 0.1, 0.2, 0.7, 1.0)
        self.assertTrue(all(v > 0 for v in out))
        self.assertAlmostEqual(out[0], 0.8)

    def test_kalman_missing_observation_predicts_without_update(self):
        out = kalman_scalar_filter([None, 1.0], 1.0, 1.0, 0.1, 0.2, 0.0, 1.0)
        self.assertGreater(out[0][1], 1.0)
        self.assertLess(out[1][1], out[0][1])

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            difference([1, 2], 2)
        with self.assertRaises(ValueError):
            autocorrelation([2, 2, 2], 1)
        with self.assertRaises(ValueError):
            list(rolling_origin_splits(5, 4, 2))


if __name__ == "__main__":
    unittest.main()
