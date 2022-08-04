import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express";
import {listen} from '@monorepo-ws/server'
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
  } from 'apollo-server-core';
import { typeDefs } from "./Schema/TypeDefs";
import { resolvers } from "./Schema/Resolvers";

async function startApolloServer(typeDefs: ApolloServerExpressConfig["typeDefs"], resolvers: ApolloServerExpressConfig["resolvers"]) {  
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });
    
    await server.start();
    //   server.applyMiddleware({ app:express, path:'/graphql' });  
    return server.getMiddleware({path:'/graphql'});  
}

export async function runUsersServer(port: number){
    const apolo = await startApolloServer(typeDefs, resolvers);
    listen(port, apolo)
}
