# B19 — Première revue interne de contenu

**Version examinée :** 0.1 · **Statut :** revue assistée par IA, non indépendante  
**Périmètre :** EF01–EF10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Distinction association/prédiction/causalité explicite.
- Endogénéité séparée des problèmes d'inférence robuste.
- FE/RE, instruments, 2SLS, LATE et GMM couverts.
- Censure, troncature et modèles de choix introduits.
- Données financières, facteurs, volatilité, backtesting et microstructure couverts.
- Biais de disponibilité, look-ahead et survivorship signalés.
- Projet final exige robustesse, reproductibilité et communication mesurée.

## Points à approfondir avant statut reviewed
1. Détailler hypothèses OLS et propriétés asymptotiques avec dépendance.
2. Ajouter dérivations FE/RE, biais de Nickell et panels dynamiques.
3. Développer diagnostics instruments faibles, sur-identification et GMM en deux étapes.
4. Approfondir logit multinomial, IIA, Tobit et correction de sélection.
5. Ajouter tests de racine unitaire et cointégration financière avec ruptures.
6. Développer modèles de facteurs, erreurs de mesure des bêta et tests transversaux.
7. Formaliser VaR/ES, backtesting et comparaisons de prévision de volatilité.
8. Ajouter données de carnet d'ordres, estimations de spread et realized kernels.
9. Produire notebooks R/Python, datasets publics contrôlés et pipelines reproductibles.
10. Revue humaine indépendante, validation des calculs et tests apprenants.

## Références de cadrage
- Wooldridge, *Introductory Econometrics: A Modern Approach* : https://www.cengage.com/c/introductory-econometrics-a-modern-approach-7e-wooldridge/
- Wooldridge, *Econometric Analysis of Cross Section and Panel Data* : https://mitpress.mit.edu/9780262232586/econometric-analysis-of-cross-section-and-panel-data/
- Hansen, *Econometrics* (open textbook) : https://www.ssc.wisc.edu/~bhansen/econometrics/
- Engle (1982), ARCH : https://doi.org/10.2307/1912773
- Christoffersen, *Elements of Financial Risk Management* : https://www.sciencedirect.com/book/9780123744487/elements-of-financial-risk-management

## Limites et statut
La revue est une vérification interne de périmètre et de cohérence, non une revue académique indépendante. Les références doivent être consultées par chapitre et version ; leur présence ne signifie pas validation du contenu. Les unités sont des premières versions de travail, non accréditées.
