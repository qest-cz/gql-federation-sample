import { gql } from 'apollo-server-express';

export const articleSchema = gql`
  directive @tag(name: String!) repeatable on FIELD_DEFINITION | INTERFACE | OBJECT | UNION
  
  type Article {
    id: ID!
    title: String!
    authorId: ID!
  }

  #Queries
  type Query {
    getAllArticles: [Article!]!
    articles: [Article]
    getArticleById(id: ID!): Article!
  }

  #Mutations
  type Mutation {
    createArticle(title: String!, authorId: ID!): Article!
  }
`;
