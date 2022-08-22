import { exec } from 'child_process'
import {promisify} from "util"
import { checkAndRemoveCreatedFile, checkNewSupergraph } from './file-services'

const execPromisifed = promisify(exec)

export const createSupergraph = async () => {
    const superGraphsDirectoru: string = process.env.SUPERGRAPH_LOCATION
    const newFilePath: string = superGraphsDirectoru + "supergraph" + Date.now().toString() + ".graphql"
    const command: string = "rover supergraph compose --config " + process.env.SUPERGRAPH_CONFIG_YML + " > " + newFilePath
    try{
        await execPromisifed(command)
        return new Promise<String>((resolve) => {
            return resolve(newFilePath)
        })
    } catch( err) {
        checkAndRemoveCreatedFile(newFilePath)
        removeAllSubgraphFiles()
        throw new Error("Creating supergraph failed!")
    }
}

 export const createAllSubgraphs = async () => {
    try {
        await createSubgraph(process.env.URL_USER_APP, process.env.SUBGRAPH_USER_APP)
        await createSubgraph(process.env.URL_ARTICLE_APP, process.env.SUBGRAPH_ARTICLE_APP)    
    } catch (err) {
        await removeAllSubgraphFiles()
        throw new Error("all apps aren't running!")
    }
}

 export const createSubgraph = async (url: string, fileName: string) => {
    const command: string = "rover subgraph introspect "+ url + " > " + process.env.SUBGRAPHS_LOCATION + fileName
    try {
        await execPromisifed(command)        
    } catch (error) {
        throw new Error("error")
    }
}

export const removeAllSubgraphFiles = () => {
    checkAndRemoveCreatedFile(process.env.SUBGRAPHS_LOCATION + process.env.SUBGRAPH_USER_APP)
    checkAndRemoveCreatedFile(process.env.SUBGRAPHS_LOCATION + process.env.SUBGRAPH_ARTICLE_APP)
}
