import { IntrospectAndCompose } from "@apollo/gateway";
import { environment } from "./environments/environment";

const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
    serviceList: [
        // { name: 'users', url: environment.USER_APP_URL},        
        // { name: 'articles', url: environment.ARTICLE_APP_URL}
        { name: 'users', url: process.env.URL_USER_APP},
        { name: 'articles', url: process.env.URL_ARTICLE_APP}
    ]
})

const server = new ApolloServer({gateway, subscription: false })

server.listen({port: process.env.PORT}).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});