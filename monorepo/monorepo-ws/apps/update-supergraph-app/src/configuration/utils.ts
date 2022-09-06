import { EnumOfErrorTypes, UpdateSupergraphAppError } from './errors/errors';
import { Storage } from '@monorepo-ws/supergraph-manager';
import { source } from './config';

export enum Source {
  Docker,
  Localhost,
}

export interface ConfigFileElement {
  AppName: string;
  RoutingUrl: string;
  file: string;
}

export const setConfigSupergraphElement = (): ConfigFileElement[] => {
  return [
    {
      AppName: process.env.USERAPP_NAME,
      RoutingUrl: setRoutingUrl(
        process.env.URL_USER_APP,
        process.env.URL_USER_APP_DOCKER
      ),
      file: `${process.env.SUBGRAPH_LOCATION_FOR_CONFIG_YML}${process.env.SUBGRAPH_USER_APP}`,
    },
    {
      AppName: process.env.ARTICLEAPP_NAME,
      RoutingUrl: setRoutingUrl(
        process.env.URL_ARTICLE_APP,
        process.env.URL_ARTICLE_APP_DOCKER
      ),
      file: `${process.env.SUBGRAPH_LOCATION_FOR_CONFIG_YML}${process.env.SUBGRAPH_ARTICLE_APP}`,
    },
  ];
};

const setRoutingUrl = (localUrl: string, dockerUrl: string): string => {
  switch (source) {
    case Source.Localhost:
      return localUrl;
    case Source.Docker:
      return dockerUrl;
    default:
      throw new UpdateSupergraphAppError({
        type: EnumOfErrorTypes.BadSource,
        message: `Invalid source! ${source}`,
      });
  }
};
export const checkNumber = (imput: string | number): number => {
  const result: number = Number(imput);
  if (isNaN(Number(imput))) {
    throw new UpdateSupergraphAppError({
      type: EnumOfErrorTypes.InvalidNumber,
      message: 'Input is not number!',
    });
  }
  return result;
};

export const validStorage = (storageString: string): Storage => {
  try {
    return Storage[storageString];
  } catch (error) {
    throw new UpdateSupergraphAppError({
      type: EnumOfErrorTypes.BadStorageType,
      message: 'Invalid string of storage!',
    });
  }
};

export const validSource = (source: string): Source => {
  try {
    return Source[source];
  } catch (error) {
    throw new UpdateSupergraphAppError({
      type: EnumOfErrorTypes.BadSource,
      message: 'Invalid string of source!',
    });
  }
};
