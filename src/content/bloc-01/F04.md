# F04 — Puissances, racines et logarithmes

## Objectifs
Maîtriser les règles des puissances, interpréter les racines, comprendre le logarithme comme fonction réciproque de l'exponentielle, respecter les domaines et résoudre des équations simples.

## 1. Puissances
Pour a non nul et m,n entiers : a^m×a^n=a^(m+n) ; a^m/a^n=a^(m−n) ; (a^m)^n=a^(mn) ; (ab)^n=a^n b^n. De plus a^0=1 et a^(−n)=1/a^n. Les exposants rationnels demandent des précautions de domaine, notamment pour les bases négatives et les racines paires.

## 2. Racines
La racine carrée réelle √a est définie pour a≥0 et désigne la racine non négative. Ainsi √(x²)=|x|, et non toujours x. Les règles √(ab)=√a√b et √(a/b)=√a/√b sont valables sous les conditions de positivité appropriées.

## 3. Exponentielle et logarithme
La fonction e^x est strictement positive et vérifie e^(x+y)=e^x e^y. Le logarithme népérien ln est sa réciproque : domaine ]0,+∞[ ; ln(e^x)=x ; e^(ln x)=x pour x>0.
Pour a,b>0 : ln(ab)=ln(a)+ln(b) ; ln(a/b)=ln(a)−ln(b) ; ln(a^r)=r ln(a). Le logarithme en base b, avec b>0 et b≠1, vaut log_b(x)=ln(x)/ln(b).

## 4. Équations
2^x=16 donne x=4. e^(2x)=7 donne x=ln(7)/2. ln(x−1)=2 impose x>1 puis x=1+e². Ne jamais prendre le logarithme réel d'une quantité non positive.

## 5. Croissance
Une croissance discrète à taux constant r suit Vn=V0(1+r)^n. Une croissance continue suit V(t)=V0 e^(kt). Le taux discret r et le taux continu k ne sont pas identiques. Les logarithmes transforment les produits en sommes et facilitent l'étude de grandeurs couvrant plusieurs ordres de grandeur.

## 6. Exemples
3²×3^(−4)=1/9. √((-7)²)=7. ln(5x)=ln(5)+ln(x) pour x>0. Si un capital double en 8 ans à taux annuel discret constant, r=2^(1/8)−1.

## 7. Atelier logiciel
Python : math.log, math.exp et puissance ** ; exemple rate=2**(1/8)-1.
R : log(x), exp(x), et 2^(1/8)-1.
Excel : LN, EXP, PUISSANCE et RACINE, selon la langue de l'application.
VBA : Exp(k*t) pour l'exponentielle ; contrôler le domaine avant d'évaluer un logarithme.

## 8. Exercices corrigés
1. 5³/5^(−1)=5⁴=625.
2. 4^x=32 : x=2,5.
3. ln(2x+1)=0 : domaine x>−1/2 ; solution x=0.
4. ln(a²)=2ln|a| pour a non nul ; 2ln(a) exige a>0.

## Maîtrise attendue
Justifier les règles, vérifier les domaines, différencier croissance discrète et continue et interpréter une échelle logarithmique.

## Références
- OpenStax Algebra and Trigonometry 2e : https://openstax.org/details/books/algebra-and-trigonometry-2e
- NIST Digital Library of Mathematical Functions : https://dlmf.nist.gov/
