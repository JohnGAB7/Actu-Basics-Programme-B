# B10 — Revue interne mathématique et pédagogique

**Version :** 0.2 · 21 novembre 2026  
**Nature :** seconde passe interne assistée par IA, non indépendante et non certifiante.

## Couverture
T01 : unités, variables, populations et échelles. T02 : qualité, granularité, jointures et traçabilité. T03–T04 : plans de sondage, probabilités d'inclusion, poids HT/Hájek et correction de population finie. T05–T06 : distributions empiriques, quantiles, dispersion et robustesse. T07–T08 : graphiques univariés/bivariés et association. T09 : MCAR/MAR/MNAR, valeurs atypiques et sensibilité. T10 : EDA et communication reproductible.

## Contrôles mathématiques effectués lors de la seconde passe

1. Recalcul des exemples de moyenne, médiane, variance et IQR ; correction des assertions numériques du laboratoire.
2. Vérification de la formule HT, de sa propriété de non-biais sous probabilités d'inclusion positives connues et de la dépendance de sa variance aux probabilités conjointes πᵢⱼ.
3. Vérification de la variance SRSWOR avec S² défini au dénominateur N−1 et de la correction de population finie ; exemple N=5, n=2 donne une variance de moyenne de 75.
4. Vérification du ratio de Hájek comme estimateur généralement biaisé à taille finie.
5. Alignement de la convention de quantiles du laboratoire sur type 7 (R par défaut).
6. Vérification de la densité d'histogramme pour classes inégales par l'aire des rectangles.
7. Exemple du paradoxe de Simpson vérifié numériquement : A gagne dans chaque strate, mais perd en agrégé.

## Contrôles mathématiques restant à approfondir
1. Vérifier les conventions de médiane et de moustaches sur différents logiciels et petits échantillons.
2. Approfondir les conditions d'usage du CV et la constante 1,4826 de la MAD sous normalité.
3. Distinguer plus finement valeurs atypiques, influence, erreurs de mesure et mécanismes de contamination.
4. Développer les hypothèses et limites des méthodes d'imputation multiple et des scénarios MNAR.
5. Étendre l'analyse des plans stratifiés, en grappes et à plusieurs degrés, avec estimation de variance adaptée.
6. Étudier les limites des diagnostics MCAR/MAR/MNAR et de la multiplicité exploratoire.

## Points à approfondir
- Ajouter les formules de variance sous plans stratifiés, en grappes et à plusieurs degrés.
- Développer non-réponse, ajustement des poids, calage et estimation de variance sous plans complexes.
- Ajouter les quantiles pondérés et méthodes de calcul selon les logiciels ; documenter les conventions R/Python.
- Ajouter données censurées, troncature, détection d'anomalies multivariées et méthodes robustes avancées.
- Ajouter notebooks reproductibles R/Python sur un cas réel, avec dictionnaire, tests qualité, graphiques et journal des transformations.
- Développer davantage l'inférence avec données manquantes dans B11 et la causalité dans le bloc approprié.

## Contrôles éditoriaux et techniques
Build TypeScript/Vite ; validation Markdown/KaTeX ; présence des dix unités T01–T10 dans le lecteur et catalogue ; cohérence des liens et prérequis ; tests clavier, lecteur d'écran et mobile ; tests apprenants sur le vocabulaire, les conventions de quantiles et les plans de sondage.

## Livrables ajoutés

- `labs/b10/descriptive_lab.py` et `labs/b10/descriptive_lab.R` : audit qualité, résumés, quantiles type 7, ECDF, histogramme à classes inégales, HT/Hájek, variance SRS, corrélation, données manquantes et Simpson.
- `labs/b10/tests/test_descriptive_lab.py` : tests sur les résultats numériques, les entrées invalides, les pondérations et l'inversion de Simpson.
- CI étendue aux tests Python et contrôles R de B10.

## Statut
B10 constitue un premier ensemble de dix unités en revue interne. La revue est assistée par IA et n'est pas indépendante ; elle ne constitue ni certification ni accréditation. Les démonstrations approfondies, notebooks, tests apprenants et revue externe restent à conduire.
