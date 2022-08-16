import { PrismaClient } from "@monorepo-ws/prisma-article-app-client";
import { DataSource } from "apollo-datasource";
import { GqlArticle, GqlMutationCreateArticleArgs } from "../resolvers/interfaces";
import { IArticleDataSource } from "./interfaces";
import { exportArticle, exportArticles } from "../services/article-services"

export class ArticleDataSource extends DataSource implements IArticleDataSource{
    constructor(private readonly prisma: PrismaClient){
        super()
    }
    
    async getAllArticles(): Promise<GqlArticle[]> {
        const articles = await this.prisma.article.findMany();
        console.log(articles);
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
}