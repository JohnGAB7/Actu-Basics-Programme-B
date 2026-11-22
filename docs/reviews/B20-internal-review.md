# B20 — Seconde revue interne de contenu

**Version examinée :** 1.1 · **Statut :** seconde revue assistée par IA, non indépendante  
**Périmètre :** AT01–AT10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Fondements mesurés et modes de convergence en prérequis des résultats limites.
- Consistance, normalité, delta et processus empiriques structurés.
- Inférence semi-paramétrique, nuisance, Bayes et MCMC inclus.
- Filtration, martingales et temps d'arrêt distingués des notions plus élémentaires.
- Grande dimension, inférence post-sélection et optimisation abordées.
- Méthodes de recherche, simulations, reproductibilité et intégrité scientifique intégrées.
- Le projet final ne prétend ni délivrer un diplôme ni valider un mémoire.

## Points à approfondir avant statut reviewed
1. Ajouter preuves complètes de LLN/TCL sous hypothèses et contre-exemples.
2. Développer contiguïté, LAN, efficacité et expériences limites.
3. Formaliser classes GC/Donsker, entropie, tightness et bootstrap fonctionnel.
4. Approfondir fonctions de score efficaces, tangent spaces et bornes semi-paramétriques.
5. Développer HMC, diagnostics de convergence et posterior asymptotique.
6. Ajouter théorèmes de martingale, arrêt optionnel et exemples de semimartingales.
7. Formaliser restricted eigenvalue, oracle inequalities et debiasing.
8. Ajouter convergence et complexité d'algorithmes numériques.
9. Produire simulations reproductibles, notebooks et énoncés de preuve vérifiés.
10. Revue humaine indépendante par statisticiens/chercheurs, test apprenant et correction des évaluations.

## Références de cadrage
- van der Vaart — *Asymptotic Statistics*, Cambridge University Press : https://www.cambridge.org/core/books/asymptotic-statistics/A3C7DAD3F7E66A1FA60E9C8FE132EE1D
- van der Vaart & Wellner — *Weak Convergence and Empirical Processes*, 2e éd. : https://link.springer.com/book/10.1007/978-3-031-29040-4
- Li & Babu — *A Graduate Course on Statistical Inference* : https://link.springer.com/book/10.1007/978-1-4939-9761-9
- TU Delft — Asymptotic Statistics research and reading list : https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics/statistics/research/asymptotic-statistics
- Cambridge — van der Vaart book contents and topics : https://www.cambridge.org/core/books/abs/asymptotic-statistics/notation/348A8DB41F3EA1051A135FFD787FD9E4

## Limites et statut
Cette revue vérifie le cadrage et les dépendances, pas l'exhaustivité de cours doctoraux. Les contenus sont des premières versions de travail, non accréditées et non validées par une institution. Les preuves, contre-exemples, démonstrations et corrections doivent être vérifiés indépendamment.



## Seconde revue interne — version 1.1

**Périmètre :** approfondissements AT01–AT10, laboratoire Python/R, carte et évaluation.

### Contrôles ajoutés
- AT01 : mesurabilité, mesure image, Fatou, convergence monotone/dominée et contre-exemples.
- AT02 : expansion des estimateurs M, contiguïté, LAN, efficacité et limites non régulières.
- AT03 : processus empirique, pont brownien, VC/entropie, tension et bootstrap fonctionnel.
- AT04 : score efficace, espace tangent, profilage, frontière et double robustesse orthogonale.
- AT05 : ratio MH, ergodicité, ESS/MCSE/R-hat, HMC et divergences.
- AT06 : décomposition de Doob, variation quadratique et conditions d'arrêt optionnel.
- AT07 : conditions lasso, debiasing et hypothèses de contrôle FDR.
- AT08 : KKT, Armijo/Wolfe, BFGS et stabilité numérique.
- AT09 : MCSE, couverture, puissance et gouvernance des données/modèles.
- AT10 : portes d'acceptation, réplication indépendante et responsabilité scientifique.

