# B05 — Revue interne du calcul multivarié et des équations différentielles

**Date :** 21 novembre 2026  
**Périmètre :** M01 à M10, carte pédagogique B05 et évaluation transversale.  
**Statut éditorial :** revue interne effectuée — consolidation pédagogique en cours.  
**Nature :** contrôle interne assisté par IA. Ce document ne constitue pas une expertise académique indépendante, une certification ou une accréditation.

## Méthode et limites

La revue a porté sur la progression, les prérequis, les définitions, les hypothèses des théorèmes, les conventions de signe et d'orientation, les exemples et les corrigés disponibles. Les calculs présents dans l'évaluation transversale et les exemples représentatifs ont été recalculés. Les modifications ci-dessous ont été apportées aux leçons elles-mêmes. Cette passe n'équivaut pas à une relecture ligne par ligne indépendante de chaque preuve par un spécialiste, à l'exécution de notebooks ou à des tests auprès d'apprenants.

## Résultats par unité

| Unité | Contrôles et constats | Corrections / consolidation apportées et travaux restants |
|---|---|---|
| M01 — Fonctions de plusieurs variables | Domaines, graphes, courbes de niveau et exemples de limites multivariées cohérents. Les deux chemins distincts démontrent correctement la non-existence de la limite de xy/(x²+y²). | Précision ajoutée : un chemin unique ne prouve pas l'existence d'une limite ; il faut contrôler toutes les approches. La régularité C¹ par morceaux est précisée pour la formule de longueur d'une courbe. Développer davantage les preuves de limites par encadrement et coordonnées polaires. |
| M02 — Dérivées partielles et différentiabilité | Calcul des dérivées partielles, définition par approximation linéaire, contre-exemple montrant que les dérivées partielles à un point ne suffisent pas, et plan tangent cohérents. | Réparation de séquences littérales \n qui apparaissaient dans le corps de la leçon au lieu de véritables sauts de ligne. Ajouter des preuves complètes de critères suffisants de différentiabilité et des exemples de fonctions à dérivées partielles discontinues. |
| M03 — Gradient, chaîne et Jacobien | Gradient, dérivée directionnelle selon un vecteur unitaire, ordre de composition des Jacobiennes et exemple matriciel cohérents. | Distinction ajoutée entre le déterminant signé (orientation) et sa valeur absolue (facteur local de volume). Le cas singulier où le déterminant est nul est explicité. Ajouter des exemples complets de composition de plusieurs applications. |
| M04 — Hessienne et extrema libres | Taylor à l'ordre deux, symétrie de la Hessienne sous continuité des dérivées secondes et critères de classification cohérents. Les exemples de minimum et de selle sont exacts. | Hypothèse de régularité C² et point critique explicités pour le test du second ordre ; le cas semi-défini est déclaré non concluant. Ajouter des preuves et davantage d'exemples où les termes d'ordre supérieur décident. |
| M05 — Optimisation sous contraintes | Formulation du problème, multiplicateurs de Lagrange, examen des frontières et distinction entre condition nécessaire et optimum global cohérents. Les exemples xy sous contrainte affine ont été recalculés. | Convention KKT désormais explicite pour une minimisation avec g_i≤0 : lagrangien, signe des multiplicateurs, faisabilité, stationnarité et complémentarité. Qualifications des contraintes et suffisance en cadre convexe précisées. Développer les exemples avec contraintes actives et qualifications qui échouent. |
| M06 — Intégrales multiples et changements de variables | Intégrales itérées, polaires, cylindriques et sphériques ; Jacobien et exemples d'aire et de masse cohérents. Les intégrales de l'évaluation ont été recalculées. | Hypothèses de Fubini et Tonelli distinguées ; hypothèses usuelles du changement de variables (régularité, bijectivité et Jacobien non nul hors frontières négligeables) précisées. Ajouter des exemples détaillés de domaines non rectangulaires et de transformations non linéaires. |
| M07 — Champs vectoriels et théorèmes intégraux | Divergence, rotationnel, circulation, potentiel et exemples de Green/Stokes/Gauss cohérents ; le rotationnel scalaire Q_x−P_y est correctement utilisé en dimension deux. | Hypothèses géométriques et orientations précisées : Green positif, orientation induite et règle de la main droite pour Stokes, normale extérieure pour Gauss. Ajouter des calculs complets de circulation et de flux. |
| M08 — EDO du premier ordre | Séparation, facteur intégrant, condition initiale, équilibres et exemples exponentiel/logistique cohérents. | Critère local scalaire f'(y*)<0 / f'(y*)>0 ajouté, avec mention du cas non concluant f'(y*)=0. Développer les théorèmes d'existence-unicité et les intervalles maximaux de solution. |
| M09 — EDO du second ordre et systèmes | Équation caractéristique, racines réelles, doubles et complexes, solution particulière, oscillateur et modes propres cohérents. L'exemple avec second membre a été recalculé. | Notation de la partie réelle complexe α harmonisée ; saut de ligne littéral réparé. Critère de stabilité linéaire par parties réelles des valeurs propres précisé, avec réserve sur les cas non hyperboliques et non diagonalisables. Développer les résonances et les systèmes avec blocs de Jordan. |
| M10 — Méthodes numériques et analyse qualitative | Schéma d'Euler, calculs à un et deux pas, distinction erreur numérique / erreur de modèle et classification hyperbolique par Jacobien cohérents. | Domaine de stabilité absolue d'Euler explicite sur y' = −λy ajouté : |1−hλ|≤1, soit 0≤hλ≤2. Développer l'erreur globale, la convergence, les méthodes de Runge–Kutta et les solveurs adaptatifs. |

