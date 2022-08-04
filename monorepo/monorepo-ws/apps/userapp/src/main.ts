import { runServer } from '@monorepo-ws/server';
import { modules } from './schema/modules'
import { environment } from "./environments/environment"
console.log('User-app is running!');
runServer(environment.PORT, modules);
