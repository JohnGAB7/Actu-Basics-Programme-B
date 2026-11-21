# B11 — Théorie de l’inférence statistique

**Version :** 1.1.0 · **Statut :** seconde passe interne effectuée · laboratoire Python/R intégré · revue indépendante à venir.
**Public :** fin de licence / master en statistique, mathématiques appliquées, économie quantitative ou actuariat.

## Finalité
Passer de la description des données et des lois probabilistes à l’inférence sur les paramètres d’une population. Le bloc articule théorie des estimateurs, vraisemblance, tests, intervalles, puissance, procédures asymptotiques, rééchantillonnage et introduction bayésienne.

## Prérequis
- B08 : probabilités, variables aléatoires, lois usuelles, espérance, variance, convergence et TCL.
- B09 : notions de processus uniquement lorsque la dépendance du rééchantillonnage est discutée.
- B10 : population, échantillon, plan de sondage, qualité des données et exploration.
- Calcul différentiel et algèbre linéaire élémentaire.

## Parcours de dix unités

| Code | Unité | Compétence centrale | Charge |
|---|---|---|---:|
| I01 | Lois d’échantillonnage et statistiques pivots | Construire des lois exactes et asymptotiques de statistiques | 4–5 h |
| I02 | Estimation ponctuelle et propriétés des estimateurs | Comparer biais, variance, EQM, consistance et suffisance | 4–5 h |
| I03 | Méthodes des moments et maximum de vraisemblance | Construire et optimiser des estimateurs paramétriques | 5–6 h |
| I04 | Biais, variance, convergence et efficacité | Comprendre normalité asymptotique, Fisher, Cramér–Rao et Rao–Blackwell | 5–6 h |
| I05 | Intervalles de confiance et régions de confiance | Construire et interpréter des procédures de couverture | 4–5 h |
| I06 | Tests d’hypothèses, p-values et erreurs | Formuler et interpréter un test contrôlé | 5–6 h |
| I07 | Puissance statistique, taille d’échantillon et multiplicité | Planifier une étude et contrôler les tests multiples | 4–5 h |
| I08 | Tests du rapport de vraisemblance, de Wald et du score | Tester des contraintes paramétriques | 5–6 h |
| I09 | Bootstrap, permutation et inférence computationnelle | Rééchantillonner selon le plan et les hypothèses | 5–6 h |
| I10 | Introduction à l’inférence bayésienne | Calculer et interpréter un posterior et une prédictive | 5–6 h |

## Progression et articulation
I01 pose les distributions de référence. I02–I04 construisent les propriétés et la théorie des estimateurs. I05–I08 passent des intervalles et tests élémentaires aux tests fondés sur la vraisemblance. I09 introduit les procédures computationnelles en insistant sur la validité du mécanisme de rééchantillonnage. I10 met en place le langage bayésien et le compare à l’approche fréquentiste.

**Frontières de périmètre :** la régression et les GLM sont traités en B12 ; les plans d’expérience et l’inférence causale en B14 ; les modèles bayésiens hiérarchiques et MCMC avancés en B20 ; l’inférence sous plans complexes de sondage reste reliée à B10 et devra être approfondie dans les blocs d’application.

## Compétences finales observables
L’apprenant doit pouvoir :
1. dériver une loi d’échantillonnage et distinguer résultat exact et approximation ;
2. calculer biais, variance et EQM et argumenter une comparaison d’estimateurs ;
3. construire une vraisemblance et optimiser sous contraintes ;
4. énoncer les conditions d’un résultat asymptotique ;
5. construire un intervalle et en interpréter la couverture ;
6. formuler un test, calculer une p-value et distinguer les erreurs ;
7. justifier puissance et taille d’échantillon ;
8. reconnaître les hypothèses des tests LR, Wald et score ;
9. choisir un schéma bootstrap/permutation compatible avec les données ;
10. effectuer une mise à jour bayésienne simple et discuter le rôle du prior.

## Méthodes d’apprentissage
Chaque unité comprend objectifs, définitions, démonstrations ou justifications, exemples calculés, applications, erreurs fréquentes, exercices corrigés et références. Les notebooks R/Python seront ajoutés comme ressources séparées après vérification reproductible ; leur mention dans les objectifs ne signifie pas qu’ils sont déjà livrés.

## Évaluation recommandée
Épreuve de synthèse de 120 minutes, 100 points, complétée par exercices de programmation et une interprétation écrite des résultats. Seuil indicatif de maîtrise : 70/100, avec correction obligatoire des erreurs de raisonnement sur les hypothèses, les p-values et la couverture.

## Sources de cadrage
- MIT OCW 18.650 — *Statistics for Applications* : https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/
- MIT OCW 18.443 — *Statistics for Applications* : https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/
- Casella & Berger — *Statistical Inference*, 2e éd., 2024 : https://www.routledge.com/Statistical-Inference/Casella-Berger/p/book/9781032593036
- Wasserman — *All of Statistics* : https://link.springer.com/book/10.1007/978-0-387-21736-9

Ces sources cadrent la progression ; elles ne constituent pas une validation externe du contenu original du programme.


## Contrôle de correspondance des ressources

- **I01–I04 :** MIT OCW 18.650, lectures 3–6 (inférence paramétrique, EMV, méthode des moments) et MIT OCW 18.443, lectures L2–L4 (EMV, propriétés, loi normale multivariée et TCL).
- **I05–I08 :** MIT OCW 18.650, lectures 7–10 (tests paramétriques) ; MIT OCW 18.443, lectures L5–L8 (intervalles, Student/Fisher, tests t et F). Les tests LR/Wald/score et leurs conditions sont approfondis avec Casella & Berger.
- **I09 :** Wasserman, *All of Statistics* et Efron & Tibshirani, *An Introduction to the Bootstrap* ; le laboratoire distingue rééchantillonnage bootstrap et permutation sous échangeabilité.
- **I10 :** MIT OCW 18.650, lectures 17–18 (statistiques bayésiennes) ; MIT OCW 18.443, lectures L9–L10 (règles de décision bayésiennes et tests les plus puissants).

Pages institutionnelles consultées :
- [MIT OCW 18.650 — notes](https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/resources/lecture-notes/)
- [MIT OCW 18.650 — diapositives et thèmes](https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/pages/lecture-slides/)
- [MIT OCW 18.443 — notes de cours](https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/pages/lecture-notes/)
- [MIT OCW 18.443 — syllabus](https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/pages/syllabus/)
- [Casella & Berger — Statistical Inference, 2e édition, copyright 2024](https://www.routledge.com/Statistical-Inference/Casella-Berger/p/book/9781032593036)

Les ressources institutionnelles cadrent les thèmes et les lectures ; elles ne valident pas le contenu original de Programme B.
