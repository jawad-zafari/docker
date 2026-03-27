## Job 05 : Tic Tac Toe avec Docker et Volume

## Description du Projet

L'objectif de ce projet est de créer une image Docker et un volume pour héberger un jeu de morpion (Tic Tac Toe) et rendre la sauvegarde de ses résultats persistante.Les résultats sont stockés dans un volume dédié afin de ne pas être perdus à l'arrêt du conteneur.

## Fichiers du Projet
`index.html` : L'interface et la logique du jeu.
`save.php` : Le script serveur pour enregistrer les données.
`results.json` : Le fichier de base de données (initialisé vide `[]`).
`Dockerfile` : Le fichier de configuration pour construire l'image.

