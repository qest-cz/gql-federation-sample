
import { ServerManager } from './services/server-manager';
import { superGraphFile, superGraphFileName, supergraphLocation } from './configuration/config';
import { Configuration, LocalStorageManager, PrismaManager, Storage, SupergraphManager } from '@monorepo-ws/supergraph-manager';



const main = async (storage: Storage) => {  
  const supergraphManager: SupergraphManager = createSupergraphManager(storage)
  const serverManager: ServerManager = new ServerManager(supergraphManager)
  await serverManager.runApp()
}


const getConfiguration = (): Configuration => {
  const configuration: Configuration = {
    supergraphFile: superGraphFile,
    supergraphFileName: superGraphFileName,
    supergraphLocation: supergraphLocation
  }
  return configuration
}

const createSupergraphManager = (storage: Storage): SupergraphManager => {
  const configuration: Configuration = getConfiguration()
  return storage == Storage.Local ? new LocalStorageManager(configuration) : new PrismaManager(configuration)
}

main(Storage.Local)



