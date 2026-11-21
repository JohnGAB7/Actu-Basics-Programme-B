# B19 — Évaluation formative de synthèse

**Version :** 1.1 · **Durée :** 120 minutes · **Total :** 100 points · **Statut :** publiée avec le bloc ; test apprenant et revue indépendante à réaliser.
Évaluation formative, non certifiante.

## Partie A — Spécification et inférence (20 points)
1. (5 pts) Distinguer association, prédiction et causalité.
2. (5 pts) Définir endogénéité et citer trois causes.
3. (5 pts) Expliquer ce que corrigent les erreurs-types robustes et ce qu'elles ne corrigent pas.
4. (5 pts) Décrire une stratégie de diagnostic de spécification.

## Partie B — Panel et identification (25 points)
5. (5 pts) Expliquer transformation within.
6. (5 pts) Énoncer hypothèse clé des effets aléatoires.
7. (5 pts) Distinguer pertinence et exclusion d'un instrument.
8. (5 pts) Expliquer LATE et population des compliers.
9. (5 pts) Définir conditions de moments en GMM.

## Partie C — Choix et données financières (20 points)
10. (5 pts) Distinguer logit et probit.
11. (5 pts) Distinguer censure et troncature.
12. (5 pts) Comparer rendements simples et logarithmiques.
13. (5 pts) Citer trois biais possibles dans données de marché.

## Partie D — Facteurs et risque (20 points)
14. (5 pts) Interpréter bêta et alpha dans CAPM.
15. (5 pts) Définir VaR et Expected Shortfall.
16. (5 pts) Pourquoi backtester indépendance des exceptions ?
17. (5 pts) Expliquer bid-ask bounce et bruit de microstructure.

## Partie E — Projet (15 points)
18. (5 pts) Décrire un protocole d'étude empirique reproductible.
19. (5 pts) Proposer deux analyses de robustesse.
20. (5 pts) Distinguer conclusion causale et prédictive.

## Corrigé indicatif
1. Association : dépendance observée ; prédiction : minimisation d'une perte future ; causalité : contraste de résultats potentiels sous hypothèses d'identification.
2. Corrélation entre régresseur et erreur ; variable omise, simultanéité, erreur de mesure, sélection.
3. Elles corrigent l'estimation de variance sous hétéroscédasticité/dépendance adaptée ; elles ne corrigent pas biais de coefficient.
4. Théorie, graphiques, résidus, tests, spécifications alternatives et connaissance du contexte.
5. Soustraire moyenne individuelle pour éliminer effet constant.
6. Effet individuel non corrélé aux régresseurs.
7. Pertinence : relation instrument-traitement ; exclusion : pas d'effet direct sur résultat hors traitement.
8. Effet moyen pour unités dont traitement réagit à l'instrument.
9. Espérance de fonctions g(W,θ) égale zéro.
10. Logit utilise logistique ; probit fonction normale ; coefficients non directement effets marginaux.
11. Censure : valeur partiellement observée ; troncature : observation absente selon mécanisme de sélection.
12. Log rendements s'additionnent ; simples se composent.
13. Survivorship, look-ahead, non-synchronisme, corporate actions, biais de sélection.
14. Bêta : sensibilité au facteur marché ; alpha : intercept conditionnel au modèle.
15. VaR : quantile ; ES : moyenne de queue au-delà du seuil.
16. Un modèle peut respecter couverture mais produire des exceptions groupées.
17. Alternance bid/ask crée dépendance artificielle à haute fréquence.
18. Question, estimand, source, disponibilité, données, modèle, diagnostics, robustesse, reproductibilité.
19. Fenêtres alternatives, variables alternatives, placebos, sous-échantillons, erreurs-types alternatives.
20. Une prévision peut être utile sans identifier effet causal ; la causalité exige hypothèses supplémentaires.

## Critères de réussite
Seuil indicatif : 70/100. Confusions endogénéité/erreur-type, FE/RE, instrument valide ou VaR/ES imposent reprise ciblée. Faire tester le sujet avant stabilisation.



## Barème analytique et critères de correction

Le total reste de 100 points. Les réponses doivent distinguer :
- association, prédiction et causalité ;
- endogénéité, hétéroscédasticité, autocorrélation et dépendance cluster ;
- validité d'un instrument, pertinence et force ;
- effets within/inter et hypothèses RE ;
- censure, troncature et sélection ;
- rendement, volatilité et niveau de prix ;
- VaR, ES et backtesting ;
- variation quadratique et bruit de microstructure.

Pour le projet, exiger un estimand explicite, un design défendable, un calendrier de disponibilité des données, une spécification de référence, inférence adaptée, diagnostics, analyses de sensibilité, reproductibilité et conclusion proportionnée aux hypothèses.

## Cas limites obligatoires

Les ateliers doivent inclure : matrice de design singulière, hétéroscédasticité, autocorrélation, peu de clusters, instrument faible, instrument invalide, panel court dynamique, attrition, séparation parfaite en logit, censure/troncature confondues, révision de série macroéconomique, survivorship bias, multiplicité de facteurs, exceptions VaR groupées et bruit bid-ask.

## Critères bloquants

Une étude n'est pas acceptée si elle interprète une erreur-type robuste comme une correction d'endogénéité, un instrument pertinent comme nécessairement valide, un coefficient logit comme variation directe de probabilité, une série révisée comme connue en temps réel, un alpha comme compétence prouvée ou une VaR comme perte maximale. Un bon backtest de fréquence ne dispense pas d'examiner l'indépendance des exceptions.
