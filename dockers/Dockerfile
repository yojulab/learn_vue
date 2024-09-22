# Base image
FROM node:20

# Working directory
WORKDIR /apps

RUN git clone -b main https://github.com/yojulab/learn_vues

WORKDIR /apps/learn_vues
# Install dependencies
RUN npm install
