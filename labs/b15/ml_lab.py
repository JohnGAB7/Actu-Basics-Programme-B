"""B15 teaching lab: regularization, KNN, classification metrics and 1D Gaussian mixtures."""
from __future__ import annotations
import math
from collections import Counter


def _finite(values, name):
    out=[float(v) for v in values]
    if not out or any(not math.isfinite(v) for v in out):
        raise ValueError(f"{name} must be non-empty and finite")
    return out


def ridge_lasso_1d(x, y, alpha=1.0, method="ridge"):
    x=_finite(x,"x"); y=_finite(y,"y")
    if len(x)!=len(y) or len(x)<2: raise ValueError("x and y must have equal length >= 2")
    if not math.isfinite(alpha) or alpha<0: raise ValueError("alpha must be finite and non-negative")
    method=method.lower()
    if method not in {"ridge","lasso"}: raise ValueError("method must be ridge or lasso")
    mx=sum(x)/len(x); my=sum(y)/len(y)
    xc=[v-mx for v in x]; yc=[v-my for v in y]
    q=sum(v*v for v in xc)/len(x); c=sum(a*b for a,b in zip(xc,yc))/len(x)
    if q<=1e-14: raise ValueError("x has zero variance")
    if method=="ridge": slope=c/(q+alpha)
    else:
        soft=math.copysign(max(abs(c)-alpha,0.0),c) if c!=0 else 0.0
        slope=soft/q
    return {"intercept":my-slope*mx,"slope":slope,"alpha":alpha,"method":method}


def knn_predict(train_x, train_y, test_x, k=3, task="regression"):
    x=_finite(train_x,"train_x"); y=list(train_y); q=_finite(test_x,"test_x")
    if len(x)!=len(y) or not 1<=int(k)<=len(x) or int(k)!=k: raise ValueError("invalid training data or k")
    task=task.lower()
    if task not in {"regression","classification"}: raise ValueError("invalid task")
    predictions=[]
    for value in q:
        nearest=sorted(range(len(x)),key=lambda i:(abs(x[i]-value),i))[:int(k)]
        labels=[y[i] for i in nearest]
        if task=="regression":
            vals=_finite(labels,"neighbor outcomes"); predictions.append(sum(vals)/len(vals))
        else:
            counts=Counter(labels)
            predictions.append(sorted(counts.items(),key=lambda item:(-item[1],str(item[0])))[0][0])
    return predictions


def classification_metrics(y_true, probabilities, threshold=0.5):
    y=[int(v) for v in y_true]; p=_finite(probabilities,"probabilities")
    if len(y)!=len(p) or not y or any(v not in (0,1) for v in y): raise ValueError("binary labels and equal-length probabilities required")
    if not math.isfinite(threshold) or not 0<=threshold<=1 or any(v<0 or v>1 for v in p): raise ValueError("invalid threshold or probabilities")
    pred=[int(v>=threshold) for v in p]
    tp=sum(1 for a,b in zip(y,pred) if a==1 and b==1)
    fp=sum(1 for a,b in zip(y,pred) if a==0 and b==1)
    tn=sum(1 for a,b in zip(y,pred) if a==0 and b==0)
    fn=sum(1 for a,b in zip(y,pred) if a==1 and b==0)
    precision=tp/(tp+fp) if tp+fp else 0.0
    recall=tp/(tp+fn) if tp+fn else 0.0
    specificity=tn/(tn+fp) if tn+fp else 0.0
    accuracy=(tp+tn)/len(y)
    f1=2*precision*recall/(precision+recall) if precision+recall else 0.0
    brier=sum((v-q)**2 for v,q in zip(y,p))/len(y)
    return {"tp":float(tp),"fp":float(fp),"tn":float(tn),"fn":float(fn),
            "precision":precision,"recall":recall,"specificity":specificity,
            "accuracy":accuracy,"f1":f1,"brier":brier}


