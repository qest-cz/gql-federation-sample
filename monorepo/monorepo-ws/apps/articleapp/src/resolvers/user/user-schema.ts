import { gql } from "apollo-server-express";

export const userSchema = gql`
    extend type User @key(fields: "id"){
        id: ID! @external,
        articles: [Article]
    }
`