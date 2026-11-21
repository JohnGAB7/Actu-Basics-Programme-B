# F01 — Nombres, ensembles et systèmes de numération

## Objectifs
Classer les nombres dans les ensembles usuels ; manipuler ensembles et intervalles ; comprendre la valeur absolue ; décoder les systèmes positionnels ; distinguer exactitude et approximation ; comprendre les limites des nombres en virgule flottante.

## 1. Ensembles de nombres
Convention de ce cours : N = {0,1,2,…}. Z désigne les entiers relatifs. Q désigne les rationnels, nombres écrits p/q avec p et q entiers et q non nul. R désigne les réels, rationnels et irrationnels. C désigne les complexes a+bi, avec i² = −1. Les inclusions sont N ⊂ Z ⊂ Q ⊂ R ⊂ C.

Un rationnel possède une écriture décimale finie ou périodique : 3/8 = 0,375 ; 1/3 = 0,333… Des nombres tels que √2 et π sont irrationnels. Attention : certaines conventions excluent zéro de N ; il faut annoncer la convention.

## 2. Ensembles et intervalles
Les symboles x ∈ A, A ⊆ B, A ∪ B, A ∩ B et A \\ B désignent respectivement appartenance, inclusion, union, intersection et différence. Les intervalles [a,b], ]a,b[, [a,b[ et ]a,b] précisent si les bornes sont incluses. Les intervalles non bornés utilisent ±∞, qui ne sont jamais des éléments réels.

La valeur absolue est une distance à zéro : |x| = x si x ≥ 0, et |x| = −x si x < 0. La distance entre x et y est |x−y|. Ainsi |x−5|<2 équivaut à 3<x<7.

## 3. Systèmes de numération
Dans une base b, les chiffres vont de 0 à b−1. Une écriture positionnelle est une somme de chiffres multipliés par des puissances de b. Par exemple 472 en base 10 vaut 4×10²+7×10+2. En base 2, 101101₂ vaut 32+8+4+1=45 en base 10. En base 16, les symboles A à F représentent 10 à 15.

## 4. Exactitude et approximation
1/3 et √2 sont des valeurs exactes ; 0,3333 et 1,4142 sont des approximations. L'arrondi dépend de la précision et de la convention. Les ordinateurs utilisent une représentation finie des nombres ; certains décimaux, comme 0,1, n'ont pas de représentation binaire finie exacte. Pour comparer des résultats approchés, utiliser une tolérance justifiée plutôt qu'une égalité stricte.

## 5. Exemples résolus
- −7 appartient à Z, Q et R ; 0,125=1/8 appartient à Q ; √5 est irrationnel ; 2−3i appartient à C.
- Si A=[−2,4[ et B=]1,5], alors A∩B=]1,4[ et A∪B=[−2,5].
- |x−3|=4 donne x=7 ou x=−1.
- 11010₂ = 16+8+2 = 26.

## 6. Applications
Les entiers comptent des événements ; les rationnels décrivent des taux ; les réels représentent montants et mesures ; les intervalles définissent des domaines admissibles. Les erreurs d'arrondi comptent dans les algorithmes itératifs et les calculs sur de grands volumes.

## 7. Atelier logiciel
Python : utiliser fractions.Fraction pour représenter exactement 1/3 ; utiliser math.isclose pour comparer des flottants avec tolérance ; int("101101", 2) convertit le binaire.
R : strtoi("101101", base=2) convertit le binaire ; all.equal compare des résultats numériques avec tolérance.
Excel : DECIMAL("101101",2) convertit le binaire en décimal et BASE(45,2) fait l'inverse dans les versions qui prennent en charge ces fonctions.
VBA : une conversion positionnelle peut être programmée en accumulant result = result*2 + chiffre ; valider les caractères et contrôler les dépassements.

## 8. Exercices corrigés
1. Classer 0, −4, 5/2, √9, √7. Réponse : N, Z, Q, N, R\\Q respectivement.
2. Convertir 11010₂. Réponse : 26.
3. Résoudre |x+2|≤3. Réponse : −5≤x≤1.
4. Déterminer [−1,3]∩]2,5]. Réponse : ]2,3].

## Maîtrise attendue
Justifier les appartenances, manipuler les intervalles, convertir les bases usuelles, distinguer exactitude et approximation et expliquer les écarts d'arrondi informatique.

## Références
- OpenStax, Prealgebra 2e : https://openstax.org/details/books/prealgebra-2e
- Python fractions : https://docs.python.org/3/library/fractions.html
- Python math.isclose : https://docs.python.org/3/library/math.html#math.isclose
