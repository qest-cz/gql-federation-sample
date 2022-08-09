import { testServer } from '@monorepo-ws/server';
import { gql } from 'apollo-server';
import { modules } from './resolvers/modules';
import { GqlUser } from './resolvers/interfaces';

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

export const server = testServer([...modules, ...testModules]);
