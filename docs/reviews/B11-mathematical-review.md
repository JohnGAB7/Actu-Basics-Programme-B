# B11 — Revue mathématique de l'inférence (première passe)

**Date :** 21 novembre 2026  
**Périmètre :** I01–I10, estimation, propriétés, tests, intervalles, puissance, vraisemblance, bootstrap et Bayes.  
**Statut :** première revue interne assistée par IA ; pas de validation indépendante.

## Synthèse

Aucune erreur mathématique bloquante n'a été identifiée dans les dix unités lors de cette passe. Les pivots exacts, propriétés des estimateurs, vraisemblance, information de Fisher, delta method, Rao–Blackwell, CRLB, intervalles, p-values, puissance, multiplicité, tests du rapport de vraisemblance, bootstrap/permutation et mise à jour bêta-binomiale sont cohérents avec les conditions exposées.

## Revue par unité

| Unité | Résultats contrôlés | Conclusion |
|---|---|---|
| I01 | Loi t, loi F, pivot, moyenne/variance normales et TCL | Correct ; l'exactitude t/F est conditionnée au modèle normal et à l'indépendance annoncée. |
| I02 | Biais, variance, MSE, consistance, suffisance et factorisation | Décomposition MSE et implications contrôlées ; l'exemple d'estimateur rétréci est correctement présenté comme dépendant du risque et du contexte. |
| I03 | MLE Bernoulli/exponentielle, invariance, moments et cas de frontière | Formules correctes ; les estimateurs aux frontières p=0/1 et la dépendance au domaine paramétrique sont signalés. |
| I04 | Score, information de Fisher, delta, CRLB et Rao–Blackwell | Conditions de régularité et variance finie indiquées ; exemple Bernoulli cohérent. |
| I05 | Couverture, intervalles z/t, proportions et interprétation | Définitions correctes ; distinction entre intervalle exact, approximation asymptotique et procédure conservative. |
| I06 | Hypothèses, erreurs I/II, p-value et tests z/t/binomiaux | Définition du p-value et conventions de queue adaptées ; le p-value n'est pas interprété comme P(H0 vraie). |
| I07 | Puissance, taille d'échantillon, FWER, Bonferroni/Holm et BH | Approximation n≈88 pour l'exemple numérique vérifiée ; hypothèses de dépendance des procédures de multiplicité rappelées. |
| I08 | LR, Wilks, Wald et score avec information efficace | Statistiques et degrés de liberté cohérents sous régularité ; équivalence asymptotique correctement qualifiée. |
| I09 | Bootstrap non paramétrique, percentile, permutation et p_MC | Principe d'échangeabilité et correction (b+1)/(B+1) correctement mentionnés ; limites des intervalles percentile rappelées. |
| I10 | Prior Beta, vraisemblance binomiale, posterior et prédictive | Mise à jour Beta(α+x,β+n−x) et exemple Beta(10,4) vérifiés ; crédibilité bayésienne distinguée de couverture fréquentiste. |

## Enrichissements de traçabilité

- S169 (Efron & Tibshirani, *An Introduction to the Bootstrap*) ajouté pour I09.
- S170 (Gelman et al., *Bayesian Data Analysis*, 3e éd.) ajouté pour I10.
- Les unités I01–I10 renvoient maintenant aux identifiants S57–S60, S169 et S170 selon le sujet.

## Points restant à tester

1. Recalcul indépendant de chaque corrigé, notamment les intervalles, tests de puissance, tests LR/score et permutations.
2. Vérification de la couverture empirique et de la taille des tests par simulation sous H0 et sous alternatives.
3. Tests des cas limites : MLE aux frontières, petits échantillons, séparation de paramètres, faible puissance, nombreuses hypothèses, permutations discrètes et priors sensibles.
4. Comparaison des laboratoires Python/R à SciPy, R stats et références de statistique.
5. Revue humaine indépendante et tests apprenants.

**Conclusion :** I01–I10 présentent une base d'inférence cohérente dans cette première passe. Les hypothèses de régularité et les distinctions d'interprétation sont généralement explicites ; aucune certification académique n'est revendiquée.
