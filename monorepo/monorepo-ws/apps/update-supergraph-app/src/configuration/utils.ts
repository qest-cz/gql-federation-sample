import { EnumOfErrorTypes, UpdateSupergraphAppError } from './errors/errors';
import { Storage } from '@monorepo-ws/supergraph-manager';

export const checkNumber = (imput: string): number => {
  const result: number = Number(imput);
  if (isNaN(Number(imput))) {
    throw new UpdateSupergraphAppError({
      type: EnumOfErrorTypes.InvalidNumber,
      message: 'Input is not number!',
    });
  }
  return result;
};

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

enum Source {
  Docker,
  Localhost,
}

export const setSupergraphConfigYml = (): string => {
  try {
    const source: Source = Source[process.env.SOURCE];
    switch (source) {
      case Source.Localhost:
        return process.env.SUPERGRAPH_LOCALHOST_CONFIG_YML;
      case Source.Docker:
        return process.env.SUPERGRAPH_CONFIG_YML;
      default:
        throw new UpdateSupergraphAppError({
          type: EnumOfErrorTypes.BadSource,
          message: 'Unsupported source!',
        });
    }
  } catch (error) {
    throw new UpdateSupergraphAppError({
      type: EnumOfErrorTypes.BadSource,
      message: 'Invalid string of source!',
    });
  }
};
