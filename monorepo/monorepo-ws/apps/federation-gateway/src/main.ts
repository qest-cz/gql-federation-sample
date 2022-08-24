import { LocalStorageManager } from './services/local-storage-manager';
import { SupergraphStorageManager } from './services/interfaces';
import { ServerManager } from './services/server-manager';

const main = async () => {
  const superGraphManager: SupergraphStorageManager = new LocalStorageManager()
  const serverManager: ServerManager = new ServerManager(superGraphManager)
  await serverManager.runApp()
}

main()



