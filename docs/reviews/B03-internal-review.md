# B03 — Revue interne mathématique et pédagogique

**Version examinée :** 1.0.0 · **Date :** 21 novembre 2026  
**Statut :** revue interne assistée par IA · non indépendante · non certifiante

## Périmètre

Revue de V01–V10, carte pédagogique et évaluation. Contrôle des définitions, dimensions, conditions de validité, démonstrations et exemples ; recalcul des opérations numériques ; vérification des corrigés et cohérence entre prérequis et objectifs.

## Références de cadrage croisées

- MIT OCW 18.06 : systèmes, élimination, rang, espaces, projections, moindres carrés, déterminants, valeurs propres, matrices symétriques et SVD. Le plan de cours est utilisé comme repère de couverture, pas comme approbation du contenu.
- Strang, *Introduction to Linear Algebra*, 5e édition : progression calculatoire et conceptuelle.
- Axler, *Linear Algebra Done Right*, 4e édition : espaces, applications et opérateurs, avec un traitement plus abstrait.
- Trefethen & Bau, *Numerical Linear Algebra* : QR, stabilité et SVD.

## Contrôles mathématiques ciblés

- V01 : normes, distances, produit scalaire, Cauchy–Schwarz et orthogonalité ; recalcul des exemples 3-4-5.
- V02 : compatibilité dimensionnelle des produits ; calcul direct AB et BA ; identité de transposition.
- V03 : opérations élémentaires, compatibilité, nombre de solutions et variables libres ; exemples résolus et contre-exemples.
- V04 : déterminant 2×2, effets des opérations sur lignes, équivalences d'inversibilité et limite de Cramer.
- V05 : stabilité des sous-espaces, indépendance, bases, noyau/image et théorème du rang.
- V06 : linéarité, représentation dans des bases, ordre de composition BA et formule P⁻¹AP.
- V07 : formule de projection, résidu orthogonal, propriétés symétrique/idempotente et conditions sur QR.
- V08 : équations normales, unicité sous rang colonne plein, orthogonalité du résidu et distinction géométrie/statistique.
- V09 : équation caractéristique, diagonalisation, théorème spectral réel, définition positive, factorisation de Cholesky (reconstruction de LLᵀ) et condition de covariance (variables de variance finie).
- V10 : existence générale de la SVD, valeurs singulières, rang, troncature et pseudoinverse.

## Points de vigilance et corrections de cadrage

- Les hypothèses de rang plein sont explicitement attachées aux formules impliquant (AᵀA)⁻¹ et à la QR sans pivotement.
- Les valeurs propres sont distinguées des valeurs singulières ; le corps réel ou complexe est indiqué lorsqu'il importe.
- Les moindres carrés sont séparés de l'inférence statistique.
- La SVD est présentée comme un résultat général sur les matrices réelles, sans exiger que la matrice soit carrée.
- La stabilité numérique approfondie est reportée à B07.

## Décision de revue interne\n\nLes vérifications conceptuelles, les recalculs des exemples et la cohérence des corrigés ont été effectués sur les dix unités. Aucune erreur bloquante n'a été identifiée dans le périmètre relu. Les contenus sont donc considérés **validés en interne pour exactitude mathématique de niveau introductif à intermédiaire**, sous réserve des limites et contrôles de publication ci-dessous.\n\n## Limites

1. Cette revue est une vérification interne assistée par IA et ne constitue pas une expertise humaine indépendante.
2. Les références sont identifiées, mais les renvois détaillés par section devront être complétés lors d'une passe bibliographique finale.
3. L'exécution pédagogique et le temps réel de résolution n'ont pas été mesurés auprès d'apprenants.
4. La revue d'accessibilité et le contrôle visuel multi-navigateurs sont des étapes distinctes de la validation mathématique.

## Décision éditoriale

B03 peut être marqué **reviewed-internally** après validation de la CI et de la liste de contrôle de contenu. Il ne doit pas être présenté comme certifié ou évalué par MIT, Harvard, Princeton ou une institution externe. La publication pédagogique dépendra des tests de rendu et des critères de diffusion du dépôt.
