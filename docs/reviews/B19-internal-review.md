# B19 — Première revue interne de contenu

**Version examinée :** 0.1 · **Statut :** revue assistée par IA, non indépendante  
**Périmètre :** EF01–EF10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Distinction association/prédiction/causalité explicite.
- Endogénéité séparée des problèmes d'inférence robuste.
- FE/RE, instruments, 2SLS, LATE et GMM couverts.
- Censure, troncature et modèles de choix introduits.
- Données financières, facteurs, volatilité, backtesting et microstructure couverts.
- Biais de disponibilité, look-ahead et survivorship signalés.
- Projet final exige robustesse, reproductibilité et communication mesurée.

## Points à approfondir avant statut reviewed
1. Détailler hypothèses OLS et propriétés asymptotiques avec dépendance.
2. Ajouter dérivations FE/RE, biais de Nickell et panels dynamiques.
3. Développer diagnostics instruments faibles, sur-identification et GMM en deux étapes.
4. Approfondir logit multinomial, IIA, Tobit et correction de sélection.
5. Ajouter tests de racine unitaire et cointégration financière avec ruptures.
6. Développer modèles de facteurs, erreurs de mesure des bêta et tests transversaux.
7. Formaliser VaR/ES, backtesting et comparaisons de prévision de volatilité.
8. Ajouter données de carnet d'ordres, estimations de spread et realized kernels.
9. Produire notebooks R/Python, datasets publics contrôlés et pipelines reproductibles.
10. Revue humaine indépendante, validation des calculs et tests apprenants.

## Références de cadrage
- Wooldridge, *Introductory Econometrics: A Modern Approach* : https://www.cengage.com/c/introductory-econometrics-a-modern-approach-7e-wooldridge/
- Wooldridge, *Econometric Analysis of Cross Section and Panel Data* : https://mitpress.mit.edu/9780262232586/econometric-analysis-of-cross-section-and-panel-data/
- Hansen, *Econometrics* (open textbook) : https://www.ssc.wisc.edu/~bhansen/econometrics/
- Engle (1982), ARCH : https://doi.org/10.2307/1912773
- Christoffersen, *Elements of Financial Risk Management* : https://www.sciencedirect.com/book/9780123744487/elements-of-financial-risk-management

## Limites et statut
La revue est une vérification interne de périmètre et de cohérence, non une revue académique indépendante. Les références doivent être consultées par chapitre et version ; leur présence ne signifie pas validation du contenu. Les unités sont des premières versions de travail, non accréditées.



## Seconde revue interne — version 1.1

**Périmètre :** approfondissements EF01–EF10, laboratoire Python/R, carte et évaluation.

### Contrôles ajoutés
- EF01 : estimands ATE/ATT/LATE, résultats potentiels, hypothèses d'identification et transportabilité.
- EF02 : sandwich HC0, HAC/Newey–West, clusters, petits nombres de clusters et erreurs de mesure.
- EF03 : within, exogénéité stricte, biais de Nickell, GMM dynamique et RE corrélés.
- EF04 : 2SLS matriciel, faibles instruments, LATE, pondération GMM et sur-identification.
- EF05 : logit/probit, effets marginaux, IIA, Tobit, sélection et mécanismes de censure/troncature.
- EF06 : agrégation des rendements, stationnarité, vintages macro et biais point-in-time.
- EF07 : erreurs de mesure des bêta, Fama–MacBeth et multiplicité/data mining.
- EF08 : ES intégral, Kupiec/Christoffersen et distinction Bâle/usage général.
- EF09 : variation quadratique, bruit de microstructure et estimateurs robustes.
- EF10 : protocole de recherche, versions de données et gouvernance modèle mise à jour en 2026.

### Laboratoire et tests
Le laboratoire propose des primitives OLS, HC0/HAC, within, ratio de Wald simple, logit, rendements, CAPM, VaR/ES, Kupiec et variance réalisée. Les tests Python vérifient cas déterministes et erreurs d'entrée ; le script R contient des assertions de cohérence. Les versions sont volontairement minimales et ne remplacent pas des bibliothèques économétriques.

### Limites restantes
1. Vérifier HC0/HAC contre une bibliothèque de référence, notamment les conventions de correction petit échantillon.
2. Étendre IV à 2SLS multi-instruments/covariables et inférence faible-instrument.
3. Tester FE/RE et GMM dynamique sur jeux de référence.
4. Ajouter modèles logit/probit estimés, Tobit/Heckman et diagnostics IIA.
5. Comparer VaR/ES et backtests à des implémentations de référence.
6. Ajouter un jeu haute fréquence synthétique et comparer realized kernels/subsampling à une bibliothèque spécialisée.
7. Vérifier la portée de SR 26-2, du cadre Bâle et des règles locales selon l'organisation.
8. Organiser tests apprenants et audit manuel d'accessibilité.

**Conclusion :** seconde revue assistée par IA, non indépendante et non certifiante. La qualité des calculs pédagogiques n'est pas une validation académique externe.


## Revue mathématique et technique approfondie — 22 novembre 2026

**Périmètre :** EF01–EF10, carte v1.1, évaluation, fonctions Python/R, tests et références S136–S147.

### Vérifications mathématiques et économétriques

