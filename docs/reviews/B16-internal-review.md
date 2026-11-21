# B16 — Seconde revue interne de contenu

**Version examinée :** 1.1 · **Statut :** seconde revue interne assistée par IA, non indépendante  
**Périmètre :** TS01–TS10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Progression des motifs temporels vers modèles ARMA/ARIMA, ETS et méthodes avancées.
- Distinction stationnarité faible/stricte, bruit blanc et indépendance.
- Hypothèses d'identification et diagnostics de résidus explicités.
- Distinction entre prédiction, intervention descriptive et causalité.
- Couverture de spectre, VAR/cointégration, ARCH/GARCH et espace-état.
- Validation à origine glissante et baselines incluses.

## Points à approfondir avant statut reviewed
1. Développer preuves de stationnarité/inversibilité ARMA et équations de prévision.
2. Ajouter dérivation des intervalles ARIMA et effets de la surdifférenciation.
3. Détailler modèles ETS en espace-état et choix saisonnier.
4. Développer préblanchiment et régression avec erreurs ARIMA.
5. Approfondir estimations spectrales, fenêtre et biais-variance.
6. Ajouter stabilité VAR, tests de cointégration et interprétation des restrictions structurelles.
7. Détailler conditions de stationnarité et estimation GARCH, effets de levier et queues épaisses.
8. Développer matrices de Kalman et cas de données manquantes/irrégulières.
9. Ajouter notebooks R/Python exécutables, séries reproductibles et benchmarks multi-horizons.
10. Revue humaine indépendante, vérification des calculs et tests apprenants.

## Références de cadrage
- Penn State STAT 510 : https://online.stat.psu.edu/stat510/
- Penn State STAT 510 course outline : https://online.stat.psu.edu/statprogram/stat510
- Hyndman & Athanasopoulos, *Forecasting: Principles and Practice* : https://otexts.com/fpptr/
- Shumway & Stoffer, *Time Series Analysis and Its Applications* (5e éd., 2025) : https://www.springer.com/

## Limites et statut
La revue est une vérification interne de cohérence et de couverture. Elle ne remplace pas une revue humaine indépendante en séries temporelles. Les contenus sont des premières versions de travail, non accréditées et non validées par les institutions citées.


## Seconde passe — compléments réalisés

Les dix unités ont été approfondies :
- TS01–TS02 : tendance déterministe/stochastique, ADF/KPSS, propriétés d'autocovariance, incertitude de l'ACF et Ljung–Box.
- TS03–TS04 : racines, causalité/inversibilité, prévisions linéaires, variance d'erreur, critères d'information et retransformation.
- TS05–TS06 : équations de Holt et Holt–Winters, classification ETS, régression dynamique, préblanchiment et interventions.
- TS07–TS08 : périodogramme, spectre, VAR compagnon, cointégration/VECM et restrictions structurelles.
- TS09–TS10 : moments et prévisions GARCH, filtre de Kalman, données manquantes, filtrage/lissage et évaluation multi-horizon.

Un laboratoire Python/R sans dépendances externes a été ajouté pour illustrer les différences, ACF, AR(1), métriques, validation temporelle, GARCH(1,1) et Kalman scalaire. Des tests unitaires Python et des contrôles R sont branchés dans la CI.

## Limites restantes

1. Les routines pédagogiques ne remplacent pas l'estimation complète ARIMA/ETS/VAR/GARCH ni un filtre de Kalman multivarié robuste.
2. Le spectre et le périodogramme sont développés théoriquement, mais aucun estimateur spectral complet n'est fourni dans le laboratoire de base.
3. Les tests de racine unitaire, cointégration et causalité de Granger ne sont pas réimplémentés ; utiliser des bibliothèques spécialisées et vérifier les spécifications.
4. Les exemples doivent encore être exécutés sur des jeux de données réalistes, avec analyse de sensibilité des fréquences, ruptures et révisions.
5. La CI ne valide ni la validité statistique des choix de modèles, ni la couverture réelle des intervalles, ni la pédagogie auprès d'apprenants.
6. Revue humaine indépendante, test apprenant et audit manuel d'accessibilité restent requis.