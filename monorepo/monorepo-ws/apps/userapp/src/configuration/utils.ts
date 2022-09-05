import { EnumOfErrorTypes, UserAppError } from "./errors/errors"

export const checkNumber = (imput: string): number => {
    const result: number = Number(imput)
    if(isNaN(Number(imput))){
        throw new UserAppError({type: EnumOfErrorTypes.InvalidNumber, message: "Input is not number!"})
    }
    return result
}
