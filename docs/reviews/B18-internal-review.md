# B18 — Seconde revue interne de contenu

**Version examinée :** 1.1 · **Statut :** seconde revue assistée par IA, non indépendante  
**Périmètre :** AR01–AR10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Progression du risque assuré vers tarification, crédibilité, vie, non-vie, réassurance et capital.
- Exposition, fréquence, sévérité, coût agrégé et offsets explicités.
- Hypothèses Poisson, binomiale négative, Tweedie et modèles de survie distinguées.
- Calendrier des flux et actualisation mis en évidence en assurance vie.
- Triangle, Chain-Ladder, Mack et limites structurelles couverts.
- Rétention, limites et risque de contrepartie présentés.
- VaR, TVaR, dépendance et gouvernance intégrés.
- Références EIOPA/Solvabilité II utilisées pour cadrer gouvernance et provisions, sans prétendre résumer tout le droit en vigueur.

## Points à approfondir avant statut reviewed
1. Ajouter dérivations de variance agrégée fréquence-sévérité et dépendance conditionnelle.
2. Détailler GLM tarifaires, splines, interactions, crédibilité et diagnostics de stabilité.
3. Ajouter méthodes de lissage/interpolation de tables et mortalité prospective.
4. Vérifier formules de rentes/assurances selon timing des prestations et conventions d'intérêt.
5. Développer Chain-Ladder, Mack, bootstrap, BF et effets de l'inflation.
6. Détailler structures de réassurance, clauses contractuelles et agrégation événementielle.
7. Ajouter copules, dépendance de queue et diversification sous stress.
8. Actualiser la cartographie des textes Solvabilité II, évolutions européennes et transposition nationale.
9. Ajouter notebooks R/Python, jeux de données synthétiques et études de cas complètes.
10. Revue humaine indépendante par actuaire, validation apprenant et vérification des calculs.

## Références de cadrage
- EIOPA — Actuarial function, Solvency II Single Rulebook : https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/article-5935_en
- Solvency II Directive, Article 48 — Actuarial function : https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/article-2131_en
- Solvency II Directive, Article 77 — Technical provisions : https://www.eiopa.europa.eu/rulebook/solvency-ii-single-rulebook/article-2160_en
- EUR-Lex, Directive 2009/138/EC : https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32009L0138
- EIOPA — Guidelines on valuation of technical provisions : https://www.eiopa.europa.eu/document/download/dec39b30-4aa3-4e06-aef8-4d06f7ee548a_en?filename=EIOPA-BoS-14-166rev2_GLs+on+the+valuation+of+technical+provisions.pdf

## Limites et statut
Cette revue ne remplace pas un avis juridique ni une revue humaine indépendante en actuariat. Les règles réglementaires sont susceptibles d'évoluer et doivent être vérifiées à la date d'application. Les unités sont des premières versions de travail, non accréditées.



## Seconde revue interne — version 1.1

**Périmètre :** approfondissements AR01–AR10, laboratoire Python/R, carte pédagogique et évaluation.

### Contrôles ajoutés
- AR01–AR02 : loi de variance totale pour le coût composé, unités d'exposition, surdispersion, censure/troncature et dépendance fréquence-sévérité.
- AR03 : log-vraisemblance Poisson avec offset, relativités/interactions, calibration du coût total et contraintes.
- AR04 : justification du facteur Bühlmann et ouverture Bühlmann–Straub.
- AR05 : force de mortalité, convention de censure ex æquo, Greenwood et distinction tables de période/cohorte.
- AR06 : réserve prospective, paiements continus/discrets et options comportementales.
- AR07 : facteur tail, Mack, bootstrap, Bornhuetter–Ferguson et réconciliation.
- AR08 : clauses contractuelles, coût de couche et risque de contrepartie.
- AR09 : Expected Shortfall intégral, dépendance de queue et contexte SCR Solvabilité II.
- AR10 : rôle de la fonction actuarielle, validation proportionnée, biais et suivi.

