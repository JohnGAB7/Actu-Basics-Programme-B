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
