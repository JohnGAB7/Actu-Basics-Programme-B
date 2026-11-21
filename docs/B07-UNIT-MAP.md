# B07 — Carte pédagogique : analyse numérique et calcul scientifique

**Statut :** revue interne effectuée — consolidation pédagogique en cours.

**Version :** 1.0 · 21 novembre 2026  
**Charge indicative :** 45–55 heures  
**Prérequis :** B03 (algèbre linéaire), B04 (analyse à une variable), B05 (calcul multivarié et EDO). Programmation élémentaire en Python ou R recommandée.

## Finalité
Transformer des problèmes mathématiques en procédures calculables, comprendre erreurs et garanties, choisir une méthode selon le conditionnement et la structure, puis vérifier et documenter les résultats.

| Code | Unité | Compétence centrale | Charge |
|---|---|---|---:|
| N01 | Représentation des nombres, virgule flottante et erreurs | Représentation et mesure des erreurs | 4–5 h |
| N02 | Conditionnement, stabilité et propagation des erreurs | Sensibilité et analyse avant/arrière | 4–5 h |
| N03 | Résolution numérique des systèmes linéaires : méthodes directes | Élimination, pivotement et factorisations | 5–6 h |
| N04 | Méthodes itératives pour les systèmes linéaires | Convergence et préconditionnement | 5–6 h |
| N05 | Recherche numérique de racines et systèmes non linéaires | Dichotomie, Newton et convergence | 4–5 h |
| N06 | Interpolation polynomiale et splines | Interpolation et oscillations | 4–5 h |
| N07 | Approximation, moindres carrés et problèmes mal posés | QR, SVD et régularisation | 4–5 h |
| N08 | Dérivation et intégration numériques | Différences finies et quadratures | 4–5 h |
| N09 | Résolution numérique des équations différentielles | Euler, Runge–Kutta et stabilité | 5–6 h |
| N10 | Simulation, vérification et reproductibilité scientifique | Tests, validation et traçabilité | 4–5 h |

## Progression
N01–N02 posent le langage des erreurs et de la sensibilité. N03–N04 traitent les systèmes linéaires. N05–N07 couvrent racines, interpolation et approximation. N08–N09 traitent calcul différentiel/intégral et EDO numériques. N10 rassemble vérification, validation et reproductibilité.

## Frontières avec les autres blocs
- B03 établit l'algèbre linéaire théorique ; B07 étudie les algorithmes qui la mettent en œuvre.
- B04 et B05 enseignent analyse et EDO mathématiques ; B07 étudie leur approximation discrète.
- B06 traite l'optimisation et ses algorithmes dédiés ; B07 traite les fondements numériques généraux.
- Les EDP, éléments finis, volumes finis, méthodes spectrales avancées, calcul haute performance, calcul parallèle, multiprécision et calcul certifié sont des prolongements L3/L4.

## Modalités pédagogiques
Chaque unité contient objectifs, hypothèses, méthodes, exemples, contre-exemples, exercices corrigés, erreurs fréquentes et critères de maîtrise. Les ateliers de programmation accompagnent les notions sans remplacer les preuves.

## Évaluation
Épreuve formative proposée : 120 minutes, 100 points. Elle évalue représentation flottante, conditionnement, résolution linéaire, méthodes itératives, racines, interpolation, moindres carrés, quadrature, EDO et reproductibilité. Aucun résultat ne vaut certification.

## Sources de cadrage
- MIT OCW 18.330 : https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/
- MIT OCW 18.335J : https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/
- MIT Course Catalog 18.330 : https://catalog.mit.edu/subjects/18/
- Higham, *Accuracy and Stability of Numerical Algorithms*, SIAM, 2002 : https://nhigham.com/accuracy-and-stability-of-numerical-algorithms/
- Trefethen & Bau, *Numerical Linear Algebra* : https://people.maths.ox.ac.uk/trefethen/text.html

Ces ressources guident le cadrage et la vérification. Elles ne valident ni n'accréditent Programme B. Les sections effectivement utilisées doivent être consignées lors de la revue approfondie.
