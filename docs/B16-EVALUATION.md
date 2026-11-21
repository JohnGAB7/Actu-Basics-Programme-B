# B16 — Évaluation formative de synthèse

**Version :** 1.1.0 · **Durée :** 120 minutes · **Total :** 100 points · **Statut :** seconde passe interne ; test apprenant à réaliser  
Évaluation formative, non certifiante. Justifier les hypothèses et les calculs.

## Partie A — Structure temporelle (20 points)

1. (5 pts) Distinguer stationnarité stricte et faible. Quelle implication existe avec un second moment fini ?
2. (5 pts) Pour \(Y_t=0,5Y_{t-1}+\varepsilon_t\), avec variance d'innovation 4 et moyenne nulle, calculer la variance stationnaire.
3. (5 pts) Distinguer logarithme/Box–Cox et différenciation première.
4. (5 pts) Distinguer ACF et PACF. Pourquoi bruit blanc faible n'implique-t-il pas indépendance ?

## Partie B — Modèles univariés (25 points)

5. (5 pts) Avec \(\phi(z)=1-0,7z\), indiquer si le modèle AR(1) est stationnaire et où se trouve la racine.
6. (5 pts) Pour AR(1) centré avec \(\phi=0,5\), \(Y_t=10\), \(\mu=8\) et \(\sigma_\varepsilon^2=4\), calculer la prévision à h=2 et la variance de l'erreur.
7. (5 pts) Écrire la forme multiplicative SARIMA et expliquer la différence entre d et D.
8. (5 pts) Avec SES, niveau initial 10, observation 14 et \(\alpha=0,25\), calculer le nouveau niveau et la prévision suivante.
9. (5 pts) Distinguer ETS et ARIMA ; pourquoi comparer au naïf saisonnier ?

## Partie C — Régression et fréquence (15 points)

10. (5 pts) Pourquoi modéliser des erreurs ARIMA dans une régression dynamique ? Pourquoi les prédicteurs futurs doivent-ils être disponibles ?
11. (5 pts) Une composante a une période de 4 observations. Quelle fréquence en cycles par observation ? Quelle est la fréquence de Nyquist pour un échantillonnage par période ?
12. (5 pts) Énoncer la condition de stabilité d'un VAR et écrire la forme VECM avec \(\Pi=\alpha\beta'\).

## Partie D — Volatilité et états (20 points)

13. (5 pts) Pour GARCH(1,1), \(\omega=0,1\), \(\alpha=0,2\), \(\beta=0,7\), \(\varepsilon_t=2\) et \(\sigma_t^2=1\), calculer \(\sigma_{t+1}^2\).
14. (5 pts) Calculer la variance inconditionnelle pour ces paramètres. Que signifie \(\alpha+\beta\) proche de 1 ? Citer la condition gaussienne usuelle du quatrième moment.
15. (5 pts) Dans un filtre de Kalman scalaire, \(m_{t|t-1}=0\), \(P_{t|t-1}=1\), \(H=1\), \(y_t=2\). Calculer gain, innovation, moyenne et variance filtrées.
16. (5 pts) Distinguer filtrage, lissage et prévision.

## Partie E — Prévision et projet (20 points)

17. (5 pts) Décrire une validation à origine glissante et expliquer pourquoi un split aléatoire peut être invalide.
18. (5 pts) Pour valeurs réelles [10,12] et prévisions [11,10], calculer MAE et RMSE.
19. (5 pts) Distinguer couverture et largeur d'un intervalle de prévision ; pourquoi les évaluer conjointement ?
20. (5 pts) Proposer un protocole de prévision mensuelle de fréquence de sinistres, avec baselines, horizons, diagnostics et suivi.

## Corrigé indicatif

1. Stricte : invariance de toutes les lois finies par translation ; faible : moyenne constante, variance finie constante, covariance fonction du retard. Stricte avec second moment fini implique faible ; la réciproque n'est pas générale.
2. Variance \(=4/(1-0,5^2)=4/0,75=5,3333\).
3. Log/Box–Cox vise surtout l'échelle et la variance ; la différence traite une tendance stochastique ou une racine unité. Aucune ne garantit seule la stationnarité.
4. ACF : corrélation totale à un retard ; PACF : corrélation partielle après contrôle des retards intermédiaires. Bruit blanc faible annule les autocovariances non nulles, pas toutes les dépendances non linéaires.
5. Racine \(z=1/0,7\approx1,4286\), à l'extérieur du cercle unité ; AR(1) stationnaire car \(|0,7|<1\).
6. \(\hat Y_{t+2|t}=\mu+\phi^2(Y_t-\mu)=8+0,25(2)=8,5\). Variance \(=4(1+0,5^2)=5\).
7. \(\phi(B)\Phi(B^s)(1-B)^d(1-B^s)^D Y_t=c+\theta(B)\Theta(B^s)\varepsilon_t\). d est la différence non saisonnière, D la différence saisonnière.
8. \(\ell_t=0,25(14)+0,75(10)=11\). Prévision suivante = 11.
9. ETS représente erreur/tendance/saison dans une structure de lissage, ARIMA modélise dynamique linéaire après différenciation. Le naïf saisonnier est une référence pour vérifier le gain réel.
10. Les erreurs ARIMA représentent l'autocorrélation résiduelle et améliorent l'inférence/prévision. Les X futurs doivent être connus, prévus ou scénarisés à la date de prévision.
11. Fréquence \(=1/4=0,25\) cycle par observation ; Nyquist \(=0,5\) cycle par observation.
12. Les valeurs propres de la matrice compagnon sont à l'intérieur du cercle unité. \(\Delta Y_t=\Pi Y_{t-1}+\sum_i\Gamma_i\Delta Y_{t-i}+u_t\), \(\Pi=\alpha\beta'\).
13. \(0,1+0,2(2^2)+0,7(1)=1,6\).
14. \(\omega/(1-\alpha-\beta)=0,1/(0,1)=1\). Persistance élevée : chocs de variance décroissent lentement. Sous innovations gaussiennes, \(3\alpha^2+2\alpha\beta+\beta^2<1\) est la condition usuelle de quatrième moment fini.
15. Innovation \(v=2\), \(F=1+1=2\), gain \(K=1/2\), moyenne filtrée \(=0+0,5(2)=1\), variance filtrée \(=(1-0,5)1=0,5\).
16. Filtrage utilise observations jusqu'à t ; lissage utilise aussi des observations futures pour l'état passé ; prévision projette au-delà de la dernière observation.
17. Réestimer à plusieurs origines avec uniquement données passées, prédire les horizons futurs et agréger les erreurs. Split aléatoire mélange passé et futur et peut faire fuiter la structure.
18. Erreurs absolues 1 et 2 : MAE \(=1,5\). RMSE \(=\sqrt{(1+4)/2}=\sqrt{2,5}\approx1,5811\).
19. Couverture mesure la fréquence de capture ; largeur mesure la précision. Un intervalle très large peut atteindre une bonne couverture sans être utile.
20. Définir exposition et fréquence, contrôler les changements de portefeuille, établir naïf et saisonnier naïf, comparer ETS/SARIMA/état-espace, valider par origine roulante, évaluer plusieurs horizons et intervalles, diagnostiquer les résidus, documenter ruptures et suivre la performance.

## Critères de réussite

Seuil indicatif : 70/100. Les erreurs sur stationnarité, fuite temporelle, variance conditionnelle, interprétation de Granger ou distinction filtrage/lissage imposent une reprise ciblée. Le sujet doit être testé auprès d'apprenants avant stabilisation.