### Laboratoire et tests
Le laboratoire Python/R couvre bootstrap percentile, permutation, delta, MH 1D, ESS simplifié, BH, ridge, gradient numérique, descente Armijo et MCSE. Tests Python et assertions R visent des cas synthétiques déterministes. L'ESS est une approximation rudimentaire et le MH ne couvre qu'une dimension.

### Limites restantes
1. Vérifier les limites et le taux de couverture du bootstrap sur plusieurs DGP et comparer BCa.
2. Comparer MH/ESS à Stan ou posterior sur chaînes multimodales, fortement corrélées et à queue lourde.
3. Implémenter plusieurs chaînes et diagnostics rank-normalized R-hat/ESS dans un atelier séparé.
4. Ajouter exemples de bootstrap par blocs, wild bootstrap et cas non réguliers.
5. Vérifier les preuves de LAN, efficacité semi-paramétrique et orthogonalité contre des références de théorie.
6. Tester ridge/gradient sur jeux mal conditionnés et problèmes non convexes.
7. Faire relire les preuves et contre-exemples par un statisticien théoricien indépendant.
8. Organiser tests apprenants et audit manuel d'accessibilité.

**Conclusion :** seconde revue assistée par IA, non indépendante et non certifiante ; elle ne remplace pas une revue académique de niveau doctorat.


## Références
S148–S152 (Berkeley, Stanford, MIT, Princeton) ; S153–S154 (Stan diagnostics) ; S155 (Benjamini–Hochberg) ; S156–S157 (bootstrap et théorie non asymptotique) ; S139 (guidance bancaire américaine sur le risque de modèle).


## Compléments AT03 et AT05 — seconde consolidation

- AT03 explicite Hoeffding, Bernstein et McDiarmid, avec hypothèses d'indépendance, bornitude et limites pour données dépendantes.
- AT05 explicite le risque fréquentiste, le risque de Bayes, les actions optimales sous perte, les règles minimax et l'admissibilité.
- Ces compléments enrichissent le périmètre annoncé ; les preuves détaillées et les exercices doivent faire l'objet d'une relecture indépendante.


## Revue mathématique et technique approfondie — 22 novembre 2026

**Périmètre :** AT01–AT10, carte v1.2, évaluation, laboratoire Python/R et tests.

### Contrôles théoriques

- **AT01 — mesure et convergence :** la séquence mesurabilité, intégration, Fatou, convergence monotone/dominée et modes de convergence est cohérente. Les passages à la limite doivent toujours être associés aux hypothèses d'intégrabilité et de domination.
- **AT02 — asymptotique :** consistance, TCL, méthode delta, estimateurs M, contiguïté et LAN sont bien ordonnés. La normalité MLE suppose identification, intérieur et régularité ; les frontières et modèles singuliers exigent des limites non standards.
- **AT03 — processus empiriques :** distinction GC uniforme / Donsker fonctionnel correcte. Les formes Hoeffding, Bernstein et McDiarmid sont cohérentes sous indépendance et bornitude. Le bootstrap i.i.d. ne s'étend pas automatiquement aux données dépendantes ou aux paramètres non réguliers.
- **AT04 — semi-paramétrique :** le score efficace est la projection du score d'intérêt sur l'orthogonal de l'espace tangent nuisance ; l'information efficace définit la borne pertinente. L'orthogonalité et la double robustesse ne dispensent pas d'identification et positivité.
- **AT05 — Bayes et décision :** le ratio MH inclut bien le rapport des propositions ; l'invariance par balance détaillée ne suffit pas à garantir ergodicité. L'ESS et MCSE sont des diagnostics liés à l'autocorrélation. La moyenne postérieure sous perte quadratique, médiane sous perte absolue et règle minimax par risque maximal sont correctes sous existence/intégrabilité appropriées.
- **AT06 — martingales :** filtration, adaptation, arrêt optionnel et conditions d'intégrabilité sont distingués. La décomposition de Doob et la martingale \(M_t^2-\langle M\rangle_t\) requièrent les conditions de sous-martingale/martingale carrée intégrable et la convention initiale adéquate.
- **AT07 — grande dimension :** les conditions de compatibilité/restricted eigenvalue sont correctement présentées comme nécessaires à certaines garanties lasso ; sparsité seule ne suffit pas. BH contrôle FDR sous indépendance et certaines dépendances positives, pas sous toute dépendance arbitraire.
- **AT08 — optimisation :** convexité, KKT sous qualification, Armijo, Wolfe, BFGS et conditionnement sont correctement distingués. Un point stationnaire n'est pas nécessairement un minimum global en non-convexe.
- **AT09–AT10 — recherche :** la séparation erreur statistique / erreur Monte-Carlo / erreur numérique est juste. La réplication indépendante est distinguée de la reproduction computationnelle. Les portes d'acceptation ne prétendent pas remplacer un jury.
  
