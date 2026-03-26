FROM richarvey/nginx-php-fpm:latest

RUN rm -f /var/www/html/index.php

COPY index.html /var/www/html/
COPY save.php /var/www/html/
COPY results.json /var/www/html/

RUN chmod 777 /var/www/html/results.json

EXPOSE 80