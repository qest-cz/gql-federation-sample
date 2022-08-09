import { users, friendships } from "../../fake-data/fake-data"
import {User, FriendShip} from '../interfaces'

export const user = {
    Query: {
        getAllUsers(){
            return getUsers()
        },
        getUserByName(parent: any, args: string){
            return {id: 12, name: "Karel", age: 34, married: false}
        },
        users(){
            return users
        }
    },
    User: {      
        friends: (parent: any) => getFriend(parent.id),
    },
    Mutation:{
        createUser(parent: any, args:User){
            return addUser(args)
        }
    }    
}

export function getUsers() : User[] {
    return users
}

function addUser(user: User) :User{
    const newUser: User = user
    users.push(newUser)
    return newUser
}

function getFriend(id: number) :User[] {
    return friendships
        .filter(item =>(item.friendOne == id))
        .map(x =><User> users.find(user => x.userTwo === user.id))
}   