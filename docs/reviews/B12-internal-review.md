# B12 — Revue interne mathématique et pédagogique

**Version :** 1.2.0 · **Date :** 21 novembre 2026  
**Statut :** seconde passe mathématique et de cohérence pédagogique ; non indépendante, non certifiante.

## Périmètre vérifié
- Dix unités R01–R10 créées et importées dans le lecteur.
- Carte pédagogique et plan d'évaluation formative créés.
- B12 positionné après B11 et articulé avec B03, B05, B08 et B10.
- Frontières explicites avec B13 (multivarié), B14 (causalité), B15 (machine learning), B16 (séries temporelles) et B18 (actuariat).

## Checklist initiale de la première passe (traçabilité)
1. Détailler les conditions de Gauss–Markov et distinguer théorème de Gauss–Markov, normalité et inférence exacte.
2. Vérifier toutes les formules de sommes des carrés selon présence d'une constante et les degrés de liberté.
3. Développer la théorie des contrastes, des facteurs et des interactions ; vérifier les conventions de codage.
4. Détailler leviers, résidus studentisés, distance de Cook, hétéroscédasticité et erreurs-types robustes.
5. Préciser les hypothèses et limites des transformations, de la retransformation log et des splines.
6. Détailler AIC/BIC, validation croisée, sélection postérieure et régularisation.
7. Compléter la famille exponentielle, IRLS, déviance, surdispersion et choix de liens.
8. Distinguer modèles Poisson, quasi-Poisson et binomiale négative ; préciser l'interprétation de l'offset.
9. Développer modèles mixtes : covariance marginale, effets fixes/aléatoires, estimation et singularité.
10. Ajouter exemples calculés complets, notebooks R/Python, données reproductibles et contre-exemples.

## État après seconde passe
- Les compléments R02–R10 décrits ci-dessous sont intégrés ; R04 est maintenant approfondie pour détailler contrastes, indicatrices et interactions.
- L'évaluation comporte neuf questions pour 100 points, en cohérence avec la carte pédagogique ; son corrigé reste indicatif et doit être testé auprès d'apprenants.
- Aucune revue humaine indépendante, aucun test apprenant, aucun audit d'accessibilité ou test visuel manuel n'est revendiqué.
- La mention d'une ressource ne signifie pas qu'elle a été entièrement consultée ni qu'elle valide le cours.

## Sources de cadrage
- Penn State STAT 501 : https://online.stat.psu.edu/stat501/
- MIT OCW 18.650 : https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/

## Décision
La seconde passe interne est terminée pour les points listés ci-dessous. B12 reste une consolidation interne, non validée académiquement et non équivalente à un cours de master complet certifié.


## Résultats de la seconde passe — 21 novembre 2026

1. **R02 — Gauss–Markov.** OLS est BLUE sous rang plein, exogénéité conditionnelle et covariance d'erreur $\sigma^2I$ ; la normalité n'est pas requise pour ce théorème mais intervient dans les lois exactes Student/F.
2. **R03 — test F partiel.** Ajout de la formule pour q restrictions entre modèles emboîtés ajustés sur les mêmes observations ; distinction entre test classique et covariance robuste.
3. **R05 — influence.** Formules du résidu studentisé interne et de Cook ; distinction entre levier et influence ; ajout de la covariance sandwich HC0 et de ses limites.
4. **R06 — retransformation.** Pour un modèle log-linéaire, $E(Y\mid X)=e^{\eta(X)}E(e^\varepsilon\mid X)$ ; le facteur $e^{\sigma^2/2}$ apparaît sous normalité.
5. **R07 — sélection.** Formules AIC/BIC et précisions sur la validation imbriquée, la normalisation des pénalités et la constante non pénalisée.
6. **R08 — GLM.** Ajout des expressions de travail et des poids IRLS, ainsi que de la définition de la déviance.
7. **R09 — GLM discrets.** Ajout de la séparation logistique, de quasi-Poisson et de la variance NB2.
8. **R10 — modèles mixtes.** Covariance marginale, ICC et distinction ML/REML ; avertissement sur les ajustements singuliers.
9. **Sources.** Vérification ciblée des ressources Penn State STAT 501/504, MIT 18.650 et UCLA OARC.

## Laboratoire reproductible ajouté

- Python standard library : OLS simple, résidus, levier, résidus studentisés, Cook, ridge/LASSO univariés, logistique Newton/IRLS, Poisson avec offset, déviances et ICC.
- R : fonctions lm et glm de l'environnement R standard, diagnostics et contrôles.
- Tests Python : coefficients OLS, influence, contraction ridge/LASSO, convergence logistique, offset Poisson et ICC.
- CI étendue aux tests Python et contrôles R B12.

## Limites et travaux restants

- Les modèles multivariés complets, les splines pénalisées, la sélection postérieure, les erreurs-types robustes sous dépendance et les GLMM non gaussiens ne sont pas implémentés dans ce laboratoire introductif.
- La simulation ne valide pas les hypothèses sur des données réelles.
- Revue académique humaine indépendante, tests apprenants, test visuel manuel et audit d'accessibilité restent nécessaires.


## Compléments R04 et contrôle de cohérence de l'évaluation

- R04 : codage indicateur avec g−1 colonnes, modalité de référence, contrastes alternatifs, interaction facteur-continu, principe hiérarchique et effet du centrage.
- Laboratoire : contrôles de convergence explicites pour Newton/IRLS, rejet des entrées non finies, garde-fous sur les paramètres d'itération et signalement du cas Poisson tout-zéro sans MLE fini.
- Évaluation : répartition revue à 100 points exactement et alignée sur les catégories de la carte pédagogique : interprétation 10, OLS 10, géométrie/rang 10, inférence 15, interaction 10, diagnostics 10, transformation/régularisation 10, GLM 15, validation/modèles mixtes 10.

## Points encore ouverts

- La bibliothèque de modèles reste pédagogique : le code Python ne fournit qu'un OLS univarié, un diagnostic simple, ridge/LASSO univariés, une logistique à une variable et un Poisson à une variable avec offset.
- La convergence, la séparation, les matrices mal conditionnées et les cas frontières doivent être diagnostiqués ; le laboratoire n'est pas un remplacement de statsmodels, R glm ou d'un moteur GLMM.
- Les modèles multivariés complets, les splines pénalisées, la covariance sandwich multivariée et les GLMM non gaussiens ne sont pas implémentés.
- Revue académique humaine indépendante, tests apprenants, audit visuel manuel et accessibilité restent nécessaires.
