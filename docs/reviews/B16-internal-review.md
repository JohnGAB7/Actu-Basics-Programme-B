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
