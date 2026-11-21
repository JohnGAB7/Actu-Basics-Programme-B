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
ht <- hotelling_one_sample(x,c(3.5,3.2,2.6))
stopifnot(ht["t_squared"]>0,ht["f_statistic"]>0)
singular <- matrix(c(1,1,1,1),nrow=2)
shrunk <- shrinkage_covariance(singular,.5)
stopifnot(det(shrunk)>0)
groups <- matrix(c(0,0,0,1,1,0,10,10,10,11,11,10),ncol=2,byrow=TRUE)
km <- kmeans(groups,centers=2,nstart=10)
stopifnot(length(km$cluster)==nrow(groups),km$tot.withinss<3)
stopifnot(covariance_rank_bound(5,10)==4)
cat("B13 R multivariate laboratory checks: OK\n")
