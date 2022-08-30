import {
  Configuration,
  GetSupergraphManager,
  Storage,
  SupergraphManager,
} from '@monorepo-ws/supergraph-manager';
import {
  superGraphFile,
  superGraphFileName,
  supergraphLocation,
} from './configuration/config';

const getConfiguration = (): Configuration => {
  const configuration: Configuration = {
    supergraphFile: superGraphFile,
    supergraphFileName: superGraphFileName,
    supergraphLocation: supergraphLocation,
  };
  return configuration;
};

export const createSupergraphManager = (
  storage: Storage
): SupergraphManager => {
  const configuration: Configuration = getConfiguration();
  return GetSupergraphManager(storage, configuration);
};
