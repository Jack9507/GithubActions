FROM node:20-alpine

WORKDIR /nodejs/app

COPY ./package.json ./
RUN npm install

COPY ./index.js ./
COPY ./ChoiceGame.html ./

EXPOSE 8080

CMD ["node", "index.js"]

