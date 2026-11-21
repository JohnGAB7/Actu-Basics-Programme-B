# B16 time series laboratory — base R only
difference <- function(x,lag=1) {
  if(length(x)==0 || any(!is.finite(x)) || lag<1 || lag!=as.integer(lag) || lag>=length(x)) stop("Invalid difference inputs")
  x[(lag+1):length(x)]-x[1:(length(x)-lag)]
}
acf_sample <- function(x,max_lag) {
  if(length(x)<2 || any(!is.finite(x)) || max_lag<0 || max_lag!=as.integer(max_lag) || max_lag>=length(x)) stop("Invalid ACF inputs")
  z <- x-mean(x); den <- sum(z^2)
  if(den<=1e-14) stop("ACF undefined for constant series")
  vapply(0:max_lag,function(h) sum(z[(h+1):length(z)]*z[1:(length(z)-h)])/den,numeric(1))
}
fit_ar1 <- function(x) {
  if(length(x)<4 || any(!is.finite(x))) stop("At least four finite observations required")
  prev <- x[-length(x)]; curr <- x[-1]
  denom <- sum((prev-mean(prev))^2)
  if(denom<=1e-14) stop("Lagged series has zero variance")
  phi <- sum((prev-mean(prev))*(curr-mean(curr)))/denom
  intercept <- mean(curr)-phi*mean(prev)
  residuals <- curr-intercept-phi*prev
  list(intercept=intercept,phi=phi,innovation_variance=mean(residuals^2),stationary=abs(phi)<1,residuals=residuals)
}
forecast_ar1 <- function(last,intercept,phi,innovation_variance,horizon) {
  if(any(!is.finite(c(last,intercept,phi,innovation_variance))) || innovation_variance<0 || abs(phi)>=1 || horizon<1 || horizon!=as.integer(horizon)) stop("Invalid stationary AR(1) forecast inputs")
  mu <- intercept/(1-phi)
  forecasts <- lapply(seq_len(horizon),function(h) {
    c(horizon=h,mean=mu+phi^h*(last-mu),variance=innovation_variance*sum(phi^(2*(0:(h-1)))))
  })
  do.call(rbind,forecasts)
}
ses_forecast <- function(x,alpha,horizon=1) {
  if(length(x)==0 || any(!is.finite(x)) || !is.finite(alpha) || alpha<0 || alpha>1 || horizon<1 || horizon!=as.integer(horizon)) stop("Invalid SES inputs")
  level <- x[1]
  if(length(x)>1) for(v in x[-1]) level <- alpha*v+(1-alpha)*level
  list(level=level,forecast=rep(level,horizon))
}
forecast_metrics <- function(actual,predicted) {
  if(length(actual)==0 || length(actual)!=length(predicted) || any(!is.finite(c(actual,predicted)))) stop("Invalid forecast vectors")
  e <- actual-predicted
  c(mae=mean(abs(e)),rmse=sqrt(mean(e^2)))
}
rolling_origin_mae <- function(x,initial,method="naive",alpha=.3) {
  if(length(x)<=initial || initial<3 || initial!=as.integer(initial) || any(!is.finite(x))) stop("Invalid rolling-origin inputs")
  method <- tolower(method); if(!method %in% c("naive","ses","ar1")) stop("Invalid method")
  if(method=="ar1" && initial<4) stop("AR(1) rolling-origin fits require at least four training observations")
  errors <- numeric(0)
  for(t in seq.int(initial+1,length(x))) {
    train <- x[1:(t-1)]
    pred <- if(method=="naive") tail(train,1) else if(method=="ses") ses_forecast(train,alpha,1)$forecast[1] else {
      fit <- fit_ar1(train); ar1_forecast(tail(train,1),fit$phi,1,fit$intercept)[1]
    }
    errors <- c(errors,abs(x[t]-pred))
  }
  list(mae=mean(errors),errors=errors,origins=length(errors))
}
garch11_variance <- function(e,omega,alpha,beta,initial_variance=NULL) {
  if(length(e)==0 || any(!is.finite(e)) || !is.finite(omega) || omega<=0 || !is.finite(alpha) || !is.finite(beta) || alpha<0 || beta<0) stop("Invalid GARCH inputs")
  if(is.null(initial_variance)) initial_variance <- if(alpha+beta<1) omega/(1-alpha-beta) else mean(e^2)
  if(!is.finite(initial_variance) || initial_variance<=0) stop("Initial variance must be positive")
  v <- numeric(length(e)); v[1] <- initial_variance
  if(length(e)>1) for(t in 2:length(e)) v[t] <- omega+alpha*e[t-1]^2+beta*v[t-1]
  uncond <- if(alpha+beta<1) omega/(1-alpha-beta) else NA_real_
  list(variance=v,unconditional_variance=uncond,persistence=alpha+beta)
}
periodogram <- function(x) {
  if(length(x)<3 || any(!is.finite(x))) stop("At least three finite observations required")
  n <- length(x); z <- fft(x-mean(x)); k <- 0:floor(n/2)
  list(frequency=k/n,power=Mod(z[k+1])^2/(2*pi*n))
}
kalman_local_level <- function(y,q,r,initial_mean=0,initial_variance=1) {
  if(length(y)==0 || any(!is.finite(c(q,r,initial_mean,initial_variance))) || q<0 || r<=0 || initial_variance<=0) stop("Invalid Kalman inputs")
  m <- initial_mean; p <- initial_variance; means <- vars <- numeric(length(y)); innovations <- rep(NA_real_,length(y))
  if(any(is.nan(y))) stop("NaN observations are invalid; use NA for missing values")
  for(t in seq_along(y)) {
    mp <- m; pp <- p+q
    if(!is.na(y[t])) {
      if(!is.finite(y[t])) stop("Observations must be finite or NA")
      inn <- y[t]-mp; f <- pp+r; k <- pp/f
      m <- mp+k*inn; p <- (1-k)*pp; innovations[t] <- inn
    } else { m <- mp; p <- pp }
    means[t] <- m; vars[t] <- p
  }
  list(filtered_mean=means,filtered_variance=vars,innovations=innovations)
}


