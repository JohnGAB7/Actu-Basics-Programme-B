# B04 — Évaluation transversale

**Statut :** draft · **Durée :** 120 minutes · **Total :** 100 points  
**Consigne :** détailler les raisonnements, indiquer les hypothèses et justifier les critères utilisés.

## Exercice 1 — Convergence d'une suite (10 points)

Montrer que u_n=4/(n+2) converge vers 0 en utilisant la définition ε–N.

**Corrigé.** Soit ε>0. Choisir N∈N tel que N>4/ε. Pour n≥N, 0≤4/(n+2)≤4/N<ε. Donc u_n→0.

## Exercice 2 — Limite de fonction (10 points)

Calculer lim_{x→1}(x²−1)/(x−1) et préciser pourquoi la valeur de l'expression en x=1 n'intervient pas.

**Corrigé.** Pour x≠1, (x²−1)/(x−1)=x+1. La limite vaut donc 2. La limite dépend du comportement dans un voisinage ponctué de 1, pas de la valeur éventuelle en 1.

## Exercice 3 — Continuité et existence d'une racine (10 points)

Montrer que f(x)=x³+x−1 possède une unique racine dans (0,1).

**Corrigé.** f est continue, f(0)=−1 et f(1)=1 ; le théorème des valeurs intermédiaires garantit une racine. De plus f'(x)=3x²+1>0, donc f est strictement croissante et la racine est unique.

## Exercice 4 — Dérivation (10 points)

Calculer la dérivée de f(x)=e^{2x}cos x et préciser la règle utilisée.

**Corrigé.** Par produit et chaîne : f'(x)=2e^{2x}cos x−e^{2x}sin x=e^{2x}(2cos x−sin x).

## Exercice 5 — Théorème des accroissements finis (10 points)

Appliquer le théorème des accroissements finis à f(x)=x² sur [1,3] et déterminer c.

**Corrigé.** f est continue sur [1,3] et dérivable sur (1,3). Il existe c tel que f'(c)=(f(3)−f(1))/(3−1)=(9−1)/2=4. Comme f'(c)=2c, c=2.

## Exercice 6 — Taylor et erreur (10 points)

Donner le polynôme de Taylor d'ordre 2 de e^x en 0 et majorer l'erreur pour x=0,1.

**Corrigé.** T₂(x)=1+x+x²/2 ; T₂(0,1)=1,105. Le reste de Lagrange vaut e^ξ x³/6 pour ξ∈(0;0,1). Comme e^ξ≤e^{0,1}, l'erreur est au plus e^{0,1}×0,001/6, soit environ 0,000184.

## Exercice 7 — Intégrale définie (10 points)

Calculer ∫₀¹ x e^{x²} dx.

**Corrigé.** Poser u=x², du=2x dx. L'intégrale vaut (1/2)∫₀¹e^u du=(e−1)/2.

## Exercice 8 — Intégrales impropres (10 points)

Étudier la convergence de ∫₁^∞1/x² dx et ∫₁^∞1/x dx.

**Corrigé.** La première vaut lim_{R→∞}[−1/x]₁^R=1 et converge. La seconde vaut lim_{R→∞}ln R=+∞ et diverge.

## Exercice 9 — Séries numériques (10 points)

Étudier Σ_{n=1}∞1/n² et Σ_{n=1}∞1/n.

**Corrigé.** Séries de Riemann : Σ1/n² converge car p=2>1 ; Σ1/n diverge car p=1.

## Exercice 10 — Série entière (10 points)

Déterminer le rayon de convergence de Σ_{n=0}∞x^n/n!.

**Corrigé.** Le rapport des valeurs absolues successives vaut |x|/(n+1), qui tend vers 0 pour tout x réel. La série converge absolument pour tout x ; son rayon est R=+∞.
