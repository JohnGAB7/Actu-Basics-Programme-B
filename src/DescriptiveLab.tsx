import { useMemo, useRef, useState } from 'react'
import { Activity, BarChart3, Calculator, Database, RotateCcw, Scale, Table2 } from 'lucide-react'
import './descriptive-lab.css'

type TabId = 'summary' | 'sampling' | 'histogram' | 'missing' | 'simpson'

const fmt = (value: number, digits = 2) => value.toLocaleString('fr-BE', { maximumFractionDigits: digits, minimumFractionDigits: digits })
const quantile = (values: number[], p: number) => {
  const x = [...values].sort((a, b) => a - b)
  const h = (x.length - 1) * p
  const lo = Math.floor(h)
  const hi = Math.ceil(h)
  return x[lo] + (h - lo) * (x[hi] - x[lo])
}

function Slider({ label, value, min, max, step = 1, onChange, suffix = '' }: {
  label: string; value: number; min: number; max: number; step?: number; onChange: (value: number) => void; suffix?: string
}) {
  return <label className="eda-control">
    <span>{label}<output>{fmt(value, step < 1 ? 2 : 0)}{suffix}</output></span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={event => onChange(Number(event.target.value))}/>
    <small><span>{min}{suffix}</span><span>{max}{suffix}</span></small>
  </label>
}

function SummaryPanel() {
  const [outlier, setOutlier] = useState(100)
  const values = useMemo(() => [1, 2, 2, 3, 4, 5, 7, 9, outlier], [outlier])
  const stats = useMemo(() => {
    const mean = values.reduce((a, b) => a + b, 0) / values.length
    const median = quantile(values, .5)
    const q1 = quantile(values, .25)
    const q3 = quantile(values, .75)
    const variance = values.reduce((sum, x) => sum + (x - mean) ** 2, 0) / (values.length - 1)
    return { mean, median, q1, q3, iqr: q3 - q1, sd: Math.sqrt(variance) }
  }, [values])
  return <section className="eda-panel" role="tabpanel" id="eda-panel-summary" aria-labelledby="eda-tab-summary" tabIndex={0}>
    <div className="eda-panel-heading"><div><div className="eda-eyebrow">EXPÉRIENCE 01</div><h2>Moyenne et médiane ne réagissent pas pareil</h2><p>Faites varier une observation extrême et comparez les résumés de position.</p></div><button className="eda-reset" onClick={() => setOutlier(100)}><RotateCcw size={14}/> Réinitialiser</button></div>
    <div className="eda-grid">
      <div className="eda-controls">
        <Slider label="Valeur de la dernière observation" value={outlier} min={10} max={200} onChange={setOutlier}/>
        <div className="eda-formula">x = (1, 2, 2, 3, 4, 5, 7, 9, {outlier})</div>
        <p className="eda-hint">Une observation extrême peut déplacer fortement la moyenne et l'écart-type, alors que la médiane et l'IQR sont plus résistants. « Robuste » ne signifie pas insensible à tout changement.</p>
      </div>
      <div className="eda-stat-grid">
        <div><small>Moyenne</small><strong>{fmt(stats.mean)}</strong><span>Très sensible aux extrêmes</span></div>
        <div><small>Médiane</small><strong>{fmt(stats.median)}</strong><span>Position centrale robuste</span></div>
        <div><small>Écart-type corrigé</small><strong>{fmt(stats.sd)}</strong><span>Dispersion quadratique</span></div>
        <div><small>Écart interquartile</small><strong>{fmt(stats.iqr)}</strong><span>Q₃ − Q₁ = {fmt(stats.q3)} − {fmt(stats.q1)}</span></div>
      </div>
    </div>
  </section>
}

