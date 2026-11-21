# B14 — Première revue interne de contenu

**Version examinée :** 0.1 · **Statut :** revue assistée par IA, non indépendante  
**Périmètre :** CI01–CI10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Progression des résultats potentiels vers expériences, DAG, ajustement et méthodes quasi expérimentales.
- Estimands ATE, ATT et CATE distingués.
- Hypothèses d'identification explicitées ; rappel de leur non-vérifiabilité complète.
- Confusion, médiation et collision séparées.
- Limites du score de propension, de la double robustesse, des instruments et de DiD signalées.
- Distinction entre effet local, moyen, validité interne et transportabilité.
- Articulation avec B12, B16 et B20 indiquée.

## Points à approfondir avant statut reviewed
1. Développer les démonstrations et conditions précises des estimateurs sous résultats potentiels.
2. Ajouter des calculs complets d'inférence de randomisation, blocage et plans factoriels.
3. Distinguer les variantes de SUTVA, interférence partielle et versions multiples du traitement.
4. Développer les DAG avec exemples de sélection, variables post-traitement et données administratives.
5. Ajouter des exemples numériques de standardisation, pondération et diagnostics de positivité.
6. Détailler les estimateurs doublement robustes, cross-fitting et conditions de taux.
7. Développer l'inférence IV robuste aux instruments faibles et les variantes fuzzy RDD.
8. Approfondir DiD avec adoption échelonnée, effets hétérogènes, inférence par clusters et contrôles synthétiques.
9. Ajouter notebooks R/Python exécutables et jeux de données reproductibles.
10. Faire une revue humaine indépendante, vérifier les références et tester l'évaluation avec apprenants.

## Références de cadrage
- Penn State STAT 503 : https://online.stat.psu.edu/stat503/
- Hernán & Robins, *Causal Inference: What If* : https://miguelhernan.org/whatifbook
- Cunningham, *Causal Inference: The Mixtape* : https://www.scunning.com/mixtape.html
- DAG tutorial : https://pubmed.ncbi.nlm.nih.gov/37712307/

## Limites et statut
La revue est une vérification interne de cohérence et de couverture. Elle ne remplace pas une relecture humaine indépendante en plans d'expérience et inférence causale. Les cours sont des premières versions de travail et ne sont ni accrédités ni validés par les institutions citées.
