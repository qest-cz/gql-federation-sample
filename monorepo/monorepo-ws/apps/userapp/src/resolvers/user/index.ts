
import  * as GqlInterfaces from '../interfaces';
import { Context as ApolloContext } from 'apollo-server-core';
import { DataSources } from '../../main';
import { Console } from 'console';
 
interface Context extends ApolloContext{
  dataSources: DataSources 
}

export const user = {
  Query: {
    getAllUsers(_, __, {dataSources: {user}}: Context) { 
      return user.getAllUsers()
    },
    getUserByName(_, args: GqlInterfaces.GqlQueryGetUserByNameArgs, {dataSources: {user}}: Context) {
      return user.getUserByName(args)
    },
    users(_, __, {dataSources: {user}}: Context) {
      return user.getAllUsers();
    },
    getUserById(_, args: GqlInterfaces.GqlQueryGetUserByIdArgs, {dataSources: {user}}: Context){
      return user.getUserById(args)
    }
  },
  User: {
    friends: (parent: GqlInterfaces.GqlUser, __, {dataSources: {user}}: Context) => {
      return user.getFriends(Number(parent.id))
    },
      
  },
  Mutation: {
    createUser(_, args: GqlInterfaces.GqlMutationCreateUserArgs, {dataSources: {user}}: Context) {  
      return user.addUser(args)
    },
    createFriendShip(_, args: GqlInterfaces.GqlMutationCreateFriendShipArgs, {dataSources: {user}}: Context){
      return user.createdFriendShip(args)
    },
  },
};



