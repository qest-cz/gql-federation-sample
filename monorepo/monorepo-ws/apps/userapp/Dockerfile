FROM node:16.14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
ENV PORT=8080
EXPOSE ${PORT}
RUN npm install && npm cache clean --force
COPY . .
RUN yarn prisma generate --schema=./libs/prisma-user-app-client/prisma/schema.prisma
RUN npx nx build userapp
RUN npm prune --production
CMD ["node", "dist/apps/userapp/main.js"]