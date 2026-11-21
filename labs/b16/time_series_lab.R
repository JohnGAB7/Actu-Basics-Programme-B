# Dependency-free reference checks for Programme B / B16.

difference <- function(x, lag = 1L) {
  if (lag < 1L || lag >= length(x)) stop("invalid lag")
  x[(lag + 1L):length(x)] - x[seq_len(length(x) - lag)]
}

acf_manual <- function(x, max_lag) {
  n <- length(x)
  if (n < 2L || max_lag < 0L || max_lag >= n) stop("invalid dimensions")
  z <- x - mean(x)
  den <- sum(z^2)
  if (den == 0) stop("constant series")
  vapply(0:max_lag, function(k) {
    if (k == 0L) return(1)
    sum(z[(k + 1L):n] * z[seq_len(n - k)]) / den
  }, numeric(1))
}

ar1_forecast <- function(last_value, phi, horizon, intercept = 0) {
  if (horizon < 1L) stop("horizon must be positive")
  out <- numeric(horizon)
  x <- last_value
  for (i in seq_len(horizon)) {
    x <- intercept + phi * x
    out[i] <- x
  }
  out
}

forecast_errors <- function(actual, predicted) {
  if (length(actual) < 1L || length(actual) != length(predicted)) stop("length mismatch")
  e <- actual - predicted
  c(MAE = mean(abs(e)), RMSE = sqrt(mean(e^2)))
}

garch11_variance <- function(residuals, omega, alpha, beta, initial_variance) {
  if (omega <= 0 || alpha < 0 || beta < 0 || initial_variance <= 0) stop("invalid parameters")
  v <- initial_variance
  out <- numeric(length(residuals))
  for (i in seq_along(residuals)) {
    v <- omega + alpha * residuals[i]^2 + beta * v
    out[i] <- v
  }
  out
}

kalman_scalar_filter <- function(y, transition, loading, q, h, initial_state, initial_variance) {
  if (q < 0 || h <= 0 || initial_variance < 0) stop("invalid variances")
  a <- initial_state
  p <- initial_variance
  out <- matrix(NA_real_, nrow = length(y), ncol = 2,
                dimnames = list(NULL, c("state", "variance")))
  for (i in seq_along(y)) {
    ap <- transition * a
    pp <- transition^2 * p + q
    if (is.na(y[i])) {
      a <- ap; p <- pp
    } else {
      f <- loading^2 * pp + h
      k <- pp * loading / f
      a <- ap + k * (y[i] - loading * ap)
      p <- (1 - k * loading) * pp
    }
    out[i, ] <- c(a, p)
  }
  out
}

# Deterministic sanity checks; no external packages are required.
stopifnot(all.equal(difference(c(1, 3, 6, 10)), c(2, 3, 4)))
stopifnot(all.equal(acf_manual(c(1, 2, 3, 4), 1)[1], 1))
stopifnot(all.equal(ar1_forecast(8, 0.5, 3), c(4, 2, 1)))
stopifnot(all.equal(unname(forecast_errors(c(2, 4), c(1, 5))["MAE"]), 1))
stopifnot(all(garch11_variance(c(0, 1), 0.1, 0.2, 0.7, 1) > 0))
stopifnot(nrow(kalman_scalar_filter(c(NA, 1), 1, 1, 0.1, 0.2, 0, 1)) == 2)
cat("B16 R lab checks passed.\\n")
