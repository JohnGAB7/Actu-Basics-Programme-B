# B10 — Carte pédagogique : statistique descriptive, échantillonnage et exploration

**Statut :** première revue mathématique transversale en cours ; T06 clarifiée, CI à confirmer ; revue indépendante à venir.

**Version :** 1.2 · 21 novembre 2026  
**Charge indicative :** 47–57 heures  
**Prérequis :** B01–B02 et probabilités introductives de B08. Les unités T03–T04 mobilisent probabilité conditionnelle et espérance ; les autres restent accessibles avec les bases de calcul et de représentation.

## Finalité
Apprendre à comprendre un jeu de données avant de modéliser : définir la population et les unités, contrôler la qualité, choisir un plan d'échantillonnage, produire des résumés et graphiques adaptés, analyser les relations et les données manquantes, puis communiquer une exploration reproductible.

| Code | Unité | Compétence centrale | Charge |
|---|---|---|---:|
| T01 | Données, variables, populations et échelles de mesure | Population, unité, granularité et mesure | 4–5 h |
| T02 | Collecte, qualité et préparation des données | Audit qualité, contrôles et traçabilité | 5–6 h |
| T03 | Plans d'échantillonnage et représentativité | Plans probabilistes, sélection et biais | 5–6 h |
| T04 | Estimateurs descriptifs sous sondage : totaux, moyennes et proportions | Pondération, Horvitz–Thompson et correction finie | 5–6 h |
| T05 | Tableaux, distributions et résumés numériques | Fréquences, ECDF et quantiles | 5–6 h |
| T06 | Dispersion, asymétrie, concentration et mesures robustes | Variance, MAD, IQR et robustesse | 5–6 h |
| T07 | Visualisation univariée : choisir et lire les graphiques | Barres, histogrammes et boxplots | 4–5 h |
| T08 | Relations entre variables : tableaux croisés et graphiques bivariés | Associations, stratification et Simpson | 5–6 h |
| T09 | Données manquantes, valeurs atypiques et sensibilité | MCAR/MAR/MNAR et analyses de sensibilité | 5–6 h |
| T10 | Démarche d'exploration, synthèse et communication statistique | EDA, rapport et reproductibilité | 4–5 h |

## Progression
T01 définit les objets et les unités. T02 garantit que les données sont comprises avant analyse. T03–T04 introduisent les plans de sondage et les résumés pondérés. T05–T08 construisent le langage descriptif et graphique. T09 traite les données manquantes et valeurs atypiques. T10 intègre le tout dans un rapport exploratoire.

## Frontières avec les autres blocs
- B08 fournit les lois et espérances ; B10 les mobilise pour décrire des données observées et des échantillons.
- B11 développera l'inférence : distributions d'échantillonnage, propriétés d'estimateurs, intervalles et tests. B10 ne transforme pas une description en conclusion inférentielle.
- B12 développera les modèles de régression ; B10 se limite à l'exploration descriptive des associations.
- B16 traitera les séries temporelles ; les données indexées dans le temps ne sont pas ici modélisées comme processus.
- B10 présente les mécanismes MCAR/MAR/MNAR et des diagnostics descriptifs ; les méthodes avancées d'imputation et l'inférence avec données manquantes seront approfondies ultérieurement.

## Modalités pédagogiques
Chaque unité comprend objectifs, définitions, hypothèses, formules, exemples calculés, exercices corrigés, erreurs fréquentes et critères de maîtrise. Le laboratoire Python/R est disponible dans `labs/b10/README.md` ; il illustre les contrôles, résumés, pondérations, histogrammes à classes inégales et analyses descriptives. Il ne constitue pas un outil complet de sondage complexe ni un moteur d'imputation. Les graphiques doivent être interprétés et non simplement générés.

## Évaluation
Épreuve formative proposée : 120 minutes, 100 points. Elle couvre types de variables, qualité et granularité, sondage, poids, distributions empiriques, mesures de position et dispersion, visualisations, associations, données manquantes et communication. Aucun résultat ne vaut certification.

## Sources de cadrage
- MIT OCW 15.075J — Statistical Thinking and Data Analysis : https://ocw.mit.edu/courses/15-075j-statistical-thinking-and-data-analysis-fall-2011/
- NIST/SEMATECH e-Handbook of Statistical Methods : https://www.itl.nist.gov/div898/handbook/
- NIST — Exploratory Data Analysis : https://www.itl.nist.gov/div898/handbook/eda/eda.htm
- Sharon L. Lohr — *Sampling: Design and Analysis*, 3e édition, Chapman & Hall/CRC.

Ces ressources guident le cadrage. Elles ne valident ni n'accréditent Programme B. Les sections et conventions effectivement utilisées doivent être consignées lors de la revue approfondie.


## Révision mathématique — compléments de la seconde passe

- T03 : allocation proportionnelle et allocation de Neyman, effet de plan, dépendance intra-grappe, distinction inclusion/réponse et ajustement des poids.
- T04 : conditions de non-biais du total HT, variance de plan avec probabilités conjointes π_ij, conditions de variance estimable et exemple numérique de correction de population finie.
- T05–T07 : conventions de quantiles alignées sur type 7 dans le laboratoire ; densité d'histogramme vérifiée par l'aire.
- T08 : association, corrélation et paradoxe de Simpson illustrés sans inférence causale.
- T09 : rappel que les mécanismes MCAR/MAR/MNAR ne sont pas identifiables par le seul taux de données manquantes.
- T10 : atelier Python/R documenté, avec tests unitaires et limites d'usage.

## Sources complémentaires ciblées

- Penn State STAT 506, *The Horvitz–Thompson Estimator* : https://online.stat.psu.edu/stat506/Lesson03
- Statistics Canada, *Variance estimation for the Horvitz–Thompson estimator* : https://www150.statcan.gc.ca/n1/pub/12-001-x/2013001/article/11831/section2-eng.htm
- Statistics Canada, *12-539-X — Data Quality Guidelines*, pondération, calage et non-réponse : https://www150.statcan.gc.ca/n1/pub/12-539-x/steps-etapes/4147790-eng.htm
- NIST/SEMATECH e-Handbook, *Exploratory Data Analysis* : https://www.itl.nist.gov/div898/handbook/eda/eda.htm

Ces sources ont été consultées pour vérifier les formules et les limites ; elles ne constituent pas une approbation du cursus.
