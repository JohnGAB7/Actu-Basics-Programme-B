# Programme B — Architecture académique de référence

**Version : 2.0 · 21 novembre 2026**  
**Statut : architecture-cible de travail · non accréditée · non validée par les institutions citées**

## 1. Mission et principes

Programme B est un cursus indépendant en mathématiques, probabilités, statistique, calcul scientifique et sciences quantitatives. Il conduit d'une remise à niveau structurée à la capacité de formuler, démontrer, calculer, programmer, analyser et communiquer des modèles quantitatifs avancés.

Il s'agit d'une bibliothèque de formation modulaire, pas d'un diplôme universitaire officiel. Le programme s'inspire de structures et exigences publiquement documentées dans des cursus universitaires, sans reproduire leurs supports ni prétendre à leur validation.

Tous les cours, explications, exemples, jeux de données, exercices, corrigés, évaluations et projets sont originaux. Les références externes servent à contrôler les notions, situer les niveaux et guider l'approfondissement.

Principes non négociables :
- La rigueur mathématique ne doit être sacrifiée ni à l'intuition ni aux applications.
- Chaque résultat précise ses hypothèses, son domaine de validité et, lorsque pertinent, un contre-exemple.
- Distinguer preuve, argument heuristique, convention, résultat numérique et approximation.
- Le code sert à expérimenter, vérifier et mettre en œuvre ; il ne remplace pas une démonstration.
- Les prérequis et dépendances sont explicites ; les parcours restent modulaires.
- Le niveau d'un cours dépend de ses acquis et évaluations, pas de son titre ou de son volume.

## 2. Niveaux de profondeur

| Niveau | Désignation | Exigence attendue |
|---|---|---|
| L0 | Remise à niveau | Vocabulaire, calculs élémentaires, lecture de représentations et correction des lacunes |
| L1 | Fondations universitaires | Concepts, méthodes standards, intuition, calculs et premières justifications |
| L2 | Licence avancée | Formalisation, démonstrations, méthodes générales, modélisation et analyse critique |
| L3 | Master / Graduate | Théorie approfondie, hypothèses techniques, méthodes avancées, implémentation et lecture critique |
| L4 | Préparation recherche | Résultats spécialisés, preuves détaillées, articles, reproduction, limites ouvertes et projet de recherche |

Chaque unité indique son niveau principal. Une unité ne prétend pas couvrir L3 ou L4 si ses objectifs et évaluations restent introductifs.

## 3. Architecture générale — 20 blocs

B01 à B17 constituent le socle mathématique, probabiliste, statistique et computationnel, avec des embranchements selon les parcours. B18 et B19 sont des spécialisations appliquées. B20 approfondit la théorie statistique et les méthodes de recherche.

### 3.1 Socle mathématique et computationnel

| Code | Bloc | Périmètre principal | Prérequis structurants |
|---|---|---|---|
| B01 | Fondations mathématiques et raisonnement quantitatif | Nombres, calcul, algèbre élémentaire, fonctions, unités, notation, précision | Aucun |
| B02 | Logique, preuves et mathématiques discrètes | Logique, ensembles, relations, induction, combinatoire, graphes, récurrences, complexité élémentaire | B01 en parallèle |
| B03 | Algèbre linéaire et géométrie vectorielle | Espaces, applications linéaires, matrices, rang, spectre, orthogonalité, projections, factorisations, SVD | B01 |
| B04 | Analyse réelle et calcul à une variable | Suites, limites, continuité, dérivation, intégration, séries, théorèmes fondamentaux | B01, B02 |
| B05 | Calcul multivarié et équations différentielles | Fonctions de plusieurs variables, dérivées, jacobienne, hessienne, intégrales multiples, champs, EDO | B03, B04 |
| B06 | Optimisation et recherche opérationnelle | Convexité, optimisation avec/sans contraintes, dualité, programmation linéaire et entière, réseaux, décision | B03, B05 |
| B07 | Analyse numérique et calcul scientifique | Erreurs, conditionnement, stabilité, résolution numérique, interpolation, quadrature, EDO numériques, simulation | B03, B04, programmation de base |

