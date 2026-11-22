# B18 actuarial teaching primitives; base R only.
# These functions are educational, not production actuarial engines.

exposure_frequency <- function(claim_counts, exposures) {
  if (length(claim_counts) == 0L || length(claim_counts) != length(exposures) ||
      any(!is.finite(claim_counts)) || any(!is.finite(exposures)) ||
      any(claim_counts < 0) || any(exposures <= 0)) stop("invalid counts or exposures")
  sum(claim_counts) / sum(exposures)
}

aggregate_moments <- function(mean_n, var_n, mean_x, var_x) {
  if (any(!is.finite(c(mean_n, var_n, mean_x, var_x)))) stop("moments must be finite")
  if (any(c(mean_n, var_n, mean_x, var_x) < 0)) stop("moments must be non-negative")
  c(mean = mean_n * mean_x, variance = mean_n * var_x + var_n * mean_x^2)
}

poisson_offset_fit <- function(design, counts, exposures) {
  if (nrow(design) != length(counts) || length(counts) != length(exposures) ||
      any(!is.finite(design)) || any(!is.finite(counts)) || any(!is.finite(exposures)) ||
      any(counts != floor(counts)) || any(counts < 0) || any(exposures <= 0)) {
    stop("design must be finite; Poisson counts must be non-negative integers and exposures positive")
  }
  fit <- stats::glm.fit(x = as.matrix(design), y = counts,
                          family = stats::poisson(link = "log"),
                          offset = log(exposures))
  list(coefficients = fit$coefficients, fitted_means = fit$fitted.values,
       deviance = fit$deviance, converged = fit$converged)
}

buhlmann_credibility <- function(epv, vhm, observations) {
  if (any(!is.finite(c(epv, vhm, observations)))) stop("credibility inputs must be finite")
  if (epv < 0 || vhm <= 0 || observations < 0) stop("invalid credibility inputs")
  k <- epv / vhm
  c(K = k, Z = if ((observations + k) == 0) 0 else observations / (observations + k))
}

kaplan_meier <- function(times, events) {
  if (length(times) == 0L || length(times) != length(events) ||
      any(!is.finite(times)) || any(times < 0) || !is.logical(events) || anyNA(events)) {
    stop("times must be finite/non-negative and events non-missing logical indicators")
  }
  unique_times <- sort(unique(times))
  at_risk <- length(times)
  survival <- 1
  greenwood <- 0
  out <- data.frame(time = numeric(), at_risk = integer(), events = integer(),
                    censored = integer(), survival = numeric(), standard_error = numeric())
  for (t in unique_times) {
    d <- sum(times == t & events)
    c <- sum(times == t & !events)
    if (d > at_risk) stop("events exceed number at risk")
    survival <- survival * (1 - d / at_risk)
    if (d > 0 && d < at_risk) greenwood <- greenwood + d / (at_risk * (at_risk - d))
    se <- if (survival > 0) survival * sqrt(greenwood) else NA_real_
    out <- rbind(out, data.frame(time = t, at_risk = at_risk, events = d,
                                 censored = c, survival = survival, standard_error = se))
    at_risk <- at_risk - d - c
  }
  out
}

annuity_immediate <- function(survival_probabilities, interest_rate) {
  if (!is.finite(interest_rate) || any(!is.finite(survival_probabilities)) ||
      interest_rate <= -1 || any(survival_probabilities < 0 | survival_probabilities > 1) ||
      any(diff(survival_probabilities) > 0)) {
    stop("invalid annuity inputs: survival probabilities must be finite, in [0,1], and non-increasing")
  }
  sum((1 / (1 + interest_rate))^(seq_along(survival_probabilities)) *
        survival_probabilities)
}

term_insurance_epv <- function(death_probabilities, interest_rate, benefit = 1) {
  if (!is.finite(interest_rate) || !is.finite(benefit) ||
      any(!is.finite(death_probabilities)) || interest_rate <= -1 || benefit < 0 ||
      any(death_probabilities < 0 | death_probabilities > 1)) {
    stop("invalid insurance inputs")
  }
  v <- 1 / (1 + interest_rate)
  survival <- 1
  value <- 0
  for (k in seq_along(death_probabilities)) {
    q <- death_probabilities[k]
    value <- value + benefit * v^k * survival * q
    survival <- survival * (1 - q)
  }
  value
}

