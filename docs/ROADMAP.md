# Roadmap — Programme B

**Mise à jour : 21 novembre 2026**

Cette roadmap distingue le cursus publié, les contrôles internes, les validations indépendantes et les fonctions de plateforme qui ne sont pas encore opérationnelles.

## 1. Fondation et expérience web statique

- [x] Dépôt et architecture de programme documentés.
- [x] Application responsive et catalogue de 20 blocs.
- [x] Lecteur de cours avec rendu Markdown/KaTeX.
- [x] Site public GitHub Pages.
- [x] Workflow CI pour Python, R, typecheck, build et validation du contenu.
- [ ] Tests navigateur automatisés sur plusieurs tailles d'écran.
- [ ] Audit manuel complet clavier, lecteurs d'écran, contrastes et navigation mobile.

## 2. Construction du cursus

- [x] Architecture de 20 blocs définie.
- [x] 196 unités pédagogiques identifiées et intégrées au dépôt.
- [x] Cartes pédagogiques et évaluations formatives créées pour les 20 blocs.
- [x] Laboratoires Python/R pour B08–B20 intégrés à la CI.
- [x] Seconde passe publiée pour B10–B12 et B14–B20.
- [x] Finaliser l'addendum MANOVA de B13 (MV04) ; complément fusionné et ancienne PR #60 fermée.
- [x] Harmoniser les prérequis des parcours recherche, actuariat et économétrie ainsi que les périmètres B18–B20.
- [ ] Localiser les références par notion et section pour les résultats centraux.
- [ ] Compléter les preuves, corrigés et tests des unités signalées dans le registre de revue.

## 3. Audit transversal — en cours

- [x] Vérifier les 196 codes publics : 196 identifiants uniques ; documenter le cas des chemins historiques B13.
- [x] Corriger l'ordre des prérequis B20 dans les parcours recherche, actuariat et économétrie ; les autres dépendances restent à auditer.
- [x] Aligner les périmètres B18–B20 sur leurs unités ; les autres blocs restent à examiner.
- [ ] Contrôler les conventions, notations, définitions et résultats réutilisés entre blocs.
- [ ] Contrôler les barèmes, objectifs et corrigés des évaluations.
- [x] Actualiser README, roadmap, B19, B20 et le registre des sources ; le contrôle des autres en-têtes de blocs reste à compléter.
- [x] Produire le rapport [d'audit transversal](reviews/PROGRAMME-B-CROSS-BLOCK-AUDIT-2026-11-21.md).

## 4. Validation académique et pédagogique indépendante

- [ ] Relecture scientifique par des spécialistes indépendants, avec compétence adaptée au bloc.
- [ ] Vérification indépendante des démonstrations, calculs, corrigés et exercices évalués.
- [ ] Comparaison des implémentations numériques à des logiciels ou références reconnus.
- [ ] Tests auprès d'apprenants : compréhension, charge, durée, difficulté et qualité des feedbacks.
- [ ] Révision des évaluations formatives à partir des résultats des tests.
- [ ] Audit externe de l'accessibilité et de l'expérience mobile.

Une revue interne assistée par IA et une CI réussie ne remplacent aucune de ces validations.

## 5. Pratique et diagnostic

- [x] Démonstrations interactives locales pour certains blocs.
- [ ] Schéma typé et versionné pour les questions.
- [ ] Banque d'items reliés aux objectifs et compétences.
- [ ] Moteur d'entraînement avec feedback accessible.
- [ ] Rapport diagnostique mappé aux compétences.
- [ ] Validation de l'exactitude des réponses et des barèmes.

## 6. Examens sécurisés et données apprenants

**Non démarré — nécessite une décision d'architecture, de confidentialité et de sécurité.**

- [ ] Choisir backend et fournisseur d'identité après analyse des besoins.
- [ ] Authentification, autorisation et séparation des données apprenants.
- [ ] Tentatives d'examen versionnées et horodatées côté serveur.
- [ ] Sélection et correction des réponses côté serveur.
- [ ] Autosauvegarde, reprise, idempotence et journal d'audit.
- [ ] Politique de conservation, export et suppression des données.
- [ ] Tests de sécurité, de récupération et de charge.

Aucune promesse d'examen sécurisé, d'anti-triche ou de certification ne doit être faite avant réalisation et vérification de ces fonctions.

## 7. Extensions

- [ ] Modules spécialisés au-delà du périmètre actuel, selon besoins identifiés.
- [ ] Traduction anglaise avec revue terminologique et pédagogique.
- [ ] Parcours avancés et projets intégrateurs multi-blocs.
- [ ] Analytique d'apprentissage et recommandations fondées sur des preuves, après revue de confidentialité.

## Principes de publication

Un bloc peut être présent sur le site sans être validé académiquement. Les statuts doivent distinguer :
- **publié** : contenu disponible sur GitHub Pages et build réussi ;
- **revue interne** : contrôle éditorial et scientifique interne documenté ;
- **testé** : code, rendu, exercices et corrigés vérifiés selon un protocole explicite ;
- **validé indépendamment** : revue humaine externe et tests apprenants documentés.

Les évaluations restent formatives et non certifiantes tant qu'un processus indépendant de validation et une gouvernance d'examen ne sont pas établis.
