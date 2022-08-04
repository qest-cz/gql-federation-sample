import * as configs  from '@monorepo-ws/shared-configs'

export const environment = {
  production: false,
  PORT: 9000,
  //USER_APP_URL: 'http://localhost:8080/graphql',
  USER_APP_URL: 'http://localhost:' + configs.USER_APP_ENVIROMENTS.PORT + '/graphql',
  ARTICLE_APP_URL: 'http://localhost:' + configs.ARTICLE_APP_ENVIROMENTS.PORT + '/graphql'
};