### 3.2 Probabilités, données et statistique

| Code | Bloc | Périmètre principal | Prérequis structurants |
|---|---|---|---|
| B08 | Probabilités | Axiomes, conditionnement, indépendance, variables aléatoires, lois, espérance, convergence, LLN et TCL introductifs | B02, B04 |
| B09 | Processus stochastiques | Chaînes de Markov, Poisson, renouvellement, martingales, files d'attente, mouvement brownien, processus continus | B08, B04 |
| B10 | Statistique descriptive, échantillonnage et exploration | Qualité des données, plans d'échantillonnage, visualisation, résumés, robustesse, EDA, données manquantes et biais | B01, B08 introductif |
| B11 | Théorie de l'inférence statistique | Estimation, vraisemblance, propriétés des estimateurs, intervalles, tests, puissance, bootstrap, permutation, Bayes | B08, B10 |
| B12 | Régression et modèles statistiques | Régression linéaire, ANOVA, modèles mixtes, GLM, modèles non linéaires et non paramétriques introductifs, diagnostics | B03, B05, B08, B11 |
| B13 | Statistique multivariée et grande dimension | Covariance, ACP, analyse factorielle, classification, réduction dimensionnelle, sparsité et régularisation | B03, B11, B12 |
| B14 | Plans d'expérience et inférence causale | Randomisation, plans factoriels, puissance, résultats potentiels, DAG, confusion, instruments, différences-en-différences, discontinuité | B11, B12 |
| B15 | Apprentissage statistique et machine learning | Généralisation, biais-variance, validation, arbres, ensembles, SVM, noyaux, clustering, modèles probabilistes, réseaux neuronaux | B03, B06, B08, B11, B12 |
| B16 | Séries temporelles et prévision | Dépendance temporelle, stationnarité, ARIMA, modèles d'état, filtrage, volatilité, prévision et validation temporelle | B08, B09, B11, B12 |
| B17 | Ingénierie des données et recherche reproductible | Structures de données, SQL, pipelines, formats, tests, versionnement, calcul distribué introductif, reproductibilité et communication | B01, programmation de base |

### 3.3 Spécialisations et approfondissements

| Code | Bloc | Périmètre principal | Prérequis structurants |
|---|---|---|---|
| B18 | Actuariat, assurance et modélisation du risque | Fréquence-sévérité, tarification, crédibilité, survie, mortalité, provisionnement, réassurance, agrégation, ruine, capital et solvabilité | B08, B09, B11, B12, B16 |
| B19 | Économétrie et statistiques financières | Régression économétrique, séries financières, volatilité, données de panel, endogénéité, risque, prévision et évaluation empirique | B11, B12, B14, B16 |
| B20 | Théorie statistique avancée et méthodes de recherche | Probabilité mesurée, convergence avancée, asymptotique, processus empiriques, concentration, décision, semi-paramétrique, lecture et reproduction d'articles | B02, B04, B08, B11, B12 ; L3 recommandé |

## 4. Décomposition indicative des blocs

Cette décomposition fixe les domaines à couvrir. Elle ne constitue pas encore une liste définitive de leçons : le découpage final sera décidé après l'analyse des prérequis, des objectifs et des redondances.

### B01 — Fondations mathématiques et raisonnement quantitatif
1. Nombres, ensembles numériques et ordre.
2. Calcul exact, fractions, rapports et proportions.
3. Pourcentages, taux, indices et variations composées.
4. Puissances, racines et logarithmes.
5. Expressions algébriques et identités.
6. Équations, inéquations et systèmes élémentaires.
7. Fonctions, domaines, images et transformations.
8. Repères, graphiques, unités, ordres de grandeur et notation scientifique.
9. Calculatrice, arrondis, précision et erreurs élémentaires.

