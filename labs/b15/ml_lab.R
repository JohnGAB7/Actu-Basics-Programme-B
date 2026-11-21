# B15 machine learning laboratory — base R only
set.seed(20261121)

ridge_lasso_1d <- function(x,y,alpha=1,method="ridge") {
  if(length(x)!=length(y) || length(x)<2 || any(!is.finite(c(x,y))) || !is.finite(alpha) || alpha<0) stop("Invalid inputs")
  method <- tolower(method); if(!method %in% c("ridge","lasso")) stop("Invalid method")
  xc <- x-mean(x); yc <- y-mean(y); q <- mean(xc^2); cc <- mean(xc*yc)
  if(q<=1e-14) stop("Zero variance predictor")
  slope <- if(method=="ridge") cc/(q+alpha) else sign(cc)*max(abs(cc)-alpha,0)/q
  c(intercept=mean(y)-slope*mean(x),slope=slope)
}
knn_predict <- function(train_x,train_y,test_x,k=3,task="regression") {
  if(length(train_x)!=length(train_y) || length(train_x)==0 || any(!is.finite(c(train_x,test_x))) || k<1 || k!=as.integer(k) || k>length(train_x)) stop("Invalid KNN inputs")
  task <- tolower(task); if(!task %in% c("regression","classification")) stop("Invalid task")
  vapply(test_x,function(q) {
    idx <- order(abs(train_x-q),seq_along(train_x))[seq_len(k)]
    if(task=="regression") mean(as.numeric(train_y[idx])) else {
      tab <- table(as.character(train_y[idx])); names(tab)[which(tab==max(tab))[1]]
    }
  },if(task=="regression") numeric(1) else character(1))
}
classification_metrics <- function(y,p,threshold=.5) {
  if(length(y)!=length(p) || length(y)==0 || any(!y %in% c(0,1)) || any(!is.finite(p)) || any(p<0 | p>1) || !is.finite(threshold) || threshold<0 || threshold>1) stop("Invalid classification inputs")
  pred <- as.integer(p>=threshold)
  tp <- sum(y==1 & pred==1); fp <- sum(y==0 & pred==1)
  tn <- sum(y==0 & pred==0); fn <- sum(y==1 & pred==0)
  precision <- if(tp+fp>0) tp/(tp+fp) else 0
  recall <- if(tp+fn>0) tp/(tp+fn) else 0
  specificity <- if(tn+fp>0) tn/(tn+fp) else 0
  f1 <- if(precision+recall>0) 2*precision*recall/(precision+recall) else 0
  c(tp=tp,fp=fp,tn=tn,fn=fn,precision=precision,recall=recall,specificity=specificity,
    accuracy=(tp+tn)/length(y),f1=f1,brier=mean((p-y)^2))
}
calibration_bins <- function(y,p,n_bins=5) {
  if(length(y)!=length(p) || length(y)==0 || any(!y %in% c(0,1)) || any(!is.finite(p)) || any(p<0 | p>1) || n_bins<1 || n_bins!=as.integer(n_bins)) stop("Invalid calibration inputs")
  bin <- pmin(floor(p*n_bins),n_bins-1)
  rows <- lapply(sort(unique(bin)),function(b) {
    idx <- bin==b
    c(bin=b,count=sum(idx),mean_predicted=mean(p[idx]),observed_rate=mean(y[idx]))
  })
  tab <- do.call(rbind,rows)
  ece <- sum(tab[,"count"]/length(y)*abs(tab[,"mean_predicted"]-tab[,"observed_rate"]))
  list(bins=tab,ece=ece)
}
group_metrics <- function(y,p,groups,threshold=.5) {
  if(length(y)!=length(p) || length(y)!=length(groups) || length(y)==0) stop("Length mismatch")
  lev <- sort(unique(as.character(groups))); out <- lapply(lev,function(g) {
    idx <- as.character(groups)==g
    m <- classification_metrics(y[idx],p[idx],threshold)
    c(m,selection_rate=(m["tp"]+m["fp"])/sum(idx))
  })
  names(out) <- lev; out
}
logsumexp <- function(z) { m <- max(z); m+log(sum(exp(z-m))) }
gaussian_mixture_1d_em <- function(x,K=2,max_iter=300,tolerance=1e-8,variance_floor=1e-6) {
  if(length(x)<2 || any(!is.finite(x)) || K<1 || K!=as.integer(K) || K>length(x) ||
     max_iter<1 || max_iter!=as.integer(max_iter) || !is.finite(tolerance) || tolerance<=0 ||
     !is.finite(variance_floor) || variance_floor<=0) stop("Invalid mixture inputs")
  x <- sort(x); n <- length(x); mu <- mean(x); gv <- mean((x-mu)^2)
  if(gv<=variance_floor) stop("Input variance too small")
  means <- vapply(0:(K-1),function(j) x[min(n, floor((j+.5)*n/K)+1)],numeric(1))
  vars <- rep(max(gv,variance_floor),K); weights <- rep(1/K,K)
  previous <- -Inf; converged <- FALSE
  for(iter in seq_len(max_iter)) {
    resp <- matrix(0,n,K); ll <- 0
    for(i in seq_len(n)) {
      lp <- log(weights)-.5*log(2*pi*vars)-(x[i]-means)^2/(2*vars)
      z <- logsumexp(lp); resp[i,] <- exp(lp-z); ll <- ll+z
    }
    nk <- colSums(resp)
    if(any(nk<=1e-10)) stop("Mixture component collapsed")
    weights <- nk/n
    means <- colSums(resp*matrix(x,n,K))/nk
    centered <- matrix(x,n,K)-matrix(means,n,K,byrow=TRUE)
    vars <- pmax(colSums(resp*centered^2)/nk,variance_floor)
    if(iter>1 && abs(ll-previous)<=tolerance*(1+abs(previous))) { converged <- TRUE; break }
    previous <- ll
  }
  # Report the observed-data log-likelihood for the parameters actually returned.
  ll <- sum(vapply(x, function(value) {
    logsumexp(log(weights) - .5 * log(2*pi*vars) -
                (value-means)^2/(2*vars))
  }, numeric(1)))
  ord <- order(means)
  list(weights=weights[ord],means=means[ord],variances=vars[ord],
       log_likelihood=ll,iterations=iter,converged=converged)
}

