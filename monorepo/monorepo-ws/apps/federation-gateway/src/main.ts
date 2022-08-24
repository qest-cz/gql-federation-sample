
import { ServerManager } from './services/server-manager';
import { Storage, SupergraphManager } from '@monorepo-ws/supergraph-manager';
import { createSupergraphManager } from './dependencies';

const main = async (storage: Storage) => {  
  const supergraphManager: SupergraphManager = createSupergraphManager(storage)
  const serverManager: ServerManager = new ServerManager(supergraphManager)
  await serverManager.runApp()
}

main(Storage.Local)



