# Programme B — Learning Studio

Cursus indépendant en mathématiques, probabilités, statistique et sciences quantitatives, associé à une plateforme d'apprentissage responsive.

## Prévisualisation
https://johngab7.github.io/Actu-Basics-Programme-B/

## Architecture et gouvernance académique
- Architecture académique cible : docs/PROGRAMME-B-CURRICULUM.md
- Carte pédagogique du Bloc B01 : docs/B01-UNIT-MAP.md
- Carte pédagogique du Bloc B02 : docs/B02-UNIT-MAP.md
- Carte pédagogique du Bloc B03 : docs/B03-UNIT-MAP.md
- Carte pédagogique du Bloc B04 : docs/B04-UNIT-MAP.md
- Carte pédagogique du Bloc B05 : docs/B05-UNIT-MAP.md
- Carte pédagogique du Bloc B06 : docs/B06-UNIT-MAP.md
- Carte pédagogique du Bloc B12 : docs/B12-UNIT-MAP.md
- Évaluation formative B12 (brouillon) : docs/B12-EVALUATION.md
- Revue interne initiale B12 : docs/reviews/B12-internal-review.md
- Évaluation transversale B06 : docs/B06-EVALUATION.md
- Revue interne B06 : docs/reviews/B06-internal-review.md
- Évaluation transversale B05 : docs/B05-EVALUATION.md
- Revue interne B05 : docs/reviews/B05-internal-review.md
- Évaluation transversale B04 : docs/B04-EVALUATION.md
- Revue interne B04 : docs/reviews/B04-internal-review.md
- Évaluation transversale B03 : docs/B03-EVALUATION.md
- Revue interne B03 : docs/reviews/B03-internal-review.md
- Évaluation transversale B02 : docs/B02-EVALUATION.md
- Revue interne B02 : docs/reviews/B02-internal-review.md
- Revue interne F01 v1.1.0 : docs/reviews/F01-1.1.0-review.md
- Registre des références : docs/SOURCE-REGISTER.md
- Protocole de revue académique : docs/ACADEMIC-REVIEW-PROTOCOL.md
- Standards éditoriaux : docs/EDITORIAL-STANDARDS.md
- Modèle de contenu : docs/CONTENT-MODEL.md
- Moteur d'évaluation : docs/ASSESSMENT-ENGINE.md

L'architecture cible comporte 20 blocs organisés en socle mathématique et computationnel, probabilités/statistique, spécialisations appliquées et approfondissements de recherche. Elle est développée progressivement ; le nombre de blocs planifiés ne signifie pas que leurs cours sont rédigés ou validés.

## État pédagogique actuel
- B01 : F01 à F08 sont désormais rédigées en version originale et intégrées à la bibliothèque (draft).
- Les huit unités sont accessibles dans le lecteur de cours ; aucune n'est encore déclarée reviewed, tested ou published.
- Le dossier complet comprend objectifs, leçons, exemples, applications, exercices corrigés et références ; les revues indépendantes et tests apprenants restent à conduire.
- B02 : D01 à D08 rédigées et intégrées à la bibliothèque (draft) ; revue interne assistée par IA consignée, revue indépendante et tests apprenants encore requis.
- B03 : V01 à V10 intégrées à la bibliothèque ; revue interne mathématique et pédagogique documentée. CI TypeScript/Vite et validation KaTeX réussies ; revue humaine indépendante et tests apprenants restent à conduire.
- B04 : A01 à A10 publiées sur GitHub Pages ; revue interne mathématique et pédagogique documentée. CI TypeScript/Vite et validation Markdown/KaTeX réussies ; revue indépendante et tests apprenants restent à conduire.
- B05 : M01 à M10 publiées sur GitHub Pages ; carte pédagogique, évaluation formative et revue interne documentées. CI TypeScript/Vite et validation Markdown/KaTeX réussies ; revue indépendante et tests apprenants restent à conduire.
- B06 : O01 à O10 publiées sur GitHub Pages ; carte pédagogique, évaluation formative et revue interne documentées. CI TypeScript/Vite et validation Markdown/KaTeX réussies ; revue indépendante et tests apprenants restent à conduire.
- B07 : N01 à N10 publiées sur GitHub Pages ; carte pédagogique, évaluation formative et première revue interne documentées. CI TypeScript/Vite et validation Markdown/KaTeX réussies ; revue indépendante et tests apprenants restent à conduire.
- B08 : P01 à P10 publiées sur GitHub Pages ; carte pédagogique, évaluation formative et première revue interne documentées. CI TypeScript/Vite et validation Markdown/KaTeX réussies ; revue indépendante et tests apprenants restent à conduire.
- B09 : S01 à S10 publiées sur GitHub Pages ; carte pédagogique, évaluation formative et première revue interne documentées. CI TypeScript/Vite et validation Markdown/KaTeX réussies ; revue indépendante et tests apprenants restent à conduire.
- B10 : T01 à T10 fusionnées et publiées sur GitHub Pages ; carte pédagogique, évaluation formative et première revue interne documentées. CI TypeScript/Vite et validation Markdown/KaTeX réussies ; revue indépendante et tests apprenants restent à conduire.
- B11–B20 : architecture cible définie ; contenus à développer, documenter et relire.
- Le diagnostic interactif est une démonstration formative locale, non certifiante.
- Aucun compte, historique privé serveur ou examen sécurisé n'est fourni par cette version statique.