ar1_forecast <- function(last_value,phi,horizon,intercept=0) {
  if(any(!is.finite(c(last_value,phi,intercept))) || horizon<1 || horizon!=as.integer(horizon)) stop("Invalid AR(1) forecast inputs")
  out <- numeric(horizon); x <- last_value
  for(i in seq_len(horizon)) { x <- intercept+phi*x; out[i] <- x }
  out
}
forecast_errors <- function(actual,predicted) {
  if(length(actual)==0 || length(actual)!=length(predicted) || any(!is.finite(c(actual,predicted)))) stop("Length mismatch or non-finite data")
  e <- actual-predicted
  c(mae=mean(abs(e)),rmse=sqrt(mean(e^2)))
}
mase <- function(actual,predicted,training,seasonality=1) {
  if(length(training)<=seasonality || seasonality<1 || seasonality!=as.integer(seasonality)) stop("Invalid training scale")
  scale <- mean(abs(training[(seasonality+1):length(training)]-training[1:(length(training)-seasonality)]))
  if(scale<=0) stop("MASE undefined for zero naive scale")
  forecast_errors(actual,predicted)["mae"]/scale
}
rolling_origin_splits <- function(n,initial,horizon,step=1) {
  if(any(c(n,initial,horizon,step)!=as.integer(c(n,initial,horizon,step))) || initial<2 || horizon<1 || step<1 || initial+horizon>n) stop("Invalid rolling-origin dimensions")
  origins <- seq(initial,n-horizon,by=step)
  cbind(train_end=origins,test_start=origins,test_end=origins+horizon)
}
kalman_scalar_filter <- function(y,transition,loading,q,h,initial_state,initial_variance) {
  if(any(!is.finite(c(transition,loading,q,h,initial_state,initial_variance))) || q<0 || h<=0 || initial_variance<0) stop("Invalid Kalman parameters")
  a <- initial_state; p <- initial_variance
  out <- matrix(NA_real_,length(y),2,dimnames=list(NULL,c("state","variance")))
  if(any(is.nan(y))) stop("NaN observations are invalid; use NA for missing values")
  for(i in seq_along(y)) {
    ap <- transition*a; pp <- transition^2*p+q
    if(is.na(y[i])) { a <- ap; p <- pp } else {
      if(!is.finite(y[i])) stop("Observations must be finite or NA")
      f <- loading^2*pp+h; k <- pp*loading/f
      a <- ap+k*(y[i]-loading*ap); p <- (1-k*loading)*pp
    }
    out[i,] <- c(a,p)
  }
  out
}

# Exact checks
stopifnot(all(difference(c(1,3,6,10))==c(2,3,4)))
stopifnot(abs(acf_sample(c(1,2,3,4),2)[1]-1)<1e-12)
series <- 0
for(i in 1:20) series <- c(series,.5+.5*tail(series,1))
fit <- fit_ar1(series)
stopifnot(abs(fit$intercept-.5)<1e-8,abs(fit$phi-.5)<1e-8)
fc <- forecast_ar1(tail(series,1),.5,.5,.25,2)
stopifnot(abs(fc[1,"variance"]-.25)<1e-12)
stopifnot(all(ses_forecast(c(10,12,14),1,2)$forecast==14))
stopifnot(all(ar1_forecast(8,.5,3)==c(4,2,1)))
stopifnot(abs(mase(c(3,5),c(2,4),c(1,2,3,4),1)-1)<1e-12)
stopifnot(nrow(rolling_origin_splits(10,4,2,2))==3)
kg <- kalman_scalar_filter(c(NA,1),1,1,.1,.2,0,1)
stopifnot(kg[1,"variance"]>1,kg[2,"variance"]<kg[1,"variance"])
stopifnot(abs(rolling_origin_mae(1:5,3,"naive")$mae-1)<1e-12)
g <- garch11_variance(c(1,2,0),.1,.2,.7,1)
stopifnot(abs(g$variance[2]-1)<1e-12,abs(g$variance[3]-1.6)<1e-12,abs(g$unconditional_variance-1)<1e-12)
x <- sin(2*pi*(0:31)/4); spec <- periodogram(x)
stopifnot(abs(spec$frequency[which.max(spec$power)]-.25)<1e-12)
kf <- kalman_local_level(c(1,NA,1),0,1,0,1)
stopifnot(abs(kf$filtered_mean[1]-.5)<1e-12,abs(kf$filtered_mean[3]-2/3)<1e-12,is.na(kf$innovations[2]))
cat("B16 R time series laboratory checks: OK\n")
