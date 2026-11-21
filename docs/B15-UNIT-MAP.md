# B15 — Carte pédagogique : Apprentissage statistique et machine learning

**Version :** 1.1.0 · **Statut :** seconde passe interne approfondie · laboratoire Python/R en validation CI  
**Charge indicative :** 56–68 heures  
**Niveau :** L2–L4 introductif  
**Prérequis :** B03 algèbre linéaire, B11 inférence, B12 modèles statistiques ; B13 multivarié, B14 causalité et B17 ingénierie recommandés.

## Finalité

Construire une compréhension statistique et algorithmique de l'apprentissage automatique, depuis la formulation d'un problème prédictif jusqu'à l'évaluation, la régularisation, les méthodes à noyaux, les arbres, les réseaux de neurones et la gouvernance des modèles. Le bloc distingue risque, décision, calibration, généralisation et conséquences sociotechniques.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| ML01 | Problèmes d'apprentissage, représentation et fonction de perte | Définir risque, perte, prédicteur de Bayes et règle de décision | 4–5 h |
| ML02 | Généralisation, complexité, surapprentissage et compromis biais-variance | Dériver biais-variance et lire une borne de généralisation | 5–6 h |
| ML03 | Validation, rééchantillonnage et sélection de modèles | Concevoir validation imbriquée, temporelle et groupée sans fuite | 5–6 h |
| ML04 | Modèles linéaires prédictifs et régularisation | Dériver ridge, lasso, elastic net et calibration | 6–7 h |
| ML05 | Méthodes à noyaux, voisins et machines à vecteurs de support | Relier marge, dualité, noyaux PSD et distances | 6–7 h |
| ML06 | Arbres de décision, bagging et forêts aléatoires | Calculer impuretés et comprendre la réduction de variance | 5–6 h |
| ML07 | Boosting et modèles additifs d'ensemble | Dériver AdaBoost et gradient boosting | 6–7 h |
| ML08 | Réseaux de neurones, rétropropagation et apprentissage profond | Calculer un gradient par la règle de chaîne | 6–8 h |
| ML09 | Modèles probabilistes, estimation de densité et détection d'anomalies | Écrire les mises à jour EM et comprendre l'estimation de densité | 5–6 h |
| ML10 | Évaluation responsable, interprétabilité et cycle de vie d'un modèle | Relier calibration, coûts, équité, risques et gouvernance | 6–8 h |

## Compétences transversales

1. Définir cible, population, horizon, perte et règle de décision.
2. Distinguer risque empirique, risque de population, validation et test.
3. Expliquer complexité, biais-variance et garanties de généralisation.
4. Construire des pipelines de prétraitement sans fuite.
5. Dériver et comparer pénalités, noyaux, arbres et ensembles.
6. Vérifier gradients, stabilité et convergence d'algorithmes.
7. Évaluer discrimination, calibration, coûts et équité par sous-groupes.
8. Examiner dérive, robustesse, interprétabilité, gouvernance et limites d'usage.
9. Documenter une expérience reproductible et le cycle de vie d'un modèle.

## Dépendances pédagogiques

ML01–ML03 posent la formulation et l'évaluation ; ML04–ML08 développent les principales familles supervisées ; ML09 présente modèles probabilistes et anomalies ; ML10 intègre évaluation responsable et gouvernance. B13 fournit les fondements multivariés ; B14 rappelle que la prédiction n'identifie pas un effet causal ; B17 développe les pipelines et systèmes de données ; B20 peut approfondir les garanties théoriques.

## Laboratoire reproductible

Le laboratoire Python/R couvre :
- régression univariée ridge/lasso et comparaison des pénalités ;
- prédiction KNN en dimension univariée ;
- métriques de classification, score de Brier et calibration par classes ;
- métriques désagrégées par groupe ;
- estimation d'un mélange gaussien unidimensionnel par EM.

Les implémentations sont pédagogiques, limitées à des exemples de petite dimension. Elles ne remplacent pas scikit-learn, PyTorch, TensorFlow ou Fairlearn et ne constituent pas une validation de modèle de production.

## Hors périmètre

Apprentissage par renforcement approfondi, modèles de fondation et grands modèles de langage, vision spécialisée, NLP avancé, apprentissage fédéré, confidentialité différentielle et théorie complète des garanties de généralisation sont des approfondissements ultérieurs.

## Critères de sortie

L'apprenant doit concevoir un protocole de prédiction sans fuite, comparer plusieurs familles de modèles, estimer une performance hors échantillon, calibrer et interpréter les résultats, analyser les risques et documenter les limites. Le choix d'un algorithme à la mode n'est pas un critère de qualité.

## Sources ciblées

S77–S81 pour apprentissage, généralisation, pipelines et fuite ; S111 pour calibration ; S112 pour l'évaluation de l'équité ; S113 pour la gestion des risques IA. Voir le registre de sources pour les limites et la portée de chaque référence.
