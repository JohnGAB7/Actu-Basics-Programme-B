# B14 — Carte pédagogique : Plans d'expérience et inférence causale

**Version :** 1.1.0 · **Statut :** seconde passe interne approfondie · laboratoire Python/R en validation CI  
**Charge indicative :** 54–64 heures  
**Niveau :** L1–L3, ouverture L4 introductive  
**Prérequis :** B11 inférence, B12 régression ; B08 probabilités, B10 exploration et B16 séries temporelles recommandés.

## Finalité

Apprendre à concevoir la collecte des données et à raisonner sur les effets causaux. Le bloc distingue les expériences randomisées des études observationnelles et présente les hypothèses qui rendent certains effets identifiables. Il met l'accent sur la définition de l'estimand, la cohérence entre plan et inférence, la positivité, l'incertitude et les limites des méthodes quasi expérimentales.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| CI01 | Questions causales, estimands et résultats potentiels | Définir ATE/ATT/CATE et démontrer l'identification sous consistance, échangeabilité et positivité | 4–5 h |
| CI02 | Randomisation, essais contrôlés et inférence de randomisation | Relier estimations, nul net, ITT et mécanisme d'assignation | 5–6 h |
| CI03 | Plans d'expérience, facteurs et interactions | Calculer effets factoriels et interpréter résolution/aliasage | 6–7 h |
| CI04 | DAG, confusion, médiation et biais de sélection | Justifier l'ajustement et distinguer effet total/direct | 5–6 h |
| CI05 | Identification par échangeabilité, stratification et standardisation | Dériver et calculer la g-formule dans une population cible | 5–6 h |
| CI06 | Score de propension, appariement et pondération | Construire les poids ATE/ATT/overlap et diagnostiquer équilibre/support/ESS | 6–7 h |
| CI07 | Estimation doublement robuste et apprentissage statistique causal | Écrire AIPW, comprendre orthogonalité et cross-fitting | 5–6 h |
| CI08 | Variables instrumentales et discontinuité de régression | Dériver Wald/LATE et les estimands locaux IV/RDD | 6–7 h |
| CI09 | Différences-en-différences, études d'événement et contrôle synthétique | Identifier ATT sous tendances parallèles et traiter l'adoption échelonnée | 6–7 h |
| CI10 | Sensibilité, validité externe et protocole causal intégré | Structurer falsification, sensibilité et transportabilité | 5–6 h |

## Compétences transversales

1. Définir population, intervention, résultat, horizon, unité d'assignation et estimand.
2. Séparer association observée, effet moyen, effet local et règle de décision.
3. Formuler consistance, échangeabilité, positivité et hypothèses d'interférence.
4. Construire un DAG et justifier un ensemble d'ajustement.
5. Relier l'estimateur au plan, au mécanisme de sélection et à l'unité d'assignation.
6. Calculer et diagnostiquer standardisation, pondération, équilibre et support.
7. Expliquer les conditions de double robustesse et d'inférence orthogonale.
8. Interpréter IV, RDD et DiD comme des stratégies locales ou conditionnelles, non comme des raccourcis universels.
9. Quantifier sensibilité, hétérogénéité et limites de transportabilité.
10. Produire un protocole et un rapport reproductibles sous R ou Python.

## Dépendances pédagogiques

CI01 constitue le langage commun ; CI02–CI03 portent sur les expériences ; CI04–CI07 traitent l'identification observationnelle sous échangeabilité ; CI08–CI09 couvrent des stratégies quasi expérimentales ; CI10 intègre sensibilité et communication. B12 fournit les modèles d'estimation, mais une régression n'est pas en elle-même une stratégie d'identification causale. B16 soutient les études temporelles et B20 les fondements asymptotiques/semi-paramétriques.

## Laboratoire reproductible

Le laboratoire Python/R couvre :
- différence de moyennes et test de randomisation Monte-Carlo sous nul net ;
- exemple de confusion binaire, standardisation, IPW et AIPW ;
- poids ATE/ATT/overlap, SMD et effectif effectif ;
- estimateur de Wald, DiD 2×2 et RD local linéaire sharp/fuzzy.

Les fonctions sont des démonstrations sur données synthétiques. Elles n'implémentent pas l'inférence robuste générique, les modèles longitudinaux, les instruments faibles, l'adoption échelonnée ou les estimateurs DML complets.

## Hors périmètre ou approfondissements

Les modèles structurels marginaux et g-estimation avancés, médiation causale formelle, transportabilité avancée, interférence en réseaux, inférence IV robuste complète, méthodes DiD multi-cohortes et théorie complète du double machine learning sont des prolongements de niveau recherche, à traiter dans B20 ou des unités spécialisées.

## Critères de sortie

L'apprenant doit formuler un estimand, expliciter une stratégie d'identification, justifier ses hypothèses, réaliser les diagnostics pertinents, quantifier l'incertitude et présenter les limites non testables. Un coefficient de régression significatif, un bon score prédictif ou un placebo nul ne constituent pas à eux seuls une preuve causale.

## Sources ciblées

S72–S76 pour plans, résultats potentiels, DAG et méthodes quasi expérimentales ; S108–S110 pour cross-fitting/DML, DiD à adoption échelonnée et inférence RDD robuste. Voir le registre de sources pour les limites de chaque référence.
