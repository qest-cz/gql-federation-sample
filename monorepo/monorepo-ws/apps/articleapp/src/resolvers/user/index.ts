
import { Context as ApolloContext } from 'apollo-server-core';
import { DataSources } from '../../main';

interface Context extends ApolloContext{
  dataSources: DataSources 
}

export const user = {
  User: {
    articles: async (user, __, c: Context) => {
      return (await c.dataSources.article.getAllArticles()).filter(
        (article) => article.authorId == user.id
      );
    },
  },
};
