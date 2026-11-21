"""B12 regression and GLM laboratory — Python standard library only."""
from __future__ import annotations
import math
import random
from typing import Sequence


def _check_xy(x: Sequence[float], y: Sequence[float]) -> tuple[list[float], list[float]]:
    a,b=list(map(float,x)),list(map(float,y))
    if len(a)!=len(b) or len(a)<3 or any(not math.isfinite(v) for v in a+b):
        raise ValueError("x and y must be finite, equal length and n >= 3")
    if len(set(a))<2: raise ValueError("x must vary")
    return a,b


def ols_simple(x: Sequence[float], y: Sequence[float]) -> dict[str, object]:
    x,y=_check_xy(x,y); n=len(x); mx=sum(x)/n; my=sum(y)/n
    sxx=sum((v-mx)**2 for v in x); sxy=sum((a-mx)*(b-my) for a,b in zip(x,y))
    slope=sxy/sxx; intercept=my-slope*mx
    fitted=[intercept+slope*v for v in x]; residuals=[b-a for a,b in zip(fitted,y)]
    sse=sum(e*e for e in residuals); sst=sum((v-my)**2 for v in y)
    mse=sse/(n-2)
    se_slope=math.sqrt(mse/sxx)
    se_intercept=math.sqrt(mse*(1/n+mx*mx/sxx))
    return {"intercept":intercept,"slope":slope,"fitted":fitted,"residuals":residuals,
            "sse":sse,"sst":sst,"r_squared":1-sse/sst if sst else None,
            "residual_variance":mse,"se_slope":se_slope,"se_intercept":se_intercept,"df_residual":n-2}


def ols_diagnostics(x: Sequence[float], y: Sequence[float]) -> dict[str, list[float]]:
    fit=ols_simple(x,y); a=list(map(float,x)); n=len(a); mx=sum(a)/n
    sxx=sum((v-mx)**2 for v in a); p=2; mse=float(fit["residual_variance"])
    leverage=[1/n+(v-mx)**2/sxx for v in a]
    residuals=fit["residuals"]
    studentized=[e/math.sqrt(mse*(1-h)) if mse>0 and h<1 else 0.0 for e,h in zip(residuals,leverage)]
    cooks=[r*r*h/(p*(1-h)) if h<1 else math.inf for r,h in zip(studentized,leverage)]
    return {"leverage":leverage,"studentized_residuals":studentized,"cooks_distance":cooks}


def ridge_lasso_simple(x: Sequence[float], y: Sequence[float], penalty: float) -> dict[str, float]:
    """Centered one-predictor minimizers: 0.5*SSE+0.5*λβ² (ridge), 0.5*SSE+λ|β| (lasso)."""
    a,b=_check_xy(x,y)
    if not math.isfinite(penalty) or penalty<0: raise ValueError("penalty must be finite and non-negative")
    mx,my=sum(a)/len(a),sum(b)/len(b)
    sxx=sum((v-mx)**2 for v in a); sxy=sum((u-mx)*(v-my) for u,v in zip(a,b))
    ridge=sxy/(sxx+penalty)
    soft=math.copysign(max(abs(sxy)-penalty,0),sxy)
    lasso=soft/sxx
    return {"ols_slope":sxy/sxx,"ridge_slope":ridge,"lasso_slope":lasso,
            "ridge_intercept":my-ridge*mx,"lasso_intercept":my-lasso*mx}


def _solve_symmetric_2x2(a: float,b: float,c: float,u: float,v: float) -> tuple[float,float]:
    det=a*c-b*b
    if not all(math.isfinite(v) for v in (a,b,c,u,v,det)) or det<=1e-14: raise ValueError("information matrix is singular; possible separation or non-identifiability")
    return ((c*u-b*v)/det,(a*v-b*u)/det)


def logistic_1d(x: Sequence[float], y: Sequence[int], max_iter: int=100, tolerance: float=1e-8) -> dict[str, object]:
    a,b=_check_xy(x,y)
    if max_iter<1 or int(max_iter)!=max_iter or not math.isfinite(tolerance) or tolerance<=0: raise ValueError("max_iter must be positive and tolerance finite and positive")
    if any(v not in (0,1) for v in b) or len(set(b))<2: raise ValueError("binary response must contain both 0 and 1")
    mean_y=sum(b)/len(b); beta0=math.log(mean_y/(1-mean_y)); beta1=0.0
    fitted=[]; converged=False
    for iteration in range(max_iter):
        p=[1/(1+math.exp(-max(-30,min(30,beta0+beta1*v)))) for v in a]
        w=[q*(1-q) for q in p]
        i00=sum(w); i01=sum(q*v for q,v in zip(w,a)); i11=sum(q*v*v for q,v in zip(w,a))
        s0=sum(obs-q for obs,q in zip(b,p)); s1=sum(v*(obs-q) for v,obs,q in zip(a,b,p))
        d0,d1=_solve_symmetric_2x2(i00,i01,i11,s0,s1)
        beta0+=d0; beta1+=d1
        if max(abs(d0),abs(d1))<tolerance:
            converged=True
            break
    fitted=[1/(1+math.exp(-max(-30,min(30,beta0+beta1*v)))) for v in a]
    ll=sum(obs*math.log(max(q,1e-15))+(1-obs)*math.log(max(1-q,1e-15)) for obs,q in zip(b,fitted))
    return {"intercept":beta0,"slope":beta1,"fitted":fitted,"log_likelihood":ll,"iterations":iteration+1,"converged":converged}


