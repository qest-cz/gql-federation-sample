FROM node:16.14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install & npm install ajv && npm cache clean --force
COPY . .
RUN yarn prisma generate --schema=./libs/supergraph-manager/prisma/schema.prisma
RUN npx nx build update-supergraph-manager
RUN npm prune --production
CMD ["node", "dist/apps/update-supergraph-manager/main.js"]