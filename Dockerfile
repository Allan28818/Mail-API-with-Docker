FROM node:16

RUN mkdir /src

WORKDIR /src

COPY package*.json .
COPY .env .
COPY /prisma .

RUN yarn 

COPY . .

EXPOSE 3333

RUN yarn build

CMD ["yarn", "start"]