"""B11 inference laboratory — Python standard library only."""
import math
import random
from statistics import NormalDist


def quantile7(values, p):
    if not values or not 0 <= p <= 1 or any(not math.isfinite(float(v)) for v in values):
        raise ValueError("finite non-empty values and p in [0,1] required")
    x = sorted(map(float, values)); h = (len(x)-1)*p
    lo, hi = math.floor(h), math.ceil(h)
    return x[lo] + (h-lo)*(x[hi]-x[lo])


def sample_means(distribution="normal", n=40, repetitions=5000, seed=20261121):
    if distribution not in {"normal","exponential"} or n < 1 or repetitions < 1:
        raise ValueError("invalid simulation parameters")
    rng=random.Random(seed); out=[]
    for _ in range(repetitions):
        x=[rng.gauss(0,1) for _ in range(n)] if distribution=="normal" else [rng.expovariate(1) for _ in range(n)]
        out.append(sum(x)/n)
    return out


def bernoulli_risk(p,n):
    if not 0 < p < 1 or n < 1: raise ValueError("p in (0,1), n positive required")
    v=p*(1-p)/n; bias=(1-2*p)/(n+2); vs=n*p*(1-p)/(n+2)**2
    return {"sample_mean":{"bias":0.0,"variance":v,"mse":v},
            "beta_uniform_mean":{"bias":bias,"variance":vs,"mse":vs+bias*bias}}


def poisson_mle(counts):
    if not counts or any(int(x)!=x or x<0 for x in counts): raise ValueError("non-negative integer counts required")
    return sum(counts)/len(counts)


def proportion_interval(successes,n,method="wilson",alpha=.05):
    if n<1 or successes<0 or successes>n or not 0<alpha<1 or method not in {"wald","wilson"}:
        raise ValueError("invalid interval inputs")
    p=successes/n; z=NormalDist().inv_cdf(1-alpha/2)
    if method=="wald":
        h=z*math.sqrt(p*(1-p)/n); return p-h,p+h
    z2=z*z; den=1+z2/n; center=(p+z2/(2*n))/den
    h=z/den*math.sqrt(p*(1-p)/n+z2/(4*n*n))
    return center-h,center+h


def coverage_simulation(p,n,repetitions=4000,seed=2026):
    if not 0<p<1 or n<1 or repetitions<1: raise ValueError("invalid simulation inputs")
    rng=random.Random(seed); cover={"wald":0,"wilson":0}
    for _ in range(repetitions):
        x=sum(rng.random()<p for _ in range(n))
        for method in cover:
            lo,hi=proportion_interval(x,n,method)
            cover[method]+=lo<=p<=hi
    return {k:v/repetitions for k,v in cover.items()}


def required_n_mean(sigma,delta,alpha=.05,power=.8):
    if sigma<=0 or delta<=0 or not 0<alpha<1 or not 0<power<1: raise ValueError("invalid design inputs")
    z=NormalDist()
    return math.ceil(((z.inv_cdf(1-alpha/2)+z.inv_cdf(power))*sigma/delta)**2)


def binomial_tests(successes,n,p0):
    if n<1 or successes<0 or successes>n or not 0<p0<1: raise ValueError("invalid binomial test inputs")
    p=successes/n
    term=lambda k,r: 0.0 if k==0 else k*math.log(r)
    lr=2*(term(successes,p/p0)+term(n-successes,(1-p)/(1-p0)))
    score=n*(p-p0)**2/(p0*(1-p0))
    wald=n*(p-p0)**2/(p*(1-p)) if 0<p<1 else None
    return {"p_hat":p,"lr":lr,"wald":wald,"score":score}


def bootstrap_interval(values,statistic="mean",repetitions=2000,alpha=.05,seed=20261121):
    if not values or statistic not in {"mean","median"} or repetitions<100 or not 0<alpha<1:
        raise ValueError("invalid bootstrap inputs")
    x=list(map(float,values)); rng=random.Random(seed); est=[]
    for _ in range(repetitions):
        s=[rng.choice(x) for _ in x]
        est.append(sum(s)/len(s) if statistic=="mean" else quantile7(s,.5))
    return quantile7(est,alpha/2),quantile7(est,1-alpha/2)


def permutation_test(x,y,repetitions=5000,seed=20261121):
    if len(x)<2 or len(y)<2 or repetitions<100: raise ValueError("invalid permutation inputs")
    pooled=list(map(float,x))+list(map(float,y)); nx=len(x)
    observed=sum(x)/len(x)-sum(y)/len(y); rng=random.Random(seed); extreme=0
    for _ in range(repetitions):
        rng.shuffle(pooled)
        d=sum(pooled[:nx])/nx-sum(pooled[nx:])/len(y)
        extreme += abs(d)>=abs(observed)-1e-15
    return {"difference":observed,"p_value":(extreme+1)/(repetitions+1)}


def beta_posterior(successes,n,a,b):
    if n<1 or successes<0 or successes>n or a<=0 or b<=0: raise ValueError("invalid Beta-Binomial inputs")
    ap,bp=a+successes,b+n-successes
    return {"a":ap,"b":bp,"mean":ap/(ap+bp)}


def beta_predictive_pmf(k,m,a,b):
    if m<0 or k<0 or k>m or a<=0 or b<=0: raise ValueError("invalid predictive inputs")
    lc=math.lgamma(m+1)-math.lgamma(k+1)-math.lgamma(m-k+1)
    lb=math.lgamma(a+k)+math.lgamma(b+m-k)-math.lgamma(a+b+m)
    lb0=math.lgamma(a)+math.lgamma(b)-math.lgamma(a+b)
    return math.exp(lc+lb-lb0)


if __name__=="__main__":
    print("Bernoulli risks",bernoulli_risk(.3,10))
    print("Poisson MLE",poisson_mle([2,3,5]))
    print("Coverage",coverage_simulation(.05,20))
    print("Required n",required_n_mean(10,3))
    print("LR/Wald/score",binomial_tests(12,20,.5))
    print("Bootstrap CI",bootstrap_interval([1,2,2,3,10]))
    print("Permutation",permutation_test([1,2,3],[4,5,6]))
    post=beta_posterior(6,8,2,2); print("Posterior",post)
    print("Predictive",sum(beta_predictive_pmf(k,5,post["a"],post["b"]) for k in range(6)))
