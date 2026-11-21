# B12 — Revue mathématique de la régression et des modèles (première passe)

**Date :** 21 novembre 2026  
**Périmètre :** R01–R10, OLS, inférence, facteurs, diagnostics, flexibilité, régularisation, GLM, logistique/Poisson et modèles mixtes.  
**Statut :** première revue interne assistée par IA ; pas de validation indépendante.

## Synthèse

Aucune erreur mathématique bloquante n'a été identifiée dans les dix unités lors de cette passe. Les formules OLS, Gauss–Markov, tests t/F, interactions, diagnostics, HC0, retransformation log, AIC/BIC, GLM/IRLS, offset Poisson, logistique, surdispersion, ICC et distinction ML/REML sont cohérentes avec les hypothèses indiquées.

## Revue par unité

| Unité | Résultats contrôlés | Conclusion |
|---|---|---|
| R01 | Modèle conditionnel, interprétation de pente, corrélation/R² et association vs causalité | Correct ; domaine d'extrapolation et limites causales explicites. |
| R02 | Équations normales, rang, projection, variance OLS, Gauss–Markov et décomposition | Correct ; BLUE ne requiert pas la normalité, qui est réservée aux résultats exacts t/F. |
| R03 | Tests t/F, degrés de liberté, modèles emboîtés, IC vs prédiction et F partiel | Formule F partielle vérifiée ; mêmes observations et emboîtement requis. |
| R04 | Facteurs, contrastes, interactions et dépendance de l'interprétation à la référence | Formules des pentes avec interactions correctes ; contre-exemple de colinéarité des indicatrices correct. |
| R05 | Levier, résidus studentisés, Cook, hétéroscédasticité et HC0 | Formule Cook correcte pour le résidu studentisé interne ; HC0 ne corrige ni endogénéité ni dépendance. |
| R06 | Polynômes, logarithmes, splines et retransformation | Correction log-normale $e^{\sigma^2/2}$ correcte ; la moyenne arithmétique n'est pas simplement $e^{\eta}$. |
| R07 | VIF, AIC/BIC, ridge/LASSO et validation imbriquée | Formules et distinctions correctes ; risque de fuite lors du prétraitement bien signalé. |
| R08 | Famille exponentielle, moyenne/variance, liens, IRLS et déviance | Formules IRLS cohérentes avec le lien et la fonction de variance ; facteurs de dispersion/poids explicitement modulables. |
| R09 | Logit, odds ratio, offset Poisson, séparation et surdispersion | Formules correctes ; ajout d'une mise en garde : le quasi-Poisson ne fournit pas une vraisemblance complète usuelle pour un AIC standard. |
| R10 | Intercept aléatoire, ICC, ML/REML, validation par groupe et singularité | ICC vérifiée ; hypothèse d'indépendance des effets aléatoires et régresseurs explicitée, avec alternatives FE/Mundlak. |

## Corrections et enrichissements apportés

1. R09 : distinction explicite entre quasi-vraisemblance et vraisemblance complète ; avertissement sur l'usage standard d'AIC.
2. R10 : hypothèse d'exogénéité des effets aléatoires et recours possible aux effets fixes ou aux effets aléatoires corrélés de Mundlak.
3. Chaque unité R01–R10 renvoie aux sources S61, S64–S66 et S79 selon son périmètre.

## Points restant à tester

- Vérifier les erreurs-types robustes HC0/HC1–HC3 contre une bibliothèque de référence.
- Tester les diagnostics d'influence, les cas de séparation logistique, les offsets nuls/invalides et les surdispersions.
- Comparer IRLS, déviance et erreurs-types GLM à R `stats`/Python `statsmodels`.
- Vérifier les conventions ML/REML et ICC sur modèles mixtes de référence.
- Recalculer tous les exercices/corrigés et effectuer une revue humaine indépendante, puis des tests apprenants.

**Conclusion :** la structure mathématique R01–R10 est cohérente dans cette première passe. Les points délicats (normalité vs Gauss–Markov, quasi-vraisemblance, exogénéité RE, retransformation) sont explicités. Aucune certification académique n'est revendiquée.
