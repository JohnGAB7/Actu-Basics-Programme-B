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
]
export function LessonLibrary({query,setQuery}:{query:string;setQuery:(value:string)=>void}) {
 const [selected,setSelected]=useState<Course|null>(null)
 const filtered=useMemo(()=>courses.filter(c=>(c.code+c.title+c.description).toLowerCase().includes(query.toLowerCase())),[query])
 if(selected) return <div className="content-wrap lesson-reader">
  <button className="lesson-back" onClick={()=>setSelected(null)}><ArrowLeft size={15}/> Retour à la bibliothèque</button>
  <div className="lesson-reader-head"><div><div className="eyebrow">BLOC B01 · {selected.code} · VERSION {selected.version}</div><h1>{selected.title}</h1><p>{selected.description}</p></div><div className="lesson-time"><Clock3 size={15}/>{selected.duration}</div></div>
  <div className="exam-resource-warning"><strong>Contenu original Programme B · Version de travail</strong><span>Les huit unités sont maintenant rédigées et accessibles. Elles restent en statut draft : les revues scientifiques indépendantes, les tests apprenants et les contrôles complets de publication sont encore à effectuer.</span></div>
  <article className="markdown-card"><ReactMarkdown remarkPlugins={[remarkGfm,remarkMath]} rehypePlugins={[rehypeKatex]}>{selected.content}</ReactMarkdown></article>
  <div className="lesson-provenance"><span>Programme B · Version {selected.version} · Rédaction indépendante</span><a href={`https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/src/content/bloc-01/${selected.code}.md`} target="_blank" rel="noreferrer">Voir le fichier source <ArrowUpRight size={13}/></a></div>
 </div>
 return <div className="content-wrap">
  <div className="page-heading"><div><div className="eyebrow">RESSOURCES PÉDAGOGIQUES · BLOC B01</div><h1>Bibliothèque</h1><p>Les huit unités du socle mathématique sont rédigées dans une première version complète.</p></div><span className="lesson-count">8 unités en draft · 0 publiée</span></div>
  <div className="lesson-library-intro"><div className="lesson-library-icon"><BookOpen size={20}/></div><div><strong>Fondations mathématiques et raisonnement quantitatif</strong><p>Parcours complet F01–F08 : nombres, calcul, variations, algèbre, équations, fonctions et représentation quantitative. Chaque unité comporte objectifs, leçon, exemples, applications, exercices corrigés et références.</p></div></div>
  <div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher une unité ou une compétence…"/></div>
  <div className="lesson-course-grid">{filtered.map((course)=><button className="lesson-course-card" key={course.code} onClick={()=>setSelected(course)}><div className="lesson-course-top"><span>{course.code}</span><small>DRAFT · {course.version}</small></div><h3>{course.title}</h3><p>{course.description}</p><div className="lesson-course-foot"><span><Clock3 size={13}/>{course.duration}</span><strong>Ouvrir l’unité</strong></div></button>)}</div>
  {filtered.length===0&&<div className="lesson-empty">Aucune unité ne correspond à cette recherche.</div>}
  <div className="lesson-provenance"><span>8 unités originales · Statut de travail transparent</span><a href="https://github.com/JohnGAB7/Actu-Basics-Programme-B/blob/master/docs/B01-UNIT-MAP.md" target="_blank" rel="noreferrer">Carte pédagogique B01 <ArrowUpRight size={13}/></a></div>
 </div>
}
