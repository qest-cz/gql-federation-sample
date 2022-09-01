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
  const configuration = getSupergraphConfiguration();
  const roverManager: RoverManager = createRover(configuration, config.storage);
  setInterval(() => roverManager.updateSupergraph(), Number(interval));
};

const getSupergraphConfiguration = (): Configuration => {
  const supergraphConfiguration: Configuration = {
    supergraphFile: config.supergraphFile,
    supergraphFileName: config.supergraphFileName,
    supergraphLocation: config.supergraphLocation,
  };
  return supergraphConfiguration;
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
