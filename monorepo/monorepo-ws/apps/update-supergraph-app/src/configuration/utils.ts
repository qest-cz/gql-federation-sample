import { EnumOfErrorTypes, UpdateSupergraphAppError } from "./errors/errors"

export const checkNumber = (imput: string): number => {
    const result: number = Number(imput)
    if(isNaN(Number(imput))){
        throw new UpdateSupergraphAppError({type: EnumOfErrorTypes.InvalidNumber, message: "Input is not number!"})
    }
    return result
}