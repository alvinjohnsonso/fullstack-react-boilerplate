FROM node:current-slim
WORKDIR /app
COPY package.json .

# install all packages first
RUN npm install && npm run postinstall

COPY . .

RUN if [ "${NODE_ENV}" != "development" ]; then npm run build; fi

CMD if [ "${NODE_ENV}" != "development" ]; then npm start; else npm run dev; fi