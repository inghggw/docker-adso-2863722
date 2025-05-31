FROM node:24.1-slim

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 3333

CMD ["npm", "start"]
