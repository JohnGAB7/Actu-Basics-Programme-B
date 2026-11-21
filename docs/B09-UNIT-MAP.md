# B09 — Carte pédagogique : processus stochastiques

**Statut :** revue interne effectuée — consolidation pédagogique en cours.

**Version :** 1.0 · 21 novembre 2026  
**Charge indicative :** 48–58 heures  
**Prérequis :** B08 (probabilités), B04 (analyse) et B03 (algèbre linéaire pour les matrices de transition et générateurs). Les bases de l'espérance conditionnelle sont indispensables.

## Finalité
Modéliser l'évolution aléatoire de systèmes au cours du temps, étudier les chaînes de Markov et les processus de comptage, comprendre renouvellement et martingales, puis introduire chaînes à temps continu, files d'attente et mouvement brownien.

| Code | Unité | Compétence centrale | Charge |
|---|---|---|---:|
| S01 | Introduction aux processus stochastiques | Indices, états, trajectoires et stationnarité | 4–5 h |
| S02 | Chaînes de Markov à temps discret et matrices de transition | Propriété de Markov et calcul matriciel | 5–6 h |
| S03 | Classification des états : communication, récurrence et périodicité | Structure des chaînes | 5–6 h |
| S04 | Distributions stationnaires, convergence et réversibilité | Régimes invariants et convergence | 5–6 h |
| S05 | Chaînes absorbantes, probabilités d'atteinte et temps d'absorption | Matrice fondamentale et absorption | 4–5 h |
| S06 | Processus de Poisson et temps d'attente exponentiels | Comptage, arrivées et amincissement | 5–6 h |
| S07 | Processus de renouvellement et théorèmes de renouvellement | Durées, taux et récompenses | 4–5 h |
| S08 | Martingales, filtrations et temps d'arrêt | Information, arrêt et théorèmes | 5–6 h |
| S09 | Chaînes de Markov à temps continu et modèles de naissance-mort | Générateurs, files M/M/1 | 5–6 h |
| S10 | Mouvement brownien et processus gaussiens | Diffusion et variation quadratique | 5–6 h |

## Progression
S01 introduit les objets et les trajectoires. S02–S05 construisent la théorie des chaînes de Markov à temps discret. S06–S07 développent processus de Poisson et renouvellement. S08 étudie les martingales et les temps d'arrêt. S09 passe au temps continu et aux files d'attente. S10 introduit le mouvement brownien et prépare le calcul stochastique.

## Frontières avec les autres blocs
- B08 formalise les variables aléatoires, lois, espérances et convergence ; B09 ajoute une structure temporelle.
- B16 traitera les séries temporelles et la prévision ; B09 ne traite pas l'inférence temporelle appliquée.
- Les chaînes de Markov sont introduites ici ; leurs applications Monte Carlo et MCMC relèveront des blocs de simulation et de machine learning.
- Le calcul d'Itô, les équations différentielles stochastiques, les diffusions avancées, les grandes déviations et la théorie des files lourdes sont des prolongements L3/L4.

## Modalités pédagogiques
Chaque unité comprend définitions, hypothèses, exemples, exercices corrigés, erreurs fréquentes et critères de maîtrise. Des simulations Python/R doivent illustrer les trajectoires, transitions, arrivées et temps d'attente, sans remplacer les démonstrations.

## Évaluation
Épreuve formative proposée : 120 minutes, 100 points. Elle évalue chaînes discrètes, classes d'états, stationnarité, absorption, Poisson, renouvellement, martingales, chaînes continues et mouvement brownien. Aucun résultat ne vaut certification.

## Sources de cadrage
- MIT OCW 18.445 — Introduction to Stochastic Processes : https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/
- MIT OCW 6.262 — Discrete Stochastic Processes : https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/
- MIT OCW 15.070J — Advanced Stochastic Processes : https://ocw.mit.edu/courses/15-070j-advanced-stochastic-processes-fall-2013/
- MIT OCW 18.445 — Lecture Notes : https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/pages/lecture-notes/

Ces ressources guident le cadrage et la vérification. Elles ne valident ni n'accréditent Programme B. Les chapitres et sections effectivement utilisés doivent être consignés lors de la revue approfondie.
