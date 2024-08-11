FROM node:20-alpine
WORKDIR /server
COPY package*.json .
RUN npm i
RUN npm i nodemon
CMD ["npm","start"]

