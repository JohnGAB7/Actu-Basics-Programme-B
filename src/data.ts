export type Question = {
  id: number
  skill: string
  level: string
  prompt: string
  options: string[]
  answer: number
  explanation: string
}

export const questions: Question[] = [
  {
    id: 1, skill: 'Fractions & proportions', level: 'Fondamental',
    prompt: 'Une fréquence observée vaut 18 sinistres pour 120 contrats exposés. Quelle est sa valeur en pourcentage ?',
    options: ['12 %', '15 %', '18 %', '20 %'], answer: 1,
    explanation: 'La fréquence est 18 / 120 = 0,15, soit 15 %. Le dénominateur représente ici les contrats exposés.'
  },
  {
    id: 2, skill: 'Pourcentages & variations', level: 'Fondamental',
    prompt: 'Un montant de 200 € augmente de 10 %, puis diminue de 10 %. Quel est le montant final ?',
    options: ['200 €', '198 €', '202 €', '180 €'], answer: 1,
    explanation: 'Les coefficients multiplicateurs se composent : 200 × 1,10 × 0,90 = 198 €. Les variations opposées ne s’annulent pas.'
  },
  {
    id: 3, skill: 'Puissances & logarithmes', level: 'Intermédiaire',
    prompt: 'Pour x > 0, quelle expression est égale à ln(x²) ?',
    options: ['ln(x)²', '2 ln(x)', 'ln(2x)', 'x ln(2)'], answer: 1,
    explanation: 'La propriété ln(aᵇ) = b ln(a) donne ln(x²) = 2 ln(x), puisque x est strictement positif.'
  },
  {
    id: 4, skill: 'Équations', level: 'Fondamental',
    prompt: 'Résoudre 3(2x − 1) = 4x + 5.',
    options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'], answer: 2,
    explanation: '6x − 3 = 4x + 5, donc 2x = 8 et x = 4. La vérification dans l’équation initiale donne 21 = 21.'
  },
  {
    id: 5, skill: 'Fonctions', level: 'Intermédiaire',
    prompt: 'Soit f(x) = 2x² − 3x + 1. Quelle est la valeur de f(−2) ?',
    options: ['3', '7', '11', '15'], answer: 3,
    explanation: 'f(−2) = 2 × 4 − 3 × (−2) + 1 = 8 + 6 + 1 = 15.'
  },
  {
    id: 6, skill: 'Interprétation quantitative', level: 'Intermédiaire',
    prompt: 'Une prime passe de 800 € à 920 €. Quel est le taux d’évolution ?',
    options: ['12 %', '15 %', '18 %', '20 %'], answer: 1,
    explanation: '(920 − 800) / 800 = 120 / 800 = 0,15, soit une hausse de 15 %.'
  },
  {
    id: 7, skill: 'Raisonnement algébrique', level: 'Avancé',
    prompt: 'Si a/b = 3/5 et a + b = 64, quelle est la valeur de a ?',
    options: ['20', '24', '30', '40'], answer: 1,
    explanation: 'Posons a = 3k et b = 5k. Alors 8k = 64, donc k = 8 et a = 24.'
  },
  {
    id: 8, skill: 'Modélisation', level: 'Avancé',
    prompt: 'Un service facture 12 € de frais fixes et 3 € par dossier traité. Quelle fonction donne le coût total C(n) pour n dossiers ?',
    options: ['C(n) = 12n + 3', 'C(n) = 15n', 'C(n) = 12 + 3n', 'C(n) = 3(n + 12)'], answer: 2,
    explanation: 'Le coût comprend une partie fixe de 12 € et une partie variable de 3 € par dossier : C(n) = 12 + 3n.'
  },
]

