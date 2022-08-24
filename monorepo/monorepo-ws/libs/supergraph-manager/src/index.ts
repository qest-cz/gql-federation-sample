import { SupergraphManager } from "./services/interfaces";
export { SupergraphManager} from "./services/interfaces";
export { LocalStorageManager } from "./services/local-storage-manager"; 
export { PrismaManager } from "./services/prisma-manager";
export { Configuration } from "./dependencies";

export class StorageManager {
    constructor(public readonly supergraphManager: SupergraphManager){
    }
}

export enum Storage {
    Local,
    Prisma
}

