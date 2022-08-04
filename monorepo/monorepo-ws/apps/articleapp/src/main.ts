import {runServer} from '@monorepo-ws/server'
import { environment } from "./environments/environment"
import { modules } from './schema/modules'
 
console.log("article app is running!")
runServer(environment.PORT, modules)
