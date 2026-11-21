# B09 — Laboratoire reproductible de processus stochastiques

Ce laboratoire accompagne les unités S01–S10. Les expériences numériques illustrent les propriétés théoriques ; elles ne remplacent pas les preuves.

## Exécution

- Python 3.10+ (bibliothèque standard uniquement)
- R 4.1+ (fonctions de base uniquement)

Depuis la racine du dépôt :

```bash
python labs/b09/stochastic_lab.py
python -m unittest discover -s labs/b09/tests -v
Rscript labs/b09/stochastic_lab.R
```

## Expériences

1. Chaîne de Markov à deux états : propagation de la distribution et distribution stationnaire.
2. Chaîne absorbante à un état transitoire : moyenne et variance du temps d'absorption géométrique.
3. Processus de Poisson : simulation des dates d'arrivée et calcul de probabilités de comptage.
4. Renouvellement exponentiel : nombre de renouvellements et taux asymptotique.
5. Marche aléatoire symétrique : exemple de martingale à incréments centrés.
6. Mouvement brownien : trajectoire discrétisée et variation quadratique.

Les simulations utilisent des graines fixes dans les tests. Les générateurs Python et R peuvent produire des trajectoires différentes ; la reproductibilité est attendue dans chaque environnement.

## Hypothèses et limites

- Les matrices de transition sont finies, carrées et stochastiques.
- La chaîne absorbante est réduite au cas d'un seul état transitoire.
- Les arrivées de Poisson et durées de renouvellement sont simulées par des temps exponentiels i.i.d.
- La marche aléatoire est symétrique, avec incréments indépendants valant ±1.
- Le brownien est approché par des incréments gaussiens indépendants de variance Δt ; la variation quadratique est une approximation discrète.
- Aucun résultat simulé ne démontre la récurrence, les théorèmes de renouvellement, l'arrêt optionnel ou les propriétés browniennes.

## Fichiers

- `stochastic_lab.py` : fonctions Python.
- `stochastic_lab.R` : fonctions R.
- `tests/test_stochastic_lab.py` : tests Python.
