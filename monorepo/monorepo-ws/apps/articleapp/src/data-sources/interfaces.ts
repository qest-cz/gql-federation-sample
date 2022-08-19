import { DataSource } from "apollo-datasource";
import { GqlArticle, GqlMutationCreateArticleArgs, GqlQueryGetArticleByIdArgs } from "../resolvers/interfaces";

export interface ArticleDataSource extends DataSource{
    getAllArticles: () => Promise<GqlArticle[]>
    createArticle: (newArticle: GqlMutationCreateArticleArgs) => Promise<GqlArticle>
    GetArticleByAuthorId: (id: number) => Promise<GqlArticle[]>
    getArticleById: (id: GqlQueryGetArticleByIdArgs) => Promise<GqlArticle>
}