
import { Context as ApolloContext } from 'apollo-server-core';
import { DataSources } from '../../main';

interface Context extends ApolloContext{
  dataSources: DataSources 
}

export const user = {
  User: {
    articles: (user, __, {dataSources:{article}}: Context) => {
      return article.GetArticleByAuthorId(user.id)
    },
  },
};
