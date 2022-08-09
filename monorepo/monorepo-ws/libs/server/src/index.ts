import { server, corsSetup } from '@qest/express-utils';
import { logger } from './logger';
import { router } from './router';
import { ApolloServer} from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { DocumentNode } from 'graphql';
import { GraphQLResolverMap, GraphQLSchemaModule } from '@apollo/subgraph/dist/schema-helper';

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

async function startApolloServer(modules: GraphQLSchemaModule[]) {      
    const server = new ApolloServer({
        schema: buildSubgraphSchema(modules),
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });
    
    await server.start();
    return server.getMiddleware({path:'/graphql'});  
}

export function testServer(modules: GraphQLSchemaModule[]) {      
    return new ApolloServer({
        schema: buildSubgraphSchema(modules),
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });
}

export async function runServer(port: number, modules: GraphQLSchemaModule[]){
    const apolo = await startApolloServer(modules);
    listen(port, apolo)
}


