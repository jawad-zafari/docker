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
   -------------------------------------------------
    ## Exécution du conteneur Super Mario
    docker run -d -p 8600:8080 --name mario1 pengbai/supermario
    ![docker run](<images/docker run.png>) 
     Exécuter un conteneur depuis Docker Desktop
     ![docker run](<images/docker run-desk.png>) 
     Host Port: 8700 - Container Port: 8080
    -------------------------------------------------
    
      
     
