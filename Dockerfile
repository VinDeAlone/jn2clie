

FROM node:alpine
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install /app/package.json
COPY . /app
CMD [ "npm", "start", "--prefix", "/app" ]

