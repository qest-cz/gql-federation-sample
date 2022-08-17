import { testServer } from '@monorepo-ws/server';
import { modules } from './resolvers/modules';
import {DataSource as ApolloDataSources} from 'apollo-datasource'
import { UserDataSource } from './data-sources/interfaces';
import  * as GqlInterfaces from './resolvers/interfaces'
import { FriendShip, User } from '@monorepo-ws/prisma-user-app-client'; 
import * as UserServices from './services/user-services' 
import { DataSources } from './main'

export const server = testServer(modules, (): DataSources => ({user: new FakePrismaUserDataSource()}));

const testUserArray: User[] = [ {name: 'Jakub', age: 25, married: true, id: 1},
                                {name: 'Karel', age: 30, married: false, id: 2}] 
const testFriendShip: FriendShip[] =  [{friendOfId: 1, friendWithId: 2}]

class FakePrismaUserDataSource extends ApolloDataSources implements UserDataSource{
    constructor(){
        super()
    }

    async getAllUsers(): Promise<GqlInterfaces.GqlUser[]>{
        return UserServices.exportUsers(testUserArray)
    }

    async getUserById(obj: GqlInterfaces.GqlQueryGetUserByIdArgs): Promise<GqlInterfaces.GqlUser> {
        return UserServices.exportUser(testUserArray.find(item => item.id == obj.id))
    }

    async addUser(user: GqlInterfaces.GqlMutationCreateUserArgs): Promise<GqlInterfaces.GqlUser> {
        const newUser: User = {name: user.name, id: 3, age: user.age, married: user.married}
        testUserArray.push()
        return UserServices.exportUser(newUser)
    }

    async createdFriendShip(newFriendShip: GqlInterfaces.GqlMutationCreateFriendShipArgs): Promise<GqlInterfaces.GqlUser>{
        const friendShip: FriendShip = {friendOfId: newFriendShip.friendOf, friendWithId: newFriendShip.friendWith}
        testFriendShip.push(friendShip)
        return UserServices.exportUser(testUserArray[1]) 
    }

    async getUserByName(obj: GqlInterfaces.GqlQueryGetUserByNameArgs):Promise<GqlInterfaces.GqlUser> {
        return UserServices.exportUser(testUserArray.find(x => x.name == obj.name))
    }

    async getFriends(id: number): Promise<GqlInterfaces.GqlUser[]> {
        const friends = testFriendShip.filter(item => item.friendOfId == id)
        .map(item => <User> testUserArray.find(user => user.id == item.friendWithId))
        return UserServices.exportUsers(friends)
    }
}