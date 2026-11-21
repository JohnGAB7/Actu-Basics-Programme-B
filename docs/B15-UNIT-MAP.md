# B15 — Carte pédagogique : Apprentissage statistique et machine learning

**Version :** 0.1 · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.
**Charge indicative :** 56–68 heures  
**Niveau :** L1–L3  
**Prérequis :** B03 algèbre linéaire, B11 inférence, B12 modèles statistiques ; B13 multivarié, B14 causalité et B17 ingénierie recommandés.

## Finalité
Construire une compréhension statistique et algorithmique de l'apprentissage automatique, depuis la formulation d'un problème prédictif jusqu'à l'évaluation, la régularisation, les méthodes à noyaux, les arbres, les réseaux de neurones et la gouvernance des modèles.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| ML01 | Problèmes d'apprentissage, représentation et fonction de perte | Formaliser tâche, risque et cible | 4–5 h |
| ML02 | Généralisation, complexité, surapprentissage et compromis biais-variance | Comprendre capacité et régularisation | 5–6 h |
| ML03 | Validation, rééchantillonnage et sélection de modèles | Construire une évaluation sans fuite | 5–6 h |
| ML04 | Modèles linéaires prédictifs et régularisation | Ridge, lasso, elastic net et logistique | 6–7 h |
| ML05 | Méthodes à noyaux, voisins et machines à vecteurs de support | KNN, marge et noyaux | 6–7 h |
| ML06 | Arbres de décision, bagging et forêts aléatoires | Arbres, impuretés et agrégation | 5–6 h |
| ML07 | Boosting et modèles additifs d'ensemble | AdaBoost et gradient boosting | 6–7 h |
| ML08 | Réseaux de neurones, rétropropagation et apprentissage profond | Propagation, gradients et régularisation | 6–8 h |
| ML09 | Modèles probabilistes, estimation de densité et détection d'anomalies | Modèles génératifs et scores d'atypie | 5–6 h |
| ML10 | Évaluation responsable, interprétabilité et cycle de vie d'un modèle | Décision, équité, robustesse et gouvernance | 6–8 h |

## Compétences transversales
1. Définir une cible, une population et un horizon de prédiction.
2. Choisir perte, métrique et seuil selon l'usage.
3. Distinguer risque empirique, validation et risque de population.
4. Construire des pipelines de prétraitement sans fuite.
5. Régulariser, comparer et calibrer des modèles.
6. Comprendre les hypothèses des algorithmes et leur sensibilité aux données.
7. Examiner équité, robustesse, dérive, interprétabilité et limites.
8. Documenter une expérience reproductible et le cycle de vie d'un modèle.

## Dépendances pédagogiques
ML01–ML03 posent la formulation et l'évaluation ; ML04–ML08 développent les principales familles supervisées ; ML09 présente des modèles probabilistes et la détection d'anomalies ; ML10 intègre évaluation responsable et gouvernance. B13 fournit les fondements multivariés ; B14 rappelle que la prédiction n'identifie pas un effet causal ; B17 développera les pipelines et systèmes de données.

## Hors périmètre
Apprentissage par renforcement approfondi, modèles de fondation et grands modèles de langage, vision spécialisée, traitement automatique du langage avancé, apprentissage fédéré, confidentialité différentielle et théorie complète des garanties de généralisation sont des approfondissements ultérieurs.

## Critères de sortie
L'apprenant doit concevoir un protocole de prédiction sans fuite, comparer plusieurs familles de modèles, estimer une performance hors échantillon, calibrer et interpréter les résultats, analyser les risques et documenter les limites. Le choix d'un algorithme à la mode n'est pas un critère de qualité.
