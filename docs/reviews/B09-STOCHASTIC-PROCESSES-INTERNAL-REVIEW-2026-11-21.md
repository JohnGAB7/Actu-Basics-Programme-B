# B09 — Revue interne mathématique et pédagogique

**Version :** 0.2 · 21 novembre 2026  
**Nature :** seconde passe interne assistée par IA ; revue non indépendante et non certifiante.

## Périmètre

Dix unités S01–S10 : processus stochastiques, chaînes de Markov à temps discret, classification des états, distributions stationnaires et réversibilité, chaînes absorbantes, processus de Poisson, renouvellement, martingales et temps d'arrêt, chaînes à temps continu et files M/M/1, mouvement brownien et processus gaussiens.

## Corrections et approfondissements intégrés

- **S01** — distinction entre processus, variable à date fixée et trajectoire ; cohérence des distributions finies ; distinction stationnarité stricte/faible et cas gaussien.
- **S02** — calcul explicite de P² pour la matrice de transition ; conventions vecteurs-lignes ; équations de premier pas avec conditions aux frontières et finitude des temps.
- **S03** — graphe des transitions, classes fortement connexes, fermeture, temps de premier retour et calcul de période.
- **S04** — séparation existence/unicité/convergence ; justification par point fixe pour une chaîne finie ; équilibre détaillé et temps moyen de retour.
- **S05** — rayon spectral de Q, série fondamentale, loi géométrique du temps d'absorption et variance.
- **S06** — caractérisation locale complète du processus de Poisson : P(N(h)=1)=λh+o(h), P(N(h)≥2)=o(h), P(N(h)=0)=1−λh+o(h) ; distinction taux/paramètre λt.
- **S07** — hypothèses explicites du théorème élémentaire de renouvellement et du théorème de récompense.
- **S08** — adaptation, intégrabilité, temps d'arrêt et conditions nécessaires à l'arrêt optionnel ; distinction temps d'atteinte / dernier instant de visite.
- **S09** — orientation des équations de Kolmogorov sous convention de vecteurs-lignes ; condition de stabilité M/M/1 ; loi stationnaire, nombre moyen en file et loi de Little.
- **S10** — mode de convergence de la variation quadratique, interprétation de la non-différentiabilité et formule d'Itô introductive.

## Contrôles de calcul ciblés

1. Pour P=[[0,8;0,2],[0,3;0,7]], P²=[[0,70;0,30],[0,45;0,55]].
2. La distribution stationnaire est π=(0,6;0,4) ; π_A p_AB=π_B p_BA=0,12.
3. Pour l'état transitoire qui reste avec probabilité q=0,75, T suit une géométrique sur {1,2,…}, E[T]=4 et Var(T)=12.
4. Pour λ=4 par heure et t=0,5 heure, P(N(t)=0)=e^-2 ; E[N(2)]=8 ; amincissement à p=0,25 donne le taux 1 par heure.
5. Pour une durée moyenne de renouvellement de 6 jours et une récompense moyenne de 30 par cycle, le taux de récompense est 5 par jour sous les hypothèses du théorème.
6. Pour M/M/1 avec λ=2 et μ=5, ρ=0,4, E[N]=2/3 et W=1/3 heure.
7. Pour un brownien standard, B₄~N(0,4), Var(B₄)=4 et Cov(B₂,B₄)=2.

## Limites et travaux restants

- Les démonstrations des théorèmes de Markov, renouvellement, arrêt optionnel, Kolmogorov et variation quadratique ne sont pas encore développées intégralement.
- Les conditions techniques pour chaînes dénombrables, explosion des processus à temps continu et générateurs non bornés doivent être traitées dans un cours avancé.
- Les références MIT sont des sources de cadrage ; les chapitres/sections précis et les liens doivent être vérifiés lors d'une revue bibliographique dédiée.
- Les notebooks Python/R, simulations et tests automatisés propres à B09 restent à produire.
- Les tests apprenants, l'audit visuel, responsive, clavier et lecteur d'écran doivent rester des étapes distinctes.
- Une revue académique humaine indépendante est nécessaire avant toute prétention de validation externe.

## Contrôle bibliographique ciblé

Les pages officielles MIT OCW ont été consultées pour vérifier l'adéquation des cours avec les unités :

- 18.445 (Spring 2015) couvre chaînes de Markov, marches aléatoires, martingales, processus de Poisson et chaînes à temps continu ; ses notes comprennent explicitement temps d'atteinte, arrêt optionnel et générateurs.
- 6.262 (Spring 2011) couvre processus de Poisson, chaînes de Markov finies/dénombrables, renouvellement, récompenses, martingales et processus de Markov.
- 15.070J (Fall 2013) couvre filtrations, martingales, théorèmes d'arrêt, mouvement brownien, intégration stochastique et calcul d'Itô.
- Correction bibliographique : ne pas citer 18.445 comme source principale du mouvement brownien ; S10 est désormais référencé à 15.070J.

Ces ressources sont des références de cadrage, pas une approbation institutionnelle de Programme B.

## Conclusion

La seconde passe renforce la précision des hypothèses, des notations et des calculs dans les dix unités et dans l'évaluation formative. B09 reste en consolidation pédagogique. Cette revue interne ne constitue ni une validation académique indépendante, ni une certification, ni une preuve de test apprenant.
