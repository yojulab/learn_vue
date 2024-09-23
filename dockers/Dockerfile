# Base image
FROM node:20

# Working directory
WORKDIR /apps

# Install Python 3
RUN apt-get update && apt-get install -y python3 python3-pip

# Clone repository
RUN git clone -b main https://github.com/yojulab/learn_vues

WORKDIR /apps/learn_vues

# Install dependencies
RUN npm install