### B02 — Logique, preuves et mathématiques discrètes
1. Propositions, connecteurs et quantificateurs.
2. Ensembles, applications, relations et équivalences.
3. Preuves directe, contraposée, contradiction et récurrence.
4. Sommes, produits, coefficients binomiaux et dénombrement.
5. Probabilités discrètes et combinatoire.
6. Relations de récurrence et suites récursives.
7. Graphes, arbres, chemins et réseaux.
8. Notation asymptotique et complexité algorithmique élémentaire.

### B03 — Algèbre linéaire et géométrie vectorielle
1. Vecteurs, géométrie et coordonnées.
2. Matrices, opérations et systèmes linéaires.
3. Élimination de Gauss, rang et espaces fondamentaux.
4. Espaces vectoriels, bases, dimension et applications linéaires.
5. Déterminants et inversibilité.
6. Valeurs propres, vecteurs propres et diagonalisation.
7. Produit scalaire, orthogonalité et projections.
8. Moindres carrés et décomposition QR.
9. Décompositions LU, Cholesky et SVD.

### B04 — Analyse réelle et calcul à une variable
1. Propriétés de l'ensemble des réels.
2. Suites et convergence.
3. Limites et continuité.
4. Théorèmes fondamentaux des fonctions continues.
5. Dérivation et approximation locale.
6. Théorèmes de Rolle et des accroissements finis.
7. Intégration de Riemann et théorème fondamental.
8. Séries numériques et séries de fonctions introductives.
9. Développements de Taylor et approximation.

### B05 — Calcul multivarié et équations différentielles
1. Topologie élémentaire de R^n et limites multivariées.
2. Dérivées partielles, différentiabilité et gradient.
3. Jacobienne, hessienne et règle de chaîne.
4. Optimisation locale et conditions du premier et second ordre.
5. Intégrales multiples et changements de variables.
6. Intégrales curvilignes et champs vectoriels.
7. Équations différentielles ordinaires du premier et second ordre.
8. Systèmes différentiels et stabilité élémentaire.

### B06 — Optimisation et recherche opérationnelle
1. Formulation mathématique d'un problème de décision.
2. Convexité des ensembles et fonctions.
3. Optimisation non contrainte et méthodes de gradient.
4. Contraintes, multiplicateurs de Lagrange et KKT.
5. Programmation linéaire, géométrie et dualité.
6. Simplexe et méthodes de points intérieurs.
7. Programmation entière et branch-and-bound.
8. Réseaux, flots et problèmes d'affectation.
9. Optimisation stochastique et robuste.
10. Programmation dynamique et processus de décision.

### B07 — Analyse numérique et calcul scientifique
1. Représentation flottante, erreurs et propagation.
2. Conditionnement et stabilité algorithmique.
3. Résolution numérique des systèmes linéaires.
4. Valeurs propres et algorithmes itératifs.
5. Recherche de racines et optimisation numérique.
6. Interpolation, approximation et splines.
7. Dérivation et intégration numériques.
8. Résolution numérique des EDO.
9. Simulation et reproductibilité des expériences numériques.

### B08 — Probabilités
1. Espaces probabilisés et axiomes.
2. Conditionnement, indépendance et Bayes.
3. Variables aléatoires discrètes et continues.
4. Fonctions de répartition, densités et transformations.
5. Lois usuelles et familles de distributions.
6. Espérance conditionnelle, moments et inégalités.
7. Vecteurs aléatoires, covariance et corrélation.
8. Convergences en probabilité, presque sûre et en loi.
9. Lois des grands nombres et théorème central limite.
10. Fonctions caractéristiques et approximations asymptotiques introductives.

### B09 — Processus stochastiques
1. Définitions, filtrations et temps.
2. Chaînes de Markov à temps discret.
3. États récurrents, transitoires et distributions stationnaires.
4. Processus de Poisson et processus de comptage.
5. Processus de renouvellement.
6. Files d'attente et lois de Little/Erlang.
7. Martingales et temps d'arrêt.
8. Mouvement brownien et processus continus.
9. Introduction aux diffusions et équations stochastiques.
10. Simulation et applications à la fiabilité et au risque.

