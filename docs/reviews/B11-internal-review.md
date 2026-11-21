# B11 — Première revue interne mathématique et pédagogique

**Version examinée :** 1.0.0 · **Statut :** revue interne assistée par IA · **Date :** 21 novembre 2026  
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
