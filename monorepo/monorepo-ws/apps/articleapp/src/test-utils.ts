import { testServer} from '@monorepo-ws/server'; 
import { modules } from './schema/modules';
import { gql } from 'apollo-server';
import { GqlUser } from './schema/interfaces';

const testModules = [
    {
        typeDefs: gql`
            extend type Query{
            getUser: User!
           } 
        `,
        resolvers: {
            Query: {
                getUser: (): Pick<GqlUser, 'id'> => {
                    return {id: 1}
                }
            }
        }
    }
]

export const server = testServer([...modules, ...testModules])