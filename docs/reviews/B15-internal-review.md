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
