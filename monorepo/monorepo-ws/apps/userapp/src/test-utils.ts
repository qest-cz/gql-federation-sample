import { gql } from 'apollo-server';
import { testServer} from '@monorepo-ws/server'; 
import { modules } from './schema/modules';

export const server = testServer(modules)
