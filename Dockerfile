

FROM node:alpine
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install /app/
COPY . /app
CMD [ "npm", "start", "--prefix", "/app" ]

