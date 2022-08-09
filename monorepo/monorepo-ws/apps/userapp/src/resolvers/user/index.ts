import { users, friendships } from '../../fake-data/fake-data';
import { User } from '../../services/user-services/interfaces';
import { GqlUser } from '../interfaces';

export const user = {
  Query: {
    getAllUsers() {
      return getUsers();
    },
    getUserByName(_, args: string) {
      return { id: 12, name: args, age: 34, married: false };
    },
    users() {
      return users;
    },
  },
  User: {
    friends: (parent: User) => getFriend(Number(parent.id)),
  },
  Mutation: {
    createUser(_, args: GqlUser) {
      return addUser(args);
    },
  },
};

export function getUsers(): User[] {
  return users;
}

function addUser(user: User): User {
  const newUser: User = user;
  users.push(newUser);
  return newUser;
}

function getFriend(id: number): GqlUser[] {
  return friendships
    .filter((item) => item.friendOne == id)
    .map((x) => <GqlUser>users.find((user) => x.userTwo === user.id));
}
