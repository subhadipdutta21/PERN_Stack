FROM node

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001

CMD ["node", "gqlServer.js"]