import { Storage } from '@monorepo-ws/supergraph-manager';
import { checkNumber, validStorage } from './utils';

export const port: number = checkNumber(process.env.PORT || 80);
export const supergraphLocation: string =
  process.env.SUPERGRAPH_LOCATION ||
  './apps/federation-gateway/src/services/supergraphs/';
export const supergraphFile: string =
  process.env.SUPERGRAPH_FILE ||
  "'./apps/federation-gateway/src/services/supergraphs/supergraph.graphql'";
export const supergraphFileName: string =
  process.env.SUPERGRAPH_FILE_NAME || 'supergraph.graphql';
export const interval: number = checkNumber(process.env.INTERVAL || 60000);
export const storage: Storage = validStorage(process.env.STORAGE);
