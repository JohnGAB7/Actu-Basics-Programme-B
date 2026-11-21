# F02 — Fractions, rapports et proportions

## Objectifs
Interpréter une fraction comme partage, quotient, opérateur et rapport ; effectuer les opérations ; comparer des rapports ; résoudre une proportion ; reconnaître les situations de proportionnalité et leurs limites.

## 1. Sens d'une fraction
a/b, avec b non nul, peut représenter un partage, un quotient, une partie d'un tout, un opérateur ou un rapport. Les fractions équivalentes vérifient a/b = ka/kb pour k non nul. Simplifier revient à diviser numérateur et dénominateur par un diviseur commun non nul.

## 2. Opérations
a/b+c/d=(ad+bc)/bd ; (a/b)(c/d)=ac/bd ; (a/b)/(c/d)=ad/bc. La division exige que le diviseur soit non nul. Pour additionner, ramener les fractions à un dénominateur commun. Exemple : 2/3+5/6=4/6+5/6=3/2.

## 3. Rapport, taux et proportion
Un rapport compare deux quantités. Avec 12 femmes et 8 hommes, femmes/hommes=12/8=3/2, alors que femmes/total=12/20=0,6. Le dénominateur détermine le sens. Un taux contextualise le rapport par une unité ou une période : km/h, sinistres par année d'exposition, euros par contrat.

Une proportion est une égalité de rapports a/b=c/d. Pour b et d non nuls, elle équivaut à ad=bc. Le produit en croix découle de la multiplication des deux membres par bd ; il ne s'applique pas arbitrairement à toute expression.

## 4. Proportionnalité
Directe : y=kx ; le quotient y/x est constant pour x non nul et le graphe passe par l'origine. Inverse : y=k/x ; le produit xy est constant, x non nul. Pour une distance fixe, le temps est inversement proportionnel à la vitesse si les conditions restent constantes.

Une relation inverse n'est pas simplement une corrélation négative. Un tarif C=5+2x n'est pas proportionnel à x, car il comporte une composante fixe.

## 5. Partage proportionnel
Pour répartir un total T selon les poids w1,…,wn, attribuer à i la quantité T×wi/(somme des poids). Exemple : 1 200 € selon 2:3:5 donne 240 €, 360 € et 600 €.

## 6. Exemples et applications
18 dossiers sur 30 représentent 60 %. Une recette pour 4 personnes demandant 300 g de farine nécessite 450 g pour 6 personnes. Quatre machines réalisant une tâche en 9 heures nécessitent théoriquement 6 heures avec six machines identiques, sous hypothèse de productivité constante.

En actuariat, la fréquence des sinistres est le nombre de sinistres divisé par l'exposition ; le coût moyen est la charge totale divisée par le nombre de sinistres. Ces indicateurs ne répondent pas à la même question. Il faut documenter numérateur, dénominateur, unité et période. Les petits dénominateurs rendent les ratios instables.

## 7. Atelier logiciel
Python : fractions.Fraction(18,30) conserve la fraction exacte ; un partage pondéré se calcule avec total*w/sum(weights).
R : part <- 18/30 ; total*c(2,3,5)/sum(c(2,3,5)).
Excel : formule de partage =total*poids/SOMME(plage_des_poids), avec référence absolue sur le total et la plage.
VBA : créer une fonction total*weight/totalWeight et lever une erreur si la somme des poids vaut zéro.

## 8. Exercices corrigés
1. Simplifier 42/56 : 3/4.
2. Calculer 5/8−1/6 : 11/24.
3. 84 représente 35 % d'un total : total=240.
4. Partager 900 selon 1:2:3 : 150, 300, 450.
5. Un abonnement coûte 12 € fixes plus 3 € par unité : non proportionnel, car la relation ne passe pas par l'origine.

## Maîtrise attendue
Choisir le bon dénominateur, calculer correctement, vérifier les unités, reconnaître la proportionnalité et expliciter ses hypothèses.

## Références
- OpenStax Contemporary Mathematics, ratios and proportions : https://openstax.org/books/contemporary-mathematics/pages/5-4-ratios-and-proportions
- OpenStax Prealgebra 2e, ratios and rate : https://openstax.org/books/prealgebra-2e/pages/5-6-ratios-and-rate
- OpenStax Prealgebra 2e, solve proportions : https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications
