import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
import { checkActualSuperGraph } from ".";
import { interval, port } from "../configuration/config";
import { SupergraphStorageManager } from "./interfaces";
import { tryCreatePartOfSupergraph } from "./supergraph-services";


export class ServerManager {
    superGraphManager: SupergraphStorageManager
    superGraphSchema: Buffer
    gateway: ApolloGateway
    server: ApolloServer

    constructor(superGraphManager: SupergraphStorageManager){
        this.superGraphManager = superGraphManager
    }

    private async checkSupergraph(){
        const newFile = await this.superGraphManager.getSupergraph()
        if(!checkActualSuperGraph(this.superGraphSchema, newFile)){
            await this.restartServer(newFile)
        }
    }

    async runApp() {
        await this.runServer()
        setInterval(() => this.checkSupergraph, interval)
    }

    private async runServer() {
        try {
            this.superGraphSchema = await this.superGraphManager.getSupergraph()
          } catch (error) {
            this.superGraphSchema =  await tryCreatePartOfSupergraph() 
          }
          this.gateway = new ApolloGateway({ supergraphSdl: this.superGraphSchema.toString() });
          
          this.server = new ApolloServer({ gateway: this.gateway });
          this.server.listen({ port: port })
    }

    private async restartServer(newFile: Buffer){
        await this.server.stop()
        this.superGraphSchema = newFile
        this.gateway = new ApolloGateway({
            supergraphSdl: this.superGraphSchema.toString()
        }); 
        this.server = new ApolloServer({gateway: this.gateway})
        this.server.listen({ port: port })
    }
}