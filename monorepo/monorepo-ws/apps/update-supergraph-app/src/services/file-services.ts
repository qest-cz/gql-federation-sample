import * as fs from 'fs'
import {promises as fsPromises} from 'fs';
import { supergraphFile } from '../configuration/config';

export const checkAndRemoveCreatedFile = async (path: string) => {
    try {
        if(!fs.existsSync(path)){
            return;            
        }
        await removeFile(path)
    } catch(err) {
        throw new Error(err.message)
    }
}

export const removeFile = async (path: string) => {
    await fs.unlink(path, (err) => {
        if(err){
            throw err
        }
    })
}

export const checkNewSupergraph = async (newFile: string) => {
    const newSuperGraph = await fsPromises.readFile(newFile)
    const currentSupergraph = await fsPromises.readFile(supergraphFile)
    if(newSuperGraph.equals(currentSupergraph)) {
        return removeFile(newFile)
    }
    fsPromises.writeFile(supergraphFile, newSuperGraph)
}

