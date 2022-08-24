import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
import { interval, port } from "../configuration/config";
import { tryCreatePartOfSupergraph } from "./supergraph-services";
import { StorageManager } from "@monorepo-ws/supergraph-manager"


export class ServerManager {
    gateway: ApolloGateway
    server: ApolloServer

    constructor(private readonly storageManager: StorageManager){
    }

    async runApp() {
        await this.runServer()
        console.log("server: " + this.server)
        setInterval(this.runServer.bind(this), interval)
    }

    private async runServer() {
        if(!this.server){
            console.log("first start")
            try {
                const superGraphSchema: Buffer = await this.storageManager.supergraphManager.getSupergraph()
                return await this.startServer(superGraphSchema.toString())
            } catch (error) {
                const superGraphSchema: Buffer =  await tryCreatePartOfSupergraph() 
                return await this.startServer(superGraphSchema.toString())
            }
        }
        try {
            const superGraphSchema = await this.storageManager.supergraphManager.getSupergraph()
            if(!this.storageManager.supergraphManager.checkSupergraph(superGraphSchema)){
                this.storageManager.supergraphManager.setActualSupergraph(superGraphSchema)
                console.log("restart! New supergraph.")
                await this.server.stop()                
                this.startServer(superGraphSchema.toString())
            }
            console.log("running...")
        } catch (error) {   
        }        
    }

    private async startServer(supergraph: string){
        this.gateway = new ApolloGateway({ supergraphSdl: supergraph});          
        this.server = new ApolloServer({ gateway: this.gateway });
        this.server.listen({ port: port })
    }
}