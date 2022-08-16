import { DataSource } from "apollo-datasource";
import { GqlArticle, GqlMutationCreateArticleArgs } from "../resolvers/interfaces";

export interface IArticleDataSource extends DataSource{
    getAllArticles: () => Promise<GqlArticle[]>
    createArticle: (newArticle: GqlMutationCreateArticleArgs) => Promise<GqlArticle>
}