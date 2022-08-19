import { updateSuperGraph } from "./services"

const update = async () =>  {
    console.log("zacatek update")
    await updateSuperGraph()
    console.log("konec")
}



const runUpdate = setInterval(update, Number(process.env.INTERVAL))


