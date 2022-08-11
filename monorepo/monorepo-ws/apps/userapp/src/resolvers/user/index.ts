
import  * as GqlInterfaces from '../interfaces';
import { getFriends, getAllUsers, addUser, getUserByName, createdFriendShip, getUserById } from '../../services/user-services';

export const user = {
  Query: {
    getAllUsers() {
      return getAllUsers();
    },
    getUserByName(_, args: GqlInterfaces.GqlQueryGetUserByNameArgs) {
      return getUserByName(args)
    },
    users() {
      return getAllUsers();
    },
    getUserById(_, args: GqlInterfaces.GqlQueryGetUserByIdArgs){
      getUserById(args)
    }
  },
  User: {
    friends: (parent: GqlInterfaces.GqlUser) => getFriends(Number(parent.id)),
  },
  Mutation: {
    createUser(_, args: GqlInterfaces.GqlMutationCreateUserArgs) {  
      return addUser(args)
    },
    createFriendShip(_, args: GqlInterfaces.GqlMutationCreateFriendShipArgs){
      return createdFriendShip(args)
    },
  },
};



