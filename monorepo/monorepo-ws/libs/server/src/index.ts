import { server, corsSetup } from '@qest/express-utils';
import { logger } from './logger';
import { router } from './router';
import { ApolloServer} from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault, Context } from 'apollo-server-core';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { GraphQLSchemaModule } from '@apollo/subgraph/dist/schema-helper';
import { DataSources } from 'apollo-server-core/dist/graphqlOptions';

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
            logger.info(`[Express] Listening at ${port}`);
        })
        .on('error', (e) => logger.error(e));
};

async function startApolloServer(modules: GraphQLSchemaModule[], dataSources: () => DataSources<Context>) {      
    const server = new ApolloServer({
        schema: buildSubgraphSchema(modules),
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
        dataSources
    });
    
    await server.start();
    return server.getMiddleware({path:'/graphql'});  
}

export function testServer(modules: GraphQLSchemaModule[], dataSources: () => DataSources<Context>) {      
    return new ApolloServer({
        schema: buildSubgraphSchema(modules),
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
        dataSources
    });
}

export async function runServer(port: number, modules: GraphQLSchemaModule[], dataSources: () => DataSources<Context>){
    const apolo = await startApolloServer(modules, dataSources);
    listen(port, apolo)
}