def poisson_1d(x: Sequence[float], counts: Sequence[int], exposure: Sequence[float] | None=None,
               max_iter: int=100, tolerance: float=1e-8) -> dict[str, object]:
    a,y=_check_xy(x,counts); n=len(a)
    ex=list(map(float,exposure)) if exposure is not None else [1.0]*n
    if max_iter<1 or int(max_iter)!=max_iter or not math.isfinite(tolerance) or tolerance<=0: raise ValueError("max_iter must be positive and tolerance finite and positive")
    if len(ex)!=n or any(v<=0 or not math.isfinite(v) for v in ex) or any(v<0 or int(v)!=v for v in y):
        raise ValueError("positive exposures and non-negative integer counts required")
    if sum(y)==0: raise ValueError("all-zero counts have no finite intercept MLE in the unpenalized Poisson model")
    off=[math.log(v) for v in ex]; rate=sum(y)/sum(ex)
    beta0=math.log(max(rate,1e-8)); beta1=0.0
    converged=False
    for iteration in range(max_iter):
        mu=[math.exp(max(-30,min(30,beta0+beta1*v+o))) for v,o in zip(a,off)]
        i00=sum(mu); i01=sum(m*v for m,v in zip(mu,a)); i11=sum(m*v*v for m,v in zip(mu,a))
        s0=sum(obs-m for obs,m in zip(y,mu)); s1=sum(v*(obs-m) for v,obs,m in zip(a,y,mu))
        d0,d1=_solve_symmetric_2x2(i00,i01,i11,s0,s1)
        beta0+=d0; beta1+=d1
        if max(abs(d0),abs(d1))<tolerance:
            converged=True
            break
    fitted=[math.exp(max(-30,min(30,beta0+beta1*v+o))) for v,o in zip(a,off)]
    dev=poisson_deviance(y,fitted)
    return {"intercept":beta0,"slope":beta1,"fitted_means":fitted,"deviance":dev,"iterations":iteration+1,"converged":converged}


def poisson_deviance(y: Sequence[int], mu: Sequence[float]) -> float:
    if len(y)!=len(mu) or not y or any(not math.isfinite(v) or v<0 or int(v)!=v for v in y) or any(not math.isfinite(v) or v<=0 for v in mu):
        raise ValueError("invalid Poisson counts or fitted means")
    return 2*sum((obs*math.log(obs/m) if obs>0 else 0)-(obs-m) for obs,m in zip(y,mu))


def binomial_deviance(y: Sequence[int], p: Sequence[float]) -> float:
    if len(y)!=len(p) or not y or any(v not in (0,1) for v in y) or any(not math.isfinite(q) or not 0<q<1 for q in p):
        raise ValueError("invalid binary outcomes or probabilities")
    return -2*sum(obs*math.log(q)+(1-obs)*math.log(1-q) for obs,q in zip(y,p))


def intraclass_correlation(random_intercept_variance: float, residual_variance: float) -> float:
    if not math.isfinite(random_intercept_variance) or not math.isfinite(residual_variance) or random_intercept_variance<0 or residual_variance<=0:
        raise ValueError("variances must be non-negative with positive residual variance")
    return random_intercept_variance/(random_intercept_variance+residual_variance)


if __name__=="__main__":
    x=[1,2,3,4,5,6]; y=[3,5,7,8,11,12]
    print("OLS:",ols_simple(x,y))
    print("Diagnostics:",ols_diagnostics(x,y))
    print("Ridge/LASSO:",ridge_lasso_simple(x,y,2))
    rng=random.Random(20261121)
    lx=[(i-50)/10 for i in range(100)]
    ly=[int(rng.random()<1/(1+math.exp(-(-.2+.8*v)))) for v in lx]
    print("Logistic:",logistic_1d(lx,ly))
    ex=[1+(i%3) for i in range(30)]; px=[(i-15)/10 for i in range(30)]
    py=[round(e*math.exp(.2+.3*v)) for e,v in zip(ex,px)]
    print("Poisson:",poisson_1d(px,py,ex))
    print("ICC:",intraclass_correlation(.4,.6))
