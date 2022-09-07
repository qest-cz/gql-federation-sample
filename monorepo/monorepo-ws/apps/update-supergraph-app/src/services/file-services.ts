import * as fs from 'fs';
import { promises as fsPromises } from 'fs';
import { supergraphFile } from '../configuration/config';

export const checkAndRemoveCreatedFile = async (path: string) => {
  try {
    if (!fs.existsSync(path)) {
      return;
    }
    await removeFile(path);
  } catch (err) {
    throw err;
  }
};

export const removeFile = async (path: string) => {
  await fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
  });
};
