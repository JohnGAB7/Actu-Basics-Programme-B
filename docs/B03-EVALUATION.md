# B03 — Évaluation transversale

**Statut : revue interne effectuée — consolidation pédagogique en cours.
**Consigne :** détailler les raisonnements, annoncer les dimensions et vérifier les résultats.

## Exercice 1 — Vecteurs et produit scalaire (10 points)

Soient u=(1,2,2) et v=(2,0,−1). Calculer ||u||, u·v et la distance entre u et v.

**Corrigé.** ||u||=3. u·v=2+0−2=0. La différence u−v=(−1,2,3), donc d(u,v)=√14.

## Exercice 2 — Produit matriciel (10 points)

A=[[1,2],[0,1]] et B=[[2,0],[1,3]]. Calculer AB et BA.

**Corrigé.** AB=[[4,6],[1,3]]. BA=[[2,4],[1,5]]. Les produits ne sont pas égaux.

## Exercice 3 — Élimination de Gauss (15 points)

Résoudre x+y+z=6, 2x−y+z=3 et x+2y−z=2.

**Corrigé.** Soustraire deux fois la première équation à la deuxième donne 3y+z=9. Soustraire la première équation de la troisième donne y−2z=−4. On en déduit y=2z−4, puis 7z=21, donc z=3, y=2 et enfin x=1. La solution unique est (1,2,3), vérifiée dans les trois équations.

## Exercice 4 — Rang et inversibilité (10 points)

A=[[1,2],[2,4]]. Calculer son déterminant et son rang. Est-elle inversible ?

**Corrigé.** det(A)=4−4=0. La deuxième ligne est le double de la première, donc rang(A)=1 ; A n'est pas inversible.

## Exercice 5 — Base et dimension (10 points)

Dans R³, considérer u=(1,0,1), v=(0,1,1), w=(1,1,2). La famille est-elle libre ?

**Corrigé.** w=u+v, donc la famille est liée. Les deux premiers vecteurs sont indépendants ; l'espace engendré est de dimension 2.

## Exercice 6 — Transformation linéaire (10 points)

T(x,y)=(x+y, x−y). Donner sa matrice canonique et dire si elle est inversible.

**Corrigé.** A=[[1,1],[1,−1]], det(A)=−2≠0. Elle est inversible.

## Exercice 7 — Projection (10 points)

Projeter x=(3,1) sur la droite engendrée par u=(1,1).

**Corrigé.** (x·u)/(u·u) u=(4/2)(1,1)=(2,2). Le résidu (1,−1) est orthogonal à u.

## Exercice 8 — Moindres carrés (10 points)

Expliquer pourquoi une solution des moindres carrés vérifie A^T(Ax−b)=0.

**Corrigé.** C'est la condition du gradient nul de la fonction convexe ||Ax−b||² ; elle exprime l'orthogonalité du résidu à l'espace colonne de A.

## Exercice 9 — Valeurs propres (10 points)

Donner les valeurs propres de A=[[3,0],[0,−2]] et dire si A est diagonalisable.

**Corrigé.** 3 et −2 ; A est déjà diagonale, donc diagonalisable.

## Exercice 10 — SVD (5 points)

Une matrice possède les valeurs singulières 4, 1 et 0. Quel est son rang ?

**Corrigé.** 2 valeurs singulières sont strictement positives, donc rang 2.

## Barème et maîtrise

- 90–100 : maîtrise solide des objectifs du bloc.
- 80–89 : maîtrise satisfaisante ; quelques points à revoir.
- 65–79 : acquis partiels ; reprise ciblée recommandée.
- Moins de 65 : reprendre les unités correspondantes avant B04/B05.

Ce barème est formatif. Les résultats de l'épreuve ne constituent pas une certification.
