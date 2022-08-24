export { SupergraphManager} from "./services/interfaces";
export { LocalStorageManager } from "./services/local-storage-manager"; 
export { PrismaManager } from "./services/prisma-manager";
export { Configuration } from "./dependencies";

export enum Storage {
    Local,
    Prisma
}

