

## Mise à jour de la revue interne — 21 novembre 2026

**Décision :** revue interne de cohérence effectuée pour B01–B20. Les vingt blocs quittent l'état éditorial « brouillon » dans le catalogue et sont affichés comme **« Revue interne effectuée — consolidation pédagogique en cours »**.

Cette décision concerne le contrôle interne assisté par IA du périmètre, des objectifs, des prérequis, des cartes pédagogiques, des évaluations, des notes de revue existantes et de la cohérence des statuts. Elle ne signifie pas que chaque démonstration, ligne de code ou corrigé a été vérifié exhaustivement par un expert humain indépendant. Elle ne transforme pas les blocs en contenus « testés » ou « publiés » au sens du protocole académique.

Les anciens statuts « draft » de cette première passe décrivaient l'absence de revue formalisée à cette date. Ils sont supersédés par cette décision de revue interne. Les points de consolidation listés ci-dessous restent visibles et devront être résolus au fil des versions.

### Synthèse de la seconde passe

| Bloc | Périmètre de revue | Résultat interne | Consolidations à poursuivre |
|---|---|---|---|
| B01 | F01–F08, carte et épreuve transversale | Progression quantitative cohérente ; domaines, calculs ciblés et exemples structurants revus | Développer preuves guidées, problèmes ouverts, corrigés exhaustifs, tests apprenants et exécution des exemples logiciels |
| B02 | D01–D08, logique, preuves, dénombrement, graphes et complexité | Progression logique cohérente ; quantificateurs, contraposée, induction, combinatoire et graphes examinés | Compléter les corrigés détaillés, les contre-exemples et les références par chapitre ; faire tester les exercices |
| B03 | V01–V10, algèbre linéaire | Notations, dimensions, rang, projections, spectre, moindres carrés et SVD contrôlés dans la revue existante | Développer les justifications abstraites et les diagnostics de stabilité ; compléter traçabilité des références et tests d'apprentissage |
| B04 | A01–A10, analyse réelle | Définitions de convergence, hypothèses des théorèmes, dérivation, intégration et séries contrôlées | Étendre certaines preuves et préciser les transitions vers mesure/Lebesgue ; tests apprenants et vérification de rendu |
| B05 | M01–M10, calcul multivarié et EDO | Progression gradient/Jacobienne/Hessienne, intégrales multiples et systèmes différentiels cohérente | Développer les preuves de différentiabilité, les conditions d'optimisation, les méthodes numériques et les exemples de systèmes |
| B06 | O01–O10, optimisation | Formulation, convexité, dualité, programmation linéaire et familles d'algorithmes examinées | Détailler convergence, conditions KKT, cas dégénérés, optimisation entière et interprétation de sensibilité |
| B07 | N01–N10, analyse numérique | Erreurs, conditionnement, stabilité et choix d'algorithmes couverts de façon cohérente | Ajouter analyses d'erreur et de convergence, cas mal conditionnés, tests numériques exécutables et benchmarks |
| B08 | P01–P10, probabilités | Seconde passe interne : espaces probabilisés, lois usuelles élargies, lois conjointes, espérance conditionnelle mesurée, inégalités et théorèmes limites précisés | Exécuter les notebooks ; développer les preuves complètes ; revue indépendante, tests apprenants et audit d'accessibilité/rendu |
| B09 | S01–S10, processus stochastiques | Chaînes de Markov, processus de comptage, renouvellement et martingales articulés | Compléter générateurs/temps continus, temps d'arrêt, mouvement brownien, hypothèses des théorèmes et simulations |
| B10 | T01–T10, statistique descriptive et échantillonnage | Unité statistique, qualité, exploration, plans et biais de données cohérents | Clarifier MCAR/MAR/MNAR, limites des diagnostics et imputations, pondération d'enquête et robustesse des indicateurs |
| B11 | I01–I10, inférence statistique | Estimation, vraisemblance, tests, intervalles et rééchantillonnage alignés | Renforcer conditions asymptotiques, puissance, multiplicité, bootstrap et distinction entre inférence fréquentiste et bayésienne |
| B12 | R01–R10, régression et modèles | OLS, GLM, diagnostics et modèles mixtes cadrés dans une progression pertinente | Compléter hypothèses, dérivations, transformations, interactions, surdispersion, effets aléatoires et diagnostics reproductibles |
| B13 | MV01–MV10, statistique multivariée | Covariance, ACP, facteurs, classification et grande dimension reliés aux prérequis | Développer shrinkage, robustesse, données mixtes, choix de dimension et exemples complets ; préciser références par section |
| B14 | CI01–CI10, plans d'expérience et causalité | Estimands, randomisation, DAG, confusion et méthodes quasi expérimentales cohérents | Formaliser interférence/SUTVA, positivité, instruments faibles, DiD échelonnée, double robustesse et inférence |
| B15 | ML01–ML10, apprentissage statistique | Risque, généralisation, validation et grandes familles de modèles articulés | Ajouter dérivations biais-variance, validation imbriquée, dualité SVM, boosting, rétropropagation, calibration et benchmarks |
| B16 | TS01–TS10, séries temporelles | Stationnarité, ARIMA, ETS, VAR, volatilité et prévision correctement délimités | Développer stationnarité/inversibilité, intervalles, spectre, cointégration, GARCH et filtres de Kalman |
| B17 | DE01–DE10, ingénierie des données | Architecture, SQL, pipelines, qualité et reproductibilité couverts | Ajouter SQL exécuté, transactions, formats comparés, CDC, données tardives, benchmarks distribués et revue juridique des usages |
| B18 | AR01–AR10, actuariat et risque | Fréquence-sévérité, tarification, survie, provisions, réassurance et capital cohérents | Vérifier conventions de flux, dérivations, crédibilité, Chain-Ladder/Mack, dépendance et textes réglementaires à date d'usage |
| B19 | EF01–EF10, économétrie et finance | Endogénéité, panel, IV/GMM, choix discret, facteurs et risque couverts | Approfondir panels dynamiques, instruments faibles, tests de racine unitaire, backtesting et microstructure |
| B20 | AT01–AT10, théorie avancée et recherche | Convergence, asymptotique, processus empiriques, Bayes, martingales et recherche articulés | Ajouter preuves complètes, contiguïté/LAN, classes GC/Donsker, inférence semi-paramétrique, diagnostics MCMC et inégalités oracle |

