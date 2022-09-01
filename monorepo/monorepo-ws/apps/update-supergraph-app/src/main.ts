import {
  Configuration,
  GetSupergraphManager,
  Storage,
  SupergraphManager,
} from '@monorepo-ws/supergraph-manager';
import { interval } from './configuration/config';
import * as config from './configuration/config';
import { RoverManager } from './services/rover-manager';

const main = async () => {
  const roverManager: RoverManager = createRover(config, config.storage);
  setInterval(() => roverManager.updateSupergraph(), Number(interval));
};

const createRover = (
  configuration: Configuration,
  storage: Storage
): RoverManager => {
  const supergraphManager: SupergraphManager = GetSupergraphManager(
    storage,
    configuration
  );
  return new RoverManager(supergraphManager);
};

main();
