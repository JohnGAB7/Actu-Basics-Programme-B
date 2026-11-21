# B15 — Première revue interne de contenu

**Version examinée :** 0.1 · **Statut :** revue assistée par IA, non indépendante  
**Périmètre :** ML01–ML10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Formulation du risque et de la tâche avant les algorithmes.
- Distinction explicite entre apprentissage supervisé, non supervisé, génératif et discriminatif.
- Validation et sélection de modèles séparées ; fuite de données explicitement traitée.
- Couverture de modèles linéaires, noyaux, arbres, ensembles et réseaux neuronaux.
- Importance et explications distinguées d'une interprétation causale.
- Évaluation responsable, calibration, seuil, équité et dérive inclus.
- Articulation avec B13, B14 et B17.

## Points à approfondir avant statut reviewed
1. Ajouter une dérivation de la décomposition biais-variance et des garanties de généralisation.
2. Détailler validation imbriquée, bootstrap, données groupées et temporelles.
3. Ajouter exemples complets de chemins ridge/lasso et choix des pénalités.
4. Développer la dualité SVM, noyaux admissibles et limites en grande dimension.
5. Détailler les critères de coupure, élagage, OOB et biais des importances.
6. Approfondir gradient boosting, régularisation et choix des fonctions de perte.
7. Ajouter dérivations de rétropropagation et stabilité numérique des réseaux.
8. Développer calibration, seuils coûts, équité et explications avec exemples.
9. Ajouter notebooks R/Python exécutables, données reproductibles et benchmarks justifiés.
10. Revue humaine indépendante, test apprenant et contrôle des versions logicielles.

## Références de cadrage
- MIT 6.036 Introduction to Machine Learning : https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/
- MIT Open Learning 6.036 : https://openlearning.mit.edu/node/5591
- Hastie, Tibshirani & Friedman, *The Elements of Statistical Learning* : https://link.springer.com/book/10.1007/978-0-387-84858-7
- scikit-learn, Common pitfalls and data leakage : https://scikit-learn.org/stable/common_pitfalls.html
- scikit-learn, Getting Started and Pipelines : https://scikit-learn.org/stable/getting_started

## Limites et statut
Cette revue est une vérification interne de cohérence et de couverture. Elle ne remplace pas une revue indépendante en apprentissage statistique et en systèmes ML. Les cours sont des premières versions de travail, non accréditées et non validées par les institutions citées.
