import * as config from '../configuration/config'
import { exec } from 'child_process'
import {promisify} from "util"
import { checkAndRemoveCreatedFile } from './file-services'
import { SupergraphManager } from '@monorepo-ws/supergraph-manager'
import {promises as fsPromises} from 'fs';
import { logger } from 'libs/server/src/logger'
import { EnumOfErrorTypes, RoverErrorManager } from './errors/errors'
import { logRequest } from '@qest/express-utils'
import e = require('express')

const execPromisifed = promisify(exec)

export class RoverManager {
    constructor(private readonly supergraphManager: SupergraphManager){        
    }

    async updateSupergraph() {
        try {
            await this.createAllSubgraphs()
            const newFilePath: String = await this.createSupergraph()
            await this.removeAllSubgraphFiles()
            const newSupergraph: Buffer = await fsPromises.readFile(String(newFilePath))   
            await checkAndRemoveCreatedFile(String(newFilePath))     
            await this.supergraphManager.saveSupergraph(newSupergraph)
        } catch (error) {  
            if(error instanceof RoverErrorManager){
                logger.info(error.message)
            }else{
                logger.info(`nevytvoreno: ${error}`)    
            }   
        }
    }

    private async createAllSubgraphs() {
        try {
            await this.createSubgraph(config.urlUserApp, config.subgraphUserApp)
            await this.createSubgraph(config.urlArticleApp, config.subgraphArticleApp)    
        } catch (err) {
            await this.removeAllSubgraphFiles()
            throw new RoverErrorManager({type: EnumOfErrorTypes.AppsNotRunning, message: "all apps aren't running!"})
        }
    }

    private async createSubgraph(url: string, fileName: string) {        
        const command: string = `rover subgraph introspect ${url} > ${config.subgraphsLocation}${fileName}` 
        try {
            await execPromisifed(command)        
        } catch (err) {
            logger.error(err)
            throw err
        }
    }

    private async removeAllSubgraphFiles() {
        await checkAndRemoveCreatedFile(`${config.subgraphsLocation}${config.subgraphUserApp}`)
        await checkAndRemoveCreatedFile(`${config.subgraphsLocation}${config.subgraphArticleApp}`)
    }

    private async createSupergraph() {
        const superGraphsDirectory: string = config.supergraphLocation
        const newFilePath: string = `${superGraphsDirectory}supergraph${Date.now().toString()}.graphql`
        const command: string = `rover supergraph compose --config ${config.supergraphConfigYml} > newFilePath`
        try{
            await execPromisifed(command)
            return newFilePath
        } catch( err) {
            await checkAndRemoveCreatedFile(newFilePath)
            await this.removeAllSubgraphFiles()
            logger.error(err)
            throw err
        }
    }
}