import { useMemo, useRef, useState } from 'react'
import { Activity, Beaker, Calculator, ChartNoAxesCombined, RotateCcw } from 'lucide-react'
import './probability-lab.css'

type LabTab = 'lln' | 'bayes' | 'binomial' | 'compound' | 'clt' | 'dependence'

function randomGenerator(seed: number) {
  let state = seed >>> 0
  return () => {
    state = (1664525 * state + 1013904223) >>> 0
    return state / 4294967296
  }
}

function LineChart({ values, probability, count }: { values: number[]; probability: number; count: number }) {
  const width = 720
  const height = 250
  const pad = { left: 42, right: 16, top: 18, bottom: 30 }
  const points = values.map((v, i) => {
    const x = pad.left + (i / Math.max(1, values.length - 1)) * (width - pad.left - pad.right)
    const y = pad.top + (1 - v) * (height - pad.top - pad.bottom)
    return [x, y]
  })
  const path = points.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ')
  const targetY = pad.top + (1 - probability) * (height - pad.top - pad.bottom)
  return <svg className="prob-chart" viewBox={'0 0 ' + width + ' ' + height} role="img" aria-label="Convergence de la fréquence empirique vers la probabilité théorique">
    {[0, .25, .5, .75, 1].map(t => <g key={t}><line x1={pad.left} x2={width - pad.right} y1={pad.top + (1 - t) * (height - pad.top - pad.bottom)} y2={pad.top + (1 - t) * (height - pad.top - pad.bottom)} className="chart-grid"/><text x={pad.left - 10} y={pad.top + (1 - t) * (height - pad.top - pad.bottom) + 4} textAnchor="end" className="chart-tick">{Math.round(t * 100)}%</text></g>)}
    <line x1={pad.left} x2={width - pad.right} y1={targetY} y2={targetY} className="chart-target"/>
    <path d={path} className="chart-line"/>
    <text x={pad.left} y={height - 7} className="chart-tick">1</text>
    <text x={width - pad.right} y={height - 7} textAnchor="end" className="chart-tick">{count.toLocaleString('fr-FR')}</text>
    <text x={width - pad.right - 3} y={targetY - 7} textAnchor="end" className="chart-annotation">p = {probability.toFixed(2).replace('.', ',')}</text>
  </svg>
}

function DistributionChart({ probabilities }: { probabilities: number[] }) {
  const width = 720
  const height = 250
  const pad = { left: 42, right: 16, top: 18, bottom: 34 }
  const max = Math.max(...probabilities, .001) * 1.12
  const slot = (width - pad.left - pad.right) / probabilities.length
  return <svg className="prob-chart" viewBox={'0 0 ' + width + ' ' + height} role="img" aria-label="Fonction de masse de probabilité binomiale">
    {[0, .25, .5, .75, 1].map(t => <g key={t}><line x1={pad.left} x2={width - pad.right} y1={pad.top + (1 - t) * (height - pad.top - pad.bottom)} y2={pad.top + (1 - t) * (height - pad.top - pad.bottom)} className="chart-grid"/><text x={pad.left - 9} y={pad.top + (1 - t) * (height - pad.top - pad.bottom) + 4} textAnchor="end" className="chart-tick">{(max * t * 100).toFixed(0)}%</text></g>)}
    {probabilities.map((v, i) => {
      const barHeight = (v / max) * (height - pad.top - pad.bottom)
      return <rect key={i} x={pad.left + i * slot + slot * .12} y={height - pad.bottom - barHeight} width={Math.max(1, slot * .76)} height={barHeight} rx="2" className="chart-bar"><title>{'P(X = ' + i + ') = ' + (v * 100).toFixed(2) + '%'}</title></rect>
    })}
    <text x={pad.left} y={height - 8} className="chart-tick">0</text>
    <text x={width - pad.right} y={height - 8} textAnchor="end" className="chart-tick">{probabilities.length - 1}</text>
  </svg>
}

