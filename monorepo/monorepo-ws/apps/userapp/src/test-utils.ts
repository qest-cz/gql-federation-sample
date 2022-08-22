import { testServer } from '@monorepo-ws/server';
import { modules } from './resolvers/modules';
import { DataSources } from './main'
import { FakePrismaUserDataSource } from './data-sources/fake-prisma-user-data-source';

export const server = testServer(modules, (): DataSources => ({user: new FakePrismaUserDataSource()}));