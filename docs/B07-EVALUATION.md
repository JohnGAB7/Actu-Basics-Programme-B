# B07 — Évaluation formative transversale

**Durée :** 120 minutes · **Barème :** 100 points · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.

## Exercice 1 — Erreurs flottantes (10 points)
Valeur exacte 250, résultat 249,4. Calculer les erreurs absolue et relative. Expliquer pourquoi six décimales affichées ne prouvent pas six décimales exactes.

**Corrigé :** erreur absolue 0,6 ; relative 0,6/250=0,0024=0,24 %. L'affichage ne mesure ni l'erreur des données ni les arrondis internes.

## Exercice 2 — Conditionnement (10 points)
Pour f(x)=x³, x≠0, calculer le conditionnement relatif local. Interpréter une perturbation relative de 0,1 %.

**Corrigé :** κ=|x·3x²/x³|=3. Au premier ordre, 0,1 % de perturbation relative produit environ 0,3 % de variation relative.

## Exercice 3 — Système linéaire (10 points)
Résoudre 2x+y=5 et x+3y=6. Vérifier et donner le résidu exact.

**Corrigé :** x=9/5, y=7/5. Vérification : 18/5+7/5=5 et 9/5+21/5=6 ; résidu nul en arithmétique exacte.

## Exercice 4 — Convergence itérative (10 points)
Énoncer le critère général de convergence de x(k+1)=Gx(k)+c. Donner une condition suffisante classique pour Jacobi.

**Corrigé :** convergence pour tout point initial si ρ(G)<1. La dominance diagonale stricte de A est une condition suffisante classique pour Jacobi, non nécessaire.

## Exercice 5 — Dichotomie (10 points)
Combien d'itérations garantissent une largeur inférieure à 10^-4 pour un intervalle initial de longueur 2 ?

**Corrigé :** 2/2^k<10^-4, soit 2^k>20000 ; k=15 suffit.

## Exercice 6 — Interpolation (10 points)
Construire le polynôme de degré au plus un passant par (1,2) et (3,8). Différence avec la régression ?

**Corrigé :** p(x)=3x−1. L'interpolation passe exactement par les points ; la régression minimise un critère d'écart.

## Exercice 7 — Moindres carrés (10 points)
Pourquoi QR peut-il être préférable aux équations normales ? Citer un usage de la SVD.

**Corrigé :** En norme 2 et si A est de rang colonne plein, κ₂(AᵀA)=κ₂(A)². La SVD identifie les petites valeurs singulières et permet pseudoinverse et régularisation.

## Exercice 8 — Quadrature (10 points)
Ordre global du trapèze composite et de Simpson composite ? Pourquoi un raffinement ne certifie-t-il pas toujours l'erreur ?

**Corrigé :** O(h²) et O(h⁴) sous régularité. L'estimation empirique peut être hors régime asymptotique ou dominée par l'arrondi.

## Exercice 9 — EDO (10 points)
Euler explicite pour y'=-2y, y(0)=1, h=0,1. Comparer à la solution exacte au premier pas.

**Corrigé :** y₁=0,8 ; exact e^-0,2≈0,81873 ; erreur absolue ≈0,01873.

## Exercice 10 — Reproductibilité (10 points)
Citer cinq éléments à conserver et distinguer vérification et validation.

**Corrigé :** hypothèses, données/provenance, version du code, dépendances/environnement, paramètres/tolérances, graine aléatoire, métriques et journaux. Vérification : conformité du calcul à la spécification ; validation : adéquation du modèle à l'usage réel.
