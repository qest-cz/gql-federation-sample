import { ServerManager } from './services/server-manager';
import { Storage, SupergraphManager } from '@monorepo-ws/supergraph-manager';
import { createSupergraphManager } from './dic';
import { storage } from './configuration/config';

const main = async () => {
  const supergraphManager: SupergraphManager = createSupergraphManager(storage);
  const serverManager: ServerManager = new ServerManager(supergraphManager);
  await serverManager.runApp();
};

main();
