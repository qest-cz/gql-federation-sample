import { getAllArticles } from '../../services/article-services/index';

export const article = {
  Query: {
    getAllArticles() {
      return getAllArticles();
    },
  },
  Mutation: {},
};
