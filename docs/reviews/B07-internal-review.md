# B07 — Revue interne mathématique et pédagogique

**Version :** 0.1 · 21 novembre 2026  
**Nature :** première passe interne assistée par IA, non indépendante et non certifiante.

## Couverture
N01–N02 : représentation, erreurs, conditionnement et stabilité. N03–N04 : méthodes directes et itératives. N05 : racines et systèmes non linéaires. N06–N07 : interpolation, splines, approximation et régularisation. N08–N09 : dérivation, quadrature et EDO numériques. N10 : vérification, validation et reproductibilité.

## Contrôles mathématiques effectués
1. N01 : rationalisation de sqrt(x+1)-sqrt(x) et erreurs absolue/relative.
2. N02 : formule du conditionnement local et identité Ae=r pour le résidu.
3. N03 : recalcul du système symétrique défini positif : solution (9/5,7/5) pour second membre (5,6).
4. N04 : critère spectral ρ(G)<1 et distinction conditions suffisantes/nécessaires.
5. N05 : borne de dichotomie et caractère local de la convergence quadratique de Newton.
6. N06 : unicité de l'interpolant et hypothèses du reste.
7. N07 : amplification possible du conditionnement dans les équations normales.
8. N08 : ordres globaux du trapèze et de Simpson sous régularité.
9. N09 : pas Euler et distinction ordre/stabilité/raideur.
10. N10 : séparation vérification/validation.

## Points à corriger ou approfondir
- Recalculer indépendamment tous les exemples et corrigés avant stabilisation.
- Ajouter démonstrations plus complètes pour convergence de Jacobi/Gauss–Seidel, reste d'interpolation, quadratures et Runge–Kutta.
- Ajouter notebooks Python/R, tests automatiques et études de convergence.
- Enrichir sous-normaux, overflow/underflow, algorithmes compensés, matrices creuses, préconditionneurs, méthodes adaptatives et problèmes raides.
- Documenter précisément hypothèses de Newton, CG, Cholesky et des schémas d'EDO.
- Compléter la traçabilité par chapitre/section effectivement consultés.

## Contrôles éditoriaux et techniques
Build TypeScript/Vite et validation Markdown/KaTeX ; présence des dix unités dans le lecteur et la recherche ; rendu des équations ; navigation ; clavier, lecteur d'écran et mobile ; tests apprenants pour durée et difficulté.

## Statut
B07 constitue un premier ensemble cohérent de dix unités en revue interne. Cette revue n'est pas indépendante et ne remplace ni expertise académique externe ni tests apprenants. Elle ne constitue pas une certification ou accréditation.
