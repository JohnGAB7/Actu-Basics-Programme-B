# B15 — Laboratoire reproductible de machine learning

Implémentations pédagogiques en Python (bibliothèque standard) et R (base R). Les exemples sont synthétiques et de petite dimension.

## Exécution

Depuis la racine du dépôt :

    python -m unittest discover -s labs/b15/tests -v
    python labs/b15/ml_lab.py
    Rscript labs/b15/ml_lab.R

## Expériences

1. Ridge et lasso univariés : comparaison des solutions fermées et du seuillage doux.
2. K plus proches voisins en une dimension, pour régression et classification.
3. Métriques de classification : matrice de confusion, précision, rappel, spécificité, F1 et Brier.
4. Calibration par classes de probabilités et erreur de calibration attendue (ECE).
5. Métriques désagrégées par groupe : taux de sélection et mesures de confusion.
6. Mélange gaussien unidimensionnel estimé par EM.

## Hypothèses et limites

- Les exemples ne valident aucun modèle sur une population réelle.
- Ridge/lasso sont implémentés pour une seule variable centrée ; ce ne sont pas des solveurs multivariés.
- KNN utilise une distance absolue unidimensionnelle ; aucune gestion avancée des distances, poids ou valeurs manquantes.
- Les métriques supposent des labels binaires et des probabilités fournies par l'utilisateur ; aucune courbe ROC/PR ni intervalle d'incertitude n'est calculé.
- La calibration par classes dépend du nombre et du découpage des bins ; l'ECE est un résumé descriptif sensible au binning.
- Les métriques par groupe illustrent les taux de sélection et les performances ; elles ne définissent pas seules l'équité et ne testent pas les préjudices sociotechniques.
- EM est limité aux mélanges gaussiens unidimensionnels ; l'initialisation, le nombre de composantes, les optimums locaux et les composantes dégénérées restent des enjeux.
- SVM, arbres, forêts, boosting, réseaux neuronaux, pipelines, validation temporelle et déploiement ne sont pas implémentés ici.
- Ce laboratoire ne remplace pas scikit-learn, PyTorch, TensorFlow, Fairlearn ni une validation indépendante.

## Fichiers

- ml_lab.py : fonctions Python.
- ml_lab.R : fonctions et contrôles R.
- tests/test_ml_lab.py : tests Python.
