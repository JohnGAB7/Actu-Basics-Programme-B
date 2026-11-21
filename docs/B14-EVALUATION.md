# B14 — Évaluation formative de synthèse

**Statut :** première proposition à relire · **Durée :** 120 minutes · **Total :** 100 points  
Cette évaluation est formative et non certifiante.

## Partie A — Estimands et hypothèses (20 points)
1. (6 pts) Définir résultats potentiels, ATE et ATT. Pourquoi l'effet individuel n'est-il généralement pas observé ?
2. (6 pts) Énoncer consistance, échangeabilité, positivité et absence d'interférence.
3. (4 pts) Expliquer pourquoi la différence brute entre traités et témoins n'identifie pas nécessairement un effet causal.
4. (4 pts) Distinguer validité interne et validité externe.

## Partie B — Expériences et plans (20 points)
5. (6 pts) Expliquer le rôle de randomisation, réplication et blocage.
6. (6 pts) Pour un plan factoriel à trois facteurs à deux niveaux, donner le nombre de combinaisons et expliquer l'intérêt des interactions.
7. (4 pts) Définir aliasage dans un plan fractionnaire.
8. (4 pts) Pourquoi l'unité d'analyse doit-elle respecter l'unité de randomisation ?

## Partie C — DAG et ajustement (20 points)
9. (6 pts) Dans A ← U → Y, expliquer le biais et le rôle de U.
10. (6 pts) Dans A → M → Y, expliquer pourquoi ajuster M peut modifier l'estimand.
11. (4 pts) Dans A → C ← Y, expliquer le biais de collision.
12. (4 pts) Expliquer pourquoi la sélection de covariables par p-values est inadéquate pour identifier un effet causal.

## Partie D — Méthodes observationnelles et quasi expérimentales (25 points)
13. (5 pts) Écrire la formule de standardisation pour E[Y(a)] et énoncer ses hypothèses.
14. (5 pts) Définir le score de propension et citer trois diagnostics après pondération.
15. (5 pts) Expliquer le sens de « doublement robuste » et ses limites.
16. (5 pts) Énoncer les hypothèses d'un instrument valide et préciser l'interprétation locale possible.
17. (5 pts) Expliquer l'hypothèse de tendances parallèles en différences-en-différences.

## Partie E — Projet et sensibilité (15 points)
18. (5 pts) Proposer deux tests placebo ou de falsification adaptés à une étude temporelle.
19. (5 pts) Décrire une analyse de sensibilité à la confusion non mesurée.
20. (5 pts) Définir les étapes d'un protocole causal sur une politique de prévention en assurance.

## Corrigé indicatif
1. \(Y(1),Y(0)\) sont les résultats potentiels ; ATE = moyenne du contraste dans la population ; ATT = moyenne chez les traités. Un seul résultat potentiel est observé par unité.
2. Consistance relie traitement reçu et résultat potentiel ; échangeabilité exclut la confusion conditionnelle ; positivité garantit les deux traitements dans chaque strate cible ; absence d'interférence exclut les effets entre unités dans la formulation simple.
3. Les groupes peuvent différer par des facteurs qui influencent le traitement et le résultat.
4. Interne : identification dans l'étude ; externe : transport vers une autre population/contexte.
5. Randomisation équilibre en espérance ; réplication estime l'incertitude ; blocage contrôle des facteurs pronostiques.
6. 2³ = 8 combinaisons ; les interactions montrent que l'effet d'un facteur dépend des niveaux des autres.
7. Des effets distincts sont confondus par la structure du plan et ne peuvent être séparés sans hypothèse additionnelle.
8. Les observations du même cluster ne sont pas indépendantes et le nombre d'unités assignées détermine l'information expérimentale.
9. U est une cause commune ; le chemin arrière crée une association non causale.
10. M est sur un chemin causal ; l'ajuster peut bloquer une partie de l'effet total.
11. Conditionner sur C ouvre le chemin A–Y.
12. Les p-values décrivent l'association conditionnelle, pas le rôle causal ; un médiateur ou collisionneur peut être sélectionné à tort.
13. \(E[Y(a)]=\sum_xE[Y\mid A=a,X=x]P(X=x)\), sous consistance, échangeabilité conditionnelle et positivité.
14. \(e(X)=P(A=1\mid X)\) ; diagnostics : différences moyennes standardisées, distributions de scores/poids, support commun et effectif effectif.
15. Consistance si le modèle de résultat ou le score est correctement spécifié sous les hypothèses ; pas de protection contre deux modèles faux, confusion non mesurée ou absence de positivité.
16. Pertinence, indépendance, exclusion, consistance et souvent monotonie ; effet local chez les compliers sous hypothèses.
17. Sans traitement, les trajectoires moyennes des groupes auraient évolué parallèlement.
18. Dates placebo, résultats négatifs, groupes témoins négatifs ou seuils placebo ; justification requise.
19. Quantifier la force qu'un facteur omis devrait avoir avec traitement et résultat pour modifier l'estimation, avec scénarios plausibles.
20. Question, population, intervention, résultat, estimand, DAG, plan, hypothèses, diagnostics, estimation, sensibilité, limites et reproductibilité.

## Critères de réussite
Seuil indicatif : 70/100. Toute confusion entre association et causalité, médiateur et confondeur, ou effet global et effet local impose une reprise ciblée. L'évaluation doit être testée auprès d'apprenants avant stabilisation.
