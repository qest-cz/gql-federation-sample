import { exec } from 'child_process'
import {promisify} from "util"
import * as fs from 'fs'
import * as config from '../configuration/config'

const execPromisifed = promisify(exec)

export const tryCreatePartOfSupergraph = async() : Promise<Buffer> => {

        await createSubgraph(config.urlUserApp, config.subgraphUserApp)
        await createSubgraph(config.urlArticleApp, config.subgraphArticleApp)          
    try {
        return await createPartOfSupergraph()
    } catch (error) {
        throw new Error("creating part of supergraph failed!")
    }
}

const createSubgraph = async (url: string, fileName: string) => {
    const command: string = "rover subgraph introspect "+ url + " > " + config.subraphsLocation + fileName
    try{
        await execPromisifed(command)        
    } catch(err){
    }        
}

const createPartOfSupergraph = async (): Promise<Buffer> => {
    const command: string = "rover supergraph compose --config " + config.supergraphConfigYml + " > " + config.superGraphFile
    try{
        await execPromisifed(command)
        removeFile(config.subraphsLocation + config.subgraphUserApp)
        removeFile(config.subraphsLocation + config.subgraphArticleApp)
        return new Promise<Buffer>((resolve) => {
            resolve((fs.readFileSync(config.superGraphFile)))
        })
    } catch( err) {
        removeFile(config.subraphsLocation + config.subgraphUserApp)
        removeFile(config.subraphsLocation + config.subgraphArticleApp)
        removeFile(config.superGraphFile)
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

