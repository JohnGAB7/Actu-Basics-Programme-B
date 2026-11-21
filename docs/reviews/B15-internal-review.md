# B15 — Seconde revue interne de contenu

**Version examinée :** 1.1.0 · **Date :** 21 novembre 2026  
**Statut :** seconde revue assistée par IA, non indépendante.  
**Périmètre :** ML01–ML10, carte v1.1, évaluation formative v1.1 et laboratoire Python/R.

## Résultats de la seconde passe

- ML01 : risque de population/empirique, ERM, prédicteurs de Bayes sous pertes quadratique/absolue/0–1 et règle de décision par coûts.
- ML02 : dérivation biais-variance à x fixé et borne de généralisation pour classe finie avec pertes bornées i.i.d.
- ML03 : validation imbriquée, temporelle, groupée et bootstrap out-of-bag ; séparation des prétraitements par pli.
- ML04 : objectifs ridge/lasso/elastic net, solution fermée ridge et seuillage doux lasso univarié.
- ML05 : dualité SVM, contraintes duales, condition PSD des noyaux et concentration des distances.
- ML06 : impuretés Gini/entropie, variance d'ensemble en fonction de la corrélation et importance par permutation.
- ML07 : poids AdaBoost et interprétation du gradient boosting comme descente fonctionnelle.
- ML08 : rétropropagation détaillée pour un réseau à une couche cachée et vérification numérique des gradients.
- ML09 : responsabilités et mises à jour EM, vraisemblance, KDE et limites de la détection d'anomalies.
- ML10 : Brier, calibration, parité/égalité des chances/odds, seuil selon coûts et surveillance.
- Évaluation : 20 questions/100 points avec calculs ridge, lasso, Gini, entropie et AdaBoost.

## Laboratoire reproductible

Le laboratoire Python standard library et R base comprend régression univariée ridge/lasso, KNN univarié, métriques de classification, Brier, calibration par bins, métriques par groupes et mélange gaussien unidimensionnel par EM. Les tests couvrent résultats exacts, reproductibilité, validation des entrées et convergence du mélange.

## Points mathématiques et techniques à surveiller

1. La décomposition biais-variance est conditionnelle à x et à des hypothèses d'indépendance/variance finie ; ne pas la généraliser à toutes pertes.
2. La borne Hoeffding est pour une classe finie et des pertes bornées i.i.d. ; elle n'est pas une garantie universelle pour des données dépendantes ou des classes infinies.
3. Ridge/lasso univariés illustrent les pénalités mais ne constituent pas des solveurs multivariés génériques.
4. KNN est limité à une dimension ; SVM, arbres, forêts, boosting et réseaux sont couverts théoriquement mais pas implémentés génériquement dans ce laboratoire.
5. L'EM unidimensionnel à K composantes peut converger vers un optimum local ; initialisation et variances faibles sont des limites explicites.
6. Brier et calibration ne doivent pas être confondus ; les métriques d'équité ne définissent pas à elles seules l'équité et nécessitent un contexte de préjudice.
7. Aucune métrique ou explication prédictive n'établit un effet causal.

## Références consultées/ciblées

- MIT 6.036 : S77–S78.
- Hastie, Tibshirani & Friedman, ESL : S79.
- scikit-learn, fuite/pipelines : S80–S81.
- scikit-learn, calibration : S111.
- Fairlearn, évaluation de l'équité : S112.
- NIST AI RMF 1.0 : S113.

## Limites et statut

Cette seconde revue est une vérification interne assistée par IA. Elle ne constitue pas une revue académique humaine indépendante, une accréditation ou une approbation institutionnelle. Restent à conduire : relecture par spécialiste, tests auprès d'apprenants, audit manuel du rendu et de l'accessibilité, validation sur données réelles avec gouvernance appropriée. Les algorithmes du laboratoire sont pédagogiques et ne doivent pas être utilisés pour des décisions opérationnelles.


## Contrôle mathématique et technique complémentaire — 22 novembre 2026

### Anomalie détectée et correction portée dans la branche de revue

**EM — vraisemblance renvoyée décalée d'une itération (majeure pour la traçabilité du résultat).**

Dans les versions Python et R, la vraisemblance observée était calculée à l'étape E, puis les paramètres étaient mis à jour à l'étape M. La fonction renvoyait ensuite les paramètres mis à jour avec la vraisemblance calculée avant cette mise à jour. Lorsque l'algorithme atteignait sa limite d'itérations, le couple « paramètres / log-vraisemblance » ne décrivait donc pas exactement le même état.

Correction :
- recalcul de la log-vraisemblance observée après la dernière mise à jour des paramètres ;
- ajout d'un test Python avec `max_iter=1`, qui vérifie la vraisemblance à partir des paramètres effectivement retournés ;
- ajout d'un contrôle R analogue sur le mélange synthétique.