function Histogram({ values, expected }: { values: number[]; expected: number }) {
  const width = 720
  const height = 250
  const pad = { left: 42, right: 16, top: 18, bottom: 34 }
  const maxValue = Math.max(...values, expected * 1.8)
  const bins = 24
  const counts = Array.from({ length: bins }, () => 0)
  values.forEach(v => counts[Math.min(bins - 1, Math.floor(v / maxValue * bins))]++)
  const maxCount = Math.max(...counts, 1)
  const slot = (width - pad.left - pad.right) / bins
  const expectedX = pad.left + expected / maxValue * (width - pad.left - pad.right)
  return <svg className="prob-chart" viewBox={'0 0 ' + width + ' ' + height} role="img" aria-label="Histogramme des charges agrégées simulées">
    {[0, .5, 1].map(t => <g key={t}><line x1={pad.left} x2={width - pad.right} y1={pad.top + (1 - t) * (height - pad.top - pad.bottom)} y2={pad.top + (1 - t) * (height - pad.top - pad.bottom)} className="chart-grid"/><text x={pad.left - 9} y={pad.top + (1 - t) * (height - pad.top - pad.bottom) + 4} textAnchor="end" className="chart-tick">{Math.round(maxCount * t)}</text></g>)}
    {counts.map((v, i) => <rect key={i} x={pad.left + i * slot + 1} y={height - pad.bottom - v / maxCount * (height - pad.top - pad.bottom)} width={Math.max(1, slot - 2)} height={v / maxCount * (height - pad.top - pad.bottom)} rx="2" className="chart-bar"/>)}
    <line x1={expectedX} x2={expectedX} y1={pad.top} y2={height - pad.bottom} className="chart-target"/>
    <text x={Math.min(width - pad.right, expectedX + 5)} y={pad.top + 10} className="chart-annotation">Espérance</text>
    <text x={pad.left} y={height - 8} className="chart-tick">0 €</text>
    <text x={width - pad.right} y={height - 8} textAnchor="end" className="chart-tick">{Math.round(maxValue).toLocaleString('fr-FR')} €</text>
  </svg>
}


function CLTChart({ values }: { values: number[] }) {
  const width = 720, height = 250
  const pad = { left: 42, right: 16, top: 18, bottom: 34 }
  const bins = 32, min = -4, max = 4
  const binWidth = (max - min) / bins
  const counts = Array.from({ length: bins }, () => 0)
  values.forEach(value => { if (value >= min && value <= max) counts[Math.min(bins - 1, Math.floor((value - min) / binWidth))]++ })
  const densities = counts.map(count => count / (values.length * binWidth))
  const normal = (x: number) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI)
  const maxDensity = Math.max(.42, ...densities, normal(0)) * 1.12
  const plotHeight = height - pad.top - pad.bottom
  const plotWidth = width - pad.left - pad.right
  const slot = plotWidth / bins
  const curve = Array.from({ length: 161 }, (_, i) => {
    const x = min + (i / 160) * (max - min)
    const px = pad.left + (x - min) / (max - min) * plotWidth
    const py = height - pad.bottom - normal(x) / maxDensity * plotHeight
    return (i === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + py.toFixed(1)
  }).join(' ')
  return <svg className="prob-chart" viewBox={'0 0 ' + width + ' ' + height} role="img" aria-label="Histogramme de la moyenne exponentielle standardisée comparé à la densité normale standard">
    {[0, .5, 1].map(t => <g key={t}><line x1={pad.left} x2={width-pad.right} y1={pad.top+(1-t)*plotHeight} y2={pad.top+(1-t)*plotHeight} className="chart-grid"/><text x={pad.left-9} y={pad.top+(1-t)*plotHeight+4} textAnchor="end" className="chart-tick">{(maxDensity*t).toFixed(2)}</text></g>)}
    {densities.map((density, i) => { const barHeight = density / maxDensity * plotHeight; return <rect key={i} x={pad.left+i*slot+1} y={height-pad.bottom-barHeight} width={Math.max(1,slot-2)} height={barHeight} className="chart-bar" rx="2"/> })}
    <path d={curve} className="clt-normal-curve"/>
    {[-4,-2,0,2,4].map(x => <text key={x} x={pad.left+(x-min)/(max-min)*plotWidth} y={height-8} textAnchor="middle" className="chart-tick">{x}</text>)}
  </svg>
}

