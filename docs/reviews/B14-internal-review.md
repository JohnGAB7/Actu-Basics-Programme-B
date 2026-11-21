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
