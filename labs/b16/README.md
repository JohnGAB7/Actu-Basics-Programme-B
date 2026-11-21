# B16 — Laboratoire reproductible de séries temporelles

Implémentations pédagogiques en Python (bibliothèque standard) et R (base R). Les exemples sont synthétiques et limités à des cas univariés simples.

## Exécution

Depuis la racine du dépôt :

    python -m unittest discover -s labs/b16/tests -v
    python labs/b16/time_series_lab.py
    Rscript labs/b16/time_series_lab.R

## Expériences

1. Différences et fonction d'autocorrélation empirique.
2. Estimation OLS d'un AR(1) et prévisions conditionnelles avec variance d'erreur.
3. Lissage exponentiel simple et validation à origine glissante (naïf, SES, AR(1)).
4. Métriques MAE/RMSE et MASE avec échelle naïve d'entraînement.
5. Récursion de variance GARCH(1,1), persistance et variance inconditionnelle lorsque celle-ci existe.
6. Périodogramme discret aux fréquences de Fourier.
7. Filtre de Kalman scalaire général et cas de niveau local, avec observations manquantes ; splits d'origine roulante explicites.

## Hypothèses et limites

- Les séries sont synthétiques ; aucune conclusion sur un portefeuille réel.
- ACF utilise une convention biaisée avec dénominateur commun ; d'autres conventions existent.
- AR(1) est estimé par OLS et les prévisions stationnaires exigent |phi|<1 ; aucune correction de petit échantillon n'est appliquée.
- SES est une version simple à niveau initial égal à la première observation ; pas d'optimisation de vraisemblance ni d'intervalle ETS.
- La validation roulante est un exemple 1-pas ; elle ne traite pas les origines multi-horizons, la saisonnalité ni les covariables.
- GARCH(1,1) est une récursion à paramètres fixés ; aucune estimation par maximum de vraisemblance, loi Student, effet de levier ni backtest VaR n'est implémenté.
- Le périodogramme est brut, sans fenêtre ni lissage ; la normalisation est une convention et les pics sont descriptifs.
- Le filtre de Kalman est scalaire, niveau local, bruits indépendants et variances connues ; il ne remplace pas un moteur espace-état général.
- VAR/VECM, SARIMA, ETS complets, modèles spectraux lissés et GARCH estimés ne sont pas implémentés.
- Ce laboratoire ne remplace pas statsmodels, forecast/fable, arch ou un logiciel de prévision spécialisé.

## Fichiers

- time_series_lab.py : fonctions Python.
- time_series_lab.R : fonctions et contrôles R.
- tests/test_time_series_lab.py : tests Python.
