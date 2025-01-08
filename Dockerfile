FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7200
CMD [ "npm" ,"run","dev"]
