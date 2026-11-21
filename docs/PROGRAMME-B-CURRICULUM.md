# Programme B — Architecture du cursus

**Version de cadrage : 1.0 · 21 novembre 2026**  
**Statut : architecture proposée pour développement progressif, pas accréditation académique.**

## Mission

Construire un cursus indépendant, exigeant et accessible en mathématiques, probabilités, statistique et sciences quantitatives. Le programme doit conduire d'une remise à niveau structurée à la capacité de formuler, analyser, calculer, vérifier et communiquer des modèles quantitatifs avancés.

Programme B n'est ni une copie ni une continuation de l'ancien laboratoire ACTU-BASICS. Tous les cours, exemples, jeux de données, exercices, corrigés et évaluations sont rédigés pour ce projet. Les références externes servent à vérifier les notions et à orienter l'approfondissement ; elles ne sont pas reproduites comme contenu pédagogique.

## Architecture des compétences

Chaque bloc contribue à plusieurs compétences transversales :

1. **Formaliser** : traduire une situation en objets, hypothèses, variables et relations mathématiques.
2. **Démontrer** : argumenter avec définitions, implications, contre-exemples et preuves adaptées.
3. **Calculer** : choisir une méthode exacte, approchée, symbolique ou numérique.
4. **Modéliser** : relier les abstractions aux phénomènes quantitatifs sans confondre modèle et réalité.
5. **Programmer** : implémenter et tester les méthodes avec Python et R ; mobiliser Excel/VBA lorsqu'ils sont pertinents.
6. **Diagnostiquer** : détecter erreurs, biais, instabilité, hypothèses violées et limites des données.
7. **Communiquer** : présenter résultats, incertitudes, unités, hypothèses et limites de façon reproductible.

## Parcours académique cible

| Code | Bloc | Périmètre | Dépendances principales |
|---|---|---|---|
| B01 | Fondations mathématiques | Nombres, calcul, algèbre, fonctions, raisonnement, unités et précision | Aucune |
| B02 | Algèbre linéaire et géométrie vectorielle | Espaces, applications linéaires, matrices, spectre, projections, factorisations et SVD | B01 |
| B03 | Analyse à une variable | Suites, limites, continuité, dérivation, intégration et séries | B01 |
| B04 | Analyse multivariée et optimisation | Dérivées partielles, gradient, Hessienne, contraintes, convexité et optimisation numérique | B02, B03 |
| B05 | Probabilités | Axiomes, conditionnement, indépendance, variables aléatoires, lois, convergence et limites | B01, B03 |
| B06 | Statistique descriptive et exploration | Échantillonnage, visualisation, résumés, robustesse, qualité des données et EDA | B01, B05 |
| B07 | Inférence statistique | Estimation, vraisemblance, intervalles, tests, puissance, bootstrap et décision | B05, B06 |
| B08 | Régression et modèles statistiques | Régression linéaire, GLM, diagnostics, régularisation et validation | B02, B04, B05, B07 |
| B09 | Statistique multivariée | Covariance, ACP, réduction dimensionnelle, classification et modèles latents | B02, B07, B08 |
| B10 | Apprentissage statistique | Généralisation, biais-variance, arbres, ensembles, SVM, validation et interprétabilité | B08, B09 |
| B11 | Séries temporelles et prévision | Dépendance temporelle, stationnarité, ARIMA, volatilité, validation temporelle et prévision | B05, B07, B08 |
| B12 | Calcul scientifique et ingénierie des données | Algorithmes numériques, stabilité, simulation, calcul reproductible et traitement de données | B02, B03, B05, B08 |
| B13 | Modélisation quantitative et actuariat | Fréquence-sévérité, tarification, survie, crédibilité, risque, agrégation et capital | B05, B07, B08, B10, B11 |

L'ordre est indicatif : certains blocs peuvent être suivis en parallèle après validation des prérequis. Les dépendances devront être représentées explicitement dans le graphe de compétences de la plateforme.

## Décomposition du Bloc 1

| Code | Unité | Résultat d'apprentissage principal |
|---|---|---|
| F01 | Langage des nombres, ensembles et ordre | Classifier, comparer et représenter les nombres et les ensembles |
| F02 | Calcul, fractions, rapports et proportions | Choisir et justifier des opérations et transformations proportionnelles |
| F03 | Pourcentages, indices et taux d'évolution | Composer des variations et construire des comparaisons cohérentes |
| F04 | Puissances, racines et logarithmes | Manipuler des transformations multiplicatives en respectant leurs domaines |
| F05 | Expressions algébriques et identités | Transformer et factoriser des expressions avec contrôle des conditions |
| F06 | Équations, inéquations et systèmes | Résoudre et vérifier des contraintes algébriques |
| F07 | Fonctions et modélisation élémentaire | Décrire une dépendance, un domaine, une image et une variation |
| F08 | Repères, unités et représentation quantitative | Lire des graphiques, convertir des unités et contrôler les ordres de grandeur |

La logique, les ensembles, la rédaction de preuves, les conventions de notation et les bonnes pratiques de calcul sont également travaillés de manière transversale.

## Format obligatoire d'une unité

Une unité complète doit contenir :
- fiche d'identité : niveau, charge estimée, prérequis, version et statut éditorial ;
- objectifs observables et critères de maîtrise ;
- motivation et représentation intuitive ;
- définitions, notations et hypothèses ;
- propriétés et démonstrations lorsque le niveau le requiert ;
- exemples résolus, avec étapes explicites ;
- contre-exemples, pièges et limites d'application ;
- applications quantitatives originales ;
- atelier logiciel testé, si pertinent ;
- exercices gradués et corrigés complets ;
- auto-évaluation reliée aux objectifs ;
- références précises et notes de portée.

## Échelle de maîtrise

- **M0 — Découverte** : reconnaître le vocabulaire et les objets.
- **M1 — Application guidée** : appliquer une méthode dans un cas standard.
- **M2 — Autonomie** : choisir une méthode, résoudre et vérifier un problème nouveau.
- **M3 — Raisonnement** : justifier, démontrer, comparer des méthodes et construire des contre-exemples.
- **M4 — Transfert** : modéliser une situation réaliste, évaluer les hypothèses et communiquer les limites.

Un cours n'est pas « terminé » parce qu'un fichier existe. Il passe par les états `draft`, `reviewed`, `tested`, puis `published`. Chaque changement substantiel crée une version traçable.

## Politique d'évaluation

- Diagnostic : repérer les prérequis, sans verdict certifiant.
- Entraînement formatif : feedback immédiat et correction expliquée.
- Examen blanc : simulation explicitement non officielle.
- Évaluation sommative : seulement après revue indépendante du sujet, du corrigé, du barème, des modalités et de la sécurité technique.

Les clés de correction et les règles de notation d'une véritable évaluation ne doivent pas être exposées dans le bundle public. Tant qu'un backend sécurisé n'est pas opérationnel, les examens du site restent des démonstrations formatives.

## Politique de sources et d'originalité

- Rédiger les explications, exemples et problèmes de manière indépendante.
- Citer les sources utilisées pour contrôler une définition, un résultat ou une convention.
- Ne pas présenter une référence générale comme validation exhaustive du cours.
- Vérifier les liens, éditions, chapitres et documentation technique avant publication.
- Conserver les incertitudes, les hypothèses et les limites.
- Ne pas importer de contenu pédagogique depuis Actu-Basics-Lab.

## Premier jalon

Le premier jalon de cette architecture est la réécriture originale de F01. Les autres unités restent annoncées comme planifiées tant qu'elles n'ont pas passé les contrôles éditoriaux et techniques.
