
import  * as GqlInterfaces from '../interfaces';
import { Context as ApolloContext } from 'apollo-server-core';
import { DataSources } from '../../main';
import { Console } from 'console';
 
interface Context extends ApolloContext{
  dataSources: DataSources 
}

export const user = {
  Query: {
    getAllUsers(_, __, c: Context) { 
      return c.dataSources.user.getAllUsers()
    },
    getUserByName(_, args: GqlInterfaces.GqlQueryGetUserByNameArgs, c: Context) {
      return c.dataSources.user.getUserByName(args)
    },
    users(_, __, c: Context) {
      return c.dataSources.user.getAllUsers();
    },
    getUserById(_, args: GqlInterfaces.GqlQueryGetUserByIdArgs, c: Context){
      return c.dataSources.user.getUserById(args)
    }
  },
  User: {
    friends: (parent: GqlInterfaces.GqlUser, __, c: Context) => {
      return c.dataSources.user.getFriends(Number(parent.id))
    },
      
  },
  Mutation: {
    createUser(_, args: GqlInterfaces.GqlMutationCreateUserArgs, c: Context) {  
      return c.dataSources.user.addUser(args)
    },
    createFriendShip(_, args: GqlInterfaces.GqlMutationCreateFriendShipArgs, c: Context){
      return c.dataSources.user.createdFriendShip(args)
    },
  },
};



