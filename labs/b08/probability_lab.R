# Reproducible B08 probability experiments (base R only).
set.seed(20261121)

# E01 — empirical frequency of Bernoulli(p).
p <- 0.20
n <- 100000L
x <- rbinom(n, size = 1, prob = p)
e01 <- mean(x)

# E02 — Bayes and the base-rate effect.
prevalence <- 0.01
sensitivity <- 0.95
specificity <- 0.90
posterior_positive <- sensitivity * prevalence /
  (sensitivity * prevalence + (1 - specificity) * (1 - prevalence))

# E04 — zero covariance does not imply independence.
x_dep <- c(-2, -1, 1, 2)
y_dep <- x_dep^2
e04_covariance <- mean((x_dep - mean(x_dep)) * (y_dep - mean(y_dep)))

# E05 — law of large numbers, Bernoulli(p).
p_lln <- 0.30
x_lln <- rbinom(100000L, size = 1, prob = p_lln)
checkpoints <- c(1000L, 10000L, 100000L)
e05_path <- sapply(checkpoints, function(k) mean(x_lln[seq_len(k)]))

# E06 — CLT for means of exponential(rate=1) observations.
repetitions <- 10000L
sample_size <- 40L
exponential_means <- replicate(repetitions, mean(rexp(sample_size, rate = 1)))
standardized_means <- sqrt(sample_size) * (exponential_means - 1)
e06 <- c(
  empirical_mean = mean(standardized_means),
  empirical_sd = sd(standardized_means),
  fraction_within_1_96 = mean(abs(standardized_means) <= 1.96)
)

# E07 — compound Poisson aggregate claims per exposure.
exposures <- 100000L
annual_frequency <- 0.12
mean_severity <- 800
counts <- rpois(exposures, lambda = annual_frequency)
total_claim_count <- sum(counts)
aggregate_claims <- sum(rexp(total_claim_count, rate = 1 / mean_severity))
e07 <- c(
  empirical_frequency = total_claim_count / exposures,
  theoretical_frequency = annual_frequency,
  empirical_pure_premium = aggregate_claims / exposures,
  theoretical_pure_premium = annual_frequency * mean_severity
)

# Deterministic analytical checks (simulation outputs remain approximate).
stopifnot(abs(posterior_positive - 0.08755760368663594) < 1e-12)
stopifnot(abs(e04_covariance) < 1e-12)
stopifnot(abs(e01 - p) < 0.01)
stopifnot(abs(tail(e05_path, 1) - p_lln) < 0.01)
stopifnot(abs(e06[["empirical_mean"]]) < 0.10)
stopifnot(e06[["empirical_sd"]] > 0.80, e06[["empirical_sd"]] < 1.20)
stopifnot(abs(e07[["empirical_frequency"]] - annual_frequency) < 0.015)

cat("B08 probability lab — R base implementation\n")
cat(sprintf("E01 empirical frequency: %.5f (theory %.2f)\n", e01, p))
cat(sprintf("E02 P(condition | positive): %.5f (%.2f%%)\n", posterior_positive, 100 * posterior_positive))
cat(sprintf("E04 covariance(X, X^2): %.8f (dependent variables)\n", e04_covariance))
cat("E05 LLN checkpoints:\n")
print(data.frame(n = checkpoints, empirical_mean = as.numeric(e05_path), theoretical_mean = p_lln))
cat("E06 standardized CLT statistics:\n")
print(e06)
cat("E07 compound Poisson portfolio:\n")
print(e07)
cat("All R analytical and simulation checks passed.\n")
