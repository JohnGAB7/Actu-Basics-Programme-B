# B06 — Revue interne mathématique et pédagogique

**Version :** 0.1 · 21 novembre 2026  
**Nature :** première passe interne assistée par IA, non indépendante et non certifiante.

## Couverture et progression
- O01 formule les variables, domaines, contraintes, objectif et diagnostics de faisabilité.
- O02 établit les propriétés de convexité et les garanties d'optimalité globale.
- O03–O04 couvrent la programmation linéaire, les bases, le simplexe, la dualité, la complémentarité et la sensibilité.
- O05 introduit les modèles de réseau et les certificats flot/coupe.
- O06 sépare relaxation linéaire, solution entière, borne, branch-and-bound et heuristique.
- O07–O09 traitent les méthodes différentiables, KKT et algorithmes convexes.
- O10 distingue analyse de sensibilité, robustesse déterministe et optimisation stochastique.

## Contrôles mathématiques effectués
1. Recalcul des sommets et objectifs de l'exemple de mix de production O01 : intersection $(2,3)$ et valeur 21.
2. Vérification des valeurs des sommets de l'exemple de simplexe O03 : optimum $(2,2)$, valeur 10.
3. Vérification du dual O04 : $(u,v,w)=(2,1,0)$ est réalisable, valeur 10, égale au primal.
4. Vérification de la coupe et du flot O05 : valeur 5.
5. Vérification de la relaxation O06 : $(4/3,4/3)$, objectif $20/3$ ; la borne entière donne au plus 6, atteint en $(2,0)$.
6. Vérification des étapes de gradient O07 et des multiplicateurs KKT O08.
7. Vérification des conventions de signe du lagrangien pour les contraintes $g_i\le0$ en minimisation.
8. Distinction explicite entre optimalité globale convexe, conditions KKT nécessaires sous qualification et heuristiques sans certificat.

## Points à approfondir avant stabilisation
1. O03 : développer un tableau complet du simplexe avec pivot, coûts réduits, phase I/II, dégénérescence et règle anti-cyclage.
2. O04 : ajouter les preuves détaillées de dualité faible/forte et des conditions de complémentarité ; documenter les intervalles de sensibilité.
3. O05 : donner un exemple de flot de coût minimum et les hypothèses algorithmiques précises ; développer la preuve d'intégralité via unimodularité totale.
4. O06 : développer les coupes valides, la qualité des bornes, les écarts d'optimalité et les formulations fortes.
5. O07–O09 : expliciter les hypothèses de convergence, les conditions de Wolfe/Armijo, la convergence des méthodes de gradient projeté et les critères de terminaison.
6. O08 : distinguer plus précisément LICQ, MFCQ et Slater ; inclure des exemples où KKT échoue faute de qualification.
7. O10 : préciser la dualisation de contraintes robustes pour des ensembles d'incertitude polyédriques/ellipsoïdaux ; les modèles stochastiques avancés attendent B08.
8. Ajouter des notebooks reproductibles (Python/R) avec comparaison de solveurs, sans laisser les logiciels remplacer les arguments mathématiques.

## Vérifications éditoriales et techniques
- Vérifier chaque calcul et chaque domaine dans une seconde passe indépendante.
- Ajouter les références exactes par chapitre, section et théorème effectivement consultés.
- Tester le rendu Markdown/KaTeX, les liens, les lecteurs d'écran et l'accessibilité clavier.
- Tester les exercices auprès d'apprenants ; calibrer la durée et les niveaux.
- Séparer clairement les contenus de niveau introductif, intermédiaire et avancé.

## Statut
Les dix unités forment un premier ensemble structuré. Cette revue interne ne constitue ni une revue académique indépendante, ni une certification, ni une accréditation. Les contrôles externes et tests apprenants restent requis.
