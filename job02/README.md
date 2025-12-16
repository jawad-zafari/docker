## Job 02
## L'objectif :
 Découvrir Docker de manière pratique en construisant, exécutant et modifiant une image Docker à partir d'un projet existant.(welcome-to-docker)

# Cloner le projet et ouvrir avec vscode;
# Analyse de Dockerfile
# Construction d'une image Docker
# Exécution d'un conteneur
# Modification du code
# Reconstruction et publication de l'image

---

## 🛠️ Technologies utilisées

* Docker
* Docker Hub
* Node.js 22 (Alpine)
* Serve
* Git & GitHub
* Visual Studio Code

----------------------------------------

## 📂 Structure du projet
welcome-to-docker/
│
├── Dockerfile
├── package.json
├── package-lock.json
├── src/
├── public/
├── images/
│   ├── 01-clone-project.png
│   ├── 02-docker-build.png
│   ├── 03-docker-run.png
│   ├── 04-container-running.png
│   ├── 05-code-modification.png
│   └── 06-dockerhub-push.png
└── README.md

---------------------------------------------

## 🚀 Étape 1 – Clonage du projet

Le projet a été cloné depuis GitHub à l'aide de la commande suivante :

```bash
git clone https://github.com/docker/welcome-to-docker.git
```

📸 *Capture d'écran du clonage du projet :*

![Clone project](images/01-clone-project.png)

---

## 📄 Étape 2 – Analyse du Dockerfile

Le fichier `Dockerfile` définit les étapes nécessaires pour construire l'image Docker.

Principaux points :

* Utilisation de l'image `node:22-alpine`
* Définition du dossier de travail `/app`
* Installation des dépendances
* Build de l'application
* Suppression des fichiers inutiles
* Exposition du port 3000

📸 *Capture d'écran du Dockerfile :*

![Dockerfile](images/02-docker-build.png)

---

## 🧱 Étape 3 – Construction de l'image Docker

L'image Docker a été construite avec la commande suivante :

```bash
docker build -t welcome-docker-job02 .
```

📸 *Capture d'écran de la construction de l'image :*

![Docker build](images/03-docker-run.png)

---

## ▶️ Étape 4 – Exécution du conteneur

Le conteneur a été lancé avec la commande suivante :

```bash
docker run -d -p 3000:3000 --name welcome-container welcome-docker-job02
```

Vérification du conteneur en cours d'exécution :

```bash
docker ps
```

📸 *Capture d'écran du conteneur actif :*

![Container running](images/04-container-running.png)

---

## ✏️ Étape 5 – Modification du code

Une modification simple a été apportée au projet (texte ou style) afin de vérifier la prise en compte des changements.

Après modification, l'image a été reconstruite et le conteneur relancé.

📸 *Capture d'écran de la modification du code :*

![Code modification](images/05-code-modification.png)

---

## ☁️ Étape 6 – Publication sur Docker Hub

L'image a été taguée et publiée sur Docker Hub :

```bash
docker tag welcome-docker-job02 monusername/welcome-docker-job02
docker push monusername/welcome-docker-job02
```

📸 *Capture d'écran de l'image sur Docker Hub :*

![Docker Hub](images/06-dockerhub-push.png)

---

## 👥 Travail à partir d'une image d'un autre étudiant

Une image Docker provenant d'un autre membre de la promotion a été récupérée, testée et modifiée.

> Image originale créée par : **@NomDeLEtudiant**

L'image modifiée a ensuite été publiée sur mon propre compte Docker Hub.

---

## ✅ Compétences acquises

* Création et exploitation d'une image Docker
* Modification et reconstruction d'une image existante
* Publication d'images sur Docker Hub
* Utilisation des commandes Docker essentielles

---

## 📎 Liens utiles

* [https://github.com/docker/welcome-to-docker](https://github.com/docker/welcome-to-docker)
* [https://www.docker.com/](https://www.docker.com/)
* [https://docs.docker.com/](https://docs.docker.com/)
* [https://hub.docker.com/](https://hub.docker.com/)

---

📌 *Projet réalisé dans le cadre de la formation – Paris* 🇫🇷
