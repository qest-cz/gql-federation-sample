import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { readFileSync } from 'fs'; 
import { updateSuperGraph } from './services'; 
import {promises as fsPromises} from 'fs';
const superGraphSchema = readFileSync(process.env.SUPERGRAPH_FILE).toString()
const gateway = new ApolloGateway({
  supergraphSdl: superGraphSchema
});

const server = new ApolloServer({ gateway });

server
  .listen({ port: process.env.PORT })

const main = async (): Promise<void> => {
  const update = await updateSuperGraph()
  if(update){
  }
}

main()

