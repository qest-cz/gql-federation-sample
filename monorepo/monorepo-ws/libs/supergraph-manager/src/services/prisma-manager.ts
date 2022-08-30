import { PrismaClient } from '../generated';
import { Configuration } from '../dependencies';
import { SupergraphManager } from './interfaces';

export class PrismaManager implements SupergraphManager {
  config: Configuration;
  actualSupergraph: Buffer;
  prisma: PrismaClient;
  constructor(config: Configuration) {
    this.config = config;
    this.prisma = new PrismaClient();
  }

  async getSupergraph(): Promise<Buffer> {
    const file = await this.prisma.supergraph.findFirstOrThrow({
      select: {
        file: true,
      },
      where: {
        id: this.config.supergraphFileName,
      },
    });
    const newFile: Buffer = Buffer.from(file.file, 'utf-8');
    if (!this.actualSupergraph) {
      this.setActualSupergraph(newFile);
    }
    return newFile;
  }

  async saveSupergraph(newFile: Buffer) {
    if (!this.actualSupergraph) {
      this.setActualSupergraph(await this.getSupergraph());
    }
    if (!this.checkSupergraph(newFile)) {
      await this.prisma.supergraph.create({
        data: {
          id: `supergraph${Date.now().toString()}.graphql`,
          file: newFile.toString(),
        },
      });
      await this.prisma.supergraph.update({
        data: {
          file: newFile.toString(),
        },
        where: {
          id: this.config.supergraphFileName,
        },
      });
      this.setActualSupergraph(newFile);
    }
  }

  checkSupergraph(newSupergraph: Buffer) {
    return this.actualSupergraph.equals(newSupergraph);
  }

  setActualSupergraph(actual: Buffer) {
    this.actualSupergraph = actual;
  }
}
