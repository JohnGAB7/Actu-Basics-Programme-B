# F03 — Pourcentages, variations et indices

## Objectifs
Calculer et interpréter un pourcentage ; distinguer points de pourcentage et variation relative ; composer des évolutions ; retrouver une valeur initiale ; construire un indice et critiquer les comparaisons.

## 1. Pourcentages
p % = p/100. La partie correspondant à p % d'une valeur V est V×p/100. Si 18 dossiers sur 240 sont en anomalie, le taux est 7,5 %. Pour retrouver le total T lorsque P représente p %, calculer T=P/(p/100), si p est non nul.

## 2. Variation absolue et relative
Entre V0 et V1 : variation absolue Δ=V1−V0 ; taux relatif t=(V1−V0)/V0, si V0≠0. Une hausse de 80 à 100 vaut +20, soit +25 %. Passer de 12 % à 15 % représente +3 points de pourcentage, mais une hausse relative de 25 %.

## 3. Coefficients multiplicateurs
Une hausse de t (en proportion) correspond au coefficient 1+t ; une baisse au coefficient 1−t. Des évolutions successives se composent par multiplication. +10 % puis −10 % donne 1,10×0,90=0,99 : la baisse nette est de 1 %. Après une hausse de 20 %, retrouver la valeur initiale exige de diviser la valeur finale par 1,2, pas de lui retrancher 20 %.

## 4. Indices
Un indice base 100 à la période 0 vaut It=100×Vt/V0. Un indice 112 indique une valeur 12 % supérieure à la base, à définition constante. Changer la base b : nouvel indice = 100×ancien indice/indice à la période b. L'interprétation dépend du panier, des pondérations, de la période de base et de la méthode.

## 5. Pièges
Une variation dépend de sa base. Le taux relatif usuel n'est pas défini lorsque la valeur initiale est nulle. Des populations ou périodes différentes ne sont pas nécessairement comparables. Un taux agrégé peut masquer des différences entre segments. Une hausse du nombre de sinistres n'implique pas une hausse de fréquence si l'exposition augmente aussi.

## 6. Exemple
Un portefeuille passe de 2 000 à 2 300 contrats (+15 %), puis à 2 185 (−5 %). Le coefficient global vaut 1,15×0,95=1,0925 : hausse cumulée de 9,25 %. L'indice final base 100 vaut 109,25.

## 7. Atelier logiciel
Python : calculer taux=(final/initial−1)*100 ; indice=100*final/initial ; coefficient global=produit(1+taux_i).
R : 100*(final/initial−1) ; 100*final/initial ; 100*(prod(1+taux)−1).
Excel : variation = valeur_finale/valeur_initiale−1 ; indice =100*valeur_finale/valeur_initiale.
VBA : fonction de variation relative ; traiter explicitement le cas valeur initiale égale à zéro.

## 8. Exercices corrigés
1. 17 % de 640 : 108,8.
2. Prix de 50 à 44 : variation −6, taux −12 %.
3. Taux de 8 % à 10 % : +2 points ; hausse relative 25 %.
4. +5 % puis +8 % : 1,05×1,08=1,134, soit +13,4 %.
5. Indice 126 base 100 : niveau supérieur de 26 % à la base.

## Maîtrise attendue
Choisir la bonne base, composer les évolutions, distinguer points et pourcentages, et critiquer une comparaison dont le périmètre ou le dénominateur change.

## Références
- OpenStax Prealgebra 2e : https://openstax.org/details/books/prealgebra-2e
- Eurostat, Statistics Explained : https://ec.europa.eu/eurostat/statistics-explained/
