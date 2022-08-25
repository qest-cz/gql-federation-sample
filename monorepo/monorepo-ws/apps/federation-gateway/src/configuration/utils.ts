import { EnumOfErrorTypes, FederationGatewayError } from "./errors/errors"

export const validStorage = (storageString: string) => {
    try {
        return Storage[storageString]
    } catch (error) {
        throw new FederationGatewayError({type: EnumOfErrorTypes.BadStorageType, message: "Invalid string of storage!"})
    }
}

export const checkNumber = (imput: string): number => {
    const result: number = Number(imput)
    if(isNaN(Number(imput))){
        throw new FederationGatewayError({type: EnumOfErrorTypes.InvalidNumber, message: "Input is not number!"})
    }
    return result
}
