import { exec } from 'child_process'
import {promisify} from "util"
import * as fs from 'fs'

const execPromisifed = promisify(exec)

export const tryCreatePartOfSupergraph = async() : Promise<Buffer> => {

        await createSubgraph(process.env.URL_USER_APP, process.env.SUBGRAPH_USER_APP)
        await createSubgraph(process.env.URL_ARTICLE_APP, process.env.SUBGRAPH_ARTICLE_APP)          
    try {
        return await createPartOfSupergraph()
    } catch (error) {
        throw new Error("creating part of supergraph failed!")
    }
}

const createSubgraph = async (url: string, fileName: string) => {
    const command: string = "rover subgraph introspect "+ url + " > " + process.env.SUBGRAPHS_LOCATION + fileName
    try{
        await execPromisifed(command)        
    } catch(err){
    }        
}

const createPartOfSupergraph = async (): Promise<Buffer> => {
    const command: string = "rover supergraph compose --config " + process.env.SUPERGRAPH_CONFIG_YML + " > " + process.env.SUPERGRAPH_FILE
    try{
        await execPromisifed(command)
        removeFile(process.env.SUBGRAPHS_LOCATION + process.env.SUBGRAPH_USER_APP)
        removeFile(process.env.SUBGRAPHS_LOCATION + process.env.SUBGRAPH_ARTICLE_APP)
        return new Promise<Buffer>((resolve) => {
            resolve((fs.readFileSync(process.env.SUPERGRAPH_FILE)))
        })
    } catch( err) {
        removeFile(process.env.SUBGRAPHS_LOCATION + process.env.SUBGRAPH_USER_APP)
        removeFile(process.env.SUBGRAPHS_LOCATION + process.env.SUBGRAPH_ARTICLE_APP)
        removeFile(process.env.SUPERGRAPH_FILE)
        throw new Error("Supergraph doesn't created!")
    }
}

const removeFile = (path: string) => {
    fs.unlink(path, (err) => {
        if(err){
            throw err
        }
    })
}

