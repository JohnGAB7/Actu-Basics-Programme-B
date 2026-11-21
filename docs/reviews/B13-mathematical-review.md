# B13 — Revue mathématique multivariée (première passe)

**Date :** 21 novembre 2026  
**Périmètre :** MV01–MV10, covariance, distance de Mahalanobis, Hotelling, MANOVA, ACP, facteurs, corrélation canonique, discrimination, clustering et grande dimension.  
**Statut :** revue interne assistée par IA ; la formule Roy a été corrigée dans cette passe ; comparaison logicielle et revue humaine indépendante encore requises.

## Synthèse

Les unités MV01–MV10 présentent une structure mathématique cohérente dans l'ensemble. Une erreur importante a toutefois été détectée dans la première version du complément MANOVA MV04 : le cas exact de Roy pour une réponse univariée p=1 et q>1 était traité avec la formule du cas q=1. Cette erreur est corrigée et un contrôle de réduction à l'ANOVA univariée a été ajouté.

## Revue par unité

| Unité | Résultats contrôlés | Conclusion |
|---|---|---|
| MV01 | Moyenne/covariance, centrage, dimensions, rang et PSD | Formules correctes ; rang ≤ min(p,n−1) et perte de semi-définie positivité possible avec covariance pairwise correctement signalés. |
| MV02 | Distance de Mahalanobis, ellipsoïdes et loi khi-deux | Loi χ²_p correcte si μ et Σ sont connus et sous normalité ; la distance avec paramètres estimés n'a pas cette loi exacte en général. |
| MV03 | Test T² de Hotelling et ellipsoïde de confiance | Transformation ((n-p)T²/[p(n-1)]sim F_{p,n-p}) correcte sous normalité multivariée, indépendance et S inversible. |
| MV04 | H/E, racines, Wilks, Pillai, Hotelling–Lawley et Roy | Une erreur Roy a été trouvée et corrigée ; détails ci-dessous. Les autres formules ont été contrôlées par substitution dans le cas univarié. |
| MV05 | ACP, valeurs propres, variance expliquée et choix de dimension | Problème de maximisation sous contrainte et exemple spectral contrôlés ; covariance vs corrélation bien distinguées. |
| MV06 | Modèle factoriel, communalités, spécificité, rotations et identifiabilité | Structure du modèle correcte ; invariance par rotation et nécessité de contraintes d'identification explicitées. |
| MV07 | Corrélation canonique et problème aux valeurs propres | Équations de normalisation et problème généralisé cohérents ; sensibilité aux valeurs aberrantes signalée. |
| MV08 | LDA/QDA, densités gaussiennes et frontières | Discriminants corrects sous hypothèses de covariance ; estimation et validation hors échantillon à contrôler. |
| MV09 | K-means, clustering hiérarchique, distances et Ward | Objectifs et limites corrects ; la stabilité et l'interprétation ne sont pas assimilées à une découverte de groupes naturels. |
| MV10 | Covariance shrinkage, p≥n, précision et graphes gaussiens | Problème de singularité et régularisation cohérents ; interprétation des arêtes conditionnelles correctement nuancée. |

## Correction critique — transformation F de Roy

Notations : p = nombre de variables réponses, q = degrés de liberté de l'hypothèse, v = degrés de liberté résiduels, Θ = plus grande racine de (E^{-1}H), d = max(p,q).

La transformation est
[
F_{Roy}=Thetarac{v-d+q}{d},
qquad df_1=d,quad df_2=v-d+q.
]
Elle est exacte lorsque min(p,q)=1. Pour p=1, elle donne (F=Theta v/q), avec (q,v) degrés de liberté, ce qui doit coïncider avec l'ANOVA univariée. Pour q=1, elle donne (F=Theta(v-p+1)/p), avec (p,v-p+1) degrés de liberté.

Lorsque min(p,q)>1, cette transformation est une borne supérieure F ; la p-value associée est une borne inférieure et peut être trop optimiste. Il ne faut donc pas la rapporter comme une p-value exacte.

**Erreur détectée :** la première version appliquait (F=Theta(v-p+1)/p) aux deux cas p=1 ou q=1. Cette formule n'est correcte que pour q=1. Elle est corrigée dans MV04 et un contrôle numérique p=1, q=2, v=30, Θ=0,4 donne F=6 avec (2,30) ddl, comme l'ANOVA univariée.

La transformation de Wilks/Rao utilise t=1 par continuité dans les cas dégénérés (p,q)=(1,2) ou (2,1). Les formules de Pillai et Hotelling–Lawley ont été vérifiées dans le cas min(p,q)=1, où elles redonnent le F univarié. Le laboratoire B13 reçoit un helper `roy_f_bound` en Python et R, avec tests des deux cas exacts et du cas de borne.

## Enrichissements et traçabilité

- Les codes publics sont MV01–MV10 ; les chemins de fichiers historiques M01.md–M10.md restent mappés dans le lecteur.
- Les unités renvoient à S67–S71 et S158–S160.
- L'évaluation formative B13 inclut désormais l'interprétation des quatre critères et la prudence sur la borne de Roy.

## Points restant à tester

1. Comparer les quatre critères et leurs transformations F à R `manova`, SAS et Stata sur jeux synthétiques, dont p=1, q=1, p=2 et q=2.
2. Tester les cas de covariance résiduelle singulière, p≥n, tailles de groupes déséquilibrées et violation de normalité/covariances égales.
3. Recalculer les exercices/corrigés ACP, analyse factorielle, CCA et LDA/QDA.
4. Comparer shrinkage et graphical lasso à des bibliothèques de référence.
5. Revue humaine indépendante et tests apprenants.

**Conclusion :** MV01–MV10 sont cohérents dans cette première passe après correction de Roy. Cette revue démontre qu'une validation mathématique ciblée est nécessaire au-delà de la CI de rendu ; elle ne constitue pas une certification académique.


## Contrôle complémentaire du laboratoire

Le helper `roy_f_bound` est intégré aux laboratoires Python/R et testé pour p=1,q=2,v=30, pour q=1,p=3,v=30, pour un cas de borne et pour des degrés de liberté résiduels insuffisants. La condition v≥p est imposée avant le calcul, car E doit être inversible. Cela ne remplace pas une implémentation MANOVA complète.


## Contrôle de concordance des références — Roy

La réduction univariée est une vérification indépendante : lorsque p=1, H et E sont scalaires et Θ=H/E. Le test ANOVA associé à q degrés de liberté d'hypothèse est donc F=(H/q)/(E/v)=Θv/q, avec (q,v) degrés de liberté. La formule de borne publiée dans SAS/STAT (S171), d=max(p,q), donne exactement cette réduction.

**Divergence documentaire à ne pas masquer :** le manuel Stata référencé en S159 imprime, pour les cas p ou q=1, une autre formule exacte Θ(v-p+1)/p avec ddl (|q-p|+1, v-p+1). Pour p=1 et q>1, cette expression ne redonne pas Θv/q. Nous n'avons pas exécuté Stata sur un cas synthétique ; il peut s'agir d'une coquille documentaire, d'une convention différente non identifiée ou d'un problème de transcription. La PR ne revendique donc pas de validation croisée Stata sur ce cas. Il faut comparer explicitement un modèle univarié à q>1 à SAS, Stata et R avant de conclure.
