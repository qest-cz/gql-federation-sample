export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface GqlArticle {
  __typename?: 'Article';
  authorId: Scalars['ID'];
  id: Scalars['ID'];
  title: Scalars['String'];
}

export interface GqlMutation {
  __typename?: 'Mutation';
  createArticle: GqlArticle;
}

export interface GqlMutationCreateArticleArgs {
  authorId: Scalars['ID'];
  id: Scalars['ID'];
  title: Scalars['String'];
}

export interface GqlQuery {
  __typename?: 'Query';
  articles: Maybe<Array<Maybe<GqlArticle>>>;
  getAllArticles: Array<GqlArticle>;
}

export interface GqlUser {
  __typename?: 'User';
  articles: Maybe<Array<Maybe<GqlArticle>>>;
  id: Scalars['ID'];
}
