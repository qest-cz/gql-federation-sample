import { server, corsSetup } from '@qest/express-utils';
import { logger } from './logger';
import { router } from './router';
import { ApolloServer} from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { DocumentNode } from 'graphql';
import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper';

export const listen = (port: number, apolo) => {
    router.use(apolo)
    const expressServer = server({
        logger,
        router,
        preMiddleware: [corsSetup('*')],   
    }, {
        useDefaultMiddlewares: true,
    });
    return expressServer
        .listen(port, () => {
            logger.info('[Express] Listening at ' + port);
        })
        .on('error', (e) => logger.error(e));
};

async function startApolloServer(typeDefs: DocumentNode, resolvers: GraphQLResolverMap) {      
    const server = new ApolloServer({
        schema: buildSubgraphSchema({typeDefs, resolvers}),
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });
    
    await server.start();
    return server.getMiddleware({path:'/graphql'});  
}

export async function runServer(port: number, typeDefs: DocumentNode, resolvers: GraphQLResolverMap){
    const apolo = await startApolloServer(typeDefs, resolvers);
    listen(port, apolo)
}


