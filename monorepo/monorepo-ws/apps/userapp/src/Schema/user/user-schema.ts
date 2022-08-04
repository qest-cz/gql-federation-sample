import { gql } from 'apollo-server-express'

export const userSchema = gql`
        type User @key(fields: "id") {
        id: ID!
        name: String!,
        age: Int!,
        married: Boolean!
        friends: [User!]!
    }

    #Queries
    type Query {
        users: [User]
        getAllUsers: [User!]!
        getUserByName(name: String!): User
        getUserByNameOrAge(name: String, age: Int) : [User]!
    }

    #Mutations
    type Mutation {
        createUser(id: ID!, name: String!, age: Int!, married: Boolean!): User!
    }
`
