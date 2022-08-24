import { Article } from "@monorepo-ws/prisma-article-app-client"
import { GqlArticle, GqlMutationCreateArticleArgs, GqlQueryGetArticleByIdArgs } from "../resolvers/interfaces"
import { exportArticle, exportArticles } from "../services/article-services"
import {DataSource as ApolloDataSources} from 'apollo-datasource'
import { ArticleDataSource } from "./interfaces"

const testArticles: Article[] = [{id: 1, title: "first title", authorId: 1},
                                {id: 2, title: "second title", authorId: 1}]

export class FakePrismaArticleDataSource extends ApolloDataSources implements ArticleDataSource {
    constructor(){
      super()
    }

    async getAllArticles(): Promise<GqlArticle[]>{
        return exportArticles(testArticles)
    }

    async createArticle(newArticle: GqlMutationCreateArticleArgs): Promise<GqlArticle>{
        const article: Article = {id: 3, title: 'added title', authorId: 1} 
        return exportArticle(article)
    }

    async GetArticleByAuthorId(id: number) : Promise<GqlArticle[]>{
      const articles = testArticles.filter(x => x.authorId == id)
      return exportArticles(articles)
    }

    async getArticleById(idOnj: GqlQueryGetArticleByIdArgs): Promise<GqlArticle> {
      const article = testArticles.find(x => x.id == idOnj.id)  
      return exportArticle(article)
    };
}
