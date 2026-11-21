# B16 — Seconde revue interne de contenu

**Version examinée :** 1.1.0 · **Date :** 21 novembre 2026  
**Statut :** seconde revue assistée par IA, non indépendante.  
**Périmètre :** TS01–TS10, carte v1.1, évaluation formative v1.1 et laboratoire Python/R.

## Résultats de la seconde passe

- TS01 : définitions stricte/faible, implications, Box–Cox et différences, fréquence d'observation.
- TS02 : ACF empirique, bandes approximatives bruit blanc, Yule–Walker AR(1), distinction bruit blanc et indépendance.
- TS03 : conventions des polynômes, racines de stationnarité/inversibilité, prévision AR(1), variance d'erreur et Ljung–Box.
- TS04 : forme multiplicative SARIMA, différences saisonnières et limites des intervalles conditionnels au modèle.
- TS05 : équations de Holt/Holt–Winters et distinctions ETS.
- TS06 : régression à erreurs ARIMA, impulsion/marche/rampe, préblanchiment et disponibilité des prédicteurs futurs.
- TS07 : périodogramme normalisé, aliasing/Nyquist et relation spectre-autocovariance.
- TS08 : matrice compagnon, stabilité VAR, rang de cointégration, VECM et identification des chocs.
- TS09 : variance inconditionnelle GARCH(1,1), persistance, condition de quatrième moment et prévision de variance.
- TS10 : matrices Q/H, innovation, gain de Kalman, mise à jour et distinction filtrage/lissage/prévision.
- Évaluation : 20 questions/100 points avec calculs AR(1), SES, fréquence, GARCH, Kalman et métriques.

## Laboratoire reproductible

Le laboratoire Python standard library et R base comprend différences, ACF, AR(1), prévisions et variance d'erreur, SES, validation roulante, MAE/RMSE/MASE, splits roulants, récursion GARCH(1,1), périodogramme et filtre de Kalman scalaire général/niveau local avec observations manquantes.

## Points mathématiques et techniques à surveiller

1. Les conventions des polynômes AR/MA et de l'ACF diffèrent entre logiciels ; les unités et conventions doivent être annoncées.
2. La condition de variance inconditionnelle GARCH \(\alpha+\beta<1\) ne garantit pas un quatrième moment fini ; les hypothèses sur les innovations interviennent.
3. Le filtre de Kalman implémenté est un modèle scalaire de niveau local avec variances connues ; pas un filtre général multivarié.
4. Le laboratoire AR(1) utilise OLS ; pas de vraisemblance exacte, ARMA/SARIMA, ETS complet, VAR/VECM ou estimation GARCH.
5. Le périodogramme est brut ; pas de fenêtre, lissage, multitaper ou tests de pics.
6. La validation roulante illustre une prévision 1-pas ; les multi-horizons et données hiérarchiques restent à développer.
7. Les exemples synthétiques ne démontrent aucune stabilité sur données réelles et n'intègrent pas automatiquement les ruptures de régime.

## Références consultées/ciblées

- Penn State STAT 510 et références de séries financières : S97–S101.
- Hyndman & Athanasopoulos, Forecasting: Principles and Practice, 3e édition : S114.
- statsmodels, ARIMA/SARIMAX et state-space : S115.
- arch, ARCH/GARCH, distributions et prévisions de volatilité : S116.

## Limites et statut

Cette seconde revue est une vérification interne assistée par IA. Elle ne constitue pas une revue académique humaine indépendante, une accréditation ou une approbation institutionnelle. Restent à conduire : relecture par spécialiste, tests auprès d'apprenants, audit manuel du rendu et de l'accessibilité, validation sur données réelles avec gouvernance appropriée. Les algorithmes du laboratoire sont pédagogiques et ne doivent pas être utilisés pour des décisions opérationnelles.


## Contrôle mathématique et technique complémentaire — 22 novembre 2026

### Anomalie détectée et correction portée

**Validation roulante AR(1) — confusion entre stationnarité et existence d'une prévision à horizon fini.**

La fonction `forecast_ar1()` calcule une prévision AR(1) sous la condition `|phi| < 1`, car elle utilise la moyenne stationnaire `c/(1-phi)` et renvoie une variance d'erreur. Cette restriction est cohérente pour cette formule stationnaire.

Cependant, `rolling_origin_mae()` utilisait cette fonction pour produire une prévision ponctuelle à un pas. Une prévision récursive à horizon fini est définie même lorsque `|phi| >= 1` :
`yhat_(t+h) = c + phi*yhat_(t+h-1)`.
Le rejet de ces paramètres empêchait donc la validation de modèles AR(1) non stationnaires pourtant mathématiquement prévisibles à horizon fini.

