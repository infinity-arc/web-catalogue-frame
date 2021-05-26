FROM node:12-alpine

WORKDIR /home/site/wwwroot
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 80

CMD  PORT=80 npm start