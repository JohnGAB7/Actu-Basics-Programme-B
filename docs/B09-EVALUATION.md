# B09 — Évaluation formative transversale

**Durée :** 120 minutes · **Barème :** 100 points · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.

## Exercice 1 — Classification d'un processus (10 points)
Donner un exemple de processus à temps discret et états discrets, puis un exemple à temps continu et états continus. Définir une trajectoire.

**Corrigé :** chaîne de Markov à temps discret ; mouvement brownien à temps continu et états réels. Une trajectoire est la fonction temporelle obtenue en fixant une réalisation ω.

## Exercice 2 — Chaîne de Markov (10 points)
Une chaîne a pour matrice P=[[0,8;0,2],[0,3;0,7]] et commence en état 1. Donner la distribution au pas 1 et calculer la distribution stationnaire.

**Corrigé :** π₁=(0,8;0,2). À l'équilibre 0,2π₁=0,3π₂ et π₁+π₂=1, donc π=(0,6;0,4).

## Exercice 3 — Périodicité (10 points)
Une chaîne alterne déterministement entre A et B. Déterminer la période. Une chaîne irréductible finie est-elle récurrente positive ?

**Corrigé :** période 2. Oui, tous les états d'une chaîne irréductible finie sont récurrents positifs.

## Exercice 4 — Distribution stationnaire (10 points)
Pour π=(0,6;0,4), vérifier la stationnarité pour la matrice de l'exercice 2. Donner la condition d'équilibre détaillé.

**Corrigé :** πP=(0,6;0,4). L'équilibre détaillé est πᵢpᵢⱼ=πⱼpⱼᵢ pour tous i,j.

## Exercice 5 — Chaîne absorbante (10 points)
Une chaîne possède un seul état transitoire qui y reste avec probabilité q=0,75 et est absorbé sinon. Calculer le temps moyen avant absorption.

**Corrigé :** géométrique de paramètre 0,25 ; moyenne 1/(1−q)=4 étapes.

## Exercice 6 — Processus de Poisson (10 points)
Les arrivées suivent un processus de Poisson de taux 4 par heure. Calculer P(N(0,5)=0), E[N(2)] et le taux après amincissement de probabilité 0,25.

**Corrigé :** e^-2 ; 8 ; 1 arrivée par heure.

## Exercice 7 — Renouvellement (10 points)
Les temps inter-renouvellement sont i.i.d. de moyenne 6 jours. Quel est le taux de renouvellement à long terme ? Si la récompense moyenne par cycle vaut 30, quel est le taux moyen de récompense ?

**Corrigé :** 1/6 renouvellement par jour ; 30/6=5 unités de récompense par jour.

## Exercice 8 — Martingale (10 points)
Définir une martingale par rapport à une filtration. Le premier instant où une marche aléatoire atteint un niveau fixé est-il un temps d'arrêt ?

**Corrigé :** processus adapté et intégrable vérifiant E[Xₙ₊₁|Fₙ]=Xₙ. Oui, l'événement d'atteinte avant n est déterminable avec l'information disponible au temps n.

## Exercice 9 — File M/M/1 (10 points)
Une file M/M/1 a λ=2 et μ=5. Calculer ρ et le nombre moyen de clients dans le système à l'équilibre.

**Corrigé :** ρ=2/5=0,4<1 ; E[N]=ρ/(1−ρ)=2/3 client.

## Exercice 10 — Mouvement brownien (10 points)
Pour un brownien standard, donner la loi de B₄, Var(B₄) et Cov(B₂,B₄). Pourquoi les trajectoires ne sont-elles pas différentiables ?

**Corrigé :** B₄~N(0,4), variance 4, covariance min(2,4)=2. Les trajectoires sont presque sûrement continues mais non dérivables ; leur variation quadratique est non nulle.
