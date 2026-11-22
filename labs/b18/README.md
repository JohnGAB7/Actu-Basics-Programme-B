# B18 — Laboratoire actuariel Python/R

Laboratoire pédagogique sans dépendances externes Python/R. Les implémentations sont volontairement compactes et transparentes ; elles ne sont pas des moteurs actuariels de production.

## Couverture
- fréquence par unité d'exposition ;
- moments du coût agrégé sous indépendance fréquence-sévérité ;
- GLM Poisson log-link avec offset d'exposition (IRLS didactique Python, `glm` de base R) ;
- crédibilité de Bühlmann (EPV/VHM) ;
- Kaplan–Meier et erreur-type de Greenwood ;
- EPV d'une rente immédiate et d'une assurance temporaire à prestation fin d'année (les entrées de mortalité de l'assurance sont les probabilités conditionnelles annuelles q_x ; la survie jusqu'à chaque année est calculée dans la fonction) ;
- Chain-Ladder pondéré en volume ;
- récupération d'une couche XS ;
- VaR empirique et TVaR avec pondération fractionnaire de la queue.

## Exécution
Depuis la racine du dépôt :

```bash
python -m unittest discover -s labs/b18/tests -v
Rscript labs/b18/actuarial_lab.R
```

## Hypothèses et limites
- Les moments fréquence-sévérité supposent N indépendant des sévérités iid ; la dépendance n'est pas modélisée.
- Le GLM Python est un IRLS minimal sans matrice de covariance, erreurs-types robustes, pénalisation, sélection ni traitement avancé de séparation/singularité.
- Bühlmann suppose une structure de risque classique et un nombre d'observations homogène ; Bühlmann–Straub n'est pas implémenté.
- Kaplan–Meier suppose que les temps et indicateurs sont correctement définis ; la censure doit être non informative selon le modèle retenu.
- Les EPV illustrent des paiements annuels discrets ; pas de flux continus, frais, rachats, garanties ou options.
- Chain-Ladder fournit une projection centrale déterministe ; pas de Mack, bootstrap, BF ou facteurs tail.
- VaR/TVaR utilisent une distribution empirique finie ; ils ne remplacent pas l'analyse de modèle, les intervalles ni les scénarios de stress.
- Le SQL, la réglementation et les données réelles ne sont pas exécutés dans ce laboratoire. Aucun jeu de données personnel n'est inclus.