Correction :
- la validation roulante utilise désormais `ar1_forecast()`, qui applique la récursion finie sans supposer la stationnarité ;
- les prévisions avec variance stationnaire continuent d'utiliser `forecast_ar1()` et conservent leur garde `|phi| < 1` ;
- le minimum de quatre observations d'entraînement requis par l'estimateur OLS AR(1) est maintenant contrôlé explicitement ;
- un test Python et un contrôle R utilisent la suite géométrique `1, 2, 4, 8, 16, 32`, dont la pente AR(1) estimée vaut 2 et dont les prévisions à un pas sont exactes sur cet exemple.

### Recalculs analytiques ciblés

- TS01 : stationnarité stricte avec second moment fini implique stationnarité faible ; la réciproque est fausse en général. Box–Cox modifie l'échelle, la différence élimine certaines racines unitaires ; les deux opérations ne sont pas interchangeables.
- TS02 : la convention ACF du laboratoire correspond au dénominateur commun ; pour un AR(1) stationnaire, `rho(h)=phi^h`.
- TS03 : prévision AR(1) et variance d'erreur sont cohérentes avec `mu=c/(1-phi)` et `sigma² sum(phi^(2j), j=0,...,h-1)`. Les racines AR/MA doivent être interprétées avec la convention de signe annoncée.
- TS04 : la forme multiplicative SARIMA est cohérente ; l'ordre d et l'ordre D portent sur différences non saisonnière et saisonnière.
- TS05 : les équations Holt et Holt–Winters additif sont cohérentes avec la convention d'indexation saisonnière donnée ; l'initialisation des états doit rester visible.
- TS06 : la disponibilité future des covariables est une condition de prévision, et non une simple question d'implémentation. Les indicateurs impulsion/marche/rampe représentent des hypothèses de forme, pas une identification causale.
- TS07 : la relation spectre-autocovariance est cohérente avec la convention angulaire `f(omega)=1/(2 pi) sum gamma(h) exp(-i h omega)`. Le périodogramme retourné ne double pas les fréquences positives : il doit être lu comme une convention bilatérale évaluée sur la moitié non redondante, pas comme un spectre unilatéral.
- TS08 : la condition de stabilité par valeurs propres de la matrice compagnon dans le disque unité et la décomposition `Pi=alpha beta'` sont cohérentes.
- TS09 : la variance inconditionnelle GARCH(1,1) vaut `omega/(1-alpha-beta)` lorsque `alpha+beta<1` et les innovations sont centrées-réduites. La condition gaussienne de quatrième moment est distincte et plus stricte.
- TS10 : les équations de prédiction/innovation/mise à jour de Kalman sont cohérentes sous linéarité, covariance connue et indépendance des bruits ; la forme de Joseph peut améliorer la stabilité numérique.

### Limites restantes

- Les laboratoires ne sont pas des implémentations complètes ARMA/SARIMA, ETS, VAR/VECM ou estimation GARCH.
- Les prévisions AR(1) par OLS ne fournissent pas d'inférence robuste aux ruptures ou à l'incertitude de sélection.
- La validation roulante reste à un pas dans le laboratoire ; les horizons multiples et l'incertitude probabiliste ne sont pas couverts par les mêmes fonctions.
- Le périodogramme est brut, sans fenêtre ni lissage ; les pics restent descriptifs.
- Le filtre de Kalman est scalaire et à variances connues ; il ne constitue pas un moteur espace-état général.
- Les exemples synthétiques ne prouvent pas la stabilité sur séries réelles.

### Sources recoupées

- Penn State STAT 510 — Applied Time Series Analysis, notes ouvertes couvrant ARIMA, lissage, interventions, VAR, ARCH et analyse spectrale : https://online.stat.psu.edu/stat510/
- Penn State STAT 510 — Time Series Basics : https://online.stat.psu.edu/stat510/Lesson01
- Penn State STAT 510 — The Periodogram : https://online.stat.psu.edu/stat510/Lesson06
- Hyndman & Athanasopoulos, *Forecasting: Principles and Practice*, 3e édition : https://otexts.com/fpp3/

**Statut :** revue interne assistée par IA, non indépendante. La correction doit encore passer par la CI du dépôt et l'exécution R effective. Revue humaine spécialisée, tests apprenants, audit d'accessibilité et validation sur séries réelles restent distincts.
