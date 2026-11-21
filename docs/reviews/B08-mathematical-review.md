# B08 — Revue mathématique approfondie (première passe)

**Date :** 21 novembre 2026  
**Périmètre :** P01–P10, références et cohérence des hypothèses.  
**Statut :** première revue interne assistée par IA ; pas de validation indépendante.

## Synthèse

Aucune erreur mathématique bloquante n'a été identifiée dans les dix unités lors de cette passe. Les axiomes, probabilités conditionnelles, indépendance, lois discrètes et continues, transformations, lois conjointes, espérance conditionnelle, inégalités, convergence, LLN et TCL sont globalement formulés correctement. Les hypothèses importantes sont souvent précisées dans les compléments de consolidation.

Cette conclusion reste limitée à la lecture et aux vérifications ciblées de cette passe ; elle ne signifie pas que chaque exercice et corrigé a été recalculé indépendamment.

## Revue par unité

| Unité | Résultats contrôlés | Conclusion / action |
|---|---|---|
| P01 | Espace probabilisé, tribu, σ-additivité, sous-additivité et continuité des probabilités | Formulations correctes ; rappeler que la continuité décroissante utilise la finitude de P(A1), automatiquement satisfaite pour une probabilité. |
| P02 | Probabilité conditionnelle, partition, probabilités totales et Bayes | Exemple diagnostique recalculé : P(+)=0,1085 et P(M|+)=0,0095/0,1085≈0,08756. Résultat de 8,76 % correct. |
| P03 | Indépendance mutuelle vs deux à deux, indépendance conditionnelle, covariance nulle | Contre-exemple XOR recalculé : chaque paire a une intersection de probabilité 1/4, mais l'intersection triple vaut 1/4 et non 1/8. Correct. |
| P04 | Bernoulli, binomiale, géométrique, hypergéométrique, Poisson, binomiale négative, multinomiale | Formules et moments contrôlés ; convention géométrique et correction de population finie explicites. |
| P05 | Densité, quantiles, uniforme, exponentielle, normale, Gamma, Bêta, khi-deux et Student | Moments et paramétrisation forme–taux vérifiés. Domaines a<b, λ>0 et σ>0 explicités dans la première passe. |
| P06 | Transformations monotones/non injectives, Jacobien, convolution et MGF | Formules correctes sous les hypothèses indiquées ; les branches inverses et la finitude de la MGF au voisinage de zéro sont précisées. |
| P07 | Marginales, conditionnelles, covariance, corrélation et normale multivariée | Formules correctes ; conditions de moments et cas gaussien conjoint explicités. |
| P08 | Espérance conditionnelle, propriété de projection L² et variance totale | Distinction L¹/L² et définition par tribu correctement ajoutées ; existence presque sûre/versions conditionnelles mentionnées. |
| P09 | Markov, Tchebychev, Jensen, Borel–Cantelli et modes de convergence | Hypothèses correctes. Ajout d'un contre-exemple montrant que la divergence de somme sans indépendance ne suffit pas pour Borel–Cantelli II. |
| P10 | Loi faible/forte i.i.d., TCL de Lindeberg–Lévy, fonction caractéristique | Hypothèses précisées ; esquisse de preuve par fonctions caractéristiques cohérente. Ajout d'une borne de Berry–Esseen avec moment absolu d'ordre 3 et source MIT 18.175. |

## Corrections et enrichissements apportés dans cette branche

1. P05 : domaines des paramètres des lois uniforme, exponentielle et normale rendus explicites.
2. P09 : contre-exemple dépendant et exemple indépendant pour distinguer les deux parties de Borel–Cantelli.
3. P10 : ajout du taux uniforme de Berry–Esseen et des conditions de troisième moment.
4. Références MIT ajoutées au registre S161–S163 ; les unités renvoient désormais aux identifiants S03, S46, S107, S161–S163 selon le sujet.

## Points restant à tester

- Recalcul exhaustif des exercices et corrigés avec un second vérificateur.
- Vérification des laboratoires Python/R sur cas limites et comparaison à une bibliothèque de référence.
- Ajout d'exercices distinguant convergence en loi, convergence en probabilité et convergence presque sûre sur des suites explicites.
- Relecture humaine indépendante, puis tests auprès d'apprenants.

**Conclusion :** B08 présente une base mathématique cohérente dans cette première passe. Les compléments renforcent surtout la précision des hypothèses et les contre-exemples ; aucune certification académique n'est revendiquée.