Les statuts de contenu sont explicites : planned, draft, reviewed, tested, published ou retired. Un fichier présent dans Git n'est pas automatiquement un cours validé.

## Développement local
Node.js 22+ requis.

```bash
npm install
npm run dev
npm run build
```

## Déploiement
Le workflow GitHub Actions vérifie le build sur les branches et déploie GitHub Pages depuis master. Les autres branches ne modifient pas la prévisualisation publique.

### Évaluation transversale B02

Une épreuve formative de synthèse (90 min, 100 points), avec corrigé, est disponible dans [`docs/B02-EVALUATION.md`](./docs/B02-EVALUATION.md). Elle reste en draft et doit être relue indépendamment puis testée auprès d'apprenants. La revue interne est consignée dans [`docs/reviews/B02-internal-review.md`](./docs/reviews/B02-internal-review.md).

### Évaluation transversale B10

Une épreuve formative de synthèse (120 min, 100 points), avec corrigé, est disponible dans [`docs/B10-EVALUATION.md`](./docs/B10-EVALUATION.md). La première revue interne est consignée dans [`docs/reviews/B10-internal-review.md`](./docs/reviews/B10-internal-review.md). Le contenu est en revue interne et n'est pas encore publié.

### Évaluation transversale B09

Une épreuve formative de synthèse (120 min, 100 points), avec corrigé, est disponible dans [`docs/B09-EVALUATION.md`](./docs/B09-EVALUATION.md). La première revue interne est consignée dans [`docs/reviews/B09-internal-review.md`](./docs/reviews/B09-internal-review.md). Le contenu est en revue interne et n'est pas encore publié.

### Évaluation transversale B08

Une épreuve formative de synthèse (120 min, 100 points), avec corrigé, est disponible dans [`docs/B08-EVALUATION.md`](./docs/B08-EVALUATION.md). La première revue interne est consignée dans [`docs/reviews/B08-internal-review.md`](./docs/reviews/B08-internal-review.md). Le contenu est en revue interne et n'est pas encore publié.

### Évaluation transversale B07

Une épreuve formative de synthèse (120 min, 100 points), avec corrigé, est disponible dans [`docs/B07-EVALUATION.md`](./docs/B07-EVALUATION.md). La première revue interne est consignée dans [`docs/reviews/B07-internal-review.md`](./docs/reviews/B07-internal-review.md). Le contenu est en revue interne et n'est pas encore publié.

### Évaluation transversale B06

Une épreuve formative de synthèse (120 min, 100 points), avec corrigé, est disponible dans [`docs/B06-EVALUATION.md`](./docs/B06-EVALUATION.md). La revue interne est consignée dans [`docs/reviews/B06-internal-review.md`](./docs/reviews/B06-internal-review.md).

### Évaluation transversale B05

Une épreuve formative de synthèse (120 min, 100 points), avec corrigé, est disponible dans [`docs/B05-EVALUATION.md`](./docs/B05-EVALUATION.md). La revue interne est consignée dans [`docs/reviews/B05-internal-review.md`](./docs/reviews/B05-internal-review.md).

### Évaluation transversale B04

Une épreuve formative de synthèse (120 min, 100 points), avec corrigé, est disponible dans [`docs/B04-EVALUATION.md`](./docs/B04-EVALUATION.md). La revue interne est consignée dans [`docs/reviews/B04-internal-review.md`](./docs/reviews/B04-internal-review.md). Les contrôles techniques et tests apprenants restent à effectuer.

### Évaluation transversale B03

