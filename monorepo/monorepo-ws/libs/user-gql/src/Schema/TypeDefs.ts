import {gql} from "apollo-server-express"

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!,
        age: Int!,
        married: Boolean!
        friends: [User!]!
    }

    #Queries
    type Query {
        getAllUsers: [User!]!
        getUserByName(name: String!): User
        getUserByNameOrAge(name: String, age: Int) : [User]!
    }

    #Mutations
    type Mutation {
        createUser(id: ID!, name: String!, age: Int!, married: Boolean!): User!
    }
    `