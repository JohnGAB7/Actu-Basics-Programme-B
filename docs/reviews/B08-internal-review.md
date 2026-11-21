# B08 — Revue interne mathématique et pédagogique

**Version :** 0.2 · 21 novembre 2026  
**Nature :** seconde passe interne assistée par IA, non indépendante et non certifiante. La première passe est conservée ci-dessous comme historique.

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


## Seconde passe interne — consolidation mathématique (21 novembre 2026)

**Version :** 0.2 · **Nature :** revue interne assistée par IA, non indépendante et non certifiante.

### Corrections et approfondissements intégrés sur la branche de consolidation

- P01 : définition explicite de l'espace probabilisé $(\Omega,\mathcal F,P)$, propriétés d'une tribu, σ-additivité, sous-additivité et continuité des mesures.
- P02 : conditions sur les partitions, cas des événements de probabilité nulle, lecture des arbres et recalcul du test diagnostique (valeur prédictive positive ≈ 8,76 %).
- P03 : contre-exemple explicite d'indépendance deux à deux sans indépendance mutuelle ; conditions d'existence de la covariance.
- P04 : formules et conventions des lois de Bernoulli, binomiale, géométrique, hypergéométrique et Poisson ; ajout de la binomiale négative et de la multinomiale.
- P05 : paramétrisation forme–taux de Gamma, loi Bêta, Khi-deux et Student avec leurs moments et restrictions.
- P06 : formule de transformation non injective, somme sur les branches inverses, jacobien et domaine de finitude de la fonction génératrice des moments.
- P07 : marginales et conditionnelles continues, Cauchy–Schwarz, matrice de covariance et loi normale multivariée.
- P08 : définition de l'espérance conditionnelle par rapport à une tribu, égalité presque sûre, projection $L^2$ et hypothèses de la variance totale.
- P09 : Cauchy–Schwarz, Borel–Cantelli, Jensen conditionnelle et justifications de Markov/Tchebychev ; implications de convergence précisées.
- P10 : versions i.i.d. intégrables de la loi faible et de la loi forte ; TCL de Lindeberg–Lévy et esquisse par fonctions caractéristiques.

### Contrôle des calculs et cohérence

- Test diagnostique : $0,95\times0,01+0,10\times0,99=0,1085$ ; valeur prédictive positive $0,0095/0,1085\approx0,08756$.
- Contre-exemple de P03 : les trois événements sont indépendants deux à deux mais leur intersection triple vaut $1/4$, et non $1/8$.
- Hypergéométrique : la variance inclut la correction de population finie $(N-n)/(N-1)$.
- P10 : la preuve de la loi faible par Tchebychev est explicitement limitée au cas de variance finie ; l'énoncé i.i.d. intégrable est distingué de cette preuve.
- Évaluation : les dix résultats numériques ont été recalculés ; la correction précise que l'approximation normale à $n=144$ dépend de la loi et ne constitue pas une garantie universelle.

### Références — correction nécessaire

La référence « MIT OCW 18.330 » précédemment indiquée dans P09 est incorrecte pour les probabilités : le cours MIT 18.330 porte sur l'analyse numérique. Elle est retirée de la bibliographie de P09 et remplacée par la synthèse Harvard Statistics 110, qui couvre explicitement les inégalités, l'espérance conditionnelle, les lois usuelles et les théorèmes limites. Les sources de cadrage S46–S49 restent des références, pas une approbation institutionnelle.

### Limites et travaux restants

1. Produire des démonstrations complètes et relues indépendamment pour les résultats de convergence ; l'esquisse du TCL n'est pas une preuve complète.
2. Ajouter des séries d'exercices gradués avec corrigés détaillés, et non seulement des réponses condensées.
3. Construire et exécuter des notebooks Python/R pour simulations de Bayes, indépendance, lois, Monte-Carlo, LLN et TCL.
4. Vérifier indépendamment chaque calcul, chaque formule et les domaines de convergence des fonctions génératrices.
5. Vérifier les liens bibliographiques et relier les sections précises aux sources.
6. Tester le rendu, l'accessibilité, la navigation, le responsive et les parcours d'apprentissage.
7. Faire tester la durée, la difficulté et la compréhension auprès d'apprenants.
8. Obtenir une revue mathématique humaine indépendante avant toute prétention de validation académique.

**Conclusion :** le contenu a reçu une seconde passe interne substantielle et les points ci-dessus sont documentés. Il reste en consolidation pédagogique ; cette revue ne vaut ni test apprenant, ni revue externe, ni certification.