### Décisions éditoriales communes

1. **Aucun bloc n'est plus classé « brouillon » dans l'interface du Learning Studio.** Tous les blocs sont identifiés comme ayant fait l'objet d'une revue interne.
2. Les unités restent des versions de travail à consolider ; l'étiquette de revue interne n'est ni un label de qualité institutionnel ni une garantie d'absence d'erreur.
3. Les évaluations restent formatives et non certifiantes. Les corrigés, barèmes, distracteurs et solutions doivent être revérifiés avant toute utilisation sommative.
4. Les notebooks, scripts et requêtes doivent être exécutés dans des environnements versionnés avant d'être marqués testés.
5. B18 nécessite une vérification réglementaire datée avant toute utilisation professionnelle ; B17 nécessite une validation de conformité selon le contexte réel des données.
6. La revue humaine externe, les essais avec apprenants et les contrôles d'accessibilité restent des portes distinctes.

### Critères de clôture de la consolidation

- aucune anomalie bloquante ou majeure non résolue dans les définitions, théorèmes, preuves et corrigés ;
- références localisées par chapitre/section pour les notions centrales ;
- exemples, exercices et corrigés recalculés ;
- code et notebooks exécutés et reproductibles ;
- évaluation alignée sur les objectifs ;
- rendu, clavier, responsive et accessibilité contrôlés ;
- décision de revue et limites résiduelles tracées par unité.


## Audit transversal — 21 novembre 2026

- Rapport : [PROGRAMME-B-CROSS-BLOCK-AUDIT-2026-11-21.md](PROGRAMME-B-CROSS-BLOCK-AUDIT-2026-11-21.md).
- Contrôles structurels : 20 blocs, 196 unités, 196 identifiants publics uniques ; source register S01–S160 sans doublon ni trou ; 13 laboratoires Python/R B08–B20 intégrés à la CI.
- Corrections documentaires et pédagogiques proposées dans la branche `chatgpt/curriculum-transversal-audit` : README, roadmap, architecture, parcours, codes B13 MV01–MV10, sources MANOVA S158–S160, en-têtes B18–B20, versions des cours B10–B20 et contenus AT03/AT05.
- Le complément MANOVA MV04 de l'ancienne PR #60 est repris dans cette branche ; PR #60 doit être fermée après fusion de la reprise, afin d'éviter des branches concurrentes.
- Cette revue est structurelle et assistée par IA ; elle ne vaut pas revue mathématique exhaustive, validation indépendante, tests apprenants ni audit d'accessibilité.


### Résultat de publication de l'audit transversal

- PR [#68](https://github.com/JohnGAB7/Actu-Basics-Programme-B/pull/68) fusionnée ; commit `840086855a772d0a15f1770a3e04237e7a024fd6`.
- PR #60 fermée après vérification de l'intégration MV04 dans master.
- Déploiement master [#44959748131](https://github.com/JohnGAB7/Actu-Basics-Programme-B/actions/runs/44959748131) réussi : tests Python/R B08–B20, build, typecheck, KaTeX et GitHub Pages.


## Revue mathématique B08 — 21 novembre 2026

- Rapport : [B08-mathematical-review.md](B08-mathematical-review.md).
- P01–P10 relues sur les axiomes, Bayes, indépendance, lois, transformations, covariance, espérance conditionnelle, inégalités, convergence, LLN/TCL.
- Aucun défaut mathématique bloquant identifié dans cette première passe ; P05, P09 et P10 enrichies ; références S161–S163 ajoutées.
- Recalcul exhaustif des exercices, revue humaine indépendante et tests apprenants restent à réaliser.
