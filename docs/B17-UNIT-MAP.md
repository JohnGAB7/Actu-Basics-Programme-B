# B17 — Carte pédagogique : Ingénierie des données et recherche reproductible

**Version :** 1.1 · **Statut :** Seconde consolidation pédagogique publiée après CI complète ; revue indépendante à réaliser.
**Charge indicative :** 50–62 heures · **Niveau :** L1–L3  
**Prérequis :** B03 algèbre linéaire, B10 exploration, B12 régression, bases SQL, R ou Python.

## Finalité
Concevoir des chaînes de données fiables, documentées, testables et gouvernées, depuis les sources jusqu'aux produits analytiques et modèles statistiques.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| DE01 | Cycle de vie des données et architecture analytique | Définir couches, responsabilités et contrats | 4–5 h |
| DE02 | Modélisation relationnelle, SQL et intégrité des données | Concevoir schémas, jointures et contraintes | 5–6 h |
| DE03 | Formats, fichiers, stockage et partitionnement | Choisir formats et organisation de stockage | 4–5 h |
| DE04 | Ingestion, ETL/ELT et intégration de sources | Construire des imports robustes et incrémentaux | 5–6 h |
| DE05 | Qualité des données, tests et observabilité | Automatiser les contrôles et alertes | 5–6 h |
| DE06 | Pipelines, orchestration et gestion des dépendances | Planifier, reprendre et surveiller les workflows | 5–6 h |
| DE07 | Calcul distribué et traitement de grands volumes | Raisonner sur partitionnement, shuffle et coût | 6–7 h |
| DE08 | Reproductibilité, versionnement et environnements de calcul | Tracer et reproduire une analyse | 5–6 h |
| DE09 | Sécurité, confidentialité et gouvernance des données | Minimiser, protéger et gouverner les usages | 5–6 h |
| DE10 | Projet intégré : construire un produit de données fiable | Livrer un pipeline analytique contrôlé | 6–8 h |

## Compétences transversales
1. Décrire provenance, granularité, sémantique et responsabilité.
2. Concevoir schémas relationnels et requêtes sans erreurs de cardinalité.
3. Choisir formats et stockage selon les usages.
4. Construire ingestion incrémentale, idempotente et réconciliée.
5. Tester qualité et observabilité avec des règles métier explicites.
6. Orchestrer des tâches résilientes.
7. Comprendre les limites et coûts du calcul distribué.
8. Versionner code, environnements, schémas et jeux de référence.
9. Intégrer sécurité, minimisation et rétention dès la conception.
10. Livrer un produit de données documenté et reproductible.

## Dépendances pédagogiques
DE01–DE03 posent architecture, relationnel et stockage ; DE04–DE06 construisent ingestion, qualité et orchestration ; DE07 développe le passage à l'échelle ; DE08–DE09 couvrent reproductibilité et gouvernance ; DE10 intègre le parcours. B15 apporte les besoins de validation ML ; B18 et B19 réutiliseront les flux de données d'assurance et financiers.

## Hors périmètre
Administration avancée de bases distribuées, sécurité offensive, streaming à très faible latence, plateformes cloud propriétaires, MLOps complet et calcul haute performance spécialisé sont des prolongements.

## Critères de sortie
L'apprenant doit concevoir et documenter un flux de données, automatiser des contrôles, gérer les reprises et changements de schéma, garantir la traçabilité, et justifier les choix de confidentialité et de stockage. Un pipeline qui s'exécute sans erreur n'est pas automatiquement fiable.



## Seconde consolidation — version 1.1

La seconde passe approfondit les points qui conditionnent la fiabilité réelle d'un pipeline : contrats et lineage, dépendances fonctionnelles et cardinalités SQL, compatibilité des schémas, CDC/watermarks, sémantique de livraison, dénominateurs des tests qualité, backfills, publication atomique, loi d'Amdahl, déterminisme numérique, manifeste de provenance, propagation de suppression et critères d'acceptation vérifiables.

### Laboratoire reproductible

Le dossier `labs/b17/` fournit des primitives Python/R et un exemple SQL :
- contrôles de champs requis, doublons et clés étrangères ;
- upsert idempotent et test de répétition ;
- réconciliation des volumes et totaux ;
- empreinte de données et partition mensuelle ;
- schéma relationnel d'assurance, contrôles de cardinalité et requêtes de réconciliation.

Le laboratoire est volontairement sans dépendances externes Python/R. Il illustre des mécanismes élémentaires et ne constitue pas une plateforme ETL, un moteur CDC ou un orchestrateur de production.

### Critères de qualité supplémentaires

- Toute métrique possède un grain, un dénominateur, une période et une règle de nullité.
- Toute jointure explicite sa cardinalité attendue et ses contrôles avant/après.
- Toute ingestion documente son curseur, son traitement des événements tardifs et ses garanties de rejeu.
- Tout résultat reproductible est associé à un manifeste de provenance.
- Toute performance annoncée est comparée à un baseline et accompagnée des conditions de mesure.

**Statut :** seconde consolidation pédagogique et laboratoire Python/R/SQL ajoutés dans une branche candidate ; validation CI complète, revue humaine indépendante, tests apprenants et audit d'accessibilité restent à effectuer.
