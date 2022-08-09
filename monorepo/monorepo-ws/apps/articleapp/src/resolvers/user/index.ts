import { articles } from '../../fake-data/fake-data';

export const user = {
  User: {
    articles(user) {
      return articles.filter((article) => article.authorId == user.id);
    },
  },
};
