FROM node:16.14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
ENV PORT=5000
EXPOSE ${PORT}
RUN npm install && npm cache clean --force
COPY . .
RUN yarn prisma generate --schema=./libs/supergraph-manager/prisma/schema.prisma
RUN npx nx build federation-gateway
RUN npm prune --production
CMD ["node", "dist/apps/federation-gateway/main.js"]