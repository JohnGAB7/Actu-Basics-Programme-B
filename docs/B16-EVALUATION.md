# B16 — Évaluation formative de synthèse

**Statut :** première proposition à relire · **Durée :** 120 minutes · **Total :** 100 points  
Évaluation formative, non certifiante.

## Partie A — Structure temporelle (20 points)
1. (5 pts) Distinguer tendance, saisonnalité et cycle.
2. (5 pts) Définir stationnarité faible.
3. (5 pts) Expliquer ACF et PACF.
4. (5 pts) Pourquoi bruit blanc faible n'implique-t-il pas nécessairement indépendance ?

## Partie B — Modèles univariés (25 points)
5. (5 pts) Donner la condition de stationnarité d'un AR(1).
6. (5 pts) Définir ARIMA(p,d,q) et SARIMA.
7. (5 pts) Décrire la démarche d'identification et de diagnostic d'un ARMA.
8. (5 pts) Distinguer lissage exponentiel simple, Holt et Holt-Winters.
9. (5 pts) Pourquoi comparer à une prévision naïve ?

## Partie C — Relations et fréquence (15 points)
10. (5 pts) Distinguer régression avec erreurs ARIMA et OLS avec erreurs indépendantes.
11. (5 pts) Expliquer ce que mesure une densité spectrale.
12. (5 pts) Définir cointégration et rôle d'un VECM.

## Partie D — Volatilité et états (20 points)
13. (5 pts) Écrire un modèle ARCH(1) et interpréter ses paramètres.
14. (5 pts) Expliquer la différence entre AR et GARCH dans la modélisation.
15. (5 pts) Décrire les deux étapes conceptuelles du filtre de Kalman.
16. (5 pts) Distinguer filtrage et lissage.

## Partie E — Prévision et projet (20 points)
17. (5 pts) Décrire une validation à origine glissante.
18. (5 pts) Distinguer erreur ponctuelle et calibration des intervalles.
19. (5 pts) Donner deux causes possibles d'une dégradation de prévision dans le temps.
20. (5 pts) Proposer un protocole de prévision mensuelle de fréquence de sinistres.

## Corrigé indicatif
1. Tendance : mouvement lent du niveau ; saisonnalité : motif périodique fixe ; cycle : fluctuation de période variable.
2. Moyenne et variance constantes finies, covariance ne dépendant que du retard.
3. ACF : corrélation totale à un retard ; PACF : corrélation partielle après contrôle des retards intermédiaires.
4. Des dépendances non linéaires ou d'ordre supérieur peuvent subsister.
5. |φ|<1.
6. ARIMA combine p termes AR, d différences, q termes MA ; SARIMA ajoute composantes saisonnières.
7. Graphiques, ACF/PACF, estimation de modèles plausibles, AICc/BIC, résidus, prévision hors échantillon.
8. Simple : niveau ; Holt : niveau+tendance ; Holt-Winters : niveau+tendance+saison.
9. Baseline nécessaire pour vérifier qu'un modèle complexe apporte un gain réel.
10. Le modèle avec erreurs ARIMA tient compte de la dépendance résiduelle ; OLS indépendant peut sous-estimer l'incertitude.
11. Répartition de la variance selon les fréquences.
12. Combinaison stationnaire de séries intégrées ; VECM représente correction d'écart long terme et dynamique courte.
13. \(\sigma_t^2=\alpha_0+\alpha_1\varepsilon_{t-1}^2\), avec contraintes de positivité.
14. AR modélise la moyenne conditionnelle selon valeurs passées ; GARCH modélise la variance conditionnelle selon chocs/variances passés.
15. Prédiction de l'état puis mise à jour avec l'observation.
16. Filtrage utilise données jusqu'à t ; lissage utilise aussi des observations futures.
17. Répéter l'estimation à plusieurs dates avec seules données antérieures à chaque origine.
18. Erreur ponctuelle évalue valeur prédite ; calibration vérifie couverture et fiabilité probabiliste.
19. Rupture, dérive, changement de composition, mesure ou politique.
20. Définir exposition, fréquence, calendrier, baseline, modèles, séparation temporelle, intervalles, diagnostics et suivi.

## Critères de réussite
Seuil indicatif : 70/100. Les erreurs sur stationnarité, dépendance, fuite temporelle ou interprétation d'intervention imposent une reprise ciblée. Le sujet doit être testé auprès d'apprenants avant stabilisation.
