import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs';


const superGraphSchema = readFileSync('./apps/federation-gateway/src/supergraph.graphql').toString()
const gateway = new ApolloGateway({
  // serviceList: [
  //   { name: 'users', url: process.env.URL_USER_APP },
  //   { name: 'articles', url: process.env.URL_ARTICLE_APP },
  // ],
  supergraphSdl: superGraphSchema
});

const server = new ApolloServer({ gateway });

server
  .listen({ port: process.env.PORT })
