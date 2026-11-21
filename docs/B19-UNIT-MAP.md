# B19 — Carte pédagogique : Économétrie et statistiques financières

**Version :** 0.1 · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.
**Charge indicative :** 52–64 heures · **Niveau :** L2–L3  
**Prérequis :** B11 inférence, B12 régression, B14 causalité, B16 séries temporelles, B17 ingénierie ; B13 recommandé.

## Finalité
Développer les méthodes économétriques pour données économiques et financières : spécification, endogénéité, panel, variables instrumentales, choix discret, rendements, facteurs, volatilité, risque et microstructure.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| EF01 | Fondements de l’économétrie et identification des relations | Formuler question, estimand et design | 4–5 h |
| EF02 | Régression économétrique, endogénéité et inférence robuste | Diagnostiquer biais et inférence | 5–6 h |
| EF03 | Données de panel : effets fixes, aléatoires et différences | Estimer modèles intra/inter-unités | 6–7 h |
| EF04 | Variables instrumentales et méthodes des moments | Comprendre 2SLS, LATE et GMM | 6–7 h |
| EF05 | Modèles de choix discret et données censurées | Modéliser choix et sélection | 5–6 h |
| EF06 | Rendements financiers, dépendance et propriétés empiriques | Construire et diagnostiquer données financières | 5–6 h |
| EF07 | Modèles de facteurs, CAPM et évaluation des actifs | Estimer expositions et alpha | 5–6 h |
| EF08 | Volatilité financière, Value-at-Risk et backtesting | Mesurer et tester le risque de marché | 6–7 h |
| EF09 | Microstructure des marchés et économétrie haute fréquence | Comprendre prix, liquidité et bruit | 5–6 h |
| EF10 | Projet économétrique et financier : estimation, robustesse et communication | Produire une étude empirique reproductible | 6–8 h |

## Compétences transversales
1. Distinguer association, prédiction et identification causale.
2. Diagnostiquer endogénéité, hétéroscédasticité, dépendance et sélection.
3. Estimer modèles panel et interpréter FE/RE.
4. Formuler instruments, 2SLS et GMM.
5. Modéliser choix discrets, censure et troncature.
6. Construire rendements financiers et éviter biais de données.
7. Estimer modèles de facteurs et interpréter expositions.
8. Mesurer VaR/ES et backtester les risques.
9. Analyser données haute fréquence et effets de microstructure.
10. Réaliser une étude empirique robuste et reproductible.

## Dépendances pédagogiques
EF01–EF02 posent la spécification et l'inférence ; EF03–EF05 développent panel, IV/GMM et choix ; EF06–EF09 appliquent aux marchés financiers ; EF10 intègre l'ensemble. B14 fournit les fondements d'identification causale ; B16 apporte les outils temporels ; B17 garantit qualité et reproductibilité des données.

## Hors périmètre
Équilibre général, macroéconométrie structurelle avancée, séries haute fréquence ultra-basse latence, économétrie spatiale, modèles DSGE complets, dérivés et pricing stochastique avancés sont des prolongements vers B20 ou des cours spécialisés.

## Critères de sortie
L'apprenant doit justifier l'identification et l'inférence, évaluer robustesse et sensibilité, respecter calendrier et provenance des données, et distinguer conclusions descriptives, prédictives et causales.



## Seconde consolidation — version 1.1

La seconde passe approfondit :
- estimands, résultats potentiels, hypothèses de design et validité externe ;
- covariance sandwich HC0, HAC/Newey–West et dépendance par clusters ;
- transformation within, hypothèses FE/RE, biais de Nickell et effets aléatoires corrélés ;
- 2SLS matriciel, faibles instruments, LATE et GMM ;
- effets marginaux, IIA, censure/troncature et sélection ;
- rendements, stationnarité, queues, vintages macroéconomiques et données point-in-time ;
- bêta estimé, Fama–MacBeth, multiplicité et data mining ;
- Expected Shortfall, tests de Kupiec/Christoffersen et contexte Bâle ;
- variation quadratique, bruit de microstructure et realized kernels ;
- protocole de recherche, provenance et gouvernance du risque de modèle.

## Laboratoire Python/R

Le dossier `labs/b19/` fournit OLS, HC0, HAC/Newey–West, transformation within, ratio de Wald à un instrument, logit et pente marginale, rendements simples/log, CAPM, VaR/ES empiriques, statistique LR de Kupiec et variance réalisée. Tests Python et assertions R sont prévus dans le workflow principal et la CI dédiée.

Ces primitives sont didactiques : elles ne constituent pas un estimateur 2SLS général, un moteur panel dynamique, un logit ajusté, un estimateur haute fréquence robuste ou un système réglementaire de risque.

## Critères de qualité

Toute analyse doit distinguer estimation, identification et inférence ; annoncer le niveau de clustering, la structure temporelle, la population et l'horizon ; prévenir les biais look-ahead/survivorship ; conserver les vintages ; documenter toutes les spécifications essayées ; et comparer les résultats à des références ou modèles challengers.

**Statut :** seconde consolidation pédagogique et laboratoire Python/R dans une branche candidate ; CI, revue humaine indépendante, tests apprenants et audit d'accessibilité à réaliser.
