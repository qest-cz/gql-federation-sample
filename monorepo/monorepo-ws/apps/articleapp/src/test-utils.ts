import { testServer } from '@monorepo-ws/server';
import { gql } from 'apollo-server';
import { modules } from './resolvers/modules';
import { GqlUser } from './resolvers/interfaces';
import { DataSources } from './main'; 
import { FakePrismaArticleDataSource } from './data-sources/fake-prisma-article-data-source';

const testModules = [
  {
    typeDefs: gql`
      extend type Query {
        getUser: User!
      }
    `,
    resolvers: {
      Query: {
        getUser: (): Pick<GqlUser, 'id'> => {
          return { id: 1 };
        },
      },
    },
  },
];

export const server = testServer([...modules, ...testModules], (): DataSources => ({article: new FakePrismaArticleDataSource()}));