# B09 — Revue interne mathématique et pédagogique

**Version :** 0.1 · 21 novembre 2026  
**Nature :** première passe interne assistée par IA, non indépendante et non certifiante.

## Couverture
S01 : processus, indices, trajectoires et stationnarité. S02–S05 : chaînes de Markov discrètes, classification, distributions stationnaires et absorption. S06–S07 : Poisson et renouvellement. S08 : martingales et temps d'arrêt. S09 : chaînes continues et files M/M/1. S10 : mouvement brownien et processus gaussiens.

## Contrôles mathématiques à effectuer avant stabilisation
1. Vérifier les distinctions stationnarité stricte/faible et les hypothèses des distributions finies.
2. Recalculer Pⁿ et les distributions de S02 ; contrôler l'orientation vecteur ligne/colonne.
3. Vérifier classification, récurrence positive et périodicité dans les cas finis et dénombrables.
4. Vérifier les hypothèses de convergence vers une distribution stationnaire et d'équilibre détaillé.
5. Vérifier la forme canonique des chaînes absorbantes, la matrice fondamentale et les interprétations de NR et N1.
6. Vérifier les lois de comptage, temps inter-arrivées, superposition et amincissement du processus de Poisson.
7. Préciser les hypothèses i.i.d., positivité et intégrabilité des théorèmes de renouvellement et de récompense.
8. Vérifier filtration, adaptation, intégrabilité, temps d'arrêt et conditions exactes d'arrêt optionnel.
9. Vérifier la matrice génératrice, les équations de Kolmogorov et les formules de stabilité M/M/1.
10. Vérifier covariance, échelle, principe de réflexion et variation quadratique du brownien.

## Points à approfondir
- Ajouter preuves détaillées des théorèmes de convergence des chaînes, du renouvellement et de l'arrêt optionnel.
- Ajouter exemples de chaînes irréductibles périodiques, récurrentes nulles et transientes sur espaces infinis.
- Ajouter simulation de Poisson, chaînes de Markov, files M/M/1 et brownien avec tests reproductibles.
- Développer chaînes de naissance-mort, processus de branchement, files M/M/c, réseaux de files et processus de Markov cachés.
- Introduire plus rigoureusement les filtrations continues, les temps d'arrêt continus et les hypothèses de construction brownienne.
- Le calcul d'Itô, les équations différentielles stochastiques, les martingales continues et les grandes déviations restent hors du socle de ce bloc et seront traités comme prolongements.

## Contrôles éditoriaux et techniques
Build TypeScript/Vite ; validation Markdown/KaTeX ; présence des dix unités dans le lecteur ; cohérence du catalogue et des prérequis ; tests clavier, lecteur d'écran et mobile ; tests apprenants.

## Statut
B09 constitue un premier ensemble cohérent de dix unités en revue interne. La revue est assistée par IA et n'est pas indépendante ; elle ne constitue ni certification ni accréditation. Les preuves approfondies, notebooks, tests apprenants et revue externe restent à conduire.