Une épreuve formative de synthèse (120 min, 100 points), avec corrigé, est disponible dans [`docs/B03-EVALUATION.md`](./docs/B03-EVALUATION.md). La revue interne mathématique et pédagogique est consignée dans [`docs/reviews/B03-internal-review.md`](./docs/reviews/B03-internal-review.md). La validation indépendante et les tests apprenants restent à conduire.

### Évaluation transversale B01

Une épreuve formative de synthèse (90 min, 100 points), avec corrigé détaillé et étude de cas quantitative, est disponible dans [`docs/B01-EVALUATION.md`](./docs/B01-EVALUATION.md). Elle reste en draft et doit être testée auprès d'apprenants. La revue éditoriale interne, ses corrections et les contrôles restant à effectuer sont consignés dans [`docs/reviews/B01-internal-review.md`](./docs/reviews/B01-internal-review.md).


## Bloc B11 — Théorie de l’inférence statistique

Dix unités originales (I01–I10) couvrent les lois d’échantillonnage, l’estimation ponctuelle, les méthodes des moments et du maximum de vraisemblance, les propriétés asymptotiques, les intervalles, les tests, la puissance, les tests LR/Wald/score, le bootstrap, les permutations et l’introduction bayésienne. La carte pédagogique, l’évaluation corrigée et la première revue interne sont disponibles dans docs/B11-UNIT-MAP.md, docs/B11-EVALUATION.md et docs/reviews/B11-internal-review.md. Le bloc reste en revue interne ; les tests apprenants et une revue indépendante restent à conduire.


- B12 : R01 à R10 intégrées dans le lecteur comme premières versions de travail. Carte pédagogique, évaluation formative initiale et revue interne de périmètre disponibles ; revue mathématique approfondie, notebooks, tests apprenants et validation indépendante restent à conduire.


## Bloc B13 — Statistique multivariée et grande dimension

Dix unités originales (MV01–MV10) sont intégrées au lecteur : covariance multivariée, loi normale et distance de Mahalanobis, inférence T², MANOVA, ACP, analyse factorielle, corrélation canonique, analyse discriminante, clustering et méthodes de grande dimension. La carte pédagogique, l'évaluation formative et la première revue interne sont disponibles dans `docs/B13-UNIT-MAP.md`, `docs/B13-EVALUATION.md` et `docs/reviews/B13-internal-review.md`. Les unités restent des premières versions de travail : démonstrations approfondies, exemples chiffrés complets, notebooks, tests apprenants et revue humaine indépendante restent à conduire.


## Bloc B14 — Plans d'expérience et inférence causale

Dix unités originales (CI01–CI10) sont intégrées au lecteur : résultats potentiels et estimands, randomisation, plans factoriels, DAG et confusion, standardisation, scores de propension, estimation doublement robuste, variables instrumentales, discontinuité de régression, différences-en-différences et sensibilité. La carte pédagogique, l'évaluation formative et la première revue interne sont disponibles dans `docs/B14-UNIT-MAP.md`, `docs/B14-EVALUATION.md` et `docs/reviews/B14-internal-review.md`. Les unités restent des premières versions de travail ; preuves approfondies, notebooks R/Python, tests apprenants et revue humaine indépendante restent à conduire.


## Bloc B15 — Apprentissage statistique et machine learning

Dix unités originales (ML01–ML10) sont intégrées au lecteur : formulation du risque, généralisation, validation, régularisation, méthodes à noyaux, arbres et forêts, boosting, réseaux neuronaux, modèles probabilistes, détection d’anomalies et évaluation responsable. La carte pédagogique, l’évaluation formative et la première revue interne sont disponibles dans `docs/B15-UNIT-MAP.md`, `docs/B15-EVALUATION.md` et `docs/reviews/B15-internal-review.md`. Les contenus restent des premières versions de travail ; démonstrations approfondies, notebooks R/Python, tests apprenants et revue humaine indépendante restent à conduire.


## Bloc B16 — Séries temporelles et prévision

Dix unités originales (TS01–TS10) sont intégrées au lecteur : stationnarité, autocorrélation, ARMA/ARIMA/SARIMA, lissage exponentiel, régression temporelle, analyse spectrale, VAR/cointégration, ARCH/GARCH, modèles espace-état et évaluation des prévisions. La carte pédagogique, l’évaluation formative et la première revue interne sont disponibles dans `docs/B16-UNIT-MAP.md`, `docs/B16-EVALUATION.md` et `docs/reviews/B16-internal-review.md`. Les contenus restent des premières versions de travail ; dérivations, notebooks R/Python, tests apprenants et revue humaine indépendante restent à conduire.
