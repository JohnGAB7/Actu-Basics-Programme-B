# Corrigé et barème — Examen transversal du Bloc 1

Ce corrigé est destiné à l'auto-correction et à l'harmonisation de la notation. Les arrondis peuvent varier légèrement si les calculs intermédiaires conservent leur précision.

## Partie A — Nombres, intervalles et précision (12 points)

### 1. Intervalle admissible (4 pts)

\[
|x-100|\leq20\iff80\leq x\leq120.
\]
L'intersection avec [0,200] et (40,+∞) ne réduit pas davantage cet intervalle. Réponse : **[80,120]**.

Barème : traduction de la valeur absolue (2), intersection (1), bornes correctement incluses (1).

### 2. Erreurs absolue et relative (4 pts)

La valeur vraie x appartient à [99,6 ; 100,4], valeur affichée 100 :
\[
|100-x|\leq0,4.
\]
Comme x≥99,6>0 :
\[
\frac{|100-x|}{|x|}\leq\frac{0,4}{99,6}\approx0,004016=0,402\%.
\]
Barème : borne absolue (2), erreur relative et borne (2).

### 3. Exactitude et affichage (4 pts)

Le nombre de décimales affichées est un choix de format. La mesure peut comporter une incertitude instrumentale, une erreur d'étalonnage ou une approximation numérique. Une valeur affichée à 8 décimales peut donc être moins exacte qu'une valeur affichée à 2 décimales. Il faut distinguer résolution d'affichage, précision de mesure, exactitude et représentation informatique.

Barème : distinction format/mesure (2), explication cohérente (2).

## Partie B — Rapports, taux et proportionnalité (14 points)

### 1. Deux ratios (4 pts)

Fréquence par année-contrat :
\[
96/1600=0,06\text{ sinistre par année-contrat}.
\]
Sinistres par contrat :
\[
96/2000=0,048\text{ sinistre par contrat}.
\]
Barème : 2 points par ratio avec unité correcte.

### 2. Choix de l'indicateur (4 pts)

La question porte sur une unité de temps d'exposition : le dénominateur pertinent est donc 1 600 années-contrats. Le ratio par contrat ignore la durée effective d'exposition de chaque contrat. Les dénominateurs et les unités diffèrent ; les valeurs ne sont pas interchangeables.

Barème : choix (2), explication dimensionnelle (2).

### 3. Coût moyen et proportionnalité (6 pts)

\[
C(q)=120+2,4q.
\]
Pour q=20 : C=168, coût moyen=168/20=**8,40** par unité.
Pour q=200 : C=600, coût moyen=600/200=**3,00** par unité.

Le coût total n'est pas proportionnel à q, car C(0)=120 et non 0. Le coût moyen vaut 120/q+2,4 et tend vers 2,4 lorsque q augmente.

Barème : calcul q=20 (2), calcul q=200 (2), diagnostic et justification (2).

## Partie C — Variations composées et indices (14 points)

### 1. Facteur et taux global (6 pts)

\[
G=1,08\times0,95\times1,03=1,05678.
\]
Le taux global est G−1=**5,678 %**.

Barème : facteurs (2), produit (2), taux (2).

### 2. Niveau final (2 pts)

\[
250\times1,05678=264,195.
\]
Le niveau final est **264,195**, soit environ 264,20 si l'on arrondit à deux décimales.

### 3. Taux composé moyen (3 pts)

Pour trois périodes :
\[
\bar r=G^{1/3}-1=1,05678^{1/3}-1\approx0,018579.
\]
Soit environ **1,858 % par période**. Le taux moyen géométrique reproduit le même facteur cumulé.

### 4. Rebasage (3 pts)

Un indice qui vaut 104,8 en ancienne base devient 100 à la date choisie comme nouvelle base. Le rebasage multiplie tous les niveaux par 100/104,8 ; il ne change pas les rapports entre observations. Une valeur ultérieure se lit désormais relativement à cette nouvelle date de référence.

## Partie D — Exponentielle et logarithme (14 points)

### 1. Modèle discret (3 pts)

\[
C_n=C_0(1,032)^n.
\]
Accorder les points si les variables et la période sont correctement définies.

### 2. Seuil de 25 % (6 pts)

On cherche :
\[
(1,032)^n\geq1,25.
\]
Donc :
\[
n\geq\frac{\ln(1,25)}{\ln(1,032)}\approx7,08.
\]
Le plus petit nombre entier d'années est **8**. La vérification discrète confirme que 7 ans ne suffisent pas et 8 ans dépassent le seuil.

Barème : inégalité (2), logarithmes (2), choix de l'entier supérieur et vérification (2).

### 3. Taux continu équivalent (3 pts)

\[
\delta=\ln(1,032)\approx0,031499.
\]
Soit **3,150 % en taux continu** environ.

### 4. Limites du modèle (2 pts)

Exemples acceptés : taux non constant ; saturation ou limite physique/commerciale ; changement de régime ; contraintes réglementaires ; inflation ou composition changeante ; chocs externes. Deux éléments distincts et pertinents sont attendus.

## Partie E — Algèbre, équations et systèmes (18 points)

### 1. Simplification rationnelle (6 pts)

