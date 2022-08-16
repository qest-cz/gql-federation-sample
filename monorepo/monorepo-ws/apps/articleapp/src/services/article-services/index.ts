import { PrismaClient, Article } from '@monorepo-ws/prisma-article-app-client';
import { GqlArticle, GqlMutationCreateArticleArgs } from '../../resolvers/interfaces';

export const prisma = new PrismaClient();

export function exportArticle(article: Article): GqlArticle {
  return { ...article };
}

export function exportArticles(articles: Article[]): GqlArticle[] {
  return articles.map(exportArticle);
}
