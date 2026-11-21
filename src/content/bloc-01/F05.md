# F05 — Algèbre et manipulation des expressions

## Objectifs
Traduire une situation en expression, identifier variables et coefficients, réduire, développer, factoriser, utiliser les identités remarquables et simplifier les fractions algébriques sans perdre les restrictions de domaine.

## 1. Langage algébrique
Une variable représente une quantité susceptible de varier. Dans 3x²−5x+2, 3 et −5 sont des coefficients, 2 une constante. Les termes semblables ont la même partie littérale : 3x²+5x²=8x², mais 3x²+5x ne se réduit pas en un terme unique.

## 2. Distributivité
a(b+c)=ab+ac. Ainsi (2x−3)(x+4)=2x²+5x−12. La distributivité permet le développement et constitue la base des identités remarquables.

## 3. Identités remarquables
(a+b)²=a²+2ab+b² ; (a−b)²=a²−2ab+b² ; (a−b)(a+b)=a²−b². Le terme du milieu est souvent oublié lors du développement d'un carré.

## 4. Factorisation
Factoriser consiste à réécrire une somme comme produit. Exemples : 6x²+9x=3x(2x+3) ; x²−16=(x−4)(x+4). La factorisation facilite résolution d'équations, étude de signe et simplification.

## 5. Fractions algébriques
Une fraction rationnelle est un quotient de polynômes, défini lorsque son dénominateur est non nul. (x²−9)/(x−3)=x+3, mais uniquement pour x≠3. On simplifie des facteurs communs, jamais des termes additionnés séparément.

## 6. Modélisation
« Le triple d'une quantité diminué de 5 » devient 3x−5. « Le carré de la somme de x et 2 » devient (x+2)², différent de x²+2. Un coût avec fixe f et coût unitaire c pour q unités s'écrit C(q)=f+cq.

## 7. Atelier logiciel
Python avec SymPy : expand((2*x−3)*(x+4)), factor(x**2−16), simplify((x**2−9)/(x−3)). Conserver les restrictions de domaine même si le système simplifie l'expression.
R : le langage de base est numérique ; pour du symbolique, utiliser un outil spécialisé comme caracas ou effectuer les transformations à la main.
Excel : évaluer les expressions numériques dans des cellules clairement nommées ; Excel n'est pas un système de calcul formel.
VBA : une fonction quadratique peut retourner a*x^2+b*x+c pour des paramètres a,b,c.

## 8. Exercices corrigés
1. 4x−3+2x+7=6x+4.
2. (x−5)²=x²−10x+25.
3. 8x²−12x=4x(2x−3).
4. x²−25=(x−5)(x+5).
5. (x²−4)/(x−2)=x+2 avec x≠2.

## Maîtrise attendue
Expliquer chaque transformation, choisir une forme développée ou factorisée selon le but, conserver les restrictions de domaine et traduire correctement une description verbale.

## Références
- OpenStax Elementary Algebra 2e : https://openstax.org/details/books/elementary-algebra-2e
- SymPy documentation : https://docs.sympy.org/latest/
