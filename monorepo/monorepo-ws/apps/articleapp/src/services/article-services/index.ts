import { PrismaClient, Article } from '@monorepo-ws/prisma-article-app-client';
import { GqlArticle } from '../../resolvers/interfaces';

const prisma = new PrismaClient();

function exportArticle(article: Article): GqlArticle {
  return { ...article };
}

function exportArticles(articles: Article[]): GqlArticle[] {
  return articles.map(exportArticle);
}

export async function getAllArticles(): Promise<GqlArticle[]> {
  const articles = await prisma.article.findMany();
  console.log(articles);
  return exportArticles(articles);
}
