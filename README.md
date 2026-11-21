# Programme B — Learning Studio

Cursus indépendant en mathématiques, probabilités, statistique, calcul scientifique et sciences quantitatives, accompagné d'une plateforme web responsive.

**Site public :** https://johngab7.github.io/Actu-Basics-Programme-B/

Programme B n'est pas un diplôme universitaire, une accréditation ou une certification professionnelle. Les références à des universités et organismes servent à situer les notions et à guider les contrôles ; elles ne signifient pas que ces institutions valident le programme.

## État du cursus

Le dépôt contient **20 blocs et 196 unités pédagogiques identifiées** :
- B01 et B02 : 8 unités chacun ;
- B03 à B20 : 10 unités chacun.

Les codes publics des unités sont uniques à l'échelle du programme (par exemple `B05-M01` et `B13-MV01`). Les noms de fichiers sont des chemins de stockage et ne remplacent pas les identifiants pédagogiques.

| Bloc | Domaine | Carte pédagogique | État synthétique |
|---|---|---|---|
| B01 | Fondations mathématiques | [Carte](docs/B01-UNIT-MAP.md) · [Évaluation](docs/B01-EVALUATION.md) | Première version intégrée ; revue interne, consolidation et tests apprenants à poursuivre |
| B02 | Logique et mathématiques discrètes | [Carte](docs/B02-UNIT-MAP.md) · [Évaluation](docs/B02-EVALUATION.md) | Première version intégrée ; revue interne, consolidation et tests apprenants à poursuivre |
| B03 | Algèbre linéaire | [Carte](docs/B03-UNIT-MAP.md) · [Évaluation](docs/B03-EVALUATION.md) | Cours intégré ; revue interne et consolidation à poursuivre |
| B04 | Analyse réelle | [Carte](docs/B04-UNIT-MAP.md) · [Évaluation](docs/B04-EVALUATION.md) | Publié ; revue indépendante et tests apprenants à réaliser |
| B05 | Calcul multivarié et EDO | [Carte](docs/B05-UNIT-MAP.md) · [Évaluation](docs/B05-EVALUATION.md) | Publié ; revue indépendante et tests apprenants à réaliser |
| B06 | Optimisation et recherche opérationnelle | [Carte](docs/B06-UNIT-MAP.md) · [Évaluation](docs/B06-EVALUATION.md) | Publié ; revue indépendante et tests apprenants à réaliser |
| B07 | Analyse numérique | [Carte](docs/B07-UNIT-MAP.md) · [Évaluation](docs/B07-EVALUATION.md) | Publié ; revue indépendante et tests apprenants à réaliser |
| B08 | Probabilités | [Carte](docs/B08-UNIT-MAP.md) · [Évaluation](docs/B08-EVALUATION.md) | Cours et laboratoire interactif publiés ; revue indépendante à réaliser |
| B09 | Processus stochastiques | [Carte](docs/B09-UNIT-MAP.md) · [Évaluation](docs/B09-EVALUATION.md) | Cours et laboratoire Python/R intégrés ; revue indépendante à réaliser |
| B10 | Statistique descriptive et échantillonnage | [Carte](docs/B10-UNIT-MAP.md) · [Évaluation](docs/B10-EVALUATION.md) | Seconde passe et laboratoires Python/R/interactif publiés |
| B11 | Inférence statistique | [Carte](docs/B11-UNIT-MAP.md) · [Évaluation](docs/B11-EVALUATION.md) | Seconde passe et laboratoires Python/R/interactif publiés |
| B12 | Régression et modèles statistiques | [Carte](docs/B12-UNIT-MAP.md) · [Évaluation](docs/B12-EVALUATION.md) | Seconde passe et laboratoire Python/R publiés |
| B13 | Statistique multivariée | [Carte](docs/B13-UNIT-MAP.md) · [Évaluation](docs/B13-EVALUATION.md) | Seconde passe en consolidation ; complément MANOVA et harmonisation des identifiants dans la branche d'audit |
| B14 | Plans d'expérience et causalité | [Carte](docs/B14-UNIT-MAP.md) · [Évaluation](docs/B14-EVALUATION.md) | Seconde passe et laboratoire Python/R publiés |
| B15 | Machine learning | [Carte](docs/B15-UNIT-MAP.md) · [Évaluation](docs/B15-EVALUATION.md) | Seconde passe et laboratoire Python/R publiés |
| B16 | Séries temporelles | [Carte](docs/B16-UNIT-MAP.md) · [Évaluation](docs/B16-EVALUATION.md) | Seconde passe et laboratoire Python/R publiés |
| B17 | Ingénierie des données | [Carte](docs/B17-UNIT-MAP.md) · [Évaluation](docs/B17-EVALUATION.md) | Seconde passe et laboratoires Python/R/SQL publiés |
| B18 | Actuariat et modélisation du risque | [Carte](docs/B18-UNIT-MAP.md) · [Évaluation](docs/B18-EVALUATION.md) | Seconde passe et laboratoire Python/R publiés |
| B19 | Économétrie et statistiques financières | [Carte](docs/B19-UNIT-MAP.md) · [Évaluation](docs/B19-EVALUATION.md) | Seconde passe et laboratoire Python/R publiés |
| B20 | Théorie statistique avancée et méthodes de recherche | [Carte](docs/B20-UNIT-MAP.md) · [Évaluation](docs/B20-EVALUATION.md) | Seconde passe et laboratoire Python/R publiés |

