# B11 inference laboratory — base R only
set.seed(20261121)
sample_means <- function(distribution=c("normal","exponential"),n=40,B=5000) {
 distribution<-match.arg(distribution); if(n<1||B<1) stop("Invalid n or B")
 replicate(B,mean(if(distribution=="normal") rnorm(n) else rexp(n)))
}
bernoulli_risk <- function(p,n) {
 if(p<=0||p>=1||n<1) stop("Invalid p or n")
 v<-p*(1-p)/n; bias<-(1-2*p)/(n+2); vs<-n*p*(1-p)/(n+2)^2
 rbind(sample_mean=c(bias=0,variance=v,mse=v),
       beta_uniform_mean=c(bias=bias,variance=vs,mse=vs+bias^2))
}
poisson_mle <- function(x) {if(length(x)==0||any(x<0|x!=floor(x))) stop("Invalid counts");mean(x)}
proportion_interval <- function(x,n,method=c("wilson","wald"),alpha=.05) {
 method<-match.arg(method); if(n<1||x<0||x>n||alpha<=0||alpha>=1) stop("Invalid inputs")
 p<-x/n; z<-qnorm(1-alpha/2)
 if(method=="wald") return(c(p-z*sqrt(p*(1-p)/n),p+z*sqrt(p*(1-p)/n)))
 z2<-z^2; den<-1+z2/n; center<-(p+z2/(2*n))/den
 half<-z/den*sqrt(p*(1-p)/n+z2/(4*n^2)); c(center-half,center+half)
}
coverage_simulation <- function(p,n,B=4000) {
 x<-rbinom(B,n,p); cover<-c(wald=0,wilson=0)
 for(i in seq_len(B)) for(method in names(cover)) {
  ci<-proportion_interval(x[i],n,method); cover[method]<-cover[method]+(ci[1]<=p&&p<=ci[2])
 }
 cover/B
}
required_n_mean <- function(sigma,delta,alpha=.05,power=.8) {
 if(sigma<=0||delta<=0||alpha<=0||alpha>=1||power<=0||power>=1) stop("Invalid inputs")
 ceiling(((qnorm(1-alpha/2)+qnorm(power))*sigma/delta)^2)
}
binomial_tests <- function(x,n,p0) {
 if(n<1||x<0||x>n||p0<=0||p0>=1) stop("Invalid inputs")
 p<-x/n; term<-function(k,r) if(k==0) 0 else k*log(r)
 lr<-2*(term(x,p/p0)+term(n-x,(1-p)/(1-p0)))
 wald<-if(p>0&&p<1) n*(p-p0)^2/(p*(1-p)) else NA_real_
 c(p_hat=p,lr=lr,wald=wald,score=n*(p-p0)^2/(p0*(1-p0)))
}
bootstrap_interval <- function(x,B=2000,alpha=.05,statistic=c("mean","median")) {
 statistic<-match.arg(statistic); if(length(x)==0||B<100||alpha<=0||alpha>=1) stop("Invalid inputs")
 v<-replicate(B,{s<-sample(x,length(x),replace=TRUE);if(statistic=="mean") mean(s) else median(s)})
 as.numeric(quantile(v,c(alpha/2,1-alpha/2),type=7,names=FALSE))
}
permutation_test <- function(x,y,B=5000) {
 if(length(x)<2||length(y)<2||B<100) stop("Invalid inputs")
 obs<-mean(x)-mean(y); pooled<-c(x,y); nx<-length(x); extreme<-0
 for(i in seq_len(B)) {z<-sample(pooled);d<-mean(z[seq_len(nx)])-mean(z[(nx+1):length(z)]);extreme<-extreme+(abs(d)>=abs(obs)-1e-15)}
 c(difference=obs,p_value=(extreme+1)/(B+1))
}
beta_posterior <- function(x,n,a,b) {
 if(n<1||x<0||x>n||a<=0||b<=0) stop("Invalid inputs")
 c(a_post=a+x,b_post=b+n-x,mean=(a+x)/(a+b+n))
}
beta_predictive <- function(k,m,a,b) {
 if(m<0||k<0||k>m||a<=0||b<=0) stop("Invalid inputs")
 exp(lchoose(m,k)+lbeta(a+k,b+m-k)-lbeta(a,b))
}
stopifnot(abs(mean(sample_means("normal",40,3000)))<.04)
risk<-bernoulli_risk(.3,10);stopifnot(abs(risk["sample_mean","mse"]-.021)<1e-12)
stopifnot(abs(poisson_mle(c(2,3,5))-10/3)<1e-12)
coverage<-coverage_simulation(.05,20)
stopifnot(coverage["wilson"]>coverage["wald"])
stopifnot(required_n_mean(10,3)==88)
stopifnot(binomial_tests(12,20,.5)["lr"]>0)
stopifnot(bootstrap_interval(c(1,2,2,3,10),B=500)[1]<bootstrap_interval(c(1,2,2,3,10),B=500)[2])
stopifnot(permutation_test(c(1,2,3),c(4,5,6),1000)["p_value"]>=1/1001)
post<-beta_posterior(6,8,2,2);pred<-vapply(0:5,function(k) beta_predictive(k,5,post[1],post[2]),numeric(1))
stopifnot(abs(sum(pred)-1)<1e-10)
cat("B11 R inference laboratory checks: OK\n")
