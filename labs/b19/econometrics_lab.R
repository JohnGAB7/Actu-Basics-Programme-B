# B19 econometrics and financial-statistics teaching primitives; base R only.
# These are transparent examples, not production estimators.

ols_fit <- function(design, outcome) {
  if (nrow(design) != length(outcome) || length(outcome) == 0L ||
      any(!is.finite(as.matrix(design))) || any(!is.finite(outcome))) {
    stop("design and outcome must be finite and have equal non-zero length")
  }
  fit <- stats::lm.fit(x = as.matrix(design), y = outcome)
  if (anyNA(fit$coefficients)) stop("singular design matrix")
  list(coefficients = fit$coefficients, fitted = fit$fitted.values,
       residuals = fit$residuals, r_squared = 1 - sum(fit$residuals^2) /
         sum((outcome - mean(outcome))^2))
}

sandwich_covariance <- function(design, residuals, lag = 0L) {
  x <- as.matrix(design)
  n <- nrow(x)
  if (n != length(residuals) || n == 0L || ncol(x) == 0L ||
      !is.finite(lag) || lag != floor(lag) || lag < 0L || lag >= n ||
      any(!is.finite(x)) || any(!is.finite(residuals))) {
    stop("design/residuals must be finite and lag an integer in [0,n-1]")
  }
  scores <- x * as.numeric(residuals)
  meat <- crossprod(scores)
  if (lag > 0L) {
    for (ell in seq_len(lag)) {
      weight <- 1 - ell / (lag + 1)
      gamma <- t(scores[(ell + 1L):n, , drop = FALSE]) %*%
        scores[1L:(n - ell), , drop = FALSE]
      meat <- meat + weight * (gamma + t(gamma))
    }
  }
  bread <- solve(crossprod(x))
  bread %*% meat %*% bread
}

within_demean <- function(outcome, design, groups) {
  if (length(outcome) == 0L || nrow(design) != length(outcome) || length(groups) != length(outcome) ||
      any(!is.finite(outcome)) || any(!is.finite(as.matrix(design))) || anyNA(groups)) {
    stop("panel inputs must be finite with non-missing group identifiers")
  }
  x <- as.matrix(design)
  y_out <- numeric(length(outcome))
  x_out <- matrix(0, nrow = length(outcome), ncol = ncol(x))
  for (g in unique(groups)) {
    idx <- which(groups == g)
    y_out[idx] <- outcome[idx] - mean(outcome[idx])
    x_out[idx, ] <- sweep(x[idx, , drop = FALSE], 2, colMeans(x[idx, , drop = FALSE]), "-")
  }
  list(outcome = y_out, design = x_out, groups = length(unique(groups)))
}

wald_iv <- function(instrument, endogenous, outcome) {
  if (length(instrument) == 0L || length(instrument) != length(endogenous) ||
      length(instrument) != length(outcome) || any(!is.finite(instrument)) ||
      any(!is.finite(endogenous)) || any(!is.finite(outcome))) stop("IV inputs must be finite and aligned")
  cov_zx <- mean((instrument - mean(instrument)) * (endogenous - mean(endogenous)))
  cov_zy <- mean((instrument - mean(instrument)) * (outcome - mean(outcome)))
  if (abs(cov_zx) < 1e-12) stop("instrument has no first-stage variation")
  cov_zy / cov_zx
}

logit_probability <- function(eta) {
  if (any(!is.finite(eta))) stop("linear predictor must be finite")
  plogis(eta)
}
logit_marginal_effect <- function(beta, probability) {
  if (!is.finite(beta) || any(!is.finite(probability)) ||
      any(probability < 0 | probability > 1)) stop("finite beta and probabilities in [0,1] required")
  beta * probability * (1 - probability)
}

simple_returns <- function(prices) {
  if (length(prices) < 2L || any(!is.finite(prices)) || any(prices <= 0)) stop("finite positive prices required")
  prices[-1L] / prices[-length(prices)] - 1
}
log_returns <- function(prices) {
  if (length(prices) < 2L || any(prices <= 0)) stop("positive prices required")
  diff(log(prices))
}

capm_fit <- function(asset_excess, market_excess) {
  if (length(asset_excess) != length(market_excess) || length(asset_excess) < 2L ||
      any(!is.finite(asset_excess)) || any(!is.finite(market_excess)) ||
      var(market_excess) == 0) stop("finite aligned return series with market variation required")
  beta <- cov(asset_excess, market_excess) / var(market_excess)
  c(alpha = mean(asset_excess) - beta * mean(market_excess), beta = beta)
}

