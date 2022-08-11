import { PrismaClient, User, FriendShip } from "@monorepo-ws/prisma-user-app-client"
import { ApolloError } from "apollo-server-core"
import * as GqlInterfaces from "../../resolvers/interfaces"

const prisma = new PrismaClient()

function exportUser(user: User): GqlInterfaces.GqlUser {
    return {...user, friends: []}
}

function exportUsers(users: User[]): GqlInterfaces.GqlUser[]{
    return users.map(exportUser)
}

export async function getFriends(id: number): Promise<GqlInterfaces.GqlUser[]> {
    const friends = await prisma.friendShip.findMany({
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

export async function getUserById(obj: GqlInterfaces.GqlQueryGetUserByIdArgs) {
    const user = await prisma.user.findFirstOrThrow({
        where: {
            id: obj.id
        }
    })
    return exportUser(user)
}

export async function getAllUsers(): Promise<GqlInterfaces.GqlUser[]>{
    const users = await prisma.user.findMany()
    return exportUsers(users)
}

export async function addUser(user: GqlInterfaces.GqlMutationCreateUserArgs): Promise<GqlInterfaces.GqlUser> {
    const newUser = await prisma.user.create({
        data: {
            name: user.name,
            married: user.married,
            age: user.age
        }
    })
    return exportUser(newUser)
}

export async function getUserByName(obj: GqlInterfaces.GqlQueryGetUserByNameArgs):Promise<GqlInterfaces.GqlUser> {
    const user = await prisma.user.findFirst({
        where: {
            name: obj.name
        }
    })
    if(user == null){
        return null
    }
    return exportUser(user)
}
 
export async function createdFriendShip(newFriendShip: GqlInterfaces.GqlMutationCreateFriendShipArgs): Promise<GqlInterfaces.GqlUser>{
     const myUser = await prisma.user.findFirst({
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
    const user = await prisma.user.findFirstOrThrow({
        where: {
            id: newFriendShip.friendWith
        }        
    })
    if(user == null){
        throw new ApolloError("friend doesn exist");        
    }
    if(myUser.friendOf == null){
        return AddFriendShip(myUser, newFriendShip)
    }
    const isFriend = myUser.friendOf.find(item => item.friendWithId == newFriendShip.friendWith)
    if(typeof isFriend == 'undefined'){
        return AddFriendShip(myUser, newFriendShip)
    }else{
        throw new ApolloError("users are friends!");        
    }    
}

async function AddFriendShip(user: User,newFriendShip: GqlInterfaces.GqlMutationCreateFriendShipArgs): Promise<GqlInterfaces.GqlUser>{
    await prisma.friendShip.create({
        data: {
            friendOfId: newFriendShip.friendOf,
            friendWithId: newFriendShip.friendWith
        }
    })
    return exportUser(user)
}
