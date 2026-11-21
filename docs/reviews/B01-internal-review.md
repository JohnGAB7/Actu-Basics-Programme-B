# Revue éditoriale interne — Bloc B01

**Date :** 21 novembre 2026  
**Périmètre :** F01 à F08, lecteur ReactMarkdown/KaTeX, carte B01 et évaluation transversale.  
**Nature :** revue interne assistée par IA ; ce document ne constitue pas une expertise indépendante ni une validation institutionnelle.  
**Verdict :** base cohérente de première rédaction ; conserver toutes les unités en `draft`.

## 1. Méthode et limites

La revue a porté sur :
- la progression des prérequis et la séparation des périmètres entre les unités ;
- les définitions, hypothèses, domaines de validité et notations ;
- les exemples numériques et les corrigés accessibles dans les huit fichiers ;
- les risques de confusion pédagogique récurrents ;
- les liens entre les contenus, la bibliothèque et l'évaluation finale ;
- la cohérence avec des références universitaires ouvertes, notamment OpenStax *College Algebra 2e* et le cours MIT *Mathematics for Computer Science*.

Les contrôles automatisés du dépôt vérifient le build, le typage et le rendu Markdown/KaTeX des fichiers importés par le lecteur. Ils ne prouvent pas la justesse de chaque proposition mathématique, la qualité de chaque explication ni la compréhension réelle par les apprenants. La vérification visuelle publique doit également être répétée après publication.

## 2. Progression et couverture

| Unité | Noyau de compétences | Dépendance principale | Observation de revue |
|---|---|---|---|
| F01 | Nombres, ensembles, rationalité, ordre, intervalles, valeur absolue | Calcul élémentaire | Convention sur $\mathbb N$ explicitée ; preuve de l'irrationalité de $\sqrt2$ et traitement des décimaux périodiques présents |
| F02 | Fractions, opérations exactes, rapports, taux, proportionnalité | F01 | Conditions de dénominateur et limites de la règle de trois explicitées |
| F03 | Pourcentages, points, coefficients multiplicateurs, indices, taux composés | F01–F02 | Bonne distinction entre variation relative et points de pourcentage ; hypothèses du CAGR à expliciter |
| F04 | Puissances, racines, exponentielle, logarithmes et croissance | F01–F02 | Domaines réels et restrictions logarithmiques généralement explicités |
| F05 | Expressions, polynômes, identités, factorisation, fractions rationnelles | F02–F04 | Restrictions de domaine conservées après simplification |
| F06 | Équations, quadratiques, inéquations, systèmes et contraintes | F01, F05 | Renforcement de la caractérisation rang/compatibilité des systèmes |
| F07 | Fonctions, domaines, images, composition, réciproque et modèles | F04–F06 | Précision ajoutée sur les transformations horizontales |
| F08 | Repères, pentes, graphiques, unités, arrondis et flottants | F01–F07 selon section | Clarification ajoutée sur les histogrammes à classes de largeurs différentes |

La progression est globalement cohérente pour un socle quantitatif pré-universitaire / début universitaire. Les preuves plus formelles, la logique, les relations et les raisonnements discrets approfondis doivent être développés dans B02 plutôt que surchargés dans B01.

## 3. Corrections et précisions apportées pendant cette passe

1. **F01 — valeur absolue :** définition réécrite sous forme par morceaux ; distance entre deux réels explicitée.
2. **F03 — taux composé moyen :** hypothèses $V_0>0$, $V_n>0$ et $n>0$ ajoutées ; la formule n'est pas présentée comme directement interprétable pour des valeurs initiales nulles ou des changements de signe.
3. **F06 — systèmes linéaires :** critère de compatibilité par égalité des rangs et distinction solution unique / infinité de solutions ajoutés.
4. **F07 — transformations :** compression, étirement et réflexion associés à $f(ax)$ explicités ; cas $a=0$ distingué.
5. **F08 — histogrammes :** définition de la densité par classe ajoutée pour que l'aire représente l'effectif ou la fréquence lorsque les largeurs diffèrent.
6. **Documentation :** une épreuve transversale de 100 points, corrigée, a été ajoutée et liée depuis la bibliothèque et la carte B01.

## 4. Contrôles arithmétiques ciblés