### Défauts concrets corrigés

1. **ESS et retard invalide :** Python et R acceptaient un max_lag négatif ; la boucle ne parcourait alors aucun lag et retournait artificiellement ESS=N. Le paramètre est maintenant validé comme entier de 0 à n−1.
2. **Covariance du delta :** une matrice non symétrique pouvait être traitée comme covariance. Les deux laboratoires rejettent désormais les matrices non finies ou non symétriques ; la variance delta négative reste contrôlée.
3. **Entrées non finies :** bootstrap, permutation, BH, ridge, différences finies, optimisation, MCMC, MCSE et ESS vérifient les entrées numériques. La chaîne MH exige un état initial de log-cible fini ; une proposition à log-cible \(-\infty\) reste rejetable, tandis que NaN ou \(+\infty\) sont rejetés.
4. **Optimisation :** les paramètres, gradients et valeurs d'objectif non finis sont rejetés ; le gradient doit correspondre à la dimension du point. Les tests couvrent les cas invalides ajoutés.

### Limites résiduelles à ne pas masquer

- L'ESS reste une approximation rudimentaire par autocorrélation tronquée au premier lag négatif. Il ne remplace pas les ESS bulk/tail multi-chaînes, R-hat rank-normalisé, MCSE par fonctionnelle, ni diagnostics HMC complets.
- MH est un random walk gaussien unidimensionnel ; pas de chaînes multiples, HMC, adaptation, reparamétrisation ou exploration fiable des multimodalités.
- Le bootstrap est percentile i.i.d. ; pas de BCa, bootstrap dépendant, bootstrap sauvage ou cas non réguliers.
- Le test de permutation est exact sous échangeabilité et tailles de groupes fixées ; l'égalité des seules moyennes ne suffit pas en général à justifier l'exactitude finie.
- Le delta method ne vérifie pas à lui seul la semi-définie positivité de la covariance ; l'utilisateur doit fournir une vraie matrice de covariance. La symétrie et la variance projetée sont contrôlées.
- BH ne garantit pas une probabilité faible que chaque rejet individuel soit faux ; sa garantie dépend de la structure de dépendance des p-values.
- Ridge et solveur linéaire utilisent un seuil pivot absolu ; les matrices mal conditionnées peuvent donner des résultats instables. QR/SVD et diagnostics de conditionnement restent préférables.
- La descente Armijo ne certifie qu'un point stationnaire/local sous conditions, pas un optimum global non convexe.
- Les tests sont synthétiques ; les fonctions ne remplacent ni Stan, ni un solveur numérique éprouvé, ni une revue statistique indépendante.

**Conclusion provisoire :** les fondements et les limites annoncés sont cohérents pour un bloc de théorie statistique avancée. Les corrections portent sur des cas limites susceptibles de produire des diagnostics trompeurs. Le statut reste revue interne assistée par IA, non indépendante et non certifiante.
