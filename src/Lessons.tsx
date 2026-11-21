import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { ArrowLeft, ArrowUpRight, BookOpen, Clock3, LockKeyhole, Search } from 'lucide-react'
import f01 from './content/bloc-01/F01.md?raw'
import f02 from './content/bloc-01/F02.md?raw'

type Course = { code: string; title: string; description: string; duration: string; content?: string; status: 'draft' | 'planned' }
const courses: Course[] = [
 {code:'F01',title:'Nombres, ensembles et ordre',description:'Comprendre les ensembles numériques, l’ordre, les intervalles et la distance.',duration:'4–5 h',content:f01,status:'draft'},
 {code:'F02',title:'Calcul, fractions, rapports et proportions',description:'Maîtriser les opérations exactes, les rapports et les proportions.',duration:'5–6 h',content:f02,status:'draft'},
 {code:'F03',title:'Pourcentages, indices et taux d’évolution',description:'Composer des variations et comparer des grandeurs.',duration:'À définir',status:'planned'},
 {code:'F04',title:'Puissances, racines et logarithmes',description:'Étudier les transformations multiplicatives et leurs domaines.',duration:'À définir',status:'planned'},
 {code:'F05',title:'Expressions algébriques et identités',description:'Transformer, développer et factoriser avec rigueur.',duration:'À définir',status:'planned'},
 {code:'F06',title:'Équations, inéquations et systèmes',description:'Résoudre et vérifier des contraintes algébriques.',duration:'À définir',status:'planned'},
 {code:'F07',title:'Fonctions et modélisation élémentaire',description:'Décrire les dépendances, domaines, images et variations.',duration:'À définir',status:'planned'},
 {code:'F08',title:'Repères, unités et représentation quantitative',description:'Lire des graphiques, convertir des unités et contrôler les ordres de grandeur.',duration:'À définir',status:'planned'},
]
export function LessonLibrary({query,setQuery}:{query:string;setQuery:(value:string)=>void}) {
 const [selected,setSelected]=useState<Course|null>(null)
 const filtered=useMemo(()=>courses.filter(c=>(c.code+c.title+c.description).toLowerCase().includes(query.toLowerCase())),[query])
 if(selected) return <div className="content-wrap lesson-reader">
  <button className="lesson-back" onClick={()=>setSelected(null)}><ArrowLeft size={15}/> Retour à la bibliothèque</button>
  <div className="lesson-reader-head"><div><div className="eyebrow">BLOC B01 · {selected.code} · VERSION 1.1.0</div><h1>{selected.title}</h1><p>{selected.description}</p></div><div className="lesson-time"><Clock3 size={15}/>{selected.duration}</div></div>
  <div className="exam-resource-warning"><strong>Contenu original Programme B</strong><span>Cette unité est une première version éditoriale. Elle reste en statut draft jusqu'à la revue mathématique, pédagogique et au test de rendu.</span></div>
  <article className="markdown-card"><ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{selected.content??''}</ReactMarkdown></article>
  <div className="lesson-provenance"><span>Programme B · Version 1.1.0 · Rédaction indépendante</span><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/src/content/bloc-01/F01.md" target="_blank" rel="noreferrer">Voir le fichier source <ArrowUpRight size={13}/></a></div>
 </div>
 return <div className="content-wrap">
  <div className="page-heading"><div><div className="eyebrow">RESSOURCES PÉDAGOGIQUES · BLOC B01</div><h1>Bibliothèque</h1><p>Le parcours des fondations mathématiques se construit progressivement.</p></div><span className="lesson-count">2 unités en draft · 6 planifiées</span></div>
  <div className="lesson-library-intro"><div className="lesson-library-icon"><BookOpen size={20}/></div><div><strong>Fondations mathématiques et raisonnement quantitatif</strong><p>Les unités publiées sont rédigées indépendamment. Les unités planifiées ne sont pas encore présentées comme des cours disponibles.</p></div></div>
  <div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher une unité ou une compétence…"/></div>
  <div className="lesson-course-grid">{filtered.map((course)=><button className={`lesson-course-card ${course.status==='planned'?'course-planned':''}`} key={course.code} disabled={course.status==='planned'} onClick={()=>setSelected(course)}><div className="lesson-course-top"><span>{course.code}</span><small>{course.status==='draft'?'DRAFT':'PLANIFIÉ'}</small></div><h3>{course.title}</h3><p>{course.description}</p><div className="lesson-course-foot"><span><Clock3 size={13}/>{course.duration}</span><strong>{course.status==='draft'?'Ouvrir l’unité':<>À construire <LockKeyhole size={13}/></>}</strong></div></button>)}</div>
  {filtered.length===0&&<div className="lesson-empty">Aucune unité ne correspond à cette recherche.</div>}
  <div className="lesson-provenance"><span>Contenus originaux · Aucun cours importé de l'ancien laboratoire</span><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/PROGRAMME-B-CURRICULUM.md" target="_blank" rel="noreferrer">Architecture du cursus <ArrowUpRight size={13}/></a></div>
 </div>
}