Les résultats suivants ont été recalculés lors de la revue :
- F01 : $0{,}272727\ldots=3/11$ ; $|x-4|<1{,}5$ donne $2{,}5<x<5{,}5$.
- F02 : $5/12+7/18=29/36$ ; $(14/15)(25/42)=5/9$ ; $180/2{,}4=75$ km/h.
- F03 : $1{,}15\times0{,}95=1{,}0925$ ; une hausse de 5 % suivie de 8 % donne 13,4 %.
- F04 : $\ln(x)+\ln(x-2)=\ln3$ donne $x=3$ après contrôle du domaine ; taux discret doublant en huit périodes $2^{1/8}-1$.
- F05 : $(2x-3)(x+4)=2x^2+5x-12$ ; $x^2+5x+6=(x+2)(x+3)$.
- F06 : $x^2-4x+3\leq0$ donne $[1,3]$ ; le système présenté donne $(4,6)$.
- F07 : $g(f(2))=9$ et $f(g(2))=5$ pour $f(x)=x+1$, $g(x)=x^2$.
- F08 : $72$ km/h $=20$ m/s ; la pente entre $(2,5)$ et $(6,13)$ vaut 2.

L'épreuve transversale a également été recalculée : le portefeuille de l'étude de cas passe de 6,5 % à 6,0 % de sinistres par contrat-année, soit −0,5 point et environ −7,69 % en variation relative. Le nombre brut de sinistres augmente alors que la fréquence diminue ; l'interprétation doit rester prudente.

Ces contrôles ciblés ne constituent pas un audit exhaustif de chaque ligne, exercice et fragment de code.

## 5. Points à traiter avant le statut « reviewed »

- Faire relire chaque unité par une personne compétente en mathématiques / statistique, idéalement avec spécialités complémentaires.
- Refaire indépendamment tous les corrigés, y compris les exercices non repris dans la section précédente.
- Exécuter réellement les extraits Python et R ; contrôler les exemples Excel/VBA dans les logiciels correspondants. Les fragments Excel/VBA sont actuellement des consignes de mise en œuvre, pas des tests automatisés.
- Ajouter davantage de problèmes ouverts, de démonstrations guidées et de questions diagnostiques dans une prochaine itération, notamment pour F04–F07.
- Faire tester la durée, la difficulté, la lisibilité et l'épreuve de synthèse par un petit groupe d'apprenants.
- Vérifier le rendu navigateur, les interactions clavier, le responsive, les contrastes et l'accessibilité après publication.
- Vérifier les liens bibliographiques et consigner les éditions / sections exactes utilisées dans le registre de sources.

## 6. Références de comparaison

- OpenStax, *College Algebra 2e* — prérequis, équations et inéquations, fonctions, systèmes : https://openstax.org/books/college-algebra-2e/pages/preface
- OpenStax, *College Algebra 2e*, §1.1 — nombres réels et langage algébrique : https://openstax.org/books/college-algebra-2e/pages/1-1-real-numbers-algebra-essentials
- OpenStax, *College Algebra 2e*, §2.7 — inégalités linéaires et inégalités avec valeur absolue : https://openstax.org/books/college-algebra-2e/pages/2-7-linear-inequalities-and-absolute-value-inequalities
- OpenStax, *College Algebra 2e*, §6.6 — équations exponentielles et logarithmiques : https://openstax.org/books/college-algebra-2e/pages/6-6-exponential-and-logarithmic-equations
- MIT, *Mathematics for Computer Science* — ensembles, relations, preuves et contradiction : https://learn.mit.edu/c/unit/mitx?resource=16901

Ces ressources servent de points de comparaison et d'approfondissement. Elles ne signifient ni affiliation ni approbation de Programme B par les institutions citées.

## 7. Statut de sortie

**F01–F08 : `draft`. Évaluation B01 : `draft`.**

La revue interne a permis de préciser plusieurs hypothèses et d'ajouter une épreuve transversale. Les preuves nécessaires pour les états `reviewed`, `tested` et `published` restent à produire séparément.


## Décision de consolidation — 21 novembre 2026

La première revue ciblée de F01–F08 est complétée par une seconde passe de cohérence de bloc. B01 est désormais classé **revue interne effectuée — consolidation pédagogique en cours**. Les calculs ciblés consignés plus haut sont maintenus ; les limites sur la vérification exhaustive des corrigés, l'exécution des exemples logiciels, les tests apprenants et la relecture humaine indépendante restent explicites. L'ancien état `draft` est historique et supersédé par le registre global `docs/reviews/PROGRAMME-B-INTERNAL-REVIEW-REGISTER.md`.
