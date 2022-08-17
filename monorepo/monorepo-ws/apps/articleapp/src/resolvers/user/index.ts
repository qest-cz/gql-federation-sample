
import { Context as ApolloContext } from 'apollo-server-core';
import { DataSources } from '../../main';

interface Context extends ApolloContext{
  dataSources: DataSources 
}

export const user = {
  User: {
    articles: (user, __, c: Context) => {
      return c.dataSources.article.GetArticleByAuthorId(user.id)
    },
  },
};
