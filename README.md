# Programme B — Learning Studio

Cursus indépendant en mathématiques, probabilités, statistique et sciences quantitatives, associé à une plateforme d'apprentissage responsive.

## Prévisualisation
https://johngab7.github.io/Actu-Basics-Programme-B/

## Architecture et gouvernance académique
- Architecture académique cible : docs/PROGRAMME-B-CURRICULUM.md
- Registre des références : docs/SOURCE-REGISTER.md
- Protocole de revue académique : docs/ACADEMIC-REVIEW-PROTOCOL.md
- Standards éditoriaux : docs/EDITORIAL-STANDARDS.md
- Modèle de contenu : docs/CONTENT-MODEL.md
- Moteur d'évaluation : docs/ASSESSMENT-ENGINE.md

L'architecture cible comporte 20 blocs organisés en socle mathématique et computationnel, probabilités/statistique, spécialisations appliquées et approfondissements de recherche. Elle est développée progressivement ; le nombre de blocs planifiés ne signifie pas que leurs cours sont rédigés ou validés.

## État pédagogique actuel
- B01 : F01 est rédigé dans une première version originale (draft).
- F02–F08 : unités planifiées, non publiées.
- B02–B20 : architecture cible définie ; contenus à développer, documenter et relire.
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
