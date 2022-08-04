import { IntrospectAndCompose } from "@apollo/gateway";

const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
    serviceList: [
        { name: 'users', url: 'http://localhost:8080/graphql'},
        { name: 'articles', url: 'http://localhost:5000/graphql'}
    ]
})

const server = new ApolloServer({gateway, subscription: false })

server.listen({port: 9000}).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});