# B06 — Carte pédagogique : optimisation et recherche opérationnelle

**Version :** 1.0 · 21 novembre 2026  
**Charge indicative :** 45–55 heures  
**Prérequis :** B03 (algèbre linéaire), B05 (calcul multivarié et EDO) ; B02 pour les graphes. B08 sera utile pour approfondir l'optimisation stochastique.

## Finalité
Savoir traduire une situation de décision en modèle mathématique, établir la faisabilité et l'optimalité, comprendre les structures convexes, choisir et interpréter des algorithmes, et communiquer les limites d'une solution numérique. Le bloc relie programmation linéaire, optimisation non linéaire, combinatoire, réseaux et décision sous incertitude.

| Code | Unité | Compétence centrale | Charge |
|---|---|---|---:|
| O01 | Modélisation mathématique des problèmes d’optimisation | Variables, objectif, contraintes, faisabilité | 4–5 h |
| O02 | Ensembles convexes, fonctions convexes et géométrie de l’optimalité | Convexité et garanties globales | 4–5 h |
| O03 | Programmation linéaire : géométrie et méthode du simplexe | Polyèdres, bases, pivots et cas particuliers | 5–6 h |
| O04 | Dualité linéaire, complémentarité et analyse de sensibilité | Bornes, certificats et prix d’ombre | 5–6 h |
| O05 | Optimisation sur les réseaux : chemins, flots et coûts | Plus court chemin, flot maximum et flot de coût minimum | 4–5 h |
| O06 | Programmation en nombres entiers et optimisation combinatoire | Relaxation, branch-and-bound et coupes | 5–6 h |
| O07 | Optimisation différentiable sans contraintes | Gradient, recherche linéaire, Newton et quasi-Newton | 4–5 h |
| O08 | Optimisation sous contraintes non linéaires et conditions KKT | Lagrangien, régularité et optimalité | 5–6 h |
| O09 | Algorithmes pour l’optimisation convexe à grande échelle | QP, gradient projeté, prox et points intérieurs | 5–6 h |
| O10 | Optimisation robuste et décision sous incertitude | Ensembles d’incertitude, robustesse et Pareto | 4–5 h |

## Progression
O01–O02 posent le langage et les garanties structurelles. O03–O06 couvrent les modèles linéaires, la dualité, les réseaux et les décisions discrètes. O07–O09 introduisent les méthodes différentiables et convexes. O10 élargit la décision aux paramètres incertains et aux objectifs multiples.

## Frontières avec les autres blocs
- B05 enseigne le calcul multivarié et les multiplicateurs ; B06 les mobilise pour établir et résoudre des problèmes d'optimisation.
- B07 développera l'analyse numérique générale : erreurs, conditionnement, interpolation, quadrature et EDO numériques. B06 ne traite ici que les critères numériques propres aux solveurs d'optimisation.
- B08 développera les distributions et probabilités nécessaires à une optimisation stochastique complète. B06 introduit la robustesse déterministe et distingue les cadres.
- La programmation dynamique avancée, l'optimal control, l'optimisation stochastique avancée, les méthodes distribuées et l'optimisation semi-définie approfondie sont des prolongements.

## Modalités pédagogiques
Chaque unité présente objectifs, définitions, hypothèses, résultats et preuves adaptées, exemples calculés, contre-exemples, applications, exercices corrigés, erreurs fréquentes et références. Les solveurs ne remplacent ni la formulation ni l'interprétation des résultats.

## Évaluation
Épreuve formative proposée : 120 minutes, 100 points. Elle évalue formulation, convexité, programmation linéaire, dualité, réseaux, intégralité, méthodes différentiables, KKT et robustesse. Le seuil éventuel de réussite ne constitue pas une certification et doit être justifié par un processus de standard-setting avant tout usage certificatif.

## Sources de cadrage
- MIT OCW 15.093J — Optimization Methods : https://ocw.mit.edu/courses/15-093j-optimization-methods-fall-2009/
- MIT OCW 6.7220J — Nonlinear Optimization : https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/
- MIT 15.053 — Optimization Methods in Business Analytics : https://catalog.mit.edu/subjects/15/
- Boyd & Vandenberghe — Convex Optimization : https://web.stanford.edu/~boyd/cvxbook/

Ces ressources servent au cadrage et à la comparaison de couverture. Elles ne valident ni n'accréditent Programme B. Les références précises par chapitre, section et théorème doivent être confirmées lors de la revue approfondie.
