# B20 — Laboratoire de théorie statistique avancée et méthodes de recherche

Laboratoire pédagogique Python/R sans dépendances externes.

## Couverture
- bootstrap percentile de la moyenne et erreur-type bootstrap ;
- test de permutation exact lorsque l'espace est petit, sinon Monte-Carlo avec correction +1 ;
- méthode delta pour une fonction scalaire ;
- Metropolis–Hastings aléatoire unidimensionnel et taux d'acceptation ;
- estimation pédagogique de l'ESS par autocorrélation tronquée au premier lag négatif ;
- correction Benjamini–Hochberg ;
- régression ridge avec intercept non pénalisé par défaut ;
- gradient par différences finies et descente avec recherche de pas Armijo ;
- erreur-type Monte-Carlo.

## Exécution
Depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b20/tests -v
Rscript labs/b20/advanced_statistics_lab.R
```

## Limites
Le bootstrap et les permutations supposent le schéma d'échangeabilité indiqué par le problème ; pas de bootstrap par blocs ou wild bootstrap. Le Metropolis–Hastings est univarié et ne fournit pas R-hat multi-chaînes, diagnostics de divergences, adaptation ni preuve de convergence. L'ESS est une approximation simple, pas l'algorithme Stan. Benjamini–Hochberg suppose les conditions de dépendance appropriées. Ridge n'inclut pas sélection automatique ni inférence post-sélection. La descente est pédagogique et ne couvre pas les garanties non convexes, BFGS ou contraintes générales. Aucune preuve théorique ne peut être remplacée par une simulation.
