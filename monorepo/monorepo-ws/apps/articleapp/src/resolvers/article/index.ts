import { GqlMutationCreateArticleArgs, GqlQueryGetArticleByIdArgs } from '../interfaces';
import { Context as ApolloContext } from 'apollo-server-core';
import { DataSources } from '../../main';

interface Context extends ApolloContext{
  dataSources: DataSources 
}

export const article = {
  Query: {
    getAllArticles(_, __, c: Context) {
      return c.dataSources.article.getAllArticles();
    },
    articles: (_, __, c: Context) => {
      return c.dataSources.article.getAllArticles()
    },
    getArticleById(_, args: GqlQueryGetArticleByIdArgs, c: Context){
      return c.dataSources.article.getArticleById(args)
    }    
  },
  Mutation: {
    createArticle(_, newArticle: GqlMutationCreateArticleArgs, c: Context){
        return c.dataSources.article.createArticle(newArticle)
    }
  },
};
