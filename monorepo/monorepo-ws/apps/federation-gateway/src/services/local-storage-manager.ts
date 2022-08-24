import {promises as fsPromises} from 'fs';
import { superGraphFile } from '../configuration/config';
import { SupergraphStorageManager } from './interfaces';



export class LocalStorageManager implements SupergraphStorageManager{
    constructor(){        
    }
    async getSupergraph(): Promise<Buffer> {
        const file = await fsPromises.readFile(superGraphFile)
        return new Promise<Buffer>((resolve) => {
            resolve(file)
        })
    }
} 
