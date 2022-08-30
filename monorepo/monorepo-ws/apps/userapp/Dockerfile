FROM node:16.14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
ENV PORT=8080
EXPOSE ${PORT}
RUN npm install & npm install ajv
COPY . .
RUN yarn prisma generate --schema=./libs/prisma-user-app-client/prisma/schema.prisma
RUN npx nx build userapp
CMD ["node", "dist/apps/userapp/main.js"]