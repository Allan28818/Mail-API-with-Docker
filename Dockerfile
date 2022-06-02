FROM node:16

WORKDIR /usr/src

COPY package*.json ./

RUN yarn 

COPY . .

EXPOSE 3333

RUN yarn build

CMD ["yarn", "start"]