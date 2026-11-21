# B16 — Laboratoire de séries temporelles (Python/R)

Ce laboratoire propose des implémentations pédagogiques transparentes, sans dépendance externe pour les fonctions de base.

## Python

- Différences simples et saisonnières.
- ACF empirique.
- Prévision récursive AR(1).
- MAE, RMSE et MASE.
- Découpage à origine glissante.
- Récurrence de variance GARCH(1,1).
- Filtre de Kalman scalaire avec observations manquantes.

Exécution depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b16/tests -v
```

## R

```bash
Rscript labs/b16/time_series_lab.R
```

## Limites explicites

Ces fonctions ne constituent pas des estimateurs ARIMA/ETS/VAR/GARCH complets ni une implémentation générale du filtre de Kalman. Elles servent à vérifier des mécanismes et conventions sur de petits exemples. Les ajustements statistiques avancés doivent être réalisés avec des bibliothèques spécialisées, leurs diagnostics, et une validation indépendante. Les tests numériques simples ne remplacent pas des tests de couverture sur des données simulées ni une revue experte.
