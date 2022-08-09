import { Maybe } from "graphql/jsutils/Maybe"

export interface Article {
    id: number,
    title: string,
    authorId: number
}

export interface GqlUser {
    __typename?: 'User'
    id: number,
    articles: Array<Article>;
}
