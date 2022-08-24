import { GqlMutationCreateArticleArgs, GqlQueryGetArticleByIdArgs } from '../interfaces';
import { Context as ApolloContext } from 'apollo-server-core';
import { DataSources } from '../../main';

interface Context extends ApolloContext{
  dataSources: DataSources 
}

export const article = {
  Query: {
    getAllArticles(_, __, {dataSources:{article}}: Context) {
      return article.getAllArticles();
    },
    articles: (_, __, {dataSources:{article}}: Context) => {
      return article.getAllArticles()
    },
    getArticleById(_, args: GqlQueryGetArticleByIdArgs, {dataSources:{article}}: Context){
      return article.getArticleById(args)
    }    
  },
  Mutation: {
    createArticle(_, newArticle: GqlMutationCreateArticleArgs, {dataSources:{article}}: Context){
        return article.createArticle(newArticle)
    }
  },
};
