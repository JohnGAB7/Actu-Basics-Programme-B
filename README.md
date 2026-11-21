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
- B07–B20 : architecture cible définie ; contenus à développer, documenter et relire.
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
