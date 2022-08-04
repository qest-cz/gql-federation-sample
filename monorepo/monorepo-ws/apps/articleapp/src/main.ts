import {runServer} from '@monorepo-ws/server'
import { typeDefs } from './Schema/type-defs'
import { resolvers } from "./Schema/Resolvers";
import { environment } from "./environments/environment"
 
console.log("article app is running!")
runServer(environment.PORT, typeDefs, resolvers)
