# B18 — Seconde revue interne de contenu

**Version examinée :** 1.1 · **Statut :** seconde revue assistée par IA, non indépendante  
**Périmètre :** AR01–AR10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Progression du risque assuré vers tarification, crédibilité, vie, non-vie, réassurance et capital.
- Exposition, fréquence, sévérité, coût agrégé et offsets explicités.
- Hypothèses Poisson, binomiale négative, Tweedie et modèles de survie distinguées.
- Calendrier des flux et actualisation mis en évidence en assurance vie.
- Triangle, Chain-Ladder, Mack et limites structurelles couverts.
- Rétention, limites et risque de contrepartie présentés.
- VaR, TVaR, dépendance et gouvernance intégrés.
- Références EIOPA/Solvabilité II utilisées pour cadrer gouvernance et provisions, sans prétendre résumer tout le droit en vigueur.

## Points à approfondir avant statut reviewed
1. Ajouter dérivations de variance agrégée fréquence-sévérité et dépendance conditionnelle.
2. Détailler GLM tarifaires, splines, interactions, crédibilité et diagnostics de stabilité.
3. Ajouter méthodes de lissage/interpolation de tables et mortalité prospective.
4. Vérifier formules de rentes/assurances selon timing des prestations et conventions d'intérêt.
5. Développer Chain-Ladder, Mack, bootstrap, BF et effets de l'inflation.
6. Détailler structures de réassurance, clauses contractuelles et agrégation événementielle.
7. Ajouter copules, dépendance de queue et diversification sous stress.
8. Actualiser la cartographie des textes Solvabilité II, évolutions européennes et transposition nationale.
9. Ajouter notebooks R/Python, jeux de données synthétiques et études de cas complètes.
10. Revue humaine indépendante par actuaire, validation apprenant et vérification des calculs.

## Références de cadrage
- EIOPA — Actuarial function, Solvency II Single Rulebook : https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/article-5935_en
- Solvency II Directive, Article 48 — Actuarial function : https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/article-2131_en
- Solvency II Directive, Article 77 — Technical provisions : https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/article-2160_en
- EUR-Lex, Directive 2009/138/EC : https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32009L0138
- EIOPA — Guidelines on valuation of technical provisions : https://www.eiopa.europa.eu/document/download/dec39b30-4aa3-4e06-aef8-4d06f7ee548a_en?filename=EIOPA-BoS-14-166rev2_GLs+on+the+valuation+of+technical+provisions.pdf

## Limites et statut
Cette revue ne remplace pas un avis juridique ni une revue humaine indépendante en actuariat. Les règles réglementaires sont susceptibles d'évoluer et doivent être vérifiées à la date d'application. Les unités sont des premières versions de travail, non accréditées.



## Seconde revue interne — version 1.1

**Périmètre :** approfondissements AR01–AR10, laboratoire Python/R, carte pédagogique et évaluation.

### Contrôles ajoutés
- AR01–AR02 : loi de variance totale pour le coût composé, unités d'exposition, surdispersion, censure/troncature et dépendance fréquence-sévérité.
- AR03 : log-vraisemblance Poisson avec offset, relativités/interactions, calibration du coût total et contraintes.
- AR04 : justification du facteur Bühlmann et ouverture Bühlmann–Straub.
- AR05 : force de mortalité, convention de censure ex æquo, Greenwood et distinction tables de période/cohorte.
- AR06 : réserve prospective, paiements continus/discrets et options comportementales.
- AR07 : facteur tail, Mack, bootstrap, Bornhuetter–Ferguson et réconciliation.
- AR08 : clauses contractuelles, coût de couche et risque de contrepartie.
- AR09 : Expected Shortfall intégral, dépendance de queue et contexte SCR Solvabilité II.
- AR10 : rôle de la fonction actuarielle, validation proportionnée, biais et suivi.

### Laboratoire et tests
Le laboratoire Python/R couvre les primitives définies dans `labs/b18/README.md`. Les tests Python visent les cas déterministes et erreurs d'entrée ; le script R exécute des assertions de base. Le GLM Python est un IRLS minimal sans erreurs-types/covariance ; le GLM R utilise `glm.fit`. Les deux ne remplacent pas les bibliothèques de production.

### Limites restantes
1. Vérifier la convergence et les cas limites du GLM sur plusieurs jeux synthétiques ; ajouter des intervalles et diagnostics.
2. Tester les calculs Chain-Ladder/Mack et bootstrap contre une implémentation de référence.
3. Comparer Kaplan–Meier/Greenwood à un logiciel spécialisé sur jeux de référence.
4. Ajouter données synthétiques de portefeuille, inflation, limites et grands sinistres.
5. Faire relire les formules de réserves et de mortalité par un actuaire indépendant.
6. Vérifier la réglementation Solvabilité II, IFRS 17 et les transpositions nationales en vigueur à la date d'utilisation.
7. Organiser tests apprenants et audit manuel d'accessibilité.

**Conclusion :** seconde revue assistée par IA ; elle ne constitue ni validation académique indépendante, ni avis réglementaire, ni certification.


## Références complémentaires de la seconde passe
- S127–S128 : Society of Actuaries, FAM/ASTAM 2026, modèles actuariels, tarification, provisionnement et crédibilité.
- S129 : SOA, Credibility Educational Resource for Pension Actuaries.
- S130–S132 : EIOPA, articles 77 (provisions), 48 (fonction actuarielle) et 101 (SCR) du Rulebook Solvency II.
- S133 : Human Mortality Database, périmètre et méthodes des tables de mortalité.
- S134 : International Actuarial Association, ISAP 1/5 et pratique actuarielle.
- S135 : SOA Research Institute, étude 2026 sur biais et modèles prédictifs de tarification d'assurance.

Les références cadrent les objectifs ; elles ne remplacent pas la vérification des éditions, des textes consolidés ni une revue indépendante.