function SamplingPanel() {
  const [smallStratumN, setSmallStratumN] = useState(50)
  const n2 = smallStratumN
  const n1 = 100 - n2
  const N1 = 800
  const N2 = 200
  const mean1 = 100
  const mean2 = 180
  const unweighted = (n1 * mean1 + n2 * mean2) / 100
  const stratified = (N1 * mean1 + N2 * mean2) / (N1 + N2)
  return <section className="eda-panel" role="tabpanel" id="eda-panel-sampling" aria-labelledby="eda-tab-sampling" tabIndex={0}>
    <div className="eda-panel-heading"><div><div className="eda-eyebrow">EXPÉRIENCE 02</div><h2>Suréchantillonner impose de repondérer</h2><p>La strate minoritaire est volontairement surreprésentée dans l'échantillon.</p></div><button className="eda-reset" onClick={() => setSmallStratumN(50)}><RotateCcw size={14}/> Réinitialiser</button></div>
    <div className="eda-grid">
      <div className="eda-controls">
        <Slider label="Unités tirées dans la petite strate" value={n2} min={10} max={80} onChange={setSmallStratumN}/>
        <div className="eda-formula">n₁ = {n1} · n₂ = {n2} · n = 100</div>
        <p className="eda-hint">Population : 800 unités dans la strate 1 et 200 dans la strate 2. Les moyennes de strate observées sont respectivement 100 et 180.</p>
      </div>
      <div className="eda-sampling-results">
        <div className="eda-sample-bars"><div><span>Population</span><i><b style={{width:'80%'}}/> <b style={{width:'20%'}}/></i><small>80 % / 20 %</small></div><div><span>Échantillon</span><i><b style={{width:(n1)+'%'}}/><b style={{width:n2+'%'}}/></i><small>{n1} % / {n2} %</small></div></div>
        <div className="eda-stat-grid">
          <div><small>Moyenne brute</small><strong>{fmt(unweighted)}</strong><span>Non pondérée</span></div>
          <div><small>Moyenne stratifiée</small><strong>{fmt(stratified)}</strong><span>Restitue les parts 80/20</span></div>
          <div><small>Poids strate 1</small><strong>{fmt(N1 / n1, 2)}</strong><span>N₁ / n₁</span></div>
          <div><small>Poids strate 2</small><strong>{fmt(N2 / n2, 2)}</strong><span>N₂ / n₂</span></div>
        </div>
        <p className="eda-hint">La moyenne stratifiée estimée vaut Σₕ (Nₕ/N)ȳₕ. Ici elle reste à 116, tandis que la moyenne brute change avec l'allocation.</p>
      </div>
    </div>
  </section>
}