### B10 — Statistique descriptive, échantillonnage et exploration
1. Population, échantillon, unité statistique et mesure.
2. Qualité, provenance et gouvernance des données.
3. Types de variables, tableaux et visualisations.
4. Statistiques descriptives et mesures de position.
5. Dispersion, quantiles et mesures robustes.
6. Associations, dépendances et visualisation multivariée.
7. Échantillonnage probabiliste et non probabiliste.
8. Biais de sélection, non-réponse et erreurs de mesure.
9. Données manquantes, valeurs aberrantes et contrôles.
10. Analyse exploratoire reproductible.

### B11 — Théorie de l'inférence statistique
1. Modèles statistiques, statistiques suffisantes et vraisemblance.
2. Estimation ponctuelle et propriétés des estimateurs.
3. Méthodes des moments et maximum de vraisemblance.
4. Intervalles et régions de confiance.
5. Tests, erreurs de type I/II et puissance.
6. Comparaison de modèles et critères d'information.
7. Bootstrap et tests par permutation.
8. Inférence bayésienne : prior, posterior et prédictive.
9. Décision statistique et fonctions de perte.
10. Multiplicité et contrôle des faux positifs.

### B12 — Régression et modèles statistiques
1. Régression linéaire simple et multiple.
2. Géométrie des moindres carrés et inférence.
3. Diagnostics, résidus, influence et colinéarité.
4. ANOVA, ANCOVA et modèles factoriels.
5. Variables catégorielles, interactions et transformations.
6. Régression logistique et modèles binomiaux.
7. Modèles de Poisson, binomiaux négatifs et GLM.
8. Modèles mixtes et données groupées.
9. Régression non linéaire et splines.
10. Régularisation, sélection et validation.

### B13 — Statistique multivariée et grande dimension
1. Vecteurs aléatoires et matrices de covariance.
2. Lois multivariées et distance de Mahalanobis.
3. Analyse en composantes principales.
4. Analyse factorielle et modèles latents.
5. Analyse discriminante et classification.
6. Analyse des correspondances et données catégorielles.
7. Clustering et distances.
8. Réduction dimensionnelle et visualisation.
9. Covariance de grande dimension et régularisation.
10. Introduction aux matrices aléatoires et à la sparsité.

### B14 — Plans d'expérience et inférence causale
1. Question causale, estimands et résultats potentiels.
2. Randomisation et essais contrôlés.
3. Plans factoriels, blocs et plans fractionnaires.
4. Taille d'échantillon et puissance.
5. Graphes causaux et critères d'identification.
6. Confusion, médiation et sélection.
7. Scores de propension, appariement et pondération.
8. Variables instrumentales.
9. Différences-en-différences et discontinuité de régression.
10. Contrôles synthétiques, interférence et sensibilité.
11. Hétérogénéité des effets et apprentissage causal.

### B15 — Apprentissage statistique et machine learning
1. Cadre prédictif, risque et généralisation.
2. Biais-variance et compromis de complexité.
3. Validation croisée et séparation temporelle.
4. Régression pénalisée et méthodes à noyaux.
5. Arbres, forêts aléatoires et boosting.
6. Machines à vecteurs de support.
7. Méthodes de voisinage et classification probabiliste.
8. Clustering et apprentissage non supervisé.
9. Modèles génératifs et réduction dimensionnelle.
10. Réseaux neuronaux et optimisation.
11. Interprétabilité, calibration, équité et dérive.
12. Déploiement, surveillance et limites des modèles.

### B16 — Séries temporelles et prévision
1. Structure temporelle, tendance, saisonnalité et cycles.
2. Stationnarité et autocorrélation.
3. Modèles AR, MA, ARMA et ARIMA.
4. Modèles saisonniers et régression dynamique.
5. Lissage exponentiel et modèles structurels.
6. Modèles d'état et filtrage de Kalman.
7. Volatilité conditionnelle : ARCH/GARCH.
8. Séries multivariées et cointégration.
9. Prévision probabiliste et intervalles prédictifs.
10. Validation temporelle, backtesting et surveillance.

