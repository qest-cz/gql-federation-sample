import { User, FriendShip, users, friendships } from "../FakeData/FakeData";

export const resolvers = {
    Query: {
        getAllUsers(){
            return getUsers()
        },
        getUserByName(parent: any, args: string){
            return {id: 123, name: "Karel", age: 21, married: false}
        }
    },
    User: {
        name: (parent: any) => parent.name + " Fanda",       
        friends: (parent: any) => getFriend(parent.id)
    },
    Mutation:{
        createUser(parent: any, args:User){
            return addUser(args)
        }
    }
}

function getUsers() : User[] {
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




