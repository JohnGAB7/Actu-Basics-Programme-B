# F07 — Fonctions et relations mathématiques

## Objectifs
Distinguer relation et fonction, déterminer domaine et image, calculer images et antécédents, étudier des fonctions usuelles, comprendre variations, composition et réciproque.

## 1. Relation et fonction
Une relation associe des éléments de deux ensembles. Une fonction f:A→B associe à chaque x de A exactement une valeur f(x) dans B. Le domaine est l'ensemble des entrées ; le codomaine est l'ensemble d'arrivée ; l'image est l'ensemble des valeurs effectivement prises. Un antécédent de y est un x tel que f(x)=y.

Une fonction peut avoir plusieurs antécédents pour une valeur, mais une entrée ne peut pas avoir deux sorties différentes.

## 2. Notation et domaine
Si f(x)=2x²−3, alors f(2)=5. Résoudre f(x)=5 revient à chercher les antécédents de 5, ici x=−2 ou 2.
Restrictions usuelles : dénominateur non nul ; argument d'une racine carrée réelle positif ou nul ; argument d'un logarithme strictement positif.
Exemples : 1/(x−2) est défini sur R privé de 2 ; √(x+1) sur [−1,+∞[ ; ln(3−x) sur ]−∞,3[.

## 3. Fonctions usuelles
Constante c ; affine ax+b ; carré x² ; inverse 1/x ; racine √x ; exponentielle e^x ; logarithme ln x. Une fonction affine n'est proportionnelle que si son terme constant est nul.

## 4. Variations, zéros et signe
Une fonction est croissante si x1≤x2 implique f(x1)≤f(x2). Un zéro résout f(x)=0. Les variations et le signe décrivent le comportement du modèle. Un graphique aide à conjecturer, mais une preuve peut être nécessaire.

## 5. Composition et réciproque
(g∘f)(x)=g(f(x)) lorsque f(x) appartient au domaine de g. L'ordre compte en général. Une fonction possède une réciproque si elle est bijective entre le domaine considéré et son image. Une fonction strictement monotone sur un intervalle est injective sur cet intervalle.

## 6. Modélisation
Une prime en fonction de l'âge peut être notée P(a). Le modèle doit préciser domaine d'âge, unités, hypothèses, forme fonctionnelle et interprétation des paramètres. Une association statistique ne prouve pas une causalité.

## 7. Atelier logiciel
Python : définir def f(x): return 2*x**2−3 puis évaluer une liste de valeurs.
R : définir f <- function(x) 2*x^2−3 ; utiliser seq pour générer les abscisses et plot pour tracer.
Excel : créer une colonne d'entrées, calculer les sorties dans une autre colonne et produire un nuage de points XY.
VBA : une fonction dédiée retourne 2*x^2−3 et peut être appelée dans une cellule.

## 8. Exercices corrigés
1. Domaine de 1/(x+4) : R privé de −4.
2. Domaine de ln(2x−6) : x>3.
3. Si f(x)=3x−2, f(5)=13.
4. Résoudre f(x)=10 : x=4.
5. y²=x définit-il y comme fonction de x sur R ? Non : pour x>0 deux valeurs y=±√x. En revanche x=y² définit x comme fonction de y.

## Maîtrise attendue
Déterminer les domaines avant le calcul, distinguer image et antécédent, composer correctement et interpréter une fonction comme modèle soumis à des hypothèses.

## Références
- OpenStax Algebra and Trigonometry 2e : https://openstax.org/details/books/algebra-and-trigonometry-2e
- MIT OpenCourseWare Mathematics : https://ocw.mit.edu/