chain_ladder <- function(triangle) {
  if (!is.matrix(triangle) || nrow(triangle) == 0L) stop("triangle must be a non-empty matrix")
  width <- ncol(triangle)
  lengths <- integer(nrow(triangle))
  for (i in seq_len(nrow(triangle))) {
    row <- triangle[i, ]
    observed <- which(!is.na(row))
    if (length(observed) == 0L || !identical(observed, seq_len(max(observed))) ||
        any(!is.finite(row[observed])) || any(row[observed] < 0) ||
        any(diff(row[observed]) < 0)) stop("invalid cumulative triangle")
    lengths[i] <- length(observed)
  }
  if (any(diff(lengths) > 0)) stop("triangle rows must be ordered from oldest to newest origin period")
  factors <- numeric(max(0, width - 1L))
  if (width > 1L) {
    for (j in seq_len(width - 1L)) {
      rows <- which(!is.na(triangle[, j]) & !is.na(triangle[, j + 1L]))
      denominator <- sum(triangle[rows, j])
      if (length(rows) == 0L || denominator <= 0) stop("factor not estimable")
      factors[j] <- sum(triangle[rows, j + 1L]) / denominator
    }
  }
  ultimates <- reserves <- numeric(nrow(triangle))
  for (i in seq_len(nrow(triangle))) {
    last <- lengths[i]
    latest <- triangle[i, last]
    remaining <- if (last < width) factors[seq.int(last, width - 1L)] else numeric()
    ultimates[i] <- latest * prod(remaining)
    reserves[i] <- ultimates[i] - latest
  }
  list(age_to_age = factors, ultimates = ultimates, reserves = reserves)
}

xs_recovery <- function(loss, priority, limit) {
  if (any(!is.finite(c(loss, priority, limit)))) stop("values must be finite")
  if (any(c(loss, priority, limit) < 0)) stop("values must be non-negative")
  pmin(pmax(loss - priority, 0), limit)
}

empirical_var_tvar <- function(losses, alpha) {
  if (length(losses) == 0L || !is.finite(alpha) || alpha <= 0 || alpha >= 1 ||
      any(!is.finite(losses))) stop("losses must be finite and alpha in (0,1)")
  ordered <- sort(losses)
  n <- length(ordered)
  index <- min(n, max(1L, ceiling(alpha * n)))
  tail_mass <- (1 - alpha) * n
  remaining <- tail_mass
  weighted <- 0
  for (value in rev(ordered)) {
    weight <- min(1, remaining)
    weighted <- weighted + weight * value
    remaining <- remaining - weight
    if (remaining <= 1e-12) break
  }
  c(VaR = ordered[index], TVaR = weighted / tail_mass)
}

# Executable checks
stopifnot(exposure_frequency(c(2, 4), c(1, 2)) == 2)
stopifnot(aggregate_moments(2, 3, 10, 25)[["variance"]] == 350)
fit <- poisson_offset_fit(matrix(1, nrow = 4, ncol = 1), c(2, 4, 2, 4), c(1, 2, 1, 2))
stopifnot(fit$converged, abs(fit$coefficients[[1]] - log(2)) < 1e-6)
bad_poisson <- try(poisson_offset_fit(matrix(1, nrow = 2, ncol = 1),
                                               c(1.5, 2), c(1, 1)), silent = TRUE)
stopifnot(inherits(bad_poisson, "try-error"))
bad_annuity <- try(annuity_immediate(c(.8, .9), 0), silent = TRUE)
stopifnot(inherits(bad_annuity, "try-error"))
cred <- buhlmann_credibility(20, 5, 10)
stopifnot(abs(cred[["Z"]] - 10/14) < 1e-10)
km <- kaplan_meier(c(1, 2, 2, 3), c(TRUE, TRUE, FALSE, TRUE))
stopifnot(abs(km$survival[1] - .75) < 1e-10, abs(km$survival[2] - .5) < 1e-10)
stopifnot(abs(annuity_immediate(c(.9, .8), 0) - 1.7) < 1e-10)
stopifnot(abs(term_insurance_epv(c(.1, .2), 0, 100) - 28) < 1e-10)
tri <- matrix(c(100,150,180,120,180,NA,90,NA,NA), nrow = 3, byrow = TRUE)
cl <- chain_ladder(tri)
stopifnot(abs(cl$age_to_age[1] - 1.5) < 1e-10, abs(cl$age_to_age[2] - 1.2) < 1e-10)
stopifnot(abs(cl$ultimates[3] - 162) < 1e-10)
bad_triangle <- matrix(c(100, NA, NA, 120, 180, NA), nrow = 2, byrow = TRUE)
stopifnot(inherits(try(chain_ladder(bad_triangle), silent = TRUE), "try-error"))
stopifnot(xs_recovery(120000, 50000, 100000) == 70000)
bad_var <- try(empirical_var_tvar(c(1, Inf), .95), silent = TRUE)
stopifnot(inherits(bad_var, "try-error"))
risk <- empirical_var_tvar(c(1,2,3,4,100), .8)
stopifnot(risk[["VaR"]] == 4, risk[["TVaR"]] == 100)
cat("B18 R actuarial checks: OK\n")
