import { PrismaClient, User } from '@monorepo-ws/prisma-user-app-client'
import {DataSource} from 'apollo-datasource'
import { ApolloError } from 'apollo-server-core'
import * as GqlInterfaces from '../resolvers/interfaces'
import { exportUser, exportUsers} from '../services/user-services'
import { IUserDataSource } from './interfaces'

export class UserDataSource extends DataSource implements IUserDataSource {    
    constructor(private readonly prisma: PrismaClient){
        super()
    }
    async getAllUsers(): Promise<GqlInterfaces.GqlUser[]>{
        const users = await this.prisma.user.findMany()
        return exportUsers(users)        
    } 

    async getUserById(obj: GqlInterfaces.GqlQueryGetUserByIdArgs): Promise<GqlInterfaces.GqlUser> {
        const user = await this.prisma.user.findFirstOrThrow({
            where: {
                id: obj.id
            }
        })
        return exportUser(user)
    }

    async addUser(user: GqlInterfaces.GqlMutationCreateUserArgs): Promise<GqlInterfaces.GqlUser> {
        const newUser = await this.prisma.user.create({
            data: {
                name: user.name,
                married: user.married,
                age: user.age
            }
        })
        return exportUser(newUser)
    }
    
    async createdFriendShip(newFriendShip: GqlInterfaces.GqlMutationCreateFriendShipArgs): Promise<GqlInterfaces.GqlUser>{
        const myUser = await this.prisma.user.findFirst({
           where: {
               id: newFriendShip.friendOf
           },
           include: {
               friendOf: true            
           }
       })  
       if(myUser == null){
           throw new ApolloError("user doent exist!");        
       }
       const user = await this.prisma.user.findFirstOrThrow({
           where: {
               id: newFriendShip.friendWith
           }        
       })
       if(user == null){
           throw new ApolloError("friend doesn exist");        
       }
       if(myUser.friendOf == null){
           return this.AddFriendShip(myUser, newFriendShip)
       }
       const isFriend = myUser.friendOf.find(item => item.friendWithId == newFriendShip.friendWith)
       if(typeof isFriend == 'undefined'){
           return this.AddFriendShip(myUser, newFriendShip)
       }else{
           throw new ApolloError("users are friends!");        
       }    
   }

   async getUserByName(obj: GqlInterfaces.GqlQueryGetUserByNameArgs):Promise<GqlInterfaces.GqlUser> {
        const user = await this.prisma.user.findFirst({
            where: {
                name: obj.name
            }
        })
        if(user == null){
            return null
        }
        return exportUser(user)
    }

    async getFriends(id: number): Promise<GqlInterfaces.GqlUser[]> {
        const friends = await this.prisma.friendShip.findMany({
            where: {
                friendOfId: id    
            },
            select: {
                friendWith: true
            },
        })    
        const friendArray = friends.map(item =>  item.friendWith)  
        return exportUsers(friendArray)
    }
    
    private async AddFriendShip(user: User, newFriendShip: GqlInterfaces.GqlMutationCreateFriendShipArgs): Promise<GqlInterfaces.GqlUser>{
        await this.prisma.friendShip.create({
            data: {
                friendOfId: newFriendShip.friendOf,
                friendWithId: newFriendShip.friendWith
            }
        })
        return exportUser(user)
    }    
}

