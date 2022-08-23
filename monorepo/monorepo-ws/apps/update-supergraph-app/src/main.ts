import { interval } from "./configuration/config"
import { SupergraphManager } from "./services"
import { PrismaManager } from "./services/prisma-manager"

const manager: SupergraphManager = new PrismaManager()
const runUpdate = setInterval(() => manager.updateSupergraph(), Number(interval))


