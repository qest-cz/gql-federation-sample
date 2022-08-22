import * as fs from 'fs'
import {promises as fsPromises} from 'fs';

export const checkAndRemoveCreatedFile = (path: string) => {
    try {
        if(!fs.existsSync(path)){
            return;            
        }
        removeFile(path)
    } catch(err) {
        throw new Error(err.message)
    }
}

export const removeFile = (path: string) => {
    fs.unlink(path, (err) => {
        if(err){
            throw err
        }
    })
}

export const checkNewSupergraph = async (newFile: string) => {
    const newSuperGraph = await fsPromises.readFile(newFile)
    const currentSupergraph = await fsPromises.readFile(process.env.SUPERGRAPH_FILE)
    if(newSuperGraph.equals(currentSupergraph)) {
        return removeFile(newFile)
    }
    fsPromises.writeFile(process.env.SUPERGRAPH_FILE, newSuperGraph)
}

