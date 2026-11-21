# B20 — Évaluation formative de synthèse

**Version :** 1.2 · **Durée :** 120 minutes · **Total :** 100 points · **Statut :** publiée avec le bloc ; test apprenant et revue indépendante à réaliser.
Évaluation formative, non certifiante.

## Partie A — Probabilité et convergence (20 points)
1. (5 pts) Définir convergence presque sûre, en probabilité et en loi.
2. (5 pts) Énoncer le théorème de convergence dominée et son rôle.
3. (5 pts) Expliquer une implication entre convergence Lp et convergence en probabilité.
4. (5 pts) Distinguer convergence uniforme de fonctions de répartition et convergence ponctuelle.

## Partie B — Asymptotique et processus empiriques (20 points)
5. (5 pts) Définir consistance et normalité asymptotique.
6. (5 pts) Énoncer la méthode delta.
7. (5 pts) Décrire Glivenko-Cantelli et Donsker.
8. (5 pts) Pourquoi le bootstrap i.i.d. peut-il échouer sur données dépendantes ?

## Partie C — Inférence avancée (20 points)
9. (5 pts) Définir score et information de Fisher.
10. (5 pts) Expliquer paramètre de nuisance et vraisemblance profilée.
11. (5 pts) Distinguer MLE régulier et cas à frontière/singularité.
12. (5 pts) Citer diagnostics essentiels pour MCMC.

## Partie D — Processus, grande dimension et calcul (20 points)
13. (5 pts) Définir martingale relativement à une filtration.
14. (5 pts) Énoncer hypothèse clé d'une procédure d'arrêt optionnel.
15. (5 pts) Pourquoi OLS est-il mal posé lorsque p>n sans structure ?
16. (5 pts) Comparer gradient descent et Newton.

## Partie E — Recherche et intégrité (20 points)
17. (5 pts) Décrire une simulation Monte-Carlo rigoureuse.
18. (5 pts) Distinguer analyse exploratoire et confirmatoire.
19. (5 pts) Citer les éléments nécessaires à la reproductibilité.
20. (5 pts) Décrire une contribution de recherche et ses limites ; préciser comment une fonction de perte, un risque bayésien ou un critère minimax peut structurer une décision statistique.

## Corrigé indicatif
1. A.s. : convergence avec probabilité 1 ; probabilité : probabilité d'écart supérieur à ε tend vers 0 ; loi : convergence des distributions aux points continus.
2. Si X_n converge presque sûrement et |X_n|≤Y intégrable, alors E[X_n] converge vers E[X].
3. Pour p>0, Markov donne P(|X_n−X|>ε)≤E|X_n−X|^p/ε^p.
4. Glivenko-Cantelli est uniforme sur x ; convergence en loi de variables se formule via fonctions de répartition aux points de continuité.
5. Estimateur converge en probabilité vers cible ; normalité décrit erreur centrée et normalisée.
6. Transforme limite asymptotique par fonction différentiable via gradient et covariance.
7. GC : convergence uniforme empirique ; Donsker : processus empirique normalisé converge vers pont brownien sous cadre i.i.d.
8. L'échangeabilité i.i.d. ne représente pas dépendance temporelle.
9. Score : gradient log-vraisemblance ; information : variance du score ou Hessienne attendue sous régularité.
10. Nuisance : paramètre non cible ; profil : maximiser vraisemblance sur nuisance.
11. Frontière et singularité peuvent produire limites non gaussiennes et tests standards invalides.
12. Traces, R-hat, ESS, autocorrélation, divergences et exploration de modes.
13. E[X_t|F_s]=X_s pour s≤t, avec intégrabilité et adaptation.
14. Conditions d'intégrabilité, bornitude ou uniform integrability selon le théorème.
15. Rang de X'X insuffisant et non-identifiabilité sans hypothèses structurelles.
16. Gradient utilise pente et pas ; Newton utilise courbure et exige stabilité Hessienne.
17. Définir DGP, paramètres, scénarios, métriques, réplications, erreur Monte-Carlo et code.
18. Exploratoire génère hypothèses ; confirmatoire teste protocole défini.
19. Code, données, environnement, versions, paramètres, graines et documentation.
20. Contribution précise, méthode, preuves/résultats, comparaison, robustesse et limites ; une décision statistique doit préciser l'espace d'actions et la fonction de perte.

## Critères de réussite
Seuil indicatif : 70/100. Toute confusion sur les hypothèses de convergence, validité du bootstrap, diagnostics MCMC ou portée d'une conclusion impose une reprise ciblée. Une évaluation réelle de niveau master recherche nécessite correction humaine et jury.



## Barème analytique et critères de correction

Le barème reste de 100 points. Les réponses doivent énoncer les hypothèses avant les conclusions. Les points sont attribués à la définition, au théorème ou algorithme, à la justification des conditions, au calcul et à l'interprétation.

Pour le projet, exiger :
- question, estimand et contribution identifiés ;
- hypothèses de régularité, d'identification et de dépendance ;
- preuves ou dérivations reproductibles ;
- simulation avec DGP, scénarios, réplications et MCSE ;
- diagnostics de convergence/optimisation ;
- sensibilité aux hypothèses, priors, pénalités et spécifications ;
- données, code, versions et graines traçables ;
- limites et résultats négatifs documentés.

## Cas limites obligatoires

Inclure : convergence en probabilité sans convergence presque sûre ; domination intégrable manquante ; paramètre à frontière ; densité nulle au quantile ; classe non Donsker ; bootstrap i.i.d. sur données dépendantes ; posterior multimodale ou funnel ; R-hat/ESS défavorables ; arrêt non borné sans uniform integrability ; matrice de design singulière ; p>n ; forte corrélation de variables ; multiplicité et dépendance des tests ; Hessienne mal conditionnée ; minimum local ; erreur Monte-Carlo non négligeable.

## Critères bloquants

Une démonstration ne peut pas invoquer un théorème sans ses hypothèses ; une chaîne MCMC ne peut être dite convergée sur le seul taux d'acceptation ; une simulation ne prouve pas un résultat général ; un algorithme qui s'arrête n'est pas nécessairement à l'optimum global ; et une procédure FDR ne garantit pas que chaque découverte individuelle est vraie.
