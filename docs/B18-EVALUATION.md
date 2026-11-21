# B18 — Évaluation formative de synthèse

**Statut :** Revue interne effectuée — consolidation pédagogique en cours.
Évaluation formative, non certifiante.

## Partie A — Fréquence, sévérité et tarification (25 points)
1. (5 pts) Définir exposition, fréquence, sévérité et prime pure.
2. (5 pts) Pour 200 sinistres et 1 000 années d'exposition, calculer fréquence.
3. (5 pts) Écrire un GLM Poisson avec offset d'exposition.
4. (5 pts) Interpréter un coefficient log-link égal à 0,2.
5. (5 pts) Distinguer Poisson et binomial négatif.

## Partie B — Crédibilité et survie (20 points)
6. (5 pts) Écrire le facteur de crédibilité de Bühlmann.
7. (5 pts) Interpréter EPV et VHM.
8. (5 pts) Définir fonction de survie et taux de hasard.
9. (5 pts) Expliquer la censure à droite et l'hypothèse de Kaplan–Meier.

## Partie C — Valorisation et provisionnement (25 points)
10. (5 pts) Écrire la valeur actuelle espérée d'une assurance décès temporaire.
11. (5 pts) Distinguer rente viagère immédiate et différée.
12. (5 pts) Construire un facteur Chain-Ladder.
13. (5 pts) Expliquer deux limites de Chain-Ladder.
14. (5 pts) Calculer récupération XS pour sinistre 120 000 €, priorité 50 000 €, limite 100 000 €.

## Partie D — Capital et gouvernance (15 points)
15. (5 pts) Définir VaR et TVaR.
16. (5 pts) Pourquoi une corrélation faible ne garantit-elle pas une dépendance de queue faible ?
17. (5 pts) Citer les responsabilités principales d'une fonction actuarielle dans la gouvernance.

## Partie E — Projet (15 points)
18. (5 pts) Décrire un protocole de validation d'un tarif.
19. (5 pts) Citer les sources d'incertitude d'une provision.
20. (5 pts) Décrire les éléments d'une fiche modèle actuariel.

## Corrigé indicatif
1. Exposition = volume/temps de risque ; fréquence = sinistres/exposition ; sévérité = coût/sinistre ; prime pure = coût attendu par exposition.
2. 0,2 sinistre par année d'exposition.
3. log E[N_i|x_i] = log E_i + x_i'β.
4. exp(0,2) ≈ 1,221, soit +22,1 % de moyenne selon le modèle.
5. Poisson a égalité moyenne-variance conditionnelle ; binomial négatif autorise surdispersion.
6. Z=n/(n+K), K=EPV/VHM sous hypothèses Bühlmann.
7. EPV : variance moyenne intra-risque ; VHM : variance des moyennes entre risques.
8. S(t)=P(T>t) ; h(t)=f(t)/S(t).
9. L'événement n'est pas observé avant fin de suivi ; KM suppose censure indépendante selon information retenue.
10. Somme des capitaux actualisés multipliés par probabilité de décès dans chaque intervalle.
11. Immédiate commence sans délai ; différée commence après période de survie/attente.
12. f_j = somme des cumuls à j+1 / somme des cumuls à j.
13. Rupture de mix, inflation, changements de gestion ou sinistres atypiques.
14. min((120000−50000),100000)=70 000 €.
15. VaR : quantile de perte ; TVaR : moyenne de queue au-delà du quantile sous convention définie.
16. La dépendance non linéaire ou de queue peut subsister.
17. Coordination et validation des provisions, qualité des données, analyse de l'incertitude, avis souscription/réassurance et contribution à la gestion des risques.
18. Données, segmentation, train/test temporel, calibration, stabilité, équité, contraintes et documentation.
19. Processus, paramètres, modèle, données, hypothèses et scénarios.
20. Finalité, population, données, méthode, hypothèses, tests, limites, versions, propriétaire et fréquence de revue.

## Critères de réussite
Seuil indicatif : 70/100. Les erreurs sur exposition, censure, actualisation, triangle ou agrégation imposent une reprise ciblée. Les règles prudentielles doivent être vérifiées sur les textes applicables à la date d'usage.
