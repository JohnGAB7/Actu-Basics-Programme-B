# B04 — Revue interne mathématique et pédagogique

**Version examinée :** 1.0.0 · **Date :** 21 novembre 2026  
**Statut :** revue interne assistée par IA · non indépendante · non certifiante

## Périmètre

Revue de A01–A10, de la carte pédagogique et de l'évaluation transversale. Contrôles ciblés : définitions et quantificateurs, hypothèses des théorèmes, calculs algébriques, domaines, limites, dérivées, restes de Taylor, changements de variables, convergence des intégrales et séries, corrigés et cohérence des prérequis.

## Références de cadrage

- MIT OCW 18.01SC : limites, continuité, différentiation, applications, intégration, intégrales impropres et séries.
- MIT OCW 18.100B : rigueur des preuves, suites, Cauchy, continuité, dérivation, Taylor et intégrale de Riemann.
- OpenStax Calculus Volumes 1–2 : progression, méthodes de calcul et exercices.

Les syllabus et ressources servent de repères de couverture ; ils ne constituent pas une approbation du contenu.

## Contrôles mathématiques ciblés

- A01 : définition ε–N, unicité, opérations, encadrement, monotonie, Cauchy et Bolzano–Weierstrass ; recalcul de la rationalisation de √(n²+n)−n.
- A02 : définition ε–δ, limites unilatérales, formes indéterminées, encadrement et limites à l'infini ; vérification des simplifications avec restrictions de domaine.
- A03 : continuité en un point, types de discontinuité, TVI, théorème des valeurs extrêmes et continuité uniforme ; hypothèses des théorèmes et exemples de contre-exemples.
- A04 : définition de la dérivée, implication dérivabilité ⇒ continuité, règles du produit/quotient/chaîne et dérivation implicite.
- A05 : hypothèses de Rolle et du TAF, conséquences de monotonie, extrema et domaine d'application de l'Hôpital.
- A06 : coefficients de Taylor, reste de Lagrange et majoration d'erreur ; distinction entre développement limité et égalité à la série de Taylor.
- A07 : sommes de Riemann, intégrabilité des fonctions continues et monotones, propriétés et interprétation signée ; recalcul de la somme pour f(x)=x sur [0,1].
- A08 : théorème fondamental, substitution, intégration par parties et éléments simples ; vérification par dérivation des primitives proposées.
- A09 : définition par limites, singularités intérieures, intégrales de référence et comparaison ; distinction entre convergence ordinaire et valeur principale.
- A10 : condition nécessaire a_n→0, géométriques, p-séries, comparaison, rapport, racine, alternance, convergence absolue et rayon de convergence.

## Vérifications de l'évaluation

Les dix exercices ont été recalculés. Contrôles spécifiques :
- 4/(n+2) : choix de N>4/ε suffisant.
- (x²−1)/(x−1) : simplification valide pour x≠1 et limite égale à 2.
- x³+x−1 : changement de signe et dérivée strictement positive garantissent existence et unicité.
- e^{2x}cos x : règle du produit et chaîne.
- TAF pour x² sur [1,3] : c=2.
- Reste de Taylor de e^{0,1} : majoration e^{0,1}×0,001/6 ≈ 0,000184.
- ∫₀¹xe^{x²}dx=(e−1)/2.
- ∫₁∞x^{-2}dx=1 ; ∫₁∞x^{-1}dx diverge.
- Séries p=2 et p=1 : résultats conformes au critère de Riemann.
- Σx^n/n! : le critère du rapport donne une convergence absolue pour tout x.

## Points de vigilance et limites

- Le cours présente les théorèmes au niveau L1–L2 ; certaines preuves sont données sous forme d'argument ou de justification synthétique et devront être développées dans les approfondissements.
- Les intégrales de Riemann et séries de fonctions sont limitées au socle nécessaire ; l'intégration de Lebesgue et la convergence uniforme approfondie sont réservées à B20.
- Les techniques numériques d'intégration et l'analyse d'erreur algorithmique relèvent de B07.
- Les cours ne sont pas encore testés auprès d'apprenants ; accessibilité, tests multi-navigateurs et observation de la compréhension restent à réaliser.

## Verdict interne

A01–A10 présentent une progression cohérente entre convergence, limites, continuité, dérivation, approximation, intégration et séries. Les calculs de l'évaluation sont cohérents avec les méthodes enseignées. Le bloc peut passer aux contrôles d'intégration et de rendu technique après correction des éventuelles anomalies relevées par CI.

Cette revue est interne et assistée par IA. Elle ne remplace ni une revue humaine indépendante, ni une certification universitaire, ni des tests auprès d'apprenants.
