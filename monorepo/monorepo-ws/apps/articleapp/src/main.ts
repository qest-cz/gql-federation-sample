import { runServer } from '@monorepo-ws/server';
import { modules } from './resolvers/modules';

const port: number = +process.env.port;
runServer(port, modules);
