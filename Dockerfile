FROM node:current-slim
WORKDIR /app
COPY package.json .

WORKDIR /app/client
COPY --chown=node:node ./client/package.json .

WORKDIR /app/server
COPY --chown=node:node ./server/package.json .

# install all packages first
WORKDIR /app
RUN npm install
RUN npm run postinstall

COPY . .

RUN if [ "${NODE_ENV}" != "development" ]; then npm run build; fi

CMD if [ "${NODE_ENV}" != "development" ]; then npm start; else npm run dev; fi