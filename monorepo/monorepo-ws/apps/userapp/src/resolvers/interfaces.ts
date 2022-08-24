export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface GqlMutation {
  __typename?: 'Mutation';
  createFriendShip: GqlUser;
  createUser: GqlUser;
}


export interface GqlMutationCreateFriendShipArgs {
  friendOf: Scalars['Int'];
  friendWith: Scalars['Int'];
}


export interface GqlMutationCreateUserArgs {
  age: Scalars['Int'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
}

export interface GqlQuery {
  __typename?: 'Query';
  getAllUsers: Array<GqlUser>;
  getUserById: GqlUser;
  getUserByName: Maybe<GqlUser>;
  getUserByNameOrAge: Array<Maybe<GqlUser>>;
  users: Maybe<Array<Maybe<GqlUser>>>;
}


export interface GqlQueryGetUserByIdArgs {
  id: InputMaybe<Scalars['Int']>;
}


export interface GqlQueryGetUserByNameArgs {
  name: Scalars['String'];
}


export interface GqlQueryGetUserByNameOrAgeArgs {
  age: InputMaybe<Scalars['Int']>;
  name: InputMaybe<Scalars['String']>;
}

export interface GqlUser {
  __typename?: 'User';
  age: Scalars['Int'];
  friends: Array<GqlUser>;
  id: Scalars['ID'];
  married: Scalars['Boolean'];
  name: Scalars['String'];
}
