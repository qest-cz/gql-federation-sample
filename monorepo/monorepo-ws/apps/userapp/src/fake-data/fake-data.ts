import { User, FriendShip } from '../services/user-services/interfaces';

export const friendships: FriendShip[] = [
  { friendOne: 1, userTwo: 2 },
  { friendOne: 1, userTwo: 3 },
];

export const users: User[] = [
  {
    id: 1,
    name: 'Jakub',
    age: 19,
    married: true,
  },
  {
    id: 2,
    name: 'Pepa',
    age: 45,
    married: false,
  },
  {
    id: 3,
    name: 'Honza',
    age: 32,
    married: true,
  },
  {
    id: 4,
    name: 'Tomas',
    age: 21,
    married: false,
  },
];
