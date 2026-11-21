# Programme B — Registre des unités implémentées

**Version : 1.0 · 21 novembre 2026**

Ce registre décrit les identifiants publics et l'inventaire des unités actuellement présents dans le dépôt. Les titres détaillés, objectifs, prérequis, charges et compétences figurent dans chaque carte pédagogique.

**Total : 20 blocs · 196 unités**. B01 et B02 comportent huit unités chacun ; B03 à B20 en comportent dix chacun.

| Bloc | Domaine | Identifiants publics | Nombre | Carte |
|---|---|---:|---:|---|
| B01 | Fondations mathématiques | F01–F08 | 8 | [B01](B01-UNIT-MAP.md) |
| B02 | Logique et mathématiques discrètes | D01–D08 | 8 | [B02](B02-UNIT-MAP.md) |
| B03 | Algèbre linéaire | V01–V10 | 10 | [B03](B03-UNIT-MAP.md) |
| B04 | Analyse réelle | A01–A10 | 10 | [B04](B04-UNIT-MAP.md) |
| B05 | Calcul multivarié et EDO | M01–M10 | 10 | [B05](B05-UNIT-MAP.md) |
| B06 | Optimisation et recherche opérationnelle | O01–O10 | 10 | [B06](B06-UNIT-MAP.md) |
| B07 | Analyse numérique | N01–N10 | 10 | [B07](B07-UNIT-MAP.md) |
| B08 | Probabilités | P01–P10 | 10 | [B08](B08-UNIT-MAP.md) |
| B09 | Processus stochastiques | S01–S10 | 10 | [B09](B09-UNIT-MAP.md) |
| B10 | Statistique descriptive et échantillonnage | T01–T10 | 10 | [B10](B10-UNIT-MAP.md) |
| B11 | Inférence statistique | I01–I10 | 10 | [B11](B11-UNIT-MAP.md) |
| B12 | Régression et modèles | R01–R10 | 10 | [B12](B12-UNIT-MAP.md) |
| B13 | Statistique multivariée | MV01–MV10 | 10 | [B13](B13-UNIT-MAP.md) |
| B14 | Plans d'expérience et causalité | CI01–CI10 | 10 | [B14](B14-UNIT-MAP.md) |
| B15 | Machine learning | ML01–ML10 | 10 | [B15](B15-UNIT-MAP.md) |
| B16 | Séries temporelles | TS01–TS10 | 10 | [B16](B16-UNIT-MAP.md) |
| B17 | Ingénierie des données | DE01–DE10 | 10 | [B17](B17-UNIT-MAP.md) |
| B18 | Actuariat et risque | AR01–AR10 | 10 | [B18](B18-UNIT-MAP.md) |
| B19 | Économétrie et finance | EF01–EF10 | 10 | [B19](B19-UNIT-MAP.md) |
| B20 | Théorie avancée et recherche | AT01–AT10 | 10 | [B20](B20-UNIT-MAP.md) |

## Règle d'identification

L'identifiant global d'une unité est la concaténation du bloc et du code public, par exemple `B05-M01` et `B13-MV01`. Les codes publics sont distincts entre blocs. Certains noms de fichiers historiques ne reprennent pas intégralement le code public : dans B13, `MV01` est servi depuis `src/content/bloc-13/M01.md`. Le code public affiché dans le lecteur et les cartes pédagogiques est l'identifiant de référence ; le chemin de fichier est un détail de stockage.

## Laboratoires

Les répertoires `labs/b08/` à `labs/b20/` contiennent des laboratoires Python/R et des tests. B17 ajoute un schéma SQL pédagogique. Ces laboratoires sont didactiques et leurs limites sont documentées dans chaque `README.md`.

## Évaluations

Les évaluations formatives sont recensées dans `docs/B01-EVALUATION.md` à `docs/B20-EVALUATION.md`. Elles ne sont pas des examens certifiants ; leur validation humaine et leur test auprès d'apprenants restent requis.

## Autorité des documents

- Cette page est le registre synthétique des codes et volumes.
- Les cartes pédagogiques par bloc font autorité pour les titres, objectifs et prérequis.
- Les fichiers `src/content/` contiennent les leçons.
- `docs/PROGRAMME-B-CURRICULUM.md` définit le périmètre académique et les parcours.
- `docs/ROADMAP.md` définit les travaux restants.