# Closed-form penalty checks.
ridge <- ridge_lasso_1d(c(-1,1),c(-2,2),.5,"ridge")
lasso <- ridge_lasso_1d(c(-1,1),c(-2,2),.5,"lasso")
stopifnot(abs(ridge["slope"]-2/1.5)<1e-12,abs(lasso["slope"]-1.5)<1e-12)
# Classification and calibration.
metrics <- classification_metrics(c(1,0,1,0),c(.9,.8,.4,.1),.5)
stopifnot(metrics["tp"]==1,metrics["fp"]==1,abs(metrics["brier"]-.255)<1e-12)
cal <- calibration_bins(c(1,0,1,0),c(.9,.8,.4,.1),2)
stopifnot(cal$ece>=0 && cal$ece<=1)
groups <- group_metrics(c(1,0,1,0),c(.9,.8,.4,.1),c("A","A","B","B"))
stopifnot(length(groups)==2)
# KNN.
stopifnot(knn_predict(c(0,1,2),c(0,10,20),.1,1,"regression")==0)
# Two separated synthetic Gaussian components.
mix <- gaussian_mixture_1d_em(c(-2.2,-2,-1.8,-2.1,-1.9,1.8,2,2.2,1.9,2.1),2)
stopifnot(abs(sum(mix$weights)-1)<1e-10,mix$means[1] < -1,mix$means[2] > 1,all(mix$variances>0))
cat("B15 R machine learning laboratory checks: OK\n")
