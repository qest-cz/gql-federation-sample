import { prismaArticleAppClient } from './prisma-article-app-client';

describe('prismaArticleAppClient', () => {
  it('should work', () => {
    expect(prismaArticleAppClient()).toEqual('prisma-article-app-client');
  });
});
