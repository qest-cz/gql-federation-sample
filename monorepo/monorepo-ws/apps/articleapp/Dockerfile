FROM node:16.14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
ENV PORT=9000
EXPOSE ${PORT}
RUN npm install
COPY ./dist ./dist
# CMD ["ls", "-la"]
CMD ["node", "dist/apps/articleapp/main.js"]