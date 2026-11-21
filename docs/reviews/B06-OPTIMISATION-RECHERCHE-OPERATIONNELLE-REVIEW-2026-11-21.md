# B06 — Revue mathématique et pédagogique approfondie

**Date :** 21 novembre 2026  
**Version :** 0.2  
**Nature :** seconde passe interne assistée par IA ; elle ne constitue pas une revue académique indépendante ni une certification.

## Périmètre
Relecture des dix unités O01–O10, de la carte pédagogique et de l'évaluation transversale. Contrôles de cohérence des définitions, hypothèses, conventions, exemples calculés et implications algorithmiques. Les ajouts sont intégrés directement dans les leçons.

## Synthèse des consolidations

| Unité | Vérifications et compléments intégrés |
|---|---|
| O01 | Distinction faisabilité, non-bornitude et non-atteinte ; homogénéité dimensionnelle et existence d'un optimum en programmation linéaire. |
| O02 | Conditions Hessienne/convexité, distinction stricte convexité/unicité/existence et rôle de la compacité. |
| O03 | Base et dégénérescence, test du rapport minimum, cas non borné, phases I/II et règle anti-cyclage de Bland. |
| O04 | Identité de l'écart primal-dual, certificat d'optimalité, complémentarité et limites des prix d'ombre. |
| O05 | Hypothèses de Dijkstra et Bellman–Ford, certificat flot/coupe et justification de l'intégralité par unimodularité totale. |
| O06 | Sens des bornes pour maximisation/minimisation, incumbent, gap, arrêt avec limite de temps et validité des coupes. |
| O07 | Gradient Lipschitz, pas admissible, conditionnement, limites de Newton et stratégies de globalisation. |
| O08 | LICQ, Slater, portée des KKT et contre-exemple explicite d'un optimum qui ne satisfait pas KKT faute de qualification. |
| O09 | Définition de l'opérateur proximal, seuillage doux, projection sur le disque et interprétation des résidus. |
| O10 | Contrepartie robuste d'une incertitude en boîte, limites de l'ensemble d'incertitude et frontière de Pareto. |

## Contrôles numériques de l'évaluation

1. **Formulation :** modèle max $3x+5y$ sous $x+2y\le8$, $3x+2y\le12$, $x,y\ge0$. L'intersection des deux contraintes actives est $(2,3)$ et donne 21 ; les autres sommets donnent une valeur inférieure.
2. **Convexité :** Hessienne de $x^2+4y^2$ égale à $\operatorname{diag}(2,8)$, définie positive ; minimiseur unique $(0,0)$.
3. **PL :** sommets pertinents $(0,0),(2,0),(0,3),(2,2),(1,3)$ ; valeurs $0,6,6,10,9$ ; optimum 10 en $(2,2)$.
4. **Dualité :** $(u,v,w)=(2,1,0)$ est dualement réalisable, objectif 10 ; il égale la valeur primale.
5. **Sensibilité :** interprétation du prix d'ombre explicitement limitée à la région de stabilité de la base.
6. **Flot :** flot 5 et coupe de capacité 5 ; certificat conforme au théorème flot maximum–coupe minimum.
7. **Entier :** relaxation en $(4/3,4/3)$, valeur $20/3$ ; objectif entier et borne supérieure impliquent une valeur entière au plus 6 ; $(2,0)$ atteint 6.
8. **Gradient :** pour $f(x)=(x-3)^2$, $x_0=4$, $\alpha=1/2$, l'étape donne $x_1=3$.
9. **KKT :** $x^*=1$, $\lambda=2$ avec $g(x)=x-1\le0$ ; stationnarité, faisabilité et complémentarité vérifiées.
10. **Robustesse :** couvrir toute demande dans $[8,12]$ impose une capacité de 12, contre 8 pour le scénario nominal minimal.

## Cohérence inter-unités

- La convention KKT est homogène avec B05 : minimisation, $g_i\le0$, multiplicateurs non négatifs.
- La dualité linéaire (O04) est distinguée des multiplicateurs KKT non linéaires (O08).
- Les certificats exacts (primal-dual, flot-coupe, borne entière) sont distingués des critères numériques de terminaison.
- La robustesse déterministe n'est pas confondue avec l'optimisation stochastique ; les approfondissements probabilistes sont renvoyés à B08.
- Les solveurs sont présentés comme outils d'exécution et non comme substituts à la formulation et aux preuves.

## Points non clôturés

1. Développer un tableau du simplexe complet avec toutes les conventions de coûts réduits, phase I/II et exemple de pivot calculé.
2. Ajouter des démonstrations plus détaillées de dualité forte, d'intégralité des réseaux et des taux de convergence.
3. Créer et exécuter des notebooks Python/R/Excel reproductibles avec plusieurs solveurs et jeux de données.
4. Vérifier les références au niveau des chapitres, sections et théorèmes réellement consultés.
5. Tester rendu, accessibilité clavier/lecteur d'écran, liens et compréhension auprès d'apprenants.
6. Faire réaliser une revue mathématique indépendante avant toute prétention de validation académique ou certificative.

## Conclusion de revue interne

Les dix unités sont cohérentes dans leur architecture et les calculs de l'évaluation transversale ont été recalculés. Les compléments corrigent plusieurs lacunes de précision et rendent les hypothèses plus visibles. Le bloc demeure en **consolidation pédagogique** : cette revue interne assistée par IA ne remplace ni l'expertise indépendante, ni l'exécution des ateliers, ni les tests apprenants.
