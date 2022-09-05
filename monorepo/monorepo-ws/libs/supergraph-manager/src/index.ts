import { Configuration } from './dependencies';
import { EnumOfErrorTypes, SupergraphManagerError } from './errors/errors';
import { SupergraphManager } from './services/interfaces';
import { LocalStorageManager } from './services/local-storage-manager';
import { PrismaManager } from './services/prisma-manager';

export { SupergraphManager } from './services/interfaces';
export { LocalStorageManager } from './services/local-storage-manager';
export { PrismaManager } from './services/prisma-manager';
export { Configuration } from './dependencies';

export enum Storage {
  Local,
  Prisma,
}

export const GetSupergraphManager = (
  storage: Storage,
  configuration: Configuration
): SupergraphManager => {
  switch (storage) {
    case Storage.Local:
      return new LocalStorageManager(configuration);
    case Storage.Prisma:
      return new PrismaManager(configuration);
    default:
      throw new SupergraphManagerError({
        type: EnumOfErrorTypes.BadStorageType,
        message: 'Invalid storage!',
      });
  }
};
