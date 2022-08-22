import { PrismaClient, User } from '@monorepo-ws/prisma-user-app-client'
import {DataSource} from 'apollo-datasource'
import { ApolloError } from 'apollo-server-core'
import * as GqlInterfaces from '../resolvers/interfaces'
import { exportUser, exportUsers} from '../services/user-services'
import { UserDataSource } from './interfaces'

export class PrismaUserDataSource extends DataSource implements UserDataSource {    
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
        const friendOf = await this.prisma.user.findFirstOrThrow({
           where: {
               id: newFriendShip.friendOf
           },
           include: {
               friendOf: true            
           }
       })  
       await this.prisma.user.findFirstOrThrow({
        select: {
            id: true
        },
           where: {
               id: newFriendShip.friendWith
           }        
       })
       if(friendOf.friendOf == null){
           return this.AddFriendShip(friendOf, newFriendShip)
       }       
       const isFriend = friendOf.friendOf.some(item => item.friendWithId == newFriendShip.friendWith)
       if(!isFriend){
           return this.AddFriendShip(friendOf, newFriendShip)
       }else{
           throw new ApolloError("users are friends!");        
       }    
   }

   async getUserByName(obj: GqlInterfaces.GqlQueryGetUserByNameArgs):Promise<GqlInterfaces.GqlUser> {
        const user = await this.prisma.user.findFirstOrThrow({
            where: {
                name: obj.name
            }
        })
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

