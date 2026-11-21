# Programme B — Learning Studio

Cursus indépendant en mathématiques, probabilités, statistique et sciences quantitatives, associé à une plateforme d'apprentissage responsive.

## Prévisualisation
https://johngab7.github.io/Actu-Basics-Programme-B/

## Périmètre du dépôt
Ce dépôt contient la plateforme web et les contenus originaux destinés à être publiés dans Programme B. Aucun contenu pédagogique d'Actu-Basics-Lab n'est utilisé comme contenu final.

- Architecture académique : `docs/PROGRAMME-B-CURRICULUM.md`
- Standards éditoriaux : `docs/EDITORIAL-STANDARDS.md`
- Modèle de contenu : `docs/CONTENT-MODEL.md`
- Moteur d'évaluation : `docs/ASSESSMENT-ENGINE.md`

## État pédagogique actuel
- B01 : F01 est rédigé dans une première version originale (draft).
- F02–F08 : unités planifiées, non publiées.
- B02–B13 : architecture de cursus planifiée ; contenus à développer et à relire.
- Le diagnostic interactif est une démonstration formative locale, non certifiante.
- Aucun compte, historique privé serveur ou examen sécurisé n'est fourni par cette version statique.

Les statuts de contenu sont explicites : planifié, draft, reviewed, tested, published ou retired. Un fichier présent dans Git n'est pas automatiquement un cours validé.

## Développement local
Node.js 22+ requis.

```bash
npm install
npm run dev
npm run build
```

## Déploiement
Le workflow GitHub Actions vérifie le build sur les branches et déploie GitHub Pages depuis `master`. Les autres branches ne modifient pas la prévisualisation publique.
