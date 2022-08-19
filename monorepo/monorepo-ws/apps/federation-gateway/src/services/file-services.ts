import * as fs from 'fs'
import {promises as fsPromises} from 'fs';


export function checkAndRemoveCreatedFile(path: string){
    console.log(path)
    try {
        if(!fs.existsSync(path)){
            return;            
        }
        removeFile(path)
    } catch(err) {
        throw new Error(err.message)
    }
}

function removeFile(path: string){
    fs.unlink(path, (err) => {
        if(err){
            throw err
        }
    })
}

export async function checkNewSupergraph(newFile: string){
    const newSuperGraph = await fsPromises.readFile(newFile)
    const currentSupergraph = await fsPromises.readFile(process.env.SUPERGRAPH_FILE)
    if(newSuperGraph.equals(currentSupergraph)) {
        removeFile(newFile)
        return false;
    }
    fsPromises.writeFile(process.env.SUPERGRAPH_FILE, newSuperGraph)
    return true
}

