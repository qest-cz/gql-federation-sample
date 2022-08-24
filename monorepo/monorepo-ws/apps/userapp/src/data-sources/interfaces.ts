import * as GqlInterfaces  from "../resolvers/interfaces";
import {DataSource} from 'apollo-datasource'

export interface UserDataSource extends DataSource {
    getAllUsers: () => Promise<GqlInterfaces.GqlUser[]>
    getUserById: (obj: GqlInterfaces.GqlQueryGetUserByIdArgs) => Promise<GqlInterfaces.GqlUser>
    addUser: (user: GqlInterfaces.GqlMutationCreateUserArgs) => Promise<GqlInterfaces.GqlUser>
    createdFriendShip: (newFriendShip: GqlInterfaces.GqlMutationCreateFriendShipArgs) => Promise<GqlInterfaces.GqlUser>
    getUserByName: (obj: GqlInterfaces.GqlQueryGetUserByNameArgs) => Promise<GqlInterfaces.GqlUser>
    getFriends: (id: number) => Promise<GqlInterfaces.GqlUser[]>
}