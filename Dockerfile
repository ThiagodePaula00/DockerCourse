FROM node:26-slim

WORKDIR /app

COPY . .

RUN npm install

VOLUME /app/node_modules

EXPOSE 3000

CMD ["npm", "run", "dev"]