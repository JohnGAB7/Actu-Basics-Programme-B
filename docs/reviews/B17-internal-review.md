# B17 — Revue interne de contenu

**Version examinée :** 1.1 · **Statut :** seconde revue assistée par IA, non indépendante  
**Périmètre :** DE01–DE10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Progression du cycle de vie et architecture vers les flux, tests et produits de données.
- Distinction OLTP/OLAP, ETL/ELT, batch/streaming et ligne/colonne.
- Risques de cardinalité, doublons, données tardives, reprise et idempotence explicités.
- Qualité structurelle, métier et statistique distinguée.
- Observabilité, orchestration, calcul distribué et reproductibilité intégrés.
- Confidentialité, minimisation, pseudonymisation et sécurité abordées.
- Projet final orienté portefeuille assurance avec données synthétiques ou autorisées.

## Points à approfondir avant statut reviewed
1. Ajouter exercices SQL exécutables, plans d'exécution et contre-exemples de jointures.
2. Développer transactions, isolation et anomalies de concurrence selon les moteurs.
3. Comparer formats Parquet/ORC/Avro et schémas évolutifs avec mesures reproductibles.
4. Formaliser CDC, watermark, événements tardifs, suppression et reprocessing.
5. Ajouter exemples de tests de données, contrats et seuils de qualité.
6. Détailler orchestration, reprise, concurrence, SLA et observabilité.
7. Ajouter un benchmark de calcul distribué avec shuffle, skew et coûts.
8. Fournir un template de projet reproductible R/Python et CI.
9. Vérifier précisément RGPD, conservation, anonymisation et rôles avec ressources juridiques officielles.
10. Revue humaine indépendante, tests apprenants et vérification de toutes les commandes/outils.

## Références de cadrage
- dbt Developer Hub — Data tests : https://docs.getdbt.com/docs/build/data-tests
- dbt Developer Hub — What is dbt? : https://docs.getdbt.com/docs/introduction
- European Commission — Data Quality Guidelines : https://op.europa.eu/webpub/op/data-quality-guidelines/en/
- PostgreSQL Documentation : https://www.postgresql.org/docs/current/
- Apache Parquet Documentation : https://parquet.apache.org/docs/

## Limites et statut
Cette revue vérifie la cohérence et le périmètre, pas l'exhaustivité opérationnelle. Elle ne remplace pas une revue indépendante en ingénierie des données, sécurité et droit des données. Les unités sont des premières versions de travail, non accréditées.



## Seconde revue interne — version 1.1

**Périmètre :** approfondissements DE01–DE10, primitives de laboratoire Python/R, SQL pédagogique, carte et évaluation.

### Contrôles ajoutés
- DE01 : contrat de produit de données, lineage, fraîcheur et SLO.
- DE02 : dépendances fonctionnelles, décomposition sans perte, logique SQL à trois valeurs, fan-out et isolation.
- DE03 : row groups, predicate pushdown, partition pruning, évolution de schéma et benchmark contrôlé.
- DE04 : CDC, watermark, événements tardifs, sémantiques at-least-once/at-most-once et manifeste de lot.
- DE05 : dénominateurs, erreurs de classification des règles, segmentation et seuils justifiés.
- DE06 : distinction retry/backfill, publication atomique, chemin critique et jitter.
- DE07 : loi d'Amdahl, non-associativité flottante et protocole de benchmark.
- DE08 : niveaux de reproductibilité, manifeste de provenance, non-déterminisme et CI.
- DE09 : propagation de suppression, threat modelling et limites de l'anonymisation.
- DE10 : portes d'acceptation documentées et réconciliation actuarielle.

### Tests et limites du laboratoire
Le laboratoire couvre des fonctions de contrôle de données déterministes et un upsert didactique. Il ne teste pas de connecteur réel, de transaction distribuée, de moteur CDC, d'orchestrateur, de contrôle d'accès ou de charge à grande échelle. Le SQL est orienté PostgreSQL et nécessite adaptation selon le moteur.

### Points restant à vérifier
1. Exécuter tous les tests Python/R et vérifier les commandes depuis la racine du dépôt.
2. Tester les exemples SQL dans un moteur PostgreSQL réel ; le script fait référence à une table de staging à créer par l'apprenant.
3. Ajouter des mesures reproductibles Parquet/CSV sur un environnement documenté.
4. Faire relire les passages de sécurité et de protection des données par une personne compétente en droit/RGPD.
5. Obtenir une revue indépendante en bases de données et ingénierie des données.
6. Organiser des tests apprenants, puis un audit manuel d'accessibilité du site.

**Conclusion :** la couverture conceptuelle est sensiblement renforcée, mais le bloc reste une seconde revue interne assistée par IA, non une validation académique indépendante ni une certification.


## Revue mathématique et technique approfondie — 22 novembre 2026

**Périmètre contrôlé :** DE01–DE10, carte v1.1, évaluation, laboratoire Python/R, tests Python et schéma SQL.

### Vérifications de fond

