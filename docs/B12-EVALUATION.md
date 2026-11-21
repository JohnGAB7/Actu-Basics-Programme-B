# B12 — Évaluation formative

**Durée :** 120 minutes · **Total :** 100 points · **Version :** 0.1.0 · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.

1. **Interprétation (10 pts).** Pour $E(Y|X)=12+1,8X$, interpréter pente, constante et limites causales.
2. **OLS (15 pts).** Dériver $\hat\beta=(X^TX)^{-1}X^Ty$ lorsque X est de rang plein ; interpréter $X^Te=0$.
3. **Inférence (15 pts).** Modèle avec constante et trois prédicteurs, n=50 : degrés de liberté résiduels ; hypothèse du test F global ; distinguer IC moyen et intervalle prédictif.
4. **Interaction (10 pts).** Dans $E(Y|X,Z)=\beta_0+\beta_1X+\beta_2Z+\beta_3XZ$, dériver l'effet marginal en X.
5. **Diagnostics (10 pts).** Interpréter une forme en éventail dans résidus-ajustés et proposer des investigations.
6. **Transformation/régularisation (10 pts).** Pour pente log-linéaire 0,05, calculer $100(e^{0,05}-1)$ ; comparer ridge/LASSO ; expliquer le risque de fuite.
7. **GLM (15 pts).** Écrire le logit ; interpréter coefficient 0,4 via OR ; écrire Poisson avec offset ; définir surdispersion.
8. **Validation groupée (15 pts).** Proposer une validation pour de nouveaux hôpitaux ; expliquer intercept aléatoire ; citer des éléments de rapport hors p-value.

## Corrigé indicatif
1. La moyenne conditionnelle augmente de 1,8 unité de Y par unité de X ; la constante concerne X=0 ; la pente n'est pas nécessairement causale.
2. Minimiser $\|y-Xb\|^2$ donne les équations normales ; la solution existe sous rang plein. $X^Te=0$ exprime l'orthogonalité des résidus à l'espace colonne.
3. 46 degrés de liberté ; toutes les pentes nulles ; l'intervalle prédictif inclut le bruit individuel et est plus large.
4. $\beta_1+\beta_3Z$.
5. Hétéroscédasticité potentielle ; examiner structure, échelle, variables omises et spécification.
6. Environ 5,13 % ; ridge contracte, LASSO peut annuler ; prétraitement appris seulement dans les plis d'entraînement.
7. $\log[p/(1-p)]=x^T\beta$ ; OR $e^{0,4}\approx1,49$ ; $\log\mu=\log e+x^T\beta$ ; variance supérieure à la moyenne.
8. Validation par groupes ; intercept aléatoire représente hétérogénéité et dépendance intra-groupe ; rapporter tailles d'effet, intervalles, diagnostics, métriques et limites.

Une réponse numérique sans justification ne reçoit pas la totalité des points. Cette épreuve ne vaut pas certification.