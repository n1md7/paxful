## How to run

Make sure you have docker, docker-compose, PHP, composer, npm and node.js installed

PHP version =^8.0

From the project root directory run commands below

```bash
composer install
php artisan --env=migrations migrate
php artisan --env=migrations db:seed
npm install
npm run prod
docker-compose up
```

Project will run on localhost (port 80)