## Contrôle de l'évaluation transversale

Les dix questions ont été recalculées ou contrôlées sur leurs hypothèses :
- domaine du disque fermé et non-existence de la limite par deux chemins ;
- gradient (4,5) et plan tangent au point (1,2,7) ;
- dérivée directionnelle 18/5 pour le vecteur unitaire fourni ;
- classification Hessienne selle / minimum strict ;
- maximum 36 de xy sous x+y=12 et x,y≥0, frontières comprises ;
- intégrale double égale à 3 ;
- facteur polaire r et aire πR² ;
- divergence nulle et rotationnel scalaire égal à 2 pour F=(-y,x) ;
- solution y=2−e^(−2t) du problème initial ;
- première étape d'Euler 1,1 et modes e^(−t), e^(2t) pour les valeurs propres −1 et 2.

Le barème est cohérent comme évaluation formative de synthèse. Une épreuve de 120 minutes couvrant dix domaines très larges est toutefois une mesure de contrôle panoramique, pas une preuve de maîtrise approfondie de chaque compétence.

## Cohérence transversale

- M01–M03 prolongent les fonctions, limites, dérivées et matrices de B03–B04.
- M04–M05 mobilisent différentiabilité et algèbre linéaire pour l'optimisation.
- M06–M07 développent intégrales multiples et calcul vectoriel en conservant les conventions de Jacobien et d'orientation.
- M08–M10 construisent les modèles dynamiques, les systèmes linéaires et leurs approximations numériques.
- Les frontières sont maintenues : EDP et calcul des variations ne sont pas couverts ici ; les méthodes numériques avancées relèvent d'approfondissements ultérieurs.

## Décision éditoriale

Les dix unités M01–M10 ont fait l'objet d'une revue interne ; elles ne sont plus classées comme brouillons. Le statut indique que cette passe de cohérence est réalisée, et non que chaque preuve a reçu une validation académique indépendante.

**Statut retenu pour M01–M10 :** Revue interne effectuée · consolidation pédagogique en cours.

## Travaux restants

1. Relecture indépendante par un mathématicien des preuves et des corrigés.
2. Développement de solutions détaillées pour les exercices et ajout de contre-exemples.
3. Notebooks reproductibles pour gradient, optimisation, intégrales multiples, champs et EDO.
4. Exécution et archivage des ateliers Python/R annoncés.
5. Tests apprenants, révision des charges horaires et audit du rendu des formules.
6. Vérification des liens et des références précises par théorème et chapitre avant publication.
