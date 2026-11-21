# B13 multivariate statistics laboratory — base R only
set.seed(20261121)

covariance_matrix <- function(x) {
  x <- as.matrix(x)
  if(nrow(x)<2 || ncol(x)<1 || any(!is.finite(x))) stop("Invalid data matrix")
  stats::cov(x)
}
correlation_matrix <- function(x) {
  x <- as.matrix(x)
  if(any(apply(x,2,sd)==0)) stop("Correlation undefined for constant variables")
  stats::cor(x)
}
pca_lab <- function(x, standardize=FALSE) {
  x <- as.matrix(x)
  if(any(!is.finite(x))) stop("Finite matrix required")
  z <- scale(x,center=TRUE,scale=standardize)
  if(any(!is.finite(z))) stop("Cannot standardize a constant variable")
  s <- crossprod(z)/(nrow(z)-1)
  eig <- eigen(s,symmetric=TRUE)
  list(mean=attr(scale(x,center=TRUE,scale=FALSE),"scaled:center"),
       covariance=s,eigenvalues=eig$values,eigenvectors=eig$vectors,
       scores=z%*%eig$vectors,explained=eig$values/sum(eig$values))
}
mahalanobis_squared <- function(x,mu,S) {
  d <- as.numeric(x-mu)
  if(any(!is.finite(c(d,S))) || min(eigen(S,symmetric=TRUE,only.values=TRUE)$values)<=0) stop("Finite positive-definite covariance required")
  as.numeric(t(d)%*%solve(S,d))
}
hotelling_one_sample <- function(x,mu0) {
  x <- as.matrix(x); n <- nrow(x); p <- ncol(x)
  if(n<=p || length(mu0)!=p) stop("Require n > p and compatible null mean")
  t2 <- n*mahalanobis_squared(colMeans(x),mu0,covariance_matrix(x))
  c(t_squared=t2,f_statistic=(n-p)*t2/(p*(n-1)),df1=p,df2=n-p)
}
shrinkage_covariance <- function(S,lambda) {
  S <- as.matrix(S); p <- nrow(S)
  if(ncol(S)!=p || any(!is.finite(S)) || lambda<0 || lambda>1) stop("Invalid shrinkage inputs")
  if(min(eigen(S,symmetric=TRUE,only.values=TRUE)$values) < -1e-10) stop("Covariance must be positive semidefinite")
  target <- mean(diag(S))*diag(p)
  (1-lambda)*S+lambda*target
}
covariance_rank_bound <- function(n,p) {
  if(n<2 || p<1) stop("Invalid dimensions")
  min(p,n-1)
}

x <- matrix(c(1,2,1, 2,1,1.5, 3,4,2, 4,3,2.5, 5,5,4, 6,4,4.5),ncol=3,byrow=TRUE)
S <- covariance_matrix(x)
stopifnot(max(abs(S-t(S)))<1e-12)
stopifnot(abs(correlation_matrix(x)[1,2])<=1)
pc <- pca_lab(x)
stopifnot(abs(sum(pc$explained)-1)<1e-10)
stopifnot(abs(mahalanobis_squared(c(1,2),c(0,0),diag(2))-5)<1e-12)
stopifnot(abs(mahalanobis_squared(2,0,matrix(4,1,1))-1)<1e-12)
ht <- hotelling_one_sample(x,c(3.5,3.2,2.6))
stopifnot(ht["t_squared"]>0,ht["f_statistic"]>0)
singular <- matrix(c(1,1,1,1),nrow=2)
shrunk <- shrinkage_covariance(singular,.5)
stopifnot(det(shrunk)>0)
groups <- matrix(c(0,0,0,1,1,0,10,10,10,11,11,10),ncol=2,byrow=TRUE)
km <- kmeans(groups,centers=2,nstart=10)
stopifnot(length(km$cluster)==nrow(groups),km$tot.withinss<3,km$ifault==0)
stopifnot(covariance_rank_bound(5,10)==4)
cat("B13 R multivariate laboratory checks: OK\n")


roy_f_bound <- function(theta, p, q, v) {
  if (length(theta)!=1 || !is.finite(theta) || theta<0 ||
      length(p)!=1 || length(q)!=1 || length(v)!=1 ||
      any(!is.finite(c(p,q,v))) || any(c(p,q,v)!=as.integer(c(p,q,v))) ||
      p<1 || q<1 || v<1) stop("theta must be finite/non-negative and p, q, v positive integers")
  if (v<p) stop("residual degrees of freedom must be at least p for E to be invertible")
  d <- max(p,q)
  df2 <- v-d+q
  if (df2<=0) stop("denominator degrees of freedom must be positive")
  exact <- min(p,q)==1
  c(f_statistic=theta*df2/d,df1=d,df2=df2,
    is_exact=as.numeric(exact),is_upper_bound=as.numeric(!exact),
    p_value_is_lower_bound=as.numeric(!exact))
}

# Roy F transformation: univariate response and rank-one hypothesis exact cases.
roy_p1 <- roy_f_bound(.4,1,2,30)
stopifnot(abs(roy_p1["f_statistic"]-6)<1e-12,
          roy_p1["df1"]==2,roy_p1["df2"]==30,roy_p1["is_exact"]==1)
roy_q1 <- roy_f_bound(.4,3,1,30)
stopifnot(abs(roy_q1["f_statistic"]-(.4*28/3))<1e-12,
          roy_q1["df1"]==3,roy_q1["df2"]==28,roy_q1["is_exact"]==1)
roy_bound <- roy_f_bound(.4,2,3,30)
stopifnot(abs(roy_bound["f_statistic"]-4)<1e-12,
          roy_bound["is_upper_bound"]==1,roy_bound["p_value_is_lower_bound"]==1)

cat("B13 R multivariate laboratory checks: OK")
