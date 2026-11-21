# B15 — Évaluation formative de synthèse

**Version :** 1.1.0 · **Durée :** 120 minutes · **Total :** 100 points · **Statut :** seconde passe interne ; test apprenant à réaliser  
Évaluation formative, non certifiante. Justifier les calculs et distinguer prédiction, décision et causalité.

## Partie A — Formulation et risque (20 points)

1. (5 pts) Définir risque de population, risque empirique et ERM.
2. (5 pts) Sous perte quadratique, démontrer que l'espérance conditionnelle minimise le risque conditionnel.
3. (5 pts) Pour biais 0,2, variance 0,10 et bruit irréductible 0,05, calculer l'erreur quadratique prédictive attendue.
4. (5 pts) Expliquer pourquoi un seuil de décision dépend des coûts et ne se déduit pas seulement de la probabilité prédite.

## Partie B — Généralisation et validation (20 points)

5. (5 pts) Distinguer entraînement, validation et test.
6. (5 pts) Décrire une validation imbriquée et expliquer quel biais elle réduit.
7. (5 pts) Proposer une séparation pour des données d'assurés suivis dans le temps et par agence, si l'objectif est de prédire de nouveaux assurés à une date future.
8. (5 pts) Expliquer la fuite créée par standardisation ou sélection de variables avant les plis.

## Partie C — Modèles supervisés (25 points)

9. (5 pts) Pour un modèle univarié centré, avec \(c=2\), \(q=4\) et \(\lambda=0,5\), calculer la pente ridge \(\hat\beta=c/(q+\lambda)\).
10. (5 pts) Avec \(c=2\), \(q=4\) et \(\lambda=0,5\), calculer la pente lasso \(\hat\beta=S(c,\lambda)/q\).
11. (5 pts) Expliquer le rôle de C dans le SVM à marge souple et la condition de semi-définie positivité d'un noyau.
12. (5 pts) Pour une feuille avec proportions de classes 0,5 et 0,5, calculer Gini et entropie en base 2 ; interpréter une pureté plus élevée.
13. (5 pts) Pour AdaBoost avec erreur pondérée \(\epsilon=0,2\), calculer \(\alpha=\frac12\log((1-\epsilon)/\epsilon)\).

## Partie D — Probabilités et anomalies (15 points)

14. (5 pts) Distinguer calibration et discrimination ; expliquer le score de Brier et sa limite comme métrique isolée de calibration.
15. (5 pts) Dans un mélange gaussien, écrire la responsabilité \(r_{ik}\) et les mises à jour EM des poids et moyennes.
16. (5 pts) Pourquoi PR-AUC peut-elle être plus informative que l'exactitude pour une classe rare ? Citer une limite.

## Partie E — Responsabilité et cycle de vie (20 points)

17. (5 pts) Distinguer parité démographique, égalité des chances et égalité des odds. Pourquoi aucune métrique ne définit seule l'équité ?
18. (5 pts) Expliquer pourquoi SHAP ou une importance par permutation ne prouvent pas un effet causal.
19. (5 pts) Citer trois signaux de dérive et définir une réponse opérationnelle à une alerte.
20. (5 pts) Décrire un protocole de comparaison de modèles de résiliation avec validation temporelle, calibration, choix de seuil et suivi.

## Corrigé indicatif

1. \(R(f)=E[L(Y,f(X))]\) sous la distribution cible ; \(R_n(f)=n^{-1}\sum_i L(Y_i,f(X_i))\) ; ERM minimise \(R_n\) dans une classe donnée, éventuellement pénalisée.
2. \(E[(Y-a)^2\mid X]=Var(Y\mid X)+(E[Y\mid X]-a)^2\), minimisé en \(a=E[Y\mid X]\).
3. \(0,2^2+0,10+0,05=0,19\).
4. Pour coûts constants, prédire positif si \(p\geq C_{FP}/(C_{FP}+C_{FN})\). Capacité, coûts variables et contraintes peuvent modifier cette règle.
5. Entraînement ajuste ; validation sélectionne ; test évalue la procédure finale sans participer aux choix.
6. La boucle interne choisit les hyperparamètres ; la boucle externe estime la performance de toute la procédure de sélection, réduisant le biais de sélection.
7. Entraîner sur des périodes antérieures, tester sur une période future ; séparer les assurés entre plis si l'objectif vise de nouveaux assurés ; traiter les agences comme grappes si la dépendance ou la cible l'exige.
8. Les statistiques de prétraitement incorporent des informations du pli test et rendent l'évaluation optimiste ; tout prétraitement doit être ajusté dans le pli d'entraînement.
9. Ridge : \(2/(4+0,5)=0,4444\).
10. Lasso : \(S(2,0,5)=1,5\), donc \(1,5/4=0,375\).
11. C pénalise les violations de marge : C élevé cherche à réduire les erreurs d'entraînement au prix d'une marge plus étroite ; un noyau standard doit générer des matrices de Gram PSD.
12. Gini \(=1-(0,5^2+0,5^2)=0,5\). Entropie \(=-2(0,5\log_2 0,5)=1\) bit. Une pureté accrue correspond à une impureté plus faible.
13. \(\alpha=0,5\log(4)=0,6931\).
14. Calibration : concordance fréquence observée/probabilité ; discrimination : classement des positifs devant les négatifs. Brier \(=n^{-1}\sum(p_i-y_i)^2\), score propre combinant plusieurs dimensions, pas calibration pure.
15. \(r_{ik}=\pi_k\phi(x_i;\mu_k,\Sigma_k)/\sum_j\pi_j\phi(x_i;\mu_j,\Sigma_j)\), \(N_k=\sum_i r_{ik}\), \(\pi_k=N_k/n\), \(\mu_k=N_k^{-1}\sum_i r_{ik}x_i\), covariance pondérée correspondante.
16. L'exactitude peut être dominée par la classe majoritaire ; PR décrit le compromis précision-rappel sur la classe positive. PR-AUC dépend du taux de base et du seuil d'usage.
17. Parité compare les taux de sélection ; égalité des chances compare TPR ; égalité des odds compare TPR et FPR. Elles codent des objectifs différents et peuvent être incompatibles selon les taux de base et le contexte.
18. Ces outils décrivent l'association utilisée par le modèle et dépendent de la distribution de référence ; ils ne construisent pas le contrefactuel nécessaire à une conclusion causale.
19. Dérive des entrées, baisse de calibration/performance, changements de taux de base ou de données manquantes ; vérifier, documenter, suspendre ou recalibrer selon un protocole validé.
20. Définir cible et date ; éliminer variables futures ; séparer temporellement et par assuré ; intégrer prétraitement dans CV ; comparer baselines et modèles ; calibrer ; choisir seuil selon coûts/capacité ; désagréger les erreurs ; documenter et surveiller.

## Critères de réussite

Seuil indicatif : 70/100. Toute fuite d'information, confusion entre calibration et discrimination, interprétation causale d'une explication ou absence de validation hors échantillon impose une reprise ciblée. Tester le sujet avec des apprenants avant stabilisation.
