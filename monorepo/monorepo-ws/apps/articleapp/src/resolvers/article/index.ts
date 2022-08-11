import { getAllArticles } from '../../services/article-services/index';
import { GqlMutationCreateArticleArgs } from '../interfaces';
import { createArticle } from '../../services/article-services/index';

export const article = {
  Query: {
    getAllArticles() {
      return getAllArticles();
    },
  },
  Mutation: {
    createArticle(_, newArticle: GqlMutationCreateArticleArgs){
        return createArticle(newArticle)
    }
  },
};
