# Bloc B01 — Carte pédagogique des huit unités

**Version 1.1 · 21 novembre 2026**  
**Statut : huit unités rédigées et intégrées en draft ; aucune n'est encore reviewed, tested ou published.**

## Mission du bloc

Installer les bases du raisonnement quantitatif nécessaires aux mathématiques universitaires, à la statistique, à l'informatique scientifique et aux sciences actuarielles. Le bloc progresse de la structure des nombres vers les opérations, les transformations, l'algèbre, les fonctions et la représentation quantitative.

## Carte de progression

| Code | Unité | Périmètre et résultats attendus | Prérequis | Charge indicative |
|---|---|---|---|---:|
| F01 | Nombres, ensembles et ordre | Ensembles numériques, rationnels/irrationnels, preuves élémentaires, opérations sur les ensembles, ordre, intervalles, valeur absolue et distance | Calcul élémentaire | 4–5 h |
| F02 | Calcul, fractions, rapports et proportions | Opérations exactes, fractions équivalentes, simplification, fractions complexes, rapports, proportionnalité, règle de trois et taux comme quotient | F01 | 5–6 h |
| F03 | Pourcentages, indices et taux d'évolution | Pourcentage d'une quantité, taux, points de pourcentage, coefficient multiplicateur, évolutions successives, indices, taux moyen et pièges d'interprétation | F02 | 4–5 h |
| F04 | Puissances, racines et logarithmes | Lois des exposants, puissances rationnelles, racines, notation exponentielle, logarithmes, domaines, équations élémentaires et croissance | F02 | 5–6 h |
| F05 | Expressions algébriques et identités | Variables, termes, polynômes, distributivité, identités remarquables, factorisation, fractions rationnelles et restrictions de domaine | F02, F04 | 5–6 h |
| F06 | Équations, inéquations et systèmes | Équations linéaires et quadratiques élémentaires, équations rationnelles simples, inégalités, tableaux de signes, systèmes et vérification des solutions | F01, F05 | 6–7 h |
| F07 | Fonctions et modélisation élémentaire | Définition, domaine, image, antécédent, représentations, transformations, composition, fonctions usuelles, variations et lecture d'un modèle | F04, F05, F06 | 6–7 h |
| F08 | Repères, unités et représentation quantitative | Coordonnées, plans, graphes, échelles, unités, conversions, ordres de grandeur, notation scientifique, arrondis, précision, bases numériques et introduction aux flottants | F01–F07 selon section | 5–6 h |

Charge indicative totale : 40 à 48 heures. Cette estimation sera révisée après le test des unités auprès d'apprenants ; elle ne constitue pas une durée universelle.\n\n## État de rédaction — livraison groupée\n\nF01 à F08 disposent maintenant d'une première rédaction complète dans `src/content/bloc-01/` et sont toutes exposées dans la bibliothèque. Chaque unité comporte objectifs, développement conceptuel, exemples, applications, exercices corrigés, critères de maîtrise et références. Le statut reste `draft` jusqu'à la réalisation des revues scientifiques indépendantes, tests de calcul/code, tests apprenants et contrôles d'accessibilité/publication. La présence des huit unités ne vaut pas validation académique.

## Dépendances et règles de progression

- F01 précède les opérations sur fractions et l'étude des inégalités.
- F02 consolide le calcul exact et la proportionnalité ; F03 réutilise les rapports pour étudier les variations.
- F04 prépare les transformations algébriques et l'étude des fonctions exponentielles/logarithmiques.
- F05 construit le langage symbolique ; F06 mobilise ce langage pour résoudre et vérifier.
- F07 réunit expressions, équations et représentations dans le concept de fonction.
- F08 est une unité de synthèse quantitative et de représentation. Certains chapitres (coordonnées, unités, ordres de grandeur) peuvent être abordés plus tôt ; l'étude des erreurs numériques vient après les opérations exactes.

## Acquis de sortie du bloc

Au terme de B01, l'apprenant doit pouvoir :
1. lire et produire des expressions numériques et algébriques ;
2. choisir une représentation adaptée et conserver l'exactitude quand elle est nécessaire ;
3. effectuer et justifier des calculs arithmétiques, proportionnels et algébriques ;
4. résoudre des équations, inéquations et systèmes élémentaires en vérifiant les solutions ;
5. définir et interpréter une fonction simple ;
6. passer entre langage verbal, écriture symbolique, tableau et graphique ;
7. contrôler unités, ordres de grandeur, arrondis et limites des représentations numériques.

## Règle éditoriale

Chaque unité explicite les acquis antérieurs qu'elle réutilise. Une notion ne doit pas être répétée intégralement dans plusieurs unités : elle peut être rappelée brièvement, puis approfondie dans son unité de référence. Les statuts planned, draft, reviewed, tested et published restent indépendants du simple fait que le fichier existe dans le dépôt.
