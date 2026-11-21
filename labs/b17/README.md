# B17 — Laboratoire d'ingénierie des données

Laboratoire didactique sans dépendances Python/R externes.

## Fichiers
- `data_pipeline_lab.py` : contrats de champs, doublons, clés étrangères, upsert idempotent, réconciliation, empreinte SHA-256 et partition mensuelle.
- `tests/test_data_pipeline_lab.py` : tests unitaires, cas limites et propriété d'idempotence.
- `data_pipeline_lab.R` : contrôles équivalents en R de base.
- `schema_and_quality.sql` : schéma relationnel, contraintes, diagnostic de cardinalité, détection d'orphelins et réconciliation SQL (syntaxe PostgreSQL à adapter).

## Exécution
Depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b17/tests -v
Rscript labs/b17/data_pipeline_lab.R
```

## Limites
Les fonctions Python/R sont des primitives pédagogiques, pas un orchestrateur, un connecteur API, un moteur CDC ni un framework de qualité complet. Le SQL est un exemple de conception et de contrôles, pas un script universel portable. Aucun jeu de données personnel n'est inclus. Les mesures de performance doivent être faites sur un environnement et un volume explicitement décrits.
