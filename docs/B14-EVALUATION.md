# B14 — Évaluation formative de synthèse

**Version :** 1.1.0 · **Durée :** 120 minutes · **Total :** 100 points · **Statut :** seconde passe interne ; test apprenant à réaliser  
Cette évaluation est formative et non certifiante. Les réponses doivent expliciter les hypothèses et l'estimand.

## Partie A — Estimands et hypothèses (20 points)

1. (5 pts) Définir \(Y(1)\), \(Y(0)\), ATE et ATT. Pourquoi l'effet individuel n'est-il pas généralement observable ?
2. (5 pts) Énoncer consistance, échangeabilité conditionnelle, positivité et absence d'interférence. Donner une menace concrète pour chacune.
3. (6 pts) Décomposer la différence brute entre traités et témoins en ATT et terme de sélection. Interpréter le terme de sélection.
4. (4 pts) Distinguer validité interne, validité externe et transportabilité d'un estimand.

## Partie B — Expériences et plans (20 points)

5. (5 pts) Distinguer effet de l'assignation (ITT) et effet du traitement reçu. Pourquoi l'analyse « selon traitement reçu » peut-elle perdre la protection de la randomisation ?
6. (5 pts) Distinguer le test de randomisation du nul net de Fisher et un test de l'ATE moyen nul.
7. (6 pts) Dans un plan \(2^2\), les quatre moyennes sont \(y_{--}=10\), \(y_{+-}=14\), \(y_{-+}=12\), \(y_{++}=20\). Calculer les effets A, B et AB selon la convention haut-moins-bas.
8. (4 pts) Pour le plan fractionnaire \(2^{3-1}\) défini par \(C=AB\), donner la relation définissante et les alias des effets principaux.

## Partie C — DAG et ajustement (20 points)

9. (5 pts) Distinguer confondeur, médiateur et collisionneur dans trois DAG simples.
10. (5 pts) Énoncer le critère de porte arrière et expliquer pourquoi un descendant du traitement ne doit pas être inclus mécaniquement.
11. (5 pts) Pourquoi une régression qui ajuste le médiateur n'identifie-t-elle pas automatiquement l'effet direct naturel ?
12. (5 pts) Expliquer le problème d'un confondeur variant dans le temps qui est lui-même affecté par un traitement antérieur.

## Partie D — Méthodes observationnelles et quasi expérimentales (25 points)

13. (5 pts) Dans deux strates X, les risques traités sont 0,30 et 0,10 ; les risques témoins sont 0,40 et 0,20. La population cible est composée à 50 % de chaque strate. Calculer les deux risques standardisés et leur différence.
14. (5 pts) Définir le score de propension. Écrire les poids ATE et ATT et citer quatre diagnostics après pondération.
15. (5 pts) Écrire l'estimateur AIPW de l'ATE et expliquer précisément le sens de « doublement robuste » ainsi que ses limites.
16. (5 pts) Un instrument binaire produit une différence de résultat de 4 et une différence de traitement de 0,20. Calculer le ratio de Wald et préciser l'estimand local possible sous monotonie.
17. (5 pts) Distinguer RDD nette et floue ; énoncer continuité, absence de manipulation et portée locale.

## Partie E — DiD, sensibilité et protocole (15 points)

18. (5 pts) Les moyennes avant/après sont 10/14 dans le groupe traité et 8/9 dans le groupe témoin. Calculer DiD et énoncer l'hypothèse d'identification.
19. (5 pts) Proposer une analyse de sensibilité à la confusion non mesurée et un contrôle négatif ; préciser pourquoi aucun ne prouve à lui seul l'absence de biais.
20. (5 pts) Décrire un protocole causal pour évaluer une politique de prévention dans un portefeuille d'assurance, de la définition de l'estimand au rapport final.

## Corrigé indicatif

