# B11 — Laboratoire reproductible d'inférence statistique

Implémentations Python (bibliothèque standard) et R (base R), avec graines fixées pour les expériences Monte-Carlo.

## Exécution

Depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b11/tests -v
python labs/b11/inference_lab.py
Rscript labs/b11/inference_lab.R
```

## Laboratoire interactif du site

La navigation du Learning Studio comprend « Laboratoire B11 » avec quatre expériences : intervalle de Wilson réglable ; test binomial exact bilatéral selon l'ordre des probabilités ; mise à jour Beta–Binomiale réglable ; comparaison d'un bootstrap percentile déterministe et d'une permutation exacte sur un petit exemple. Les onglets sont accessibles au clavier et les hypothèses sont affichées.

## Expériences

1. Test binomial exact bilatéral selon l'ordre des probabilités : somme des probabilités de résultats dont la masse sous H0 est inférieure ou égale à celle observée. D'autres conventions bilatérales existent ; préciser la convention.
2. Intervalle de Wilson pour une proportion, y compris les observations tout-échec ou tout-succès.
3. Maximum de vraisemblance Poisson et cas frontière lorsque la somme des observations est nulle.
4. Mise à jour conjuguée Beta–Binomiale, variance postérieure et probabilité prédictive de succès.
5. Intervalle bootstrap percentile de la moyenne sous hypothèse i.i.d., rééchantillonnage avec remise.
6. Test de permutation Monte-Carlo de différence de moyennes sous échangeabilité des observations entre groupes sous le nul ; correction plus-un et erreur Monte-Carlo approximative.
7. Puissance d'un test z bilatéral à un échantillon (variance connue) et approximation de taille d'échantillon.

## Hypothèses et limites

- Le test binomial exact suppose des essais Bernoulli indépendants de même probabilité sous H0. La définition bilatérale utilisée est celle de l'ordre des probabilités ; elle peut différer de deux fois la plus petite queue.
- Wilson est un intervalle score avec approximation normale ; il n'est pas un intervalle exact binomial.
- Sous Poisson(λ), Var(X)=λ ; pour l'EMV λ̂= X̄ sur n observations, Var(λ̂)=λ/n. Le laboratoire distingue la variance de l'observation (plug-in λ̂) et celle de l'EMV (plug-in λ̂/n).
- Le bootstrap percentile implémenté est élémentaire et suppose un échantillon i.i.d. ; les plans stratifiés, grappes et séries temporelles nécessitent un rééchantillonnage adapté.
- Le test de permutation est valide lorsque l'échangeabilité sous le nul et le schéma de permutation sont justifiés. Les observations appariées, groupées ou stratifiées nécessitent des permutations contraintes.
- La p-value Monte-Carlo utilise (b+1)/(B+1), où b est le nombre de permutations au moins aussi extrêmes ; elle n'est jamais nulle. L'erreur-type affichée est une approximation binomiale.
- La puissance et la taille utilisent une approximation normale pour un test z bilatéral avec variance connue ; elles ne couvrent pas tous les plans ni tests t, exacts ou complexes.
- Le posterior Beta–Binomial dépend explicitement du prior Beta choisi.

## Fichiers

- `inference_lab.py` : fonctions Python.
- `inference_lab.R` : fonctions R base.
- `tests/test_inference_lab.py` : tests unitaires.
