# B19 — Laboratoire d'économétrie et de statistiques financières

Laboratoire pédagogique Python/R sans dépendances externes.

## Couverture
- OLS et diagnostics descriptifs de base ;
- covariance sandwich HC0 et HAC Newey–West (noyau de Bartlett, sans correction petit échantillon) ;
- transformation within pour effets fixes de groupe ;
- estimateur de Wald à un instrument et sans covariables ;
- fonction logit et effet marginal ;
- rendements simples/logarithmiques ;
- alpha/bêta CAPM sur rendements excédentaires ;
- VaR/Expected Shortfall empiriques ;
- statistique LR de couverture inconditionnelle de Kupiec ;
- variance réalisée.

## Exécution
Depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b19/tests -v
Rscript labs/b19/econometrics_lab.R
```

## Limites
Les fonctions OLS supposent un design explicitement fourni et de rang plein. HC0/HAC sont des versions didactiques sans correction petit échantillon, cluster multiway ni inférence à nombre de clusters faible. Le within n'est pas un estimateur panel complet avec effets temporels ou erreurs clusterisées. Le ratio de Wald n'est pas une estimation 2SLS générale et ne couvre pas les covariables. Logit n'est pas ajusté ; seule la probabilité et la pente marginale sont illustrées. VaR/ES et Kupiec sont empiriques et n'incluent pas p-values ni tests conditionnels. La variance réalisée ne corrige pas le bruit de microstructure. Aucune donnée de marché ou macroéconomique externe n'est téléchargée.
