import { EnumOfErrorTypes, UpdateSupergraphAppError } from "./errors/errors"
import { Storage } from '@monorepo-ws/supergraph-manager'

export const checkNumber = (imput: string): number => {
    const result: number = Number(imput)
    if(isNaN(Number(imput))){
        throw new UpdateSupergraphAppError({type: EnumOfErrorTypes.InvalidNumber, message: "Input is not number!"})
    }
    return result
}

export const validStorage = (storageString: string) => {
    try {
      return Storage[storageString];
    } catch (error) {
      throw new UpdateSupergraphAppError({
        type: EnumOfErrorTypes.BadStorageType,
        message: 'Invalid string of storage!',
      });
    }
  };