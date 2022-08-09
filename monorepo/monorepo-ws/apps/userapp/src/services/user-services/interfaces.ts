import { GqlUser } from '../../resolvers/interfaces';
export type User = Omit<GqlUser, 'friends'>;

export interface FriendShip {
  friendOne: number;
  userTwo: number;
}
