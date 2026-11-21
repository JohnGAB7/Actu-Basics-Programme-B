# B13 — Seconde revue interne mathématique et pédagogique

**Version examinée :** 1.1 · **Statut :** seconde passe assistée par IA, non indépendante  
**Périmètre :** MV01–MV10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Séquence logique : objets multivariés → distribution et distance → inférence → méthodes explicatives et exploratoires → grande dimension.
- Distinction explicitée entre ACP et analyse factorielle commune.
- Distinction explicitée entre clustering non supervisé et classification supervisée.
- Hypothèses principales mentionnées pour T², MANOVA, LDA/QDA et modèles factoriels.
- Risques de standardisation, valeurs extrêmes, multiplicité, fuite d'information et singularité de covariance signalés.
- Articulation avec B12, B15, B17 et B20 rendue explicite.

## Checklist initiale de la première passe (traçabilité)
1. Développer les preuves de la loi de T² et des transformations F, avec notation rigoureuse des degrés de liberté.
2. Détailler les matrices H et E en MANOVA et les distributions/approximations des critères multivariés.
3. Donner des exemples chiffrés complets d'ACP (valeurs propres, scores, charges, reconstruction et choix d'échelle).
4. Développer l'identification du modèle factoriel, l'estimation ML, l'analyse parallèle et les rotations obliques.
5. Distinguer plus précisément coefficients, charges et redondance dans la corrélation canonique.
6. Ajouter calibration probabiliste et choix des coûts en classification ; clarifier validation imbriquée.
7. Étendre le clustering aux méthodes par densité et à la robustesse ; traiter les données mixtes.
8. Approfondir shrinkage (Ledoit–Wolf/OAS), covariance robuste, pénalisation sparse et conditions de consistance.
9. Ajouter notebooks R et Python complets, jeux de données documentés et sorties reproductibles.
10. Vérifier toutes les expressions mathématiques dans KaTeX, les cas limites et la cohérence terminologique.

## Références de cadrage à consulter dans les révisions
- Penn State STAT 505 : https://online.stat.psu.edu/stat505/
- Penn State STAT 505 course outline : https://online.stat.psu.edu/statprogram/stat505
- scikit-learn, decomposition/PCA : https://scikit-learn.org/stable/modules/decomposition.html
- scikit-learn, PCA API : https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html
- UCLA OARC, analyses multivariées : https://stats.oarc.ucla.edu/

## Limites et statut
Cette revue est une vérification interne de cohérence et de couverture. Elle ne remplace pas une relecture humaine indépendante par un spécialiste de statistique multivariée, ni des tests par apprenants. Les leçons sont des premières versions de travail : elles ne doivent pas être étiquetées comme cours finalisés ou validés académiquement.


## Résultats de la seconde passe

1. MV01 : rang $\operatorname{rang}(S)\leq\min(p,n-1)$ et précautions relatives aux covariances pairwise.
2. MV02 : distinction du cas paramètres connus/estimés et rappel de la sensibilité aux atypies.
3. MV03 : hypothèses de la loi F de Hotelling T² explicitées via normalité multivariée, indépendance et Wishart ; intervalles marginaux distingués des régions simultanées.
4. MV04 : matrices H/E, degrés de liberté et critères multivariés formalisés.
5. MV05 : lien SVD/eigen, scores et convention des charges précisés ; exemple spectral recalculé.
6. MV06 : modèle général avec matrice de corrélation factorielle Φ et transformation de rotation donnant la même covariance.
7. MV07 : problème de valeurs propres généralisées et limites de singularité explicités.
8. MV08 : risque conditionnel avec matrice de coûts et calibration ajoutés.
9. MV09 : méthode DBSCAN et concentration des distances en grande dimension ajoutées.
10. MV10 : matrice de précision et corrélation partielle sous normalité, shrinkage et validation après sélection développés.
11. Évaluation : 18 questions, 100 points, somme vérifiée.
12. Laboratoire : Python/R standard, tests de covariance, spectre, ACP, Mahalanobis, T², shrinkage et k-means.

## Limites restant ouvertes

- Les transformations F exactes des quatre critères MANOVA ne sont pas toutes dérivées ; leur approximation doit être sélectionnée selon dimensions et plan.
- L'estimation complète par maximum de vraisemblance des modèles factoriels, l'analyse parallèle automatisée, les tests d'inférence canonique, LDA/QDA génériques, DBSCAN/HDBSCAN et les modèles graphiques creux ne sont pas implémentés dans le laboratoire.
- Le laboratoire de calcul matriciel est volontairement limité aux petites dimensions ; la décomposition Jacobi ne remplace pas les bibliothèques numériques optimisées.
- La validation humaine indépendante, les tests apprenants et l'audit d'accessibilité restent à effectuer.

Cette revue est interne et assistée par IA ; elle ne constitue pas une certification académique.


## Complément de seconde passe — MANOVA et identifiants MV · 21 novembre 2026

- Les identifiants publics des dix unités sont harmonisés en MV01–MV10 ; les noms de fichiers MV01–MV10 restent des chemins de stockage historiques et ne sont pas les identifiants pédagogiques.
- MV04 reçoit les formules des matrices H/E, des quatre critères multivariés et de leurs transformations F (Rao/Wilks, Pillai, Hotelling–Lawley, Roy), avec conditions d'usage, degrés de liberté et limites.
- Sources S158–S160 ajoutées au registre. La formule de Roy est décrite comme borne F hors cas exacts, et non comme approximation générique exacte.
- Revue assistée par IA ; les calculs doivent être confrontés à un logiciel de référence et relus indépendamment avant toute utilisation sommative.


## Revue ciblée du complément MANOVA MV04 — 21 novembre 2026

Une erreur de formule a été détectée dans la première version du complément : la transformation exacte de Roy pour le cas p=1 et q>1 avait été écrite comme si elle était la formule du cas q=1. Cela ne reproduisait pas l'ANOVA univariée. La formule est corrigée avec d=max(p,q) : F=Θ(v−d+q)/d, ddl (d,v−d+q), exacte lorsque min(p,q)=1 et borne supérieure F sinon. Le cas p=1 redonne F=Θv/q, ddl (q,v). La p-value obtenue à partir de la borne de Roy est une borne inférieure et peut être optimiste.

La transformation de Wilks/Rao conserve t=1 par continuité dans les cas dégénérés (p,q)=(1,2) ou (2,1). Les formules de Pillai et Hotelling–Lawley ont été contrôlées par substitution dans le cas univarié et correspondent au F classique.

Cette correction illustre pourquoi la CI Markdown/KaTeX ne suffit pas à valider les mathématiques. Une comparaison indépendante à R/MANOVA, SAS ou Stata reste requise.