- **EF01 — estimands :** la distinction association/prédiction/causalité est correcte. La liste des hypothèses (randomisation, indépendance conditionnelle, exclusion, continuité, tendances parallèles, absence d'interférence) doit toujours être reliée au design concret ; elle n'est pas interchangeable.
- **EF02 — OLS et sandwich :** \(\hat\beta=(X'X)^{-1}X'y\) est correcte sous rang plein. HC0 utilise le meat \(\sum_i x_ix_i'\hat u_i^2\). HAC Newey–West ajoute les autocovariances des scores avec noyau de Bartlett \(1-\ell/(L+1)\). Ces estimateurs corrigent la covariance sous conditions, pas le biais d'endogénéité.
- **EF03 — panel :** la transformation within élimine l'effet individuel constant. L'exogénéité stricte est requise pour l'interprétation FE statique. La présence de \(y_{i,t-1}\) dans un panel court crée le biais de Nickell après transformation ; la leçon ne prétend pas que FE statique résout ce problème.
- **EF04 — IV/GMM :** le ratio de Wald à un instrument et sans covariables est un cas simple. La pertinence ne garantit pas l'exclusion ; le LATE dépend de la monotonicité et de la population des compliers. La matrice 2SLS et la fonction de moments GMM sont cohérentes.
- **EF05 — choix discret :** \(p=\Lambda(x'\beta)\) et \(\partial p/\partial x_k=\beta_kp(1-p)\) pour un régresseur continu sont corrects. Pour un régresseur binaire, une différence discrète est préférable. IIA est une restriction du logit multinomial standard, pas une propriété universelle des choix.
- **EF06 — rendements :** \(1+R_{t,t+h}=\prod_j(1+R_j)\) et \(r_{t,t+h}=\sum_jr_j\) sont corrects. L'approximation \(r\approx R-R^2/2\) est d'ordre 2. Les effets de prix ajustés, dividendes, splits, devise, calendrier et données point-in-time sont correctement signalés.
- **EF07 — facteurs :** bêta est une exposition estimée au facteur, alpha un intercept conditionnel à la spécification et à l'échantillon. Fama–MacBeth implique régressions transversales période par période puis moyenne temporelle ; l'inférence doit tenir compte de la dépendance temporelle et de l'erreur de mesure des bêta.
- **EF08 — VaR/ES :** VaR est un quantile ; la formule intégrale d'ES gère les atomes et la pondération fractionnaire de la queue. Kupiec teste la couverture inconditionnelle avec \(p=1-q\), où q est le niveau de confiance VaR ; le test ne vérifie pas l'indépendance des exceptions.
- **EF09 — microstructure :** la variance réalisée est une somme de carrés de rendements intrajournaliers. Sans bruit, elle approche la variation quadratique sous conditions ; le bruit de microstructure peut rendre l'échantillonnage trop fréquent contre-productif.
- **EF10 — gouvernance :** la référence SR 26-2 existe et remplace SR 11-7, mais elle est une guidance prudentielle américaine, attendue surtout pour les banques de plus de 30 milliards USD supervisées par la Fed ; elle n'est ni une règle européenne ni une obligation universelle. Elle n'établit pas de standards exécutoires prescriptifs.

### Défauts techniques corrigés dans cette branche

1. **Entrées non finies :** OLS, covariances HC0/HAC, within, Wald-IV, logit, rendements, CAPM, VaR/ES, Kupiec et variance réalisée rejettent désormais les valeurs non finies. En particulier, R \`sort()\` pouvait retirer des valeurs manquantes dans le calcul empirique VaR/ES, donnant une mesure sur un échantillon silencieusement réduit.
2. **Structure panel :** les identifiants de groupes manquants sont rejetés au lieu de produire des moyennes de groupe ambiguës.
3. **HAC :** le retard est maintenant un entier dans \([0,n-1]\). Un test à retard positif vérifie symétrie et finitude ; le test à retard nul confirme l'identité HC0/HAC.
4. **Backtesting :** les exceptions doivent être des indicateurs booléens/logiques non manquants ; le taux attendu doit être fini et strictement entre 0 et 1.

### Limites numériques et statistiques qui restent explicites

- Le Python OLS résout les équations normales \(X'X\hat\beta=X'y\) avec pivot partiel et seuil absolu. Les équations normales élèvent le conditionnement au carré ; les designs mal mis à l'échelle peuvent être instables ou rejetés. En production, préférer QR/SVD, diagnostiquer le conditionnement et documenter le scaling. R utilise \`lm.fit\` (QR), donc les deux implémentations ne sont pas numériquement identiques.
- HC0/HAC sont sans correction de petit échantillon ; HAC utilise une bande passante fournie par l'utilisateur, sans pré-blanchiment ni sélection automatique.
- L'estimateur Wald ne traite qu'un instrument et aucun contrôle ; pas de variance, d'intervalle, de test faible-instrument ni de 2SLS général.
- Within est une transformation unidimensionnelle par groupe, sans effets temporels ni erreurs clusterisées.
- Le logit n'est pas estimé ; les fonctions n'illustrent que la fonction logistique et la pente marginale.
- CAPM est une régression simple sur rendements excédentaires alignés ; pas d'erreurs-types ni de correction de non-synchronisme.
- VaR/ES sont empiriques ; Kupiec renvoie une statistique LR, pas une p-value, et ne teste pas l'indépendance. Aucun Christoffersen n'est implémenté.
- La variance réalisée n'est pas corrigée du bruit ; pas de realized kernels, pré-averaging, sauts ni covariance réalisée multivariée.
- Données synthétiques uniquement ; aucune validation sur séries macro/financières réelles ni test apprenant.

**Conclusion provisoire :** la couverture conceptuelle est cohérente pour un bloc L2–L3 et les formules principales sont correctement formulées. Les corrections de cette branche renforcent surtout la sûreté des entrées et la vérifiabilité HAC/backtesting. Statut : revue interne assistée par IA, non indépendante et non certifiante.
