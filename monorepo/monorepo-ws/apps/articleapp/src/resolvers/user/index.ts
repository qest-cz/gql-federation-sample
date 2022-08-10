import { getAllArticles } from '../../services/article-services';

export const user = {
  User: {
    articles: async (user) => {
      return (await getAllArticles()).filter(
        (article) => article.authorId == user.id
      );
    },
  },
};
