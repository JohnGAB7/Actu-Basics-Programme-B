# B12 — Régression et modèles statistiques

**Version :** 1.2.0 · **Statut :** seconde passe interne approfondie · laboratoire Python/R en validation CI.
**Public :** licence avancée / master en statistique, mathématiques appliquées, économie quantitative, science des données et actuariat.

## Finalité
Construire, interpréter et diagnostiquer des modèles statistiques reliant une réponse à des variables explicatives. Le bloc part de la régression linéaire, développe son inférence et ses diagnostics, puis introduit régularisation, GLM et modèles mixtes.

## Prérequis
B03 (algèbre linéaire), B05 (calcul différentiel et optimisation), B08 (lois, espérance et variance), B10 (qualité et exploration), B11 (vraisemblance et inférence). R ou Python de base recommandé.

## Dix unités
| Code | Unité | Charge |
|---|---|---:|
| R01 | Cadre de régression, association et modèle linéaire simple | 4–5 h |
| R02 | Moindres carrés ordinaires et géométrie matricielle | 5–6 h |
| R03 | Inférence en régression et analyse de variance | 5–6 h |
| R04 | Régression multiple, facteurs et interactions | 5–6 h |
| R05 | Diagnostics, résidus et influence | 5–6 h |
| R06 | Transformations, non-linéarité et modèles flexibles | 5–6 h |
| R07 | Sélection, multicolinéarité et régularisation | 5–6 h |
| R08 | Fondements des modèles linéaires généralisés | 5–6 h |
| R09 | Régression logistique et modèles de comptage | 5–6 h |
| R10 | Modèles mixtes, validation et synthèse | 5–7 h |

## Compétences finales
1. Formuler et interpréter les modèles simples et multiples.
2. Dériver OLS et expliquer rang, projection et identifiabilité.
3. Construire tests, intervalles et comparaisons de modèles.
4. Coder facteurs et interactions.
5. Diagnostiquer hypothèses, résidus, levier et influence.
6. Choisir transformations et régularisation sans fuite d'information.
7. Expliquer famille exponentielle, liens, déviance et estimation GLM.
8. Interpréter logit, odds ratios, Poisson et offset.
9. Reconnaître surdispersion et structures hiérarchiques.
10. Concevoir une validation adaptée à l'unité de généralisation.

## Frontières
B10 décrit et explore ; B11 établit les fondements généraux de l'inférence ; B12 modélise les relations conditionnelles. B13 approfondit la statistique multivariée ; B14 l'identification causale ; B15 l'apprentissage statistique ; B16 les séries temporelles ; B18 l'actuariat appliqué. Une régression ne démontre pas à elle seule une causalité.

## Progression
R01–R04 : construction du modèle linéaire. R05 : diagnostics. R06–R07 : flexibilité et contrôle de complexité. R08–R09 : généralisation aux réponses non gaussiennes. R10 : données groupées et validation.

## Évaluation formative
120 minutes / 100 points : interprétation (10), OLS (10), géométrie/rang (10), inférence/ANOVA (15), interactions (10), diagnostics (10), transformation/régularisation (10), GLM (15), validation/modèles mixtes (10). L'évaluation comporte neuf questions ; corrigé indicatif à tester auprès d'apprenants.

## Sources de cadrage
- Penn State STAT 501, Regression Methods: https://online.stat.psu.edu/stat501/
- MIT OCW 18.650, Statistics for Applications: https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/
- Kutner et al., *Applied Linear Statistical Models*, 5e éd.
- Fox & Weisberg, *An R Companion to Applied Regression*, 3e éd.
- McCullagh & Nelder, *Generalized Linear Models*, 2e éd.
- Gelman & Hill, *Data Analysis Using Regression and Multilevel/Hierarchical Models*.

Ces références orientent le cadrage ; leur mention ne constitue ni validation externe ni accréditation. Les sections réellement consultées seront consignées dans la revue approfondie.

## Seconde passe mathématique et ressources vérifiées

- R02–R03 : conditions de Gauss–Markov, rang, normalité pour l'inférence exacte, test F partiel et comparaison de modèles emboîtés.
- R05 : résidus studentisés internes, levier, distance de Cook et covariance sandwich HC0 ; les diagnostics ne sont pas des règles automatiques de suppression.
- R06 : correction de retransformation log ; sous erreur normale, la moyenne conditionnelle inclut le facteur $e^{\sigma^2/2}$.
- R07 : AIC/BIC, validation croisée imbriquée et convention de pénalisation ridge/LASSO.
- R08 : schéma IRLS et définition de la déviance.
- R09 : séparation logistique, quasi-Poisson et variance binomiale négative.
- R10 : covariance marginale, ICC, ML/REML et ajustements singuliers.

Sources institutionnelles consultées :
- [Penn State STAT 501 — Regression Methods](https://online.stat.psu.edu/stat501/index) : OLS, ANOVA, diagnostics, facteurs, transformations, sélection, multicolinéarité, logistic.
- [Penn State STAT 504 — Analysis of Discrete Data](https://online.stat.psu.edu/statprogram/stat504) : GLM, logit, Poisson, diagnostics et données discrètes.
- [Penn State STAT 504 — Poisson regression and offsets](https://online.stat.psu.edu/stat504/Lesson09) : comptages, taux et exposition.
- [Penn State STAT 462 — Generalized Linear Models](https://online.stat.psu.edu/stat462/node/211/) : famille GLM et liens usuels.
- [UCLA OARC — ICC in linear multilevel models](https://stats.oarc.ucla.edu/wp-content/uploads/2024/12/effect_sizes_linear_multilevel_simple.html) : variance inter/intra-groupe et ICC.

Ces ressources servent de repères et de vérification ciblée ; elles ne valident pas le cours original.


## Compléments de seconde passe v1.2

- R04 : codage des facteurs par g−1 indicatrices, choix de référence et contrastes, interactions facteur-continu, principe hiérarchique et centrage.
- Évaluation : neuf questions et répartition de points recalculées à 100, alignées avec les compétences et la durée indiquées.
- Laboratoire : contrôles de convergence Newton/IRLS, garde-fous sur les paramètres d'itération, gestion explicite du cas Poisson tout-zéro et validations d'entrées finies.
- Limites documentées : laboratoire univarié pédagogique, non destiné à remplacer les implémentations statistiques généralistes.
