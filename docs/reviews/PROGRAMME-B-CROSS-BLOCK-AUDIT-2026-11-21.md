# Programme B — Audit transversal des 20 blocs

**Version : 1.0 · 21 novembre 2026**  
**Périmètre :** dépôt Programme B, cartes pédagogiques, évaluations, lecteur, catalogue, registre des sources, parcours et workflows GitHub Actions.  
**Nature :** audit documentaire et structurel assisté par IA ; il ne constitue pas une revue mathématique exhaustive ni une validation humaine indépendante.

## 1. Résumé exécutif

L'inventaire vérifié comprend **20 blocs et 196 unités** : huit unités dans B01 et B02, dix dans chacun des blocs B03–B20. Les blocs B08–B20 disposent de laboratoires Python/R et leurs contrôles sont intégrés au workflow principal. B17 comprend en outre un schéma SQL pédagogique.

Les blocs B18, B19 et B20 ont été consolidés et publiés sur GitHub Pages après réussite des tests Python/R B08–B20, du build, du typecheck et de la validation Markdown/KaTeX. La publication technique n'est pas une validation académique indépendante.

## 2. Anomalies détectées et décisions

| ID | Gravité | Constat | Décision / correction dans cette branche |
|---|---|---|---|
| X01 | Majeure | README et roadmap décrivaient encore un état ancien : blocs B14–B20 non développés, application et CI non démarrées, sections en ordre incohérent et statut B20 répété. | README reconstruit à partir de l'état vérifié ; roadmap réécrite selon les jalons réels et les travaux restants. |
| X02 | Majeure | B19 avait reçu sa seconde passe et était publié, mais l'en-tête de sa carte et de son évaluation affichait encore la version 0.1 / « revue interne en cours ». | Carte B19 passée en v1.1 et évaluation identifiée v1.1, 120 min, 100 points, formative et publiée avec le bloc. |
| X03 | Majeure | Le registre des sources contenait une seconde ligne S139 alors que cette source Federal Reserve était déjà enregistrée dans B19. | Doublon S139 supprimé ; S139 reste référencée par identifiant existant. |
| X04 | Majeure | La carte B13 utilisait M01–M10 alors que le lecteur expose les codes publics MV01–MV10 ; les chemins de stockage historiques restent M01.md–M10.md. | Carte et revue B13 harmonisées sur MV01–MV10. Le registre explique la distinction code public / chemin de fichier. |
| X05 | Majeure | L'architecture B18 annonçait théorie de la ruine et risque extrême comme domaines du bloc, alors que les dix unités actuelles portent sur exposition, fréquence-sévérité, tarification, crédibilité, survie, vie/rentes, provisionnement, réassurance, capital et gouvernance. | Périmètre de référence aligné sur AR01–AR10 ; ruine et extrêmes signalés comme prolongements spécialisés non couverts par une unité autonome. |
| X06 | Majeure | L'architecture B19 annonçait séries macroéconomiques et risque de crédit, non couverts comme unités autonomes dans EF01–EF10. | Périmètre aligné sur identification, panels, IV/GMM, choix discret, rendements, facteurs, VaR/ES, microstructure et projet empirique ; macroéconométrie structurelle et crédit approfondi signalés comme extensions. |
| X07 | Majeure | Le périmètre B20 annonçait théorie de la décision sans développement explicite dans les unités ; les inégalités de concentration étaient mentionnées sans formules ni hypothèses détaillées. | AT03 enrichie avec Hoeffding, Bernstein et McDiarmid ; AT05 enrichie avec risque fréquentiste/bayésien, actions optimales, minimax et admissibilité. |
| X08 | Majeure | Le parcours recherche plaçait B20 avant plusieurs prérequis présents dans la carte ; les parcours actuariat et économétrie omettaient certains prérequis ou blocs recommandés. | Ordre des parcours mis à jour dans `src/curriculum.ts` et l'architecture académique. |
| X09 | Majeure | La PR #60 portait le complément MANOVA de B13 mais était restée en brouillon et très en retard sur master après les fusions B14–B20. | Son contenu MV04 a été repris dans cette branche d'audit : H/E, racines, Wilks/Rao, Pillai, Hotelling–Lawley, Roy, degrés de liberté, exactitude/approximation/borne et limites. Sources S158–S160 ajoutées. La PR #60 sera fermée après fusion de cette reprise, afin d'éviter deux branches concurrentes. |
| X10 | Mineure | Le modèle de contenu ne précisait pas la règle d'unicité des identifiants entre blocs et chemins de fichiers. | Identifiant global explicité sous la forme `Bxx-UNITCODE`, distinct du chemin physique de stockage. |
| X11 | Mineure | Les métadonnées de version du lecteur ne reflétaient pas les secondes passes B10–B20 ; B13/B19/B20 comportaient en outre des révisions locales plus récentes. | Versions du lecteur harmonisées : 1.1.0 pour les secondes passes, 1.2.0 pour MV04, EF08, AT03 et AT05. Les 196 codes de cours sont uniques. |

## 3. Contrôles structurels effectués

- Comptage des cartes pédagogiques B01–B20 et des lignes d'unités.
- Vérification des codes et titres d'unités dans les cartes.
- Comparaison du code public B13-MV01–MV10 avec les imports du lecteur.
- Vérification des 196 entrées du lecteur : 196 codes uniques, sans doublon ; 198 fichiers Markdown de leçons et suppléments dans `src/content/` (les deux fichiers supplémentaires sont des examens/corrigés B01, pas des unités).
- Contrôle des en-têtes de cartes et d'évaluations, des durées et barèmes déclarés.
- Contrôle des identifiants du registre des sources et repérage du doublon S139.
- Comparaison des périmètres B18–B20 entre architecture et unités réelles.
- Comparaison des parcours de `src/curriculum.ts` avec les prérequis des cartes.
- Vérification de l'intégration CI et de la publication des blocs B18–B20.

## 4. Limites de cet audit

Cet audit n'a pas recalculé exhaustivement les 196 unités, toutes les démonstrations, tous les exercices et tous les corrigés. Il n'a pas réalisé d'essais avec apprenants, de revue par un enseignant externe, d'audit complet de l'accessibilité ou de validation réglementaire. Les tests automatisés couvrent les laboratoires B08–B20, pas chaque résultat mathématique des leçons.

Les implémentations Python/R sont pédagogiques et ne doivent pas être utilisées comme moteurs de production sans validation spécifique.

## 5. Travaux encore requis

1. Revue scientifique indépendante par domaine, en commençant par les résultats fondamentaux et les corrigés sommatifs.
2. Vérification locale des références par chapitre/section et des droits d'usage des données.
3. Tests apprenants structurés sur compréhension, durée, charge et qualité du feedback.
4. Audit d'accessibilité clavier/lecteur d'écran, contraste, KaTeX et mobile.
5. Validation technique des expériences interactives dans les navigateurs cibles.
6. Conception séparée d'un moteur d'examens sécurisé après décision de backend et revue de confidentialité.

## 6. Décision de statut

Le dépôt peut être décrit comme un **cursus de 20 blocs, 196 unités, publié en version statique avec revue interne et laboratoires Python/R B08–B20**. Il ne doit pas être décrit comme accrédité, certifié, entièrement testé auprès d'apprenants ou validé par un comité académique externe.
