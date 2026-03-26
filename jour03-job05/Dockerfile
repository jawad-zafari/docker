FROM webdevops/php-nginx:8.2

COPY index.html /app/

COPY save.php /app/

COPY results.json /app/

RUN chmod 777 /app/results.json

EXPOSE 80
