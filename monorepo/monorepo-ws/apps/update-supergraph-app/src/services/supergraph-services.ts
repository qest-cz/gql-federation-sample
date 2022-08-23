import { exec } from 'child_process'
import {promisify} from "util"
import { checkAndRemoveCreatedFile, checkNewSupergraph } from './file-services'
import * as config from '../configuration/config'

const execPromisifed = promisify(exec)

export const createSupergraph = async () => {
    const superGraphsDirectoru: string = config.supergraphLocation
    const newFilePath: string = superGraphsDirectoru + "supergraph" + Date.now().toString() + ".graphql"
    const command: string = "rover supergraph compose --config " + config.supergraphConfigYml + " > " + newFilePath
    try{
        await execPromisifed(command)
        return new Promise<String>((resolve) => {
            return resolve(newFilePath)
        })
    } catch( err) {
        checkAndRemoveCreatedFile(newFilePath)
        removeAllSubgraphFiles()
        throw new Error(err)
    }
}

 export const createAllSubgraphs = async () => {
    try {
        await createSubgraph(config.urlUserApp, config.subgraphUserApp)
        await createSubgraph(config.urlArticleApp, config.subgraphArticleApp)    
    } catch (err) {
        await removeAllSubgraphFiles()
        throw new Error("all apps aren't running!")
    }
}

 export const createSubgraph = async (url: string, fileName: string) => {
    const command: string = "rover subgraph introspect "+ url + " > " + config.subgraphsLocation + fileName
    try {
        await execPromisifed(command)        
    } catch (error) {
        throw new Error("error")
    }
}

export const removeAllSubgraphFiles = () => {
    checkAndRemoveCreatedFile(config.subgraphsLocation + config.subgraphUserApp)
    checkAndRemoveCreatedFile(config.subgraphsLocation + config.subgraphArticleApp)
}
