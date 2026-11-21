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
 {code:'D08',title:'Algorithmes, complexité et notation asymptotique',version:'1.0.0',description:'Analyse de coûts, ordres de croissance et notations O, Ω, Θ.',duration:'4–5 h',content:d08}

]
export function LessonLibrary({query,setQuery}:{query:string;setQuery:(value:string)=>void}) {
 const [selected,setSelected]=useState<Course|null>(null)
 const filtered=useMemo(()=>courses.filter(c=>(c.code+c.title+c.description).toLowerCase().includes(query.toLowerCase())),[query])
 if(selected) return <div className="content-wrap lesson-reader">
  <button className="lesson-back" onClick={()=>setSelected(null)}><ArrowLeft size={15}/> Retour à la bibliothèque</button>
  <div className="lesson-reader-head"><div><div className="eyebrow">{selected.code.startsWith('D') ? 'BLOC B02' : 'BLOC B01'} · {selected.code} · VERSION {selected.version}</div><h1>{selected.title}</h1><p>{selected.description}</p></div><div className="lesson-time"><Clock3 size={15}/>{selected.duration}</div></div>
  <div className="exam-resource-warning"><strong>Contenu original Programme B · Version de travail</strong><span>Les unités disponibles sont des contenus originaux en statut draft : les revues scientifiques indépendantes, les tests apprenants et les contrôles complets de publication restent à effectuer.</span></div>
  <article className="markdown-card"><ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{selected.content}</ReactMarkdown></article>
  <div className="lesson-provenance"><span>Programme B · Version {selected.version} · Rédaction indépendante</span><a href={`https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/src/content/${selected.code.startsWith('D') ? 'bloc-02' : 'bloc-01'}/${selected.code}.md`} target="_blank" rel="noreferrer">Voir le fichier source <ArrowUpRight size={13}/></a></div>
 </div>
 return <div className="content-wrap">
  <div className="page-heading"><div><div className="eyebrow">RESSOURCES PÉDAGOGIQUES · BLOCS B01–B02</div><h1>Bibliothèque</h1><p>Seize unités de fondation sont accessibles en version de travail : huit en B01 et huit en B02.</p></div><span className="lesson-count">16 unités en draft · 0 publiée</span></div>
  <div className="lesson-library-intro"><div className="lesson-library-icon"><BookOpen size={20}/></div><div><strong>Fondations mathématiques, logique et raisonnement discret</strong><p>B01 (F01–F08) construit les automatismes quantitatifs ; B02 (D01–D08) introduit la logique, les preuves, le dénombrement, les graphes et la complexité. Chaque unité comporte objectifs, leçon, exemples, exercices corrigés et références.</p></div></div>
  <div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher une unité ou une compétence…"/></div>
  <div className="lesson-course-grid">{filtered.map((course)=><button className="lesson-course-card" key={course.code} onClick={()=>setSelected(course)}><div className="lesson-course-top"><span>{course.code}</span><small>DRAFT · {course.version}</small></div><h3>{course.title}</h3><p>{course.description}</p><div className="lesson-course-foot"><span><Clock3 size={13}/>{course.duration}</span><strong>Ouvrir l’unité</strong></div></button>)}</div>
  {filtered.length===0&&<div className="lesson-empty">Aucune unité ne correspond à cette recherche.</div>}
  <div className="lesson-provenance"><span>16 unités originales · Statut de travail transparent</span><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B01-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B01 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B01-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B01 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B02-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B02 <ArrowUpRight size={13}/></a><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B02-EVALUATION.md" target="_blank" rel="noreferrer">Évaluation transversale B02 <ArrowUpRight size={13}/></a></div>
 </div>
}
