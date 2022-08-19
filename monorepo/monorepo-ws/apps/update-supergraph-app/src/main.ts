import { updateSuperGraph } from "./services"

const update = async () =>  {
    await updateSuperGraph()
}

const runUpdate = setInterval(update, Number(process.env.INTERVAL))


