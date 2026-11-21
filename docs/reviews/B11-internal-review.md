# B11 — Seconde revue interne mathématique et pédagogique

**Version examinée :** 1.1.0 · **Statut :** revue interne assistée par IA · **Date :** 21 novembre 2026  
**Nature :** seconde passe interne assistée par IA, à partir du dépôt et de calculs ciblés.
**Limite :** cette revue n’est pas indépendante, n’est pas une expertise humaine externe et ne constitue pas une certification académique.

## Périmètre contrôlé
- Cohérence de la progression I01–I10 avec B08–B10 et les blocs B12/B14/B20.
- Définitions, formules, exemples et corrigés.
- Conditions d’application des lois exactes, du TCL, de la borne de Cramér–Rao et du théorème de Wilks.
- Interprétation des intervalles, p-values, puissance, multiplicité, bootstrap, permutation et posterior bayésien.
- Cohérence des références de cadrage et de l’évaluation transversale.

## Résultat de la première passe
La structure couvre les principaux thèmes d’un cours de théorie de l’inférence de niveau fin de licence/master : lois d’échantillonnage, estimation, vraisemblance, propriétés asymptotiques, intervalles, tests, puissance, tests de vraisemblance, méthodes de rééchantillonnage et Bayes.

Les distinctions pédagogiques essentielles sont explicitement rappelées : estimateur versus estimation ; biais versus consistance ; exact versus asymptotique ; écart-type versus erreur-type ; p-value versus probabilité du nul ; couverture fréquentiste versus masse postérieure ; FWER versus FDR ; bootstrap versus permutation.

## Points mathématiques à conserver et surveiller
1. Les lois Student et khi-deux utilisées pour la moyenne/variance exigent le modèle normal i.i.d. pour leur exactitude.
2. Le TCL requiert des hypothèses ; une variance finie est une condition classique suffisante dans le cadre i.i.d., pas une garantie universelle pour des données dépendantes.
3. Les identités de Fisher et la borne de Cramér–Rao nécessitent des conditions de régularité. Les paramètres sur frontière et supports dépendant de paramètres sont des cas non réguliers.
4. L’existence de l’EMV doit être contrôlée aux frontières de l’espace paramétrique.
5. Les intervalles de Wald pour proportions peuvent mal couvrir en petits échantillons ; Wilson et exact binomial sont mentionnés.
6. Le niveau d’un test composite est un supremum de probabilité de rejet sur le nul ; le cours le signale qualitativement.
7. Les formules de puissance et de taille d’échantillon sont présentées comme approximations sous modèle normal simplifié.
8. Le théorème de Wilks est asymptotique et ne doit pas être appliqué sans régularité, identifiabilité et dimension de contraintes.
9. Le bootstrap par ligne est inadapté si l’unité indépendante est une grappe ; les schémas stratifiés, par grappes et par blocs doivent respecter le plan.
10. La validité des permutations repose sur l’échangeabilité ou l’invariance induite par le nul et le plan.
11. Le posterior bayésien dépend du prior ; la normalisation et la propriety doivent être contrôlées.

## Vérifications des exemples et corrigés
- I01 : variance de moyenne $16/64=0,25$, erreur-type 0,5 ; Student à $n-1$ degrés de liberté sous normalité.
- I02 : EQM = variance + biais au carré.
- I03 : EMV de Poisson $\bar X$ ; exponentielle de taux $n/\sum x_i$.
- I04 : information Bernoulli $1/[p(1-p)]$ et borne atteinte par la moyenne empirique dans le modèle régulier.
- I05 : IC normal à variance connue et IC Student à variance inconnue sous normalité.
- I06 : interprétation de la p-value et décision à seuil annoncé.
- I07 : correction de Bonferroni et risque familial sous indépendance.
- I08 : loi $\chi^2_q$ asymptotique sous les conditions de Wilks.
- I09 : bootstrap par grappes et permutation respectant l’échangeabilité.
- I10 : conjugaison Beta–Binomiale.