empirical_var_es <- function(losses, alpha) {
  if (length(losses) == 0L || !is.finite(alpha) || alpha <= 0 || alpha >= 1 ||
      any(!is.finite(losses))) stop("finite losses and alpha in (0,1) required")
  ordered <- sort(losses)
  n <- length(ordered)
  var <- ordered[min(n, max(1L, ceiling(alpha * n)))]
  remaining <- (1 - alpha) * n
  mass <- remaining
  weighted <- 0
  for (value in rev(ordered)) {
    weight <- min(1, remaining)
    weighted <- weighted + weight * value
    remaining <- remaining - weight
    if (remaining <= 1e-12) break
  }
  c(VaR = var, ES = weighted / mass)
}

kupiec_lr_uc <- function(exceptions, expected_exception_rate) {
  if (length(exceptions) == 0L || !is.logical(exceptions) || anyNA(exceptions) ||
      !is.finite(expected_exception_rate) || expected_exception_rate <= 0 ||
      expected_exception_rate >= 1) stop("logical non-missing exceptions and rate in (0,1) required")
  n <- length(exceptions)
  x <- sum(as.logical(exceptions))
  phat <- x / n
  ll <- function(p) {
    left <- if (n - x == 0) 0 else (n - x) * log(1 - p)
    right <- if (x == 0) 0 else x * log(p)
    left + right
  }
  max(0, -2 * (ll(expected_exception_rate) - ll(phat)))
}

realized_variance <- function(intraday_returns) {
  if (length(intraday_returns) == 0L || any(!is.finite(intraday_returns))) {
    stop("intraday returns must be finite and non-empty")
  }
  sum(intraday_returns^2)
}

# Executable checks
x <- cbind(1, 0:3)
fit <- ols_fit(x, c(1, 3, 5, 7))
stopifnot(max(abs(fit$coefficients - c(1, 2))) < 1e-10)
res <- c(.1, -.2, .2, -.1)
hc <- sandwich_covariance(x, res, 0)
nw0 <- sandwich_covariance(x, res, 0)
nw1 <- sandwich_covariance(x, res, 1)
stopifnot(max(abs(hc - nw0)) < 1e-10, all(is.finite(nw1)),
          max(abs(nw1 - t(nw1))) < 1e-10)
bad_hac <- try(sandwich_covariance(x, res, 1.5), silent = TRUE)
stopifnot(inherits(bad_hac, "try-error"))
panel <- within_demean(c(2,4,10,14), matrix(c(1,3,2,6), ncol = 1), c("A","A","B","B"))
stopifnot(abs(sum(panel$outcome[1:2])) < 1e-10)
stopifnot(abs(wald_iv(c(0,0,1,1), c(0,0,1,1), c(1,1,3,3)) - 2) < 1e-10)
stopifnot(logit_probability(0) == .5)
stopifnot(abs(logit_marginal_effect(2,.5) - .5) < 1e-10)
stopifnot(abs(simple_returns(c(100,110,121))[1] - .1) < 1e-10)
stopifnot(abs(log_returns(c(100,110,121))[2] - log(1.1)) < 1e-10)
capm <- capm_fit(1 + 2 * c(-.02,-.01,0,.01,.02), c(-.02,-.01,0,.01,.02))
stopifnot(abs(capm[["beta"]] - 2) < 1e-10, abs(capm[["alpha"]] - 1) < 1e-10)
risk <- empirical_var_es(c(1,2,3,4,100), .8)
stopifnot(risk[["VaR"]] == 4, risk[["ES"]] == 100)
bad_risk <- try(empirical_var_es(c(1, NaN), .95), silent = TRUE)
stopifnot(inherits(bad_risk, "try-error"))
bad_ols <- try(ols_fit(matrix(c(1, NaN), ncol = 1), c(1, 2)), silent = TRUE)
stopifnot(inherits(bad_ols, "try-error"))
bad_kupiec <- try(kupiec_lr_uc(c(TRUE, NA), .01), silent = TRUE)
stopifnot(inherits(bad_kupiec, "try-error"))
stopifnot(abs(kupiec_lr_uc(c(TRUE, rep(FALSE,99)), .01)) < 1e-10)
stopifnot(kupiec_lr_uc(c(rep(TRUE,10),rep(FALSE,90)),.01) > 0)
stopifnot(abs(realized_variance(c(.1,-.2,.1)) - .06) < 1e-10)
cat("B19 R econometrics checks: OK\n")
