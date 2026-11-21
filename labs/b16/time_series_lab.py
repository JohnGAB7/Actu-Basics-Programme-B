"""B16 teaching lab — univariate time series, GARCH recursion and scalar Kalman filter."""
from __future__ import annotations
import cmath
import math


def _finite(values,name):
    out=[float(v) for v in values]
    if not out or any(not math.isfinite(v) for v in out): raise ValueError(f"{name} must be non-empty and finite")
    return out


def difference(values,lag=1):
    x=_finite(values,"values")
    if int(lag)!=lag or lag<1 or lag>=len(x): raise ValueError("lag must be an integer between 1 and n-1")
    return [x[i]-x[i-int(lag)] for i in range(int(lag),len(x))]


def acf(values,max_lag):
    x=_finite(values,"values"); n=len(x)
    if int(max_lag)!=max_lag or max_lag<0 or max_lag>=n: raise ValueError("max_lag must be an integer in [0,n-1]")
    mean=sum(x)/n; centered=[v-mean for v in x]; denom=sum(v*v for v in centered)
    if denom<=1e-14: raise ValueError("ACF undefined for a constant series")
    return [sum(centered[t]*centered[t-h] for t in range(h,n))/denom for h in range(int(max_lag)+1)]


def fit_ar1(values):
    x=_finite(values,"values")
    if len(x)<4: raise ValueError("at least four observations are required")
    prev=x[:-1]; curr=x[1:]; mp=sum(prev)/len(prev); my=sum(curr)/len(curr)
    denom=sum((v-mp)**2 for v in prev)
    if denom<=1e-14: raise ValueError("lagged series has zero variance")
    phi=sum((a-mp)*(b-my) for a,b in zip(prev,curr))/denom
    intercept=my-phi*mp
    residuals=[b-intercept-phi*a for a,b in zip(prev,curr)]
    sigma2=sum(v*v for v in residuals)/len(residuals)
    return {"intercept":intercept,"phi":phi,"innovation_variance":sigma2,
            "stationary":abs(phi)<1,"residuals":residuals}


def forecast_ar1(last,intercept,phi,innovation_variance,horizon):
    vals=[last,intercept,phi,innovation_variance]
    if any(not math.isfinite(float(v)) for v in vals) or innovation_variance<0: raise ValueError("finite parameters and non-negative variance required")
    if abs(phi)>=1: raise ValueError("stationary AR(1) forecasts require |phi|<1")
    if int(horizon)!=horizon or horizon<1: raise ValueError("horizon must be a positive integer")
    mu=intercept/(1-phi); out=[]
    for h in range(1,int(horizon)+1):
        mean=mu+(phi**h)*(last-mu)
        variance=innovation_variance*sum(phi**(2*j) for j in range(h))
        out.append({"horizon":float(h),"mean":mean,"variance":variance})
    return out


def ses_forecast(values,alpha,horizon=1):
    x=_finite(values,"values")
    if not math.isfinite(alpha) or not 0<=alpha<=1: raise ValueError("alpha must lie in [0,1]")
    if int(horizon)!=horizon or horizon<1: raise ValueError("horizon must be a positive integer")
    level=x[0]
    for v in x[1:]: level=alpha*v+(1-alpha)*level
    return {"level":level,"forecast":[level]*int(horizon)}


def forecast_metrics(actual,predicted):
    y=_finite(actual,"actual"); p=_finite(predicted,"predicted")
    if len(y)!=len(p): raise ValueError("actual and predicted must have equal length")
    errors=[a-b for a,b in zip(y,p)]
    return {"mae":sum(abs(v) for v in errors)/len(errors),
            "rmse":math.sqrt(sum(v*v for v in errors)/len(errors))}


def rolling_origin_mae(values,initial,method="naive",alpha=0.3):
    x=_finite(values,"values")
    if int(initial)!=initial or initial<3 or initial>=len(x): raise ValueError("initial must be an integer in [3,n-1]")
    method=method.lower()
    if method not in {"naive","ses","ar1"}: raise ValueError("method must be naive, ses, or ar1")
    errors=[]
    for t in range(int(initial),len(x)):
        train=x[:t]; actual=x[t]
        if method=="naive": prediction=train[-1]
        elif method=="ses": prediction=ses_forecast(train,alpha,1)["forecast"][0]
        else:
            fit=fit_ar1(train)
            prediction=forecast_ar1(train[-1],fit["intercept"],fit["phi"],fit["innovation_variance"],1)[0]["mean"]
        errors.append(abs(actual-prediction))
    return {"mae":sum(errors)/len(errors),"errors":errors,"origins":float(len(errors))}


def garch11_variance(residuals,omega,alpha,beta,initial_variance=None):
    e=_finite(residuals,"residuals")
    if not math.isfinite(omega) or omega<=0 or not math.isfinite(alpha) or not math.isfinite(beta) or alpha<0 or beta<0:
        raise ValueError("omega must be positive and alpha/beta non-negative finite")
    if initial_variance is None:
        if alpha+beta<1: initial_variance=omega/(1-alpha-beta)
        else: initial_variance=sum(v*v for v in e)/len(e)
    if not math.isfinite(initial_variance) or initial_variance<=0: raise ValueError("initial variance must be positive")
    variance=[float(initial_variance)]
    for t in range(1,len(e)):
        variance.append(omega+alpha*e[t-1]**2+beta*variance[-1])
    unconditional=omega/(1-alpha-beta) if alpha+beta<1 else None
    return {"variance":variance,"unconditional_variance":unconditional,"persistence":alpha+beta}


