import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: process.env.URL_USER_APP },
    { name: 'articles', url: process.env.URL_ARTICLE_APP },
  ],
});

const server = new ApolloServer({ gateway });

server
  .listen({ port: process.env.PORT })