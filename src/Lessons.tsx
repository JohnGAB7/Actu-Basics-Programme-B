import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { ArrowLeft, ArrowUpRight, BookOpen, Clock3, Search } from 'lucide-react'
import f01 from './content/bloc-01/F01.md?raw'
import f02 from './content/bloc-01/F02.md?raw'
import f03 from './content/bloc-01/F03.md?raw'
import f04 from './content/bloc-01/F04.md?raw'
import f05 from './content/bloc-01/F05.md?raw'
import f06 from './content/bloc-01/F06.md?raw'
import f07 from './content/bloc-01/F07.md?raw'
import f08 from './content/bloc-01/F08.md?raw'
import d01 from './content/bloc-02/D01.md?raw'
import d02 from './content/bloc-02/D02.md?raw'
import d03 from './content/bloc-02/D03.md?raw'
import d04 from './content/bloc-02/D04.md?raw'
import d05 from './content/bloc-02/D05.md?raw'
import d06 from './content/bloc-02/D06.md?raw'
import d07 from './content/bloc-02/D07.md?raw'
import d08 from './content/bloc-02/D08.md?raw'
import v01 from './content/bloc-03/V01.md?raw'
import v02 from './content/bloc-03/V02.md?raw'
import v03 from './content/bloc-03/V03.md?raw'
import v04 from './content/bloc-03/V04.md?raw'
import v05 from './content/bloc-03/V05.md?raw'
import v06 from './content/bloc-03/V06.md?raw'
import v07 from './content/bloc-03/V07.md?raw'
import v08 from './content/bloc-03/V08.md?raw'
import v09 from './content/bloc-03/V09.md?raw'
import v10 from './content/bloc-03/V10.md?raw'
import a01 from './content/bloc-04/A01.md?raw'
import a02 from './content/bloc-04/A02.md?raw'
import a03 from './content/bloc-04/A03.md?raw'
import a04 from './content/bloc-04/A04.md?raw'
import a05 from './content/bloc-04/A05.md?raw'
import a06 from './content/bloc-04/A06.md?raw'
import a07 from './content/bloc-04/A07.md?raw'
import a08 from './content/bloc-04/A08.md?raw'
import a09 from './content/bloc-04/A09.md?raw'
import a10 from './content/bloc-04/A10.md?raw'
import m01 from './content/bloc-05/M01.md?raw'
import m02 from './content/bloc-05/M02.md?raw'
import m03 from './content/bloc-05/M03.md?raw'
import m04 from './content/bloc-05/M04.md?raw'
import m05 from './content/bloc-05/M05.md?raw'
import m06 from './content/bloc-05/M06.md?raw'
import m07 from './content/bloc-05/M07.md?raw'
import m08 from './content/bloc-05/M08.md?raw'
import m09 from './content/bloc-05/M09.md?raw'
import m10 from './content/bloc-05/M10.md?raw'
import o01 from './content/bloc-06/O01.md?raw'
import o02 from './content/bloc-06/O02.md?raw'
import o03 from './content/bloc-06/O03.md?raw'
import o04 from './content/bloc-06/O04.md?raw'
import o05 from './content/bloc-06/O05.md?raw'
import o06 from './content/bloc-06/O06.md?raw'
import o07 from './content/bloc-06/O07.md?raw'
import o08 from './content/bloc-06/O08.md?raw'
import o09 from './content/bloc-06/O09.md?raw'
import o10 from './content/bloc-06/O10.md?raw'
import n01 from './content/bloc-07/N01.md?raw'
import n02 from './content/bloc-07/N02.md?raw'
import n03 from './content/bloc-07/N03.md?raw'
import n04 from './content/bloc-07/N04.md?raw'
import n05 from './content/bloc-07/N05.md?raw'
import n06 from './content/bloc-07/N06.md?raw'
import n07 from './content/bloc-07/N07.md?raw'
import n08 from './content/bloc-07/N08.md?raw'
import n09 from './content/bloc-07/N09.md?raw'
import n10 from './content/bloc-07/N10.md?raw'
import p01 from './content/bloc-08/P01.md?raw'
import p02 from './content/bloc-08/P02.md?raw'
import p03 from './content/bloc-08/P03.md?raw'
import p04 from './content/bloc-08/P04.md?raw'
import p05 from './content/bloc-08/P05.md?raw'
import p06 from './content/bloc-08/P06.md?raw'
import p07 from './content/bloc-08/P07.md?raw'
import p08 from './content/bloc-08/P08.md?raw'
import p09 from './content/bloc-08/P09.md?raw'
import p10 from './content/bloc-08/P10.md?raw'
import s01 from './content/bloc-09/S01.md?raw'
import s02 from './content/bloc-09/S02.md?raw'
import s03 from './content/bloc-09/S03.md?raw'
import s04 from './content/bloc-09/S04.md?raw'
import s05 from './content/bloc-09/S05.md?raw'
import s06 from './content/bloc-09/S06.md?raw'
import s07 from './content/bloc-09/S07.md?raw'
import s08 from './content/bloc-09/S08.md?raw'
import s09 from './content/bloc-09/S09.md?raw'
import s10 from './content/bloc-09/S10.md?raw'
import t01 from './content/bloc-10/T01.md?raw'
import t02 from './content/bloc-10/T02.md?raw'
import t03 from './content/bloc-10/T03.md?raw'
import t04 from './content/bloc-10/T04.md?raw'
import t05 from './content/bloc-10/T05.md?raw'
import t06 from './content/bloc-10/T06.md?raw'
import t07 from './content/bloc-10/T07.md?raw'
import t08 from './content/bloc-10/T08.md?raw'
import t09 from './content/bloc-10/T09.md?raw'
import t10 from './content/bloc-10/T10.md?raw'
import i01 from './content/bloc-11/I01.md?raw'
import i02 from './content/bloc-11/I02.md?raw'
import i03 from './content/bloc-11/I03.md?raw'
import i04 from './content/bloc-11/I04.md?raw'
import i05 from './content/bloc-11/I05.md?raw'
import i06 from './content/bloc-11/I06.md?raw'
import i07 from './content/bloc-11/I07.md?raw'
import i08 from './content/bloc-11/I08.md?raw'
import i09 from './content/bloc-11/I09.md?raw'
import i10 from './content/bloc-11/I10.md?raw'
import r01 from './content/bloc-12/R01.md?raw'
import r02 from './content/bloc-12/R02.md?raw'
import r03 from './content/bloc-12/R03.md?raw'
import r04 from './content/bloc-12/R04.md?raw'
import r05 from './content/bloc-12/R05.md?raw'
import r06 from './content/bloc-12/R06.md?raw'
import r07 from './content/bloc-12/R07.md?raw'
import r08 from './content/bloc-12/R08.md?raw'
import r09 from './content/bloc-12/R09.md?raw'
import r10 from './content/bloc-12/R10.md?raw'
import mv01 from './content/bloc-13/M01.md?raw'
import mv02 from './content/bloc-13/M02.md?raw'
import mv03 from './content/bloc-13/M03.md?raw'
import mv04 from './content/bloc-13/M04.md?raw'
import mv05 from './content/bloc-13/M05.md?raw'
import mv06 from './content/bloc-13/M06.md?raw'
import mv07 from './content/bloc-13/M07.md?raw'
import mv08 from './content/bloc-13/M08.md?raw'
import mv09 from './content/bloc-13/M09.md?raw'
import mv10 from './content/bloc-13/M10.md?raw'
import ci01 from './content/bloc-14/CI01.md?raw'
import ci02 from './content/bloc-14/CI02.md?raw'
import ci03 from './content/bloc-14/CI03.md?raw'
import ci04 from './content/bloc-14/CI04.md?raw'
import ci05 from './content/bloc-14/CI05.md?raw'
import ci06 from './content/bloc-14/CI06.md?raw'
import ci07 from './content/bloc-14/CI07.md?raw'
import ci08 from './content/bloc-14/CI08.md?raw'
import ci09 from './content/bloc-14/CI09.md?raw'
import ci10 from './content/bloc-14/CI10.md?raw'
import ml01 from './content/bloc-15/ML01.md?raw'
import ml02 from './content/bloc-15/ML02.md?raw'
import ml03 from './content/bloc-15/ML03.md?raw'
import ml04 from './content/bloc-15/ML04.md?raw'
import ml05 from './content/bloc-15/ML05.md?raw'
import ml06 from './content/bloc-15/ML06.md?raw'
import ml07 from './content/bloc-15/ML07.md?raw'
import ml08 from './content/bloc-15/ML08.md?raw'
import ml09 from './content/bloc-15/ML09.md?raw'
import ml10 from './content/bloc-15/ML10.md?raw'
import ts01 from './content/bloc-16/TS01.md?raw'
import ts02 from './content/bloc-16/TS02.md?raw'
import ts03 from './content/bloc-16/TS03.md?raw'
import ts04 from './content/bloc-16/TS04.md?raw'
import ts05 from './content/bloc-16/TS05.md?raw'
import ts06 from './content/bloc-16/TS06.md?raw'
import ts07 from './content/bloc-16/TS07.md?raw'
import ts08 from './content/bloc-16/TS08.md?raw'
import ts09 from './content/bloc-16/TS09.md?raw'
import ts10 from './content/bloc-16/TS10.md?raw'

