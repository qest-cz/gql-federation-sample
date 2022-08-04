import {runServer} from '@monorepo-ws/server'
import { typeDefs } from './Schema/TypeDefs'
import { resolvers } from "./Schema/Resolvers";

console.log("article app is running!")
runServer(5000, typeDefs, resolvers)