function HistogramPanel() {
  const data = [1, 2, 3, 7, 10]
  const breaks = [0, 5, 12]
  const counts = [3, 2]
  const densities = counts.map((count, i) => count / (data.length * (breaks[i + 1] - breaks[i])))
  const maxDensity = Math.max(...densities)
  const scaleX = (x: number) => 36 + x / 12 * 360
  const scaleY = (d: number) => 166 - d / maxDensity * 125
  return <section className="eda-panel" role="tabpanel" id="eda-panel-histogram" aria-labelledby="eda-tab-histogram" tabIndex={0}>
    <div className="eda-panel-heading"><div><div className="eda-eyebrow">EXPÉRIENCE 03</div><h2>Avec des classes inégales, c'est l'aire qui compte</h2><p>Les hauteurs représentent une densité de fréquence, pas la fréquence brute de chaque classe.</p></div></div>
    <div className="eda-chart-wrap">
      <svg className="eda-chart" viewBox="0 0 430 205" role="img" aria-label="Histogramme à deux classes inégales. La première classe de largeur cinq contient trois observations, la seconde de largeur sept en contient deux.">
        {[0,.03,.06,.09,.12].map(t=><g key={t}><line x1="36" x2="396" y1={scaleY(t)} y2={scaleY(t)} className="eda-gridline"/><text x="28" y={scaleY(t)+3} textAnchor="end" className="eda-tick">{t.toFixed(2)}</text></g>)}
        {counts.map((count,i)=><g key={i}><rect x={scaleX(breaks[i])} y={scaleY(densities[i])} width={scaleX(breaks[i+1])-scaleX(breaks[i])} height={166-scaleY(densities[i])} className="eda-hist-bar"/><text x={(scaleX(breaks[i])+scaleX(breaks[i+1]))/2} y={scaleY(densities[i])-7} textAnchor="middle" className="eda-bar-label">f={fmt(count/data.length,2)}</text></g>)}
        {[0,5,12].map(t=><text key={t} x={scaleX(t)} y="185" textAnchor="middle" className="eda-tick">{t}</text>)}
        <line x1="36" y1="166" x2="396" y2="166" className="eda-axis"/>
      </svg>
      <div className="eda-hist-equations"><div><b>Classe [0, 5[</b><span>Fréquence 0,60 · densité 0,12</span><small>Aire = 5 × 0,12 = 0,60</small></div><div><b>Classe [5, 12]</b><span>Fréquence 0,40 · densité 0,0571</span><small>Aire = 7 × 0,0571 ≈ 0,40</small></div></div>
    </div>
    <p className="eda-hint">La somme des aires vaut 1. Si l'on utilisait directement les fréquences comme hauteurs, les classes de largeurs différentes seraient visuellement trompeuses.</p>
  </section>
}

function MissingPanel() {
  const values = [30, 35, 40, null, null, 55, 70]
  const observed = values.filter((x): x is number => x !== null)
  const mean = observed.reduce((a, b) => a + b, 0) / observed.length
  const sampleVariance = (x: number[]) => {
    const m = x.reduce((a, b) => a + b, 0) / x.length
    return x.reduce((s, v) => s + (v - m) ** 2, 0) / (x.length - 1)
  }
  const imputed = values.map(x => x === null ? mean : x)
  return <section className="eda-panel" role="tabpanel" id="eda-panel-missing" aria-labelledby="eda-tab-missing" tabIndex={0}>
    <div className="eda-panel-heading"><div><div className="eda-eyebrow">EXPÉRIENCE 04</div><h2>Imputer par la moyenne réduit artificiellement la dispersion</h2><p>Une illustration sur sept observations, dont deux valeurs sont absentes.</p></div></div>
    <div className="eda-missing-grid">
      <div className="eda-missing-values"><div className="eda-eyebrow">DONNÉES OBSERVÉES</div><div className="eda-values">{values.map((x,i)=><span key={i} className={x===null?'missing':''}>{x===null?'Manquant':x}</span>)}</div><div className="eda-missing-rate"><strong>28,6 %</strong><span>2 valeurs manquantes sur 7</span></div></div>
      <div className="eda-stat-grid">
        <div><small>Moyenne cas complets</small><strong>{fmt(mean)}</strong><span>n = {observed.length}</span></div>
        <div><small>Moyenne après imputation</small><strong>{fmt(imputed.reduce((a,b)=>a+b,0)/imputed.length)}</strong><span>n = {imputed.length}</span></div>
        <div><small>Variance corrigée observée</small><strong>{fmt(sampleVariance(observed))}</strong><span>Cas complets</span></div>
        <div><small>Variance après imputation</small><strong>{fmt(sampleVariance(imputed))}</strong><span>Dispersion réduite</span></div>
      </div>
    </div>
    <p className="eda-warning">Le taux de valeurs manquantes ne permet pas d'identifier MCAR, MAR ou MNAR. L'imputation par la moyenne ne restitue pas l'incertitude et peut déformer les relations entre variables.</p>
  </section>
}

function SimpsonPanel() {
  const rows = [
    { label:'Strate 1', a:'81 / 87', b:'234 / 270', rateA:81/87, rateB:234/270 },
    { label:'Strate 2', a:'192 / 263', b:'55 / 80', rateA:192/263, rateB:55/80 },
    { label:'Agrégé', a:'273 / 350', b:'289 / 350', rateA:273/350, rateB:289/350 },
  ]
  return <section className="eda-panel" role="tabpanel" id="eda-panel-simpson" aria-labelledby="eda-tab-simpson" tabIndex={0}>
    <div className="eda-panel-heading"><div><div className="eda-eyebrow">EXPÉRIENCE 05</div><h2>Le paradoxe de Simpson : l'agrégation peut inverser la comparaison</h2><p>Le taux de succès de A est supérieur dans chaque strate, mais inférieur dans l'ensemble agrégé.</p></div></div>
    <div className="eda-table-wrap"><table className="eda-table"><thead><tr><th>Groupe</th><th>Succès A</th><th>Taux A</th><th>Succès B</th><th>Taux B</th><th>Comparaison</th></tr></thead><tbody>{rows.map(row=><tr key={row.label}><th>{row.label}</th><td>{row.a}</td><td>{fmt(row.rateA*100,1)} %</td><td>{row.b}</td><td>{fmt(row.rateB*100,1)} %</td><td className={row.rateA>row.rateB?'eda-better':'eda-worse'}>{row.rateA>row.rateB?'A > B':'A < B'}</td></tr>)}</tbody></table></div>
    <p className="eda-warning">Cette inversion dépend des tailles et compositions des groupes. Elle n'identifie pas à elle seule un effet causal : il faut définir la question, le mécanisme de stratification et le cadre d'analyse.</p>
  </section>
}

export function DescriptiveLab() {
  const [tab, setTab] = useState<TabId>('summary')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const tabs = [
    { id:'summary' as const, label:'Résumés', icon:Scale },
    { id:'sampling' as const, label:'Sondage', icon:Calculator },
    { id:'histogram' as const, label:'Histogramme', icon:BarChart3 },
    { id:'missing' as const, label:'Données manquantes', icon:Database },
    { id:'simpson' as const, label:'Simpson', icon:Table2 },
  ]
  return <div className="content-wrap descriptive-lab">
    <div className="page-heading">
      <div><div className="eda-eyebrow">BLOC 10 · LABORATOIRE INTERACTIF</div><h1>Explorer les données avant de modéliser.</h1><p>Manipulez des exemples contrôlés, comparez les résumés et vérifiez les conséquences des choix statistiques.</p></div>
      <span className="eda-version">EDA · V1.0</span>
    </div>
    <div className="eda-intro"><div className="eda-intro-icon"><Activity size={22}/></div><div><strong>Une exploration rigoureuse commence par de bonnes questions.</strong><p>Les jeux de données sont pédagogiques et déterministes. Ils illustrent des concepts, pas une analyse d'un portefeuille réel.</p></div></div>
    <div className="eda-tabs" role="tablist" aria-label="Expériences de statistique descriptive" aria-orientation="horizontal">
      {tabs.map((item,index)=>{const Icon=item.icon;return <button key={item.id} ref={element=>{tabRefs.current[index]=element}} id={'eda-tab-'+item.id} type="button" role="tab" aria-controls={'eda-panel-'+item.id} aria-selected={tab===item.id} tabIndex={tab===item.id?0:-1} className={tab===item.id?'active':''} onClick={()=>setTab(item.id)} onKeyDown={event=>{
        const next=event.key==='ArrowRight'?(index+1)%tabs.length:event.key==='ArrowLeft'?(index-1+tabs.length)%tabs.length:event.key==='Home'?0:event.key==='End'?tabs.length-1:-1
        if(next>=0){event.preventDefault();setTab(tabs[next].id);tabRefs.current[next]?.focus()}
      }}><Icon size={16}/><span>{item.label}</span></button>})}
    </div>
    <div hidden={tab!=='summary'}><SummaryPanel/></div>
    <div hidden={tab!=='sampling'}><SamplingPanel/></div>
    <div hidden={tab!=='histogram'}><HistogramPanel/></div>
    <div hidden={tab!=='missing'}><MissingPanel/></div>
    <div hidden={tab!=='simpson'}><SimpsonPanel/></div>
    <div className="eda-footnote"><strong>Limites méthodologiques.</strong> Les simulations et jeux d'exemple ne prouvent aucun théorème et ne remplacent pas l'analyse du plan de sondage, des mécanismes de collecte ou des hypothèses de données manquantes. Les résultats doivent être interprétés dans leur contexte.</div>
  </div>
}
