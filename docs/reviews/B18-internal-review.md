# B18 — Première revue interne de contenu

**Version examinée :** 0.1 · **Statut :** revue assistée par IA, non indépendante  
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
