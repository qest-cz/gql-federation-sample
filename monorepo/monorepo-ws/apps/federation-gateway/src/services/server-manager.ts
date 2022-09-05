import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
import { interval, port } from "../configuration/config";
import { SupergraphManager } from "@monorepo-ws/supergraph-manager"
import { logger } from "libs/server/src/logger";


export class ServerManager {
    gateway: ApolloGateway
    server: ApolloServer

    constructor(private readonly supergraphManager: SupergraphManager){
    }

    async runApp() {
        await this.runServer()
        setInterval(this.runServer.bind(this), interval)
    }

    private async runServer() {
        try {
            if(!this.server){
                const superGraphSchema: Buffer = await this.supergraphManager.getSupergraph()
                return await this.startServer(superGraphSchema.toString())
            }        
            const superGraphSchema = await this.supergraphManager.getSupergraph()
            if(!this.supergraphManager.checkSupergraph(superGraphSchema)){
                this.supergraphManager.setActualSupergraph(superGraphSchema)
                await this.server.stop()                
                this.startServer(superGraphSchema.toString())
            }
        } catch (error) {  
            logger.error("storage is probably unavailable") 
        }        
    }

    private async startServer(supergraph: string){
        this.gateway = new ApolloGateway({ supergraphSdl: supergraph});          
        this.server = new ApolloServer({ gateway: this.gateway });
        this.server.listen({ port: port })
    }
}