- **DE01 — architecture et contrats :** séparation Raw/Validated/Curated utile comme convention d'architecture, mais non comme garantie automatique de qualité ou de sécurité. Le contrat de données doit inclure grain, unités, sémantique, fraîcheur, compatibilité et propriétaire. Les suppressions et règles de conservation doivent se propager aux copies et produits dérivés.
- **DE02 — relationnel et SQL :** les définitions de clé candidate, dépendance fonctionnelle, 1NF/2NF/3NF, jointure et cardinalité sont cohérentes au niveau introductif. La logique SQL à trois valeurs et la distinction COUNT(*)/COUNT(colonne) sont correctement signalées. Les niveaux d'isolation et anomalies dépendent du moteur ; PostgreSQL documente notamment les différences entre READ COMMITTED, REPEATABLE READ et SERIALIZABLE. Une transaction sérialisable peut être annulée et doit alors être rejouée par l'application.
- **DE03 — formats :** distinction ligne/colonne, row groups, predicate pushdown et partition pruning correctement présentée comme dépendante du moteur et des prédicats. Le benchmark doit conserver les mêmes données logiques et préciser cache, compression, partitions, CPU, mémoire et volume lu.
- **DE04 — ingestion :** les garanties at-most-once/at-least-once/exactly-once sont formulées avec la prudence nécessaire. Un watermark n'est pas une preuve d'absence d'événements tardifs. Les identifiants d'événement, checkpoints, curseurs, fenêtres de correction et réconciliation sont indispensables.
- **DE05 — qualité :** le grain, le dénominateur, la fenêtre et la sévérité des règles sont explicités. La distinction entre anomalie statistique et erreur de données est essentielle et correctement présente.
- **DE06 — orchestration :** DAG, retries, backfill, publication atomique, chemin critique et jitter sont correctement distingués. Une reprise n'est sûre que si l'écriture est transactionnelle, idempotente ou explicitement compensée.
- **DE07 — calcul distribué :** la borne d'Amdahl (S(n)=1/((1-p)+p/n)) est correcte sous l'hypothèse d'une fraction parallélisable fixe et de coûts de coordination négligés. L'avertissement sur la non-associativité de l'addition flottante est juste.
- **DE08 — reproductibilité :** les niveaux computationnel, analytique et réplication indépendante ne sont pas confondus. Le manifeste de provenance est suffisamment concret pour un projet d'apprentissage ; il ne garantit pas à lui seul la disponibilité légale ou durable des données.
- **DE09 — gouvernance :** minimisation, limitation des finalités, conservation, sécurité et pseudonymisation sont correctement distinguées. Le RGPD et les orientations EDPB sont des sources juridiques/réglementaires à consulter selon le rôle et le contexte ; la leçon ne doit pas être interprétée comme un avis juridique.
- **DE10 — intégration :** les portes d'acceptation sont pertinentes. La réconciliation actuarielle doit conserver les définitions de survenance/déclaration, paiement/charge/provision, devise et date de valorisation ; des totaux différents ne sont pas forcément une erreur si les grains ou définitions diffèrent.

### Anomalies concrètes corrigées dans cette branche

1. **Ordre temporel de l'upsert Python/R.** Les versions précédentes comparaient les valeurs de `updated_at` comme des chaînes. L'ordre lexicographique ne représente pas toujours l'ordre chronologique lorsque les fuseaux horaires diffèrent. Exemple : `2026-01-01T00:30:00+01:00` est antérieur à `2025-12-31T23:45:00Z` ? Non : après conversion UTC, le premier vaut 23:30Z et le second 23:45Z ; le second doit gagner, même si sa chaîne commence par une année antérieure. Les deux implémentations normalisent maintenant les instants vers UTC ; les horodatages sans décalage explicite sont rejetés. Les dates seules sont interprétées à minuit UTC. Tests Python et R ajoutés.
2. **Réconciliation financière et valeurs manquantes.** Python traitait `None` comme zéro ; R ignorait les `NA` dans les sommes. Une source contenant un montant manquant pouvait donc sembler réconciliée avec une cible contenant zéro. Les deux langages exposent désormais les nombres de montants manquants et refusent `total_match=true` dès qu'un montant manque. Tests de non-régression Python/R ajoutés.

### Limites résiduelles et preuves manquantes

- Le SQL est orienté PostgreSQL mais n'a pas été exécuté sur un serveur PostgreSQL réel dans cette revue. La table `staging_claim` doit être créée par l'apprenant avant la requête d'orphelins ; le bloc transactionnel reste un patron commenté et non un pipeline exécutable complet.
- Aucun benchmark Parquet/CSV/ORC/Avro n'a été exécuté ; les contenus décrivent le protocole, pas un résultat expérimental.
- Les fonctions d'upsert sont des démonstrations en mémoire : elles ne gèrent ni concurrence, ni verrouillage, ni transactions, ni tombstones, ni CDC, ni contraintes d'un moteur persistant.
- La comparaison d'horodatages exige maintenant une date ISO ou un timestamp ISO 8601 avec décalage explicite. La convention des dates seules à minuit UTC est pédagogique ; un système métier doit choisir explicitement fuseau, calendrier et instant de coupure.
- L'empreinte Python utilise JSON avec `default=str` et conserve l'ordre des lignes ; elle n'est pas un format canonique interlangage et ne remplace pas une empreinte de fichier ou un manifeste de schéma.
- Les tests sont synthétiques et ne valident pas les performances, la sécurité, les connecteurs ou les comportements d'un orchestrateur réel.
- Revue humaine indépendante en bases de données/ingénierie des données, revue juridique/RGPD, exécution SQL réelle, benchmark, tests apprenants et audit d'accessibilité restent requis.

**Conclusion provisoire :** la couverture conceptuelle est solide pour un bloc introductif/intermédiaire. Les deux défauts de laboratoire corrigés étaient importants pour la fiabilité des données financières. Le statut reste « revue interne assistée par IA » jusqu'à exécution de la CI sur le HEAD de cette branche ; aucune validation indépendante ou certification n'est revendiquée.
