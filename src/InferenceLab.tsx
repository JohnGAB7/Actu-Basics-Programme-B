import { useMemo, useRef, useState } from 'react'
import { Activity, BarChart3, Calculator, FlaskConical, RotateCcw, Scale } from 'lucide-react'
import './inference-lab.css'

type TabId = 'wilson' | 'binomial' | 'bayes' | 'resampling'
const fmt = (x:number,d=3)=>x.toLocaleString('fr-BE',{minimumFractionDigits:d,maximumFractionDigits:d})
const choose = (n:number,k:number)=>{let v=1;for(let i=1;i<=k;i++)v=v*(n-k+i)/i;return v}
const pmf = (k:number,n:number,p:number)=>{
  if(p===0)return k===0?1:0
  if(p===1)return k===n?1:0
  return choose(n,k)*Math.pow(p,k)*Math.pow(1-p,n-k)
}
const zValues = { '0.10':1.6448536269514722,'0.05':1.959963984540054,'0.01':2.5758293035489004 }
function Slider({label,value,min,max,step=1,onChange}:{label:string;value:number;min:number;max:number;step?:number;onChange:(v:number)=>void}){
  return <label className="inf-control"><span>{label}<output>{fmt(value,step<1?2:0)}</output></span><input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(Number(e.target.value))}/><small><span>{min}</span><span>{max}</span></small></label>
}
function WilsonPanel(){
  const [n,setN]=useState(40),[x,setX]=useState(28),[alpha,setAlpha]=useState('0.05')
  const z=zValues[alpha as keyof typeof zValues],p=x/n,z2=z*z,den=1+z2/n
  const center=(p+z2/(2*n))/den,half=z/den*Math.sqrt(p*(1-p)/n+z2/(4*n*n))
  return <section className="inf-panel" role="tabpanel" id="inf-panel-wilson" aria-labelledby="inf-tab-wilson" tabIndex={0}>
    <div className="inf-panel-head"><div><div className="inf-kicker">EXPÉRIENCE 01</div><h2>Intervalle de Wilson pour une proportion</h2><p>Un intervalle score qui se comporte mieux que l'intervalle de Wald dans plusieurs petits échantillons.</p></div><button className="inf-reset" onClick={()=>{setN(40);setX(28);setAlpha('0.05')}}><RotateCcw size={14}/> Réinitialiser</button></div>
    <div className="inf-two-col"><div className="inf-controls"><Slider label="Nombre de succès x" value={x} min={0} max={n} onChange={setX}/><Slider label="Taille de l'échantillon n" value={n} min={10} max={100} onChange={v=>{setN(v);setX(old=>Math.min(old,v))}}/><label className="inf-control"><span>Niveau de confiance</span><select value={alpha} onChange={e=>setAlpha(e.target.value)}><option value="0.10">90 %</option><option value="0.05">95 %</option><option value="0.01">99 %</option></select></label><p className="inf-note">Le niveau est celui de la procédure sous le modèle binomial ; Wilson est un intervalle score approché, pas un intervalle exact.</p></div>
      <div className="inf-results"><div className="inf-result-main"><small>Proportion observée</small><strong>{fmt(p*100,1)} %</strong><span>x/n = {x}/{n}</span></div><div className="inf-interval"><div><small>Borne inférieure</small><b>{fmt(center-half)}</b></div><div><small>Borne supérieure</small><b>{fmt(center+half)}</b></div></div><div className="inf-track" role="img" aria-label={'Intervalle de Wilson de '+fmt(center-half)+' à '+fmt(center+half)+' pour une proportion observée de '+fmt(p)}><i style={{left:(center-half)*100+'%',width:(2*half)*100+'%'}}/><b style={{left:p*100+'%'}}/></div><p className="inf-note">L'intervalle reste dans [0,1], y compris lorsque x=0 ou x=n. Son interprétation porte sur la couverture répétée de la méthode.</p></div></div>
  </section>
}
function BinomialPanel(){
  const [n,setN]=useState(12),[x,setX]=useState(9),[p0,setP0]=useState(.5)
  const observed=pmf(x,n,p0)
  const pvalue=Math.min(1,Array.from({length:n+1},(_,k)=>k).reduce((sum,k)=>sum+(pmf(k,n,p0)<=observed+1e-14?pmf(k,n,p0):0),0))
  return <section className="inf-panel" role="tabpanel" id="inf-panel-binomial" aria-labelledby="inf-tab-binomial" tabIndex={0}>
    <div className="inf-panel-head"><div><div className="inf-kicker">EXPÉRIENCE 02</div><h2>Test binomial exact bilatéral</h2><p>La convention utilisée additionne les probabilités des résultats dont la masse sous H₀ ne dépasse pas celle observée.</p></div><button className="inf-reset" onClick={()=>{setN(12);setX(9);setP0(.5)}}><RotateCcw size={14}/> Réinitialiser</button></div>
    <div className="inf-two-col"><div className="inf-controls"><Slider label="Succès observés x" value={x} min={0} max={n} onChange={setX}/><Slider label="Nombre d'essais n" value={n} min={5} max={40} onChange={v=>{setN(v);setX(old=>Math.min(old,v))}}/><Slider label="Probabilité sous H₀" value={p0} min={.05} max={.95} step={.05} onChange={setP0}/><div className="inf-equation">H₀ : p = {fmt(p0,2)} · H₁ : p ≠ {fmt(p0,2)}</div></div><div className="inf-results"><div className="inf-result-main"><small>p-value exacte (ordre des probabilités)</small><strong>{fmt(pvalue,4)}</strong><span>Probabilité calculée sous H₀</span></div><div className="inf-stat-pair"><div><small>P(X=x observé)</small><b>{fmt(observed,5)}</b></div><div><small>Décision à 5 %</small><b>{pvalue<=.05?'Rejet de H₀':'Non-rejet de H₀'}</b></div></div><div className="inf-pmf">{Array.from({length:n+1},(_,k)=>({k,v:pmf(k,n,p0)})).map(({k,v})=><i key={k} title={'k='+k+', probabilité '+fmt(v,4)} className={v<=observed+1e-14?'extreme':''} style={{height:Math.max(3,v/Math.max(...Array.from({length:n+1},(_,j)=>pmf(j,n,p0)))*74)+'%'}}/>)}</div><p className="inf-note">La p-value bilatérale discrète dépend de la convention d'extrémalité. Elle n'est pas égale en général à deux fois la plus petite queue.</p></div></div>
  </section>
}
function BayesPanel(){
  const [success,setSuccess]=useState(7),[trials,setTrials]=useState(10),[a,setA]=useState(1),[b,setB]=useState(1)
  const ap=a+success,bp=b+trials-success,mean=ap/(ap+bp),variance=ap*bp/((ap+bp)**2*(ap+bp+1))
  return <section className="inf-panel" role="tabpanel" id="inf-panel-bayes" aria-labelledby="inf-tab-bayes" tabIndex={0}>
    <div className="inf-panel-head"><div><div className="inf-kicker">EXPÉRIENCE 03</div><h2>Mise à jour Beta–Binomiale</h2><p>Visualisez comment le prior et les observations déterminent la distribution postérieure.</p></div><button className="inf-reset" onClick={()=>{setSuccess(7);setTrials(10);setA(1);setB(1)}}><RotateCcw size={14}/> Réinitialiser</button></div>
    <div className="inf-two-col"><div className="inf-controls"><Slider label="Succès observés" value={success} min={0} max={trials} onChange={setSuccess}/><Slider label="Nombre d'essais" value={trials} min={1} max={100} onChange={v=>{setTrials(v);setSuccess(old=>Math.min(old,v))}}/><Slider label="Paramètre a du prior" value={a} min={.5} max={10} step={.5} onChange={setA}/><Slider label="Paramètre b du prior" value={b} min={.5} max={10} step={.5} onChange={setB}/><div className="inf-equation">Prior : Beta({fmt(a,1)}, {fmt(b,1)})</div></div><div className="inf-results"><div className="inf-result-main"><small>Distribution postérieure</small><strong>Beta({fmt(ap,1)}, {fmt(bp,1)})</strong><span>Après {success} succès sur {trials} essais</span></div><div className="inf-stat-pair"><div><small>Moyenne postérieure</small><b>{fmt(mean,4)}</b></div><div><small>Variance postérieure</small><b>{fmt(variance,5)}</b></div><div><small>P(succès futur | données)</small><b>{fmt(mean,4)}</b></div><div><small>Poids total posterior</small><b>{fmt(ap+bp,1)}</b></div></div><p className="inf-note">La probabilité prédictive d'un succès au prochain essai est la moyenne postérieure de p. Les résultats sont conditionnels au modèle Bernoulli et au prior déclaré.</p></div></div>
  </section>
}
function ResamplingPanel(){
  const sample=[2,3,4,5,8],mean=sample.reduce((s,x)=>s+x,0)/sample.length
  const bootstrap=useMemo(()=>{
    let seed=20261121
    const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296}
    const values=Array.from({length:3000},()=>{let total=0;for(let i=0;i<sample.length;i++)total+=sample[Math.floor(rand()*sample.length)];return total/sample.length}).sort((a,b)=>a-b)
    const q=(p:number)=>{const h=(values.length-1)*p,lo=Math.floor(h),hi=Math.ceil(h);return values[lo]+(h-lo)*(values[hi]-values[lo])}
    const bins=Array.from({length:13},(_,i)=>({left:1.5+i*.5,count:0}))
    values.forEach(v=>{const index=Math.min(12,Math.max(0,Math.floor((v-1.5)/.5)));bins[index].count++})
    return {lo:q(.025),hi:q(.975),bins}
  },[])
  const pooled=[1,2,3,4,5,6],nA=3,observed=-3
  const diffs:number[]=[]
  for(let mask=0;mask<64;mask++){let bits=0;for(let j=0;j<6;j++)if(mask&(1<<j))bits++;if(bits!==3)continue;let aSum=0,bSum=0;for(let j=0;j<6;j++)if(mask&(1<<j))aSum+=pooled[j];else bSum+=pooled[j];diffs.push(aSum/nA-bSum/nA)}
  const extreme=diffs.filter(v=>Math.abs(v)>=Math.abs(observed)-1e-12).length
  return <section className="inf-panel" role="tabpanel" id="inf-panel-resampling" aria-labelledby="inf-tab-resampling" tabIndex={0}>
    <div className="inf-panel-head"><div><div className="inf-kicker">EXPÉRIENCE 04</div><h2>Bootstrap et permutation : deux mécanismes distincts</h2><p>Un rééchantillonnage avec remise estime la variabilité ; une permutation réattribue les étiquettes sous un nul d'échangeabilité.</p></div></div>
    <div className="inf-resample-grid"><div className="inf-resample-card"><h3>Bootstrap percentile de la moyenne</h3><div className="inf-equation">Échantillon : (2, 3, 4, 5, 8)</div><div className="inf-stat-pair"><div><small>Moyenne observée</small><b>{fmt(mean)}</b></div><div><small>IC percentile 95 %</small><b>[{fmt(bootstrap.lo)}, {fmt(bootstrap.hi)}]</b></div></div><div className="inf-bootstrap-bars" role="img" aria-label="Histogramme des moyennes bootstrap calculées sur trois mille rééchantillonnages"><span>Distribution de 3 000 moyennes bootstrap</span><div>{bootstrap.bins.map((bin,i)=><i key={i} style={{height:(bin.count/Math.max(...bootstrap.bins.map(v=>v.count))*100)+'%'}}/>)}</div></div><p className="inf-note">Rééchantillonnage i.i.d. avec remise, graine fixe et quantiles type 7. Ce bootstrap simple ne convient pas tel quel aux grappes ou séries temporelles.</p></div><div className="inf-resample-card"><h3>Permutation exacte de deux groupes</h3><div className="inf-equation">A = (1, 2, 3) · B = (4, 5, 6)</div><div className="inf-stat-pair"><div><small>Différence observée</small><b>{fmt(observed)}</b></div><div><small>p-value exacte bilatérale</small><b>{fmt(extreme/diffs.length,4)}</b></div><div><small>Permutations</small><b>{diffs.length}</b></div><div><small>Au moins aussi extrêmes</small><b>{extreme}</b></div></div><p className="inf-note">Le calcul énumère les C(6,3)=20 allocations. Il est exact pour ce petit exemple sous échangeabilité des six observations sous H₀ ; le plan réel peut imposer des permutations restreintes.</p></div></div>
  </section>
}
export function InferenceLab(){
  const [tab,setTab]=useState<TabId>('wilson')
  const refs=useRef<Array<HTMLButtonElement|null>>([])
  const tabs=[{id:'wilson' as const,label:'Wilson',icon:Scale},{id:'binomial' as const,label:'Test exact',icon:Calculator},{id:'bayes' as const,label:'Bayes',icon:Activity},{id:'resampling' as const,label:'Rééchantillonnage',icon:FlaskConical}]
  return <div className="content-wrap inference-lab">
    <div className="page-heading"><div><div className="inf-kicker">BLOC 11 · LABORATOIRE INTERACTIF</div><h1>Quantifier l'incertitude et raisonner sous un modèle.</h1><p>Explorez des procédures d'inférence sur des exemples contrôlés, avec leurs hypothèses et limites.</p></div><span className="inf-version">INFÉRENCE · V1.0</span></div>
    <div className="inf-intro"><div><BarChart3 size={21}/></div><p><strong>Une conclusion statistique dépend d'une procédure, pas seulement d'un chiffre.</strong><br/>Les données sont pédagogiques et déterministes ; les expériences ne remplacent pas l'analyse d'un plan réel.</p></div>
    <div className="inf-tabs" role="tablist" aria-label="Expériences d'inférence statistique" aria-orientation="horizontal">
      {tabs.map((item,index)=>{const Icon=item.icon;return <button key={item.id} ref={el=>{refs.current[index]=el}} id={'inf-tab-'+item.id} type="button" role="tab" aria-controls={'inf-panel-'+item.id} aria-selected={tab===item.id} tabIndex={tab===item.id?0:-1} className={tab===item.id?'active':''} onClick={()=>setTab(item.id)} onKeyDown={e=>{const next=e.key==='ArrowRight'?(index+1)%tabs.length:e.key==='ArrowLeft'?(index-1+tabs.length)%tabs.length:e.key==='Home'?0:e.key==='End'?tabs.length-1:-1;if(next>=0){e.preventDefault();setTab(tabs[next].id);refs.current[next]?.focus()}}}><Icon size={15}/>{item.label}</button>})}
    </div>
    <div hidden={tab!=='wilson'}><WilsonPanel/></div><div hidden={tab!=='binomial'}><BinomialPanel/></div><div hidden={tab!=='bayes'}><BayesPanel/></div><div hidden={tab!=='resampling'}><ResamplingPanel/></div>
    <div className="inf-footnote"><strong>Prudence statistique.</strong> Les intervalles, tests et rééchantillonnages n'ont de sens que sous un modèle, un plan et une convention explicités. Une p-value n'est pas la probabilité que H₀ soit vraie ; un posterior dépend du prior.</div>
  </div>
}