function Slider({ label, value, min, max, step = 1, suffix = '', onChange }: { label: string; value: number; min: number; max: number; step?: number; suffix?: string; onChange: (value: number) => void }) {
  return <label className="lab-control">
    <span><b>{label}</b><output>{value.toLocaleString('fr-FR', { maximumFractionDigits: 3 })}{suffix}</output></span>
    <input type="range" aria-label={label} min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}/>
    <small><span>{min.toLocaleString('fr-FR')}{suffix}</span><span>{max.toLocaleString('fr-FR')}{suffix}</span></small>
  </label>
}

export function ProbabilityLab() {
  const [tab, setTab] = useState<LabTab>('lln')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const [cltN, setCltN] = useState(30)
  const [p, setP] = useState(.3)
  const [n, setN] = useState(2500)
  const [prevalence, setPrevalence] = useState(1)
  const [sensitivity, setSensitivity] = useState(95)
  const [specificity, setSpecificity] = useState(90)
  const [binomialN, setBinomialN] = useState(20)
  const [binomialP, setBinomialP] = useState(.3)
  const [lambda, setLambda] = useState(.12)
  const [severity, setSeverity] = useState(800)
  const [exposures, setExposures] = useState(100)

  const lln = useMemo(() => {
    const random = randomGenerator(20261121 + Math.round(p * 1000) + n)
    const checkpoints: number[] = []
    let successes = 0
    const stride = Math.max(1, Math.floor(n / 500))
    for (let i = 1; i <= n; i++) {
      if (random() < p) successes++
      if (i % stride === 0 || i === n) checkpoints.push(successes / i)
    }
    return { values: checkpoints, frequency: successes / n }
  }, [p, n])

  const bayes = useMemo(() => {
    const prev = prevalence / 100
    const se = sensitivity / 100
    const sp = specificity / 100
    const numerator = se * prev
    const denominator = numerator + (1 - sp) * (1 - prev)
    return denominator === 0 ? 0 : numerator / denominator
  }, [prevalence, sensitivity, specificity])

  const binomial = useMemo(() => {
    const values = [(1 - binomialP) ** binomialN]
    for (let k = 0; k < binomialN; k++) {
      values.push(values[k] * (binomialN - k) / (k + 1) * binomialP / (1 - binomialP))
    }
    return values
  }, [binomialN, binomialP])

  const compound = useMemo(() => {
    const random = randomGenerator(7319 + Math.round(lambda * 10000) + severity + exposures)
    const portfolios = 500
    const totals: number[] = []
    for (let r = 0; r < portfolios; r++) {
      let total = 0
      for (let i = 0; i < exposures; i++) {
        let count = 0
        let product = 1
        const threshold = Math.exp(-lambda)
        do {
          count++
          product *= random()
        } while (product > threshold)
        count--
        for (let j = 0; j < count; j++) total += -Math.log(Math.max(random(), 1e-12)) * severity
      }
      totals.push(total)
    }
    const mean = totals.reduce((a, b) => a + b, 0) / totals.length
    return { totals, mean, expected: exposures * lambda * severity, sd: Math.sqrt(exposures * lambda * 2 * severity * severity) }
  }, [lambda, severity, exposures])

  const clt = useMemo(() => {
    const random = randomGenerator(8821 + cltN)
    const repetitions = 3000
    const values = Array.from({ length: repetitions }, () => {
      let total = 0
      for (let i = 0; i < cltN; i++) total += -Math.log(Math.max(random(), 1e-12))
      return Math.sqrt(cltN) * (total / cltN - 1)
    })
    const mean = values.reduce((a, b) => a + b, 0) / repetitions
    const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / repetitions
    return { values, mean, variance, theoreticalSkewness: 2 / Math.sqrt(cltN) }
  }, [cltN])

  const tabs = [
    { id: 'lln' as const, label: 'Loi des grands nombres', icon: Activity },
    { id: 'bayes' as const, label: 'Théorème de Bayes', icon: Calculator },
    { id: 'binomial' as const, label: 'Loi binomiale', icon: ChartNoAxesCombined },
    { id: 'compound' as const, label: 'Risque collectif', icon: Beaker },
    { id: 'clt' as const, label: 'Théorème central limite', icon: ChartNoAxesCombined },
    { id: 'dependence' as const, label: 'Dépendance et covariance', icon: Activity },
  ]

  return <div className="content-wrap probability-lab">
    <div className="page-heading">
      <div><div className="eyebrow">BLOC 08 · LABORATOIRE INTERACTIF</div><h1>Expérimenter les probabilités.</h1><p>Modifiez les paramètres, observez les résultats et reliez l’expérience aux propriétés théoriques.</p></div>
      <span className="lab-version">SIMULATIONS · V1.1</span>
    </div>
    <div className="lab-intro"><div className="lab-intro-icon"><Beaker size={22}/></div><div><strong>Un laboratoire pour raisonner, pas seulement calculer.</strong><p>Chaque expérience est reproductible avec une graine fixe. Les simulations illustrent les résultats théoriques ; elles ne constituent pas des démonstrations.</p></div></div>
    <div className="lab-tabs" role="tablist" aria-label="Expériences probabilistes">
      {tabs.map((item, index) => { const Icon = item.icon; return <button key={item.id} ref={element => { tabRefs.current[index] = element }} id={'tab-' + item.id} type="button" role="tab" aria-controls={'panel-' + item.id} aria-selected={tab === item.id} tabIndex={tab === item.id ? 0 : -1} className={tab === item.id ? 'active' : ''} onClick={() => setTab(item.id)} onKeyDown={event => {
        const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : event.key === 'ArrowLeft' ? (index - 1 + tabs.length) % tabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1
        if (next >= 0) { event.preventDefault(); setTab(tabs[next].id); tabRefs.current[next]?.focus() }
      }}><Icon size={16}/><span>{item.label}</span></button> })}
    </div>

    {tab === 'lln' && <section className="lab-panel" role="tabpanel" id="panel-lln" aria-labelledby="tab-lln" tabIndex={0}>
      <div className="lab-panel-heading"><div><div className="eyebrow">EXPÉRIENCE 01</div><h2>La fréquence empirique se stabilise</h2><p>On répète une épreuve de Bernoulli de probabilité de succès p.</p></div><button className="lab-reset" onClick={() => { setP(.3); setN(2500) }}><RotateCcw size={14}/> Réinitialiser</button></div>
      <div className="lab-layout"><div className="lab-controls"><Slider label="Probabilité théorique p" value={p} min={.05} max={.95} step={.01} onChange={setP}/><Slider label="Nombre d'épreuves n" value={n} min={100} max={10000} step={100} onChange={setN}/><div className="lab-equation">p̂ₙ = (X₁ + ⋯ + Xₙ) / n</div><p className="lab-hint">Chaque Xᵢ vaut 1 avec probabilité p et 0 sinon. La loi forte des grands nombres assure la convergence presque sûre de la fréquence vers p.</p></div><div className="lab-visual"><div className="lab-chart-title"><span>Fréquence cumulée observée</span><b>Dernière valeur : {(lln.frequency * 100).toFixed(2).replace('.', ',')} %</b></div><LineChart values={lln.values} probability={p} count={n}/><div className="lab-legend"><span><i className="legend-line"/> Fréquence simulée</span><span><i className="legend-dash"/> Valeur théorique p</span></div></div></div>
    </section>}

    {tab === 'bayes' && <section className="lab-panel" role="tabpanel" id="panel-bayes" aria-labelledby="tab-bayes" tabIndex={0}>
      <div className="lab-panel-heading"><div><div className="eyebrow">EXPÉRIENCE 02</div><h2>Le taux de base change l’interprétation</h2><p>Un test positif n’implique pas nécessairement une forte probabilité d’être malade.</p></div><button className="lab-reset" onClick={() => { setPrevalence(1); setSensitivity(95); setSpecificity(90) }}><RotateCcw size={14}/> Réinitialiser</button></div>
      <div className="lab-layout"><div className="lab-controls"><Slider label="Prévalence" value={prevalence} min={.1} max={30} step={.1} suffix=" %" onChange={setPrevalence}/><Slider label="Sensibilité" value={sensitivity} min={50} max={100} suffix=" %" onChange={setSensitivity}/><Slider label="Spécificité" value={specificity} min={50} max={100} suffix=" %" onChange={setSpecificity}/><div className="lab-equation">P(M | +) = Se · P(M) / [Se · P(M) + (1 − Sp) · P(¬M)]</div></div><div className="bayes-result"><div className="eyebrow">VALEUR PRÉDICTIVE POSITIVE</div><strong>{(bayes * 100).toFixed(2).replace('.', ',')}<small> %</small></strong><div className="bayes-meter"><i style={{ width: (bayes * 100) + '%' }}/></div><p>Sur 10 000 personnes testées, environ <b>{Math.round(10000 * bayes * (sensitivity / 100 * prevalence / 100 + (1 - specificity / 100) * (1 - prevalence / 100))).toLocaleString('fr-FR')}</b> personnes ayant un résultat positif sont réellement malades, selon ce modèle.</p><div className="bayes-caveat">Le résultat dépend simultanément de la prévalence, de la sensibilité et de la spécificité. Les valeurs sont supposées constantes dans la population étudiée.</div></div></div>
    </section>}

    {tab === 'binomial' && <section className="lab-panel" role="tabpanel" id="panel-binomial" aria-labelledby="tab-binomial" tabIndex={0}>
      <div className="lab-panel-heading"><div><div className="eyebrow">EXPÉRIENCE 03</div><h2>Explorer une loi binomiale</h2><p>La variable compte les succès de n épreuves indépendantes de même probabilité p.</p></div><button className="lab-reset" onClick={() => { setBinomialN(20); setBinomialP(.3) }}><RotateCcw size={14}/> Réinitialiser</button></div>
      <div className="lab-layout"><div className="lab-controls"><Slider label="Nombre d’épreuves n" value={binomialN} min={5} max={60} onChange={setBinomialN}/><Slider label="Probabilité de succès p" value={binomialP} min={.05} max={.95} step={.01} onChange={setBinomialP}/><div className="lab-equation">X ~ Bin(n, p) ; P(X = k) = C(n, k) pᵏ (1 − p)ⁿ⁻ᵏ</div></div><div className="lab-visual"><div className="lab-chart-title"><span>Fonction de masse P(X = k)</span><b>E[X] = {(binomialN * binomialP).toFixed(2).replace('.', ',')}</b></div><DistributionChart probabilities={binomial}/><div className="lab-stat-row"><div><small>Espérance</small><b>{(binomialN * binomialP).toFixed(2).replace('.', ',')}</b></div><div><small>Variance</small><b>{(binomialN * binomialP * (1 - binomialP)).toFixed(2).replace('.', ',')}</b></div><div><small>Écart-type</small><b>{Math.sqrt(binomialN * binomialP * (1 - binomialP)).toFixed(2).replace('.', ',')}</b></div></div></div></div>
    </section>}

    {tab === 'compound' && <section className="lab-panel" role="tabpanel" id="panel-compound" aria-labelledby="tab-compound" tabIndex={0}>
      <div className="lab-panel-heading"><div><div className="eyebrow">EXPÉRIENCE 04</div><h2>Modèle collectif de risque</h2><p>Un portefeuille agrège un nombre aléatoire de sinistres et leurs coûts.</p></div><button className="lab-reset" onClick={() => { setLambda(.12); setSeverity(800); setExposures(100) }}><RotateCcw size={14}/> Réinitialiser</button></div>
      <div className="lab-layout"><div className="lab-controls"><Slider label="Fréquence annuelle λ par exposition" value={lambda} min={.01} max={.5} step={.01} onChange={setLambda}/><Slider label="Sévérité moyenne" value={severity} min={100} max={2500} step={50} suffix=" €" onChange={setSeverity}/><Slider label="Nombre d’expositions" value={exposures} min={10} max={500} step={10} onChange={setExposures}/><div className="lab-equation">S = Σᵢ₌₁ᴺ Xᵢ ; N ~ Poisson(λ)</div><p className="lab-hint">Sévérités exponentielles i.i.d., indépendantes de N. Modèle homogène simplifié, sans frais, inflation ni dépendance entre assurés.</p></div><div className="lab-visual"><div className="lab-chart-title"><span>500 portefeuilles simulés</span><b>Moyenne observée : {Math.round(compound.mean).toLocaleString('fr-FR')} €</b></div><Histogram values={compound.totals} expected={compound.expected}/><div className="lab-stat-row"><div><small>Charge espérée</small><b>{Math.round(compound.expected).toLocaleString('fr-FR')} €</b></div><div><small>Écart-type théorique</small><b>{Math.round(compound.sd).toLocaleString('fr-FR')} €</b></div><div><small>Écart simulé</small><b>{Math.round(compound.mean - compound.expected).toLocaleString('fr-FR')} €</b></div></div></div></div>
    </section>}


    {tab === 'clt' && <section className="lab-panel" role="tabpanel" id="panel-clt" aria-labelledby="tab-clt" tabIndex={0}>
      <div className="lab-panel-heading"><div><div className="eyebrow">EXPÉRIENCE 05</div><h2>La distribution normalisée se rapproche de la normale</h2><p>On simule des moyennes d’échantillons exponentiels indépendants, puis on les centre et les réduit.</p></div><button className="lab-reset" onClick={() => setCltN(30)}><RotateCcw size={14}/> Réinitialiser</button></div>
      <div className="lab-layout"><div className="lab-controls"><Slider label="Taille de chaque échantillon n" value={cltN} min={2} max={150} onChange={setCltN}/><div className="lab-equation">Zₙ = √n (X̄ₙ − 1) ; Xᵢ ~ Exp(1)</div><p className="lab-hint">La loi exponentielle de taux 1 a une espérance et un écart-type égaux à 1. Le TCL prévoit la convergence en loi de Zₙ vers N(0,1). Chaque histogramme repose sur 3 000 répétitions indépendantes.</p><div className="lab-theory-note">L’asymétrie théorique de Zₙ vaut 2/√n : elle diminue lorsque n augmente, sans être nulle pour un n fini.</div></div><div className="lab-visual"><div className="lab-chart-title"><span>Histogramme empirique et densité N(0,1)</span><b>n = {cltN}</b></div><CLTChart values={clt.values}/><div className="lab-legend"><span><i className="legend-bar"/> Moyennes simulées</span><span><i className="legend-normal"/> Densité normale standard</span></div><div className="lab-stat-row"><div><small>Moyenne simulée</small><b>{clt.mean.toFixed(3).replace('.', ',')}</b></div><div><small>Variance simulée</small><b>{clt.variance.toFixed(3).replace('.', ',')}</b></div><div><small>Asymétrie théorique</small><b>{clt.theoreticalSkewness.toFixed(3).replace('.', ',')}</b></div></div></div></div>
    </section>}

    {tab === 'dependence' && <section className="lab-panel" role="tabpanel" id="panel-dependence" aria-labelledby="tab-dependence" tabIndex={0}>
      <div className="lab-panel-heading"><div><div className="eyebrow">EXPÉRIENCE 06</div><h2>Covariance nulle ne signifie pas indépendance</h2><p>Un exemple discret exact permet de séparer absence de corrélation et indépendance.</p></div></div>
      <div className="dependence-layout"><div className="lab-visual"><div className="lab-chart-title"><span>Distribution jointe</span><b>Quatre issues équiprobables</b></div><table className="dependence-table"><thead><tr><th>X</th><th>Y = X²</th><th>Probabilité</th></tr></thead><tbody>{[-2,-1,1,2].map(x=><tr key={x}><td>{x}</td><td>{x*x}</td><td>1/4</td></tr>)}</tbody></table></div><div className="dependence-results"><div><small>E[X]</small><strong>0</strong></div><div><small>E[Y]</small><strong>5/2</strong></div><div><small>E[XY] = E[X³]</small><strong>0</strong></div><div className="dependence-highlight"><small>Cov(X,Y)</small><strong>0</strong><p>Pourtant Y = X² : Y est entièrement déterminée par X. Les variables sont donc dépendantes.</p></div></div></div>
      <div className="lab-equation">Cov(X,Y) = E[XY] − E[X]E[Y] = 0 − 0 × 5/2 = 0</div>
      <div className="lab-theory-note"><strong>Test direct de l’indépendance :</strong> P(Y = 1) = 1/2, alors que P(Y = 1 | X = 1) = 1. Ces probabilités différentes établissent la dépendance. La covariance nulle traduit seulement l’absence de liaison linéaire au sens du second moment.</div>
    </section>}

    <div className="lab-footnote"><strong>À retenir.</strong> Une simulation est un outil d’exploration numérique. Elle ne prouve ni la loi des grands nombres ni les propriétés d’une distribution. Les hypothèses du modèle doivent être examinées avant toute interprétation.</div>
  </div>
}
