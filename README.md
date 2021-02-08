## How to run

Make sure you have docker, docker-compose, PHP and composer installed

PHP version =^8.0

From the project root directory run commands below

```bash
composer install
php artisan --env=migrations migrate --seed
docker-compose up
```

Project will run on localhost (port 80)
