# B09 — Évaluation formative transversale

**Durée :** 120 minutes · **Barème :** 100 points · **Statut :** Seconde passe interne effectuée — validation indépendante et test apprenant à venir.

## Exercice 1 — Classification d'un processus (10 points)
Donner un exemple de processus à temps discret et états discrets, puis un exemple à temps continu et états continus. Définir une trajectoire.

**Corrigé :** chaîne de Markov à temps discret ; mouvement brownien à temps continu et états réels. Une trajectoire est la fonction temporelle obtenue en fixant une réalisation ω.

## Exercice 2 — Chaîne de Markov (10 points)
Une chaîne a pour matrice P=[[0,8;0,2],[0,3;0,7]] et commence en état 1. Donner la distribution au pas 1 et calculer la distribution stationnaire.

**Corrigé :** avec π₀=(1,0), π₁=π₀P=(0,8;0,2). La résolution πP=π donne 0,2π_A=0,3π_B et π_A+π_B=1, donc π=(0,6;0,4). On vérifie πP=(0,6;0,4).

## Exercice 3 — Périodicité (10 points)
Une chaîne alterne déterministement entre A et B. Déterminer la période. Une chaîne irréductible finie est-elle récurrente positive ?

**Corrigé :** les retours ne sont possibles qu'aux temps pairs, donc le PGCD vaut 2. Oui, tous les états d'une chaîne irréductible finie sont récurrents positifs ; l'apériodicité n'en découle pas.

## Exercice 4 — Distribution stationnaire (10 points)
Pour π=(0,6;0,4), vérifier la stationnarité pour la matrice de l'exercice 2. Donner la condition d'équilibre détaillé.

**Corrigé :** πP=(0,6;0,4). Pour A↔B, π_Ap_AB=0,6×0,2=0,12=0,4×0,3=π_Bp_BA ; l'équilibre détaillé est vérifié.

## Exercice 5 — Chaîne absorbante (10 points)
Une chaîne possède un seul état transitoire qui y reste avec probabilité q=0,75 et est absorbé sinon. Calculer le temps moyen avant absorption.

**Corrigé :** T suit une géométrique sur {1,2,…} de paramètre 0,25 : P(T=k)=0,75^{k−1}0,25. E[T]=1/0,25=4 étapes et Var(T)=0,75/0,25²=12.

## Exercice 6 — Processus de Poisson (10 points)
Les arrivées suivent un processus de Poisson de taux 4 par heure. Calculer P(N(0,5)=0), E[N(2)] et le taux après amincissement de probabilité 0,25.

**Corrigé :** λt=4×0,5=2, donc P(N(0,5)=0)=e^-2≈0,1353. E[N(2)]=4×2=8. Après amincissement, le taux est 0,25×4=1 arrivée par heure.

## Exercice 7 — Renouvellement (10 points)
Les temps inter-renouvellement sont i.i.d. de moyenne 6 jours. Quel est le taux de renouvellement à long terme ? Si la récompense moyenne par cycle vaut 30, quel est le taux moyen de récompense ?

**Corrigé :** le taux de renouvellement à long terme est 1/6 par jour. Le théorème de récompense donne 30/6=5 unités de récompense par jour, si les cycles/récompenses satisfont les hypothèses i.i.d. et d'intégrabilité.

## Exercice 8 — Martingale (10 points)
Définir une martingale par rapport à une filtration. Le premier instant où une marche aléatoire atteint un niveau fixé est-il un temps d'arrêt ?

**Corrigé :** processus adapté, intégrable à chaque date et vérifiant E[Xₙ₊₁|Fₙ]=Xₙ. Oui, le premier instant d'atteinte est un temps d'arrêt car {τ≤n} est déterminable avec l'information Fₙ. L'arrêt optionnel exige toutefois des hypothèses supplémentaires pour conclure à la conservation de l'espérance.

## Exercice 9 — File M/M/1 (10 points)
Une file M/M/1 a λ=2 et μ=5. Calculer ρ et le nombre moyen de clients dans le système à l'équilibre.

**Corrigé :** ρ=2/5=0,4<1 ; E[N]=ρ/(1−ρ)=2/3 client. Le temps moyen dans le système vaut W=1/(μ−λ)=1/3 heure.

## Exercice 10 — Mouvement brownien (10 points)
Pour un brownien standard, donner la loi de B₄, Var(B₄) et Cov(B₂,B₄). Pourquoi les trajectoires ne sont-elles pas différentiables ?

**Corrigé :** B₄~N(0,4), Var(B₄)=4 et Cov(B₂,B₄)=min(2,4)=2. Les trajectoires sont presque sûrement continues mais non dérivables ; leur variation quadratique sur [0,4] vaut 4.
