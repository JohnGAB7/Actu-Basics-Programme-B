# B14 causal inference lab — base R only
set.seed(20261121)

mean_diff <- function(y,a) {
  if(length(y)!=length(a) || length(y)==0 || any(!is.finite(y)) || any(!a %in% c(0,1))) stop("Invalid outcome/treatment")
  yt <- y[a==1]; yc <- y[a==0]
  if(length(yt)<2 || length(yc)<2) stop("At least two observations per arm required")
  c(estimate=mean(yt)-mean(yc),se=sqrt(var(yt)/length(yt)+var(yc)/length(yc)))
}
randomization_test <- function(y,a,B=9999,seed=20261121) {
  if(B<1 || B!=as.integer(B)) stop("B must be a positive integer")
  obs <- mean_diff(y,a)["estimate"]; nt <- sum(a); set.seed(seed); extreme <- 0
  for(b in seq_len(B)) {
    ap <- sample(c(rep(1,nt),rep(0,length(a)-nt)))
    stat <- mean_diff(y,ap)["estimate"]
    if(abs(stat)>=abs(obs)-1e-15) extreme <- extreme+1
  }
  c(estimate=obs,p_value=(extreme+1)/(B+1),permutations=B,extreme=extreme)
}
propensity_binary_x <- function(a,x) {
  if(length(a)!=length(x) || any(!a %in% c(0,1)) || any(!x %in% c(0,1))) stop("Binary vectors required")
  rates <- sapply(0:1,function(level) {
    z <- a[x==level]
    if(length(z)==0 || sum(z)==0 || sum(z)==length(z)) stop("Positivity fails in a stratum")
    mean(z)
  })
  rates[x+1]
}
propensity_weights <- function(a,e,target="ATE",stabilized=FALSE) {
  if(length(a)!=length(e) || any(!a %in% c(0,1)) || any(!is.finite(e)) || any(e<=0 | e>=1)) stop("Invalid propensity inputs")
  target <- toupper(target)
  if(!target %in% c("ATE","ATT","OVERLAP")) stop("Invalid target")
  p <- mean(a)
  if(target=="ATE") {
    w <- ifelse(a==1,1/e,1/(1-e))
    if(stabilized) w <- w*ifelse(a==1,p,1-p)
  } else if(target=="ATT") w <- ifelse(a==1,1,e/(1-e))
  else w <- ifelse(a==1,1-e,e)
  if(any(!is.finite(w)) || any(w<=0)) stop("Invalid weights")
  w
}
ess <- function(w) {
  if(length(w)==0 || any(!is.finite(w)) || any(w<=0)) stop("Positive finite weights required")
  sum(w)^2/sum(w^2)
}
weighted_smd <- function(x,a,w) {
  if(length(x)!=length(a) || length(a)!=length(w)) stop("Length mismatch")
  calc <- function(g) {
    z <- a==g; sw <- sum(w[z]); m <- sum(x[z]*w[z])/sw
    v <- sum(w[z]*(x[z]-m)^2)/sw
    c(mean=m,var=v)
  }
  t <- calc(1); c <- calc(0); pooled <- sqrt((t["var"]+c["var"])/2)
  if(pooled<=0) stop("Zero pooled variance")
  (t["mean"]-c["mean"])/pooled
}
standardized_ate_binary_x <- function(y,a,x) {
  if(length(y)!=length(a) || length(a)!=length(x) || any(!x %in% c(0,1))) stop("Invalid inputs")
  mix <- sapply(0:1,function(level) mean(x==level))
  cell <- matrix(NA_real_,2,2)
  for(arm in 0:1) for(level in 0:1) {
    z <- y[a==arm & x==level]
    if(length(z)==0) stop("Positivity/cell support failure")
    cell[arm+1,level+1] <- mean(z)
  }
  mu1 <- sum(mix*cell[2,]); mu0 <- sum(mix*cell[1,])
  c(ate=mu1-mu0,mu1=mu1,mu0=mu0,crude=mean(y[a==1])-mean(y[a==0]))
}
ipw_ate <- function(y,a,e) {
  if(length(y)!=length(a) || length(a)!=length(e) || any(e<=0 | e>=1)) stop("Invalid inputs")
  wt <- 1/e[a==1]; wc <- 1/(1-e[a==0])
  mu1 <- sum(y[a==1]/e[a==1])/sum(wt)
  mu0 <- sum(y[a==0]/(1-e[a==0]))/sum(wc)
  c(ate=mu1-mu0,mu1=mu1,mu0=mu0,ess_treated=ess(wt),ess_control=ess(wc))
}
aipw_ate <- function(y,a,e,m0,m1,min_score=1e-6) {
  if(!all(lengths(list(y,a,e,m0,m1))==length(y)) || any(!is.finite(c(y,e,m0,m1))) || any(e<min_score | e>1-min_score)) stop("Invalid inputs or overlap")
  mean(m1-m0+a*(y-m1)/e-(1-a)*(y-m0)/(1-e))
}
iv_wald <- function(y,a,z) {
  if(length(y)!=length(a) || length(a)!=length(z) || any(!a %in% c(0,1)) || any(!z %in% c(0,1))) stop("Invalid binary inputs")
  dy <- mean(y[z==1])-mean(y[z==0]); da <- mean(a[z==1])-mean(a[z==0])
  if(abs(da)<=1e-12) stop("Zero first stage")
  c(wald=dy/da,reduced_form=dy,first_stage=da)
}
did_2x2 <- function(tp,tpost,cp,cpost) {
  z <- c(tp,tpost,cp,cpost); if(any(!is.finite(z))) stop("Finite means required")
  (tpost-tp)-(cpost-cp)
}
local_intercept <- function(y,r,c,h,right=FALSE) {
  keep <- if(right) r>=c else r<c
  d <- r[keep]-c; yy <- y[keep]; w <- pmax(0,1-abs(d)/h)
  use <- w>0; d <- d[use]; yy <- yy[use]; w <- w[use]
  if(length(d)<3 || length(unique(d))<2) stop("Insufficient local support")
  X <- cbind(1,d); XtWX <- crossprod(X,X*w); XtWy <- crossprod(X,yy*w)
  if(abs(det(XtWX))<1e-14) stop("Singular local design")
  as.numeric(solve(XtWX,XtWy)[1])
}
local_linear_rd <- function(y,r,c=0,h=1,a=NULL) {
  if(length(y)!=length(r) || any(!is.finite(c(y,r))) || !is.finite(h) || h<=0) stop("Invalid RD inputs")
  left <- local_intercept(y,r,c,h,FALSE); right <- local_intercept(y,r,c,h,TRUE)
  jump <- right-left
  if(is.null(a)) return(c(jump_outcome=jump,left_intercept=left,right_intercept=right))
  al <- local_intercept(a,r,c,h,FALSE); ar <- local_intercept(a,r,c,h,TRUE)
  ja <- ar-al; if(abs(ja)<=1e-12) stop("Zero treatment jump")
  c(jump_outcome=jump,jump_treatment=ja,fuzzy_rd=jump/ja)
}