def periodogram(values):
    x=_finite(values,"values"); n=len(x)
    if n<3: raise ValueError("at least three observations are required")
    mean=sum(x)/n; centered=[v-mean for v in x]
    frequencies=[]; power=[]
    for k in range(n//2+1):
        omega=2*math.pi*k/n
        z=sum(v*cmath.exp(-1j*omega*t) for t,v in enumerate(centered))
        frequencies.append(k/n)
        power.append((abs(z)**2)/(2*math.pi*n))
    return {"frequency":frequencies,"power":power}


def kalman_filter_local_level(observations,process_variance,measurement_variance,initial_mean=0.0,initial_variance=1.0):
    if not math.isfinite(process_variance) or process_variance<0 or not math.isfinite(measurement_variance) or measurement_variance<=0:
        raise ValueError("process variance must be non-negative and measurement variance positive")
    if not math.isfinite(initial_mean) or not math.isfinite(initial_variance) or initial_variance<=0:
        raise ValueError("invalid initial state")
    if not observations: raise ValueError("observations must be non-empty")
    mean=float(initial_mean); var=float(initial_variance); means=[]; variances=[]; innovations=[]
    for obs in observations:
        pred_mean=mean; pred_var=var+process_variance
        if obs is None:
            mean,var=pred_mean,pred_var; innovations.append(None)
        else:
            y=float(obs)
            if not math.isfinite(y): raise ValueError("observations must be finite or None")
            innovation=y-pred_mean; f=pred_var+measurement_variance; gain=pred_var/f
            mean=pred_mean+gain*innovation; var=(1-gain)*pred_var
            innovations.append(innovation)
        means.append(mean); variances.append(var)
    return {"filtered_mean":means,"filtered_variance":variances,"innovations":innovations}


def ar1_forecast(last_value, phi, horizon, intercept=0.0):
    """Recursive AR(1) point forecasts; unlike forecast_ar1, no stationarity is required for finite h."""
    if any(not math.isfinite(float(v)) for v in (last_value, phi, intercept)) or int(horizon)!=horizon or horizon<1:
        raise ValueError("invalid AR(1) forecast inputs")
    out=[]; value=float(last_value)
    for _ in range(int(horizon)):
        value=float(intercept)+float(phi)*value
        out.append(value)
    return out


def forecast_errors(actual, predicted):
    return forecast_metrics(actual,predicted)


def mase(actual, predicted, training, seasonality=1):
    train=_finite(training,"training")
    if int(seasonality)!=seasonality or seasonality<1 or len(train)<=seasonality:
        raise ValueError("training must contain more observations than the positive seasonality")
    scale=sum(abs(train[i]-train[i-seasonality]) for i in range(seasonality,len(train)))/(len(train)-seasonality)
    if scale<=0: raise ValueError("MASE undefined when the naive training scale is zero")
    return forecast_errors(actual,predicted)["mae"]/scale


def rolling_origin_splits(n, initial, horizon, step=1):
    if any(int(v)!=v for v in (n,initial,horizon,step)) or initial<2 or horizon<1 or step<1 or initial+horizon>n:
        raise ValueError("invalid rolling-origin dimensions")
    origin=int(initial)
    while origin+int(horizon)<=n:
        yield (origin,origin,origin+int(horizon))
        origin+=int(step)


def kalman_scalar_filter(observations, transition, observation_loading, process_variance,
                         observation_variance, initial_state, initial_variance):
    pars=(transition,observation_loading,process_variance,observation_variance,initial_state,initial_variance)
    if any(not math.isfinite(float(v)) for v in pars) or process_variance<0 or observation_variance<=0 or initial_variance<0:
        raise ValueError("invalid scalar Kalman parameters")
    if not observations: raise ValueError("observations must be non-empty")
    state=float(initial_state); variance=float(initial_variance); output=[]
    for obs in observations:
        pred_state=transition*state
        pred_var=transition*transition*variance+process_variance
        if obs is None:
            state,variance=pred_state,pred_var
        else:
            y=float(obs)
            if not math.isfinite(y): raise ValueError("observations must be finite or None")
            innovation_var=observation_loading**2*pred_var+observation_variance
            gain=pred_var*observation_loading/innovation_var
            state=pred_state+gain*(y-observation_loading*pred_state)
            variance=(1-gain*observation_loading)*pred_var
        output.append((state,variance))
    return output


if __name__=="__main__":
    series=[10,11,10.5,12,11.8,13,12.5,14]
    print("AR(1):",fit_ar1(series))
    print("SES:",ses_forecast(series,.3,3))
    print("rolling-origin MAE:",rolling_origin_mae(series,4,"naive"))
    print("GARCH:",garch11_variance([.1,-.2,.15,.05],.1,.15,.8))
