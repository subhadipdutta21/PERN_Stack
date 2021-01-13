FROM node:15.5.0-alpine3.10

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001

CMD ["node", "gqlServer.js"]