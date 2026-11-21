# B15 — Évaluation formative de synthèse

**Statut :** Revue interne effectuée — consolidation pédagogique en cours.
Évaluation formative, non certifiante.

## Partie A — Formulation et risque (20 points)
1. (5 pts) Définir risque de population, risque empirique et fonction de perte.
2. (5 pts) Sous perte quadratique, quelle fonction minimise le risque conditionnel ? Justifier.
3. (5 pts) Distinguer sous-ajustement et surapprentissage.
4. (5 pts) Expliquer le compromis biais-variance.

## Partie B — Validation (20 points)
5. (5 pts) Distinguer ensembles d'entraînement, validation et test.
6. (5 pts) Décrire K-fold et validation imbriquée.
7. (5 pts) Expliquer pourquoi standardisation avant découpage peut créer une fuite.
8. (5 pts) Proposer une validation adaptée à des données d'assurés suivis dans le temps et par agence.

## Partie C — Modèles supervisés (25 points)
9. (6 pts) Comparer ridge, lasso et elastic net.
10. (5 pts) Expliquer la marge souple d'un SVM et le rôle de C.
11. (5 pts) Décrire une coupure d'arbre et deux moyens de régularisation.
12. (5 pts) Distinguer bagging et boosting.
13. (4 pts) Expliquer pourquoi un réseau profond n'est pas toujours préférable.

## Partie D — Modèles probabilistes et métriques (15 points)
14. (5 pts) Distinguer modèle génératif et discriminatif.
15. (5 pts) Expliquer le principe EM dans un mélange gaussien.
16. (5 pts) Pourquoi précision-rappel peut-elle être plus informative que l'exactitude en cas de classe rare ?

## Partie E — Responsabilité et projet (20 points)
17. (5 pts) Distinguer discrimination, calibration et seuil de décision.
18. (5 pts) Pourquoi une importance de variable n'est-elle pas une preuve causale ?
19. (5 pts) Citer trois risques à surveiller après déploiement.
20. (5 pts) Décrire un protocole de comparaison de modèles de résiliation avec validation temporelle.

## Corrigé indicatif
1. Risque de population = espérance de perte sur la distribution cible ; empirique = moyenne sur l'échantillon.
2. L'espérance conditionnelle minimise l'espérance conditionnelle du carré.
3. Sous-ajustement : modèle trop rigide ; surapprentissage : adaptation au bruit, mauvaise généralisation.
4. Le biais mesure l'écart systématique ; la variance la sensibilité à l'échantillon ; le bruit irréductible demeure.
5. Entraînement ajuste, validation sélectionne, test estime la performance finale.
6. K-fold évalue sur plusieurs plis ; nested CV sépare réglage interne et évaluation externe.
7. Les statistiques de prétraitement incorporent l'information des observations de test.
8. Séparer par périodes, respecter les groupes/agences et empêcher qu'un même assuré apparaisse dans train et test selon la cible.
9. Ridge pénalité L2 ; lasso L1 avec sparsité ; elastic net combinaison des deux.
10. C règle le compromis entre violations et largeur de marge.
11. L'arbre choisit une partition qui réduit une impureté ; profondeur, taille minimale de feuille et élagage limitent la complexité.
12. Bagging agrège des modèles bootstrap ; boosting construit séquentiellement des modèles correctifs.
13. Il nécessite davantage de données et de calcul et peut être moins adapté aux données tabulaires.
14. Discriminatif modélise P(Y|X) ; génératif modélise une distribution jointe ou conditionnelle des données.
15. E calcule responsabilités latentes ; M met à jour les paramètres ; convergence locale possible.
16. L'exactitude peut être dominée par la classe majoritaire ; précision et rappel décrivent les erreurs sur la classe rare.
17. Discrimination classe/rang ; calibration fiabilité des probabilités ; seuil règle de décision.
18. Elle décrit le modèle et les dépendances observées, non un contraste contrefactuel.
19. Dérive, baisse de calibration/performance, données manquantes ou anomalies, biais par segment.
20. Définir cible/date, supprimer variables futures, découper chronologiquement, pipeline dans CV, comparer modèles, calibrer, choisir seuil par coût, analyser segments et documenter.

## Critères de réussite
Seuil indicatif : 70/100. Toute fuite d'information, confusion entre performance d'entraînement et généralisation, ou interprétation causale d'une importance impose une reprise ciblée. Tester le sujet avec des apprenants avant stabilisation.
