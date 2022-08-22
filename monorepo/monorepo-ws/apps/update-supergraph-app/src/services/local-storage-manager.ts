import { removeFile } from './file-services'
import {promises as fsPromises} from 'fs';
import { SupergraphManager } from './index'
import { createSupergraph, createAllSubgraphs, removeAllSubgraphFiles } from './supergraph-services'

export class LocalStorageManager implements SupergraphManager {
    constructor(){        
    }
    async updateSupergraph() {
        try {       
            await createAllSubgraphs() 
            const newFilePath= await createSupergraph()          
            await removeAllSubgraphFiles()
            await this.checkNewSupergraph(String(newFilePath))
        } catch (error) {
        }
    } 
    
    private async checkNewSupergraph(newFile: string) {
        const newSuperGraph = await fsPromises.readFile(newFile)
        const currentSupergraph = await fsPromises.readFile(process.env.SUPERGRAPH_FILE)
        if(newSuperGraph.equals(currentSupergraph)) {
            return removeFile(newFile)
        }
        fsPromises.writeFile(process.env.SUPERGRAPH_FILE, newSuperGraph)
    }
}