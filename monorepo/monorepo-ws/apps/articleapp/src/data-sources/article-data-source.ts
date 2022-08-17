import { Article, PrismaClient } from "@monorepo-ws/prisma-article-app-client";
import { DataSource } from "apollo-datasource";
import { GqlArticle, GqlMutationCreateArticleArgs } from "../resolvers/interfaces";
import { IArticleDataSource as ArticleDataSource } from "./interfaces";
import { exportArticle, exportArticles } from "../services/article-services"

export class PrismaArticleDataSource extends DataSource implements ArticleDataSource{
    constructor(private readonly prisma: PrismaClient){
        super()
    }
    
    async getAllArticles(): Promise<GqlArticle[]> {
        const articles = await this.prisma.article.findMany();
        return exportArticles(articles);
    }

    async createArticle(newArticle: GqlMutationCreateArticleArgs): Promise<GqlArticle> {
        const article = await this.prisma.article.create({
           data: {
             title: newArticle.title,
             authorId: Number(newArticle.authorId)
           }
        })
        return exportArticle(article)
     }

     async GetArticleByAuthorId(id: number) : Promise<GqlArticle[]> {
        const articles = await this.prisma.article.findMany({
            where: {
                authorId: Number(id)
            }
        })
        return exportArticles(articles)
     }
}