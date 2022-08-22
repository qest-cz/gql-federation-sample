import { runServer } from '@monorepo-ws/server';
import { modules } from './resolvers/modules';
import { DataSources as ApolloDataSources } from 'apollo-server-core/dist/graphqlOptions';
import { Context } from 'apollo-server-core';
import { PrismaArticleDataSource } from './data-sources/prisma-article-data-source';
import { prisma } from './services/article-services';
import { ArticleDataSource } from './data-sources/interfaces';

export interface DataSources extends ApolloDataSources<Context>{
    article: ArticleDataSource
}

const port: number = Number(process.env.port);
runServer(port, modules, (): DataSources => ({article: new PrismaArticleDataSource(prisma)}));
