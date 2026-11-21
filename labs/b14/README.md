# B14 — Laboratoire reproductible d'inférence causale

Implémentations pédagogiques en Python (bibliothèque standard uniquement) et R (base R uniquement). Les jeux sont synthétiques et les méthodes volontairement limitées à des cas de petite dimension pour rendre les hypothèses et calculs inspectables.

## Exécution

Depuis la racine du dépôt :

    python -m unittest discover -s labs/b14/tests -v
    python labs/b14/causal_lab.py
    Rscript labs/b14/causal_lab.R

## Expériences

1. Différence de moyennes et test de randomisation Monte-Carlo sous randomisation complète ; l'hypothèse testée est le nul net de Fisher.
2. Exemple exact de confusion binaire : la différence brute est +0,02 alors que la différence standardisée est −0,10.
3. Scores de propension empiriques pour une covariable binaire ; poids ATE, ATT et overlap, SMD pondérée et taille effective.
4. Estimateurs IPW de Hájek et AIPW avec prédictions auxiliaires fournies explicitement.
5. Estimateur de Wald pour instrument binaire.
6. Différence-en-différences 2×2.
7. Régression sur discontinuité locale linéaire avec noyau triangulaire ; extension fuzzy par ratio des sauts.

## Hypothèses et limites

- Les données sont synthétiques ; les résultats ne valident aucune étude réelle.
- Le test de randomisation suppose que les permutations reproduisent exactement le mécanisme d'assignation étudié. Le test présenté cible le nul net de Fisher ; il ne constitue pas automatiquement un test exact de l'ATE moyen nul.
- La standardisation binaire exige des observations dans chacune des quatre cellules traitement × covariable.
- Les scores de propension empiriques sont seulement un exemple avec une covariable binaire. Aucun modèle général de score n'est ajusté.
- Les estimateurs IPW/AIPW sont des points estimés pédagogiques ; pas d'erreurs-types robustes ni d'intervalles de confiance génériques.
- L'AIPW exige les hypothèses d'identification, un support suffisant et des modèles auxiliaires adaptés. La fonction ne vérifie pas ces hypothèses.
- Le ratio de Wald ne démontre ni exclusion, ni indépendance, ni monotonie ; son interprétation LATE est conditionnelle à ces hypothèses.
- DiD est uniquement le calcul 2×2 ; tendances parallèles, absence d'anticipation et absence de chocs différentiels ne sont pas testées.
- Le RD local linéaire fournit un saut ponctuel avec noyau triangulaire et bande passante fournie ; il ne calcule pas l'inférence robuste corrigée du biais de rdrobust.
- Les analyses longitudinales, adoption échelonnée, IV robustes aux instruments faibles, médiation, interférence et méthodes DML génériques ne sont pas implémentées.
- Ce laboratoire ne remplace pas un logiciel spécialisé ni une analyse causale complète.

## Fichiers

- causal_lab.py : fonctions Python.
- causal_lab.R : fonctions et contrôles R.
- tests/test_causal_lab.py : tests Python.
