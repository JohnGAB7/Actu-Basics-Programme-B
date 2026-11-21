# B12 regression and GLM laboratory — base R + recommended stats package
set.seed(20261121)
x<-1:6; y<-c(3,5,7,8,11,12)
fit<-lm(y~x)
stopifnot(abs(coef(fit)[1]-1.26666666666667)<1e-10, abs(coef(fit)[2]-1.82857142857143)<1e-8)
h<-hatvalues(fit); cooks<-cooks.distance(fit)
stopifnot(all(h>=0 & h<=1),length(cooks)==length(x))
# Ridge: 0.5*SSE + 0.5*lambda*beta^2; LASSO: 0.5*SSE + lambda*abs(beta), centered predictor; intercept unpenalized
xc<-x-mean(x); yc<-y-mean(y); sxx<-sum(xc^2); sxy<-sum(xc*yc); lambda<-100
ridge<-sxy/(sxx+lambda); lasso<-sign(sxy)*max(abs(sxy)-lambda,0)/sxx
stopifnot(abs(ridge)<abs(sxy/sxx),lasso==0)
# Logistic regression with deterministic synthetic binary data
lx<-seq(-5,4.9,by=.1); lp<-plogis(-.2+.8*lx); ly<-rbinom(length(lx),1,lp)
logit<-glm(ly~lx,family=binomial())
stopifnot(logit$converged,is.finite(coef(logit)[2]),coef(logit)[2]>0,all(fitted(logit)>0 & fitted(logit)<1))
# Poisson regression with exposure offset
px<-seq(-1.5,1.4,by=.1); exposure<-1+(seq_along(px)%%3)
py<-rpois(length(px),exposure*exp(.2+.3*px))
pois<-glm(py~px+offset(log(exposure)),family=poisson())
stopifnot(pois$converged,is.finite(coef(pois)[2]),deviance(pois)>=0)
icc<-.4/(.4+.6)
stopifnot(abs(icc-.4)<1e-12)
cat("B12 R regression laboratory checks: OK\n")
