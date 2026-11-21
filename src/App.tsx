import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import {
  Activity, ArrowLeft, ArrowRight, Award,
  BarChart3, BookOpen, BrainCircuit, Check, CheckCircle2, ChevronDown,
  ChevronLeft, ChevronRight, CircleHelp, Clock3, Compass,
  FileCheck2, GraduationCap, Home, LibraryBig, LockKeyhole, Menu,
  MoreHorizontal, ShieldCheck, Sparkles, Target, Timer,
  X
} from 'lucide-react'
import { blocks, questions } from './data'
import { LessonLibrary } from './Lessons'

type View = 'overview' | 'paths' | 'exams' | 'library' | 'exam' | 'results'
type Answers = Record<number, number>

const STORAGE_KEY = 'programme-b-demo-attempt-v1'

function App() {
  const [view, setView] = useState<View>('overview')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [answers, setAnswers] = useState<Answers>({})
  const [current, setCurrent] = useState(0)
  const [seconds, setSeconds] = useState(30 * 60)
  const [started, setStarted] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [query, setQuery] = useState('')
  const [showIntro, setShowIntro] = useState(false)
  const [savedAttempt, setSavedAttempt] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const data = JSON.parse(saved) as { answers?: Answers; current?: number; seconds?: number }
        if (data.answers) setAnswers(data.answers)
        if (typeof data.current === 'number') setCurrent(data.current)
        if (typeof data.seconds === 'number') setSeconds(data.seconds)
        setSavedAttempt(true)
      } catch { localStorage.removeItem(STORAGE_KEY) }
    }
  }, [])

  useEffect(() => {
    if (!started || submitted) return
    const id = window.setInterval(() => setSeconds(s => {
      if (s <= 1) { window.clearInterval(id); setSubmitted(true); setStarted(false); setSavedAttempt(false); localStorage.removeItem(STORAGE_KEY); setView('results'); return 0 }
      return s - 1
    }), 1000)
    return () => window.clearInterval(id)
  }, [started, submitted])

  useEffect(() => {
    if (started && !submitted) localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, current, seconds }))
  }, [answers, current, seconds, started, submitted])

  const score = useMemo(() => questions.reduce((n, q) => n + (answers[q.id] === q.answer ? 1 : 0), 0), [answers])
  const answered = Object.keys(answers).length
  const progress = Math.round(answered / questions.length * 100)
  const time = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`

  function resumeExam() { setStarted(true); setSavedAttempt(false); setView('exam') }
  function beginExam() {
    setSavedAttempt(false)
    setAnswers({})
    setCurrent(0)
    setSeconds(30 * 60)
    setSubmitted(false)
    setStarted(true)
    setShowIntro(false)
    setView('exam')
    localStorage.removeItem(STORAGE_KEY)
  }
  function chooseAnswer(index: number) {
    const question = questions[current]
    setAnswers(old => ({ ...old, [question.id]: index }))
  }
  function finishExam() {
    setSavedAttempt(false)
    setSubmitted(true)
    setStarted(false)
    localStorage.removeItem(STORAGE_KEY)
    setView('results')
  }
  function nav(next: View) {
    setView(next)
    setMobileMenu(false)
  }
  function resetExam() {
    setAnswers({})
    setCurrent(0)
    setSeconds(1800)
    setStarted(false)
    setSubmitted(false)
    localStorage.removeItem(STORAGE_KEY)
    setView('exams')
  }

  const navItems = [
    { id: 'overview' as View, label: 'Vue d’ensemble', icon: Home },
    { id: 'paths' as View, label: 'Mes parcours', icon: Compass },
    { id: 'exams' as View, label: 'Centre d’examens', icon: FileCheck2 },
    { id: 'library' as View, label: 'Bibliothèque', icon: LibraryBig },
  ]

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenu ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><span>B</span><i /></div>
          <div><div className="brand-name">PROGRAMME <b>B</b></div><div className="brand-sub">LEARNING STUDIO</div></div>
          <button className="icon-button mobile-close" onClick={() => setMobileMenu(false)} aria-label="Fermer le menu"><X size={18}/></button>
        </div>
        <div className="workspace-label">ESPACE D’APPRENTISSAGE</div>
        <nav className="side-nav" aria-label="Navigation principale">
          {navItems.map(item => {
            const Icon = item.icon
            return <button key={item.id} className={`nav-item ${view === item.id || (view === 'exam' || view === 'results') && item.id === 'exams' ? 'active' : ''}`} onClick={() => nav(item.id)}><Icon size={18}/><span>{item.label}</span>{item.id === 'exams' && <span className="nav-dot"/>}</button>
          })}
        </nav>
        <div className="sidebar-divider"/>
        <div className="workspace-label">VOTRE ESPACE</div>
        <div className="profile-card">
          <div className="avatar">JG</div>
          <div className="profile-meta"><strong>Mon espace</strong><span>Mode démonstration</span></div>
          <ChevronDown size={15} className="muted-icon"/>
        </div>
        <div className="sidebar-bottom">
          <div className="support-card"><div className="support-icon"><BrainCircuit size={17}/></div><strong>Apprendre avec méthode</strong><p>Comprendre. Pratiquer. Maîtriser.</p><button onClick={() => nav('paths')}>Explorer les parcours <ArrowRight size={13}/></button></div>
          <div className="sidebar-foot"><span><span className="status-pip"/> Plateforme en construction</span><span>v0.1.0 · Preview</span></div>
        </div>
      </aside>
      {mobileMenu && <button className="mobile-scrim" aria-label="Fermer le menu" onClick={() => setMobileMenu(false)}/>}

      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" onClick={() => setMobileMenu(true)} aria-label="Ouvrir le menu"><Menu size={20}/></button>
          <div className="breadcrumb"><span>Programme B</span><ChevronRight size={14}/><strong>{view === 'overview' ? 'Vue d’ensemble' : view === 'paths' ? 'Mes parcours' : view === 'exams' || view === 'exam' || view === 'results' ? 'Centre d’examens' : 'Bibliothèque'}</strong></div>
          <div className="top-actions"><div className="preview-pill"><span/> Aperçu privé</div><button className="icon-button" aria-label="Aide"><CircleHelp size={18}/></button><div className="top-avatar">JG</div></div>
        </header>

        {view === 'overview' && <Overview onNavigate={nav} onStart={() => setShowIntro(true)} savedAttempt={savedAttempt} onResume={resumeExam} />}
        {view === 'paths' && <Paths onStart={() => setShowIntro(true)} />}
        {view === 'exams' && <Exams onStart={() => setShowIntro(true)} />}
        {view === 'library' && <LessonLibrary query={query} setQuery={setQuery} />}
        {view === 'exam' && <Exam current={current} setCurrent={setCurrent} answers={answers} chooseAnswer={chooseAnswer} seconds={seconds} time={time} progress={progress} onFinish={finishExam} />}
        {view === 'results' && <Results score={score} answered={answered} answers={answers} onRetry={resetExam} onPaths={() => nav('paths')} />}
      </main>

      {showIntro && <div className="modal-backdrop" role="presentation"><div className="modal"><button className="modal-close" onClick={() => setShowIntro(false)} aria-label="Fermer"><X size={18}/></button><div className="modal-symbol"><ShieldCheck size={23}/></div><div className="eyebrow">ÉVALUATION D’ENTRAÎNEMENT</div><h2>Diagnostic des fondations</h2><p>Une première démonstration du futur centre d’examens. Huit questions couvrent les notions essentielles du Bloc 1.</p><div className="exam-facts"><span><Clock3 size={15}/> 30 minutes</span><span><FileCheck2 size={15}/> 8 questions</span><span><Target size={15}/> 8 compétences</span></div><div className="notice"><LockKeyhole size={16}/><span>Cette version est une démonstration locale. Les réponses sont conservées dans ce navigateur uniquement. Ce n’est pas encore un examen officiel ni un résultat certifiant.</span></div><button className="primary-button full" onClick={beginExam}>Commencer l’évaluation <ArrowRight size={16}/></button></div></div>}
    </div>
  )
}

function PageHeading({eyebrow, title, description, action}: {eyebrow: string; title: string; description: string; action?: ReactNode}) {
  return <div className="page-heading"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>{action}</div>
}

function Overview({onNavigate, onStart, savedAttempt, onResume}: {onNavigate:(v:View)=>void; onStart:()=>void; savedAttempt:boolean; onResume:()=>void}) {
  return <div className="content-wrap">
    <div className="welcome-line"><div><div className="eyebrow">SAMEDI 21 NOVEMBRE 2026 · VOTRE ESPACE</div><h1>Le savoir se construit <em>avec méthode.</em></h1><p>Un environnement exigeant pour progresser dans les sciences quantitatives.</p></div><div className="welcome-orb"><div className="orb-ring ring-one"/><div className="orb-ring ring-two"/><div className="orb-core"><Sparkles size={25}/></div></div></div>
    <div className="hero-panel"><div className="hero-copy"><div className="hero-kicker"><span className="kicker-line"/> LEARNING IS A JOURNEY</div><h2>De la compréhension<br/>à la <span>maîtrise.</span></h2><p>Des fondations mathématiques aux modèles avancés, construisez une compréhension solide, durable et applicable.</p><div className="hero-actions"><button className="primary-button" onClick={() => onNavigate('paths')}>Explorer les parcours <ArrowRight size={16}/></button><button className="text-button light" onClick={() => onNavigate('library')}>Voir la bibliothèque</button></div></div><div className="hero-visual"><div className="visual-grid"/><div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><div className="visual-equation eq-a">∑ xᵢ · p(xᵢ)</div><div className="visual-equation eq-b">A · x = b</div><div className="visual-equation eq-c">∫ f(x) dx</div><div className="visual-node node-a"/><div className="visual-node node-b"/><div className="visual-node node-c"/><div className="visual-caption">MATHEMATICS <span>×</span> DATA <span>×</span> REASONING</div></div></div>
    <div className="stats-grid"><Stat icon={<BookOpen size={18}/>} label="Blocs structurés" value="20" note="Architecture académique du programme"/><Stat icon={<GraduationCap size={18}/>} label="Unités au catalogue" value="196" note="B01–B02 en draft · B03–B20 avec contenu"/><Stat icon={<Target size={18}/>} label="Parcours de maîtrise" value="06" note="Itinéraires recommandés"/><Stat icon={<Activity size={18}/>} label="Blocs avec contenu" value="20/20" note="Statuts et niveaux de revue détaillés par bloc"/></div>
    <div className="section-head"><div><div className="eyebrow">ARCHITECTURE PÉDAGOGIQUE</div><h2>Les parcours du programme</h2><p>Une progression structurée, du socle aux compétences avancées.</p></div><button className="text-button" onClick={() => onNavigate('paths')}>Tout voir <ArrowRight size={15}/></button></div>
    <div className="block-grid">{blocks.slice(0,3).map(b=><BlockCard key={b.code} block={b} onClick={() => onNavigate('paths')}/>)}</div>
    <div className="section-head exam-section-head"><div><div className="eyebrow">MES ÉVALUATIONS</div><h2>Vérifier ses acquis</h2><p>Les évaluations permettent d’identifier les acquis et les points à renforcer.</p></div></div>
    {savedAttempt && <div className="resume-banner"><div><strong>Une évaluation est en cours</strong><span>Vos réponses et le temps restant sont conservés sur cet appareil.</span></div><button className="primary-button" onClick={onResume}>Reprendre <ArrowRight size={15}/></button></div>}
    <div className="exam-banner"><div className="exam-banner-icon"><FileCheck2 size={23}/></div><div className="exam-banner-copy"><strong>Diagnostic des fondations mathématiques</strong><span>8 questions · 30 minutes · Évaluation d’entraînement</span></div><button className="secondary-button" onClick={onStart}>Découvrir <ArrowRight size={15}/></button></div>
    <Footer/>
  </div>
}

function Stat({icon,label,value,note}: {icon:ReactNode;label:string;value:string;note:string}) { return <div className="stat-card"><div className="stat-top">{icon}<span>{label}</span></div><strong>{value}</strong><small>{note}</small></div> }

function BlockCard({block,onClick}: {block:typeof blocks[number];onClick:()=>void}) {
  return <button className="block-card" onClick={onClick}><div className="block-card-top"><span className={`block-code ${block.tone}`}>{block.code}</span><span className="block-more"><MoreHorizontal size={18}/></span></div><h3>{block.title}</h3><p>{block.subtitle}</p><div className="block-progress"><div><span>Contenu pédagogique</span><strong>{block.progress}%</strong></div><div className="progress-track"><i style={{width:`${block.progress}%`}}/></div></div><div className="block-card-foot"><span>{block.lessons ? `${block.lessons} unités` : 'Programme planifié'}</span><span className="block-status">{block.status}</span></div></button>
}

function Paths({onStart}:{onStart:()=>void}) {
  return <div className="content-wrap"><PageHeading eyebrow="CURSUS QUANTITATIF" title="Mes parcours" description="Une architecture progressive pour développer une véritable maîtrise des disciplines quantitatives."/><div className="path-intro"><div className="path-intro-icon"><Compass size={22}/></div><div><strong>Une progression par compétences</strong><p>Chaque bloc associe cours, démonstrations, exercices gradués, ateliers et évaluations. Les statuts indiquent ce qui est réellement disponible.</p></div></div><div className="path-list">{blocks.map((b,i)=><div className="path-row" key={b.code}><div className={`path-index ${b.tone}`}>{String(i+1).padStart(2,'0')}</div><div className="path-main"><div className="path-title-line"><span>{b.code}</span><span className="path-status">{b.status}</span></div><h3>{b.title}</h3><p>{b.subtitle}</p><div className="path-meta"><span><BookOpen size={14}/>{b.lessons || '—'} unités</span><span><Activity size={14}/>{b.lessons ? 'Contenu en cours de revue' : 'À construire'}</span></div></div><div className="path-progress"><strong>{b.progress}%</strong><div className="progress-track"><i style={{width:`${b.progress}%`}}/></div></div><ChevronRight size={18} className="path-chevron"/></div>)}</div><div className="path-bottom"><div><Sparkles size={18}/><span><strong>Votre première étape</strong><small>Évaluez vos connaissances de départ en mathématiques.</small></span></div><button className="primary-button" onClick={onStart}>Lancer le diagnostic <ArrowRight size={15}/></button></div><Footer/></div>
}

function Exams({onStart}:{onStart:()=>void}) {
  return <div className="content-wrap"><PageHeading eyebrow="ASSESSMENT CENTRE" title="Centre d’examens" description="Évaluez vos connaissances, mesurez votre maîtrise et identifiez les notions à approfondir."/><div className="exam-hero"><div className="exam-hero-icon"><Award size={25}/></div><div><div className="eyebrow">PREMIÈRE ÉVALUATION DISPONIBLE EN DÉMONSTRATION</div><h2>Diagnostic des fondations mathématiques</h2><p>Un premier parcours de huit questions pour explorer les notions essentielles : fractions, pourcentages, algèbre, fonctions et modélisation.</p><div className="exam-facts"><span><Clock3 size={15}/> 30 min</span><span><FileCheck2 size={15}/> 8 questions</span><span><BarChart3 size={15}/> Résultat immédiat</span></div></div><button className="primary-button" onClick={onStart}>Commencer <ArrowRight size={16}/></button></div><div className="section-head"><div><div className="eyebrow">À VENIR</div><h2>Évaluations du cursus</h2><p>Les examens officiels seront publiés après validation pédagogique et technique.</p></div></div><div className="upcoming-grid"><Upcoming code="B01" title="Examen final — Fondations" detail="2 heures · 100 points" state="Non publié · validation requise"/><Upcoming code="B01+" title="Évaluation — Calcul différentiel" detail="2 h 30 · 100 points" state="Sujet disponible en bibliothèque"/><Upcoming code="B02" title="Évaluation — Algèbre linéaire" detail="Vecteurs, matrices et systèmes" state="En préparation"/><Upcoming code="STAT" title="Diagnostic — Statistique" detail="Culture statistique et description" state="À venir"/></div><div className="integrity-note"><ShieldCheck size={18}/><p><strong>Transparence des évaluations.</strong> Le diagnostic accessible ici est un prototype d’entraînement. Les examens officiels du cursus seront distincts, avec barème documenté, corrigé vérifié et historique personnel sécurisé.</p></div><Footer/></div>
}

function Upcoming({code,title,detail,state}:{code:string;title:string;detail:string;state:string}) { return <div className="upcoming-card"><div className="upcoming-code">{code}</div><div><h3>{title}</h3><p>{detail}</p><span>{state}</span></div><LockKeyhole size={17}/></div> }

function Exam({current,setCurrent,answers,chooseAnswer,seconds,time,progress,onFinish}:{current:number;setCurrent:(v:number)=>void;answers:Answers;chooseAnswer:(v:number)=>void;seconds:number;time:string;progress:number;onFinish:()=>void}) {
  const q=questions[current]
  const [confirm,setConfirm]=useState(false)
  return <div className="exam-workspace"><div className="exam-topline"><button className="back-link" onClick={()=>setConfirm(true)}><ArrowLeft size={15}/> Quitter l’évaluation</button><div className={`timer-chip ${seconds<300?'timer-warning':''}`}><Timer size={16}/><span>{time}</span><small>RESTANT</small></div></div><div className="exam-layout"><section className="question-panel"><div className="question-meta"><span className="eyebrow">DIAGNOSTIC · FONDATIONS</span><span className="question-count">QUESTION <b>{String(current+1).padStart(2,'0')}</b> / {String(questions.length).padStart(2,'0')}</span></div><div className="exam-progress"><div style={{width:`${progress}%`}}/></div><div className="question-tags"><span>{q.skill}</span><span>{q.level}</span></div><h1>{q.prompt}</h1><p className="answer-instruction">Sélectionnez une seule réponse.</p><div className="answer-options">{q.options.map((option,i)=><button key={option} className={`answer-option ${answers[q.id]===i?'selected':''}`} onClick={()=>chooseAnswer(i)}><span className="option-letter">{String.fromCharCode(65+i)}</span><span>{option}</span>{answers[q.id]===i&&<CheckCircle2 size={19}/>}</button>)}</div><div className="question-footer"><span>{answers[q.id]===undefined?'Aucune réponse sélectionnée': 'Réponse enregistrée dans ce navigateur'}</span><div><button className="secondary-button" disabled={current===0} onClick={()=>setCurrent(current-1)}><ChevronLeft size={16}/> Précédent</button>{current===questions.length-1?<button className="primary-button" onClick={()=>setConfirm(true)}>Terminer <Check size={16}/></button>:<button className="primary-button" onClick={()=>setCurrent(current+1)}>Suivant <ChevronRight size={16}/></button>}</div></div></section><aside className="question-rail"><div className="rail-heading"><strong>Votre progression</strong><span>{Object.keys(answers).length}/{questions.length}</span></div><div className="question-grid">{questions.map((item,i)=><button key={item.id} className={`question-number ${current===i?'current':''} ${answers[item.id]!==undefined?'done':''}`} onClick={()=>setCurrent(i)}>{i+1}</button>)}</div><div className="rail-legend"><span><i className="legend-current"/> En cours</span><span><i className="legend-done"/> Répondu</span><span><i className="legend-empty"/> À traiter</span></div><div className="rail-bottom"><div className="rail-shield"><ShieldCheck size={17}/></div><strong>Vos réponses</strong><p>Conservées localement sur cet appareil. Elles ne sont pas envoyées à un serveur.</p></div></aside></div>{confirm&&<div className="confirm-overlay"><div className="confirm-card"><button className="modal-close" onClick={()=>setConfirm(false)}><X size={18}/></button><div className="modal-symbol"><FileCheck2 size={22}/></div><h2>Terminer l’évaluation ?</h2><p>Vous avez répondu à {Object.keys(answers).length} question(s) sur {questions.length}. Les questions non traitées seront comptées comme sans réponse.</p><div className="confirm-actions"><button className="secondary-button" onClick={()=>setConfirm(false)}>Continuer</button><button className="primary-button" onClick={onFinish}>Soumettre mes réponses <ArrowRight size={15}/></button></div></div></div>}</div>
}

function Results({score,answered,answers,onRetry,onPaths}:{score:number;answered:number;answers:Answers;onRetry:()=>void;onPaths:()=>void}) {
  const pct=Math.round(score/questions.length*100)
  const [expanded,setExpanded]=useState<number|null>(null)
  return <div className="content-wrap"><PageHeading eyebrow="VOTRE RÉSULTAT" title="Diagnostic terminé" description="Voici une première lecture de vos réponses et des compétences explorées."/><div className="result-card"><div className="result-score"><div className="score-ring" style={{'--score':`${pct*3.6}deg`} as CSSProperties}><div><strong>{pct}<small>%</small></strong><span>RÉUSSITE</span></div></div></div><div className="result-summary"><div className="eyebrow">SYNTHÈSE DE L’ÉVALUATION</div><h2>{pct>=80?'De bonnes bases à consolider.':pct>=50?'Des acquis présents, à renforcer.':'Un socle à construire progressivement.'}</h2><p>Vous avez obtenu <strong>{score} bonne(s) réponse(s)</strong> sur {questions.length}. {answered<questions.length? `${questions.length-answered} question(s) sans réponse.`:'Toutes les questions ont reçu une réponse.'}</p><div className="result-metrics"><span><strong>{score}/{questions.length}</strong> Réponses correctes</span><span><strong>{answered}/{questions.length}</strong> Questions traitées</span></div><div className="result-actions"><button className="primary-button" onClick={onRetry}>Recommencer <ArrowRight size={15}/></button><button className="text-button" onClick={onPaths}>Voir les parcours</button></div></div></div><div className="section-head"><div><div className="eyebrow">ANALYSE DES RÉPONSES</div><h2>Correction détaillée</h2><p>Chaque réponse est accompagnée d’une explication.</p></div></div><div className="correction-list">{questions.map(q=>{const correct=answers[q.id]===q.answer;return <div className="correction-item" key={q.id}><button className="correction-head" onClick={()=>setExpanded(expanded===q.id?null:q.id)}><span className={`correction-status ${correct?'correct':'incorrect'}`}>{correct?<Check size={15}/>:<X size={15}/>}</span><span><strong>Question {q.id} · {q.skill}</strong><small>{correct?'Réponse correcte':'Réponse à revoir'}</small></span><ChevronDown size={17}/></button>{expanded===q.id&&<div className="correction-body"><p>{q.prompt}</p><div className="correct-answer"><CheckCircle2 size={16}/> Bonne réponse : {q.options[q.answer]}</div><p>{q.explanation}</p></div>}</div>})}</div><div className="integrity-note"><ShieldCheck size={18}/><p><strong>Résultat de démonstration.</strong> Ce score est calculé localement sur un petit jeu de questions d’exemple. Il ne constitue pas une note officielle du Bloc 1 et ne remplace pas l’examen final validé.</p></div><Footer/></div>
}

function Footer() { return <footer className="page-footer"><span>PROGRAMME B <b>·</b> LEARNING STUDIO</span><span>Construire la compréhension, mesurer la maîtrise.</span></footer> }

export default App
