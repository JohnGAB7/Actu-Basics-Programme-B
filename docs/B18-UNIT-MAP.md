# B18 — Carte pédagogique : Actuariat, assurance et modélisation du risque

**Version :** 1.1 · **Statut :** seconde consolidation pédagogique publiée après CI complète ; revue indépendante à réaliser.
**Charge indicative :** 54–66 heures · **Niveau :** L1–L3  
**Prérequis :** B08 probabilités, B11 inférence, B12 régression, B13 multivarié, B16 séries temporelles ; B14 causalité et B17 ingénierie recommandés.

## Finalité
Appliquer les probabilités, la statistique et les modèles financiers/assurantiels à la mesure, la tarification, la valorisation et la gestion des risques, en explicitant hypothèses, incertitude et cadre prudentiel.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| AR01 | Fondements actuariels, expositions et mesure du risque | Définir unités de risque et indicateurs | 4–5 h |
| AR02 | Modélisation de la fréquence et de la sévérité des sinistres | Modéliser comptages, coûts et coût agrégé | 5–6 h |
| AR03 | Tarification, GLM, relativités et contraintes tarifaires | Construire et valider un tarif technique | 6–7 h |
| AR04 | Crédibilité actuarielle et mutualisation de l'information | Combiner expérience propre et collective | 5–6 h |
| AR05 | Survie, mortalité et tables de vie | Estimer survie, mortalité et censure | 6–7 h |
| AR06 | Assurance vie, rentes et valeurs actuelles actuarielles | Valoriser prestations contingentes | 6–7 h |
| AR07 | Provisionnement non-vie et triangles de développement | Projeter ultimes et incertitude | 6–7 h |
| AR08 | Réassurance, transfert de risque et structures de couverture | Calculer rétentions et récupérations | 5–6 h |
| AR09 | Capital économique, agrégation et solvabilité | Mesurer pertes extrêmes et dépendance | 6–7 h |
| AR10 | Gouvernance actuarielle, validation et projet de risque | Documenter, valider et surveiller un modèle | 6–8 h |

## Compétences transversales
1. Définir exposition, fréquence, sévérité, coût agrégé et prime pure.
2. Estimer des modèles de fréquence et de sévérité.
3. Construire des tarifs GLM et évaluer leur calibration.
4. Comprendre crédibilité et mutualisation de l'information.
5. Construire tables de vie et modèles de survie.
6. Valoriser assurances et rentes.
7. Projeter provisions non-vie et leur incertitude.
8. Quantifier couvertures de réassurance et risques de contrepartie.
9. Agréger risques et interpréter capital économique.
10. Produire une étude actuarielle traçable et gouvernée.

## Dépendances pédagogiques
AR01–AR03 construisent la tarification ; AR04 introduit crédibilité ; AR05–AR06 traitent mortalité et assurance vie ; AR07–AR08 couvrent provisionnement et transfert de risque ; AR09–AR10 intègrent capital, validation et gouvernance. B12 fournit GLM ; B16 fournit dynamique temporelle ; B17 fournit qualité des données.

## Hors périmètre
Modèles de mortalité stochastique avancés, ALM complet, dérivés de longévité, IFRS 17 détaillé, tarification dynamique en production, modèles internes réglementaires complets et capital économique multi-périodes sont des prolongements vers B20 et des cours spécialisés.

## Critères de sortie
L'apprenant doit définir précisément l'objet valorisé, choisir une méthode cohérente, expliciter les hypothèses, mesurer sensibilité et incertitude, comparer à l'expérience et documenter les limites. Les références réglementaires doivent toujours être vérifiées dans leur version en vigueur.



## Seconde consolidation — version 1.1

La seconde passe renforce les fondements mathématiques et les conditions d'application :
- moments du coût agrégé et hypothèses d'indépendance fréquence-sévérité ;
- vraisemblance Poisson avec offset, relativités et interactions ;
- interprétation de EPV/VHM et extension Bühlmann–Straub ;
- tables discrètes, force de mortalité, Kaplan–Meier et variance de Greenwood ;
- EPV des assurances/rentes, calendrier de paiement et réserve prospective ;
- Chain-Ladder, facteurs tail, Mack, bootstrap et Bornhuetter–Ferguson ;
- couches de réassurance et coût attendu des récupérations ;
- Expected Shortfall, dépendance de queue et calibration prudentielle ;
- rôle de la fonction actuarielle, validation indépendante et suivi du modèle.

## Laboratoire Python/R

Le dossier `labs/b18/` ajoute des fonctions pédagogiques et tests :
- fréquence par exposition et moments composés ;
- GLM Poisson avec offset (IRLS minimal en Python, `glm.fit` en R) ;
- crédibilité de Bühlmann ;
- Kaplan–Meier/Greenwood ;
- EPV d'une rente immédiate et d'une assurance temporaire ;
- Chain-Ladder volume-pondéré ;
- récupération XS et VaR/TVaR empiriques.

Les implémentations ne sont pas des moteurs de tarification, provisionnement ou capital de production. Le laboratoire ne réimplémente pas Mack, bootstrap, Bühlmann–Straub, Cox, copules ni SCR.

## Critères de qualité

Chaque calcul doit déclarer unité d'exposition, base brute/nette, calendrier, population, horizon, convention d'actualisation et hypothèses de dépendance. Les modèles doivent être évalués par calibration, stabilité, sensibilité et validation hors période. Toute référence prudentielle doit être vérifiée dans la version juridiquement applicable à la date d'usage.

**Statut :** seconde consolidation pédagogique et laboratoire Python/R ajoutés dans une branche candidate ; tests CI, revue humaine indépendante, tests apprenants et audit d'accessibilité à réaliser.
