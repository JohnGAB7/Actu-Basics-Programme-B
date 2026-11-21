"""B13 multivariate statistics lab — Python standard library only."""
from __future__ import annotations

import math
import random
from typing import Sequence


def _matrix(data: Sequence[Sequence[float]]) -> list[list[float]]:
    x = [[float(v) for v in row] for row in data]
    if not x or not x[0] or any(len(row) != len(x[0]) for row in x):
        raise ValueError("matrix must be rectangular with at least two rows and one column")
    if any(not math.isfinite(v) for row in x for v in row):
        raise ValueError("matrix values must be finite")
    return x


def _transpose(a: list[list[float]]) -> list[list[float]]:
    return [list(col) for col in zip(*a)]


def _matmul(a: list[list[float]], b: list[list[float]]) -> list[list[float]]:
    if not a or not b or len(a[0]) != len(b):
        raise ValueError("incompatible matrix dimensions")
    bt = _transpose(b)
    return [[sum(x*y for x,y in zip(row,col)) for col in bt] for row in a]


def _dot(a: Sequence[float], b: Sequence[float]) -> float:
    if len(a) != len(b):
        raise ValueError("vector dimensions differ")
    return sum(x*y for x,y in zip(a,b))


def _inverse(a: list[list[float]], tolerance: float = 1e-12) -> list[list[float]]:
    n = len(a)
    if n == 0 or any(len(row) != n for row in a):
        raise ValueError("matrix must be square")
    aug = [list(map(float,row)) + [1.0 if i == j else 0.0 for j in range(n)] for i,row in enumerate(a)]
    for col in range(n):
        pivot = max(range(col,n), key=lambda r: abs(aug[r][col]))
        if abs(aug[pivot][col]) <= tolerance:
            raise ValueError("matrix is singular or numerically ill-conditioned")
        aug[col],aug[pivot] = aug[pivot],aug[col]
        scale = aug[col][col]
        aug[col] = [v/scale for v in aug[col]]
        for row in range(n):
            if row == col:
                continue
            factor = aug[row][col]
            aug[row] = [u-factor*v for u,v in zip(aug[row],aug[col])]
    return [row[n:] for row in aug]


def _determinant(a: list[list[float]], tolerance: float = 1e-14) -> float:
    n = len(a)
    if n == 0 or any(len(row) != n for row in a):
        raise ValueError("matrix must be square")
    m = [row[:] for row in a]
    det = 1.0
    for col in range(n):
        pivot = max(range(col,n), key=lambda r: abs(m[r][col]))
        if abs(m[pivot][col]) <= tolerance:
            return 0.0
        if pivot != col:
            m[col],m[pivot] = m[pivot],m[col]
            det *= -1
        value = m[col][col]
        det *= value
        for row in range(col+1,n):
            factor = m[row][col]/value
            for j in range(col+1,n):
                m[row][j] -= factor*m[col][j]
            m[row][col] = 0.0
    return det


def covariance_matrix(data: Sequence[Sequence[float]]) -> list[list[float]]:
    x = _matrix(data)
    n,p = len(x),len(x[0])
    if n < 2: raise ValueError("covariance requires at least two observations")
    means = [sum(row[j] for row in x)/n for j in range(p)]
    centered = [[row[j]-means[j] for j in range(p)] for row in x]
    return [[sum(row[i]*row[j] for row in centered)/(n-1) for j in range(p)] for i in range(p)]


def correlation_matrix(data: Sequence[Sequence[float]]) -> list[list[float]]:
    s = covariance_matrix(data)
    p = len(s)
    sd = [math.sqrt(max(0.0,s[i][i])) for i in range(p)]
    if any(v == 0 for v in sd):
        raise ValueError("correlation is undefined for a constant variable")
    return [[s[i][j]/(sd[i]*sd[j]) for j in range(p)] for i in range(p)]


