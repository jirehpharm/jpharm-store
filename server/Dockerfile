FROM node:bullseye-slim

WORKDIR /usr/src/app

COPY server/package*.json ./
COPY server/.env ./

RUN npm install

COPY server/ ./

RUN npm run build

EXPOSE 4001 

CMD ["node", "build/index.js"]