### Laboratoire et tests
Le laboratoire Python/R couvre les primitives définies dans `labs/b18/README.md`. Les tests Python visent les cas déterministes et erreurs d'entrée ; le script R exécute des assertions de base. Le GLM Python est un IRLS minimal sans erreurs-types/covariance ; le GLM R utilise `glm.fit`. Les deux ne remplacent pas les bibliothèques de production.

### Limites restantes
1. Vérifier la convergence et les cas limites du GLM sur plusieurs jeux synthétiques ; ajouter des intervalles et diagnostics.
2. Tester les calculs Chain-Ladder/Mack et bootstrap contre une implémentation de référence.
3. Comparer Kaplan–Meier/Greenwood à un logiciel spécialisé sur jeux de référence.
4. Ajouter données synthétiques de portefeuille, inflation, limites et grands sinistres.
5. Faire relire les formules de réserves et de mortalité par un actuaire indépendant.
6. Vérifier la réglementation Solvabilité II, IFRS 17 et les transpositions nationales en vigueur à la date d'utilisation.
7. Organiser tests apprenants et audit manuel d'accessibilité.

**Conclusion :** seconde revue assistée par IA ; elle ne constitue ni validation académique indépendante, ni avis réglementaire, ni certification.


## Références complémentaires de la seconde passe
- S127–S128 : Society of Actuaries, FAM/ASTAM 2026, modèles actuariels, tarification, provisionnement et crédibilité.
- S129 : SOA, Credibility Educational Resource for Pension Actuaries.
- S130–S132 : EIOPA, articles 77 (provisions), 48 (fonction actuarielle) et 101 (SCR) du Rulebook Solvency II.
- S133 : Human Mortality Database, périmètre et méthodes des tables de mortalité.
- S134 : International Actuarial Association, ISAP 1/5 et pratique actuarielle.
- S135 : SOA Research Institute, étude 2026 sur biais et modèles prédictifs de tarification d'assurance.

Les références cadrent les objectifs ; elles ne remplacent pas la vérification des éditions, des textes consolidés ni une revue indépendante.


## Revue mathématique et technique approfondie — 22 novembre 2026

**Périmètre :** AR01–AR10, carte v1.1, évaluation, fonctions Python/R et tests du laboratoire.

### Vérifications mathématiques

- **AR01–AR02 — coût composé :** sous indépendance de N et des sévérités iid, \(E[S]=E[N]E[X]\) et \(Var(S)=E[N]Var(X)+Var(N)E[X]^2\). Pour N Poisson, \(Var(S)=\lambda E\,E[X^2]\). Les unités d'exposition et les bases brut/net doivent être harmonisées.
- **AR03 — GLM Poisson :** le log-offset d'exposition a bien un coefficient fixé à 1. La log-vraisemblance donnée est correcte à constante près. Un coefficient sous lien log s'interprète par \(e^\beta\), et les interactions changent la relativité conditionnelle.
- **AR04 — Bühlmann :** \(K=EPV/VHM\), \(Z=n/(n+K)\) est la formule classique pour observations homogènes et moyenne individuelle. Le cas VHM nul est une limite dégénérée et ne doit pas être traité par division directe.
- **AR05 — survie :** \(h(t)=f(t)/S(t)\), \(H(t)=-\log S(t)\), \(q_x=1-p_x\) et \(p_x=e^{-\mu_x}\) sous force constante sont cohérents. Kaplan–Meier traite les ex æquo événement/censure selon une convention qui doit être annoncée. Greenwood n'est pas défini lorsque \(d_j=n_j\), ce que le cours signale.
- **AR06 — assurance temporaire :** la formule du cours est \(A_{x:\overline n|}=\sum_{k=0}^{n-1}v^{k+1}{}_kp_xq_{x+k}\). Le laboratoire recevait des probabilités annuelles sans préciser si elles étaient conditionnelles ou inconditionnelles ; il omettait la survie jusqu'à l'année k. Le laboratoire est maintenant aligné sur le cours : il reçoit les \(q_{x+k}\) conditionnels et calcule récursivement la survie.
- **AR07 — Chain-Ladder :** les facteurs volume-pondérés \(\sum C_{i,j+1}/\sum C_{i,j}\) et la projection des ultimes sont corrects pour un triangle cumulatif en escalier. Cette méthode est une projection déterministe ; elle ne fournit pas l'incertitude de Mack ou du bootstrap.
- **AR08 — réassurance XS :** \(R=\min((X-d)_+,L)\) est correct pour une couche par sinistre avant clauses d'agrégation, réintégrations et recouvrements.
- **AR09 — capital :** la définition intégrale de l'ES traite les atomes mieux que la simple moyenne conditionnelle au-delà de VaR. Le SCR Solvabilité II est une VaR 99,5 % à un an sur les fonds propres de base, selon l'article 101 ; il faut conserver le périmètre juridique et la version du texte.
- **AR10 — gouvernance :** le cours distingue validation indépendante, suivi, usage et responsabilité de la fonction actuarielle. Les passages réglementaires sont correctement présentés comme dépendants du cadre applicable.

