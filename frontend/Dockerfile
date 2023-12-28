# Dockerfile

# Pull the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /frontend

#COPY application files
COPY public/ ./public
COPY src/ ./src

# Copy app dependencies to container
# COPY ./package*.json ./
COPY package*.json ./

# Add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Deploy app for local development
#CMD npm start

RUN npm run build

RUN npm install -g serve