# Exact confounding illustration: crude +0.02; standardized effect -0.10.
x <- c(rep(1,8),rep(0,2),rep(1,2),rep(0,8))
a <- c(rep(1,10),rep(0,10))
y <- c(rep(.30,8),rep(.10,2),rep(.40,2),rep(.20,8))
e <- propensity_binary_x(a,x)
std <- standardized_ate_binary_x(y,a,x)
stopifnot(abs(std["crude"]-.02)<1e-12,abs(std["ate"]+.10)<1e-12)
stopifnot(abs(ipw_ate(y,a,e)["ate"]+.10)<1e-12)
m0 <- ifelse(x==1,.40,.20); m1 <- ifelse(x==1,.30,.10)
stopifnot(abs(aipw_ate(y,a,e,m0,m1)+.10)<1e-12)
w <- propensity_weights(a,e,"ATE")
stopifnot(ess(w)>0,abs(weighted_smd(x,a,w))<1e-10)
stopifnot(abs(did_2x2(10,14,8,9)-3)<1e-12)
iv <- iv_wald(c(1,2,1,2,5,6,5,6),c(0,0,0,1,1,1,1,1),c(0,0,0,0,1,1,1,1))
stopifnot(abs(iv["wald"]-4/.75)<1e-12)
r <- seq(-1,1,by=.05); tr <- as.integer(r>=0); yy <- 2+3*r+5*tr
rd <- local_linear_rd(yy,r,0,.8,tr)
stopifnot(abs(rd["fuzzy_rd"]-5)<1e-8)
cat("B14 R causal laboratory checks: OK\n")
