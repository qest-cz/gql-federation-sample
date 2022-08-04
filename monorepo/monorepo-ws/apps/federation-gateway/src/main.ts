import { IntrospectAndCompose } from "@apollo/gateway";
import { environment } from "./environments/environment";

const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
    serviceList: [
        // { name: 'users', url: 'http://localhost:8080/graphql'},
        // { name: 'articles', url: 'http://localhost:5000/graphql'}
        { name: 'users', url: environment.USER_APP_URL},
        { name: 'articles', url: environment.ARTICLE_APP_URL}
    ]
})

const server = new ApolloServer({gateway, subscription: false })

server.listen({port: environment.PORT}).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});