### B17 — Ingénierie des données et recherche reproductible
1. Formats, encodages, schémas et métadonnées.
2. SQL, modèle relationnel et requêtes analytiques.
3. Import, nettoyage, jointures et transformations.
4. Pipelines, orchestration et contrôles qualité.
5. Structures de données et traitement de grands volumes.
6. Calcul parallèle et distribué : notions fondamentales.
7. Git, environnements et gestion des dépendances.
8. Tests unitaires, tests de données et intégration continue.
9. Notebooks, rapports et analyses reproductibles.
10. Documentation, traçabilité, confidentialité et gouvernance.

### B18 — Actuariat, assurance et modélisation du risque
1. Exposition, fréquence, sévérité et mesure de sinistralité.
2. Modèles de fréquence et de sévérité.
3. Modèles collectifs et agrégation des pertes.
4. Tarification, GLM, segmentation et crédibilité.
5. Assurance vie, mortalité et tables de survie.
6. Analyse de survie et risques concurrents.
7. Provisionnement non-vie et triangles de développement.
8. Réassurance et transfert de risque.
9. Théorie de la ruine et risque extrême.
10. Capital, solvabilité, dépendance et allocation du risque.
11. Validation, gouvernance et suivi des modèles actuariels.

### B19 — Économétrie et statistiques financières
1. Modèle économétrique et identification.
2. Régression avec données transversales.
3. Données de panel et effets fixes/aléatoires.
4. Endogénéité, instruments et variables omises.
5. Séries macroéconomiques et modèles dynamiques.
6. Volatilité et dépendance des rendements.
7. Modèles de risque de marché et de crédit.
8. Évaluation empirique, prévision et backtesting.
9. Reproductibilité, robustesse et interprétation économique.

### B20 — Théorie statistique avancée et méthodes de recherche
1. Mesure, intégration et probabilités sur espaces mesurés.
2. Espérance conditionnelle et convergence avancée.
3. Théorie asymptotique et méthodes delta.
4. Efficacité, information et bornes d'estimation.
5. Processus empiriques et convergence uniforme.
6. Inégalités de concentration et probabilités en grande dimension.
7. Statistique non paramétrique et semi-paramétrique.
8. Théorie bayésienne avancée et calcul MCMC.
9. Théorie de la décision et robustesse.
10. Lecture critique, reproduction et synthèse d'articles.
11. Question de recherche, protocole et rapport scientifique.

## 5. Parcours recommandés

Les parcours sont des itinéraires dans une bibliothèque commune. Une unité peut appartenir à plusieurs parcours.

- **Mathématiques et statistique fondamentales :** B01 → B02 → B03/B04 → B05 → B08 → B10 → B11, puis approfondissements B03/B04/B08 et B20.
- **Data analyst / statisticien appliqué :** B01 → B03 → B04 → B08 → B10 → B11 → B12 → B17 ; B13, B14 et B16 selon le domaine.
- **Data science / machine learning :** B01 → B02 → B03 → B04 → B05 → B06 → B08 → B11 → B12 → B13 → B15 → B17 ; B07 fortement recommandé.
- **Statistique théorique / recherche :** B02 → B03 → B04 → B05 → B08 → B11 → B20, puis B09, B13, B14 ou B15 selon le sujet.
- **Actuariat et risque :** B01 → B03 → B04 → B05 → B08 → B09 → B10 → B11 → B12 → B16 → B18 ; B06, B13, B14, B19 et B20 en approfondissement.
- **Économétrie et statistique financière :** B01 → B03 → B04 → B05 → B08 → B11 → B12 → B14 → B16 → B19.

## 6. Graphe de dépendances et progression

Les dépendances sont des prérequis conceptuels, pas une obligation d'achever chaque bloc dans un ordre linéaire.

