import { SupergraphManager } from "./interfaces";
import {promises as fsPromises} from 'fs';
import { Configuration } from "../dependencies";

export class LocalStorageManager implements SupergraphManager{
    config: Configuration
    actualSupergraph: Buffer | undefined
    constructor(config: Configuration){
        this.config = config
    }

    async getSupergraph(): Promise<Buffer>  {
        const file = await fsPromises.readFile(this.config.supergraphFile)
        if(!this.actualSupergraph){
            this.setActualSupergraph(file)
        }
        return file
    }
    
    async saveSupergraph(newFile: Buffer) {        
        if(!this.actualSupergraph){
            this.setActualSupergraph(await this.getSupergraph())
        }
        if(!await this.checkSupergraph(newFile)){
            await fsPromises.writeFile(this.config.supergraphFile, newFile)
            await fsPromises.writeFile(`${this.config.supergraphLocation}supergraph${Date.now().toString()}.graphql`, newFile)
            this.setActualSupergraph(newFile)
        }
    }

    setActualSupergraph(actual: Buffer) {
        this.actualSupergraph = actual
    }

    checkSupergraph(newSupergraph: Buffer) {
        return this.actualSupergraph.equals(newSupergraph)
    }
}