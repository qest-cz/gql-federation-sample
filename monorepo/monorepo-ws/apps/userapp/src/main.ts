import { runServer } from '@monorepo-ws/server';
import { typeDefs } from "./Schema/TypeDefs";
import { resolvers } from "./Schema/Resolvers";

console.log('Hello World! aaaa');
runServer(8080, typeDefs, resolvers);
