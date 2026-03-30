# Job 06 : Application Multi-conteneurs avec Docker Compose
## Description du Projet
L'objectif de ce projet est de déployer une application web complète composée de quatre services distincts (Base de données, Backend, Frontend, et Interface d'administration) en utilisant Docker Compose. Les conteneurs communiquent entre eux via un réseau Docker dédié, et les données de la base de données sont persistées à l'aide d'un volume.
## Architecture des Services
* **database** : Conteneur MySQL (Port 3306).
* **backend** : Serveur Node.js communicant avec la base de données (Port 3000).
* **nginx** : Serveur web Frontend basé sur Alpine (Port 8080).
* **adminer** : Interface graphique de gestion de base de données (Port 8081).
## Étapes de Réalisation
### 1. Configuration de Docker Compose
Création du fichier `docker-compose.yml` définissant les quatre services, le réseau interne (`app_network`), et le volume pour la persistance des données (`db_data`).
