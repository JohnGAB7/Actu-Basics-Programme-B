# B20 advanced statistics and research-methods primitives; base R only.
# Educational implementations, not production inference/MCMC/optimization.

bootstrap_mean_ci <- function(sample, n_resamples = 2000L, alpha = .05, seed = 123) {
  if (length(sample) == 0L || !is.finite(n_resamples) || n_resamples != floor(n_resamples) ||
      n_resamples < 1L || !is.finite(alpha) || alpha <= 0 || alpha >= 1 ||
      any(!is.finite(sample))) stop("finite sample, integer resamples and alpha in (0,1) required")
  set.seed(seed)
  n <- length(sample)
  means <- replicate(n_resamples, mean(sample[sample.int(n, n, replace = TRUE)]))
  ci <- stats::quantile(means, c(alpha / 2, 1 - alpha / 2), names = FALSE, type = 7)
  c(estimate = mean(sample), lower = ci[1], upper = ci[2], bootstrap_se = stats::sd(means))
}

permutation_test_mean_difference <- function(first, second, n_resamples = 10000L, seed = 123) {
  if (length(first) == 0L || length(second) == 0L || !is.finite(n_resamples) ||
      n_resamples != floor(n_resamples) || n_resamples < 1L ||
      any(!is.finite(first)) || any(!is.finite(second))) stop("finite samples and integer positive resamples required")
  pooled <- c(first, second)
  n1 <- length(first)
  observed <- mean(first) - mean(second)
  total <- choose(length(pooled), n1)
  extreme <- 0L
  if (is.finite(total) && total <= n_resamples) {
    sets <- combn(seq_along(pooled), n1, simplify = FALSE)
    for (idx in sets) {
      other <- setdiff(seq_along(pooled), idx)
      stat <- mean(pooled[idx]) - mean(pooled[other])
      if (abs(stat) >= abs(observed) - 1e-12) extreme <- extreme + 1L
    }
    p <- extreme / length(sets)
    method <- "exact"
  } else {
    set.seed(seed)
    for (b in seq_len(n_resamples)) {
      idx <- sample.int(length(pooled), n1)
      other <- setdiff(seq_along(pooled), idx)
      stat <- mean(pooled[idx]) - mean(pooled[other])
      if (abs(stat) >= abs(observed) - 1e-12) extreme <- extreme + 1L
    }
    p <- (extreme + 1) / (n_resamples + 1)
    method <- "monte_carlo_plus_one"
  }
  list(difference = observed, p_value = p, method = method)
}

delta_method <- function(gradient, covariance) {
  if (length(gradient) == 0L || nrow(covariance) != length(gradient) ||
      ncol(covariance) != length(gradient) || any(!is.finite(gradient)) ||
      any(!is.finite(covariance)) ||
      max(abs(covariance - t(covariance))) > 1e-10) {
    stop("finite gradient and symmetric covariance of matching dimensions required")
  }
  variance <- as.numeric(t(gradient) %*% covariance %*% gradient)
  if (variance < -1e-10) stop("negative delta variance")
  c(variance = max(0, variance), standard_error = sqrt(max(0, variance)))
}

metropolis_hastings <- function(log_target, initial, n_iter, proposal_sd = 1, seed = 123) {
  if (!is.finite(n_iter) || n_iter != floor(n_iter) || n_iter < 2L ||
      !is.finite(proposal_sd) || proposal_sd <= 0 || !is.finite(initial)) stop("invalid MCMC settings")
  set.seed(seed)
  current <- initial
  current_log <- log_target(current)
  if (!is.finite(current_log)) stop("initial state must have a finite log target")
  draws <- numeric(n_iter)
  accepted <- 0L
  for (i in seq_len(n_iter)) {
    proposal <- rnorm(1, current, proposal_sd)
    proposal_log <- log_target(proposal)
    if (is.na(proposal_log) || proposal_log == Inf) stop("log_target must not return NA or positive infinity")
    if (log(runif(1)) < min(0, proposal_log - current_log)) {
      current <- proposal
      current_log <- proposal_log
      accepted <- accepted + 1L
    }
    draws[i] <- current
  }
  list(draws = draws, acceptance_rate = accepted / n_iter)
}

effective_sample_size <- function(samples, max_lag = floor(length(samples) / 2)) {
  n <- length(samples)
  if (n < 3L || any(!is.finite(samples)) || !is.finite(max_lag) ||
      max_lag != floor(max_lag) || max_lag < 0L || max_lag >= n) {
    stop("finite samples and integer max_lag in [0,n-1] required")
  }
  variance <- mean((samples - mean(samples))^2)
  if (variance <= 0) return(0)
  max_lag <- min(max_lag, n - 1L)
  tau <- 1
  if (max_lag > 0L) {
    for (lag in seq_len(max_lag)) {
      rho <- mean((samples[1:(n-lag)] - mean(samples)) *
                    (samples[(lag+1):n] - mean(samples))) / variance
      if (rho <= 0) break
      tau <- tau + 2 * rho
    }
  }
  min(n, n / tau)
}

benjamini_hochberg <- function(p_values, q = .05) {
  if (length(p_values) == 0L || any(!is.finite(p_values)) ||
      any(p_values < 0 | p_values > 1) || !is.finite(q) || q <= 0 || q >= 1) {
    stop("finite p-values in [0,1] and q in (0,1) required")
  }
  adjusted <- stats::p.adjust(p_values, method = "BH")
  list(adjusted_p_values = adjusted, rejected = adjusted <= q)
}

