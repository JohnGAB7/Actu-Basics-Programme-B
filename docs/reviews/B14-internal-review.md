# B14 — Seconde revue interne de contenu

**Version examinée :** 1.1.0 · **Date :** 21 novembre 2026  
**Statut :** seconde revue assistée par IA, non indépendante.  
**Périmètre :** CI01–CI10, carte v1.1, évaluation formative v1.1 et laboratoire Python/R.

## Résultats de la seconde passe

- CI01 : dérivation de la g-formule par loi de l'espérance, échangeabilité et consistance ; décomposition de la différence brute en ATT et terme de sélection ; clarification des versions du traitement et de SUTVA.
- CI02 : distinction nul net/nul moyen, variance de Neyman en population finie et dépendance liée à la randomisation en grappes.
- CI03 : exemple chiffré d'un plan \(2^2\), convention de codage ±1 et alias explicite du plan \(2^{3-1}\).
- CI04 : critère de porte arrière, effets naturels de médiation et confondeurs variant dans le temps affectés par le traitement passé.
- CI05 : exemple numérique où la différence brute (+0,02) s'inverse après standardisation (−0,10) ; rôle de la distribution cible et de la positivité.
- CI06 : poids ATE/ATT/overlap, SMD pondérée, effectif effectif et limites de l'appariement.
- CI07 : formule AIPW, séquence de cross-fitting et score orthogonal partiellement linéaire ; les conditions de taux sont mentionnées sans prétendre les démontrer intégralement.
- CI08 : LATE/compliers, instruments faibles, RDD nette/floue et estimation locale linéaire.
- CI09 : identification de l'ATT par DiD 2×2, adoption échelonnée, dépendance de grappes et contrôle synthétique.
- CI10 : sensibilité \(\Gamma\), contrôles négatifs, falsification et transportabilité.
- Évaluation : 20 questions et 100 points ; calculs de standardisation, plan factoriel, IV et DiD alignés sur les cours.

## Laboratoire reproductible

Le laboratoire Python (bibliothèque standard) et R (base R) comprend des démonstrations de randomisation, standardisation, scores de propension binaires, poids ATE/ATT/overlap, SMD, ESS, IPW, AIPW, Wald, DiD et RD locale linéaire. Les tests couvrent reproductibilité, calculs attendus, cas de support absent, poids invalides, premier stade nul et support local insuffisant.

## Points mathématiques et techniques à surveiller

1. L'AIPW est présenté avec les hypothèses d'identification et de positivité ; le terme « doublement robuste » concerne la spécification des modèles auxiliaires, pas les hypothèses causales.
2. Le test de randomisation implémenté teste le nul net de Fisher selon une randomisation complète ; ne pas l'étiqueter comme test exact de l'ATE moyen nul.
3. L'IV Wald est un point estimé ; le laboratoire ne calcule pas d'inférence robuste aux instruments faibles.
4. Le RD local linéaire ne fournit pas d'intervalle robuste corrigé du biais et ne remplace pas rdrobust.
5. DiD est limité à la formule 2×2 ; aucune implémentation d'estimateurs multi-cohortes n'est revendiquée.
6. Les fonctions de score de propension utilisent une covariable binaire empirique, sans estimation logistique générique ni modèle de données manquantes.
7. Les exemples sont synthétiques et ne valident pas un effet causal sur un portefeuille réel.

## Références consultées/ciblées

- Penn State STAT 503, principes de plan, factoriels et fractionnaires : S72–S73.
- Hernán & Robins, résultats potentiels, standardisation, pondération et hypothèses : S74.
- Cunningham, IV, RDD, DiD et contrôle synthétique : S75.
- Tutoriel DAG : S76.
- Documentation DoubleML, scores orthogonaux et cross-fitting : S108.
- Callaway & Sant'Anna (2021), DiD multi-périodes et adoption échelonnée : S109.
- Documentation rdrobust, estimation locale et intervalles robustes corrigés du biais : S110.

## Limites et statut

Cette seconde revue est une vérification interne assistée par IA. Elle ne constitue pas une revue académique humaine indépendante, une accréditation ou une approbation institutionnelle. Restent à conduire : relecture par spécialiste, test auprès d'apprenants, audit manuel du rendu et de l'accessibilité, validation sur données réelles avec gouvernance appropriée. Les algorithmes du laboratoire sont pédagogiques et ne doivent pas être utilisés pour des décisions opérationnelles.


