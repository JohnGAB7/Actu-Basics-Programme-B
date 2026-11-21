# B02 — Évaluation transversale

**Statut : revue interne effectuée — consolidation pédagogique en cours.
**Consigne :** justifier les réponses. Un résultat correct sans justification ne reçoit pas nécessairement tous les points.

## Exercice 1 — Logique et quantificateurs (15 points)

1. Écrire la négation de « tout dossier est complet ». (5)
2. Indiquer si $P\Rightarrow Q$ et sa contraposée sont équivalentes. (5)
3. Sur $\mathbb R$, déterminer la vérité de $\forall x\exists y\ (y>x)$. (5)

**Corrigé.** 1. Il existe au moins un dossier incomplet. 2. Oui, elles ont la même table de vérité. 3. Vrai : pour chaque x, choisir y=x+1.

## Exercice 2 — Ensembles et applications (10 points)

Soient A={1,2,3,4} et B={3,4,5}. Déterminer $A\cap B$, $A\cup B$ et $A\setminus B$. La fonction $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, est-elle injective ?

**Corrigé.** Intersection {3,4}, union {1,2,3,4,5}, différence {1,2}. f n'est pas injective puisque f(−1)=f(1).

## Exercice 3 — Démonstration (15 points)

Démontrer que la somme de deux entiers impairs est paire.

**Corrigé.** Écrire a=2m+1 et b=2n+1 avec m,n entiers. Alors a+b=2(m+n+1), donc la somme est paire.

## Exercice 4 — Récurrence (15 points)

Prouver que $1+2+\cdots+n=n(n+1)/2$ pour tout n≥1.

**Corrigé.** Initialisation n=1. Pour l'hérédité, supposer la formule au rang k et ajouter k+1 : $k(k+1)/2+(k+1)=(k+1)(k+2)/2$. Conclusion par récurrence.

## Exercice 5 — Dénombrement (15 points)

Une équipe de 3 personnes est sélectionnée parmi 10 personnes distinctes. Combien d'équipes ? Combien de rôles ordonnés (chef, adjoint, rapporteur) peut-on attribuer à trois personnes distinctes parmi les 10 ?

**Corrigé.** Équipes : $\binom{10}{3}=120$. Rôles ordonnés : $10\cdot9\cdot8=720$.

## Exercice 6 — Probabilité finie (10 points)

Dans une urne, 4 boules rouges et 6 bleues sont mélangées. Une boule est tirée uniformément. Calculer la probabilité d'obtenir une rouge.

**Corrigé.** Sous l'hypothèse d'un tirage uniforme, $P(R)=4/10=0,4$.

## Exercice 7 — Graphes (10 points)

Un graphe non orienté fini possède 8 sommets et 7 arêtes. Peut-on conclure qu'il est un arbre ?

**Corrigé.** Non, pas sans connexité. Un graphe à 8 sommets et 7 arêtes peut être non connexe et contenir un cycle dans une composante. Un graphe fini est un arbre si et seulement s'il est connexe et possède n−1 arêtes.

## Exercice 8 — Complexité (10 points)

Classer le coût $5n^2+4n+10$ et expliquer l'effet d'un doublement de n sur le terme dominant.

**Corrigé.** $\Theta(n^2)$. Le doublement de n multiplie le terme dominant par 4.

## Barème et maîtrise

- 90–100 : maîtrise solide des objectifs du bloc.
- 80–89 : maîtrise satisfaisante ; quelques justifications à renforcer.
- 65–79 : acquis partiels ; revoir les unités correspondant aux erreurs.
- Moins de 65 : reprise recommandée avant B03/B04.

Le seuil de 80 % est une recommandation pédagogique, pas une certification. Une revue indépendante du sujet et de son corrigé est nécessaire avant publication officielle.