1. \(Y(1)\) et \(Y(0)\) sont les résultats potentiels sous les deux stratégies ; ATE \(=E[Y(1)-Y(0)]\), ATT \(=E[Y(1)-Y(0)\mid A=1]\). La même unité ne révèle qu'un résultat potentiel.
2. Consistance : le traitement reçu correspond à l'intervention définie ; échangeabilité : \(Y(a)\perp A\mid X\) ; positivité : \(0<P(A=a\mid X)<1\) dans la cible ; absence d'interférence : le traitement d'une unité n'affecte pas le résultat d'une autre dans la formulation simple. Exemples : versions multiples, confondeur omis, strate sans témoin, contagion entre agences.
3. Sous consistance, la différence observée vaut \(ATT+\{E[Y(0)\mid A=1]-E[Y(0)\mid A=0]\}\). Le terme entre accolades est la sélection sur le résultat potentiel sans traitement ; il ne disparaît pas automatiquement.
4. Interne : identification dans l'étude ; externe : pertinence dans d'autres populations/contextes ; transportabilité : conditions et pondérations permettant de relier une population source à une cible.
5. ITT estime l'effet de l'assignation initiale. Le traitement reçu dépend de l'observance, qui peut être liée au pronostic ; conditionner dessus peut réintroduire confusion.
6. Le nul net impose \(Y_i(1)=Y_i(0)\) pour chaque unité et rend les résultats imputables sous toute réassignation. Le nul moyen impose seulement une moyenne d'effets nulle et n'est pas généralement testé exactement par la même permutation.
7. Effet A \(=[(14+20)-(10+12)]/2=6\). Effet B \(=[(12+20)-(10+14)]/2=4\). Interaction AB \(=[20-14-12+10]/2=2\). Avec codage ±1, les coefficients correspondants sont 3, 2 et 1.
8. \(I=ABC\), donc \(A=BC\), \(B=AC\), \(C=AB\). Les effets principaux sont aliasés avec des interactions à deux facteurs ; l'interprétation dépend de l'hypothèse que ces interactions sont négligeables.
9. Confondeur : cause commune du traitement et du résultat ; médiateur : variable sur un chemin causal du traitement au résultat ; collisionneur : effet commun de deux causes, conditionner dessus peut ouvrir un chemin.
10. Z bloque tous les chemins qui entrent dans A par une flèche et ne contient aucun descendant de A. Un descendant peut être médiateur ou variable de sélection et changer l'estimand ou ouvrir un biais.
11. Les effets naturels utilisent des résultats potentiels imbriqués et nécessitent des hypothèses séquentielles supplémentaires sur les confusions traitement-médiateur et médiateur-résultat, y compris après traitement.
12. L'ajustement conventionnel peut bloquer l'effet du traitement antérieur ou ouvrir un biais. Les g-formules longitudinales et modèles structurels marginaux sont des options sous hypothèses spécifiques.
13. Risque traité standardisé \(=0,5(0,30)+0,5(0,10)=0,20\). Risque témoin \(=0,5(0,40)+0,5(0,20)=0,30\). Différence \(=-0,10\).
14. \(e(X)=P(A=1\mid X)\). Poids ATE : \(A/e+(1-A)/(1-e)\). Poids ATT : \(A+(1-A)e/(1-e)\). Diagnostics : SMD, distributions des scores, support commun, poids extrêmes et ESS.
15. \(\hat\tau=n^{-1}\sum_i[\hat m_1-\hat m_0+A(Y-\hat m_1)/\hat e-(1-A)(Y-\hat m_0)/(1-\hat e)]\). Sous identification et régularité, consistance si le modèle de résultat ou le score est correctement spécifié. Pas de protection contre deux modèles faux, confusion non mesurée ou positivité violée.
16. Wald \(=4/0,20=20\). Sous indépendance, exclusion, pertinence, consistance et monotonie, il peut identifier le LATE chez les compliers, pas nécessairement l'ATE.
17. RDD nette : traitement déterminé par le seuil ; floue : probabilité de traitement saute au seuil et l'effet est le ratio des sauts. Continuité des résultats potentiels et absence de manipulation précise sont essentielles ; l'effet est local au seuil.
18. DiD \(=(14-10)-(9-8)=3\). L'identification requiert les tendances parallèles des résultats potentiels non traités, plus absence d'anticipation et de chocs différentiels pertinents.
19. Scénarios quantitatifs sur la force d'un confondeur omis, bornes adaptées ou paramètres \(\Gamma\) ; contrôle négatif d'exposition/résultat justifié scientifiquement. Les diagnostics ne testent pas toutes les hypothèses non observables.
20. Définir intervention, cible, résultat, horizon, unité et estimand ; dessiner DAG ; choisir plan ; préspécifier confondeurs et exclusions ; diagnostiquer support et qualité ; estimer avec incertitude ; sensibilité/placebos ; documenter validité externe et code.

## Critères de réussite

Seuil indicatif : 70/100. Une erreur sur estimand, hypothèses d'identification, sélection par collision, portée locale IV/RDD ou tendances parallèles impose une reprise ciblée. L'évaluation doit être testée auprès d'apprenants avant stabilisation.
