import { runServer } from '@monorepo-ws/server';
import { PrismaUserDataSource } from './data-sources/user-data-source';
import { modules } from './resolvers/modules';
import { Context } from 'apollo-server-core';
import { DataSources as ApolloDataSources } from 'apollo-server-core/dist/graphqlOptions';
import { prisma } from './services/user-services'
import { UserDataSource } from './data-sources/interfaces';

export interface DataSources extends ApolloDataSources<Context> {
    user: UserDataSource
}

const port: number = Number(process.env.PORT);

runServer(port, modules, (): DataSources => ({user: new PrismaUserDataSource(prisma)}));
