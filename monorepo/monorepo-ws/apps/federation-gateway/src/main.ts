
import { ServerManager } from './services/server-manager';
import { superGraphFile, superGraphFileName, supergraphLocation } from './configuration/config';
import { Configuration, LocalStorageManager, PrismaManager, Storage, SupergraphManager, StorageManager } from '@monorepo-ws/supergraph-manager';



const main = async (storage: Storage) => {  
  const storageManager: StorageManager = createStorageManager(storage)
  const serverManager: ServerManager = new ServerManager(storageManager)
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

const createStorageManager = (storage: Storage): StorageManager => {
  const configuration: Configuration = getConfiguration()
  const storageType: SupergraphManager = storage == Storage.Local ? new LocalStorageManager(configuration) : new PrismaManager(configuration)
  return new StorageManager(storageType)
}

main(Storage.Local)



