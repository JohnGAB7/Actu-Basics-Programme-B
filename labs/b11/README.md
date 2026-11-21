# B11 — Laboratoire reproductible de théorie de l'inférence

Implémentations pédagogiques en Python (bibliothèque standard) et R (base R). Les simulations illustrent les propriétés des procédures ; elles ne remplacent ni les hypothèses mathématiques ni les preuves.

## Exécution
Depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b11/tests -v
python labs/b11/inference_lab.py
Rscript labs/b11/inference_lab.R
```

## Expériences
1. Distributions d'échantillonnage et TCL : moyennes d'échantillons normaux et exponentiels.
2. Biais, variance et EQM : moyenne de Bernoulli et estimateur rétréci correspondant à la moyenne postérieure Beta(1,1), avec propriétés fréquentistes exactes.
3. Vraisemblance : EMV de Poisson et cas frontière lorsque toutes les observations sont nulles.
4. Intervalles de proportion : comparaison Wald/Wilson et couverture simulée près de la frontière.
5. Tests z bilatéraux et calcul approché de taille d'échantillon.
6. Tests LR, Wald et score pour une proportion binomiale sous H0 fixé.
7. Bootstrap percentile de la moyenne ou médiane ; permutation Monte-Carlo de différence de moyennes.
8. Mise à jour Beta-Binomiale et distribution prédictive Beta-Binomiale.

## Hypothèses et limites
- Les simulations CLT supposent des échantillons i.i.d.
- Les risques de l'estimateur rétréci sont calculés exactement sous le modèle Bernoulli ; les simulations de couverture ne prouvent pas une couverture théorique.
- Le test z et le calcul de taille sont des approximations normales, avec variance connue et hypothèses d'indépendance.
- Les statistiques LR/Wald/score sont asymptotiques ; le test de Wald est indéfini lorsque l'estimateur est sur une frontière.
- Le bootstrap percentile est simple et n'est pas universellement optimal ; le plan de rééchantillonnage doit correspondre au plan d'étude.
- Le test de permutation exige échangeabilité/invariance sous le nul et le plan.
- Les intervalles Wilson et Wald sont des procédures binomiales i.i.d. ; les plans complexes demandent des méthodes adaptées.
- Les calculs bayésiens utilisent un prior Beta propre et un modèle binomial ; le posterior prédictif est calculé exactement.
- Les résultats Monte-Carlo dépendent de la graine et du nombre de réplications.

## Fichiers
- `inference_lab.py` : fonctions Python.
- `inference_lab.R` : fonctions R.
- `tests/test_inference_lab.py` : tests unitaires Python.
