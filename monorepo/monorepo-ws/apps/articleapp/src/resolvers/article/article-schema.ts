import { gql } from 'apollo-server-express'

export const articleSchema = gql`
    type Article {
        id: ID!
        title: String!,
        authorId: ID!,
    }

    #Queries
    type Query {
        getAllArticles: [Article!]!
        articles: [Article]
    }

    #Mutations
    type Mutation {
        createArticle(id: ID!, title: String!, authorId: ID!): Article!
    }
`