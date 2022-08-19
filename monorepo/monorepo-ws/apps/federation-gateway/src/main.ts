import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs'; 
import { checkActualSuperGraph} from './services';
import { LocalStorageManager } from './services/local-storage-manager';
import { SupergraphStorageManager } from './services/interfaces';

const superGraphManager: SupergraphStorageManager = new LocalStorageManager()
let superGraphSchema = readFileSync(process.env.SUPERGRAPH_FILE)
let gateway = new ApolloGateway({ supergraphSdl: superGraphSchema.toString() });
let server = new ApolloServer({ gateway });

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
  server.listen({ port: process.env.PORT })
  setInterval(restartServer, Number(process.env.INTERVAL))
}

main()


