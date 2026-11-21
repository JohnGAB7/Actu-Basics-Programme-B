# B18 actuarial teaching primitives; base R only.
# These functions are educational, not production actuarial engines.

exposure_frequency <- function(claim_counts, exposures) {
  if (length(claim_counts) == 0L || length(claim_counts) != length(exposures) ||
      any(claim_counts < 0) || any(exposures <= 0)) stop("invalid counts or exposures")
  sum(claim_counts) / sum(exposures)
}

aggregate_moments <- function(mean_n, var_n, mean_x, var_x) {
  if (any(c(mean_n, var_n, mean_x, var_x) < 0)) stop("moments must be non-negative")
  c(mean = mean_n * mean_x, variance = mean_n * var_x + var_n * mean_x^2)
}

poisson_offset_fit <- function(design, counts, exposures) {
  if (nrow(design) != length(counts) || length(counts) != length(exposures) ||
      any(counts < 0) || any(exposures <= 0)) stop("invalid inputs")
  fit <- stats::glm(counts ~ design - 1, family = stats::poisson(link = "log"),
                    offset = log(exposures))
  list(coefficients = stats::coef(fit), fitted_means = stats::fitted(fit),
       deviance = stats::deviance(fit), converged = fit$converged)
}

buhlmann_credibility <- function(epv, vhm, observations) {
  if (epv < 0 || vhm <= 0 || observations < 0) stop("invalid credibility inputs")
  k <- epv / vhm
  c(K = k, Z = if ((observations + k) == 0) 0 else observations / (observations + k))
}

kaplan_meier <- function(times, events) {
  if (length(times) == 0L || length(times) != length(events) || any(times < 0)) {
    stop("invalid survival inputs")
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
  if (interest_rate <= -1 || any(survival_probabilities < 0 | survival_probabilities > 1)) {
    stop("invalid annuity inputs")
  }
  sum((1 / (1 + interest_rate))^(seq_along(survival_probabilities)) *
        survival_probabilities)
}

term_insurance_epv <- function(death_probabilities, interest_rate, benefit = 1) {
  if (interest_rate <= -1 || benefit < 0 || any(death_probabilities < 0 | death_probabilities > 1)) {
    stop("invalid insurance inputs")
  }
  sum(benefit * (1 / (1 + interest_rate))^(seq_along(death_probabilities)) *
        death_probabilities)
}

chain_ladder <- function(triangle) {
  if (!is.matrix(triangle) || nrow(triangle) == 0L) stop("triangle must be a non-empty matrix")
  width <- ncol(triangle)
  lengths <- integer(nrow(triangle))
  for (i in seq_len(nrow(triangle))) {
    row <- triangle[i, ]
    observed <- which(!is.na(row))
    if (length(observed) == 0L || !identical(observed, seq_len(max(observed))) ||
        any(row[observed] < 0) || any(diff(row[observed]) < 0)) stop("invalid cumulative triangle")
    lengths[i] <- length(observed)
  }
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
  if (any(c(loss, priority, limit) < 0)) stop("values must be non-negative")
  pmin(pmax(loss - priority, 0), limit)
}

empirical_var_tvar <- function(losses, alpha) {
  if (length(losses) == 0L || alpha <= 0 || alpha >= 1) stop("invalid quantile inputs")
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
cred <- buhlmann_credibility(20, 5, 10)
stopifnot(abs(cred[["Z"]] - 10/14) < 1e-10)
km <- kaplan_meier(c(1, 2, 2, 3), c(TRUE, TRUE, FALSE, TRUE))
stopifnot(abs(km$survival[1] - .75) < 1e-10, abs(km$survival[2] - .5) < 1e-10)
stopifnot(abs(annuity_immediate(c(.9, .8), 0) - 1.7) < 1e-10)
stopifnot(abs(term_insurance_epv(c(.1, .2), 0, 100) - 30) < 1e-10)
tri <- matrix(c(100,150,180,120,180,NA,90,NA,NA), nrow = 3, byrow = TRUE)
cl <- chain_ladder(tri)
stopifnot(abs(cl$age_to_age[1] - 1.5) < 1e-10, abs(cl$age_to_age[2] - 1.2) < 1e-10)
stopifnot(abs(cl$ultimates[3] - 162) < 1e-10)
stopifnot(xs_recovery(120000, 50000, 100000) == 70000)
risk <- empirical_var_tvar(c(1,2,3,4,100), .8)
stopifnot(risk[["VaR"]] == 4, risk[["TVaR"]] == 100)
cat("B18 R actuarial checks: OK\n")
