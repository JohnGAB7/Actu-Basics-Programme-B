# F08 — Repères, graphiques, unités et notation scientifique

## Objectifs
Lire et construire un repère, interpréter coordonnées et pentes, choisir un graphique adapté, convertir des unités, utiliser la notation scientifique et repérer les représentations trompeuses.

## 1. Repère cartésien
Un point du plan est décrit par (x,y). L'axe horizontal porte les abscisses, le vertical les ordonnées. L'origine et les échelles influencent la lecture. La distance entre A(x1,y1) et B(x2,y2) vaut √((x2−x1)²+(y2−y1)²).

## 2. Pente
Pour deux points distincts d'abscisses différentes, la pente m=(y2−y1)/(x2−x1). Elle exprime une variation de y par unité de x et possède donc une unité. Une pente ne démontre pas une causalité.

## 3. Choisir un graphique
- Courbe : évolution temporelle ou relation continue.
- Barres : comparaison de catégories.
- Histogramme : distribution quantitative ; l'aire des rectangles représente l'effectif ou la fréquence selon la convention.
- Nuage de points : relation entre deux variables quantitatives.
- Boîte à moustaches : médiane, quartiles et dispersion.
- Secteurs : parts d'un total, avec prudence si les catégories sont nombreuses.

Nommer les axes, préciser unités, période, population et source.

## 4. Échelles et pièges
Une échelle verticale tronquée peut amplifier visuellement un écart. Une échelle logarithmique représente des rapports plutôt que des différences absolues. Les doubles axes peuvent suggérer artificiellement une relation. Un graphique descriptif ne démontre ni causalité ni significativité statistique.

## 5. Unités et analyse dimensionnelle
On additionne des grandeurs de même dimension, pas des euros et des kilomètres. 1 h=60 min ; 1 km=1 000 m ; 1 m³=1 000 L ; 1 %=0,01. Une vitesse est une distance divisée par un temps. Attention : 2 h 30 = 2,5 h et non 2,30 h.

## 6. Notation scientifique
Un nombre non nul s'écrit a×10^n avec 1≤|a|<10 et n entier. 0,000072 = 7,2×10^−5. L'ordre de grandeur est une échelle approximative utile pour détecter les résultats absurdes.

## 7. Exemple intégré
Une base contient 12 000 contrats et 360 sinistres. Le ratio sinistres/contrats est 3 % sur la période. Pour comparer les mois, documenter le dénominateur : contrats observés, contrats-années ou autre exposition. Le nombre brut de sinistres ne suffit pas.

## 8. Atelier logiciel
Python : matplotlib permet de tracer les fréquences mensuelles ; nommer les axes et afficher les unités. R : plot avec type="b" permet de représenter points et lignes ; définir les étiquettes d'axes. Excel : calculer d'abord les ratios, puis créer un graphique XY ou temporel ; ne pas comparer des nombres bruts si les expositions diffèrent. VBA : convertir km/h en m/s en divisant par 3,6.

## 9. Exercices corrigés
1. Pente entre (2,5) et (6,13) : 2 unités de y par unité de x.
2. 72 km/h en m/s : 20 m/s.
3. 0,00000456 en notation scientifique : 4,56×10^−6.
4. Axe vertical commençant à 95 pour comparer 100 et 110 : risque d'exagération visuelle.
5. 30 sinistres pour 1 000 expositions contre 40 pour 2 000 : fréquences 3 % et 2 % ; le brut augmente mais le taux diminue.

## Maîtrise attendue
Produire un graphique fidèle, contrôler les unités, convertir les vitesses et durées, interpréter une pente et utiliser les ordres de grandeur comme contrôle.

## Références
- NIST SI Units : https://www.nist.gov/pml/owm/metric-si/si-units
- UK Office for National Statistics, methodology : https://www.ons.gov.uk/methodology
- Matplotlib documentation : https://matplotlib.org/stable/
