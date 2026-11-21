# B16 — Carte pédagogique : Séries temporelles et prévision

**Version :** 0.1 · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.
**Charge indicative :** 54–66 heures  
**Niveau :** L1–L3  
**Prérequis :** B08 probabilités, B11 inférence, B12 régression, B13 multivarié ; B03 algèbre linéaire et B07 calcul numérique recommandés.

## Finalité
Comprendre la dépendance temporelle, construire des modèles univariés et multivariés, analyser la saisonnalité et la volatilité, puis produire et évaluer des prévisions probabilistes sans fuite d'information temporelle.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| TS01 | Données temporelles, tendances, saisonnalité et stationnarité | Décrire les motifs et justifier les transformations | 4–5 h |
| TS02 | Autocorrélation, bruit blanc et processus linéaires | Interpréter ACF/PACF et dépendance | 4–5 h |
| TS03 | Modèles ARMA : identification, estimation et diagnostics | Estimer et vérifier des modèles stationnaires | 5–6 h |
| TS04 | Modèles ARIMA et saisonniers SARIMA | Modéliser non-stationnarité et saisonnalité | 6–7 h |
| TS05 | Lissage exponentiel, décomposition et méthodes ETS | Construire des prévisions par lissage | 5–6 h |
| TS06 | Régression avec erreurs temporelles et analyse d'intervention | Combiner covariables et dynamique | 5–6 h |
| TS07 | Analyse spectrale et périodicités | Étudier fréquences et densité spectrale | 4–5 h |
| TS08 | Séries multivariées, VAR et cointégration | Modéliser plusieurs séries et équilibres de long terme | 6–7 h |
| TS09 | Volatilité conditionnelle : ARCH et GARCH | Modéliser la variance dynamique | 5–6 h |
| TS10 | Modèles espace-état, filtre de Kalman et évaluation des prévisions | Filtrer états latents et évaluer les prévisions | 6–8 h |

## Compétences transversales
1. Reconnaître dépendance, tendance, saisonnalité, cycle et ruptures.
2. Distinguer stationnarité stricte, faible et transformations nécessaires.
3. Identifier, estimer et diagnostiquer ARMA/ARIMA/ETS.
4. Modéliser relations multivariées et variance conditionnelle.
5. Comprendre modèles espace-état et filtrage.
6. Construire validation à origine glissante et comparer à des baselines.
7. Quantifier et vérifier l'incertitude des prévisions.
8. Reproduire les analyses sous R ou Python en respectant l'ordre temporel.

## Dépendances pédagogiques
TS01–TS02 définissent les objets ; TS03–TS05 couvrent les modèles univariés ; TS06 intègre covariables et interventions ; TS07 étudie le domaine fréquentiel ; TS08–TS09 couvrent dépendance multivariée et volatilité ; TS10 synthétise état latent et évaluation. B14 est nécessaire pour interpréter causalement une intervention ; B17 développera les pipelines de données temporelles.

## Hors périmètre
Processus ponctuels avancés, calcul stochastique continu, modèles de volatilité multivariés avancés, modèles de séries irrégulières spécialisés, deep learning temporel et prévision probabiliste hiérarchique avancée sont des prolongements vers B09, B15, B18 et B20.

## Critères de sortie
L'apprenant doit construire un modèle adapté à la fréquence et à la structure des données, diagnostiquer les résidus, évaluer plusieurs horizons, fournir des intervalles et documenter les ruptures et limites. Une faible erreur d'ajustement historique n'est pas suffisante.
