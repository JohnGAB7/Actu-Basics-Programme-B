# B10 — Évaluation formative transversale

**Durée :** 120 minutes · **Barème :** 100 points · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.

## Exercice 1 — Population et mesure (10 points)
Une base contient une ligne par sinistre et un identifiant de contrat. Identifier l'unité statistique observée, expliquer pourquoi le numéro de contrat n'est pas une variable quantitative et préciser une information nécessaire pour calculer une fréquence annuelle.

**Corrigé :** l'unité est le sinistre ; l'identifiant contrat est une étiquette nominale ; il faut notamment le nombre ou la durée d'exposition des contrats sur la période et une définition cohérente de la période d'observation.

## Exercice 2 — Qualité et intégration (10 points)
Une jointure entre contrats et sinistres fait passer 10 000 contrats à 14 500 lignes. Est-ce nécessairement une erreur ? Quels contrôles réaliser ?

**Corrigé :** non si la relation est 1–n et qu'une ligne est désormais un sinistre ou une combinaison contrat-sinistre. Vérifier la granularité, les clés, cardinalités attendues, contrats sans sinistre, sinistres orphelins et totaux avant/après.

## Exercice 3 — Plan d'échantillonnage (10 points)
Une enquête en ligne ouverte reçoit 20 000 réponses. Peut-on conclure que l'échantillon représente la population ? Expliquer le risque principal et proposer une amélioration.

**Corrigé :** non. L'auto-sélection et la couverture incomplète peuvent induire un biais. Définir une base de sondage et un plan probabiliste, éventuellement stratifié, puis documenter la non-réponse.

## Exercice 4 — Poids de sondage (10 points)
Trois unités ont probabilités d'inclusion 0,5 ; 0,25 ; 0,1 et valeurs 10 ; 20 ; 30. Calculer les poids de base et l'estimateur HT du total.

**Corrigé :** poids 2 ; 4 ; 10. Total HT = 2×10 + 4×20 + 10×30 = 400.

## Exercice 5 — Résumés (10 points)
Pour les données 2, 3, 3, 7, 10, calculer moyenne et médiane. Commenter leur différence.

**Corrigé :** moyenne = 25/5=5 ; médiane = 3. La valeur 10 tire la moyenne vers le haut ; la médiane est plus robuste à cette observation.

## Exercice 6 — Dispersion (10 points)
Pour 2, 4, 6, calculer variance descriptive avec dénominateur n et variance corrigée avec n−1.

**Corrigé :** moyenne 4 ; somme des carrés des écarts 8. Variance descriptive = 8/3 ; variance corrigée = 8/2=4.

## Exercice 7 — Histogramme (10 points)
Une classe d'histogramme de largeur 5 a fréquence 0,2. Quelle hauteur de densité de fréquence utiliser ? Pourquoi ?

**Corrigé :** 0,2/5=0,04 ; l'aire (hauteur × largeur) vaut la fréquence de classe.

## Exercice 8 — Association (10 points)
Une corrélation agrégée est positive, mais négative dans chaque sous-groupe. Nommer le phénomène et expliquer pourquoi une conclusion causale serait injustifiée.

**Corrigé :** paradoxe de Simpson. Les compositions de groupes peuvent expliquer l'inversion ; l'association descriptive ne contrôle pas à elle seule confusion, sélection ou causalité inverse.

## Exercice 9 — Données manquantes (10 points)
Définir MCAR, MAR et MNAR en une phrase chacun. Pourquoi remplacer tous les manquants par zéro est-il généralement inapproprié ?

**Corrigé :** MCAR : disponibilité indépendante de toutes les données ; MAR : indépendance conditionnelle aux données observées ; MNAR : dépendance résiduelle aux valeurs manquantes. Zéro est une valeur observée possible et ne représente pas l'absence de mesure ; ce remplacement déforme distributions et relations.

## Exercice 10 — Rapport EDA (10 points)
Citer cinq éléments indispensables d'une synthèse exploratoire reproductible et distinguer exploration et confirmation.

**Corrigé :** question et population ; provenance, période et granularité ; méthodes et transformations ; résultats et graphiques avec effectifs/unités ; limites et analyses de sensibilité ; scripts et versions. L'EDA génère des hypothèses, la confirmation exige une procédure indépendante ou inférentielle adaptée.