def jacobi_eigen_symmetric(
    matrix: Sequence[Sequence[float]], tolerance: float = 1e-12, max_iter: int = 10000
) -> tuple[list[float], list[list[float]]]:
    """Return descending eigenvalues and eigenvectors as columns (small matrices)."""
    a = _matrix(matrix)
    n = len(a)
    if len(a[0]) != n or any(abs(a[i][j]-a[j][i]) > 1e-10 for i in range(n) for j in range(n)):
        raise ValueError("matrix must be square and symmetric")
    if not math.isfinite(tolerance) or tolerance <= 0 or max_iter < 1 or int(max_iter) != max_iter:
        raise ValueError("positive finite tolerance and integer max_iter are required")
    v = [[1.0 if i == j else 0.0 for j in range(n)] for i in range(n)]
    converged = False
    for _ in range(max_iter):
        p,q = max(((i,j) for i in range(n) for j in range(i+1,n)),
                  key=lambda ij: abs(a[ij[0]][ij[1]]), default=(0,0))
        if p == q or abs(a[p][q]) < tolerance:
            converged = True
            break
        apq = a[p][q]
        tau = (a[q][q]-a[p][p])/(2*apq)
        t = (1.0 if tau >= 0 else -1.0)/(abs(tau)+math.sqrt(1+tau*tau)) if tau != 0 else 1.0
        c = 1/math.sqrt(1+t*t)
        s = t*c
        app,aqq = a[p][p],a[q][q]
        a[p][p] = app-t*apq
        a[q][q] = aqq+t*apq
        a[p][q] = a[q][p] = 0.0
        for k in range(n):
            if k not in (p,q):
                akp,akq = a[k][p],a[k][q]
                a[k][p] = a[p][k] = c*akp-s*akq
                a[k][q] = a[q][k] = s*akp+c*akq
            vkp,vkq = v[k][p],v[k][q]
            v[k][p] = c*vkp-s*vkq
            v[k][q] = s*vkp+c*vkq
    if not converged:
        raise RuntimeError("Jacobi eigensolver did not converge within max_iter")
    order = sorted(range(n),key=lambda j:a[j][j],reverse=True)
    eigenvalues = [a[j][j] for j in order]
    eigenvectors = [[v[i][j] for j in order] for i in range(n)]
    return eigenvalues,eigenvectors


def pca(data: Sequence[Sequence[float]], standardize: bool = False) -> dict[str, object]:
    x = _matrix(data)
    n,p = len(x),len(x[0])
    means = [sum(row[j] for row in x)/n for j in range(p)]
    centered = [[row[j]-means[j] for j in range(p)] for row in x]
    scales = [1.0]*p
    if standardize:
        scales = [math.sqrt(sum(row[j]**2 for row in centered)/(n-1)) for j in range(p)]
        if any(s <= 0 for s in scales):
            raise ValueError("cannot standardize a constant variable")
        centered = [[row[j]/scales[j] for j in range(p)] for row in centered]
    cov = covariance_matrix(centered)
    values,vectors = jacobi_eigen_symmetric(cov)
    total = sum(max(0.0,v) for v in values)
    if total <= 0:
        raise ValueError("PCA requires positive total variance")
    scores = _matmul(centered,vectors)
    explained = [max(0.0,v)/total for v in values]
    return {"mean":means,"scale":scales,"covariance":cov,"eigenvalues":values,
            "eigenvectors":vectors,"scores":scores,"explained_variance_ratio":explained}


def mahalanobis_squared(x: Sequence[float], mean: Sequence[float],
                        covariance: Sequence[Sequence[float]]) -> float:
    if len(x) != len(mean):
        raise ValueError("x and mean dimensions differ")
    delta = [float(a)-float(b) for a,b in zip(x,mean)]
    if any(not math.isfinite(v) for v in delta): raise ValueError("x and mean must be finite")
    cov = _matrix(covariance)
    if len(cov) != len(delta) or len(cov[0]) != len(delta) or any(abs(cov[i][j]-cov[j][i])>1e-10 for i in range(len(cov)) for j in range(len(cov))):
        raise ValueError("covariance must be symmetric and dimensionally compatible")
    eigenvalues,_ = jacobi_eigen_symmetric(cov)
    if min(eigenvalues) <= 1e-12: raise ValueError("covariance must be positive definite")
    inv = _inverse(cov)
    transformed = [row[0] for row in _matmul(inv,[[v] for v in delta])]
    return _dot(delta,transformed)


def hotelling_one_sample(data: Sequence[Sequence[float]], null_mean: Sequence[float]) -> dict[str,float]:
    x = _matrix(data)
    n,p = len(x),len(x[0])
    if len(null_mean) != p or n <= p:
        raise ValueError("require null mean of dimension p and n > p")
    means = [sum(row[j] for row in x)/n for j in range(p)]
    cov = covariance_matrix(x)
    diff = [means[j]-float(null_mean[j]) for j in range(p)]
    t2 = n*mahalanobis_squared(means,null_mean,cov)
    fstat = (n-p)*t2/(p*(n-1))
    return {"t_squared":t2,"f_statistic":fstat,"df1":float(p),"df2":float(n-p)}


