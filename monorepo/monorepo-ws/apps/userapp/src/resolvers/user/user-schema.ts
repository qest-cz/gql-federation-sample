import { gql } from 'apollo-server-express';

export const userSchema = gql`
  directive @tag(name: String!) repeatable on FIELD_DEFINITION | INTERFACE | OBJECT | UNION
  
  type User @key(fields: "id") {
    id: ID!
    name: String!
    age: Int!
    married: Boolean!
    friends: [User!]!
  }

  #Queries
  type Query {
    users: [User]
    getAllUsers: [User!]!
    getUserByName(name: String!): User
    getUserByNameOrAge(name: String, age: Int): [User]!
    getUserById(id: Int): User!
  }

  #Mutations
  type Mutation {
    createUser(name: String!, age: Int!, married: Boolean!): User!
    createFriendShip(friendOf: Int!, friendWith: Int!): User!
  }
`;
