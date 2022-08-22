import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs'; 
import { checkActualSuperGraph} from './services';
import { LocalStorageManager } from './services/local-storage-manager';
import { SupergraphStorageManager } from './services/interfaces';
import { tryCreatePartOfSupergraph } from './services/supergraph-services';

const superGraphManager: SupergraphStorageManager = new LocalStorageManager()
let superGraphSchema: Buffer = null
let gateway: ApolloGateway = null
let server: ApolloServer = null

const restartServer = async () => {
  const newFile = await superGraphManager.getSupergraph()
  if(!checkActualSuperGraph(superGraphSchema, newFile)){
      await server.stop()
      superGraphSchema = newFile
      gateway = new ApolloGateway({
        supergraphSdl: superGraphSchema.toString()
      });
      server = new ApolloServer({gateway})
      server.listen({ port: process.env.PORT })
  }
}

const main = async () => {
  try {
    superGraphSchema = await superGraphManager.getSupergraph()
  } catch (error) {
    superGraphSchema =  await tryCreatePartOfSupergraph() 
  }
  gateway = new ApolloGateway({ supergraphSdl: superGraphSchema.toString() });
  server = new ApolloServer({ gateway });
  server.listen({ port: process.env.PORT })
  setInterval(restartServer, Number(process.env.INTERVAL))
}

main()