- B02 introduit la preuve et le raisonnement discret ; ses acquis sont mobilisés dans les blocs théoriques.
- B03 et B04 sont deux piliers parallèles après B01 ; B05 nécessite les deux.
- B06 mobilise l'algèbre linéaire et le calcul multivarié.
- B07 est transversal aux méthodes numériques, statistiques et computationnelles.
- B08 dépend de la logique et de l'analyse ; B09 approfondit les modèles aléatoires indexés dans le temps.
- B10 peut commencer avec des prérequis mathématiques légers ; B11 exige les bases probabilistes.
- B12 articule modèles, probabilité et inférence.
- B13 et B15 nécessitent une maîtrise suffisante de l'algèbre linéaire, de l'inférence et des modèles.
- B14 exige de distinguer association, prédiction et causalité ; la régression seule ne suffit pas.
- B16 nécessite les bases probabilistes et statistiques ; B09 est utile pour les modèles avancés.
- B17 accompagne tous les parcours appliqués et ne doit pas être réduit à un cours d'outils.
- B18 et B19 sont des spécialisations reposant sur les blocs de probabilité, inférence et modélisation.
- B20 est un approfondissement théorique, pas un prérequis à toute pratique professionnelle.

## 7. Compétences transversales

1. Formaliser une question en objets, variables, hypothèses et relations.
2. Démontrer ou justifier un résultat avec un niveau de rigueur adapté.
3. Choisir entre méthode exacte, analytique, numérique, statistique ou algorithmique.
4. Construire et interpréter un modèle en distinguant modèle et réalité.
5. Programmer, tester et documenter une méthode.
6. Diagnostiquer hypothèses violées, biais, erreurs, instabilité et dérive.
7. Communiquer résultats, incertitudes, unités, hypothèses et limites.
8. Reproduire une analyse et permettre sa vérification indépendante.

## 8. Format obligatoire d'une unité

Toute unité substantielle comprend :
- fiche d'identité : code stable, version, langue, niveau, charge, prérequis et statut ;
- objectifs observables et compétences associées ;
- diagnostic des prérequis ;
- motivation et représentation intuitive ;
- définitions, notations, domaines et hypothèses ;
- propositions, théorèmes et démonstrations lorsque pertinents ;
- exemples résolus avec étapes explicites ;
- contre-exemples, erreurs fréquentes et limites ;
- applications originales et données documentées ;
- laboratoire Python/R/SQL/Excel lorsque cela apporte une valeur ;
- exercices gradués, corrigés complets et barèmes ;
- auto-évaluation et critères de maîtrise ;
- références précises, versionnées et reliées aux sections utilisées ;
- note de portée : inclusions, exclusions et suites nécessaires.

## 9. Échelle de maîtrise

| Niveau | Signification | Preuve attendue |
|---|---|---|
| M0 | Découverte | Reconnaître les objets et le vocabulaire |
| M1 | Application guidée | Résoudre un cas standard avec méthode indiquée |
| M2 | Autonomie | Choisir une méthode et vérifier un problème nouveau |
| M3 | Raisonnement | Justifier, démontrer, comparer et produire un contre-exemple |
| M4 | Transfert | Modéliser une situation réelle, tester les hypothèses et communiquer les limites |

## 10. Gouvernance éditoriale et critères de publication

États obligatoires :
- planned : périmètre identifié, contenu non rédigé ;
- draft : contenu rédigé, non validé ;
- reviewed : revues scientifique, bibliographique et pédagogique documentées ;
- tested : exercices, corrigés, code et rendu exécutés ou vérifiés ;
- published : version prête pour les apprenants ;
- retired : version remplacée ou retirée, avec historique conservé.

Une unité ne passe à reviewed que si définitions, hypothèses, preuves, notations et références ont été contrôlées. Elle ne passe à tested que si exercices et corrigés ont été résolus indépendamment, scripts exécutés et rendu vérifié. Elle ne passe à published que si ces contrôles sont documentés et les critères de maîtrise alignés sur les objectifs.

Une revue assistée par IA n'est pas une validation par un enseignant ou un évaluateur humain indépendant. Toute incertitude non résolue est signalée.

## 11. Politique d'évaluation

- Diagnostic : localiser les prérequis à renforcer, sans verdict certifiant.
- Entraînement formatif : feedback et explications immédiats.
- Examen blanc : simulation explicitement non officielle.
- Évaluation sommative : revue indépendante du sujet, du corrigé, du barème, des modalités et de la sécurité technique.
- Projet : évaluer formulation, méthode, reproductibilité, résultats, limites et communication.