def shrinkage_covariance(covariance: Sequence[Sequence[float]], weight: float) -> list[list[float]]:
    s = _matrix(covariance)
    p = len(s)
    if len(s[0]) != p or any(abs(s[i][j]-s[j][i])>1e-10 for i in range(p) for j in range(p)):
        raise ValueError("covariance must be square and symmetric")
    if not math.isfinite(weight) or not 0 <= weight <= 1:
        raise ValueError("weight must lie in [0, 1]")
    eigenvalues,_ = jacobi_eigen_symmetric(s)
    if min(eigenvalues) < -1e-10: raise ValueError("covariance must be positive semidefinite")
    target = sum(s[i][i] for i in range(p))/p
    return [[(1-weight)*s[i][j]+(weight*target if i==j else 0.0) for j in range(p)] for i in range(p)]


def _squared_distance(a: Sequence[float], b: Sequence[float]) -> float:
    return sum((x-y)**2 for x,y in zip(a,b))


def kmeans(data: Sequence[Sequence[float]], k: int, seed: int = 20261121,
           n_init: int = 10, max_iter: int = 300) -> dict[str,object]:
    x = _matrix(data)
    n,p = len(x),len(x[0])
    if n < 2 or k < 1 or k > len({tuple(row) for row in x}) or n_init < 1 or max_iter < 1 or int(n_init)!=n_init or int(max_iter)!=max_iter:
        raise ValueError("invalid k or iteration count; require k distinct observations")
    rng = random.Random(seed)
    best = None
    for _ in range(n_init):
        centroids = [x[rng.randrange(n)][:]]
        while len(centroids) < k:
            distances = [min(_squared_distance(row,c) for c in centroids) for row in x]
            total = sum(distances)
            if total == 0:
                candidate = next(row[:] for row in x if row not in centroids)
            else:
                threshold = rng.random()*total
                acc,candidate = 0.0,x[-1][:]
                for row,d in zip(x,distances):
                    acc += d
                    if acc > threshold:
                        candidate = row[:]
                        break
            centroids.append(candidate)
        labels = [-1]*n
        converged = False
        for iteration in range(max_iter):
            new_labels = [min(range(k),key=lambda j:_squared_distance(row,centroids[j])) for row in x]
            new_centroids=[]
            for j in range(k):
                members=[x[i] for i,label in enumerate(new_labels) if label==j]
                if not members:
                    farthest=max(range(n),key=lambda i:min(_squared_distance(x[i],c) for c in centroids))
                    new_centroids.append(x[farthest][:])
                else:
                    new_centroids.append([sum(row[d] for row in members)/len(members) for d in range(p)])
            if new_labels == labels:
                converged = True
                centroids=new_centroids
                labels=new_labels
                break
            labels=new_labels
            centroids=new_centroids
        inertia=sum(_squared_distance(row,centroids[label]) for row,label in zip(x,labels))
        if best is None or inertia < best["inertia"]:
            best={"labels":labels[:],"centroids":centroids,"inertia":inertia,"iterations":iteration+1,"converged":converged}
    return best


def covariance_rank_bound(n: int, p: int) -> int:
    if n < 2 or p < 1:
        raise ValueError("require n >= 2 and p >= 1")
    return min(p,n-1)


if __name__ == "__main__":
    data=[[1,2,1],[2,1,1.5],[3,4,2],[4,3,2.5],[5,5,4],[6,4,4.5]]
    print("Covariance:",covariance_matrix(data))
    print("PCA:",pca(data)["eigenvalues"])
    print("Hotelling:",hotelling_one_sample(data,[3.5,3.2,2.6]))
    print("Shrinkage:",shrinkage_covariance(covariance_matrix(data),.2))
    groups=[[0,0],[0,1],[1,0],[10,10],[10,11],[11,10]]
    print("K-means:",kmeans(groups,2))


def roy_f_bound(theta: float, p: int, q: int, v: int) -> dict[str, object]:
    """Roy F transformation: exact when min(p,q)=1; otherwise an upper bound."""
    if (not math.isfinite(theta) or theta < 0 or
        not isinstance(p, int) or not isinstance(q, int) or not isinstance(v, int) or
        p < 1 or q < 1 or v < 1):
        raise ValueError("theta must be finite/non-negative and p, q, v positive integers")
    if v < p:
        raise ValueError("residual degrees of freedom must be at least p for E to be invertible")
    d = max(p, q)
    df2 = v - d + q
    if df2 <= 0:
        raise ValueError("denominator degrees of freedom must be positive")
    exact = min(p, q) == 1
    return {
        "f_statistic": theta * df2 / d,
        "df1": d,
        "df2": df2,
        "is_exact": exact,
        "is_upper_bound": not exact,
        "p_value_is_lower_bound": not exact,
    }
