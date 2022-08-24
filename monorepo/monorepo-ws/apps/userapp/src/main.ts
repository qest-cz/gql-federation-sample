import { runServer } from '@monorepo-ws/server';
import { PrismaUserDataSource } from './data-sources/prisma-user-data-source';
import { modules } from './resolvers/modules';
import { Context } from 'apollo-server-core';
import { DataSources as ApolloDataSources } from 'apollo-server-core/dist/graphqlOptions';
import { prisma } from './services/user-services'
import { UserDataSource } from './data-sources/interfaces';
import { port } from './configuration/config';

export interface DataSources extends ApolloDataSources<Context> {
    user: UserDataSource
}

runServer(port, modules, (): DataSources => ({user: new PrismaUserDataSource(prisma)}));
