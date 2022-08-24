import { Configuration, LocalStorageManager, PrismaManager, Storage, StorageManager, SupergraphManager } from "@monorepo-ws/supergraph-manager"
import { interval } from "./configuration/config"
import * as config from './configuration/config'
import { RoverManager } from "./services/rover-manager"

const main = async(storage: Storage) => {
    const configuration = getSupergraphConfiguration()
    const roverManager: RoverManager = createRover(configuration, storage)
    setInterval(() => roverManager.updateSupergraph(), Number(interval))
}

const getSupergraphConfiguration = (): Configuration => {
    const supergraphConfiguration: Configuration = {
        supergraphFile: config.supergraphFile,
        supergraphFileName: config.supergraphFileName,
        supergraphLocation: config.supergraphLocation
    }
    return supergraphConfiguration
}

const createRover = (configuration: Configuration, storage: Storage) :RoverManager => {
    const storageType: SupergraphManager = storage == Storage.Local ? new LocalStorageManager(configuration) : new PrismaManager(configuration)
    const storageManager: StorageManager = new StorageManager(storageType)
    return new RoverManager(storageManager)
}

main(Storage.Local)