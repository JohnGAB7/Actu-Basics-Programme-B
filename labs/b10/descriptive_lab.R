# B10 descriptive statistics and sampling laboratory — base R only
set.seed(20261121)

quantile_type7 <- function(x, p) {
  if (length(x)==0 || any(!is.finite(x)) || p<0 || p>1) stop("Invalid quantile input")
  as.numeric(quantile(x, probs=p, type=7, names=FALSE))
}
descriptive_summary <- function(x, ratio_scale=TRUE) {
  if (length(x)==0 || any(!is.finite(x))) stop("x must be non-empty and finite")
  m <- median(x)
  mad_raw <- median(abs(x-m))
  cv <- if (ratio_scale && length(x)>1 && mean(x)>0) sd(x)/abs(mean(x)) else NA_real_
  c(n=length(x), mean=mean(x), median=m, q1=quantile_type7(x,.25),
    q3=quantile_type7(x,.75), iqr=IQR(x,type=7), variance_n=mean((x-mean(x))^2),
    variance_n1=if(length(x)>1) var(x) else NA_real_, mad_raw=mad_raw,
    mad_scaled=1.4826*mad_raw, cv_sample=cv)
}
ecdf_at <- function(x, grid) vapply(grid, function(t) mean(x<=t), numeric(1))
histogram_density <- function(x, breaks) {
  if(length(breaks)<2 || any(diff(breaks)<=0) || min(x)<breaks[1] || max(x)>tail(breaks,1)) stop("Invalid breaks")
  counts <- hist(x, breaks=breaks, plot=FALSE, right=FALSE, include.lowest=TRUE)$counts
  widths <- diff(breaks)
  data.frame(left=head(breaks,-1), right=tail(breaks,-1), count=counts,
             frequency=counts/length(x), density=counts/(length(x)*widths))
}
audit_records <- function(data, key, required, ranges=list()) {
  missing <- vapply(required, function(nm) sum(is.na(data[[nm]])), numeric(1))
  duplicated_keys <- unique(as.character(data[[key]][duplicated(data[[key]]) & !is.na(data[[key]])]))
  invalid_numeric <- out_of_range <- setNames(numeric(length(ranges)), names(ranges))
  for(nm in names(ranges)) {
    values <- suppressWarnings(as.numeric(data[[nm]]))
    invalid_numeric[nm] <- sum(!is.na(data[[nm]]) & is.na(values))
    valid <- !is.na(values)
    out_of_range[nm] <- sum(valid & (values<ranges[[nm]][1] | values>ranges[[nm]][2]))
  }
  list(rows=nrow(data), missing_by_field=missing, duplicate_keys=duplicated_keys,
       invalid_numeric=invalid_numeric, out_of_range=out_of_range)
}
horvitz_thompson_total <- function(y, pi) {
  if(length(y)==0 || length(y)!=length(pi) || any(!is.finite(y)) || any(pi<=0 | pi>1)) stop("Invalid HT input")
  sum(y/pi)
}
hajek_mean <- function(y, pi) {
  if(length(y)==0 || length(y)!=length(pi) || any(!is.finite(y)) || any(pi<=0 | pi>1)) stop("Invalid Hajek input")
  d <- 1/pi
  sum(d*y)/sum(d)
}
srs_mean_variance <- function(population, n) {
  N <- length(population)
  if(N<2 || n<1 || n>N) stop("Invalid SRS input")
  (1-n/N)*var(population)/n
}
pearson_correlation <- function(x,y) {
  if(length(x)!=length(y) || length(x)<2 || sd(x)==0 || sd(y)==0) stop("Invalid correlation input")
  cor(x,y)
}
simpson_example <- function() {
  data.frame(stratum=c("stratum_1","stratum_2","aggregate"),
    rate_A=c(81/87,192/263,(81+192)/(87+263)),
    rate_B=c(234/270,55/80,(234+55)/(270+80)))
}
missingness_summary <- function(data, fields) {
  data.frame(field=fields,
    missing=vapply(fields,function(nm) sum(is.na(data[[nm]])),numeric(1)),
    observed=vapply(fields,function(nm) sum(!is.na(data[[nm]])),numeric(1)),
    missing_rate=vapply(fields,function(nm) mean(is.na(data[[nm]])),numeric(1)))
}

x <- c(2,3,3,7,10)
stopifnot(descriptive_summary(x)["mean"]==5)
stopifnot(descriptive_summary(x)["median"]==3)
stopifnot(quantile_type7(c(1,2,3,4),.25)==1.75)
h <- histogram_density(c(1,2,3,7,10),c(0,5,12))
stopifnot(abs(sum(h$density*diff(c(0,5,12)))-1)<1e-12)
stopifnot(horvitz_thompson_total(c(10,20,30),c(.5,.25,.1))==400)
stopifnot(abs(hajek_mean(c(10,20,30),c(.5,.25,.1))-25)<1e-12)
stopifnot(abs(srs_mean_variance(c(10,20,30,40,50),2)-75)<1e-12)
s <- simpson_example()
stopifnot(s$rate_A[1]>s$rate_B[1], s$rate_A[2]>s$rate_B[2], s$rate_A[3]<s$rate_B[3])
cat("B10 R laboratory checks: OK\n")