### Défauts corrigés dans cette branche

1. **Assurance temporaire :** \`term_insurance_epv()\` Python/R multipliait chaque \(q_{x+k}\) par le facteur d'actualisation, sans le facteur de survie \({}_kp_x\). Pour \(q_0=10\\%\), \(q_1=20\\%\), capital 100 et taux 0, la valeur correcte est \(100(0,10+0,90\\times0,20)=28\), et non 30. Le code et les tests sont corrigés ; la fonction documente désormais que les entrées sont des probabilités conditionnelles annuelles.
2. **Chain-Ladder :** les fonctions acceptaient des lignes dont le nombre de développements observés augmentait avec les années d'origine, ce qui n'est pas un triangle supérieur gauche ordonné des années anciennes vers les plus récentes. Elles acceptent aussi désormais uniquement des cellules observées finies. Les deux langages rejettent les triangles mal formés ; tests ajoutés.
3. **GLM Poisson Python/R :** le laboratoire Python tronquait silencieusement le prédicteur linéaire à \([-30,30]\) avant exponentiation, ce qui modifiait le calcul numérique sans avertissement ; le laboratoire R acceptait des comptages fractionnaires. Le Python ne tronque plus et rejette les prédicteurs hors plage exponentielle sûre ; les deux langages rejettent les entrées non finies et les comptages non entiers.
4. **Contrôles de cohérence :** les probabilités de survie d'une rente doivent être non croissantes ; les deux implémentations l'imposent. Les temps de survie, pertes VaR/ES, moments, expositions et paramètres de crédibilité sont contrôlés pour finitude.

### Limites résiduelles

- Le GLM Python est un IRLS minimal : pas de matrice de covariance, erreurs-types robustes, pénalisation, sélection, séparation ni diagnostic complet. Les protections numériques ne remplacent pas un solveur éprouvé.
- Les tests sont synthétiques et n'établissent pas la validité sur portefeuilles réels.
- Kaplan–Meier suppose une censure non informative selon l'information retenue ; le laboratoire ne traite pas censure à gauche, troncature, risques concurrents ni intervalles de confiance complets.
- Chain-Ladder est un Chain-Ladder volume-pondéré simple : pas de sélection de facteurs, tail, Mack, bootstrap, BF ni inflation explicite.
- Le calcul d'ES est empirique et ne donne pas d'incertitude d'estimation ou de modèle.
- Les exemples ne sont pas des calculs prudentiels réglementaires ni des avis actuariels.
- Une revue indépendante par actuaire, la validation apprenant, la comparaison avec un logiciel de référence, l'actualisation juridique et l'accessibilité restent nécessaires.

**Conclusion provisoire :** deux incohérences mathématiques du laboratoire ont été corrigées, dont une erreur de facteur de survie dans l'assurance temporaire. Le statut demeure « revue interne assistée par IA » jusqu'à réussite de la CI complète et revue indépendante.
