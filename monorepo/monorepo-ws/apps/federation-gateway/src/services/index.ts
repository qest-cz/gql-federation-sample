import { exec } from 'child_process'
import {promisify} from "util"
import { checkAndRemoveCreatedFile, checkNewSupergraph } from './file-services'


const execPromisifed = promisify(exec)

export async function updateSuperGraph(){
    try {
        await createAllSubgraphs() 
        const newFilePath = await createSupergraph()
        await removeAllSubgraphFiles()
        return await checkNewSupergraph(newFilePath)
    } catch (error) {
        console.log("chyba XXXXXXXXXXXXXXXXXXXXX")
    }
}

async function createSupergraph(){
    const superGraphsDirectoru: string = process.env.SUPERGRAPH_LOCATION
    const newFilePath: string = superGraphsDirectoru + "supergraph" + Date.now().toString() + ".graphql"

    const command: string = "rover supergraph compose --config " + process.env.SUPERGRAPH_CONFIG_YML+ " > " + newFilePath

    try{
        await execPromisifed(command)
        return newFilePath
    } catch( err) {
        checkAndRemoveCreatedFile(newFilePath)
        removeAllSubgraphFiles()
        throw new Error("Creating supergraph failed!")
    }
}

async function createAllSubgraphs(){
    try {
        await createSubgraph(process.env.URL_USER_APP, process.env.SUBGRAPH_USER_APP)
        await createSubgraph(process.env.URL_ARTICLE_APP, process.env.SUBGRAPH_ARTICLE_APP)

    } catch (err) {
        await removeAllSubgraphFiles()
        throw new Error("all apps aren't running!")
    }
}

async function createSubgraph(url: string, fileName: string){
    const command: string = "rover subgraph introspect "+ url + " > " + process.env.SUBGRAPHS_LOCATION + fileName
    try {
        await execPromisifed(command)        
    } catch (error) {
        throw new Error("error")
    }
}

function removeAllSubgraphFiles(){
    checkAndRemoveCreatedFile(process.env.SUBGRAPHS_LOCATION + process.env.SUBGRAPH_USER_APP)
    checkAndRemoveCreatedFile(process.env.SUBGRAPHS_LOCATION + process.env.SUBGRAPH_ARTICLE_APP)
}


