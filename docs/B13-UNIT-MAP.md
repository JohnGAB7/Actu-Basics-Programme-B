# B13 — Carte pédagogique : Statistique multivariée et grande dimension

**Version :** 0.1 · **Statut :** premier brouillon pédagogique intégré, à approfondir et relire  
**Charge indicative :** 52–62 heures (cours, calculs, ateliers et projet)  
**Niveau :** L1–L3, avec ouverture L4 sur les méthodes de grande dimension  
**Prérequis :** B03 algèbre linéaire, B08 probabilités, B10 exploration et échantillonnage, B11 inférence, B12 régression. Connaissances R ou Python recommandées.

## Finalité
Analyser simultanément plusieurs variables dépendantes ou explicatives, comprendre la géométrie de la covariance, réduire la dimension, modéliser des structures latentes, classer et regrouper des observations, puis traiter les difficultés du régime où le nombre de variables est grand par rapport au nombre d'observations.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| M01 | Données multivariées, vecteurs aléatoires et covariance | Construire et interpréter covariance/corrélation et combinaisons linéaires | 4–5 h |
| M02 | Loi normale multivariée, distance de Mahalanobis et atypies | Comprendre ellipsoïdes, distances et diagnostics | 5–6 h |
| M03 | Inférence sur un vecteur moyen et test T² de Hotelling | Construire tests et régions de confiance simultanés | 5–6 h |
| M04 | Analyse multivariée de la variance (MANOVA) | Comparer des vecteurs moyens entre groupes | 5–6 h |
| M05 | Analyse en composantes principales (ACP) | Dériver et interpréter une réduction dimensionnelle linéaire | 6–7 h |
| M06 | Analyse factorielle et variables latentes | Modéliser la covariance commune et les facteurs latents | 6–7 h |
| M07 | Corrélation canonique et relations entre deux ensembles | Étudier des combinaisons optimales de deux blocs | 4–5 h |
| M08 | Analyse discriminante et classification supervisée | Comprendre LDA/QDA et l'évaluation prédictive | 5–6 h |
| M09 | Classification non supervisée et analyse de groupes | Choisir distances, algorithmes et diagnostics de clustering | 6–7 h |
| M10 | Statistique de grande dimension, régularisation et étude intégrée | Diagnostiquer p/n, stabiliser les estimations et produire une analyse reproductible | 6–8 h |

## Compétences transversales
1. Traduire un problème en notation vectorielle et matricielle.
2. Justifier le choix de covariance ou corrélation et les transformations d'échelle.
3. Distinguer inférence, exploration, prédiction et interprétation causale.
4. Vérifier les hypothèses et les limites numériques des méthodes.
5. Utiliser R ou Python pour reproduire les calculs et documenter les choix.
6. Évaluer stabilité, incertitude et généralisation, particulièrement lorsque p/n est élevé.
7. Communiquer les résultats sans surinterpréter axes, facteurs ou groupes.

## Dépendances pédagogiques
- M01 est le socle commun.
- M02 et M03 prolongent la géométrie et l'inférence multivariées.
- M04 réutilise B12 et M01–M03.
- M05 précède M06 et soutient M07–M10.
- M08 mobilise les distributions multivariées et les modèles supervisés.
- M09 est exploratoire et ne remplace pas la classification supervisée.
- M10 synthétise les méthodes et ouvre vers B15 (machine learning), B17 (ingénierie des données) et B20 (théorie/recherche).

## Hors périmètre ou approfondissements ultérieurs
L'analyse de survie multivariée spécialisée, modèles graphiques probabilistes complets, matrices aléatoires, théorie asymptotique détaillée des grandes dimensions, réseaux neuronaux et causalité avancée sont renvoyés vers B15, B18, B19 et B20. Les références de cette carte servent de cadrage, pas de preuve que tous ces approfondissements sont déjà couverts.

## Critères de sortie du bloc
L'apprenant doit pouvoir choisir une méthode en fonction de la question, établir les objets mathématiques, identifier les hypothèses, exécuter une analyse reproductible, évaluer sa stabilité et présenter une conclusion assortie de limites. La réussite à un questionnaire isolé ne suffit pas à démontrer ces compétences.
