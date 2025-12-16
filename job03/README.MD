## Job 03
## L'objectif :

 ## Rechercher le projet Docker de deux manières
 docker search docker-supermario
![docker search](<images/docker search.png>)
  Effectuer une recherche depuis Docker Desktop.
  ![docker search](<images/search image.png>)
  --------------------------------------------------
  ## Récupérer l'image Docker de deux manières
  docker pull pengbai/docker-supermario
  ![docker pull](<images/docker pull.png>)
   ![docker pull](<desktop pull.png>)
   -------------------------------------------------
   ## Vérification du téléchargement :
   docker images
    ![docker images](<images/docker images.png>)
    Exécution du conteneur Super Mario
    docker run -d -p 8600:8080 --name mario1 pengbai/supermario
    ![docker run](<images/docker run.png>) 
     Exécuter un conteneur depuis Docker Desktop
     ![docker run](<images/docker run-desk.png>) 
     Host Port: 8700 - Container Port: 8080
      ## verifier des conteneurs Docker
     docker ps
      ![docker ps](<images/docker ps.png>)
      ![docker ps](<images/docker ps-2.png>)
      ### Afficher dans le navigateur
      http://localhost:8600
      http://localhost:8700
      Exécution du deuxième conteneur
      docker run -d -p 8800:8080 --name mario2 pengbai/docker-supermario
      ![docker run](<images/docker run-2.png>)
      affichage
      ![affichage](images/affichage-3.png)
       ## Arrêter le conteneur
       Trouver ID de conteneur
      1- docker ps     2- Docker Desktop → Containers
      docker stop mario1
      docker stop <CONTAINER_ID>
      ![docker stop](<images/docker stop.png>)
      ![docker stop](<images/docker stop-2.png>)
      ## Supprimer le conteneur
      docker rm mario1
      docker rm mario2
      Docker Desktop → Containers → Delete
      ![docker rm](<images/docker rm.png>)
      ![docker rm](<images/docker rm-2.png>)
       ## Supprimer l'image
       docker rmi pengbai/docker-supermario
       ![docker rmi](<images/docker rmi.png>)
        Docker Desktop → Images → Delete
       ![docker rmi](<images/docker rmi-2.png>)
         
      
