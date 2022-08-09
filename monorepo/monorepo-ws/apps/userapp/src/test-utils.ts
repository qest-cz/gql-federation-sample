import { gql } from 'apollo-server';
import { testServer} from '@monorepo-ws/server'; 
import { modules } from './resolvers/modules';

export const server = testServer(modules)
