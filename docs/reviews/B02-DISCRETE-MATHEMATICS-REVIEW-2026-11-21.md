# B02 — Revue interne des unités de logique, preuve et mathématiques discrètes

**Date :** 21 novembre 2026  
**Périmètre :** D01 à D08, contenus pédagogiques présents dans `src/content/bloc-02/`.  
**Statut :** revue interne effectuée — consolidation pédagogique en cours.  
**Nature :** contrôle interne assisté par IA ; pas de validation académique indépendante ni d'accréditation.

## Méthode et portée

Contrôle de la progression, des définitions, des hypothèses, des exemples et des corrigés, avec recalcul ciblé des exercices. Les statuts éditoriaux ont été ajoutés aux huit fiches pour rendre visible l'état de revue. Les contrôles ne remplacent pas une seconde correction humaine indépendante ni des tests avec des apprenants.

## Résultats par unité

| Unité | Résultat de la revue | Consolidation restante |
|---|---|---|
| D01 — Logique propositionnelle et quantificateurs | Tables de vérité, implication matérielle, contraposée, négation des quantificateurs et ordre des quantificateurs cohérents. L'exemple de régression a été précisé : la moyenne empirique nulle des résidus est une identité d'un ajustement OLS avec constante, pas un critère de spécification correcte. | Ajouter des exercices de traduction logique dans des contextes plus variés et distinguer logique classique, logique à trois valeurs et incertitude statistique. |
| D02 — Ensembles, applications et relations | Inclusion/appartenance, image et image réciproque, injectivité/surjectivité, équivalence et ordre partiel correctement distingués. Le domaine et le codomaine sont traités comme partie de la définition d'une application. | Développer les preuves de partition en classes d'équivalence et davantage d'exemples de relations d'ordre non totales. |
| D03 — Méthodes de démonstration | Preuve directe, contraposée, contradiction, équivalence et contre-exemple correctement différenciés. Les exemples sur la parité et l'irrationalité de √2 sont cohérents. | Ajouter des preuves guidées plus longues et des exercices où l'apprenant doit choisir puis justifier la méthode de preuve. |
| D04 — Récurrence, sommes et récurrences simples | Initialisation et hérédité correctement formulées ; identités de sommes et exemple de résolution de récurrence cohérents ; la récurrence forte est présentée avec un exemple adapté. | Renforcer les conditions d'initialisation pour les récurrences d'ordre supérieur et ajouter des exercices de résolution fermée. |
| D05 — Dénombrement et coefficients binomiaux | Les distinctions ordre / répétition, arrangements / combinaisons, factorielle et binôme de Newton sont cohérentes. Les exemples de mots de passe et de sélection avec rôle ont été recalculés. | Ajouter davantage de problèmes de dénombrement avec cas disjoints, doubles comptages et objets identiques. |
| D06 — Probabilités finies et dénombrement | La formule équiprobable est explicitement conditionnée à l'équiprobabilité ; complément, union et incompatibilité sont correctement présentés. Les exercices de dé et de cartes sont cohérents sous les hypothèses annoncées. | Renforcer la distinction indépendance / incompatibilité dans des exercices calculés et ajouter un exemple de probabilités non équiprobables. |
| D07 — Graphes, arbres et réseaux | Définition, degré, lemme de la poignée de main, connexité, arbres et matrice d'adjacence cohérents. Les exercices sur les degrés et le nombre d'arêtes ont été contrôlés. | Préciser plus systématiquement les conventions de graphes simples, multigraphes et graphes orientés dans les exercices. |
| D08 — Algorithmes, complexité et notation asymptotique | O, Ω et Θ sont distingués ; les analyses de boucles, recherche dichotomique et tri par fusion sont cohérentes avec le modèle de calcul annoncé. | Ajouter des preuves formelles de bornes asymptotiques et des exercices qui distinguent pire cas, cas moyen et coût amorti. |

## Cohérence transversale

- D01–D03 installent le langage logique et la preuve avant les raisonnements discrets.
- D04 et D05 mobilisent les preuves et l'algèbre pour les récurrences et le dénombrement.
- D06 réutilise le dénombrement sans anticiper les variables aléatoires générales de B08.
- D07–D08 ouvrent vers les structures de données, réseaux et calcul, sans se substituer à un cours d'algorithmique avancée.
- Les frontières de contenu avec B01, B03 et B08 doivent être conservées pour éviter les doublons.

## Décision éditoriale

D01–D08 ont fait l'objet d'une revue interne et ne sont plus classées comme brouillons. Le statut signifie que cette passe de cohérence interne est effectuée ; il ne signifie pas que les fiches ont été certifiées, testées auprès d'apprenants ou validées par un comité académique.

**Statut retenu pour D01–D08 :** `Revue interne effectuée · consolidation pédagogique en cours`.

## Travaux restants

1. Relecture indépendante des preuves et corrigés.
2. Ajout d'exercices gradués avec solutions intégralement détaillées.
3. Tests auprès d'apprenants et révision des durées indicatives.
4. Vérification des références et liens au moment de la publication.
5. Contrôle du rendu des symboles, tableaux et formules dans le navigateur.
