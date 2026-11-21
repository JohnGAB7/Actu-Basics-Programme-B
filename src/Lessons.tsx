import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle2, Clock3, FileText, Search } from 'lucide-react'
import f01 from './content/bloc-01/F01.md?raw'
import f02 from './content/bloc-01/F02.md?raw'
import f03 from './content/bloc-01/F03.md?raw'
import f04 from './content/bloc-01/F04.md?raw'
import f05 from './content/bloc-01/F05.md?raw'
import f06 from './content/bloc-01/F06.md?raw'
import f07 from './content/bloc-01/F07.md?raw'
import f08 from './content/bloc-01/F08.md?raw'
import exercises from './content/bloc-01/EXERCICES.md?raw'
import corrections from './content/bloc-01/CORRIGES.md?raw'

type Course = { code: string; title: string; description: string; content: string; source: string; sha: string; duration: string }
const sourceRoot = 'https://github.com/JohnGAB7/Actu-Basics-Lab/tree/programme-b/bloc-1-fondations/programme-b/bloc-01'
const courses: Course[] = [
 {code:'F01',title:'Nombres, ensembles et systèmes de numération',description:'Classer les nombres, manier les intervalles et comprendre les représentations exactes ou approchées.',content:f01,source:sourceRoot+'/F01-nombres-ensembles-numeration/COURS.md',sha:'1045945d97ad11ed7381f3b9381526ad324104f2',duration:'3–4 h'},
 {code:'F02',title:'Fractions, rapports et proportions',description:'Raisonner sur les quotients, les taux, les proportions et les hypothèses de proportionnalité.',content:f02,source:sourceRoot+'/F02-fractions-rapports-proportions/COURS.md',sha:'7693b0c6677e29426309be55fa938dd6ec45cd03',duration:'4–5 h'},
 {code:'F03',title:'Pourcentages, variations et indices',description:'Mesurer les évolutions, composer les variations et construire des indices comparables.',content:f03,source:sourceRoot+'/F03-pourcentages-variations-indices/COURS.md',sha:'28486c57a9e07677be9d38d76d03a0bbca29a9ab',duration:'3–4 h'},
 {code:'F04',title:'Puissances, racines et logarithmes',description:'Maîtriser les transformations multiplicatives et leurs domaines de validité.',content:f04,source:sourceRoot+'/F04-puissances-racines-logarithmes/COURS.md',sha:'49c264ad45242eb73b19ad86397eb688e3005308',duration:'4–5 h'},
 {code:'F05',title:'Algèbre et manipulation des expressions',description:'Traduire, développer, factoriser et simplifier en conservant les restrictions.',content:f05,source:sourceRoot+'/F05-algebre-expressions/COURS.md',sha:'0eef881d0813a679eb4d0ebf66daffd072ccaa83',duration:'4–5 h'},
 {code:'F06',title:'Équations, inéquations et systèmes',description:'Résoudre des équations et contraintes puis contrôler l’admissibilité des solutions.',content:f06,source:sourceRoot+'/F06-equations-inequations-systemes/COURS.md',sha:'296d20228a662bfccce48115e09de586464ecd35',duration:'5–6 h'},
 {code:'F07',title:'Fonctions et relations mathématiques',description:'Étudier domaines, images, antécédents, variations et compositions.',content:f07,source:sourceRoot+'/F07-fonctions-relations/COURS.md',sha:'979a37a22ba41f792fffa4f47c1e6a591546efd4',duration:'4–5 h'},
 {code:'F08',title:'Repères, graphiques, unités et notation scientifique',description:'Lire et construire des représentations quantitatives fidèles.',content:f08,source:sourceRoot+'/F08-reperes-graphiques-unites/COURS.md',sha:'4e18b590c36dc6f2a48d8af9380ae8afe371eb06',duration:'3–4 h'}
]
type Resource = 'course' | 'exercises' | 'corrections'
export function LessonLibrary({query,setQuery}:{query:string;setQuery:(value:string)=>void}) {
 const [selected,setSelected]=useState<Course|null>(null)
 const [resource,setResource]=useState<Resource>('course')
 const filtered=useMemo(()=>courses.filter(c=>(c.code+c.title+c.description).toLowerCase().includes(query.toLowerCase())),[query])
 const content=resource==='exercises'?exercises:resource==='corrections'?corrections:selected?.content??''
 const title=resource==='exercises'?'Banque de 40 exercices':resource==='corrections'?'Corrigés détaillés':selected?.title??''
 const openResource=(kind:Resource)=>{setSelected(courses[0]);setResource(kind)}
 if(selected) return <div className="content-wrap lesson-reader">
  <button className="lesson-back" onClick={()=>{setSelected(null);setResource('course')}}><ArrowLeft size={15}/> Retour à la bibliothèque</button>
  <div className="lesson-reader-head"><div><div className="eyebrow">BLOC 1 · {resource==='course'?selected.code:'ENTRAÎNEMENT'}</div><h1>{title}</h1><p>{resource==='course'?selected.description:'Entraînement transversal sur les huit compétences fondamentales.'}</p></div><div className="lesson-time"><Clock3 size={15}/>{selected.duration}</div></div>
  <div className="lesson-tabs" role="tablist" aria-label="Ressources pédagogiques">
   <button className={resource==='course'?'active':''} onClick={()=>setResource('course')}><BookOpen size={15}/> Leçon</button>
   <button className={resource==='exercises'?'active':''} onClick={()=>setResource('exercises')}><FileText size={15}/> Exercices (40)</button>
   <button className={resource==='corrections'?'active':''} onClick={()=>setResource('corrections')}><CheckCircle2 size={15}/> Corrigés</button>
  </div>
  <article className="markdown-card"><ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{content}</ReactMarkdown></article>
  <div className="lesson-provenance"><span>Source pédagogique : Actu-Basics-Lab · blob {resource==='course'?selected.sha.slice(0,10):'source'}</span><a href={resource==='course'?selected.source:sourceRoot} target="_blank" rel="noreferrer">Consulter la source originale <ArrowUpRight size={13}/></a></div>
 </div>
 return <div className="content-wrap">
  <div className="page-heading"><div><div className="eyebrow">RESSOURCES PÉDAGOGIQUES · BLOC 1</div><h1>Bibliothèque</h1><p>Les huit cours de fondation sont maintenant consultables dans cet espace.</p></div><span className="lesson-count">8 cours · 40 exercices</span></div>
  <div className="lesson-library-intro"><div className="lesson-library-icon"><BookOpen size={20}/></div><div><strong>Fondations mathématiques et raisonnement quantitatif</strong><p>Chaque cours conserve son contenu source, ses références et ses exemples. Les exercices transversaux et leurs corrigés sont accessibles depuis chaque leçon.</p></div></div>
  <div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher un cours ou une compétence…"/></div>
  <div className="lesson-course-grid">{filtered.map((course,i)=><button className="lesson-course-card" key={course.code} onClick={()=>{setSelected(course);setResource('course')}}><div className="lesson-course-top"><span>{course.code}</span><small>{String(i+1).padStart(2,'0')} / 08</small></div><h3>{course.title}</h3><p>{course.description}</p><div className="lesson-course-foot"><span><Clock3 size={13}/>{course.duration}</span><strong>Ouvrir le cours <ArrowUpRight size={14}/></strong></div></button>)}</div>
  {filtered.length===0&&<div className="lesson-empty">Aucun cours ne correspond à cette recherche.</div>}
  <div className="lesson-resource-row"><div><FileText size={18}/><span><strong>Banque d’exercices transversaux</strong><small>40 énoncés classés par compétence, F01 à F08</small></span></div><button className="secondary-button" onClick={()=>openResource('exercises')}>Consulter <ArrowUpRight size={14}/></button></div>
  <div className="lesson-resource-row"><div><CheckCircle2 size={18}/><span><strong>Corrigés de la banque d’exercices</strong><small>Résultats, méthodes et points de vigilance</small></span></div><button className="secondary-button" onClick={()=>openResource('corrections')}>Consulter <ArrowUpRight size={14}/></button></div>
  <div className="lesson-provenance"><span>Version source : branche programme-b/bloc-1-fondations</span><a href={sourceRoot} target="_blank" rel="noreferrer">Ouvrir le dépôt pédagogique <ArrowUpRight size={13}/></a></div>
 </div>
}
