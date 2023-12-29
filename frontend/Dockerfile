# Dockerfile

# Pull the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /frontend

# Copy app dependencies to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files to container - after npm i
COPY public/ ./public
COPY src/ ./src
COPY .env ./

# Deploy app for local development
#CMD npm start

# Build app for prod
RUN npm run build

RUN npm install -g serve