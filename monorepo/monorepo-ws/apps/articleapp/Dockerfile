FROM node:16.14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
ENV PORT=9000
EXPOSE ${PORT}
RUN npm install & npm install ajv && npm cache clean --force
COPY . .
RUN yarn prisma generate --schema=./libs/prisma-article-app-client/prisma/schema.prisma
RUN npx nx build articleapp
RUN npm prune --production
CMD ["node", "dist/apps/articleapp/main.js"]