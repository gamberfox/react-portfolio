FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY index.html ./
COPY vite.config.ts ./

RUN npm install

COPY src/ ./src/
COPY public/ ./public/


RUN npm run build

EXPOSE 3000

CMD [ "npm","run","dev" ]