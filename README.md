# Basic Dockerizing mern fullstack for development with hot reload 

## Frontend - React JS
## Backend - Node JS
## Database - MongoDb

## git clone 
## npm install for frontend before docker

In this project directory, you can run:
### OS ubuntu - 22.04 LTS
### `sudo docker-compose build`
### `sudo docker-compose up`

### DEV
### `sudo docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build`

### Production
### frontend serve static build
### rename frontend/.env_example to .env and change API_URL value to actual url 
### `sudo docker-compose up --build`
### demo video on deploying dockerized mern stack on AWS EC2 ubuntu 22.04
https://www.youtube.com/watch?v=MVT7X5Zqdow