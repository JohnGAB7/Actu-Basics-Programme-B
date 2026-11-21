# B17 — Évaluation formative de synthèse

**Statut :** Revue interne effectuée — consolidation pédagogique en cours.
Évaluation formative, non certifiante.

## Partie A — Architecture et modèles (20 points)
1. (5 pts) Distinguer OLTP et OLAP.
2. (5 pts) Expliquer l'intérêt d'une architecture Raw/Validated/Curated.
3. (5 pts) Distinguer ETL et ELT.
4. (5 pts) Définir contrat de données et citer cinq éléments.

## Partie B — SQL et stockage (20 points)
5. (5 pts) Expliquer pourquoi une jointure un-à-plusieurs peut doubler une agrégation.
6. (5 pts) Distinguer clé primaire, clé étrangère et contrainte unique.
7. (5 pts) Comparer stockage ligne et colonne.
8. (5 pts) Donner deux risques d'un partitionnement trop fin.

## Partie C — Robustesse (25 points)
9. (5 pts) Définir idempotence et expliquer son intérêt pour une ingestion.
10. (5 pts) Décrire une stratégie de reprise après HTTP 429.
11. (5 pts) Proposer cinq tests de qualité sur une table sinistres.
12. (5 pts) Expliquer le rôle d'un DAG d'orchestration.
13. (5 pts) Définir skew et shuffle dans le calcul distribué.

## Partie D — Reproductibilité et gouvernance (15 points)
14. (5 pts) Citer les éléments nécessaires pour reproduire une analyse.
15. (5 pts) Distinguer pseudonymisation et anonymisation.
16. (5 pts) Expliquer moindre privilège et minimisation des données.

## Partie E — Projet intégré (20 points)
17. (5 pts) Proposer un schéma relationnel contrats-primes-sinistres.
18. (5 pts) Décrire les contrôles de réconciliation après ingestion.
19. (5 pts) Définir les indicateurs d'observabilité d'un pipeline mensuel.
20. (5 pts) Décrire les livrables d'un produit de données fiable.

## Corrigé indicatif
1. OLTP optimise transactions et écritures ; OLAP optimise analyses et agrégations.
2. Elle sépare données brutes, contrôlées et prêtes à l'usage, en conservant provenance.
3. ETL transforme avant chargement ; ELT charge puis transforme dans la plateforme.
4. Schéma, types, clés, sémantique, unités, fraîcheur, qualité, propriétaire et politique d'évolution.
5. Plusieurs correspondances multiplient les lignes ; les sommes sont répétées.
6. PK identifie la ligne ; FK référence une autre relation ; UNIQUE interdit les doublons d'une clé.
7. Ligne pour accès complet aux enregistrements ; colonne pour lecture sélective et agrégations.
8. Trop de métadonnées et petits fichiers, surcharge de planification.
9. Répéter la même opération donne le même état ; facilite retries et reprocessing.
10. Respecter Retry-After, backoff, limites, nombre maximal d'essais et journaliser l'échec.
11. Schéma, clés uniques, nullité, relations, dates, valeurs métier et réconciliation.
12. Ordonner tâches et dépendances sans cycle ; gérer états et reprises.
13. Skew : répartition inégale ; shuffle : redistribution entre partitions.
14. Code, données et empreinte, versions, environnement, paramètres, graines et documentation.
15. Pseudonymisation conserve un risque de réidentification ; anonymisation vise un risque suffisamment réduit.
16. Restreindre les droits au besoin ; ne collecter que le nécessaire à la finalité.
17. Tables avec clés et cardinalités explicites, granularité documentée.
18. Volumes, clés, sommes, périodes, rejets et correspondances.
19. Fraîcheur, durée, volumes, erreurs, rejets, dérive et succès des contrôles.
20. Architecture, schéma, pipeline, tests, réconciliation, documentation, gouvernance et démonstration.

## Critères de réussite
Seuil indicatif : 70/100. Une jointure non contrôlée, une absence de traçabilité ou une confusion entre pseudonymisation et anonymisation impose une reprise ciblée. Faire tester le sujet auprès d'apprenants avant stabilisation.



## Barème analytique et critères de correction

Le total reste de 100 points. Pour les questions de conception, attribuer les points à la définition du grain, aux hypothèses, au mécanisme proposé, aux contrôles et à l'interprétation des limites. Une réponse qui cite un outil sans expliquer le problème traité ne reçoit pas tous les points.

Pour le projet intégré, utiliser les éléments de preuve suivants :
- schéma et contrat de données versionnés ;
- tests de clés, nullité, cardinalité et réconciliation ;
- démonstration de rejeu idempotent et de reprise après échec ;
- rapport de qualité avec numérateurs, dénominateurs et seuils ;
- manifeste de provenance et environnement verrouillé ;
- politique d'accès, conservation et suppression ;
- mesures de performance comparées à un baseline.

## Cas limites obligatoires lors du test apprenant

Le sujet doit inclure au moins : doublon de clé, valeur manquante, clé étrangère orpheline, horodatages identiques, événement tardif, suppression source, jointure un-à-plusieurs, changement de schéma, échec après écriture partielle et réexécution du même lot.

Un pipeline qui passe les tests de code mais échoue à la réconciliation métier doit être considéré comme non accepté. Le seuil indicatif de 70/100 ne remplace pas les critères bloquants de confidentialité, intégrité et traçabilité.
