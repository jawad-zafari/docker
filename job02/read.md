## Job 02
## L'objectif :
 Découvrir Docker de manière pratique en construisant, exécutant et modifiant une image Docker à partir d'un projet existant.(welcome-to-docker)

# Cloner le projet et ouvrir avec vscode;
![clone](<images/git clone.png>)
-----------------------------------------------------------------------
# Analyse de Dockerfile
Node.js version 22 a été utilisé
avec la distribution Alpine Linux (légère et rapide) comme image de base.

WORKDIR /app
Toutes les commandes suivantes seront exécutées dans le dossier /app.
Le dossier /app est défini comme le répertoire principal de l'application.

COPY package.json ./
Les fichiers du package sont copiés avant le code principal afin de gérer les dépendances.

COPY ./src ./src

COPY ./public ./public
Le code source et les fichiers publics sont déplacés dans le conteneur.

npm install          ➜ Installer les dépendances
npm install -g serve ➜ Installer serve pour exécuter le build
npm run build        ➜ Compiler la version finale (production)
rm -fr node_modules  ➜ Supprimer les dépendances pour réduire la taille de l'image

EXPOSE 3000  ➜  Déclarez que l'application s'exécute sur le port 3000.
CMD [ "serve", "-s", "build" ]   ➜   docker run ...
---------------------------------------------------------------------
# Construction d'une image Docker
  docker build -t welcome-docker-job02 .
  ![build](<images/docker build.png>)

  Vérifier l'image créée = docker images
  ![docker images](<images/docker images.png>)
---------------------------------------------------------------------
# Exécution d'un conteneur
  docker run -d -p 3000:3000 --name welcome-container welcome-docker-job02
  
---------------------------------------------------------------------
# Modification du code
# Reconstruction et publication de l'image




-----------------------------------------------

------------------------------------------------------

----------------------------------------------------

------------------------------------------------
-----------------------------------------------
--------------------------------------------
docker build -t welcome-docker-job02 .
-------------------------------------------------
Vérification de l'image créée = docker images
![alt text](<docker images.png>)
--------------------------------------
Exécution du conteneur
docker run -d -p 3000:3000 --name welcome-container welcome-docker-job02
-----------------------------
verifier des conteneurs = docker ps
-------------------------------------------
Afficher le résultat Dans le navigateur : http://localhost:3000
--------------------------------------------------------------------
# Docker Job-02 – Welcome to Docker Part 2

## Step 1 – Clone Project
![clone](images/01-clone-project.png)

## Step 2 – Dockerfile Analysis
![dockerfile](images/02-dockerfile.png)

## Step 3 – Build Image
![build](images/03-docker-build.png)

## Step 4 – Run Container
![run](images/04-docker-run.png)

## Step 5 – Code Modification
![code](images/05-code-change.png)
-----------------------------------------------------------------
### Problème rencontré

Lors du lancement du conteneur, une erreur est apparue indiquant que le nom du conteneur était déjà utilisé.

### Solution appliquée

Le conteneur existant a été arrêté puis supprimé avant de relancer un nouveau conteneur avec le même nom.

```bash
docker stop welcome-container
docker rm welcome-container
docker run -d -p 3000:3000 --name welcome-container welcome-docker-job02
------------------------------------------------------------------------------------
docker login
docker tag welcome-docker-job02 jzafari100/welcome-docker-job02