\[
\frac{x^2-16}{x^2-4x}
=\frac{(x-4)(x+4)}{x(x-4)}
=\frac{x+4}{x}.
\]
Le dénominateur initial impose **x≠0 et x≠4**. La forme simplifiée est définie pour x≠0, mais la fonction initiale reste non définie en 4. Domaine à conserver : R\{0,4}.

Barème : factorisation (2), domaine initial (2), simplification avec exclusion conservée (2).

### 2. Équation avec racine (6 pts)

\[
\sqrt{2x+3}=x.
\]
Le membre de gauche est non négatif ; il faut donc x≥0. Sur ce domaine, on élève au carré :
\[
2x+3=x^2\iff x^2-2x-3=0
\iff(x-3)(x+1)=0.
\]
Candidats : x=3 ou x=−1. Seul x=3 respecte x≥0. Vérification :
\[
\sqrt{2(3)+3}=\sqrt9=3.
\]
Réponse : **x=3**.

Barème : domaine (2), résolution (2), rejet du candidat parasite et vérification (2).

### 3. Système (6 pts)

\[
\begin{cases}
2a+b=19,\\
a-2b=-1.
\end{cases}
\]
De la première équation b=19−2a. Substitution :
\[
a-2(19-2a)=-1
\iff5a=37
\iff a=7,4.
\]
Alors b=19−14,8=4,2.

Vérification : 2×7,4+4,2=19 ; 7,4−2×4,2=−1. Réponse : **(a,b)=(7,4 ; 4,2)**.

Barème : substitution ou méthode équivalente (3), résultats (1), vérification (2).

## Partie F — Fonctions, composition et représentation (12 points)

### 1. Composition (4 pts)

\[
(t\circ k)(x)=t(1,25x)=6+0,8(1,25x)=6+x.
\]
La quantité source x est convertie, puis valorisée. Le tarif final est 6 € de frais fixes plus 1 € par unité source.

### 2. Proportionnalité (2 pts)

Non. Une relation proportionnelle est de la forme y=mx et passe par l'origine. Ici, l'ordonnée à l'origine vaut 6 ; la fonction est affine.

### 3. Antécédent de 26 (3 pts)

\[
6+x=26\implies x=20.
\]
L'antécédent est 20 unités sources.

### 4. Unités (3 pts)

La pente vaut 1 euro par unité source ; l'ordonnée à l'origine vaut 6 euros, correspondant au forfait. Les unités rendent l'interprétation économique explicite.

## Partie G — Cas intégré (16 points)

### 1. Fréquences (5 pts)

Période 1 :
\[
48/800=0,06\text{ sinistre par année-contrat}.
\]
Période 2 :
\[
65/1000=0,065.
\]
Variation relative :
\[
0,065/0,06-1\approx0,083333=8,33\%.
\]

Barème : fréquences (3), variation relative (2).

### 2. Charges et variation (4 pts)

Période 1 : 48×500=**24 000 €**.  
Période 2 : 65×520=**33 800 €**.  
Variation relative :
\[
33800/24000-1\approx0,408333=40,83\%.
\]

Barème : charges (2), variation (2).

### 3. Décomposition séquentielle (3 pts)

En changeant d'abord le nombre de sinistres au coût initial :
\[
(65-48)\times500=8\,500\text{ €}.
\]
Puis en changeant le coût moyen sur 65 sinistres :
\[
65\times(520-500)=1\,300\text{ €}.
\]
Total : 8 500+1 300=9 800 €, égal à 33 800−24 000.

Cette décomposition est exacte mais dépend de l'ordre choisi. Avec l'ordre inverse, l'effet d'interaction est attribué différemment.

### 4. Indice base 100 (2 pts)

Période 1 = 100. Période 2 :
\[
100\times\frac{33800}{24000}=140,8333.
\]
L'indice indique une hausse de charge de 40,83 % entre les deux périodes.

### 5. Limites (2 pts)

Réponses possibles : seulement deux périodes ; absence de segmentation ; variation du mix ; définition des sinistres susceptible de changer ; absence d'intervalle d'incertitude ; événements exceptionnels ; données agrégées qui masquent l'hétérogénéité. Deux limites distinctes sont attendues.

---

## Grille synthétique de notation

| Partie | Compétence dominante | Points |
|---|---|---:|
| A | Ensembles, bornes et approximation | 12 |
| B | Rapports, unités et proportionnalité | 14 |
| C | Variations composées et indices | 14 |
| D | Modèles exponentiels et logarithmes | 14 |
| E | Algèbre et résolution | 18 |
| F | Fonctions et composition | 12 |
| G | Synthèse quantitative et esprit critique | 16 |
| **Total** |  | **100** |

## Interprétation pédagogique indicative

- 90–100 : maîtrise très solide ; capacité à expliquer et transférer les méthodes.
- 80–89 : maîtrise satisfaisante ; quelques erreurs locales à corriger.
- 70–79 : bases acquises mais plusieurs points nécessitent une reprise ciblée.
- 60–69 : maîtrise fragile ; reprendre les chapitres déficitaires avant le bloc suivant.
- moins de 60 : reprendre les fondations et refaire l'examen après remédiation.

Ces seuils sont une proposition pédagogique pour le cursus, non une norme académique universelle. Une erreur de domaine, de dénominateur ou d'unité doit être traitée comme une erreur conceptuelle, même si le résultat numérique paraît plausible.