## Limites et travaux complémentaires
- Démonstrations complètes de Rao–Blackwell, Cramér–Rao, Neyman–Pearson et Wilks à renforcer en ressources avancées.
- Ajouter des notebooks R/Python exécutables avec tests, graines aléatoires, versions et résultats attendus.
- Développer l’inférence sous plans complexes (poids, stratification, grappes, non-réponse) en articulation avec B10.
- Développer bootstrap studentisé/BCa et bootstrap dépendant dans une unité avancée.
- Développer tests exacts, tests non paramétriques et comparaisons multiples plus larges.
- Tester les exercices auprès d’apprenants ; la cohérence d’un corrigé calculé ne prouve pas sa clarté pédagogique.
- Effectuer une revue humaine indépendante et contrôler les références/éditions/sections réellement consultées.

## Conclusion
La première passe ne met pas en évidence d’erreur structurelle majeure dans le périmètre élémentaire couvert. Elle identifie toutefois des approfondissements importants avant de qualifier le bloc de version stabilisée. B11 reste en **revue interne**, non certifié et non validé par MIT, Harvard, Princeton, Stanford ou toute autre institution.


## Seconde passe — vérifications complémentaires

### Vérifications mathématiques

1. I01 : formule exacte du rapport F des variances empiriques sous normalité et indépendance des deux échantillons ; degrés de liberté n₁−1,n₂−1.
2. I02 : la consistance découle de EQM(θ̂_n)→0 par Markov ; biais et variance tendant séparément vers zéro constituent un critère suffisant.
3. I03 : la maximisation de la vraisemblance distingue les candidats intérieurs et les frontières ; l'exemple Poisson tout-zéro n'a pas de maximum dans l'espace strictement positif, seulement un supremum en limite.
4. I04 : les identités d'information, Cramér–Rao et Rao–Blackwell sont conditionnées par leurs hypothèses de régularité et d'intégrabilité.
5. I05–I07 : les notions de couverture, puissance, FWER et FDR restent distinctes ; correction du corrigé FWER avec hypothèse d'indépendance explicitée et borne de Bonferroni sans cette hypothèse.
6. I08 : ajout de l'information efficace et de la statistique score en présence d'un paramètre nuisance ; la forme simple requiert une matrice d'information nuisance inversible.
7. I09 : le laboratoire précise la définition du test binomial bilatéral par ordre des probabilités, le bootstrap i.i.d. et les conditions d'échangeabilité de la permutation.
8. I10 : normalisation postérieure, notation des densités, conjugaison Beta–Binomiale et distribution prédictive revérifiées.

### Livrables reproductibles

- labs/b11/inference_lab.py : test binomial exact par ordre des probabilités, intervalle de Wilson, EMV Poisson, mise à jour Beta–Binomiale, bootstrap percentile, permutation Monte-Carlo, puissance et taille d'échantillon pour test z.
- labs/b11/inference_lab.R : implémentations équivalentes en R base.
- labs/b11/tests/test_inference_lab.py : tests des valeurs, cas limites, reproductibilité et garde-fous.
- Les contrôles Python et R B11 sont ajoutés au workflow CI ; leur résultat doit être vérifié avant fusion.

### Points restant ouverts

- Revue académique humaine indépendante des dix unités et des corrigés.
- Exécution des scripts dans les environnements documentés et inspection des résultats en CI.
- Tests d'apprenants sur la compréhension des p-values, couverture, puissance, vraisemblance et schémas de rééchantillonnage.
- Audit d'accessibilité et contrôle manuel du rendu sur desktop et mobile.
- Approfondir dans B20 les preuves de Neyman–Pearson, Wilks, théorie asymptotique et méthodes bayésiennes computationnelles.

La seconde passe n'est ni indépendante ni certifiante. Les tests automatisés valident des cas de référence codés, pas l'ensemble du raisonnement pédagogique.
