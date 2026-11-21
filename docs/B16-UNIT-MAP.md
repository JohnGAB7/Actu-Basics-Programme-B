# B16 — Carte pédagogique : Séries temporelles et prévision

**Version :** 1.1.0 · **Statut :** seconde passe interne approfondie · laboratoire Python/R en validation CI  
**Charge indicative :** 54–66 heures  
**Niveau :** L2–L4 introductif  
**Prérequis :** B08 probabilités, B11 inférence, B12 régression, B13 multivarié ; B03 algèbre linéaire et B07 calcul numérique recommandés.

## Finalité

Comprendre dépendance temporelle, stationnarité, saisonnalité, processus ARMA/ARIMA/ETS, régression dynamique, analyse spectrale, modèles VAR/VECM, volatilité conditionnelle et modèles espace-état. Construire et évaluer des prévisions probabilistes sans fuite temporelle, en distinguant prévision, intervention descriptive et causalité.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| TS01 | Données temporelles, tendances, saisonnalité et stationnarité | Définir stationnarité stricte/faible, transformations et différences | 4–5 h |
| TS02 | Autocorrélation, bruit blanc et processus linéaires | Calculer ACF/PACF et relier AR(1) à sa covariance | 4–5 h |
| TS03 | Modèles ARMA : identification, estimation et diagnostics | Vérifier racines, prévoir AR(1) et diagnostiquer les résidus | 5–6 h |
| TS04 | Modèles ARIMA et saisonniers SARIMA | Formuler modèles multiplicatifs et justifier différenciation | 6–7 h |
| TS05 | Lissage exponentiel, décomposition et méthodes ETS | Écrire Holt/Holt-Winters et comparer aux baselines | 5–6 h |
| TS06 | Régression avec erreurs temporelles et analyse d'intervention | Modéliser erreurs ARIMA, interventions et préblanchiment | 5–6 h |
| TS07 | Analyse spectrale et périodicités | Relier spectre, autocovariance, périodogramme et aliasing | 4–5 h |
| TS08 | Séries multivariées, VAR et cointégration | Dériver stabilité VAR et représentation VECM | 6–7 h |
| TS09 | Volatilité conditionnelle : ARCH et GARCH | Calculer persistance, variance inconditionnelle et moments | 5–6 h |
| TS10 | Modèles espace-état, filtre de Kalman et évaluation | Dériver le filtre, distinguer filtrage/lissage et évaluer | 6–8 h |

## Compétences transversales

1. Reconnaître dépendance, tendance, saisonnalité, cycle et rupture.
2. Distinguer stationnarité stricte et faible, racines AR/MA et transformations.
3. Identifier, estimer et diagnostiquer ARMA/ARIMA/ETS.
4. Construire une régression dynamique sans utiliser d'information future.
5. Interpréter spectres, VAR/VECM et réponses impulsionnelles avec prudence.
6. Modéliser et diagnostiquer une variance conditionnelle.
7. Formuler et filtrer un modèle espace-état.
8. Évaluer plusieurs horizons, baselines, erreurs et intervalles par origine temporelle.
9. Reproduire les analyses sous R ou Python.

## Dépendances pédagogiques

TS01–TS02 définissent les objets ; TS03–TS05 couvrent les modèles univariés ; TS06 intègre covariables et interventions ; TS07 étudie le domaine fréquentiel ; TS08–TS09 couvrent dépendance multivariée et volatilité ; TS10 synthétise états latents et évaluation. B14 est nécessaire pour interpréter causalement une intervention ; B17 développe les pipelines temporels.

## Laboratoire reproductible

Le laboratoire Python/R couvre :
- différences, ACF empirique et AR(1) estimé par OLS ;
- prévisions AR(1) et variance d'erreur ;
- lissage exponentiel simple et validation à origine glissante ;
- MAE/RMSE ;
- récursion GARCH(1,1), persistance et variance inconditionnelle ;
- périodogramme discret ;
- filtre de Kalman scalaire de niveau local avec observations manquantes.

Les fonctions sont pédagogiques et univariées. Elles ne remplacent pas statsmodels, fable/forecast, arch ou un moteur espace-état général.

## Hors périmètre

Processus ponctuels avancés, calcul stochastique continu, modèles de volatilité multivariés, séries irrégulières spécialisées, deep learning temporel et prévision probabiliste hiérarchique avancée sont des prolongements vers B09, B15, B18 et B20.

## Critères de sortie

L'apprenant doit choisir un modèle adapté à la fréquence et à la structure, diagnostiquer les résidus, comparer plusieurs baselines et horizons, fournir des intervalles, évaluer leur calibration et documenter ruptures et limites. Une faible erreur d'ajustement historique ne suffit pas.

## Sources ciblées

S97–S101 pour économétrie et séries financières ; S114 pour théorie et pratique de la prévision ; S115 pour ARIMA/SARIMAX et espace-état ; S116 pour ARCH/GARCH et prévisions de volatilité. Voir le registre de sources pour les limites de chaque référence.
