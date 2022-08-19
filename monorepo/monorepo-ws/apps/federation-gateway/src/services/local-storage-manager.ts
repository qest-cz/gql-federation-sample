import {promises as fsPromises} from 'fs';
import { SupergraphStorageManager } from './interfaces';


export class LocalStorageManager implements SupergraphStorageManager{
    constructor(){        
    }
    async getSupergraph(): Promise<Buffer> {
        const file = await fsPromises.readFile(process.env.SUPERGRAPH_FILE)
        return new Promise<Buffer>((resolve) => {
            resolve(file)
        })
    }
} 
