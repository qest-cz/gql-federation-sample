import { runServer } from '@monorepo-ws/server';
import { UserDataSource } from './data-sources/user-data-source';
import { modules } from './resolvers/modules';
import { Context } from 'apollo-server-core';
import { DataSources as ApolloDataSources } from 'apollo-server-core/dist/graphqlOptions';
import { prisma } from './services/user-services'
import { IUserDataSource } from './data-sources/interfaces';

export interface DataSources extends ApolloDataSources<Context> {
    user: IUserDataSource
}

const port: number = Number(process.env.PORT);

runServer(port, modules, (): DataSources => ({user: new UserDataSource(prisma)}));
