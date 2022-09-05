import {
  Configuration,
  GetSupergraphManager,
  Storage,
  SupergraphManager,
} from '@monorepo-ws/supergraph-manager';
import * as config from './configuration/config';

export const createSupergraphManager = (
  storage: Storage
): SupergraphManager => {
  return GetSupergraphManager(storage, config);
};
