FROM node:alpine3.18
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start" ]