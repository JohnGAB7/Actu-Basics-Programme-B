# B08 — Revue interne mathématique et pédagogique

**Version :** 0.1 · 21 novembre 2026  
**Nature :** première passe interne assistée par IA, non indépendante et non certifiante.

## Couverture
P01 : espaces, axiomes et dénombrement. P02–P03 : conditionnement, Bayes, indépendance et indépendance conditionnelle. P04–P05 : variables discrètes et continues, lois usuelles et moments. P06–P08 : transformations, convolution, lois conjointes et espérance conditionnelle. P09–P10 : inégalités, convergence, LLN et TCL.

## Contrôles mathématiques à effectuer avant stabilisation
1. Recalculer les exemples d'union et vérifier les conditions de dénombrement.
2. Recalculer le cas de dépistage Bayes et la distinction sensibilité/valeur prédictive positive.
3. Construire un contre-exemple d'indépendance deux à deux sans indépendance mutuelle et vérifier l'exemple covariance nulle.
4. Vérifier supports, conventions et moments des lois géométrique, binomiale, hypergéométrique et Poisson.
5. Vérifier les densités, fonctions de répartition et moments des lois uniformes, exponentielles et normales.
6. Vérifier Jacobien, branches inverses, convolution et domaine de finitude des fonctions génératrices.
7. Vérifier marginalisation, covariance, corrélation et variance d'une somme.
8. Préciser la définition de l'espérance conditionnelle dans les cas discrets et son extension à une tribu.
9. Vérifier les hypothèses exactes de Markov, Tchebychev, Jensen et les implications entre modes de convergence.
10. Distinguer loi faible et loi forte des grands nombres, puis énoncer le TCL avec les hypothèses et la normalisation exactes.

## Points à approfondir
- Ajouter une introduction rigoureuse aux espaces probabilisés et aux tribus, sans surcharger le socle initial.
- Développer davantage les preuves de Bayes, des lois de convolution, de variance totale, de Tchebychev et du TCL.
- Ajouter les lois Gamma, Beta, chi-deux, Student et multinomiale, avec leur rôle et les paramètres clairement définis.
- Ajouter des simulations reproductibles Python/R : loi des grands nombres, TCL, Monte Carlo, indépendance et paradoxe des taux de base.
- Distinguer soigneusement les variables indépendantes, non corrélées et conditionnellement indépendantes.
- Documenter les hypothèses d'intégrabilité, existence des moments et cas limites.

## Contrôles éditoriaux et techniques
Build TypeScript/Vite ; validation Markdown/KaTeX ; présence des dix unités dans le lecteur et le catalogue ; cohérence des prérequis et des liens ; tests clavier, lecteur d'écran et affichage mobile ; tests apprenants pour durée et difficulté.

## Statut
B08 est un premier ensemble de dix unités en revue interne. Cette revue ne constitue ni une validation académique indépendante ni une certification. Les preuves approfondies, les notebooks, les tests apprenants et la revue externe restent à conduire.
