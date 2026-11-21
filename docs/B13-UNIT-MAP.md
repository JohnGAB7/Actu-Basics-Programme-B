# B13 — Carte pédagogique : Statistique multivariée et grande dimension

**Version :** 1.3 · **Statut :** revue mathématique ciblée et correctif MANOVA MV04 publiés après CI complète ; comparaison logicielle et revue indépendante à réaliser.
**Charge indicative :** 52–62 heures (cours, calculs, ateliers et projet)  
**Niveau :** L1–L3, avec ouverture L4 sur les méthodes de grande dimension  
**Prérequis :** B03 algèbre linéaire, B08 probabilités, B10 exploration et échantillonnage, B11 inférence, B12 régression. Connaissances R ou Python recommandées.

## Finalité
Analyser simultanément plusieurs variables dépendantes ou explicatives, comprendre la géométrie de la covariance, réduire la dimension, modéliser des structures latentes, classer et regrouper des observations, puis traiter les difficultés du régime où le nombre de variables est grand par rapport au nombre d'observations.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| MV01 | Données multivariées, vecteurs aléatoires et covariance | Construire et interpréter covariance/corrélation et combinaisons linéaires | 4–5 h |
| MV02 | Loi normale multivariée, distance de Mahalanobis et atypies | Comprendre ellipsoïdes, distances et diagnostics | 5–6 h |
| MV03 | Inférence sur un vecteur moyen et test T² de Hotelling | Construire tests et régions de confiance simultanés | 5–6 h |
| MV04 | Analyse multivariée de la variance (MANOVA) | Comparer des vecteurs moyens entre groupes | 5–6 h |
| MV05 | Analyse en composantes principales (ACP) | Dériver et interpréter une réduction dimensionnelle linéaire | 6–7 h |
| MV06 | Analyse factorielle et variables latentes | Modéliser la covariance commune et les facteurs latents | 6–7 h |
| MV07 | Corrélation canonique et relations entre deux ensembles | Étudier des combinaisons optimales de deux blocs | 4–5 h |
| MV08 | Analyse discriminante et classification supervisée | Comprendre LDA/QDA et l'évaluation prédictive | 5–6 h |
| MV09 | Classification non supervisée et analyse de groupes | Choisir distances, algorithmes et diagnostics de clustering | 6–7 h |
| MV10 | Statistique de grande dimension, régularisation et étude intégrée | Diagnostiquer p/n, stabiliser les estimations et produire une analyse reproductible | 6–8 h |

## Compétences transversales
1. Traduire un problème en notation vectorielle et matricielle.
2. Justifier le choix de covariance ou corrélation et les transformations d'échelle.
3. Distinguer inférence, exploration, prédiction et interprétation causale.
4. Vérifier les hypothèses et les limites numériques des méthodes.
5. Utiliser R ou Python pour reproduire les calculs et documenter les choix.
6. Évaluer stabilité, incertitude et généralisation, particulièrement lorsque p/n est élevé.
7. Communiquer les résultats sans surinterpréter axes, facteurs ou groupes.

## Dépendances pédagogiques
- MV01 est le socle commun.
- MV02 et MV03 prolongent la géométrie et l'inférence multivariées.
- MV04 réutilise B12 et MV01–MV03.
- MV05 précède MV06 et soutient MV07–MV10.
- MV08 mobilise les distributions multivariées et les modèles supervisés.
- MV09 est exploratoire et ne remplace pas la classification supervisée.
- MV10 synthétise les méthodes et ouvre vers B15 (machine learning), B17 (ingénierie des données) et B20 (théorie/recherche).

## Hors périmètre ou approfondissements ultérieurs
L'analyse de survie multivariée spécialisée, modèles graphiques probabilistes complets, matrices aléatoires, théorie asymptotique détaillée des grandes dimensions, réseaux neuronaux et causalité avancée sont renvoyés vers B15, B18, B19 et B20. Les références de cette carte servent de cadrage, pas de preuve que tous ces approfondissements sont déjà couverts.

## Critères de sortie du bloc
L'apprenant doit pouvoir choisir une méthode en fonction de la question, établir les objets mathématiques, identifier les hypothèses, exécuter une analyse reproductible, évaluer sa stabilité et présenter une conclusion assortie de limites. La réussite à un questionnaire isolé ne suffit pas à démontrer ces compétences.


## Compléments de la seconde passe interne v1.1

- MV01 : rang de la covariance centrée et limites des covariances pairwise en présence de données manquantes.
- MV02 : distinction entre Mahalanobis avec paramètres connus et estimés ; sensibilité de la covariance classique et recours possible à des estimateurs robustes.
- MV03 : justification de la transformation exacte de Hotelling T² via normalité, indépendance et Wishart ; distinction des régions simultanées et intervalles marginaux.
- MV04 : définitions matricielles de H et E, degrés de liberté, racines, transformations F de Wilks/Rao, Pillai, Hotelling–Lawley et Roy ; Roy est exact si min(p,q)=1 et sa borne F donne une borne inférieure de p-value sinon.
- MV05 : lien SVD/ACP, convention sur les charges et exemple spectral chiffré.
- MV06 : modèle factoriel avec matrice Φ, rotation oblique et indétermination de rotation.
- MV07 : équation propre généralisée des corrélations canoniques et limites en cas de matrices singulières.
- MV08 : règle de décision à coûts asymétriques et calibration.
- MV09 : DBSCAN et limites de distance en grande dimension.
- MV10 : matrice de précision, corrélations partielles, shrinkage et validation après sélection.
- Laboratoire Python/R : covariance, corrélation, Jacobi, ACP, Mahalanobis, T², shrinkage et k-means ; tests et contrôles CI ajoutés.

## Périmètre de l'évaluation

L'évaluation formative comporte 18 questions réparties en cinq parties, pour 100 points au total (20 + 20 + 25 + 15 + 20). Le seuil indicatif ne vaut pas certification.


## Traçabilité complémentaire MANOVA

Le complément MV04 formalise les matrices H et E, les racines caractéristiques et les transformations F usuelles. Il distingue explicitement les domaines d'exactitude, les approximations et la borne de Roy. Sources : S158–S160. Les formules supposent le modèle linéaire multivarié classique et ne se transposent pas automatiquement aux mesures répétées, modèles mixtes ou matrices résiduelles singulières.


**Précision Roy (v1.2).** Avec d=max(p,q), la transformation est F=Θ(v−d+q)/d, ddl (d, v−d+q). Elle est exacte lorsque min(p,q)=1 ; sinon F est une borne supérieure et la p-value correspondante une borne inférieure. Le cas p=1 redonne F=Θv/q, comme l'ANOVA univariée.


**Laboratoire ciblé :** le helper `roy_f_bound` (Python/R) vérifie la transformation exacte si min(p,q)=1 et la borne F sinon ; il ne constitue pas un moteur complet MANOVA.


## Statut de publication v1.3

La revue mathématique B08–B13 et le correctif MV04 sont fusionnés dans master par PR #69. CI complète réussie sur le HEAD de la PR (Python/R B08–B20, build, typecheck et Markdown/KaTeX). Le déploiement GitHub Pages du commit de fusion est suivi dans le workflow master. La réduction univariée de Roy et la divergence documentaire Stata/SAS sont consignées dans MV04 et le rapport de revue ; aucune comparaison logicielle Stata directe n'est revendiquée.
