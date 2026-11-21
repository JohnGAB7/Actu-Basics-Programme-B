# B07 — Revue mathématique et pédagogique approfondie

**Version :** 0.2 · 21 novembre 2026  
**Nature :** seconde passe interne assistée par IA, non indépendante et non certifiante.

## Périmètre
Relecture et consolidation des dix unités N01–N10, de la carte pédagogique et de l'évaluation formative. Les précisions ci-dessous sont ajoutées directement aux cours ; cette passe complète la première revue sans prétendre remplacer un expert indépendant.

## Synthèse des consolidations

| Unité | Points renforcés |
|---|---|
| N01 | Unité d'arrondi vs epsilon machine, subnormaux, overflow/underflow, NaN, limites du modèle relatif et sommation compensée. |
| N02 | Relation entre erreur avant/arrière/conditionnement, borne normique sous hypothèses et résidu relatif mis à l'échelle. |
| N03 | Croissance des éléments, stabilité de factorisation, rôle et limites du pivotement partiel, hypothèses de Cholesky et raffinement itératif. |
| N04 | Interprétation de CG, borne de convergence dépendant de la racine du conditionnement et rôle du préconditionnement. |
| N05 | Garantie d'encadrement de la dichotomie, racines multiples, portée locale de Newton et méthodes hybrides. |
| N06 | Évaluation barycentrique, nœuds de Chebyshev, conditions aux limites des splines et limites de la stabilité. |
| N07 | Identité exacte du conditionnement des équations normales en norme 2, pseudoinverse/SVD et filtres de Tikhonov. |
| N08 | Compromis troncature-arrondi pour le pas des différences finies et limites du raffinement uniforme. |
| N09 | Région de stabilité absolue d'Euler explicite et distinction entre ordre, stabilité et raideur. |
| N10 | Ordre de convergence observé, tests indépendants, traçabilité stochastique et protection des données. |

## Recalculs de l'évaluation transversale

1. Erreur absolue $|249,4-250|=0,6$ ; erreur relative $0,6/250=0,24\%$.
2. Pour $f(x)=x^3$, conditionnement relatif local $|xf'(x)/f(x)|=3$ pour $x\ne0$ ; une perturbation relative de 0,1 % entraîne environ 0,3 % au premier ordre.
3. Le système a pour solution $(9/5,7/5)$ ; les deux équations sont satisfaites exactement.
4. La convergence de l'itération affine pour tout point initial est équivalente à $\rho(G)<1$. La dominance diagonale stricte est une condition suffisante classique pour Jacobi, pas nécessaire.
5. Largeur initiale 2 ; après 15 itérations, $2/2^{15}=0,00006103515625<10^{-4}$.
6. L'interpolant est $p(x)=3x-1$ ; il passe exactement par les deux points, contrairement à un ajustement par moindres carrés en général.
7. Pour $A$ de rang colonne plein, $\kappa_2(A^TA)=\kappa_2(A)^2$. QR évite de former explicitement les équations normales ; la SVD révèle les directions faiblement identifiées.
8. Trapèze composite : $O(h^2)$ sous régularité suffisante ; Simpson composite : $O(h^4)$ sous régularité de quatrième ordre et nombre pair de sous-intervalles.
9. Euler explicite : $y_1=0,8$ ; solution exacte $e^{-0,2}\approx0,81873075$ ; erreur absolue approximative $0,01873075$.
10. Les éléments de reproductibilité et la distinction vérification/validation sont cohérents ; une graine fixe seule ne garantit pas le bit-à-bit entre environnements.

## Cohérence et précautions

- N01–N02 distinguent erreurs de représentation, sensibilité du problème et stabilité algorithmique.
- N03–N04 distinguent solveurs directs et itératifs et explicitent les hypothèses de Cholesky et CG.
- N05 sépare garantie globale d'encadrement et convergence locale rapide.
- N06–N07 séparent interpolation exacte, approximation et régularisation.
- N08–N09 distinguent erreur de troncature, erreur d'arrondi, ordre et stabilité.
- N10 distingue vérification du calcul et validation du modèle dans son contexte d'usage.

## Travaux restant à réaliser

1. Ajouter des démonstrations plus développées et des exemples complets de pivots, préconditionnement, Newton, QR/SVD, quadratures et RK adaptatifs.
2. Créer et exécuter des notebooks Python/R reproductibles avec tests automatisés, études de convergence et comparaisons de solveurs.
3. Vérifier les références au niveau des sections et théorèmes effectivement consultés.
4. Contrôler rendu, navigation, liens, accessibilité clavier/lecteur d'écran et affichage mobile.
5. Faire tester la durée, la progression et la compréhension par des apprenants.
6. Faire réaliser une revue mathématique indépendante avant toute prétention de validation académique ou certificative.

## Conclusion

Les dix unités forment une progression cohérente et l'évaluation a été recalculée. Les compléments rendent plus explicites les hypothèses de validité, les limites des méthodes et les diagnostics de précision. Le bloc demeure en **consolidation pédagogique** : revue interne assistée par IA, non indépendante et non certifiante.
