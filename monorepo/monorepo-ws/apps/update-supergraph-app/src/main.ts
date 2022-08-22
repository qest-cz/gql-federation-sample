import { SupergraphManager } from "./services"
import { LocalStorageManager } from "./services/local-storage-manager"
import { PrismaManager } from "./services/prisma-manager"

const manager: SupergraphManager = new PrismaManager()
const runUpdate = setInterval(() => manager.updateSupergraph(), Number(process.env.INTERVAL))


