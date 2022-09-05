FROM node:16.14
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force
RUN npm i -g @apollo/rover
COPY . .
RUN yarn prisma generate --schema=./libs/supergraph-manager/prisma/schema.prisma
RUN npx nx build update-supergraph-app
RUN npm prune --production
RUN apt-get update
RUN apt-get install curl -y
CMD ["node", "dist/apps/update-supergraph-app/main.js"]