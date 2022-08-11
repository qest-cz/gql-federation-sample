import { PrismaClient, Article } from '@monorepo-ws/prisma-article-app-client';
import { GqlArticle, GqlMutationCreateArticleArgs } from '../../resolvers/interfaces';

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

export async function createArticle(newArticle: GqlMutationCreateArticleArgs): Promise<GqlArticle> {
   const article = await prisma.article.create({
      data: {
        title: newArticle.title,
        authorId: Number(newArticle.authorId)
      }
   })
   return exportArticle(article)
}