type Course = { code: string; title: string; description: string; duration: string; version: string; content: string }
const courses: Course[] = [
 {code:'F01',title:'Nombres, ensembles et ordre',version:'1.1.0',description:'Ensembles numériques, rationalité, ordre, intervalles et distance.',duration:'4–5 h',content:f01},
 {code:'F02',title:'Calcul, fractions, rapports et proportions',version:'1.0.0',description:'Calcul exact, fractions, rapports, taux et proportionnalité.',duration:'5–6 h',content:f02},
 {code:'F03',title:'Pourcentages, variations et indices',version:'1.0.0',description:'Mesurer les évolutions, composer les taux et interpréter les indices.',duration:'4–5 h',content:f03},
 {code:'F04',title:'Puissances, racines et logarithmes',version:'1.0.0',description:'Maîtriser les transformations multiplicatives et leurs domaines.',duration:'5–6 h',content:f04},
 {code:'F05',title:'Expressions algébriques et identités',version:'1.0.0',description:'Développer, factoriser et manipuler les expressions rationnelles.',duration:'5–6 h',content:f05},
 {code:'F06',title:'Équations, inéquations et systèmes',version:'1.0.0',description:'Résoudre, vérifier et interpréter les contraintes algébriques.',duration:'6–7 h',content:f06},
 {code:'F07',title:'Fonctions et modélisation élémentaire',version:'1.0.0',description:'Domaines, images, transformations, composition et modèles.',duration:'6–7 h',content:f07},
 {code:'F08',title:'Repères, unités et représentation quantitative',version:'1.0.0',description:'Graphiques, unités, ordres de grandeur et calcul numérique.',duration:'5–6 h',content:f08},
 {code:'D01',title:'Logique propositionnelle et quantificateurs',version:'1.0.0',description:'Propositions, connecteurs, implications, négations et quantificateurs.',duration:'3–4 h',content:d01},
 {code:'D02',title:'Ensembles, applications et relations',version:'1.0.0',description:'Opérations ensemblistes, fonctions, équivalences et ordres.',duration:'3–4 h',content:d02},
 {code:'D03',title:'Méthodes de démonstration',version:'1.0.0',description:'Preuves directes, contraposée, contradiction et contre-exemples.',duration:'4–5 h',content:d03},
 {code:'D04',title:'Récurrence, sommes et récurrences simples',version:'1.0.0',description:'Induction, sommes finies et suites définies récursivement.',duration:'4–5 h',content:d04},
 {code:'D05',title:'Dénombrement et coefficients binomiaux',version:'1.0.0',description:'Permutations, arrangements, combinaisons et binôme de Newton.',duration:'4–5 h',content:d05},
 {code:'D06',title:'Probabilités finies et dénombrement',version:'1.0.0',description:'Univers finis, événements et équiprobabilité sous hypothèses.',duration:'3–4 h',content:d06},
 {code:'D07',title:'Graphes, arbres et réseaux',version:'1.0.0',description:'Sommets, arêtes, chemins, connexité et arbres.',duration:'4–5 h',content:d07},
 {code:'D08',title:'Algorithmes, complexité et notation asymptotique',version:'1.0.0',description:'Analyse de coûts, ordres de croissance et notations O, Ω, Θ.',duration:'4–5 h',content:d08},
 {code:'V01',title:'Vecteurs et géométrie dans les espaces euclidiens',version:'1.0.0',description:'Coordonnées, normes, distances, produits scalaires et angles.',duration:'3–4 h',content:v01},
{code:'V02',title:'Matrices et opérations matricielles',version:'1.0.0',description:'Dimensions, opérations, produits et interprétation des transformations.',duration:'4–5 h',content:v02},
{code:'V03',title:'Systèmes linéaires et élimination de Gauss',version:'1.0.0',description:'Pivots, rang, solutions, systèmes homogènes et factorisation LU.',duration:'4–5 h',content:v03},
{code:'V04',title:'Rang, déterminants et inversibilité',version:'1.0.0',description:'Rang, déterminants, volume et critères de rang maximal.',duration:'4–5 h',content:v04},
{code:'V05',title:'Espaces vectoriels, sous-espaces, bases et dimension',version:'1.0.0',description:'Combinaisons linéaires, indépendance, noyau, image et dimension.',duration:'4–5 h',content:v05},
{code:'V06',title:'Applications linéaires, matrices et changements de base',version:'1.0.0',description:'Transformations, composition, représentation et similarité.',duration:'4–5 h',content:v06},
{code:'V07',title:'Orthogonalité, projections et orthonormalisation',version:'1.0.0',description:'Projections, Gram–Schmidt et factorisation QR.',duration:'4–5 h',content:v07},
{code:'V08',title:'Moindres carrés et approximation linéaire',version:'1.0.0',description:'Équations normales, résidus et approximation géométrique.',duration:'3–4 h',content:v08},
{code:'V09',title:'Valeurs propres, diagonalisation, matrices symétriques et Cholesky',version:'1.0.0',description:'Spectre, théorème spectral, matrices définies positives et Cholesky.',duration:'4–5 h',content:v09},
{code:'V10',title:'Décomposition en valeurs singulières et synthèse',version:'1.0.0',description:'SVD, approximation de rang faible et pseudoinverse.',duration:'4–5 h',content:v10},
 {code:'A01',title:'Suites réelles et convergence',version:'1.0.0',description:'Convergence, limites, monotonie, Cauchy et complétude.',duration:'4–5 h',content:a01},
{code:'A02',title:'Limites de fonctions et calcul des limites',version:'1.0.0',description:'Limites ε–δ, limites unilatérales, infinies et formes indéterminées.',duration:'4–5 h',content:a02},
{code:'A03',title:'Continuité et théorèmes fondamentaux',version:'1.0.0',description:'Continuité, TVI, extrema et continuité uniforme.',duration:'4–5 h',content:a03},
{code:'A04',title:'Dérivation : définition, règles et fonctions usuelles',version:'1.0.0',description:'Dérivée, taux instantané, règles de calcul et dérivation implicite.',duration:'4–5 h',content:a04},
{code:'A05',title:'Théorèmes des accroissements finis et applications',version:'1.0.0',description:'Rolle, TAF, monotonie, extrema et règle de l’Hôpital.',duration:'4–5 h',content:a05},
{code:'A06',title:'Formule de Taylor et approximation locale',version:'1.0.0',description:'Polynômes de Taylor, reste et contrôle de l’erreur.',duration:'4–5 h',content:a06},
{code:'A07',title:'Intégrale de Riemann et sommes',version:'1.0.0',description:'Sommes de Riemann, intégrabilité et interprétation géométrique.',duration:'4–5 h',content:a07},
{code:'A08',title:'Théorème fondamental et techniques d’intégration',version:'1.0.0',description:'Primitives, substitution, intégration par parties et fractions rationnelles.',duration:'4–5 h',content:a08},
{code:'A09',title:'Intégrales impropres et convergence',version:'1.0.0',description:'Intégrales sur domaines non bornés, singularités et critères.',duration:'3–4 h',content:a09},
{code:'A10',title:'Séries numériques et séries entières',version:'1.0.0',description:'Critères de convergence, convergence absolue et rayon de convergence.',duration:'5–6 h',content:a10},
 {code:'M01',title:'Fonctions de plusieurs variables, domaines et géométrie',version:'1.0.0',description:'Domaines, limites multivariées, continuité et courbes paramétrées',duration:'4–5 h',content:m01},
 {code:'M02',title:'Dérivées partielles et différentiabilité',version:'1.0.0',description:'Dérivées partielles, différentiabilité et approximation affine',duration:'4–5 h',content:m02},
 {code:'M03',title:'Gradient, règle de chaîne, Jacobien et dérivées directionnelles',version:'1.0.0',description:'Calcul différentiel vectoriel et propagation locale',duration:'4–5 h',content:m03},
 {code:'M04',title:'Hessienne, Taylor multivarié et extrema libres',version:'1.0.0',description:'Courbure et classification des points critiques',duration:'4–5 h',content:m04},
 {code:'M05',title:'Optimisation sous contraintes et multiplicateurs de Lagrange',version:'1.0.0',description:'Optimisation avec contraintes d’égalité et introduction aux KKT',duration:'4–5 h',content:m05},
 {code:'M06',title:'Intégrales doubles et triples, Fubini et changements de variables',version:'1.0.0',description:'Intégration multidimensionnelle et Jacobien',duration:'5–6 h',content:m06},
 {code:'M07',title:'Champs vectoriels, intégrales curvilignes et théorèmes intégraux',version:'1.0.0',description:'Circulation, flux, Green, Stokes et Gauss',duration:'5–6 h',content:m07},
 {code:'M08',title:'Équations différentielles du premier ordre et modèles dynamiques',version:'1.0.0',description:'Équations séparables, linéaires et stabilité élémentaire',duration:'4–5 h',content:m08},
 {code:'M09',title:'Équations différentielles linéaires du second ordre et systèmes',version:'1.0.0',description:'Équations à coefficients constants et systèmes linéaires',duration:'5–6 h',content:m09},
 {code:'M10',title:'Méthodes numériques, analyse qualitative et étude de systèmes',version:'1.0.0',description:'Euler, erreurs numériques et portraits de phase',duration:'4–5 h',content:m10},
 {code:'O01',title:'Modélisation mathématique des problèmes d’optimisation',version:'1.0.0',description:'Variables, objectif, contraintes et faisabilité',duration:'4–5 h',content:o01},
 {code:'O02',title:'Ensembles convexes, fonctions convexes et géométrie de l’optimalité',version:'1.0.0',description:'Convexité et garanties globales d’optimalité',duration:'4–5 h',content:o02},
 {code:'O03',title:'Programmation linéaire : géométrie et méthode du simplexe',version:'1.0.0',description:'Polyèdres, bases, pivots et cas particuliers',duration:'5–6 h',content:o03},
 {code:'O04',title:'Dualité linéaire, complémentarité et analyse de sensibilité',version:'1.0.0',description:'Bornes, certificats et prix d’ombre',duration:'5–6 h',content:o04},
 {code:'O05',title:'Optimisation sur les réseaux : chemins, flots et coûts',version:'1.0.0',description:'Plus courts chemins, flot maximum et coûts minimum',duration:'4–5 h',content:o05},
 {code:'O06',title:'Programmation en nombres entiers et optimisation combinatoire',version:'1.0.0',description:'Relaxation, branch-and-bound et coupes',duration:'5–6 h',content:o06},
 {code:'O07',title:'Optimisation différentiable sans contraintes',version:'1.0.0',description:'Gradient, recherche linéaire, Newton et quasi-Newton',duration:'4–5 h',content:o07},
 {code:'O08',title:'Optimisation sous contraintes non linéaires et conditions KKT',version:'1.0.0',description:'Lagrangien, régularité et optimalité',duration:'5–6 h',content:o08},
 {code:'O09',title:'Algorithmes pour l’optimisation convexe à grande échelle',version:'1.0.0',description:'QP, gradient projeté, proximal et points intérieurs',duration:'5–6 h',content:o09},
 {code:'O10',title:'Optimisation robuste et décision sous incertitude',version:'1.0.0',description:'Ensembles d’incertitude, robustesse et Pareto',duration:'4–5 h',content:o10},
 {code:'N01',title:'Représentation des nombres, virgule flottante et erreurs',version:'1.0.0',description:'Représentation binaire, arrondi et mesure des erreurs',duration:'4–5 h',content:n01},
 {code:'N02',title:'Conditionnement, stabilité et propagation des erreurs',version:'1.0.0',description:'Conditionnement, résidu et stabilité des algorithmes',duration:'4–5 h',content:n02},
 {code:'N03',title:'Résolution numérique des systèmes linéaires : méthodes directes',version:'1.0.0',description:'Élimination, pivotement et factorisations LU/Cholesky',duration:'5–6 h',content:n03},
 {code:'N04',title:'Méthodes itératives pour les systèmes linéaires',version:'1.0.0',description:'Jacobi, Gauss–Seidel, gradient conjugué et préconditionnement',duration:'5–6 h',content:n04},
 {code:'N05',title:'Recherche numérique de racines et systèmes non linéaires',version:'1.0.0',description:'Dichotomie, Newton, sécante et systèmes non linéaires',duration:'4–5 h',content:n05},
 {code:'N06',title:'Interpolation polynomiale et splines',version:'1.0.0',description:'Lagrange, Newton, splines et phénomène de Runge',duration:'4–5 h',content:n06},
 {code:'N07',title:'Approximation, moindres carrés et problèmes mal posés',version:'1.0.0',description:'Moindres carrés, QR, SVD et régularisation',duration:'4–5 h',content:n07},
 {code:'N08',title:'Dérivation et intégration numériques',version:'1.0.0',description:'Différences finies et quadratures numériques',duration:'4–5 h',content:n08},
 {code:'N09',title:'Résolution numérique des équations différentielles',version:'1.0.0',description:'Euler, Runge–Kutta, stabilité et problèmes raides',duration:'5–6 h',content:n09},
 {code:'N10',title:'Simulation, vérification et reproductibilité scientifique',version:'1.0.0',description:'Vérification, validation, tests et reproductibilité',duration:'4–5 h',content:n10},
 {code:'P01',title:'Modèles probabilistes, événements et axiomes',version:'1.0.0',description:'Espaces, axiomes et dénombrement',duration:'4–5 h',content:p01},
 {code:'P02',title:'Probabilité conditionnelle, probabilités totales et Bayes',version:'1.0.0',description:'Conditionnement et mise à jour bayésienne',duration:'4–5 h',content:p02},
 {code:'P03',title:'Indépendance et indépendance conditionnelle',version:'1.0.0',description:'Indépendance, factorisation et dépendance',duration:'4–5 h',content:p03},
 {code:'P04',title:'Variables aléatoires discrètes et lois usuelles',version:'1.0.0',description:'Bernoulli, binomiale, géométrique, hypergéométrique et Poisson',duration:'5–6 h',content:p04},
 {code:'P05',title:'Variables aléatoires continues et lois usuelles',version:'1.0.0',description:'Densité, répartition, uniforme, exponentielle et normale',duration:'5–6 h',content:p05},
 {code:'P06',title:'Transformations, sommes, convolution et fonctions génératrices',version:'1.0.0',description:'Transformations, sommes indépendantes et fonctions génératrices',duration:'4–5 h',content:p06},
 {code:'P07',title:'Lois conjointes, covariance et corrélation',version:'1.0.0',description:'Marginales, covariance et corrélation',duration:'5–6 h',content:p07},
 {code:'P08',title:'Espérance conditionnelle et variance conditionnelle',version:'1.0.0',description:'Agrégation, prévision et variance totale',duration:'4–5 h',content:p08},
 {code:'P09',title:'Inégalités probabilistes et modes de convergence',version:'1.0.0',description:'Markov, Tchebychev, Jensen et convergence',duration:'5–6 h',content:p09},
 {code:'P10',title:'Loi des grands nombres et théorème central limite',version:'1.0.0',description:'Loi faible, loi forte et théorème central limite',duration:'5–6 h',content:p10},
 {code:'S01',title:'Introduction aux processus stochastiques',version:'1.0.0',description:'Indices, états, trajectoires et stationnarité',duration:'4–5 h',content:s01},
 {code:'S02',title:'Chaînes de Markov à temps discret et matrices de transition',version:'1.0.0',description:'Propriété de Markov, transitions et Chapman–Kolmogorov',duration:'5–6 h',content:s02},
 {code:'S03',title:'Classification des états : communication, récurrence et périodicité',version:'1.0.0',description:'Classes de communication, récurrence et période',duration:'5–6 h',content:s03},
 {code:'S04',title:'Distributions stationnaires, convergence et réversibilité',version:'1.0.0',description:'Régimes invariants, convergence et équilibre détaillé',duration:'5–6 h',content:s04},
 {code:'S05',title:'Chaînes absorbantes, probabilités d’atteinte et temps d’absorption',version:'1.0.0',description:'Matrice fondamentale et temps moyen d’absorption',duration:'4–5 h',content:s05},
 {code:'S06',title:'Processus de Poisson et temps d’attente exponentiels',version:'1.0.0',description:'Comptage, temps inter-arrivées, superposition et amincissement',duration:'5–6 h',content:s06},
 {code:'S07',title:'Processus de renouvellement et théorèmes de renouvellement',version:'1.0.0',description:'Durées, taux de renouvellement et récompenses',duration:'4–5 h',content:s07},
 {code:'S08',title:'Martingales, filtrations et temps d’arrêt',version:'1.0.0',description:'Information, martingales et arrêt optionnel',duration:'5–6 h',content:s08},
 {code:'S09',title:'Chaînes de Markov à temps continu et modèles de naissance-mort',version:'1.0.0',description:'Générateurs, équations de Kolmogorov et files M/M/1',duration:'5–6 h',content:s09},
 {code:'S10',title:'Mouvement brownien et processus gaussiens',version:'1.0.0',description:'Brownien, covariance, variation quadratique et diffusion',duration:'5–6 h',content:s10},
 {code:'T01',title:'Données, variables, populations et échelles de mesure',version:'1.0.0',description:'Population, unité, granularité et échelles de mesure',duration:'4–5 h',content:t01},
 {code:'T02',title:'Collecte, qualité et préparation des données',version:'1.0.0',description:'Qualité, contrôles, jointures et traçabilité',duration:'5–6 h',content:t02},
 {code:'T03',title:'Plans d’échantillonnage et représentativité',version:'1.0.0',description:'Plans probabilistes, sélection et biais de couverture',duration:'5–6 h',content:t03},
 {code:'T04',title:'Estimateurs descriptifs sous sondage : totaux, moyennes et proportions',version:'1.0.0',description:'Pondération, estimateur HT et correction de population finie',duration:'5–6 h',content:t04},
 {code:'T05',title:'Tableaux, distributions et résumés numériques',version:'1.0.0',description:'Fréquences, distribution empirique et quantiles',duration:'5–6 h',content:t05},
 {code:'T06',title:'Dispersion, asymétrie, concentration et mesures robustes',version:'1.0.0',description:'Variance, IQR, MAD, asymétrie et robustesse',duration:'5–6 h',content:t06},
 {code:'T07',title:'Visualisation univariée : choisir et lire les graphiques',version:'1.0.0',description:'Barres, histogrammes, boxplots et intégrité visuelle',duration:'4–5 h',content:t07},
 {code:'T08',title:'Relations entre variables : tableaux croisés et graphiques bivariés',version:'1.0.0',description:'Tableaux croisés, associations, corrélation et paradoxe de Simpson',duration:'5–6 h',content:t08},
 {code:'T09',title:'Données manquantes, valeurs atypiques et sensibilité',version:'1.0.0',description:'MCAR, MAR, MNAR, valeurs atypiques et analyses de sensibilité',duration:'5–6 h',content:t09},
 {code:'T10',title:'Démarche d’exploration, synthèse et communication statistique',version:'1.0.0',description:'EDA, communication statistique et reproductibilité',duration:'4–5 h',content:t10},
 {code:'I01',title:'Lois d’échantillonnage et statistiques pivots',version:'1.0.0',description:'Lois exactes et asymptotiques, statistiques pivots et distributions de référence.',duration:'4–5 h',content:i01},
 {code:'I02',title:'Estimation ponctuelle et propriétés des estimateurs',version:'1.0.0',description:'Biais, variance, risque quadratique, consistance et suffisance.',duration:'4–5 h',content:i02},
 {code:'I03',title:'Méthodes des moments et maximum de vraisemblance',version:'1.0.0',description:'Construction, optimisation et limites des estimateurs paramétriques.',duration:'5–6 h',content:i03},
 {code:'I04',title:'Biais, variance, convergence et efficacité',version:'1.0.0',description:'Information de Fisher, Cramér–Rao, Rao–Blackwell et méthode delta.',duration:'5–6 h',content:i04},
 {code:'I05',title:'Intervalles de confiance et régions de confiance',version:'1.0.0',description:'Couverture, pivots, intervalles exacts et asymptotiques.',duration:'4–5 h',content:i05},
 {code:'I06',title:'Tests d’hypothèses, p-values et erreurs',version:'1.0.0',description:'Niveau, puissance, erreurs de type I/II et interprétation des p-values.',duration:'5–6 h',content:i06},
 {code:'I07',title:'Puissance statistique, taille d’échantillon et multiplicité',version:'1.0.0',description:'Planification, effet minimal, FWER et FDR.',duration:'4–5 h',content:i07},
 {code:'I08',title:'Tests du rapport de vraisemblance, de Wald et du score',version:'1.0.0',description:'Tests paramétriques et lois limites du khi-deux.',duration:'5–6 h',content:i08},
 {code:'I09',title:'Bootstrap, permutation et inférence computationnelle',version:'1.0.0',description:'Rééchantillonnage, échangeabilité et incertitude Monte-Carlo.',duration:'5–6 h',content:i09},
 {code:'R01',title:'Cadre de régression, association et modèle linéaire simple',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r01},
 {code:'R02',title:'Moindres carrés ordinaires et géométrie matricielle',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r02},
 {code:'R03',title:'Inférence en régression et analyse de variance',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r03},
 {code:'R04',title:'Régression multiple, facteurs et interactions',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r04},
 {code:'R05',title:'Diagnostics, résidus et influence',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r05},
 {code:'R06',title:'Transformations et régression flexible',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r06},
 {code:'R07',title:'Sélection, multicolinéarité et régularisation',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r07},
 {code:'R08',title:'Fondements des modèles linéaires généralisés',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r08},
 {code:'R09',title:'Régression logistique et modèles de comptage',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r09},
 {code:'R10',title:'Modèles mixtes, validation et synthèse',version:'0.1.0',description:'Unité de travail du bloc B12 — régression et modèles statistiques.',duration:'5–6 h',content:r10},
 {code:'MV01',title:'Données multivariées, vecteurs aléatoires et covariance',version:'0.1.0',description:'Construire et interpréter les matrices de covariance et de corrélation.',duration:'4–5 h',content:mv01},
 {code:'MV02',title:'Loi normale multivariée, distance de Mahalanobis et atypies',version:'0.1.0',description:'Comprendre ellipsoïdes, distances et diagnostics multivariés.',duration:'5–6 h',content:mv02},
 {code:'MV03',title:'Inférence sur un vecteur moyen et test T² de Hotelling',version:'0.1.0',description:'Construire des tests et régions de confiance simultanés.',duration:'5–6 h',content:mv03},
 {code:'MV04',title:'Analyse multivariée de la variance (MANOVA)',version:'0.1.0',description:'Comparer simultanément les vecteurs moyens de plusieurs groupes.',duration:'5–6 h',content:mv04},
 {code:'MV05',title:'Analyse en composantes principales (ACP)',version:'0.1.0',description:'Dériver et interpréter une réduction dimensionnelle linéaire.',duration:'6–7 h',content:mv05},
 {code:'MV06',title:'Analyse factorielle et variables latentes',version:'0.1.0',description:'Modéliser la covariance commune par des facteurs latents.',duration:'6–7 h',content:mv06},
 {code:'MV07',title:'Corrélation canonique et relations entre deux ensembles',version:'0.1.0',description:'Étudier les relations entre deux blocs de variables.',duration:'4–5 h',content:mv07},
 {code:'MV08',title:'Analyse discriminante et classification supervisée',version:'0.1.0',description:'Comprendre LDA/QDA et leur validation prédictive.',duration:'5–6 h',content:mv08},
 {code:'MV09',title:'Classification non supervisée et analyse de groupes',version:'0.1.0',description:'Choisir distances, algorithmes et diagnostics de clustering.',duration:'6–7 h',content:mv09},
 {code:'MV10',title:'Statistique de grande dimension, régularisation et étude intégrée',version:'0.1.0',description:'Diagnostiquer p/n, stabiliser les estimations et produire une analyse reproductible.',duration:'6–8 h',content:mv10},
 {code:'CI01',title:'Questions causales, estimands et résultats potentiels',version:'0.1.0',description:'Définir effet causal et hypothèses d’identification.',duration:'4–5 h',content:ci01},
 {code:'CI02',title:'Randomisation, essais contrôlés et inférence de randomisation',version:'0.1.0',description:'Relier estimation et mécanisme d’assignation.',duration:'5–6 h',content:ci02},
 {code:'CI03',title:'Plans d’expérience, facteurs et interactions',version:'0.1.0',description:'Concevoir plans factoriels et fractionnaires.',duration:'6–7 h',content:ci03},
 {code:'CI04',title:'DAG, confusion, médiation et biais de sélection',version:'0.1.0',description:'Justifier les ensembles d’ajustement à partir d’un graphe causal.',duration:'5–6 h',content:ci04},
 {code:'CI05',title:'Identification par échangeabilité, stratification et standardisation',version:'0.1.0',description:'Identifier et estimer des effets sous échangeabilité.',duration:'5–6 h',content:ci05},
 {code:'CI06',title:'Score de propension, appariement et pondération',version:'0.1.0',description:'Équilibrer les covariables observées et diagnostiquer le support.',duration:'6–7 h',content:ci06},
 {code:'CI07',title:'Estimation doublement robuste et apprentissage statistique causal',version:'0.1.0',description:'Combiner modèles de résultat et de traitement.',duration:'5–6 h',content:ci07},
 {code:'CI08',title:'Variables instrumentales et discontinuité de régression',version:'0.1.0',description:'Comprendre les stratégies quasi expérimentales locales.',duration:'6–7 h',content:ci08},
 {code:'CI09',title:'Différences-en-différences, études d’événement et contrôle synthétique',version:'0.1.0',description:'Évaluer interventions temporelles et politiques.',duration:'6–7 h',content:ci09},
 {code:'CI10',title:'Sensibilité, validité externe et protocole causal intégré',version:'0.1.0',description:'Produire une étude causale défendable et reproductible.',duration:'5–6 h',content:ci10},
 {code:'ML01',title:'Problèmes d’apprentissage, représentation et fonction de perte',version:'0.1.0',description:'Formaliser tâche, risque, cible et fonction de perte.',duration:'4–5 h',content:ml01},
 {code:'ML02',title:'Généralisation, complexité, surapprentissage et compromis biais-variance',version:'0.1.0',description:'Comprendre capacité, surapprentissage et régularisation.',duration:'5–6 h',content:ml02},
 {code:'ML03',title:'Validation, rééchantillonnage et sélection de modèles',version:'0.1.0',description:'Construire une évaluation sans fuite d’information.',duration:'5–6 h',content:ml03},
 {code:'ML04',title:'Modèles linéaires prédictifs et régularisation',version:'0.1.0',description:'Ridge, lasso, elastic net et régression logistique.',duration:'6–7 h',content:ml04},
 {code:'ML05',title:'Méthodes à noyaux, voisins et machines à vecteurs de support',version:'0.1.0',description:'KNN, marge et noyaux.',duration:'6–7 h',content:ml05},
 {code:'ML06',title:'Arbres de décision, bagging et forêts aléatoires',version:'0.1.0',description:'Arbres, impuretés et agrégation.',duration:'5–6 h',content:ml06},
 {code:'ML07',title:'Boosting et modèles additifs d’ensemble',version:'0.1.0',description:'AdaBoost et gradient boosting.',duration:'6–7 h',content:ml07},
 {code:'ML08',title:'Réseaux de neurones, rétropropagation et apprentissage profond',version:'0.1.0',description:'Propagation, gradients et régularisation.',duration:'6–8 h',content:ml08},
 {code:'ML09',title:'Modèles probabilistes, estimation de densité et détection d’anomalies',version:'0.1.0',description:'Modèles génératifs et scores d’atypie.',duration:'5–6 h',content:ml09},
 {code:'ML10',title:'Évaluation responsable, interprétabilité et cycle de vie d’un modèle',version:'0.1.0',description:'Décision, équité, robustesse et gouvernance.',duration:'6–8 h',content:ml10},
 {code:'TS01',title:'Données temporelles, tendances, saisonnalité et stationnarité',version:'0.1.0',description:'Décrire les motifs et justifier les transformations.',duration:'4–5 h',content:ts01},
 {code:'TS02',title:'Autocorrélation, bruit blanc et processus linéaires',version:'0.1.0',description:'Interpréter ACF/PACF et dépendance temporelle.',duration:'4–5 h',content:ts02},
 {code:'TS03',title:'Modèles ARMA : identification, estimation et diagnostics',version:'0.1.0',description:'Estimer et vérifier des modèles stationnaires.',duration:'5–6 h',content:ts03},
 {code:'TS04',title:'Modèles ARIMA et saisonniers SARIMA',version:'0.1.0',description:'Modéliser non-stationnarité et saisonnalité.',duration:'6–7 h',content:ts04},
 {code:'TS05',title:'Lissage exponentiel, décomposition et méthodes ETS',version:'0.1.0',description:'Construire des prévisions par lissage.',duration:'5–6 h',content:ts05},
 {code:'TS06',title:'Régression avec erreurs temporelles et analyse d’intervention',version:'0.1.0',description:'Combiner covariables et dynamique temporelle.',duration:'5–6 h',content:ts06},
 {code:'TS07',title:'Analyse spectrale et périodicités',version:'0.1.0',description:'Étudier fréquences et densité spectrale.',duration:'4–5 h',content:ts07},
 {code:'TS08',title:'Séries multivariées, VAR et cointégration',version:'0.1.0',description:'Modéliser plusieurs séries et équilibres de long terme.',duration:'6–7 h',content:ts08},
 {code:'TS09',title:'Volatilité conditionnelle : ARCH et GARCH',version:'0.1.0',description:'Modéliser la variance dynamique.',duration:'5–6 h',content:ts09},
 {code:'TS10',title:'Modèles espace-état, filtre de Kalman et évaluation des prévisions',version:'0.1.0',description:'Filtrer les états latents et évaluer les prévisions.',duration:'6–8 h',content:ts10},
 {code:'I10',title:'Introduction à l’inférence bayésienne',version:'1.0.0',description:'Prior, vraisemblance, posterior, crédibilité et prédiction.',duration:'5–6 h',content:i10},
]
export function LessonLibrary({query,setQuery}:{query:string;setQuery:(value:string)=>void}) {
 const [selected,setSelected]=useState<Course|null>(null)
 const filtered=useMemo(()=>courses.filter(c=>(c.code+c.title+c.description).toLowerCase().includes(query.toLowerCase())),[query])
 if(selected) return <div className="content-wrap lesson-reader">
  <button className="lesson-back" onClick={()=>setSelected(null)}><ArrowLeft size={15}/> Retour à la bibliothèque</button>
  <div className="lesson-reader-head"><div><div className="eyebrow">{selected.code.startsWith('TS') ? 'BLOC B16' : selected.code.startsWith('ML') ? 'BLOC B15' : selected.code.startsWith('CI') ? 'BLOC B14' : selected.code.startsWith('MV') ? 'BLOC B13' : selected.code.startsWith('I') ? 'BLOC B11' : selected.code.startsWith('T') ? 'BLOC B10' : selected.code.startsWith('S') ? 'BLOC B09' : selected.code.startsWith('P') ? 'BLOC B08' : selected.code.startsWith('N') ? 'BLOC B07' : selected.code.startsWith('O') ? 'BLOC B06' : selected.code.startsWith('M') ? 'BLOC B05' : selected.code.startsWith('A') ? 'BLOC B04' : selected.code.startsWith('V') ? 'BLOC B03' : selected.code.startsWith('D') ? 'BLOC B02' : 'BLOC B01'} · {selected.code} · VERSION {selected.version}</div><h1>{selected.title}</h1><p>{selected.description}</p></div><div className="lesson-time"><Clock3 size={15}/>{selected.duration}</div></div>
  <div className="exam-resource-warning"><strong>Contenu original Programme B · Version de travail</strong><span>Les unités sont des contenus originaux en version de travail. Les revues internes de B03, B04, B05 et B06 sont documentées ; les revues indépendantes et tests apprenants de l’ensemble du cursus restent à conduire.</span></div>
  <article className="markdown-card"><ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{selected.content}</ReactMarkdown></article>
  <div className="lesson-provenance"><span>Programme B · Version {selected.version} · Rédaction indépendante</span><a href={`https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/src/content/${selected.code.startsWith('ML') ? 'BLOC B15' : selected.code.startsWith('CI') ? 'bloc-14' : selected.code.startsWith('MV') ? 'bloc-13' : selected.code.startsWith('I') ? 'bloc-11' : selected.code.startsWith('T') ? 'bloc-10' : selected.code.startsWith('S') ? 'bloc-09' : selected.code.startsWith('P') ? 'bloc-08' : selected.code.startsWith('N') ? 'bloc-07' : selected.code.startsWith('O') ? 'bloc-06' : selected.code.startsWith('M') ? 'bloc-05' : selected.code.startsWith('A') ? 'bloc-04' : selected.code.startsWith('V') ? 'bloc-03' : selected.code.startsWith('D') ? 'bloc-02' : 'bloc-01'}/${selected.code.startsWith('MV') ? 'M' + selected.code.slice(2) : selected.code}.md`} target="_blank" rel="noreferrer">Voir le fichier source <ArrowUpRight size={13}/></a></div>
 </div>
 return <div className="content-wrap">
  <div className="page-heading"><div><div className="eyebrow">RESSOURCES PÉDAGOGIQUES · BLOCS B01–B16</div><h1>Bibliothèque</h1><p>Cent cinquante-six unités sont accessibles : huit en B01, huit en B02, et dix unités dans chacun des blocs B03 à B16.</p></div><span className="lesson-count">156 unités · B01/B02 draft · B03–B16 en revue interne</span></div>
  <div className="lesson-library-intro"><div className="lesson-library-icon"><BookOpen size={20}/></div><div><strong>Fondations, mathématiques, probabilités, statistique descriptive et inférence</strong><p>B01 (F01–F08) construit les automatismes quantitatifs ; B02 (D01–D08) introduit la logique, les preuves, le dénombrement, les graphes et la complexité ; B03 (V01–V10) développe les espaces, matrices, projections et décompositions ; B04 (A01–A10) construit l’analyse réelle et le calcul différentiel et intégral. B05 (M01–M10) étend le calcul aux fonctions multivariées, aux intégrales multiples, aux champs vectoriels et aux équations différentielles ; B06 (O01–O10) développe la modélisation, la convexité, la programmation linéaire et entière, les réseaux, la dualité et l’optimisation non linéaire ; B07 (N01–N10) développe l’arithmétique flottante, le conditionnement, les méthodes numériques pour systèmes, racines, interpolation, quadrature et EDO, ainsi que la reproductibilité ; B08 (P01–P10) construit les fondements probabilistes : axiomes, Bayes, indépendance, variables aléatoires, lois, espérance conditionnelle et théorèmes limites ; B09 (S01–S10) développe les processus temporels : chaînes de Markov, Poisson, renouvellement, martingales, files M/M/1 et mouvement brownien ; B10 (T01–T10) couvre qualité, échantillonnage, statistique descriptive et exploration ; B11 (I01–I10) développe l’inférence : lois d’échantillonnage, estimation, vraisemblance, propriétés asymptotiques, intervalles, tests, puissance, bootstrap, permutation et Bayes ; B12 (R01–R10) couvre la régression, les GLM, les diagnostics et modèles mixtes ; B13 (MV01–MV10) couvre covariance multivariée, loi normale, T², MANOVA, ACP, analyse factorielle, corrélation canonique, discrimination, clustering et grande dimension ; B14 (CI01–CI10) traite résultats potentiels, randomisation, plans factoriels, DAG, standardisation, scores de propension, méthodes doublement robustes, variables instrumentales, discontinuité, différences-en-différences et sensibilité causale. Chaque unité comporte objectifs, leçon, exemples, exercices corrigés et références.</p></div></div>
  <div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher une unité ou une compétence…"/></div>
  <div className="lesson-course-grid">{filtered.map((course)=><button className="lesson-course-card" key={course.code} onClick={()=>setSelected(course)}><div className="lesson-course-top"><span>{course.code}</span><small>{course.code.startsWith('I') || course.code.startsWith('T') || course.code.startsWith('P') || course.code.startsWith('S') || course.code.startsWith('N') || course.code.startsWith('O') || course.code.startsWith('TS') || course.code.startsWith('ML') || course.code.startsWith('CI') || course.code.startsWith('MV') || course.code.startsWith('M') || course.code.startsWith('A') || course.code.startsWith('V') ? 'REVUE INTERNE' : 'DRAFT'} · {course.version}</small></div><h3>{course.title}</h3><p>{course.description}</p><div className="lesson-course-foot"><span><Clock3 size={13}/>{course.duration}</span><strong>Ouvrir l’unité</strong></div></button>)}</div>
  {filtered.length===0&&<div className="lesson-empty">Aucune unité ne correspond à cette recherche.</div>}
  <div className="lesson-provenance"><span>156 unités originales · Statuts documentés</span><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B01-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B01 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B01-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B01 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B02-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B02 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B02-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B02 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B03-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B03 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B03-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B03 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B04-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B04 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B04-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B04 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B05-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B05 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B05-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B05 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B06-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B06 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B06-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B06 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B11-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B11 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B11-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B11 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B15-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B15 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B15-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B15 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B16-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B16 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B16-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B16 <ArrowUpRight size={13}/></a></div>
 </div>
}
