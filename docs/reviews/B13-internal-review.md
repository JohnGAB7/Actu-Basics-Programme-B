# B13 — Première revue interne de contenu

**Version examinée :** 0.1 · **Statut :** revue assistée par IA, non indépendante  
**Périmètre :** M01–M10, carte pédagogique et évaluation formative.

## Contrôles de cohérence réalisés
- Séquence logique : objets multivariés → distribution et distance → inférence → méthodes explicatives et exploratoires → grande dimension.
- Distinction explicitée entre ACP et analyse factorielle commune.
- Distinction explicitée entre clustering non supervisé et classification supervisée.
- Hypothèses principales mentionnées pour T², MANOVA, LDA/QDA et modèles factoriels.
- Risques de standardisation, valeurs extrêmes, multiplicité, fuite d'information et singularité de covariance signalés.
- Articulation avec B12, B15, B17 et B20 rendue explicite.

## Points à approfondir avant statut reviewed
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
