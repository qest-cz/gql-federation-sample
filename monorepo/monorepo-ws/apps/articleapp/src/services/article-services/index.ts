import { PrismaClient, Article } from '@monorepo-ws/prisma-article-app-client';
import { GqlArticle, GqlMutationCreateArticleArgs } from '../../resolvers/interfaces';

export const prisma = new PrismaClient();

export const exportArticle = (article: Article): GqlArticle => {
  return { ...article };
}

export const exportArticles = (articles: Article[]): GqlArticle[] => {
  return articles.map(exportArticle);
}
