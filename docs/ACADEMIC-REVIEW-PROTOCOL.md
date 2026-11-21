# Programme B — Protocole de revue académique et de publication

**Version 1.0 · 21 novembre 2026**

## 1. Objet

Ce protocole définit les preuves minimales nécessaires pour faire progresser une unité de planned à draft, reviewed, tested puis published. Il s'applique aux cours, exercices, corrigés, évaluations, notebooks et projets.

Le protocole vise à rendre les contrôles explicites et traçables. Il ne transforme pas une revue interne ou assistée par IA en certification universitaire.

## 2. Les cinq portes de validation

### Gate A — Cadrage et prérequis
- Le périmètre est délimité et relié à l'architecture du cursus.
- Les prérequis sont formulés comme des compétences observables.
- Les objectifs sont mesurables et cohérents avec le niveau L0–L4.
- Les doublons avec les unités voisines sont identifiés.
- Les exclusions et prolongements sont documentés.

**Preuve attendue :** fiche d'identité, carte des objectifs et graphe des prérequis.

### Gate B — Exactitude scientifique
- Chaque définition précise les objets, domaines, hypothèses et conventions.
- Chaque théorème est énoncé avec ses conditions.
- Les démonstrations sont complètes au niveau annoncé.
- Les calculs et exemples ont été recalculés indépendamment.
- Les cas limites et contre-exemples pertinents sont traités.
- Les approximations numériques sont distinguées des résultats exacts.
- Les notations sont cohérentes avec les unités précédentes.

**Preuve attendue :** liste de contrôle scientifique complétée, corrections apportées et références localisées.

### Gate C — Revue croisée des sources
- Au moins deux sources pertinentes sont comparées pour les notions centrales, lorsque le corpus le permet.
- Les divergences de notation, de convention ou de niveau sont consignées.
- Les références sont suffisamment précises pour retrouver la notion vérifiée.
- Les sources primaires ou institutionnelles sont privilégiées.
- Les limites du corpus sont explicites ; aucune institution n'est présentée comme validant le cours.

**Preuve attendue :** fiche de traçabilité bibliographique et tableau des choix éditoriaux.

### Gate D — Exercices, code et calcul
- Chaque exercice possède un objectif, un niveau et une solution.
- Les corrigés sont résolus indépendamment de la rédaction initiale.
- Les réponses numériques, unités, tolérances et barèmes sont vérifiés.
- Les questions à choix unique ont une seule bonne réponse.
- Les scripts et notebooks sont exécutés dans un environnement documenté.
- Les tests couvrent cas standards, cas limites et erreurs attendues.
- Les sorties sont reproductibles ou leurs sources de variabilité sont précisées.

**Preuve attendue :** rapport de résolution, résultats de tests et environnement d'exécution.

### Gate E — Pédagogie, accessibilité et publication
- La progression va de l'intuition vers la formalisation puis le transfert.
- Les exemples sont variés et ne reposent pas tous sur un même contexte.
- Les erreurs fréquentes et limites sont explicitées.
- Les évaluations mesurent les objectifs annoncés.
- Le rendu mathématique, les tableaux, les figures et les liens sont contrôlés.
- La navigation clavier, les contrastes et les textes alternatifs sont vérifiés.
- Le statut, la version, les sources et la date de revue sont visibles.

**Preuve attendue :** grille pédagogique, captures ou compte rendu de rendu et décision éditoriale.

## 3. États éditoriaux et règles de transition

| État | Signification | Condition de transition |
|---|---|---|
| planned | Périmètre défini, contenu absent | Cadrage suffisamment précis pour commencer |
| draft | Première rédaction complète | Gate A documentée ; contenu encore non validé |
| reviewed | Revue scientifique, bibliographique et pédagogique terminée | Gates A, B, C et E documentées ; aucune erreur bloquante ouverte |
| tested | Exercices, corrigés, code et rendu vérifiés | Gate D exécutée ; anomalies bloquantes résolues |
| published | Disponible aux apprenants | Tous les gates sont acceptés, version et sources tracées |
| retired | Remplacé ou retiré | Motif, version de remplacement et historique conservés |

Un statut ne doit jamais être avancé uniquement parce que le fichier existe ou que le build du site réussit.

## 4. Gravité des anomalies

- **Bloquante :** erreur de définition, hypothèse absente, preuve invalide, corrigé faux, code non reproductible sur le résultat central, risque de sécurité ou d'accessibilité empêchant l'usage. Publication interdite.
- **Majeure :** lacune qui compromet un objectif, une interprétation ou une étape pédagogique importante. Correction requise avant publication.
- **Mineure :** défaut de forme ou amélioration qui ne change pas le sens mathématique ni l'acquis visé. Peut être planifiée et documentée.
- **Suggestion :** amélioration facultative sans impact sur la validité.

Les anomalies sont enregistrées avec localisation, preuve, gravité, décision et statut de résolution.

## 5. Rôles et indépendance

- **Auteur :** produit le contenu original et ses références.
- **Relecture scientifique :** vérifie définitions, hypothèses, calculs et preuves.
- **Relecture pédagogique :** vérifie objectifs, prérequis, progression, exemples et évaluation.
- **Relecture technique :** exécute les scripts, tests, rendu et contrôles d'accessibilité.
- **Responsable éditorial :** décide du statut et conserve les éléments de preuve.

Lorsque la même personne ou le même système intervient à plusieurs étapes, cette limite est indiquée. Une auto-relecture ou une revue assistée par IA améliore le contrôle, mais ne constitue pas une évaluation humaine indépendante.

## 6. Échantillonnage et fréquence

Pour une unité courte, viser une vérification exhaustive des exercices et des corrigés. Pour une unité longue, les résultats centraux, toutes les preuves fondamentales, tous les exercices évalués et tous les scripts doivent être vérifiés ; les autres éléments font l'objet d'un échantillonnage documenté. Aucun échantillonnage ne peut remplacer le contrôle d'un résultat dont dépend toute la suite du cours.

Une modification de définition, d'hypothèse, de corrigé, de code central ou d'objectif déclenche une nouvelle revue des éléments affectés et une incrémentation de version.

## 7. Dossier de preuve par unité

Chaque unité publiée doit conserver :
1. version et date ;
2. objectifs, prérequis et niveau ;
3. sources consultées avec sections exactes ;
4. anomalies et corrections ;
5. vérification des démonstrations et calculs ;
6. vérification des exercices et barèmes ;
7. exécution du code et environnement ;
8. contrôle du rendu et de l'accessibilité ;
9. décision de statut et limites résiduelles.

## 8. Règle de transparence

Programme B est un projet pédagogique indépendant. Les comparaisons avec Harvard, MIT, Princeton, Stanford ou d'autres établissements décrivent uniquement des contenus et structures publiquement documentés. Elles ne doivent jamais être formulées comme une approbation, un partenariat, une accréditation ou une validation officielle.

Les contenus publiés doivent afficher honnêtement leur niveau de contrôle. Une revue automatisée ou assistée par IA ne garantit ni l'absence d'erreur ni l'équivalence à une revue académique indépendante.
