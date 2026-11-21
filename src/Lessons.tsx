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
]
export function LessonLibrary({query,setQuery}:{query:string;setQuery:(value:string)=>void}) {
 const [selected,setSelected]=useState<Course|null>(null)
 const filtered=useMemo(()=>courses.filter(c=>(c.code+c.title+c.description).toLowerCase().includes(query.toLowerCase())),[query])
 if(selected) return <div className="content-wrap lesson-reader">
  <button className="lesson-back" onClick={()=>setSelected(null)}><ArrowLeft size={15}/> Retour à la bibliothèque</button>
  <div className="lesson-reader-head"><div><div className="eyebrow">{selected.code.startsWith('P') ? 'BLOC B08' : selected.code.startsWith('N') ? 'BLOC B07' : selected.code.startsWith('O') ? 'BLOC B06' : selected.code.startsWith('M') ? 'BLOC B05' : selected.code.startsWith('A') ? 'BLOC B04' : selected.code.startsWith('V') ? 'BLOC B03' : selected.code.startsWith('D') ? 'BLOC B02' : 'BLOC B01'} · {selected.code} · VERSION {selected.version}</div><h1>{selected.title}</h1><p>{selected.description}</p></div><div className="lesson-time"><Clock3 size={15}/>{selected.duration}</div></div>
  <div className="exam-resource-warning"><strong>Contenu original Programme B · Version de travail</strong><span>Les unités sont des contenus originaux en version de travail. Les revues internes de B03, B04, B05 et B06 sont documentées ; les revues indépendantes et tests apprenants de l'ensemble du cursus restent à conduire.</span></div>
  <article className="markdown-card"><ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{selected.content}</ReactMarkdown></article>
  <div className="lesson-provenance"><span>Programme B · Version {selected.version} · Rédaction indépendante</span><a href={`https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/src/content/${selected.code.startsWith('P') ? 'bloc-08' : selected.code.startsWith('N') ? 'bloc-07' : selected.code.startsWith('O') ? 'bloc-06' : selected.code.startsWith('M') ? 'bloc-05' : selected.code.startsWith('A') ? 'bloc-04' : selected.code.startsWith('V') ? 'bloc-03' : selected.code.startsWith('D') ? 'bloc-02' : 'bloc-01'}/${selected.code}.md`} target="_blank" rel="noreferrer">Voir le fichier source <ArrowUpRight size={13}/></a></div>
 </div>
 return <div className="content-wrap">
  <div className="page-heading"><div><div className="eyebrow">RESSOURCES PÉDAGOGIQUES · BLOCS B01–B08</div><h1>Bibliothèque</h1><p>Soixante-seize unités sont accessibles : huit en B01, huit en B02, et dix unités dans chacun des blocs B03 à B08.</p></div><span className="lesson-count">76 unités · B01/B02 draft · B03–B08 revue interne</span></div>
  <div className="lesson-library-intro"><div className="lesson-library-icon"><BookOpen size={20}/></div><div><strong>Fondations, logique, algèbre linéaire, analyse réelle, calcul multivarié, EDO et optimisation</strong><p>B01 (F01–F08) construit les automatismes quantitatifs ; B02 (D01–D08) introduit la logique, les preuves, le dénombrement, les graphes et la complexité ; B03 (V01–V10) développe les espaces, matrices, projections et décompositions ; B04 (A01–A10) construit l'analyse réelle et le calcul différentiel et intégral. B05 (M01–M10) étend le calcul aux fonctions multivariées, aux intégrales multiples, aux champs vectoriels et aux équations différentielles ; B06 (O01–O10) développe la modélisation, la convexité, la programmation linéaire et entière, les réseaux, la dualité et l'optimisation non linéaire ; B07 (N01–N10) développe l'arithmétique flottante, le conditionnement, les méthodes numériques pour systèmes, racines, interpolation, quadrature et EDO, ainsi que la reproductibilité ; B08 (P01–P10) construit les fondements probabilistes : axiomes, Bayes, indépendance, variables aléatoires, lois, espérance conditionnelle et théorèmes limites. Chaque unité comporte objectifs, leçon, exemples, exercices corrigés et références.</p></div></div>
  <div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher une unité ou une compétence…"/></div>
  <div className="lesson-course-grid">{filtered.map((course)=><button className="lesson-course-card" key={course.code} onClick={()=>setSelected(course)}><div className="lesson-course-top"><span>{course.code}</span><small>{course.code.startsWith('P') || course.code.startsWith('N') || course.code.startsWith('O') || course.code.startsWith('M') || course.code.startsWith('A') || course.code.startsWith('V') ? 'REVUE INTERNE' : 'DRAFT'} · {course.version}</small></div><h3>{course.title}</h3><p>{course.description}</p><div className="lesson-course-foot"><span><Clock3 size={13}/>{course.duration}</span><strong>Ouvrir l’unité</strong></div></button>)}</div>
  {filtered.length===0&&<div className="lesson-empty">Aucune unité ne correspond à cette recherche.</div>}
  <div className="lesson-provenance"><span>76 unités originales · Statuts documentés</span><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B01-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B01 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B01-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B01 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B02-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B02 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B02-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B02 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B03-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B03 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B03-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B03 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B04-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B04 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B04-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B04 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B05-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B05 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B05-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B05 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B06-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B06 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B06-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B06 <ArrowUpRight size={13}/></a></div>
 </div>
}
