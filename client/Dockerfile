FROM node:bullseye-slim

WORKDIR /usr/src/app

COPY client/package*.json ./
RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "run", "dev" ]

# docker build -t jpharm-client .
# docker run -p 5000:4000 jpharm-client