## Contrôle mathématique et technique complémentaire — 22 novembre 2026

**Périmètre de cette passe :** relecture indépendante de la précédente synthèse sur le laboratoire B14 et vérification des points centraux des unités CI01–CI10.

### Anomalie bloquante détectée et corrigée dans le laboratoire R

- Dans `local_linear_rd()`, l'argument nommé `c` masquait la fonction de base R `c()`. L'expression `c(y,r)` tentait donc d'appeler la valeur numérique du seuil comme une fonction ; le script R échouait au contrôle final sharp/fuzzy RD.
- Le paramètre a été renommé `cutoff` dans `local_linear_rd()` et `local_intercept()`. L'appel à `base::c(y,r)` est explicite dans le contrôle des entrées.
- Correction portée sur la branche `chatgpt/math-review-b14-b20`. L'exécution effective par R doit être confirmée par le workflow GitHub Actions de la PR ; aucune réussite d'exécution n'est revendiquée avant ce résultat.

### Recalculs analytiques vérifiés

- CI01 : la g-formule découle bien de la loi de l'espérance totale, de l'échangeabilité conditionnelle et de la consistance ; la positivité assure que les moyennes conditionnelles observées existent sur le support cible.
- CI02 : l'estimateur de différence des moyennes est sans biais pour l'ATE fini sous randomisation complète ; la variance de Neyman contient le terme non identifiable `-S_tau^2/N`, et son omission donne une borne conservatrice.
- CI03 : pour les moyennes (10, 14, 12, 20), les effets haut-moins-bas sont A=6, B=4 et AB=2 ; avec le codage ±1, les coefficients sont respectivement 3, 2 et 1. Pour C=AB, la relation définissante est I=ABC et le plan est de résolution III.
- CI05 : la standardisation du tableau synthétique donne bien 0,20 contre 0,30, soit un effet standardisé de −0,10, alors que la différence brute vaut +0,02.
- CI06–CI07 : les poids ATE/ATT/overlap et la forme AIPW implémentée sont cohérents avec leurs estimands sous support positif. La double robustesse ne porte que sur la spécification de l'un des deux modèles auxiliaires, sous les hypothèses causales et de régularité.
- CI08–CI09 : les ratios de Wald et DiD sont des calculs ponctuels ; leur interprétation causale dépend respectivement des hypothèses IV (dont exclusion et monotonie pour LATE) et des tendances parallèles/absence d'anticipation pour DiD.

### Limites qui restent ouvertes

1. Le laboratoire Python/R ne fournit pas d'inférence générique robuste pour IPW/AIPW, IV faible, RD corrigée du biais ou DiD multi-périodes.
2. Les scores de propension ne sont estimés que pour une covariable binaire ; les prédictions AIPW sont fournies à la fonction plutôt qu'estimées par un pipeline.
3. Le calcul RD utilise une bande passante fournie et une régression locale linéaire pédagogique ; le choix de bande passante, les biais de bord et les intervalles robustes ne sont pas implémentés.
4. Le test de randomisation est conditionné au mécanisme complet simple ; les plans en grappes ou stratifiés doivent reproduire leur mécanisme exact.
5. Les contrôles de code sur données synthétiques ne valident pas les hypothèses d'identification sur des données réelles.

### Sources de référence consultées pour cette passe

- Penn State, STAT 503 — plans expérimentaux, factoriels, fractionnaires et réponse de surface : https://online.stat.psu.edu/stat503/index
- Hernán & Robins, *Causal Inference: What If* — consistance, échangeabilité, positivité et standardisation : https://miguelhernan.org/whatifbook
- DoubleML — cross-fitting et scores orthogonaux : https://docs.doubleml.org/stable/guide/basics
- Callaway & Sant'Anna (2021), *Difference-in-Differences with Multiple Time Periods*, Journal of Econometrics : https://doi.org/10.1016/j.jeconom.2020.12.001

**Statut :** revue interne assistée par IA, non indépendante. La correction R est en attente de confirmation CI. Revue humaine spécialisée, tests apprenants et audit d'accessibilité restent des étapes séparées.
