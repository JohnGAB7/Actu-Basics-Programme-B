# Corrigé et barème — Évaluation complémentaire de calcul différentiel

## Partie A — Théorèmes fondamentaux (18 points)

1. **Rolle (3 pts)** : continuité sur \([a,b]\), dérivabilité sur \(]a,b[\), égalité des valeurs aux extrémités ; conclusion : il existe \(c\) intérieur tel que \(f'(c)=0\). **TAF (3 pts)** : mêmes conditions de régularité ; il existe \(c\) tel que \(f'(c)=(f(b)-f(a))/(b-a)\).

2. \(f(x)=x^2-2x\). Pente moyenne sur [0,3] :
\[
\frac{f(3)-f(0)}3=\frac{3-0}{3}=1.
\]
\(f'(x)=2x-2\). Donc \(2c-2=1\), soit \(c=3/2\), bien intérieur. (4 pts)

3. Appliquer le TAF à \(\cos\) : pour \(x\ne y\), il existe \(c\) entre les deux tel que \((\cos y-\cos x)/(y-x)=-\sin c\). Comme \(|\sin c|\leq1\), l'inégalité suit. Cas \(x=y\) immédiat. (4 pts)

4. \(f(x)=x^3\) : \(f'(0)=0\), mais la fonction est strictement croissante et prend des valeurs négatives à gauche, positives à droite ; zéro n'est ni maximum ni minimum. (4 pts)

## Partie B — Variations, extrema et convexité (18 points)

\[
f'(x)=3x^2-6x-9=3(x-3)(x+1).
\]
Points critiques : \(-1\) et \(3\). (4 pts)

Le signe de \(f'\) est positif sur \(]-\infty,-1[\), négatif sur \(]-1,3[\), positif sur \(]3,+\infty[\). Maximum local en \(-1\) :
\(f(-1)=-1-3+9+5=10\).
Minimum local en \(3\) :
\(f(3)=27-27-27+5=-22\). (6 pts)

\[
f''(x)=6x-6.
\]
Concave sur \(]-\infty,1[\), convexe sur \(]1,+\infty[\). Il y a un changement de convexité en \(x=1\), avec \(f(1)=1-3-9+5=-6\). Point d'inflexion \((1,-6)\). (6 pts)

Comme \(f\) est un polynôme cubique de coefficient dominant positif, \(f(x)\to-\infty\) quand \(x\to-\infty\) et \(f(x)\to+\infty\) quand \(x\to+\infty\). Elle n'a donc ni maximum ni minimum global sur \(\mathbb R\). (2 pts)

## Partie C — Taylor et erreur (16 points)

\[
T_2(x)=1+x+\frac{x^2}{2}.
\]
(4 pts)

La dérivée troisième de \(e^x\) vaut \(e^x\). Sur [0;0,1], elle est majorée par \(e^{0,1}\). Donc
\[
|R_2(x)|\leq e^{0,1}\frac{|x|^3}{6}
\leq e^{0,1}\frac{0,1^3}{6}
\approx0,0001842.
\]
(6 pts)

Pour \(f(x)=\sqrt{x}\), autour de 4 : \(f(4)=2\), \(f'(4)=1/4\). Donc
\[
\sqrt{4,04}\approx2+\frac14(0,04)=2,01.
\]
C'est une approximation linéaire de premier ordre, pas une égalité exacte. La valeur exacte est légèrement inférieure à 2,01. (3 pts)

La formule locale décrit le comportement lorsque l'incrément tend vers zéro. Pour un incrément important, les termes d'ordre supérieur peuvent devenir significatifs ; il faut une borne du reste sur l'intervalle concerné. (3 pts)

## Partie D — Optimisation (16 points)

\[
\Pi'(q)=48-2,4q.
\]
Point critique \(q=20\), admissible. (4 pts)

\(\Pi''(q)=-2,4<0\), donc le point critique est un maximum strict local. Sur le compact [0,40], le maximum global est atteint ; comparer :
\[
\Pi(0)=-100,\quad
\Pi(20)=48(20)-1,2(20)^2-100=960-480-100=380,\quad
\Pi(40)=48(40)-1,2(40)^2-100=1920-1920-100=-100.
\]
Le maximum global vaut **380 €**, atteint à \(q=20\). (6 pts)

Limites possibles : demande et prix supposés fixes ; coûts simplifiés ; incertitude et capacité ; absence de contraintes discrètes ; paramètres estimés. (6 pts)

## Partie E — Taux liés (10 points)

\[
V=\frac43\pi r^3
\quad\Longrightarrow\quad
\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}.
\]
Pour \(r=4\) et \(dr/dt=0,3\) :
\[
\frac{dV}{dt}=4\pi(16)(0,3)=19,2\pi\approx60,32\ \text{cm}^3/\text{s}.
\]
La dérivation temporelle et les unités sont essentielles. (10 pts)

## Partie F — Newton (12 points)

La tangente à \(f\) en \(x_n\) est \(y=f(x_n)+f'(x_n)(x-x_n)\). En posant \(y=0\), on obtient
\[
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}
=x_n-\frac{x_n^2-5}{2x_n}
=\frac12\left(x_n+\frac5{x_n}\right).
\]
(4 pts)

Avec \(x_0=2\) :
\[
x_1=\frac12(2+5/2)=2,25,
\]
\[
x_2=\frac12(2,25+5/2,25)\approx2,2361111.
\]
(4 pts)

Risques/contrôles : \(f'(x_n)\ne0\) ; choix initial ; absence de racine réelle ; divergence ou cycle ; tolérances et maximum d'itérations ; résidu faible non équivalent à une erreur faible si la pente est petite. (4 pts)

## Partie G — Interprétation quantitative (10 points)

\[
R'(\theta)=2\theta-\frac4{\theta^2}.
\]
L'annulation donne \(2\theta^3=4\), donc \(\theta_*=\sqrt[3]2\). Comme
\[
R''(\theta)=2+\frac8{\theta^3}>0,
\]
la fonction est strictement convexe et \(\theta_*\) est son minimum global sur \(]0,+\infty[\), en tenant compte de \(R\to+\infty\) aux deux extrémités. (4 pts)

\(R'\) est la sensibilité absolue locale ; \(R''>0\) exprime la convexité et la croissance de la pente. (3 pts)

La fonction est une hypothèse de modèle. La dérivation caractérise ses propriétés mathématiques ; elle ne prouve ni la pertinence empirique des variables, ni la causalité, ni la qualité de calibration. Il faudrait des données, une stratégie d'identification et une validation indépendante. (3 pts)

## Barème global

| Partie | Points |
|---|---:|
| A — Théorèmes | 18 |
| B — Variations et convexité | 18 |
| C — Taylor et erreurs | 16 |
| D — Optimisation | 16 |
| E — Taux liés | 10 |
| F — Newton | 12 |
| G — Interprétation | 10 |
| **Total** | **100** |

## Interprétation pédagogique indicative

- 90–100 : très bonne maîtrise des applications différentielles et de leurs hypothèses.
- 80–89 : maîtrise solide, quelques points à consolider.
- 70–79 : acquis principaux, mais lacunes à remédier avant progression.
- 60–69 : maîtrise fragile ; reprise ciblée et nouvel essai conseillé.
- moins de 60 : reprise structurée des cours et exercices.

Ces seuils sont des conventions internes proposées pour le parcours, non des normes universitaires universelles.
