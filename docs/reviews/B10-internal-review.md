# B10 — Revue interne mathématique et pédagogique

**Version :** 0.1 · 21 novembre 2026  
**Nature :** première passe interne assistée par IA, non indépendante et non certifiante.

## Couverture
T01 : unités, variables, populations et échelles. T02 : qualité, granularité, jointures et traçabilité. T03–T04 : plans de sondage, probabilités d'inclusion, poids HT/Hájek et correction de population finie. T05–T06 : distributions empiriques, quantiles, dispersion et robustesse. T07–T08 : graphiques univariés/bivariés et association. T09 : MCAR/MAR/MNAR, valeurs atypiques et sensibilité. T10 : EDA et communication reproductible.

## Contrôles mathématiques à effectuer avant stabilisation
1. Vérifier la définition de la population finie, les probabilités d'inclusion et les poids de sondage.
2. Vérifier l'estimateur de Horvitz–Thompson et ses conditions de non-biais ; distinguer ratio de Hájek.
3. Vérifier la convention de variance de population S² et la correction de population finie pour sondage aléatoire simple sans remise.
4. Vérifier conventions de quantiles, médiane pour n pair et histogrammes à classes inégales.
5. Recalculer les exemples de moyenne, variance, MAD et coefficient de variation.
6. Vérifier les conditions d'usage du CV et la constante 1,4826 de la MAD sous normalité.
7. Distinguer valeurs atypiques statistiques et erreurs de mesure ; vérifier les règles de moustaches.
8. Vérifier les définitions MCAR, MAR et MNAR et les limites des diagnostics empiriques.
9. Vérifier les limites de l'imputation simple et les hypothèses des méthodes multiples.
10. Vérifier les interprétations du paradoxe de Simpson, des associations et de la multiplicité exploratoire.

## Points à approfondir
- Ajouter les formules de variance sous plans stratifiés, en grappes et à plusieurs degrés.
- Développer non-réponse, ajustement des poids, calage et estimation de variance sous plans complexes.
- Ajouter les quantiles pondérés et méthodes de calcul selon les logiciels ; documenter les conventions R/Python.
- Ajouter données censurées, troncature, détection d'anomalies multivariées et méthodes robustes avancées.
- Ajouter notebooks reproductibles R/Python sur un cas réel, avec dictionnaire, tests qualité, graphiques et journal des transformations.
- Développer davantage l'inférence avec données manquantes dans B11 et la causalité dans le bloc approprié.

## Contrôles éditoriaux et techniques
Build TypeScript/Vite ; validation Markdown/KaTeX ; présence des dix unités T01–T10 dans le lecteur et catalogue ; cohérence des liens et prérequis ; tests clavier, lecteur d'écran et mobile ; tests apprenants sur le vocabulaire, les conventions de quantiles et les plans de sondage.

## Statut
B10 constitue un premier ensemble de dix unités en revue interne. La revue est assistée par IA et n'est pas indépendante ; elle ne constitue ni certification ni accréditation. Les démonstrations approfondies, notebooks, tests apprenants et revue externe restent à conduire.
