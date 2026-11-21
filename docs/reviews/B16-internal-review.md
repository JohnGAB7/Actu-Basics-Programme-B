# B16 — Première revue interne de contenu

**Version examinée :** 0.1 · **Statut :** revue assistée par IA, non indépendante  
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
