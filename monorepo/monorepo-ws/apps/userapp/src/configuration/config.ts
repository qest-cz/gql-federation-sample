import { checkNumber } from "./utils";

export const port: number = checkNumber(process.env.PORT)