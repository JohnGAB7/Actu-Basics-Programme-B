import math
import unittest

from labs.b16.time_series_lab import (
    acf, ar1_forecast, difference, fit_ar1, forecast_ar1, forecast_errors,
    forecast_metrics, garch11_variance, kalman_filter_local_level,
    kalman_scalar_filter, mase, periodogram, rolling_origin_mae,
    rolling_origin_splits, ses_forecast,
)


class TimeSeriesLabTests(unittest.TestCase):
    def test_difference_and_acf(self):
        self.assertEqual(difference([1, 3, 6, 10], 1), [2.0, 3.0, 4.0])
        rho = acf([1, 2, 3, 4], 2)
        self.assertAlmostEqual(rho[0], 1.0)
        self.assertEqual(len(rho), 3)

    def test_ar1_fit_and_forecast(self):
        values = [0.0]
        for _ in range(20):
            values.append(0.5 + 0.5 * values[-1])
        fit = fit_ar1(values)
        self.assertAlmostEqual(fit["intercept"], 0.5, places=8)
        self.assertAlmostEqual(fit["phi"], 0.5, places=8)
        fc = forecast_ar1(values[-1], 0.5, 0.5, 0.25, 2)
        self.assertAlmostEqual(fc[0]["mean"], 0.5 + 0.5 * (values[-1] - 1.0))
        self.assertAlmostEqual(fc[0]["variance"], 0.25)

    def test_ses_and_metrics(self):
        result = ses_forecast([10, 12, 14], 1.0, 2)
        self.assertEqual(result["forecast"], [14.0, 14.0])
        m = forecast_metrics([1, 2, 3], [2, 2, 2])
        self.assertAlmostEqual(m["mae"], 2/3)
        self.assertGreater(m["rmse"], 0)

    def test_rolling_origin(self):
        result = rolling_origin_mae([1, 2, 3, 4, 5], 3, "naive")
        self.assertAlmostEqual(result["mae"], 1.0)
        self.assertEqual(result["origins"], 2.0)

    def test_garch_recursion(self):
        result = garch11_variance([1, 2, 0], omega=0.1, alpha=0.2, beta=0.7, initial_variance=1)
        self.assertAlmostEqual(result["variance"][1], 1.0)
        self.assertAlmostEqual(result["variance"][2], 1.6)
        self.assertAlmostEqual(result["unconditional_variance"], 1.0)
        self.assertAlmostEqual(result["persistence"], 0.9)

    def test_periodogram_peak(self):
        x = [math.sin(2*math.pi*t/4) for t in range(32)]
        result = periodogram(x)
        peak = result["frequency"][result["power"].index(max(result["power"]))]
        self.assertAlmostEqual(peak, 0.25)

    def test_kalman_filter(self):
        result = kalman_filter_local_level([1, None, 1], 0, 1, 0, 1)
        self.assertAlmostEqual(result["filtered_mean"][0], 0.5)
        self.assertAlmostEqual(result["filtered_variance"][0], 0.5)
        self.assertIsNone(result["innovations"][1])
        self.assertAlmostEqual(result["filtered_mean"][2], 2/3)

    def test_compatibility_utilities(self):
        self.assertEqual(ar1_forecast(8, 0.5, 3), [4.0, 2.0, 1.0])
        self.assertAlmostEqual(forecast_errors([2, 4], [1, 5])["mae"], 1.0)
        self.assertAlmostEqual(mase([3, 5], [2, 4], [1, 2, 3, 4], 1), 1.0)
        self.assertEqual(list(rolling_origin_splits(10, 4, 2, 2)), [(4, 4, 6), (6, 6, 8), (8, 8, 10)])
        general = kalman_scalar_filter([None, 1.0], 1.0, 1.0, 0.1, 0.2, 0.0, 1.0)
        self.assertGreater(general[0][1], 1.0)
        self.assertLess(general[1][1], general[0][1])

    def test_invalid_inputs(self):
        with self.assertRaises(ValueError):
            difference([1, 2], 2)
        with self.assertRaises(ValueError):
            acf([1, 1, 1], 1)
        with self.assertRaises(ValueError):
            forecast_ar1(1, 0, 1, 1, 2)
        with self.assertRaises(ValueError):
            ses_forecast([1, 2], 1.2)
        with self.assertRaises(ValueError):
            garch11_variance([1, 2], 0, 0.1, 0.8)
        with self.assertRaises(ValueError):
            kalman_filter_local_level([1], 0, 0)


if __name__ == "__main__":
    unittest.main()
