# B11 — Évaluation transversale : théorie de l’inférence statistique

**Durée :** 120 minutes · **Total :** 100 points · **Calculatrice autorisée**  
**Consigne :** justifier les hypothèses utilisées. Une réponse numérique sans interprétation ne reçoit pas tous les points.

## Exercice 1 — Loi d’échantillonnage (10 points)
On suppose $X_1,\ldots,X_n$ i.i.d. de moyenne $\mu$ et variance finie $\sigma^2$.
1. Donner $E(\bar X)$ et $Var(\bar X)$.
2. Énoncer le TCL pour la moyenne.
3. Distinguer loi exacte et approximation asymptotique.

**Corrigé.** $E(\bar X)=\mu$, $Var(\bar X)=\sigma^2/n$. Si $n$ croît, $\sqrt n(\bar X-\mu)/\sigma\Rightarrow N(0,1)$ sous les conditions du TCL. Cette convergence ne dit pas que la moyenne est exactement normale pour chaque taille ; l’exactitude découle par exemple de l’hypothèse de normalité des observations.

## Exercice 2 — Propriétés d’un estimateur (10 points)
Un estimateur vérifie $E(\hat\theta)=\theta+1,5$ et $Var(\hat\theta)=4$.
1. Calculer biais et EQM.
2. Expliquer pourquoi un estimateur biaisé peut être préférable à un estimateur sans biais.

**Corrigé.** Biais $=1,5$. EQM $=4+1,5^2=6,25$. Un estimateur biaisé peut avoir une variance suffisamment plus faible pour réduire l’EQM ; le choix dépend du critère et du contexte.

## Exercice 3 — Maximum de vraisemblance (10 points)
Soit $X_i\sim Poisson(\lambda)$ i.i.d., $\lambda>0$.
1. Écrire la log-vraisemblance.
2. Déterminer l’EMV.
3. Donner sa variance.

**Corrigé.** À une constante près, $\ell(\lambda)= (\sum_i x_i)\log\lambda-n\lambda$. Le score s’annule en $\hat\lambda=\bar X$, qui maximise la log-vraisemblance pour $\sum x_i>0$ ; si la somme vaut zéro, le maximum est à la frontière limite $\lambda\downarrow0$ si l’espace paramétrique est strictement positif. Sous le modèle, $Var(\bar X)=\lambda/n$.

## Exercice 4 — Information et borne (10 points)
Pour une observation Bernoulli de paramètre $p\in(0,1)$ :
1. Calculer le score et l’information de Fisher.
2. Comparer la variance de $\bar X$ à la borne de Cramér–Rao.

**Corrigé.** Le score vaut $X/p-(1-X)/(1-p)=(X-p)/[p(1-p)]$. Son information est $1/[p(1-p)]$. Pour $n$ observations, elle vaut $n/[p(1-p)]$. La borne est $p(1-p)/n$, égale à $Var(\bar X)$ ; les conditions régulières et l’absence de biais sont satisfaites pour $p\in(0,1)$.

## Exercice 5 — Intervalle de confiance (10 points)
Un échantillon normal de taille 25 donne $\bar x=12$ et $s=5$.
1. Construire un IC bilatéral à 95 % pour la moyenne inconnue.
2. Préciser l’hypothèse nécessaire.

**Corrigé.** $12\pm t_{24;0,975}\,5/5$. Avec $t_{24;0,975}\approx2,064$, l’intervalle est environ $[9,936;14,064]$. Il est exact si les observations sont i.i.d. normales ; autrement il s’agit au mieux d’une approximation à justifier.

## Exercice 6 — Test et p-value (10 points)
Un test bilatéral produit $p=0,032$.
1. Décider au niveau 5 %.
2. Donner une interprétation correcte et deux interprétations incorrectes.

**Corrigé.** Rejeter $H_0$ au seuil 5 %. La p-value est la probabilité, sous $H_0$ et le modèle du test, d’obtenir une statistique au moins aussi extrême que celle observée. Elle n’est ni la probabilité que $H_0$ soit vraie, ni la probabilité que le résultat soit « dû au hasard ».

## Exercice 7 — Puissance et multiplicité (10 points)
1. Pour 8 tests indépendants de niveau 5 %, calculer le risque d’au moins un faux positif sous tous les nuls.
2. Donner le seuil Bonferroni pour un FWER de 5 %.

**Corrigé.** $1-0,95^8\approx0,3366$. Bonferroni : $0,05/8=0,00625$ par test.

## Exercice 8 — Tests de vraisemblance (10 points)
Un test LR donne $D=6,4$ avec 2 contraintes.
1. Donner la loi limite de référence.
2. Expliquer les conditions et une situation où elle pourrait ne pas convenir.

**Corrigé.** Sous $H_0$, asymptotiquement $D\sim\chi^2_2$ sous les conditions de régularité du théorème de Wilks. Une frontière de l’espace paramétrique, une non-identifiabilité ou un petit échantillon peuvent invalider l’approximation usuelle.

## Exercice 9 — Bootstrap et permutation (10 points)
Des mesures sont prises sur plusieurs salariés dans chacun de 12 établissements.
1. Pourquoi un bootstrap ligne par ligne peut-il être inadapté ?
2. Quelle unité pourrait être rééchantillonnée ?
3. Quelle hypothèse justifie une permutation d’étiquettes ?

**Corrigé.** Les observations d’un même établissement peuvent être corrélées ; le bootstrap individuel détruit la structure de dépendance. Si les établissements sont les unités indépendantes du plan, rééchantillonner les établissements (éventuellement avec un schéma à plusieurs niveaux). La permutation exige l’échangeabilité/invariance sous le nul et doit respecter le plan (appariement, grappes, strates).

## Exercice 10 — Inférence bayésienne (10 points)
On observe 6 succès sur 8 essais Bernoulli et l’on choisit $p\sim Beta(2,2)$.
1. Donner la loi a posteriori.
2. Calculer la moyenne postérieure.
3. Interpréter un intervalle crédible à 95 %.

**Corrigé.** Posterior $Beta(8,4)$ ; moyenne $8/(8+4)=2/3$. Un intervalle crédible à 95 % contient 95 % de la masse postérieure conditionnellement aux données, au modèle et au prior. Il n’a pas l’interprétation fréquentiste d’une couverture répétée.

## Barème de qualité
La correction évalue les calculs, les hypothèses, la qualité de l’interprétation et la capacité à signaler les limites. Les confusions suivantes sont des erreurs majeures : p-value versus probabilité de $H_0$ ; intervalle de confiance versus intervalle crédible ; exact versus asymptotique ; indépendance versus échangeabilité ; niveau versus puissance.

**Nature de l’épreuve :** évaluation formative originale du Programme B. Elle ne constitue ni une certification ni une validation académique externe.
