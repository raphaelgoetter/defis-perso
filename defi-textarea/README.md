# Défi textarea

Source : <https://github.com/alsacreations/defis/tree/main/defis/textarea>

Timing :

- 5min = config du projet (clone, .editorconfig, `.copilot-instructions.md`, etc.)
- 5min = Correction de l'erreur Prettier (balise `body` non fermée + indentation)
- 10min = Correction des CSS pour être conforme à nos guidelines (oui, ce n'était pas nécessaire, mais respecter les guidelines c'est la base)
- 30min = Ajout de la fonctionnalité de compteur (via Copilot - Claude 3.5 Sonnet)

Total : 50min

Détail des prompts :

> pourquoi y a-t-il une erreur de Prettier dans ce fichier ?

> Peux-tu remplacer toutes les couleurs par des variables ? (pense à respecter la convention de nommage dans les instructions du fichier copilot). Fais la même chose pour les valeurs en rem

> Peux-tu créer un script qui compte le nombre de caractères saisis au clavier en direct. Quand on s'approche du nombre maximal (200 sur 250 caractères), alors le signaler visuellement. Quand le nombre maximal est atteint (250 caractères), bloquer la saisie et le signaler. Consignes principales : en JavaScript vanilla moderne + le résultat doit être parfaitement accessible (attributs ARIA, informations pas uniquement véhiculées par la couleur, etc.)

> en suffixe du compteur, ajouter le texte "caractères" mais masqué visuellement (classe .visually-hidden). en suffixe ajouter également le texte "(limite atteinte)" lorsque c'est le cas (classe .visually-hidden)

> warningThreshold doit correspondre à 90% de maxLength
