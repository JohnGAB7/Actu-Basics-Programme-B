# B13 — Évaluation formative de synthèse

**Version :** 1.3 · **Total :** 100 points · **Statut :** complément MANOVA révisé pour intégrer la correction de Roy ; validation CI à confirmer, test apprenant et revue indépendante à réaliser.
Cette évaluation vérifie les concepts du bloc. Elle ne constitue ni examen certifiant ni preuve de validation académique indépendante.

## Partie A — Fondements (20 points)
1. (6 pts) On observe p variables sur n individus. Définir la matrice de données, le vecteur moyen et la covariance empirique ; préciser leurs dimensions.
2. (6 pts) Pour deux variables, variances 4 et 9, covariance 3, calculer la variance de X−Y et la corrélation.
3. (4 pts) Expliquer pourquoi la normalité marginale de chaque variable ne garantit pas la normalité multivariée.
4. (4 pts) Donner une situation où covariance est préférable à corrélation et une où la standardisation est justifiée.

## Partie B — Inférence et modèles (20 points)
5. (8 pts) Décrire le test T² de Hotelling pour une moyenne vectorielle : hypothèses, statistique et transformation en loi F sous normalité multivariée et S inversible.
6. (6 pts) Expliquer la différence entre une MANOVA et une série de tests ANOVA séparés ; citer Wilks, Pillai, Hotelling–Lawley et Roy, et préciser pourquoi la borne F de Roy doit être interprétée avec prudence.
7. (6 pts) Une MANOVA est significative. Quelles analyses de suivi sont possibles et quelles précautions de multiplicité faut-il prendre ?

## Partie C — Réduction dimensionnelle (25 points)
8. (8 pts) Dériver la première composante principale comme maximisation de variance sous contrainte de norme unitaire.
9. (5 pts) Expliquer la différence entre ACP et analyse factorielle commune.
10. (6 pts) Un jeu de variables est mesuré en euros, milliers d'euros et nombre de contrats. Discuter le choix entre matrice de covariance et matrice de corrélation.
11. (6 pts) Citer trois critères complémentaires pour retenir le nombre de composantes/facteurs et expliquer pourquoi un seuil de variance cumulée ne suffit pas.

## Partie D — Classification (15 points)
12. (6 pts) Comparer LDA et QDA du point de vue des hypothèses de covariance et des frontières de décision.
13. (5 pts) Comparer k-means et classification hiérarchique ; donner une limite de chacun.
14. (4 pts) Pourquoi le clustering ne révèle-t-il pas nécessairement des groupes naturels préexistants ?

## Partie E — Grande dimension et reproductibilité (20 points)
15. (6 pts) Montrer que le rang de la covariance empirique centrée est au plus min(p,n−1). En déduire le problème lorsque p≥n.
16. (5 pts) Expliquer le principe d'un estimateur shrinkage \(\hat\Sigma_\lambda=(1-\lambda)S+\lambda T\) et le compromis biais-variance.
17. (5 pts) Décrire une fuite d'information liée à une standardisation réalisée avant validation croisée.
18. (4 pts) Proposer un protocole de vérification pour une analyse multivariée appliquée à un portefeuille d'assurance.

## Corrigé indicatif et barème
1. X est n×p si individus en lignes ; \(\bar x\) est p×1 ; S est p×p.
2. \(\operatorname{Var}(X-Y)=4+9-2(3)=7\) ; corrélation = 3/(2×3)=0,5.
3. Les marges ne déterminent pas la dépendance jointe ; plusieurs copules/dépendances sont possibles pour des marges identiques.
4. Covariance si les unités ont un sens comparable ou si l'échelle réelle importe ; corrélation si les échelles diffèrent et si l'on souhaite une contribution initiale standardisée. La décision dépend du contexte.
5. \(T^2=n(\bar X-\mu_0)^TS^{-1}(\bar X-\mu_0)\) ; sous H0, normalité multivariée, indépendance et n>p, \((n-p)T^2/[p(n-1)]\sim F_{p,n-p}\).
6. MANOVA teste une hypothèse globale sur le vecteur des moyennes et prend en compte les covariances ; Wilks résume le déterminant, Pillai la trace de H rapportée à H+E, Hotelling–Lawley la trace E⁻¹H et Roy la plus grande racine. La F de Roy est une borne supérieure hors cas exacts, donc sa p-value est une borne inférieure et peut être trop optimiste.
7. Contrastes prévus, tests univariés ou comparaisons post-hoc avec ajustement (Holm, Bonferroni ou autre méthode justifiée), tailles d'effet et intervalles.
8. Maximiser \(v^TSv\) sous \(v^Tv=1\) ; le multiplicateur de Lagrange conduit à \(Sv=\lambda v\), la solution maximale étant le vecteur propre de plus grande valeur propre.
9. ACP résume la variance totale par projections orthogonales ; l'analyse factorielle modélise la covariance commune via facteurs latents et variances spécifiques.
10. Les unités hétérogènes peuvent faire dominer une variable ; standardiser peut être pertinent mais change l'objectif et peut amplifier le bruit.
11. Scree plot, analyse parallèle, stabilité, interprétabilité, erreur de reconstruction et validation externe selon l'objectif ; aucun seuil unique n'est universel.
12. LDA suppose une covariance commune et des frontières linéaires ; QDA autorise une covariance par classe et des frontières quadratiques, au prix de plus de paramètres.
13. K-means optimise l'inertie autour de centroïdes et dépend de l'initialisation ; hiérarchique dépend du lien et du choix de coupure.
14. Les groupes dépendent de la distance, de l'échelle, de l'algorithme et du nombre choisi ; ce sont des constructions exploratoires.
15. Xc est n×p, rang(Xc)≤min(p,n−1), donc rang(S)=rang(XcᵀXc)≤n−1 ; si p≥n, S est singulière.
16. Le shrinkage rapproche S d'une cible T ; variance plus faible mais biais introduit, avec λ à estimer ou justifier.
17. Le centre et l'écart-type utilisent aussi les observations de validation/test ; les statistiques doivent être ajustées uniquement sur chaque pli d'entraînement puis appliquées au pli tenu à l'écart.
18. Définir cible et unité, auditer données et manquants, séparer temporellement si nécessaire, transformer dans pipeline, comparer méthodes, évaluer stabilité, contrôler fuite et équité, documenter limites.

## Critères de réussite
Seuil indicatif : 70/100, avec reprise obligatoire des erreurs portant sur l'interprétation des hypothèses, la singularité de covariance ou la fuite d'information. L'évaluation doit être testée sur un échantillon d'apprenants avant d'être considérée comme stabilisée.


## Note de seconde passe

Les 18 questions totalisent 100 points (20 + 20 + 25 + 15 + 20). Le corrigé reste indicatif ; les exercices doivent être testés auprès d'apprenants et comparés à des calculs indépendants avant toute validation académique.
