# B12 — Évaluation formative

**Durée :** 120 minutes · **Total :** 100 points · **Version :** 1.1.0 · **Statut :** seconde passe interne effectuée · évaluation formative à tester auprès d'apprenants.

1. **Interprétation (10 pts).** Pour $E(Y\mid X)=12+1,8X$, interpréter pente, constante et limites causales.
2. **OLS (10 pts).** Dériver les équations normales et la solution $\hat\beta=(X^TX)^{-1}X^Ty$ lorsque X est de rang plein.
3. **Géométrie et rang (10 pts).** Interpréter $X^Te=0$, expliquer l'identifiabilité en cas de rang déficient et donner les degrés de liberté résiduels pour n=50 et p=4.
4. **Inférence (15 pts).** Avec constante et trois prédicteurs, n=50 : énoncer l'hypothèse du test F global ; distinguer intervalle pour la moyenne conditionnelle et intervalle prédictif.
5. **Interaction (10 pts).** Dans $E(Y\mid X,Z)=\beta_0+\beta_1X+\beta_2Z+\beta_3XZ$, dériver l'effet marginal en X et l'interpréter.
6. **Diagnostics (10 pts).** Interpréter une forme en éventail dans le graphique résidus-ajustés et proposer des investigations.
7. **Transformation/régularisation (10 pts).** Pour une pente log-linéaire 0,05, calculer $100(e^{0,05}-1)$ ; comparer ridge/LASSO ; expliquer le risque de fuite.
8. **GLM (15 pts).** Écrire le logit ; interpréter un coefficient 0,4 via l'odds ratio ; écrire une régression de Poisson avec offset ; définir la surdispersion.
9. **Validation groupée (10 pts).** Proposer une validation pour de nouveaux hôpitaux ; expliquer l'intercept aléatoire et calculer l'ICC pour $\tau^2=0,4$ et $\sigma^2=0,6$.

## Corrigé indicatif

1. La moyenne conditionnelle augmente de 1,8 unité de Y par unité de X ; la constante concerne X=0 et peut être extrapolative si zéro est hors domaine ; la pente n'est pas nécessairement causale.
2. Minimiser $\|y-Xb\|^2$ donne $X^TX\hat\beta=X^Ty$. Si X est de rang colonne plein, $X^TX$ est inversible et la solution explicite suit.
3. $X^Te=0$ signifie que les résidus sont orthogonaux à l'espace colonne de X. En rang déficient, les coefficients ne sont pas tous identifiables de façon unique, même si les valeurs ajustées peuvent l'être. Les degrés de liberté résiduels valent 50−4=46.
4. $H_0$ : les trois pentes sont nulles simultanément. L'intervalle de confiance concerne $E(Y_0\mid x_0)$ ; l'intervalle prédictif inclut en plus le bruit individuel et est donc plus large.
5. $\partial E(Y\mid X,Z)/\partial X=\beta_1+\beta_3Z$ ; l'association conditionnelle de X dépend de Z. Ce n'est pas une preuve d'interaction causale.
6. Hétéroscédasticité potentielle ; examiner structure, échelle, variables omises, non-linéarité et spécification. Ne pas supprimer mécaniquement des observations.
7. $100(e^{0,05}-1)\approx5,13\%$. Ridge contracte généralement sans annuler ; LASSO peut mettre des coefficients à zéro. Imputation, standardisation et réglage doivent être appris dans les plis d'entraînement.
8. $\log[p/(1-p)]=x^T\beta$ ; pour β=0,4, $OR=e^{0,4}\approx1,49$. Avec exposition e, $\log\mu=\log e+x^T\beta$. Une variance conditionnelle supérieure à la moyenne Poisson indique une surdispersion possible à investiguer.
9. Séparer les hôpitaux entiers entre entraînement et test. L'intercept aléatoire représente une hétérogénéité entre groupes et une dépendance intra-groupe. $ICC=\tau^2/(\tau^2+\sigma^2)=0,4/(0,4+0,6)=0,4$.

Une réponse numérique sans justification ne reçoit pas la totalité des points. Cette épreuve formative ne vaut pas certification.
