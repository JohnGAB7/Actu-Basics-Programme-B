# B19 econometrics and financial-statistics teaching primitives; base R only.
# These are transparent examples, not production estimators.

ols_fit <- function(design, outcome) {
  if (nrow(design) != length(outcome) || length(outcome) == 0L) stop("invalid OLS inputs")
  fit <- stats::lm.fit(x = as.matrix(design), y = outcome)
  if (anyNA(fit$coefficients)) stop("singular design matrix")
  list(coefficients = fit$coefficients, fitted = fit$fitted.values,
       residuals = fit$residuals, r_squared = 1 - sum(fit$residuals^2) /
         sum((outcome - mean(outcome))^2))
}

sandwich_covariance <- function(design, residuals, lag = 0L) {
  x <- as.matrix(design)
  n <- nrow(x)
  if (n != length(residuals) || n == 0L || lag < 0L || lag >= n) stop("invalid covariance inputs")
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
  if (length(outcome) == 0L || nrow(design) != length(outcome) || length(groups) != length(outcome)) {
    stop("invalid panel inputs")
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
      length(instrument) != length(outcome)) stop("invalid IV inputs")
  cov_zx <- mean((instrument - mean(instrument)) * (endogenous - mean(endogenous)))
  cov_zy <- mean((instrument - mean(instrument)) * (outcome - mean(outcome)))
  if (abs(cov_zx) < 1e-12) stop("instrument has no first-stage variation")
  cov_zy / cov_zx
}

logit_probability <- function(eta) plogis(eta)
logit_marginal_effect <- function(beta, probability) {
  if (any(probability < 0 | probability > 1)) stop("probabilities must be in [0,1]")
  beta * probability * (1 - probability)
}

simple_returns <- function(prices) {
  if (length(prices) < 2L || any(prices <= 0)) stop("positive prices required")
  prices[-1L] / prices[-length(prices)] - 1
}
log_returns <- function(prices) {
  if (length(prices) < 2L || any(prices <= 0)) stop("positive prices required")
  diff(log(prices))
}

capm_fit <- function(asset_excess, market_excess) {
  if (length(asset_excess) != length(market_excess) || length(asset_excess) < 2L ||
      var(market_excess) == 0) stop("invalid return series")
  beta <- cov(asset_excess, market_excess) / var(market_excess)
  c(alpha = mean(asset_excess) - beta * mean(market_excess), beta = beta)
}

empirical_var_es <- function(losses, alpha) {
  if (length(losses) == 0L || alpha <= 0 || alpha >= 1) stop("invalid risk inputs")
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

kupiec_lr_uc <- function(exceptions, alpha) {
  if (length(exceptions) == 0L || alpha <= 0 || alpha >= 1) stop("invalid backtest inputs")
  n <- length(exceptions)
  x <- sum(as.logical(exceptions))
  phat <- x / n
  ll <- function(p) {
    left <- if (n - x == 0) 0 else (n - x) * log(1 - p)
    right <- if (x == 0) 0 else x * log(p)
    left + right
  }
  max(0, -2 * (ll(alpha) - ll(phat)))
}

realized_variance <- function(intraday_returns) {
  if (length(intraday_returns) == 0L) stop("returns must be non-empty")
  sum(intraday_returns^2)
}

# Executable checks
x <- cbind(1, 0:3)
fit <- ols_fit(x, c(1, 3, 5, 7))
stopifnot(max(abs(fit$coefficients - c(1, 2))) < 1e-10)
res <- c(.1, -.2, .2, -.1)
hc <- sandwich_covariance(x, res, 0)
nw0 <- sandwich_covariance(x, res, 0)
stopifnot(max(abs(hc - nw0)) < 1e-10)
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
stopifnot(abs(kupiec_lr_uc(c(TRUE, rep(FALSE,99)), .01)) < 1e-10)
stopifnot(kupiec_lr_uc(c(rep(TRUE,10),rep(FALSE,90)),.01) > 0)
stopifnot(abs(realized_variance(c(.1,-.2,.1)) - .06) < 1e-10)
cat("B19 R econometrics checks: OK\n")
