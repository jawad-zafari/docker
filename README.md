# Job-01
Vérification de l'installation
J'ai vérifié la version installée de Docker.
docker version
---------------------------------------
J'ai testé les commandes de base pour voir les informations du système et les conteneurs actifs.
docker info =  ![Capture d'écran de l'nfo](<images/docker info.png>)
docker ps   = ![Capture d'écran de la ps ](<images/docker ps.png>)
----------------------------------------
Récupération de l'image (Pull) 
docker pull docker/welcome-to-docker  = ![Capture d'écran de la pull](<images/docker pull docker.png>)
-----------------------------------------
Lancement du conteneur (Run)
docker run -it --rm -p 8086:80 docker/welcome-to-docker
![docker run](<images/docker run it.png>)
------------------------------------------
L'application fonctionne correctement sur
 http://localhost:8081
--------------------------------------------
Arrêter votre container = docker stop ID_conteneur(e81c6bdb4d84)
Supprimer votre container = docker rm ID_conteneur(e81c6bdb4d84)
Supprimer l'image Docker = docker rmi docker/welcome-to-docker
![capture d'ecran](<images/dock ps st rm rmi.png>)
--------------------------------------------
● Donner un exemple de ligne de commande pour ces actions
pour supprimer :
○ Un conteneur spécifique                    = docker rm ID_conteneur
○ Plusieurs conteneurs                       = docker rm ID1 ID2
○ Tous les conteneurs arrêtés                = docker container prune
○ Forcer la suppression d'un conteneur actif = docker rm -f ID_conteneur
○ Une image spécifique                       = docker rmi Nom_Image
○ Plusieurs images                           = docker rmi Image1 Image2
○ Toutes les images inutilisées              = docker image prune
○ Toutes les images non utilisées            = docker image prune -a
○ Forcer la suppression d'une image          = docker rmi -f Nom_Image
-----------------------------------------------------------------
# Correction
Dans la commande (docker pull),
## Correction = docker version
-------------------------------------------------------------------

