import { checkNumber, validStorage } from './utils';
import { Storage } from '@monorepo-ws/supergraph-manager';

export const urlUserApp: string = process.env.URL_USER_APP;
export const urlArticleApp: string = process.env.URL_ARTICLE_APP;
export const subgraphsLocation: string = process.env.SUBGRAPHS_LOCATION;
export const subgraphUserApp: string = process.env.SUBGRAPH_USER_APP;
export const subgraphArticleApp: string = process.env.SUBGRAPH_ARTICLE_APP;
export const supergraphConfigYml: string = process.env.SUPERGRAPH_CONFIG_YML;
export const supergraphLocation: string = process.env.SUPERGRAPH_LOCATION;
export const supergraphFile: string = process.env.SUPERGRAPH_FILE;
export const interval: number = checkNumber(process.env.INTERVAL);
export const supergraphFileName: string = process.env.SUPERGRAPH_FILE_NAME;
export const storage: Storage = validStorage(process.env.STORAGE);