Les évaluations présentes dans le dépôt sont **formatives et non certifiantes**. Leur barème indicatif ne constitue pas un standard de réussite validé par un jury.

## Laboratoires et validation technique

Les laboratoires Python/R des blocs B08 à B20 sont intégrés au workflow GitHub Actions. Le bloc B17 contient également un schéma SQL pédagogique. Les implémentations sont destinées à l'apprentissage ; elles ne constituent pas des moteurs statistiques, économétriques ou actuariels de production.

La CI principale vérifie :
- les tests unitaires Python et les scripts de contrôle R des laboratoires B08–B20 ;
- le typecheck et le build TypeScript/Vite ;
- le rendu des fichiers Markdown et des expressions KaTeX ;
- le déploiement GitHub Pages depuis `master`.

**Une CI verte vérifie le code, le build et le rendu ; elle ne prouve pas à elle seule l'exactitude de chaque démonstration, corrigé ou interprétation.** La revue humaine indépendante, les tests auprès d'apprenants et l'audit d'accessibilité restent des étapes distinctes.

## Architecture et gouvernance

- [Architecture académique et parcours](docs/PROGRAMME-B-CURRICULUM.md)
- [Roadmap et état des jalons](docs/ROADMAP.md)
- [Registre des sources](docs/SOURCE-REGISTER.md)
- [Protocole de revue académique](docs/ACADEMIC-REVIEW-PROTOCOL.md)
- [Registre des revues internes](docs/reviews/PROGRAMME-B-INTERNAL-REVIEW-REGISTER.md)
- [Revue transversale du cursus](docs/reviews/PROGRAMME-B-CROSS-BLOCK-AUDIT-2026-11-21.md)
- [Standards éditoriaux](docs/EDITORIAL-STANDARDS.md)
- [Modèle de contenu et identifiants](docs/CONTENT-MODEL.md)
- [Spécification du moteur d'évaluation](docs/ASSESSMENT-ENGINE.md)

## Limites de la plateforme actuelle

- Le site public est une application statique ; il ne fournit pas de comptes apprenants ni d'historique privé côté serveur.
- Le diagnostic et les activités interactives sont formatifs.
- Aucun examen sécurisé, système de surveillance, anti-triche ou certification n'est fourni.
- Les clés de correction présentes dans le dépôt pédagogique ne doivent pas être utilisées pour un examen à enjeu sans séparation serveur et revue de sécurité.
- Les contenus sont rédigés en français ; une version anglaise nécessitera une adaptation et une revue pédagogique.

## Développement local

Node.js 22+ requis.

```bash
npm install
npm run dev
npm run build
```

## Déploiement

GitHub Actions exécute les contrôles sur les branches et déploie GitHub Pages depuis `master`. Les branches de travail ne modifient pas le site public avant leur fusion et le succès du workflow de déploiement.
