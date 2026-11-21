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