export const blocks = [
  { code: 'B01', title: 'Fondations mathématiques et raisonnement quantitatif', subtitle: 'Nombres, calcul, algèbre, fonctions et précision', progress: 0, lessons: 8, tone: 'mint', status: '8 unités rédigées · draft' },
  { code: 'B02', title: 'Logique, preuves et mathématiques discrètes', subtitle: 'Logique, démonstrations, combinatoire et graphes', progress: 0, lessons: 8, tone: 'blue', status: '8 unités rédigées · draft' },
  { code: 'B03', title: 'Algèbre linéaire et géométrie vectorielle', subtitle: 'Espaces, matrices, projections et décompositions', progress: 0, lessons: 10, tone: 'violet', status: '10 unités intégrées · revue à poursuivre' },
  { code: 'B04', title: 'Analyse réelle et calcul à une variable', subtitle: 'Suites, limites, continuité, dérivation et intégration', progress: 0, lessons: 10, tone: 'amber', status: '10 unités publiées · revue indépendante requise' },
  { code: 'B05', title: 'Calcul multivarié et équations différentielles', subtitle: 'Gradient, hessienne, intégrales multiples et EDO', progress: 0, lessons: 10, tone: 'blue', status: '10 unités publiées · revue indépendante requise' },
  { code: 'B06', title: 'Optimisation et recherche opérationnelle', subtitle: 'Convexité, dualité, optimisation et décision', progress: 0, lessons: 10, tone: 'mint', status: '10 unités publiées · revue indépendante requise' },
  { code: 'B07', title: 'Analyse numérique et calcul scientifique', subtitle: 'Stabilité, erreurs, algorithmes et simulation', progress: 0, lessons: 10, tone: 'violet', status: '10 unités publiées · revue indépendante requise' },
  { code: 'B08', title: 'Probabilités', subtitle: 'Variables aléatoires, lois et convergence', progress: 0, lessons: 10, tone: 'amber', status: '10 unités publiées · revue indépendante requise' },
  { code: 'B09', title: 'Processus stochastiques', subtitle: 'Markov, Poisson, renouvellement et martingales', progress: 0, lessons: 10, tone: 'blue', status: '10 unités publiées · revue indépendante requise' },
  { code: 'B10', title: 'Statistique descriptive, échantillonnage et exploration', subtitle: 'Qualité des données, EDA et échantillonnage', progress: 0, lessons: 10, tone: 'mint', status: '10 unités publiées · revue indépendante requise' },
  { code: 'B11', title: 'Théorie de l\'inférence statistique', subtitle: 'Estimation, tests, intervalles et Bayes', progress: 0, lessons: 10, tone: 'violet', status: '10 unités publiées · revue interne seulement' },
  { code: 'B12', title: 'Régression et modèles statistiques', subtitle: 'Régression, ANOVA, GLM et diagnostics', progress: 0, lessons: 0, tone: 'amber', status: 'Planifié · contenu à développer' },
  { code: 'B13', title: 'Statistique multivariée et grande dimension', subtitle: 'ACP, modèles latents et grande dimension', progress: 0, lessons: 0, tone: 'blue', status: 'Planifié · contenu à développer' },
  { code: 'B14', title: 'Plans d\'expérience et inférence causale', subtitle: 'Randomisation, DAG et méthodes quasi expérimentales', progress: 0, lessons: 0, tone: 'mint', status: 'Planifié · contenu à développer' },
  { code: 'B15', title: 'Apprentissage statistique et machine learning', subtitle: 'Généralisation, modèles prédictifs et validation', progress: 0, lessons: 0, tone: 'violet', status: 'Planifié · contenu à développer' },
  { code: 'B16', title: 'Séries temporelles et prévision', subtitle: 'ARIMA, modèles d\'état et volatilité', progress: 0, lessons: 0, tone: 'amber', status: 'Planifié · contenu à développer' },
  { code: 'B17', title: 'Ingénierie des données et recherche reproductible', subtitle: 'SQL, pipelines, tests et reproductibilité', progress: 0, lessons: 0, tone: 'blue', status: 'Planifié · contenu à développer' },
  { code: 'B18', title: 'Actuariat, assurance et modélisation du risque', subtitle: 'Tarification, survie, provisionnement et capital', progress: 0, lessons: 0, tone: 'mint', status: 'Spécialisation planifiée' },
  { code: 'B19', title: 'Économétrie et statistiques financières', subtitle: 'Données de panel, endogénéité et risque financier', progress: 0, lessons: 0, tone: 'violet', status: 'Spécialisation planifiée' },
  { code: 'B20', title: 'Théorie statistique avancée et méthodes de recherche', subtitle: 'Asymptotique, processus empiriques et recherche', progress: 0, lessons: 0, tone: 'amber', status: 'Approfondissement planifié' },
]
