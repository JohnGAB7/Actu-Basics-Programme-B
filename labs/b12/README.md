# B12 — Laboratoire reproductible de régression et GLM

Implémentations pédagogiques en Python (bibliothèque standard) et R (base + package recommandé stats). Les jeux de données sont synthétiques et déterministes ; les diagnostics sont des indices et non des règles automatiques de suppression.

## Exécution

```bash
python -m unittest discover -s labs/b12/tests -v
python labs/b12/regression_lab.py
Rscript labs/b12/regression_lab.R
```

## Expériences
1. OLS simple : coefficients, valeurs ajustées, résidus, SSE, R², variance résiduelle et erreurs-types.
2. Diagnostics : levier, résidus studentisés internes et distance de Cook.
3. Ridge et LASSO dans le cas centré à un prédicteur, intercept non pénalisé : Ridge minimise 0,5·SSE + 0,5·λβ² ; LASSO minimise 0,5·SSE + λ|β|.
4. Régression logistique par Newton/IRLS : probabilités ajustées et log-vraisemblance.
5. Régression de Poisson avec offset d'exposition : moyennes ajustées et déviance.
6. ICC d'un modèle à intercept aléatoire.

## Hypothèses et limites
- OLS est calculé dans le cas simple avec constante ; les formules d'erreur-type supposent homoscédasticité et indépendance pour leur interprétation classique.
- Les diagnostics de levier/Cook sont ceux d'une régression simple ; aucun seuil ne justifie une suppression automatique.
- Ridge/LASSO sont illustrés avec un prédicteur centré ; les modèles multivariés exigent standardisation et validation dans les plis d'entraînement.
- La logistique et Poisson utilisent des modèles à intercept et pente, Newton/IRLS ; les indicateurs de convergence sont retournés. Séparation, colinéarité, faible effectif et convergence difficile ne sont pas traités comme cas généraux.
- Un échantillon Poisson entièrement nul n'a pas de maximum fini pour l'intercept non pénalisé ; la fonction le signale plutôt que de retourner un coefficient artificiellement borné.
- Les fonctions numériques vérifient les entrées finies, les paramètres d'itération et les variances positives ; les diagnostics n'offrent pas de garanties générales hors du modèle simple.
- L'offset Poisson fixe le coefficient de log-exposition à un ; la validité exige une définition correcte de l'exposition et un processus de comptage cohérent.
- La déviance est liée à la vraisemblance et au modèle saturé ; elle n'est pas un R² universel.
- L'ICC correspond au modèle gaussien à intercept aléatoire seulement.
- Les données synthétiques ne démontrent ni causalité ni validité sur des données réelles.

## Fichiers
- `regression_lab.py` : fonctions Python.
- `regression_lab.R` : contrôles R.
- `tests/test_regression_lab.py` : tests Python.
