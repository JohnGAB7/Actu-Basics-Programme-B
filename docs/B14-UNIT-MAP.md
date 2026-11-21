# B14 — Carte pédagogique : Plans d'expérience et inférence causale

**Version :** 0.1 · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.
**Charge indicative :** 54–64 heures  
**Niveau :** L1–L3, ouverture L4 introductive  
**Prérequis :** B11 inférence, B12 régression ; B08 probabilités, B10 exploration et B16 séries temporelles recommandés.

## Finalité
Apprendre à concevoir la collecte des données et à raisonner sur les effets causaux. Le bloc distingue les expériences randomisées des études observationnelles et présente les hypothèses qui rendent certains effets identifiables.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| CI01 | Questions causales, estimands et résultats potentiels | Définir effet causal et hypothèses d'identification | 4–5 h |
| CI02 | Randomisation, essais contrôlés et inférence de randomisation | Relier estimation et mécanisme d'assignation | 5–6 h |
| CI03 | Plans d'expérience, facteurs et interactions | Concevoir plans factoriels et fractionnaires | 6–7 h |
| CI04 | DAG, confusion, médiation et biais de sélection | Justifier les ensembles d'ajustement | 5–6 h |
| CI05 | Identification par échangeabilité, stratification et standardisation | Identifier et estimer des effets conditionnels | 5–6 h |
| CI06 | Score de propension, appariement et pondération | Équilibrer les covariables observées et diagnostiquer le support | 6–7 h |
| CI07 | Estimation doublement robuste et apprentissage statistique causal | Combiner modèles de résultat et de traitement | 5–6 h |
| CI08 | Variables instrumentales et discontinuité de régression | Comprendre les stratégies quasi expérimentales locales | 6–7 h |
| CI09 | Différences-en-différences, études d'événement et contrôle synthétique | Évaluer interventions temporelles et politiques | 6–7 h |
| CI10 | Sensibilité, validité externe et protocole causal intégré | Produire une étude causale défendable et reproductible | 5–6 h |

## Compétences transversales
1. Définir population, traitement, résultat, horizon et estimand.
2. Séparer association observée et contraste contrefactuel.
3. Formuler les hypothèses de consistance, échangeabilité, positivité et absence d'interférence.
4. Construire un DAG et identifier confondeurs, médiateurs et collisionneurs.
5. Relier chaque estimateur au plan d'étude et à son unité d'assignation.
6. Examiner support, équilibre, tendances, instrument et autres diagnostics propres à la méthode.
7. Évaluer sensibilité, hétérogénéité, transportabilité et limites.
8. Documenter le protocole et reproduire l'analyse sous R ou Python.

## Dépendances pédagogiques
CI01 constitue le langage commun ; CI02–CI03 portent sur les expériences ; CI04–CI07 traitent l'identification observationnelle sous échangeabilité ; CI08–CI09 couvrent des stratégies quasi expérimentales ; CI10 intègre validité, sensibilité et communication. B12 fournit les modèles d'estimation, mais une régression n'est pas en elle-même une stratégie d'identification causale.

## Hors périmètre ou approfondissements
Les méthodes longitudinales avancées (g-formula, modèles structurels marginaux et g-estimation), médiation causale formelle, transportabilité avancée, inférence causale en réseaux et théorie complète du double machine learning sont des prolongements de niveau recherche, à traiter dans B20 ou des unités spécialisées.

## Critères de sortie
L'apprenant doit formuler un estimand, expliciter une stratégie d'identification, justifier ses hypothèses, réaliser les diagnostics pertinents, quantifier l'incertitude et présenter les limites non testables. Un coefficient de régression significatif ne constitue pas un critère de réussite causal.