Tant qu'un backend sécurisé n'est pas opérationnel, les examens du site restent des démonstrations formatives. Les clés de correction et règles de notation d'une véritable évaluation ne doivent pas être exposées dans le bundle public.

## 12. Limites et décisions futures

Cette architecture fixe le périmètre cible, mais ne signifie pas que les 20 blocs sont rédigés ou validés. Le découpage définitif des unités, les charges, les conventions, les versions logicielles, les projets intégrateurs, les langues et les domaines spécialisés seront précisés au fil des lots.

Aucun nombre arbitraire de leçons ne sera fixé pour donner une impression de volume. Le découpage suivra les objectifs d'apprentissage et la cohérence scientifique.

## 13. Références structurantes

Voir docs/SOURCE-REGISTER.md pour le registre des sources institutionnelles, leur rôle et les blocs auxquels elles se rapportent. Les sources sont des références de comparaison et de vérification, jamais une approbation institutionnelle du Programme B.


### B12 — Régression et modèles statistiques
1. Cadre de régression, association et modèle linéaire simple.
2. Moindres carrés ordinaires et géométrie matricielle.
3. Inférence en régression et analyse de variance.
4. Régression multiple, facteurs et interactions.
5. Diagnostics, résidus et influence.
6. Transformations et régression flexible.
7. Sélection, multicolinéarité et régularisation.
8. Fondements des modèles linéaires généralisés.
9. Régression logistique et modèles de comptage.
10. Modèles mixtes, validation et synthèse.

Cette décomposition est une première version de travail. Les démonstrations, diagnostics, modèles mixtes, ateliers et évaluations détaillées restent soumis à revue.

### B13 — Statistique multivariée et grande dimension
1. Données multivariées, vecteurs aléatoires et covariance.
2. Loi normale multivariée, distance de Mahalanobis et atypies.
3. Inférence sur un vecteur moyen et test T² de Hotelling.
4. Analyse multivariée de la variance (MANOVA).
5. Analyse en composantes principales (ACP).
6. Analyse factorielle et variables latentes.
7. Corrélation canonique et relations entre deux ensembles.
8. Analyse discriminante et classification supervisée.
9. Classification non supervisée et analyse de groupes.
10. Statistique de grande dimension, régularisation et étude intégrée.

Cette décomposition est une première version de travail. Les preuves détaillées, notebooks R/Python, analyses de sensibilité, exemples complets et validation indépendante restent à conduire.


### B14 — Plans d'expérience et inférence causale
1. Questions causales, estimands et résultats potentiels.
2. Randomisation, essais contrôlés et inférence de randomisation.
3. Plans d'expérience, facteurs et interactions.
4. DAG, confusion, médiation et biais de sélection.
5. Identification par échangeabilité, stratification et standardisation.
6. Score de propension, appariement et pondération.
7. Estimation doublement robuste et apprentissage statistique causal.
8. Variables instrumentales et discontinuité de régression.
9. Différences-en-différences, études d'événement et contrôle synthétique.
10. Sensibilité, validité externe et protocole causal intégré.

Cette décomposition est une première version de travail. Les preuves détaillées, analyses numériques, notebooks, diagnostics avancés et validation indépendante restent à conduire.


### B15 — Apprentissage statistique et machine learning
1. Problèmes d’apprentissage, représentation et fonction de perte.
2. Généralisation, complexité, surapprentissage et compromis biais-variance.
3. Validation, rééchantillonnage et sélection de modèles.
4. Modèles linéaires prédictifs et régularisation.
5. Méthodes à noyaux, voisins et machines à vecteurs de support.
6. Arbres de décision, bagging et forêts aléatoires.
7. Boosting et modèles additifs d’ensemble.
8. Réseaux de neurones, rétropropagation et apprentissage profond.
9. Modèles probabilistes, estimation de densité et détection d’anomalies.
10. Évaluation responsable, interprétabilité et cycle de vie d’un modèle.

