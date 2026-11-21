# B08 — Laboratoire expérimental de probabilités

Ce laboratoire accompagne les unités P01–P10. Il met en regard les résultats mathématiques et des expériences simulées reproductibles. Les simulations illustrent les théorèmes ; elles ne les démontrent pas.

## Prérequis et exécution

- Python 3.10+ (bibliothèque standard uniquement)
- R 4.1+ (fonctions de base uniquement)

Depuis la racine du dépôt :

```bash
python labs/b08/probability_lab.py
python -m unittest discover -s labs/b08/tests -v
Rscript labs/b08/probability_lab.R
```

Les graines aléatoires sont fixées dans les deux implémentations. Les valeurs obtenues dans Python et R ne sont pas censées être identiques : les générateurs pseudo-aléatoires et leurs algorithmes diffèrent. La reproductibilité est attendue à l'intérieur de chaque environnement et version de générateur. Les variances empiriques E03 utilisent le moment centré d'ordre 2 avec dénominateur n dans les deux langages ; elles ne correspondent pas à l'estimateur sans biais avec dénominateur n−1.

## Expériences

| Expérience | Question | Résultat théorique de référence |
|---|---|---|
| E01 — Fréquences empiriques | Comment la fréquence d'un événement se stabilise-t-elle ? | Pour Bernoulli(p), la fréquence converge vers p. |
| E02 — Bayes et taux de base | Quelle est la probabilité d'être malade après un test positif ? | (P(M\mid +)=\frac{P(+\mid M)P(M)}{P(+)}\). |
| E03 — Lois usuelles | Comment simuler des variables Bernoulli, exponentielles et normales ? | Espérances et variances des lois correspondantes. |
| E04 — Dépendance | Une covariance nulle implique-t-elle l'indépendance ? | Non : prendre Y=X² et X symétrique non dégénérée. |
| E05 — Loi des grands nombres | Comment la moyenne empirique évolue-t-elle avec n ? | Pour des variables i.i.d. intégrables, la moyenne converge vers l'espérance. |
| E06 — TCL | Comment la distribution des moyennes se rapproche-t-elle d'une normale ? | Sous les hypothèses du TCL, la moyenne centrée-réduite converge en loi vers N(0,1). |
| E07 — Portefeuille de sinistres | Comment fréquence et sévérité déterminent-elles la charge agrégée ? | Modèle composé : N~Poisson(λ), S_i sévérités i.i.d., indépendantes de N ; E[ΣS_i]=λE[S]. |

## Laboratoire interactif dans le Learning Studio

La page « Laboratoire B08 » du site propose six expériences directement dans le navigateur :

1. Loi forte des grands nombres : trajectoire de fréquences de Bernoulli.
2. Théorème de Bayes : valeur prédictive positive selon les paramètres du test.
3. Loi binomiale : fonction de masse, espérance et variance.
4. Risque collectif : simulation d'un portefeuille composé Poisson–exponentiel.
5. Théorème central limite : 3 000 moyennes d'échantillons exponentiels standardisées, comparées à la densité N(0,1). La taille d'échantillon est réglable ; l'asymétrie théorique 2/√n est affichée.
6. Dépendance et covariance : contre-exemple exact avec X uniforme sur {-2,-1,1,2} et Y=X², pour lequel Cov(X,Y)=0 sans indépendance.

Les expériences interactives utilisent des graines fixes pour rendre les résultats reproductibles. Les onglets suivent le modèle ARIA et prennent en charge la navigation clavier par flèches, Home et End. Les curseurs ont des noms accessibles. Cette documentation décrit les fonctionnalités livrées ; elle ne constitue pas un audit complet par lecteur d'écran.

## Paramètres documentés

- E01 : p = 0,20 ; n = 100 000.
- E02 : prévalence = 1 %, sensibilité = 95 %, spécificité = 90 %.
- E03 : Bernoulli(p = 0,30), exponentielle de taux 2 (moyenne 0,50) et normale standard ; n = 100 000.
- E04 : X uniforme sur {-2, -1, 1, 2}, Y = X².
- E05 : Bernoulli(p = 0,30), n = 100 000.
- E06 : sommes de 40 variables exponentielles de moyenne 1, répétées 10 000 fois.
- E07 : fréquence annuelle λ = 0,12, sévérité exponentielle de moyenne 800, portefeuille de 100 000 expositions.

## Interprétation et limites

1. Une trajectoire simulée est une réalisation, pas une preuve d'un théorème.
2. Une approximation normale doit être appréciée selon la loi, la taille d'échantillon et la quantité étudiée ; aucune règle universelle ne garantit la précision pour tout modèle.
3. Le modèle composé de E07 suppose indépendance entre fréquence et sévérité, homogénéité des expositions et absence de dépendance entre sinistres. Ces hypothèses sont pédagogiques, pas une description complète d'un portefeuille réel.
4. Les écarts Monte-Carlo sont normaux. Comparer les estimations aux valeurs théoriques et augmenter le nombre de répétitions si nécessaire.
5. Les tests automatiques contrôlent les identités, les invariants et la reproductibilité ; ils ne remplacent ni une revue scientifique indépendante ni des tests auprès d'apprenants.

## Fichiers

- [Implémentation Python](./probability_lab.py)
- [Implémentation R](./probability_lab.R)
- [Tests unitaires Python](./tests/test_probability_lab.py)

## Sources de référence

- Harvard Statistics 110 — https://stat110.hsites.harvard.edu/
- MIT OCW 6.041SC — https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/
- MIT OCW 18.05 — https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/

Ces références soutiennent le cadrage général ; les expériences sont des productions pédagogiques du projet Actu-Basics.
