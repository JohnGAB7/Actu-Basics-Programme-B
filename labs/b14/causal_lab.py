"""B14 causal inference lab — Python standard library only."""
from __future__ import annotations
import math
import random
from typing import Sequence

def _vec(values, name="values"):
    out=[float(v) for v in values]
    if not out or any(not math.isfinite(v) for v in out): raise ValueError(f"{name} must be non-empty and finite")
    return out

def _bin(values,name):
    out=[int(v) for v in values]
    if not out or any(v not in (0,1) or float(a)!=v for a,v in zip(values,out)): raise ValueError(f"{name} must contain only 0 and 1")
    return out

def _same(**vectors):
    if len({len(v) for v in vectors.values()})!=1: raise ValueError("all input vectors must have the same length")

def _mean(x):
    if not x: raise ValueError("mean requires data")
    return sum(x)/len(x)

def _var(x):
    if len(x)<2: raise ValueError("sample variance requires at least two values")
    m=_mean(x)
    return sum((v-m)**2 for v in x)/(len(x)-1)

def difference_in_means(y,treatment):
    y=_vec(y,"outcome"); a=_bin(treatment,"treatment"); _same(y=y,a=a)
    yt=[v for v,z in zip(y,a) if z]; yc=[v for v,z in zip(y,a) if not z]
    if len(yt)<2 or len(yc)<2: raise ValueError("at least two observations are required in each arm")
    return {"estimate":_mean(yt)-_mean(yc),"standard_error":math.sqrt(_var(yt)/len(yt)+_var(yc)/len(yc))}

def randomization_test(y,treatment,n_permutations=9999,seed=20261121):
    y=_vec(y,"outcome"); a=_bin(treatment,"treatment"); _same(y=y,a=a)
    if len(set(a))!=2 or n_permutations<1 or int(n_permutations)!=n_permutations: raise ValueError("invalid assignment or permutation count")
    observed=difference_in_means(y,a)["estimate"]; nt=sum(a); rng=random.Random(seed); ids=list(range(len(a))); extreme=0
    for _ in range(n_permutations):
        chosen=set(rng.sample(ids,nt)); ap=[int(i in chosen) for i in ids]
        stat=difference_in_means(y,ap)["estimate"]
        if abs(stat)>=abs(observed)-1e-15: extreme+=1
    return {"estimate":observed,"p_value":(extreme+1)/(n_permutations+1),"permutations":float(n_permutations),"extreme":float(extreme)}

def propensity_scores_binary_covariate(treatment,covariate):
    a=_bin(treatment,"treatment"); x=_bin(covariate,"covariate"); _same(a=a,x=x); rates={}
    for level in (0,1):
        group=[z for z,v in zip(a,x) if v==level]
        if not group or sum(group)==0 or sum(group)==len(group): raise ValueError("positivity fails in a covariate stratum")
        rates[level]=sum(group)/len(group)
    return [rates[v] for v in x]

def propensity_weights(treatment,scores,target="ATE",stabilized=False):
    a=_bin(treatment,"treatment"); e=_vec(scores,"scores"); _same(a=a,e=e)
    if any(not 0<p<1 for p in e): raise ValueError("scores must lie strictly between 0 and 1")
    target=target.upper()
    if target not in {"ATE","ATT","OVERLAP"}: raise ValueError("target must be ATE, ATT, or OVERLAP")
    prevalence=sum(a)/len(a); out=[]
    for z,p in zip(a,e):
        if target=="ATE":
            w=1/p if z else 1/(1-p)
            if stabilized: w*=prevalence if z else 1-prevalence
        elif target=="ATT": w=1.0 if z else p/(1-p)
        else: w=1-p if z else p
        out.append(w)
    if any(not math.isfinite(w) or w<=0 for w in out): raise ValueError("weights must be finite and positive")
    return out

def effective_sample_size(weights):
    w=_vec(weights,"weights")
    if any(v<=0 for v in w): raise ValueError("weights must be positive")
    return sum(w)**2/sum(v*v for v in w)

def weighted_smd(covariate,treatment,weights):
    x=_vec(covariate,"covariate"); a=_bin(treatment,"treatment"); w=_vec(weights,"weights"); _same(x=x,a=a,w=w)
    groups=[]
    for arm in (1,0):
        pairs=[(v,wt) for v,z,wt in zip(x,a,w) if z==arm]
        if not pairs: raise ValueError("both arms must be represented")
        sw=sum(wt for _,wt in pairs); m=sum(v*wt for v,wt in pairs)/sw
        var=sum(wt*(v-m)**2 for v,wt in pairs)/sw
        groups.append((m,var))
    pooled=math.sqrt((groups[0][1]+groups[1][1])/2)
    if pooled==0: raise ValueError("SMD undefined for zero pooled variance")
    return (groups[0][0]-groups[1][0])/pooled

def standardized_ate_binary_covariate(outcome,treatment,covariate):
    y=_vec(outcome,"outcome"); a=_bin(treatment,"treatment"); x=_bin(covariate,"covariate"); _same(y=y,a=a,x=x)
    mix={v:sum(1 for q in x if q==v)/len(x) for v in (0,1)}; means={}
    for arm in (0,1):
        for level in (0,1):
            cell=[v for v,z,q in zip(y,a,x) if z==arm and q==level]
            if not cell: raise ValueError("positivity/cell support fails")
            means[(arm,level)]=_mean(cell)
    mu1=sum(mix[v]*means[(1,v)] for v in (0,1)); mu0=sum(mix[v]*means[(0,v)] for v in (0,1))
    crude=_mean([v for v,z in zip(y,a) if z])-_mean([v for v,z in zip(y,a) if not z])
    return {"ate":mu1-mu0,"mu1_standardized":mu1,"mu0_standardized":mu0,"crude_difference":crude}

