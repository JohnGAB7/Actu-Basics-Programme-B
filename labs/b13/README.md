# B13 — Laboratoire reproductible de statistique multivariée

Implémentations pédagogiques en Python (bibliothèque standard uniquement) et R (base/stats). Les exemples sont synthétiques et les algorithmes sont volontairement limités à des dimensions modestes pour permettre l'inspection des calculs.

## Exécution

Depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b13/tests -v
python labs/b13/multivariate_lab.py
Rscript labs/b13/multivariate_lab.R
```

## Expériences

1. Matrices de covariance et de corrélation, symétrie et unités.
2. Décomposition spectrale d'une matrice symétrique par Jacobi ; ACP, valeurs propres, vecteurs propres, scores et variance expliquée.
3. Distance de Mahalanobis et statistique T² de Hotelling avec transformation F (sans calcul de p-value).
4. Shrinkage de covariance vers une cible sphérique, avec poids λ explicite.
5. K-means déterministe avec initialisations multiples, centroïdes, étiquettes, inertie et indicateur de convergence.
6. Borne de rang de la covariance empirique centrée lorsque p/n est élevé.

## Hypothèses et limites

- La covariance empirique utilise le diviseur n−1 et suppose des observations complètes ; les données manquantes ne sont pas imputées automatiquement.
- La décomposition de Jacobi est destinée aux petites matrices symétriques ; elle ne remplace pas LAPACK/BLAS pour les grandes dimensions.
- La statistique T² suppose des vecteurs indépendants issus d'une population normale multivariée et n>p ; sa transformation en F est exacte sous H0 et S inversible. Le laboratoire ne calcule pas la p-value.
- La distance de Mahalanobis exige une covariance inversible et bien conditionnée ; un résultat numérique n'établit pas la normalité ni l'absence de contamination.
- Le shrinkage vers la cible sphérique illustre le compromis biais-variance ; λ est fourni par l'utilisateur et n'est pas estimé automatiquement (Ledoit–Wolf/OAS non implémentés).
- K-means optimise une inertie euclidienne et peut converger vers un optimum local ; plusieurs initialisations réduisent la dépendance à l'initialisation sans garantir l'optimum global.
- MANOVA, analyse factorielle, corrélation canonique, LDA/QDA et méthodes de clustering par densité restent traitées dans le cours mais ne sont pas implémentées comme fonctions génériques dans ce laboratoire.
- Les données synthétiques n'établissent aucune causalité ni validité sur un portefeuille réel.

## Fichiers

- `multivariate_lab.py` : fonctions Python.
- `multivariate_lab.R` : contrôles R.
- `tests/test_multivariate_lab.py` : tests Python.