Cette correction améliore la cohérence des résultats retournés. Elle ne démontre pas la convergence globale d'EM et ne supprime pas les optima locaux ni les problèmes de dégénérescence.

### Vérifications analytiques complémentaires

- **ML01 :** sous perte quadratique, l'identité conditionnelle sépare variance et carré de l'écart à l'espérance ; sous perte absolue, toute médiane conditionnelle minimise le risque ; sous perte 0–1, une classe de probabilité conditionnelle maximale est optimale.
- **ML02 :** la décomposition biais-variance est correctement limitée à la perte quadratique, à x fixé et aux hypothèses d'indépendance/variance finie. La borne Hoeffding affichée est correcte pour une classe finie de M fonctions, des pertes dans [0,1] et des observations i.i.d.
- **ML03 :** la probabilité OOB `(1-1/n)^n` tend vers `e^{-1}`; les réserves sur les données groupées, temporelles et la sélection imbriquée sont nécessaires.
- **ML04 :** avec l'objectif `(1/(2n)) RSS + (lambda/2)||beta||²`, la solution ridge centrée est `(X'X+n lambda I)^(-1)X'y`. Pour une variable centrée et l'objectif lasso `(1/(2n)) RSS + lambda |beta|`, le seuillage doux `S(c,lambda)/q` est cohérent avec les définitions de c et q. Les conventions de normalisation doivent rester explicites.
- **ML05 :** le dual SVM et les contraintes `0 <= alpha_i <= C`, `sum alpha_i y_i=0` sont cohérents avec la formulation primal affichée ; la condition PSD du noyau est bien celle du cadre standard.
- **ML06 :** la variance d'une moyenne de B prédicteurs de variance commune sigma² et corrélation paire à paire rho est `sigma²[rho+(1-rho)/B]`; elle suppose des variances et corrélations communes.
- **ML07 :** le coefficient AdaBoost est cohérent pour un classifieur binaire faible avec erreur pondérée strictement inférieure à 1/2. Le pseudo-résidu est l'opposé du gradient de la perte par rapport à la prédiction courante.
- **ML08 :** la dérivation de la rétropropagation est cohérente pour une sortie sigmoïde et la log-loss binaire ; la convention de somme ou moyenne des gradients sur mini-batch doit être précisée.
- **ML09 :** les responsabilités et mises à jour EM sont cohérentes pour un mélange gaussien ; la monotonie de vraisemblance suppose une étape M correcte et les conditions usuelles. Le plancher de variance du laboratoire est une contrainte numérique/pédagogique et peut modifier l'algorithme EM non contraint.
- **ML10 :** la formule de seuil par coûts suppose des probabilités calibrées, des coûts constants et nuls pour décisions correctes ; Brier n'est pas une mesure isolée de calibration et ECE dépend du binning.

### Laboratoire — périmètre et limites confirmés

Le laboratoire demeure un ensemble de primitives univariées et de métriques, non une implémentation complète des algorithmes enseignés dans ML01–ML10. En particulier, ridge/lasso ne sont pas multivariés, KNN est unidimensionnel, et il n'existe pas d'implémentations complètes SVM, arbres, boosting, réseaux ou validation imbriquée. Les exemples synthétiques ne prouvent aucune performance sur population réelle.

### Sources recoupées

- MIT OpenCourseWare, 6.867 — Machine Learning, notes de cours sur régularisation, biais-variance, SVM, boosting et EM : https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/pages/lecture-notes/
- Hastie, Tibshirani & Friedman, *The Elements of Statistical Learning*, 2e éd., Springer, chapitres sur modèles linéaires, régularisation, sélection, arbres, boosting, réseaux et modèles non supervisés : https://doi.org/10.1007/978-0-387-84858-7
- scikit-learn, Probability Calibration : https://scikit-learn.org/stable/modules/calibration.html
- scikit-learn, Common pitfalls and data leakage : https://scikit-learn.org/stable/common_pitfalls.html

**Statut :** revue interne assistée par IA, non indépendante. Les nouveaux tests doivent être exécutés par GitHub Actions avant de déclarer la correction vérifiée. Revue humaine spécialisée, tests apprenants, audit manuel d'accessibilité et validation sur données réelles restent distincts.


### Cas limite complémentaire — métriques par groupe

La fonction Python convertit les étiquettes de groupes en chaînes pour construire son dictionnaire de sortie. Deux étiquettes distinctes comme `1` et `"1"` auraient donc pu partager la même clé et écraser silencieusement un résultat. La fonction rejette désormais les représentations textuelles ambiguës ; un test unitaire couvre ce cas. Cette vérification ne définit pas une politique de traitement des groupes manquants ou des petits effectifs, qui reste à préciser selon le contexte d'application.