Cette décomposition est une première version de travail. Les preuves détaillées, benchmarks reproductibles, notebooks et validations indépendantes restent à conduire.


### B16 — Séries temporelles et prévision
1. Données temporelles, tendances, saisonnalité et stationnarité.
2. Autocorrélation, bruit blanc et processus linéaires.
3. Modèles ARMA : identification, estimation et diagnostics.
4. Modèles ARIMA et saisonniers SARIMA.
5. Lissage exponentiel, décomposition et méthodes ETS.
6. Régression avec erreurs temporelles et analyse d’intervention.
7. Analyse spectrale et périodicités.
8. Séries multivariées, VAR et cointégration.
9. Volatilité conditionnelle : ARCH et GARCH.
10. Modèles espace-état, filtre de Kalman et évaluation des prévisions.

Cette décomposition est une première version de travail. Les preuves détaillées, notebooks et validations indépendantes restent à conduire.


### B17 — Ingénierie des données et recherche reproductible
1. Cycle de vie des données et architecture analytique.
2. Modélisation relationnelle, SQL et intégrité des données.
3. Formats, fichiers, stockage et partitionnement.
4. Ingestion, ETL/ELT et intégration de sources.
5. Qualité des données, tests et observabilité.
6. Pipelines, orchestration et gestion des dépendances.
7. Calcul distribué et traitement de grands volumes.
8. Reproductibilité, versionnement et environnements de calcul.
9. Sécurité, confidentialité et gouvernance des données.
10. Projet intégré : construire un produit de données fiable.

Cette décomposition est une première version de travail. Les notebooks, commandes, tests et validations indépendantes restent à conduire.


### B18 — Actuariat, assurance et modélisation du risque
1. Fondements actuariels, expositions et mesure du risque.
2. Modélisation de la fréquence et de la sévérité des sinistres.
3. Tarification, GLM, relativités et contraintes tarifaires.
4. Crédibilité actuarielle et mutualisation de l’information.
5. Survie, mortalité et tables de vie.
6. Assurance vie, rentes et valeurs actuelles actuarielles.
7. Provisionnement non-vie et triangles de développement.
8. Réassurance, transfert de risque et structures de couverture.
9. Capital économique, agrégation et solvabilité.
10. Gouvernance actuarielle, validation et projet de modélisation du risque.

Cette décomposition est une première version de travail. Les preuves détaillées, cas numériques, notebooks et validations indépendantes restent à conduire.


### B19 — Économétrie et statistiques financières
1. Fondements de l’économétrie et identification des relations.
2. Régression économétrique, endogénéité et inférence robuste.
3. Données de panel : effets fixes, aléatoires et différences.
4. Variables instrumentales et méthodes des moments.
5. Modèles de choix discret et données censurées.
6. Rendements financiers, dépendance et propriétés empiriques.
7. Modèles de facteurs, CAPM et évaluation des actifs.
8. Volatilité financière, Value-at-Risk et backtesting.
9. Microstructure des marchés et économétrie haute fréquence.
10. Projet économétrique et financier : estimation, robustesse et communication.

Cette décomposition est une première version de travail. Les preuves, simulations, notebooks et validations indépendantes restent à conduire.


### B20 — Théorie statistique avancée et méthodes de recherche
1. Fondements mesurés de la probabilité et convergence.
2. Théorie asymptotique des estimateurs et méthodes delta.
3. Processus empiriques, convergence faible et bootstrap avancé.
4. Vraisemblance avancée, modèles semi-paramétriques et information.
5. Inférence bayésienne avancée et calcul Monte-Carlo.
6. Processus stochastiques, martingales et temps d’arrêt.
7. Statistique en grande dimension et inférence après sélection.
8. Optimisation numérique et algorithmes statistiques.
9. Méthodes de recherche, simulation et science reproductible.
10. Projet de recherche avancée et mémoire reproductible.

Cette décomposition est une première version de travail ; les preuves détaillées, notebooks et validations indépendantes restent à conduire.
