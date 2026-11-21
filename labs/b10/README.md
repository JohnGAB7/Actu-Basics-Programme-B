# B10 — Laboratoire reproductible de statistique descriptive et d'échantillonnage

Laboratoire autonome en Python (bibliothèque standard) et R (base R). Les fonctions rendent explicites les conventions de calcul ; les exemples ne remplacent ni l'analyse du plan réel ni une revue statistique.

## Exécution

Depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b10/tests -v
python labs/b10/descriptive_lab.py
Rscript labs/b10/descriptive_lab.R
```

## Laboratoire interactif du site

La navigation du Learning Studio comprend aussi « Laboratoire B10 » avec cinq démonstrations interactives déterministes : influence d'une valeur extrême sur moyenne/médiane ; suréchantillonnage d'une strate et repondération ; histogramme à classes inégales ; effet de l'imputation par moyenne sur la variance ; inversion de Simpson entre strates et agrégation. Ces démonstrations ne remplacent pas l'exécution des scripts ni l'analyse d'un vrai plan de sondage.

## Expériences et fonctions

1. Résumés descriptifs : moyenne, médiane, quantiles de type 7 (convention par défaut R), variance descriptive (n), variance corrigée (n−1), IQR, MAD brute et MAD × 1,4826.
2. Fonction de répartition empirique et histogramme à classes inégales : la hauteur est une densité et l'aire de chaque classe égale sa fréquence.
3. Audit qualité : valeurs manquantes, clés dupliquées, conversion numérique et contrôles de plages.
4. Sondage : estimateur de total Horvitz–Thompson, moyenne ratio de Hájek et variance de la moyenne sous sondage aléatoire simple sans remise.
5. Analyse bivariée : corrélation de Pearson et proportions conditionnelles par ligne.
6. Données manquantes : taux par variable, sans prétendre identifier MCAR/MAR/MNAR.
7. Paradoxe de Simpson : exemple construit où A présente un meilleur taux dans chaque strate mais un taux agrégé inférieur à B.

## Conventions et hypothèses

- Les quantiles utilisent la définition Hyndman–Fan type 7, identique à la convention par défaut de `quantile()` en R. D'autres logiciels ou méthodes peuvent différer.
- La variance descriptive divise par n ; la variance corrigée divise par n−1 et est sans biais sous échantillonnage i.i.d. de variance finie.
- Le facteur de correction de population finie concerne la variance de la moyenne sous sondage aléatoire simple sans remise ; il ne doit pas être réutilisé tel quel sous un plan stratifié ou en grappes.
- Horvitz–Thompson estime un total fini avec probabilités d'inclusion positives connues. L'estimateur de Hájek est un ratio et n'est généralement pas exactement sans biais à taille finie.
- La variance exacte de Horvitz–Thompson sous plan général dépend des probabilités d'inclusion conjointes ; le laboratoire n'implémente pas un estimateur générique de variance pour plans complexes.
- Le coefficient de variation n'est affiché que sur échelle de rapport et si la moyenne n'est pas nulle.
- La constante 1,4826 rend la MAD asymptotiquement comparable à l'écart-type sous normalité ; elle ne transforme pas la MAD en estimateur universel de l'écart-type.
- Le taux de valeurs manquantes ne permet pas à lui seul de distinguer MCAR, MAR et MNAR.
- Le paradoxe de Simpson est illustratif ; l'agrégation ne doit pas être choisie pour privilégier une conclusion.

## Fichiers

- `descriptive_lab.py` : fonctions Python.
- `descriptive_lab.R` : fonctions R.
- `tests/test_descriptive_lab.py` : tests unitaires Python.
