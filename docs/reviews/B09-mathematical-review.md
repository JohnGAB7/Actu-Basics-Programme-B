# B09 — Revue mathématique approfondie (première passe)

**Date :** 21 novembre 2026  
**Périmètre :** S01–S10, chaînes discrètes et continues, renouvellement, martingales et brownien.  
**Statut :** première revue interne assistée par IA ; pas de validation indépendante.

## Synthèse

Aucune erreur mathématique bloquante n'a été identifiée dans les dix unités lors de cette passe. Les énoncés essentiels sont cohérents avec les hypothèses indiquées. Les distinctions les plus importantes — stationnarité vs indépendance, irréductibilité vs apériodicité, existence vs convergence d'une distribution stationnaire, absorption certaine, conditions de l'arrêt optionnel et cadre fini vs dénombrable — sont explicitement abordées.

## Revue par unité

| Unité | Résultats contrôlés | Conclusion |
|---|---|---|
| S01 | Définition d'un processus, lois finies, cohérence, stationnarité stricte/faible et accroissements | Correct. La réserve sur les conditions d'extension et la régularité des trajectoires est appropriée. |
| S02 | Propriété de Markov, matrice stochastique, vecteurs-lignes, Chapman–Kolmogorov et premier pas | Calcul de P² et de la distribution (0,70; 0,30) vérifié. Les conditions aux frontières sont signalées. |
| S03 | Communication, irréductibilité, récurrence positive/nulle, transience, période et fermeture | Résultats corrects ; la distinction entre chaînes finies et dénombrables est explicite. |
| S04 | Existence/unicité stationnaire, convergence, réversibilité et temps moyen de retour | Exemple recalculé : π=(0,6;0,4), équilibre détaillé 0,12=0,12, temps moyens 5/3 et 5/2. Correct. |
| S05 | Forme canonique, matrice fondamentale N, absorption B=NR et temps moyen N1 | Formules correctes sous absorption presque sûre ; lien spectral ρ(Q)<1 précisé. |
| S06 | Processus de Poisson, caractérisation locale, temps exponentiels, superposition, amincissement et dates conditionnelles | Paramètre λt, variance, temps inter-arrivées et propriétés de superposition/thinning cohérents. |
| S07 | Processus de renouvellement, loi forte de N(t)/t et théorème de récompense | Hypothèses i.i.d., durée moyenne finie et récompense intégrable correctement indiquées ; le cycle incomplet est signalé. |
| S08 | Filtration, adaptation, martingale, temps d'arrêt et arrêt optionnel | Énoncés corrects ; l'absence d'un arrêt optionnel universel est clairement expliquée. |
| S09 | Générateur, exponentielle matricielle, équations de Kolmogorov et M/M/1 | Générateur et formules M/M/1 contrôlés : ρ<1, E[N]=ρ/(1−ρ), W=1/(μ−λ). Les limites en espace infini sont signalées. |
| S10 | Brownien, covariance, scaling, variation quadratique, réflexion et formule d'Itô | Formules contrôlées : Cov(B_s,B_t)=min(s,t), [B]_t=t et d(B_t²)=2B_t dB_t+dt. Le périmètre introductif d'Itô est annoncé. |

## Enrichissements de traçabilité

- Ajout des références MIT OCW S164–S166 au registre.
- Chaque unité S01–S10 renvoie maintenant à ses identifiants de sources.
- Les cours MIT sont utilisés pour situer le périmètre, les hypothèses et la profondeur ; ils ne sont pas présentés comme des validations externes du contenu.

## Points restant à tester

1. Recalcul exhaustif des exercices et corrigés.
2. Comparaison des matrices fondamentales, probabilités d'absorption, distributions stationnaires et files M/M/1 à un logiciel de référence.
3. Tests des cas limites : chaîne périodique, chaîne irréductible dénombrable récurrente nulle, chaîne non absorbante, générateur avec état explosif, file M/M/1 à charge proche de 1.
4. Vérification des simulations Python/R et des erreurs d'échantillonnage.
5. Relecture humaine indépendante et tests apprenants.

**Conclusion :** B09 présente une base mathématique cohérente dans cette première passe. Aucun défaut bloquant n'a été identifié ; les limites des théorèmes sont explicitement rappelées. Aucune certification académique n'est revendiquée.


## Contrôle complémentaire du laboratoire

Les entrées non finies sont désormais rejetées de manière cohérente dans les implémentations Python/R pour les matrices de transition, les intensités/taux, les horizons, les pas browniens et la variation quadratique. Des tests ciblés couvrent NaN/Inf et les paramètres invalides. Ces validations préviennent notamment des boucles de simulation qui pourraient ne jamais terminer sur des paramètres NaN.
