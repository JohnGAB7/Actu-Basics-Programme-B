# B08 — Évaluation formative transversale

**Durée :** 120 minutes · **Barème :** 100 points · **Statut :** draft pédagogique avec corrigé.

## Exercice 1 — Axiomes et union (10 points)
P(A)=0,45, P(B)=0,35 et P(A∩B)=0,15. Calculer P(A∪B) et P(Aᶜ).

**Corrigé :** P(A∪B)=0,45+0,35−0,15=0,65 ; P(Aᶜ)=0,55.

## Exercice 2 — Bayes (10 points)
Une machine A produit 70 % des pièces et a 1 % de défauts. B produit 30 % des pièces et a 4 % de défauts. Calculer le taux global de défaut et la probabilité qu'une pièce défectueuse vienne de B.

**Corrigé :** P(D)=0,7×0,01+0,3×0,04=0,019. P(B|D)=0,3×0,04/0,019≈0,6316.

## Exercice 3 — Indépendance (10 points)
P(A)=0,3, P(B)=0,4, P(A∩B)=0,12. Les événements sont-ils indépendants ? Une covariance nulle suffit-elle en général pour conclure à l'indépendance de deux variables ?

**Corrigé :** oui pour A et B, car 0,12=0,3×0,4. Non pour la seconde question : la covariance nulle n'exclut pas une dépendance non linéaire.

## Exercice 4 — Loi binomiale (10 points)
X~Binomiale(8,0,25). Donner E[X], Var(X) et P(X=0).

**Corrigé :** E[X]=2 ; Var(X)=8×0,25×0,75=1,5 ; P(X=0)=0,75⁸≈0,1001.

## Exercice 5 — Loi continue (10 points)
X~Uniforme(2,6). Calculer P(3≤X≤5), E[X] et Var(X).

**Corrigé :** probabilité 2/4=0,5 ; moyenne 4 ; variance (6−2)²/12=4/3.

## Exercice 6 — Transformation et convolution (10 points)
X~Uniforme(0,1), Y=3X. Déterminer le support et la densité de Y. Pourquoi la convolution de deux lois marginales exige-t-elle l'indépendance ?

**Corrigé :** Y est uniforme sur [0,3], densité 1/3 sur cet intervalle. La convolution remplace la loi jointe par le produit des marginales, ce qui nécessite l'indépendance.

## Exercice 7 — Covariance (10 points)
E[X]=2, E[Y]=4 et E[XY]=11. Calculer Cov(X,Y). Si les variances sont 9 et 4, calculer la corrélation.

**Corrigé :** Cov=11−8=3 ; corrélation = 3/(3×2)=0,5.

## Exercice 8 — Espérance conditionnelle (10 points)
P(A)=0,25, E[X|A]=12 et E[X|Aᶜ]=8. Calculer E[X].

**Corrigé :** 0,25×12+0,75×8=9.

## Exercice 9 — Inégalités (10 points)
X≥0 et E[X]=6. Donner une borne de P(X≥24). Si Var(X)=16 et E[X]=6, borner P(|X−6|≥8).

**Corrigé :** Markov : ≤6/24=0,25. Tchebychev : ≤16/64=0,25.

## Exercice 10 — TCL (10 points)
Des variables i.i.d. ont moyenne 50 et écart-type 12. Donner l'approximation de la loi de la moyenne sur n=144 observations et expliquer la différence entre LLN et TCL.

**Corrigé :** moyenne approximativement normale de moyenne 50 et écart-type 12/√144=1. La LLN décrit la convergence de la moyenne vers 50 ; le TCL décrit la distribution approximative de la fluctuation centrée et normalisée.
