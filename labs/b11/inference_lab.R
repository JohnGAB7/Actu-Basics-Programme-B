# B11 statistical inference laboratory — base R only
set.seed(20261121)

binomial_pmf <- function(k,n,p) {
  if(n<0 || k<0 || k>n || p<0 || p>1) stop("Invalid binomial inputs")
  dbinom(k,size=n,prob=p)
}
exact_binomial_pvalue <- function(x,n,p0) {
  if(n<1 || x<0 || x>n || p0<0 || p0>1) stop("Invalid exact test inputs")
  probs <- dbinom(0:n,size=n,prob=p0)
  min(1,sum(probs[probs <= dbinom(x,size=n,prob=p0)+1e-15]))
}
wilson_interval <- function(x,n,alpha=.05) {
  if(n<1 || x<0 || x>n || alpha<=0 || alpha>=1) stop("Invalid Wilson inputs")
  z <- qnorm(1-alpha/2); phat <- x/n; z2 <- z^2
  den <- 1+z2/n
  center <- (phat+z2/(2*n))/den
  half <- z/den*sqrt(phat*(1-phat)/n+z2/(4*n^2))
  c(lower=center-half,upper=center+half)
}
poisson_mle <- function(x) {
  if(length(x)==0 || any(!is.finite(x)) || any(x<0) || any(x!=floor(x))) stop("Counts must be non-negative integers")
  c(n=length(x),estimate=mean(x),variance_of_observation_under_model=mean(x),
    variance_of_mle_under_model=sum(x)/length(x)^2,variance_estimate_under_model=sum(x)/length(x)^2,
    boundary_supremum_at_zero=as.numeric(sum(x)==0))
}
beta_binomial_update <- function(x,n,a,b) {
  if(n<0 || x<0 || x>n || a<=0 || b<=0) stop("Invalid Beta-Binomial inputs")
  ap <- a+x; bp <- b+n-x
  c(posterior_a=ap,posterior_b=bp,posterior_mean=ap/(ap+bp),
    posterior_variance=ap*bp/((ap+bp)^2*(ap+bp+1)),
    predictive_success_probability=ap/(ap+bp))
}
bootstrap_mean_interval <- function(x,B=5000,alpha=.05) {
  if(length(x)==0 || any(!is.finite(x)) || B<100 || alpha<=0 || alpha>=1) stop("Invalid bootstrap inputs")
  n <- length(x)
  means <- replicate(B,mean(sample(x,size=n,replace=TRUE)))
  quantile(means,c(alpha/2,1-alpha/2),type=7,names=FALSE)
}
permutation_mean_difference <- function(a,b,B=9999) {
  if(length(a)==0 || length(b)==0 || any(!is.finite(c(a,b))) || B<99) stop("Invalid permutation inputs")
  pooled <- c(a,b); na <- length(a)
  observed <- mean(a)-mean(b)
  permuted <- replicate(B,{
    z <- sample(pooled)
    mean(z[seq_len(na)])-mean(z[(na+1):length(z)])
  })
  extreme <- sum(abs(permuted)>=abs(observed)-1e-15)
  p <- (extreme+1)/(B+1)
  c(observed_difference=observed,extreme=extreme,repetitions=B,p_value_mc=p,
    mc_se_approx=sqrt(p*(1-p)/(B+1)))
}
one_sample_z_power <- function(n,effect,sigma,alpha=.05) {
  if(n<1 || effect<0 || sigma<=0 || alpha<=0 || alpha>=1) stop("Invalid power inputs")
  critical <- qnorm(1-alpha/2); shift <- effect*sqrt(n)/sigma
  1-pnorm(critical-shift)+pnorm(-critical-shift)
}
z_test_sample_size <- function(effect,sigma,alpha=.05,target_power=.8) {
  if(effect<=0 || sigma<=0 || alpha<=0 || alpha>=1 || target_power<=0 || target_power>=1) stop("Invalid sample-size inputs")
  ceiling(((qnorm(1-alpha/2)+qnorm(target_power))*sigma/effect)^2)
}

stopifnot(abs(exact_binomial_pvalue(10,10,.5)-2/1024)<1e-12)
stopifnot(abs(wilson_interval(7,10)[1]-.3968)<.001)
stopifnot(abs(wilson_interval(7,10)[2]-.8922)<.001)
stopifnot(abs(poisson_mle(c(0,1,2,1,3,2))["estimate"]-1.5)<1e-12)
bb <- beta_binomial_update(7,10,1,1)
stopifnot(abs(bb["posterior_mean"]-2/3)<1e-12)
stopifnot(z_test_sample_size(3,10)==88)
stopifnot(one_sample_z_power(88,3,10)>=.8)
cat("B11 R inference laboratory checks: OK\n")
