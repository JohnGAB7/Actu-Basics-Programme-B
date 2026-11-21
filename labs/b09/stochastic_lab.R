# B09 stochastic-process laboratory — base R only
set.seed(20261121)

validate_transition <- function(P) {
  if (!is.matrix(P) || nrow(P) == 0 || nrow(P) != ncol(P) ||
      any(P < 0) || any(abs(rowSums(P) - 1) > 1e-10)) stop("Invalid transition matrix")
  invisible(TRUE)
}
propagate_markov <- function(pi, P, steps) {
  validate_transition(P)
  if (length(pi) != nrow(P) || any(pi < 0) || abs(sum(pi) - 1) > 1e-10 || steps < 0) stop("Invalid initial distribution or steps")
  for (i in seq_len(steps)) pi <- as.numeric(pi %*% P)
  pi
}
stationary_two_state <- function(p01, p10) c(p10, p01) / (p01 + p10)
absorption_one_transient <- function(q) {
  if (q < 0 || q >= 1) stop("q must be in [0,1)")
  c(mean_steps = 1/(1-q), variance_steps = q/(1-q)^2)
}
poisson_pmf <- function(k, mean) {
  if (k < 0 || k != floor(k) || mean < 0) stop("Invalid Poisson parameters")
  dpois(k, mean)
}
simulate_poisson_arrivals <- function(rate, horizon) {
  if (rate <= 0 || horizon < 0) stop("Invalid rate or horizon")
  times <- numeric()
  t <- 0
  repeat {
    t <- t + rexp(1, rate=rate)
    if (t > horizon) break
    times <- c(times, t)
  }
  times
}
simulate_renewal_count <- function(mean_interarrival, horizon) {
  if (mean_interarrival <= 0 || horizon < 0) stop("Invalid renewal parameters")
  t <- 0
  count <- 0
  repeat {
    t <- t + rexp(1, rate=1/mean_interarrival)
    if (t > horizon) break
    count <- count + 1
  }
  count
}
simulate_random_walk <- function(steps) c(0, cumsum(ifelse(runif(steps) < .5, 1, -1)))
simulate_brownian_path <- function(horizon, steps) {
  dt <- horizon/steps
  c(0, cumsum(rnorm(steps, sd=sqrt(dt))))
}
quadratic_variation <- function(path) sum(diff(path)^2)

P <- matrix(c(.8,.3,.2,.7), nrow=2)
stopifnot(max(abs(propagate_markov(c(1,0), P, 2)-c(.70,.30))) < 1e-10)
stopifnot(max(abs(stationary_two_state(.2,.3)-c(.6,.4))) < 1e-10)
stopifnot(max(abs(absorption_one_transient(.75)-c(4,12))) < 1e-10)
stopifnot(abs(poisson_pmf(0,2)-exp(-2)) < 1e-10)
arrivals <- simulate_poisson_arrivals(4, 1)
stopifnot(all(diff(c(0,arrivals)) > 0), all(arrivals <= 1))
renewals <- simulate_renewal_count(2, 20000)
stopifnot(abs(renewals/20000-.5) < .03)
walk <- simulate_random_walk(100)
stopifnot(length(walk)==101, all(abs(diff(walk))==1))
brownian <- simulate_brownian_path(1, 10000)
stopifnot(abs(quadratic_variation(brownian)-1) < .08)
cat("B09 R laboratory checks: OK\n")