def ipw_ate(outcome,treatment,scores):
    y=_vec(outcome,"outcome"); a=_bin(treatment,"treatment"); e=_vec(scores,"scores"); _same(y=y,a=a,e=e)
    if any(not 0<p<1 for p in e): raise ValueError("scores must lie strictly between 0 and 1")
    wt=[1/p for z,p in zip(a,e) if z]; wc=[1/(1-p) for z,p in zip(a,e) if not z]
    yt=[v/p for v,z,p in zip(y,a,e) if z]; yc=[v/(1-p) for v,z,p in zip(y,a,e) if not z]
    if not wt or not wc: raise ValueError("both treatment arms must be represented")
    mu1=sum(yt)/sum(wt); mu0=sum(yc)/sum(wc)
    return {"ate":mu1-mu0,"mu1":mu1,"mu0":mu0,"ess_treated":effective_sample_size(wt),"ess_control":effective_sample_size(wc)}

def aipw_ate(outcome,treatment,scores,m0,m1,min_score=1e-6):
    y=_vec(outcome,"outcome"); a=_bin(treatment,"treatment"); e=_vec(scores,"scores"); p0=_vec(m0,"m0"); p1=_vec(m1,"m1"); _same(y=y,a=a,e=e,m0=p0,m1=p1)
    if not 0<min_score<.5 or any(p<min_score or p>1-min_score for p in e): raise ValueError("scores outside declared overlap bounds")
    vals=[b-c+z*(v-b)/p-(1-z)*(v-c)/(1-p) for v,z,p,c,b in zip(y,a,e,p0,p1)]
    return _mean(vals)

def iv_wald(outcome,treatment,instrument):
    y=_vec(outcome,"outcome"); a=_bin(treatment,"treatment"); z=_bin(instrument,"instrument"); _same(y=y,a=a,z=z)
    def contrast(v):
        one=[q for q,g in zip(v,z) if g]; zero=[q for q,g in zip(v,z) if not g]
        if not one or not zero: raise ValueError("instrument must have both levels")
        return _mean(one)-_mean(zero)
    rf=contrast(y); fs=contrast(a)
    if abs(fs)<=1e-12: raise ValueError("instrument has zero first stage")
    return {"wald":rf/fs,"reduced_form":rf,"first_stage":fs}

def did_2x2(treated_pre,treated_post,control_pre,control_post):
    vals=[treated_pre,treated_post,control_pre,control_post]
    if any(not math.isfinite(float(v)) for v in vals): raise ValueError("cell means must be finite")
    return (treated_post-treated_pre)-(control_post-control_pre)

def _local_intercept(y,r,c,h,right):
    pairs=[]
    for v,q in zip(y,r):
        side=q>=c; w=max(0.0,1-abs(q-c)/h)
        if side==right and w>0: pairs.append((q-c,v,w))
    if len(pairs)<3 or len({q for q,_,_ in pairs})<2: raise ValueError("insufficient local support")
    sw=sum(w for _,_,w in pairs); sx=sum(w*q for q,_,w in pairs); sxx=sum(w*q*q for q,_,w in pairs)
    sy=sum(w*v for _,v,w in pairs); sxy=sum(w*q*v for q,v,w in pairs); det=sw*sxx-sx*sx
    if det<=1e-14: raise ValueError("local linear design is singular")
    return (sy*sxx-sx*sxy)/det

def local_linear_rd(outcome,running,cutoff=0.0,bandwidth=1.0,treatment=None):
    y=_vec(outcome,"outcome"); r=_vec(running,"running"); _same(y=y,r=r)
    if not math.isfinite(cutoff) or not math.isfinite(bandwidth) or bandwidth<=0: raise ValueError("invalid cutoff or bandwidth")
    left=_local_intercept(y,r,cutoff,bandwidth,False); right=_local_intercept(y,r,cutoff,bandwidth,True); jump=right-left
    out={"jump_outcome":jump,"left_intercept":left,"right_intercept":right}
    if treatment is not None:
        a=[float(v) for v in _bin(treatment,"treatment")]; _same(y=y,r=r,a=a)
        al=_local_intercept(a,r,cutoff,bandwidth,False); ar=_local_intercept(a,r,cutoff,bandwidth,True); ja=ar-al
        if abs(ja)<=1e-12: raise ValueError("fuzzy RD treatment jump is zero")
        out["jump_treatment"]=ja; out["fuzzy_rd"]=jump/ja
    return out

def example_confounded_table():
    x=[1]*8+[0]*2+[1]*2+[0]*8; a=[1]*10+[0]*10
    y=[.30]*8+[.10]*2+[.40]*2+[.20]*8; e=propensity_scores_binary_covariate(a,x)
    std=standardized_ate_binary_covariate(y,a,x); ipw=ipw_ate(y,a,e)
    m0=[.40 if q else .20 for q in x]; m1=[.30 if q else .10 for q in x]
    return {"standardized":std,"ipw":ipw,"aipw":aipw_ate(y,a,e,m0,m1),"ess":effective_sample_size(propensity_weights(a,e))}

if __name__=="__main__":
    print("B14 confounding example:",example_confounded_table())
    print("B14 DiD example:",did_2x2(10,14,8,9))
