import {gql} from "apollo-server-express"

export const typeDefs = gql`
    type Article {
        id: ID!
        title: String!,
        authorId: ID!,
    }

    extend type User @key(fields: "id"){
        id: ID! @external,
        articles: [Article]
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