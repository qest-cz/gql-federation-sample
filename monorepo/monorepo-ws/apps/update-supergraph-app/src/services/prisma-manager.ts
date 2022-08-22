import { PrismaClient } from "@monorepo-ws/prisma-federation-gateway-client";
import { SupergraphManager } from './index'
import {promises as fsPromises} from 'fs';
import { createAllSubgraphs, createSupergraph, removeAllSubgraphFiles } from "./supergraph-services";
import { removeFile } from "./file-services";
import path = require("path");

const prisma = new PrismaClient()

export class PrismaManager implements SupergraphManager {
    constructor(){
    }

    async updateSupergraph() {
        try {
            await this.downloadCurrentSupergraph()
            await createAllSubgraphs() 
            const newFilePath = await createSupergraph()
            await removeAllSubgraphFiles()
            await this.checkNewSupergraph(String(newFilePath))
        } catch (error) {
        }
    }

    private async downloadCurrentSupergraph(){
        const supergraph = await prisma.supergraph.findFirstOrThrow({
            where: {
                id: process.env.SUPERGRAPH_FILE_NAME
            }
        })
        fsPromises.writeFile(process.env.SUPERGRAPH_FILE, supergraph.file)
    }

    private async checkNewSupergraph(newFile: string){
        const newSuperGraph = await fsPromises.readFile(newFile)
        const currentSupergraph = await fsPromises.readFile(process.env.SUPERGRAPH_FILE)
        if(newSuperGraph.equals(currentSupergraph)) {
            return this.removeAllFiles(newFile)
        }
        await this.addSupergraphToDB(newFile, newSuperGraph)
        await this.updateSupergraphDB(newSuperGraph)
        return this.removeAllFiles(newFile)
    }

    private removeAllFiles(newFile: string){
        removeFile(newFile)
        removeFile(process.env.SUPERGRAPH_FILE)
    }

    private async addSupergraphToDB(newFile: string, data: Buffer){
        await prisma.supergraph.create({
            data: {
                id: path.basename(newFile),
                file: data.toString()
            }
        })
    }

    private async updateSupergraphDB(data: Buffer){
        await prisma.supergraph.update({
            data: {
                file: data.toString()
            },
            where: {
                id: process.env.SUPERGRAPH_FILE_NAME
            }
        })
    }
}