ridge_regression <- function(design, outcome, penalty, penalize_intercept = FALSE) {
  x <- as.matrix(design)
  if (nrow(x) != length(outcome) || nrow(x) == 0L || ncol(x) == 0L ||
      any(!is.finite(x)) || any(!is.finite(outcome)) ||
      !is.finite(penalty) || penalty < 0) stop("finite ridge inputs and non-negative penalty required")
  penalty_matrix <- diag(ncol(x)) * penalty
  if (!penalize_intercept) penalty_matrix[1,1] <- 0
  as.numeric(solve(crossprod(x) + penalty_matrix, crossprod(x, outcome)))
}

finite_difference_gradient <- function(function_value, point, step = 1e-6) {
  if (length(point) == 0L || any(!is.finite(point)) || !is.finite(step) || step <= 0) {
    stop("finite point and positive finite step required")
  }
  out <- numeric(length(point))
  for (j in seq_along(point)) {
    plus <- minus <- point
    plus[j] <- plus[j] + step
    minus[j] <- minus[j] - step
    out[j] <- (function_value(plus) - function_value(minus)) / (2 * step)
  }
  out
}

gradient_descent <- function(objective, gradient, initial, max_iter = 5000L,
                              tolerance = 1e-8, initial_step = 1) {
  if (length(initial) == 0L || any(!is.finite(initial)) || !is.finite(max_iter) ||
      max_iter != floor(max_iter) || max_iter < 1L || !is.finite(tolerance) ||
      tolerance <= 0 || !is.finite(initial_step) || initial_step <= 0) {
    stop("invalid optimization settings")
  }
  x <- as.numeric(initial)
  value <- objective(x)
  if (!is.finite(value)) stop("objective must be finite at initial point")
  converged <- FALSE
  iterations <- 0L
  for (iteration in seq_len(max_iter)) {
    g <- gradient(x)
    if (length(g) != length(x) || any(!is.finite(g))) stop("gradient must be finite and match point dimension")
    norm_sq <- sum(g^2)
    if (sqrt(norm_sq) < tolerance) {
      converged <- TRUE
      iterations <- iteration - 1L
      break
    }
    step <- initial_step
    accepted <- FALSE
    while (step > 1e-12) {
      candidate <- x - step * g
      candidate_value <- objective(candidate)
      if (!is.finite(candidate_value)) stop("objective returned a non-finite value")
      if (candidate_value <= value - 1e-4 * step * norm_sq) {
        x <- candidate
        value <- candidate_value
        accepted <- TRUE
        break
      }
      step <- step / 2
    }
    iterations <- iteration
    if (!accepted) break
  }
  if (sqrt(sum(gradient(x)^2)) < tolerance) converged <- TRUE
  list(point = x, value = value, iterations = iterations, converged = converged)
}

monte_carlo_standard_error <- function(values) {
  if (length(values) < 2L || any(!is.finite(values))) stop("at least two finite replications required")
  stats::sd(values) / sqrt(length(values))
}

# Executable checks
boot <- bootstrap_mean_ci(1:5, 500, .05, 7)
stopifnot(boot[["lower"]] <= boot[["estimate"]], boot[["upper"]] >= boot[["estimate"]])
perm <- permutation_test_mean_difference(1:3, 4:6, 1000)
stopifnot(perm$method == "exact", abs(perm$p_value - .1) < 1e-10)
delta <- delta_method(c(1,2), matrix(c(1,.2,.2,4),2,2))
stopifnot(abs(delta[["variance"]] - 17.8) < 1e-10)
mh <- metropolis_hastings(function(x) -.5*x^2, 0, 8000, 1, 42)
draws <- mh$draws[1001:8000]
stopifnot(mh$acceptance_rate > .1, mh$acceptance_rate < .9,
          abs(mean(draws)) < .15, abs(stats::var(draws) - 1) < .2)
stopifnot(effective_sample_size(c(.1,-.5,.7,-.2,.9,-.8,.3,.4)) > 0)
bh <- benjamini_hochberg(c(.01,.04,.03,.2), .05)
stopifnot(identical(bh$rejected, c(TRUE,FALSE,FALSE,FALSE)))
x <- cbind(1,0:3)
ridge0 <- ridge_regression(x,c(1,3,5,7),0)
ridge1 <- ridge_regression(x,c(1,3,5,7),1)
stopifnot(abs(ridge0[1]-1)<1e-10, abs(ridge0[2]-2)<1e-10, ridge1[2] < ridge0[2])
f <- function(z) z[1]^2 + 3*z[2]^2
grad <- finite_difference_gradient(f,c(2,1))
stopifnot(max(abs(grad-c(4,6))) < 1e-6)
obj <- function(z) (z[1]-3)^2 + 2*(z[2]+1)^2
g <- function(z) c(2*(z[1]-3),4*(z[2]+1))
opt <- gradient_descent(obj,g,c(0,0))
stopifnot(opt$converged, max(abs(opt$point-c(3,-1))) < 1e-5)
stopifnot(abs(monte_carlo_standard_error(1:4) - sqrt(5/12)) < 1e-10)
cat("B20 R advanced-statistics checks: OK\n")
