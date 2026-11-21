# B20 — Carte pédagogique : Théorie statistique avancée et méthodes de recherche

**Version :** 0.1 · **Statut :** Revue interne effectuée — consolidation pédagogique en cours.
**Charge indicative :** 60–76 heures de cours et ateliers, hors mémoire de recherche  
**Niveau :** M1–M2 / préparation recherche  
**Prérequis :** B08 probabilités, B11 inférence, B12 régression, B13 multivarié, B15 machine learning, B16 séries temporelles, B17 reproductibilité ; analyse réelle et algèbre linéaire avancées.

## Finalité
Approfondir les fondements mathématiques de la statistique moderne, les résultats asymptotiques, l'inférence semi-paramétrique et bayésienne, les processus stochastiques, les méthodes en grande dimension, l'optimisation et la pratique scientifique reproductible.

## Parcours des unités

| Code | Unité | Acquis principal | Durée |
|---|---|---|---:|
| AT01 | Fondements mesurés de la probabilité et convergence | Formaliser convergence et passages à la limite | 6–7 h |
| AT02 | Théorie asymptotique des estimateurs et méthodes delta | Établir consistance et normalité asymptotique | 6–7 h |
| AT03 | Processus empiriques, convergence faible et bootstrap avancé | Comprendre limites fonctionnelles et rééchantillonnage | 6–8 h |
| AT04 | Vraisemblance avancée, modèles semi-paramétriques et information | Étudier nuisance, efficacité et MLE | 6–8 h |
| AT05 | Inférence bayésienne avancée et calcul Monte-Carlo | Construire posterior, MCMC et diagnostics | 6–8 h |
| AT06 | Processus stochastiques, martingales et temps d’arrêt | Formaliser information et dynamique aléatoire | 6–8 h |
| AT07 | Statistique en grande dimension et inférence après sélection | Distinguer prédiction et inférence haute dimension | 6–8 h |
| AT08 | Optimisation numérique et algorithmes statistiques | Diagnostiquer convergence et stabilité numérique | 5–7 h |
| AT09 | Méthodes de recherche, simulation et science reproductible | Concevoir une étude transparente | 5–7 h |
| AT10 | Projet de recherche avancée et mémoire reproductible | Construire un projet original défendable | 8–12 h de cadrage |

## Compétences transversales
1. Maîtriser les modes de convergence et théorèmes limites.
2. Démontrer consistance, normalité asymptotique et résultats delta.
3. Comprendre processus empiriques et validité du bootstrap.
4. Analyser vraisemblance, paramètres de nuisance et efficacité.
5. Réaliser inférence bayésienne et diagnostiquer calcul Monte-Carlo.
6. Formaliser processus adaptés, martingales et temps d'arrêt.
7. Comprendre régularisation, grande dimension et inférence après sélection.
8. Choisir des algorithmes numériques stables.
9. Concevoir simulations et plans d'analyse reproductibles.
10. Développer une question de recherche avec contribution et limites explicites.

## Dépendances pédagogiques
AT01–AT03 construisent les fondements de convergence ; AT04–AT05 couvrent inférence fréquentiste avancée et Bayes ; AT06 traite processus ; AT07–AT08 lient théorie, grande dimension et calcul ; AT09–AT10 développent méthode et projet de recherche. Les unités s'appuient sur les blocs précédents et les prolongent vers des lectures de niveau doctoral.

## Hors périmètre
Théorie complète des mesures, analyse fonctionnelle avancée, géométrie différentielle, statistiques non paramétriques infinidimensionnelles, théorie moderne de l'apprentissage, calcul stochastique complet et domaines spécialisés de recherche nécessitent des séminaires ou cours doctoraux dédiés.

## Critères de sortie
L'apprenant doit démontrer ou appliquer des résultats sous hypothèses explicites, distinguer théorème et heuristique, documenter les limites des méthodes et concevoir un projet de recherche reproductible. La validation d'un mémoire, d'un diplôme ou d'une compétence doctorale relève d'une institution et d'un jury, pas de ce bloc.



## Seconde consolidation — version 1.1

La seconde passe renforce les fondements et les conditions de validité :
- mesurabilité, mesure image, espérance conditionnelle, Fatou, convergence monotone/dominée et contre-exemples ;
- développement asymptotique des estimateurs M, contiguïté, LAN et efficacité ;
- processus empiriques, pont brownien, classes VC, entropie et bootstrap fonctionnel ;
- score efficace, espace tangent, vraisemblance profilée, frontières et orthogonalité ;
- balance détaillée, ergodicité, ESS/MCSE/R-hat et divergences HMC ;
- décomposition de Doob, variation quadratique et conditions d'arrêt optionnel ;
- garanties lasso, compatibilité, debiasing et dépendance des procédures FDR ;
- conditions KKT, Armijo/Wolfe, BFGS, conditionnement et solveurs stables ;
- erreur Monte-Carlo, puissance, couverture et gouvernance ;
- portes d'acceptation, réplication et soutenance.

## Laboratoire Python/R

Le dossier `labs/b20/` ajoute bootstrap percentile, test de permutation exact/Monte-Carlo, méthode delta, Metropolis–Hastings unidimensionnel, ESS simplifié, Benjamini–Hochberg, ridge, gradient par différences finies, descente Armijo et erreur-type Monte-Carlo.

Les fonctions sont didactiques. Elles ne remplacent pas les preuves, ne garantissent pas la convergence MCMC et ne couvrent pas HMC, diagnostics multi-chaînes complets, bootstrap dépendant, inférence sélective ou optimisation générale non convexe.

## Critères de qualité

Chaque théorème doit énoncer ses hypothèses et le mode de convergence ; chaque algorithme doit expliciter sa cible, son critère d'arrêt et ses diagnostics ; toute simulation doit distinguer erreur statistique, erreur Monte-Carlo et erreur numérique ; toute recherche doit tracer protocole, données, code, versions et limites.

**Statut :** seconde consolidation pédagogique et laboratoire Python/R dans une branche candidate ; CI, revue humaine indépendante, tests apprenants et audit d'accessibilité à réaliser.
