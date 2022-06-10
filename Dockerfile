FROM node:16

RUN mkdir /node-api

WORKDIR /node-api

COPY package*.json .
COPY .env .

RUN yarn 

COPY . .

EXPOSE 3333

RUN yarn build

CMD ["yarn", "start"]