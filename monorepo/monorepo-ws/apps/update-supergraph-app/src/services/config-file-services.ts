import {
  supergraphConfigYml,
  supergraphYmlConfig,
} from '../configuration/config';
import { promises as fsPromises } from 'fs';

export const createConfigFile = async () => {
  try {
    const content = supergraphYmlConfig
      .map((element) =>
        setAppConfigString(element.AppName, element.RoutingUrl, element.file)
      )
      .join('\n');
    const finalContent: string = `subgraphs:\n${content}`;
    await fsPromises.writeFile(supergraphConfigYml, finalContent);
  } catch (error) {
    throw error;
  }
};

const setAppConfigString = (
  name: string,
  routingUrl: string,
  fileName: string
): string => {
  return `\t${name}:\n\t\trouting_url: ${routingUrl}\n\t\tschema:\n\t\t\tfile: ${fileName}`;
};
