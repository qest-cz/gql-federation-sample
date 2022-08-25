import { Storage } from "@monorepo-ws/supergraph-manager"
import { checkNumber, validStorage } from "./utils"

export const port: number = checkNumber(process.env.PORT) 
export const urlUserApp: string = process.env.URL_USER_APP
export const urlArticleApp: string = process.env.URL_ARTICLE_APP
export const subraphsLocation: string = process.env.SUBGRAPHS_LOCATION
export const subgraphUserApp: string = process.env.SUBGRAPH_USER_APP
export const subgraphArticleApp: string = process.env.SUBGRAPH_ARTICLE_APP
export const supergraphConfigYml: string = process.env.SUPERGRAPH_CONFIG_YML
export const supergraphLocation: string = process.env.SUPERGRAPH_LOCATION
export const superGraphFile: string = process.env.SUPERGRAPH_FILE
export const superGraphFileName: string = process.env.SUPERGRAPH_FILE_NAME
export const interval: number = checkNumber(process.env.INTERVAL)
export const storage: Storage = validStorage(process.env.STORAGE)