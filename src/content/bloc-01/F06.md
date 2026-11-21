# F06 — Équations, inéquations et systèmes

## Objectifs
Définir une solution, résoudre équations linéaires et quadratiques simples, traiter les inéquations, résoudre des systèmes linéaires et vérifier l'admissibilité des solutions.

## 1. Équation et équivalence
Résoudre une équation consiste à déterminer les valeurs qui rendent l'égalité vraie. Une transformation équivalente conserve le même ensemble solution. On peut ajouter ou soustraire la même quantité aux deux membres ; multiplier ou diviser par une quantité non nulle. Diviser par une expression variable exige d'étudier les cas où elle s'annule.

## 2. Équations linéaires
ax+b=c. Si a≠0, x=(c−b)/a. Si a=0, l'équation est impossible ou vraie pour tout réel selon les constantes. Exemple : 3x−7=11 donne x=6.

## 3. Second degré
Pour ax²+bx+c=0 avec a≠0, le discriminant Δ=b²−4ac. Si Δ>0, deux racines réelles distinctes ; Δ=0, une racine double ; Δ<0, aucune racine réelle. Les racines sont (−b±√Δ)/(2a). Exemple : x²−5x+6=(x−2)(x−3), donc x=2 ou 3.

## 4. Inéquations
Ajouter ou soustraire conserve le sens. Multiplier ou diviser par un nombre strictement négatif inverse le sens. Exemple : −2x+4>10 conduit à −2x>6 puis x<−3. Pour une inéquation quadratique, étudier les racines et le signe des facteurs.

## 5. Systèmes linéaires
Un système peut avoir une solution unique, aucune solution ou une infinité. Méthodes : substitution, élimination, représentation graphique. Exemple : x+y=10 et 2x−y=2 ; additionner donne 3x=12, donc x=4 et y=6.

## 6. Contraintes et interprétation
Une solution mathématique peut être inadmissible dans le problème : quantité négative, probabilité hors de [0,1], durée négative, nombre de personnes non entier. Intersecter l'ensemble solution avec le domaine admissible.

## 7. Atelier logiciel
Python/SymPy : solve(3*x−7−11,x), solve(x**2−5*x+6,x), solve([x+y−10,2*x−y−2],[x,y]).
R : calculer la solution linéaire directement ; polyroot(c(6,−5,1)) renvoie les racines du polynôme.
Excel : valeur cible pour une équation numérique ; Solveur pour des modèles avec contraintes. Vérifier convergence et hypothèses.
VBA : une fonction pour ax+b=0 doit traiter a=0 et distinguer absence de solution et infinité de solutions.

## 8. Exercices corrigés
1. 5x+2=17 : x=3.
2. x²−9=0 : x=−3 ou x=3.
3. 4−3x≤10 : x≥−2.
4. x+y=7 et x−y=1 : x=4, y=3.
5. C(q)=100+8q et budget 260 : q≤20 ; si q entier et non négatif, q∈{0,…,20}.

## Maîtrise attendue
Identifier les transformations équivalentes, vérifier les solutions dans l'énoncé initial, traiter les cas particuliers, inverser le sens d'une inégalité à bon escient et interpréter les contraintes.

## Références
- OpenStax Elementary Algebra 2e : https://openstax.org/details/books/elementary-algebra-2e
- Khan Academy Algebra : https://www.khanacademy.org/math/algebra
