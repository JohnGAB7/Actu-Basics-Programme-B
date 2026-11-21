# B17 — Première revue interne de contenu

**Version examinée :** 0.1 · **Statut :** revue assistée par IA, non indépendante  
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
