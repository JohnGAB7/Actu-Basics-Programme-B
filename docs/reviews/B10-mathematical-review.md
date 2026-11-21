# B10 — Revue mathématique et méthodologique (première passe)

**Date :** 21 novembre 2026  
**Périmètre :** T01–T10, échelles, qualité, sondage, estimateurs, résumés et EDA.  
**Statut :** première revue interne assistée par IA ; pas de validation indépendante.

## Synthèse

Aucune erreur mathématique bloquante n'a été identifiée dans les dix unités lors de cette passe. Les définitions de la population et de la granularité, les plans probabilistes, les poids, les estimateurs HT/Hájek, la correction de population finie, les distributions empiriques, les mesures robustes et les mécanismes de données manquantes sont cohérents avec les hypothèses explicitées.

## Revue par unité

| Unité | Résultats contrôlés | Conclusion |
|---|---|---|
| T01 | Population cible/couverte, unité statistique, types et échelles de mesure | Correct ; l'exemple du code postal comme identifiant est pertinent. |
| T02 | Dimensions de qualité, audit, cardinalité de jointure et traitement des extrêmes | Correct ; la conservation des données brutes et la traçabilité sont bien soulignées. |
| T03 | Plans SRS, stratifié, grappes, inclusion πᵢ, poids et allocation de Neyman | Formules d'allocation et estimateur stratifié cohérents ; biais de couverture et périodicité du systématique bien signalés. |
| T04 | Horvitz–Thompson, Hájek, variance de plan, πᵢⱼ et FPC | Non-biais de HT, formule de variance et exemple numérique vérifiés : S²=250, Var(ȳ)=75 pour N=5,n=2. |
| T05 | Fréquences, fonction de répartition empirique, quantiles et histogrammes | Définitions correctes ; conventions d'interpolation et classes inégales explicitement signalées. |
| T06 | Variance descriptive/corrigée, CV, asymétrie, kurtosis, MAD et Tchebychev | Formules correctes ; titre clarifié pour ne pas laisser entendre une borne propre à un échantillon fini. |
| T07 | Barres, bâtons, histogrammes, densités de fréquence et boîtes | Conventions graphiques correctes ; valeurs au-delà des moustaches ne sont pas assimilées à des erreurs. |
| T08 | Tableaux croisés, Pearson, associations non linéaires et Simpson | Interprétation correcte ; distinction descriptive/causale explicite. |
| T09 | MCAR/MAR/MNAR, cas complets, imputation simple/multiple et sensibilité | Définitions correctes ; le fait que MAR ne soit pas généralement testable à partir des seules données observées est bien rappelé. |
| T10 | Cycle EDA, multiplicité exploratoire, communication et reproductibilité | Démarche cohérente ; séparation exploration/confirmation bien formulée. |

## Corrections et enrichissements apportés

1. T06 : intitulé de l'inégalité de Bienaymé–Tchebychev clarifié ; distinction entre borne probabiliste générale et propriété empirique d'un échantillon explicitée.
2. S167 (NIST/SEMATECH e-Handbook) et S168 (MIT OCW 15.075J) ajoutés au registre et reliés aux unités T01–T10.

## Points restant à tester

- Recalcul exhaustif des exercices et corrigés, notamment les exemples pondérés et de sondage.
- Comparaison des estimateurs HT/Hájek et variances sous plans stratifiés/en grappes à un logiciel de sondage.
- Vérification des conventions de quantiles, des poids calibrés et des diagnostics de données manquantes dans les laboratoires.
- Tests apprenants, revue humaine indépendante et audit d'accessibilité des graphiques.

**Conclusion :** B10 présente une base méthodologique cohérente dans cette première passe. Les formules centrales sont cohérentes ; les tests de code ne remplacent pas la validation des choix de plan et des hypothèses de collecte.


## Contrôle complémentaire du laboratoire

Une divergence Python/R a été corrigée : Python comptait `None` comme manquant mais traitait `NaN` comme numérique invalide, tandis que R comptait `NA`/`NaN` comme manquant. Python traite désormais `None` et les flottants NaN comme manquants, et les tests Python/R couvrent cette convention. Les valeurs infinies restent des valeurs numériques invalides, non des valeurs manquantes.
