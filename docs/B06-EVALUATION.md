# B06 — Évaluation transversale

**Durée :** 120 minutes · **Total :** 100 points · **Statut :** épreuve formative, revue interne à effectuer.

## 1 — Formulation (10 points)
Une unité de $x$ rapporte 3 et consomme 1 unité de ressource A et 3 de ressource B. Une unité de $y$ rapporte 5 et consomme 2 unités de A et 2 de B. Les capacités sont 8 et 12. Formuler le programme linéaire.
**Corrigé :** maximiser $3x+5y$ sous $x+2y\le8$, $3x+2y\le12$, $x,y\ge0$.

## 2 — Convexité (10 points)
Montrer que $f(x,y)=x^2+4y^2$ est strictement convexe et donner son minimiseur sans contrainte.
**Corrigé :** Hessienne $\operatorname{diag}(2,8)$ définie positive ; minimiseur unique $(0,0)$.

## 3 — Programmation linéaire (10 points)
Maximiser $3x+2y$ sous $x+y\le4$, $x\le2$, $y\le3$, $x,y\ge0$.
**Corrigé :** les sommets pertinents sont $(0,0)$, $(2,0)$, $(0,3)$, $(2,2)$ et $(1,3)$. Les valeurs sont 0, 6, 6, 10 et 9. Optimum $(2,2)$, valeur 10.

## 4 — Dualité (10 points)
Écrire le dual du problème de la question 3.
**Corrigé :** minimiser $4u+2v+3w$ sous $u+v\ge3$, $u+w\ge2$, $u,v,w\ge0$. La solution duale $(2,1,0)$ vaut 10 et certifie l'optimalité de la solution primale.

## 5 — Sensibilité (10 points)
Interpréter un prix d'ombre égal à 2 associé à une ressource.
**Corrigé :** dans la plage de validité de la base optimale, une unité supplémentaire du second membre améliore la valeur optimale d'environ 2 unités de l'objectif. Hors de cette plage, le prix d'ombre peut changer.

## 6 — Réseaux (10 points)
Deux chemins indépendants relient une source à un puits, de capacités respectives 3 et 2 sur chacun de leurs arcs. Donner le flot maximum et un certificat par coupe.
**Corrigé :** flot maximum 5 ; la coupe qui sépare la source des deux premiers arcs a capacité 3+2=5.

## 7 — Programmation entière (10 points)
Maximiser $3x+2y$ sous $2x+y\le4$, $x+2y\le4$, $x,y\in\mathbb Z_{\ge0}$.
**Corrigé :** la relaxation linéaire a pour optimum $(4/3,4/3)$, valeur $20/3$. L'objectif entier est donc au plus 6. La solution $(2,0)$ est réalisable et vaut 6 : elle est optimale.

## 8 — Gradient (10 points)
Pour $f(x)=(x-3)^2$, effectuer une étape de gradient depuis $x_0=4$ avec pas $\alpha=1/2$.
**Corrigé :** $f'(x)=2(x-3)$ ; $x_1=4-(1/2)\times2=3$, qui est le minimiseur.

## 9 — KKT (10 points)
Minimiser $(x-2)^2$ sous $x\le1$. Donner le minimiseur et le multiplicateur avec la convention $g(x)=x-1\le0$.
**Corrigé :** $x^*=1$. Stationnarité $2(x-2)+\lambda=0$ donne $\lambda=2$ ; faisabilité et complémentarité sont satisfaites.

## 10 — Robustesse (10 points)
Une demande inconnue appartient à $[8,12]$. Une capacité doit la couvrir dans tous les cas. Comparer la décision nominale fondée sur 8 et la décision robuste.
**Corrigé :** capacité nominale 8 ; capacité robuste 12. Le supplément de 4 unités protège contre le pire cas, mais a un coût qu'il faut comparer au coût de rupture.

## Barème
Modélisation 10 ; convexité 10 ; programmation linéaire 10 ; dualité et sensibilité 20 ; réseaux et intégralité 20 ; méthodes différentiables et KKT 20 ; robustesse 10. Les hypothèses, unités, étapes et interprétations sont évaluées, pas seulement le résultat numérique.

**Note :** cette épreuve est formative. Son barème et ses corrigés doivent être relus indépendamment avant tout usage certificatif.
