# B05 — Évaluation transversale

**Durée :** 120 minutes · **Total :** 100 points · **Statut :** épreuve formative, revue interne à effectuer.

## 1 — Domaine et limite (10 points)
Déterminer le domaine de (f(x,y)=\sqrt{4-x^2-y^2}). Étudier la limite de (g(x,y)=xy/(x^2+y^2)) à l'origine.
**Corrigé :** disque fermé (x^2+y^2\le4). La limite de (g) n'existe pas : (y=x) donne (1/2), (y=-x) donne (-1/2).

## 2 — Dérivées partielles et plan tangent (10 points)
Pour (f=x^2+xy+y^2), calculer le gradient et le plan tangent au point ((1,2,7)).
**Corrigé :** (f_x=2x+y), (f_y=x+2y), donc gradient ((4,5)). Plan : (z=7+4(x-1)+5(y-2)).

## 3 — Gradient et direction (10 points)
Pour (f=x^2+3y), calculer la dérivée directionnelle en ((1,2)) selon (u=(3/5,4/5)).
**Corrigé :** gradient ((2,3)), produit scalaire (18/5).

## 4 — Hessienne (10 points)
Classer l'origine pour (x^2-y^2), puis (x^2+3y^2).
**Corrigé :** Hessienne diag(2,-2), indéfinie : selle ; diag(2,6), définie positive : minimum strict.

## 5 — Lagrange (10 points)
Maximiser (xy) sous (x+y=12), (x,y\ge0).
**Corrigé :** (x=y=6), valeur 36 ; les frontières donnent 0, donc maximum global 36.

## 6 — Intégrale double (10 points)
Calculer \(\iint_{[0,1]\times[0,2]}(x+y)dA\).
**Corrigé :** \(\int_0^1\int_0^2(x+y)dy,dx=3\).

## 7 — Coordonnées polaires (10 points)
Retrouver l'aire du disque de rayon (R).
**Corrigé :** \(\int_0^{2\pi}\int_0^Rr,dr,d\theta=\pi R^2\). Le facteur (r) est le Jacobien.

## 8 — Champ vectoriel (10 points)
Pour (F=(-y,x)), calculer divergence et rotationnel scalaire (Q_x-P_y).
**Corrigé :** divergence 0 ; rotationnel (1-(-1)=2).

## 9 — EDO (10 points)
Résoudre (y'+2y=4), (y(0)=1).
**Corrigé :** (y=2+Ce^{-2t}), (C=-1), donc (y=2-e^{-2t}).

## 10 — Euler et système (10 points)
Une étape d'Euler pour (y'=y), (y(0)=1), (h=0,1). Interpréter les valeurs propres (-1,2) d'une matrice diagonale.
**Corrigé :** (y_1=1,1). Les modes (e^{-t}) et (e^{2t}) coexistent ; l'équilibre est une selle instable.

## Barème
Limites/domaines 10 ; différentiation 20 ; optimisation 20 ; intégration multiple 20 ; champs vectoriels 10 ; EDO et numérique 20. Les étapes et hypothèses doivent être explicites. Cette épreuve n'est pas une certification.