def calibration_bins(y_true, probabilities, n_bins=5):
    y=[int(v) for v in y_true]; p=_finite(probabilities,"probabilities")
    if len(y)!=len(p) or not y or any(v not in (0,1) for v in y): raise ValueError("invalid labels")
    if int(n_bins)!=n_bins or n_bins<1 or any(v<0 or v>1 for v in p): raise ValueError("invalid bin count or probabilities")
    bins=[]
    for b in range(int(n_bins)):
        indices=[i for i,v in enumerate(p) if min(int(v*n_bins),n_bins-1)==b]
        if indices:
            bins.append({"bin":float(b),"count":float(len(indices)),
                         "mean_predicted":sum(p[i] for i in indices)/len(indices),
                         "observed_rate":sum(y[i] for i in indices)/len(indices)})
    ece=sum(z["count"]/len(y)*abs(z["mean_predicted"]-z["observed_rate"]) for z in bins)
    return {"bins":bins,"ece":ece}


def group_metrics(y_true, probabilities, groups, threshold=0.5):
    y=[int(v) for v in y_true]; p=_finite(probabilities,"probabilities"); g=list(groups)
    if len(y)!=len(p) or len(y)!=len(g) or not y: raise ValueError("length mismatch or empty data")
    if not math.isfinite(threshold) or not 0<=threshold<=1: raise ValueError("threshold must lie in [0,1]")
    result={}
    for group in sorted(set(g),key=str):
        idx=[i for i,v in enumerate(g) if v==group]
        if not idx: continue
        m=classification_metrics([y[i] for i in idx],[p[i] for i in idx],threshold)
        m["selection_rate"]=(m["tp"]+m["fp"])/len(idx)
        result[str(group)]=m
    return result


def _logsumexp(values):
    m=max(values)
    return m+math.log(sum(math.exp(v-m) for v in values))


def gaussian_mixture_1d_em(x, n_components=2, max_iter=300, tolerance=1e-8, variance_floor=1e-6):
    values=sorted(_finite(x,"x")); n=len(values)
    if n<2 or int(n_components)!=n_components or not 1<=n_components<=n: raise ValueError("invalid component count")
    if int(max_iter)!=max_iter or max_iter<1 or not math.isfinite(tolerance) or tolerance<=0: raise ValueError("invalid iteration settings")
    if not math.isfinite(variance_floor) or variance_floor<=0: raise ValueError("variance_floor must be positive")
    k=int(n_components); mean=sum(values)/n
    global_var=sum((v-mean)**2 for v in values)/n
    if global_var<=variance_floor: raise ValueError("input variance is too small")
    means=[values[min(n-1,int((j+0.5)*n/k))] for j in range(k)]
    variances=[max(global_var,variance_floor)]*k
    weights=[1/k]*k
    previous=float("-inf"); converged=False
    for iteration in range(1,int(max_iter)+1):
        responsibilities=[]; log_likelihood=0.0
        for v in values:
            logp=[math.log(weights[j])-0.5*math.log(2*math.pi*variances[j])-(v-means[j])**2/(2*variances[j]) for j in range(k)]
            norm=_logsumexp(logp); log_likelihood+=norm
            responsibilities.append([math.exp(z-norm) for z in logp])
        nk=[sum(row[j] for row in responsibilities) for j in range(k)]
        if any(z<=1e-10 for z in nk): raise ValueError("a mixture component collapsed; change initialization or component count")
        weights=[z/n for z in nk]
        means=[sum(r[j]*v for r,v in zip(responsibilities,values))/nk[j] for j in range(k)]
        variances=[max(sum(r[j]*(v-means[j])**2 for r,v in zip(responsibilities,values))/nk[j],variance_floor) for j in range(k)]
        if iteration>1 and abs(log_likelihood-previous)<=tolerance*(1+abs(previous)):
            converged=True
            break
        previous=log_likelihood
    order=sorted(range(k),key=lambda j:means[j])
    return {"weights":[weights[j] for j in order],"means":[means[j] for j in order],
            "variances":[variances[j] for j in order],"log_likelihood":log_likelihood,
            "iterations":float(iteration),"converged":converged}


if __name__=="__main__":
    x=[-2.2,-2.0,-1.8,-2.1,-1.9,1.8,2.0,2.2,1.9,2.1]
    print("ridge:",ridge_lasso_1d([-1,1],[-2,2],0.5,"ridge"))
    print("lasso:",ridge_lasso_1d([-1,1],[-2,2],0.5,"lasso"))
    print("mixture:",gaussian_mixture_1d_em(x))
