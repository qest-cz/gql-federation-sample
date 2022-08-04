
export interface Article {
    id: number,
    title: string,
    authorId: number
}

export const articles: Article[] = [
    {
        id: 1,
        title: 'title 1',
        authorId: 1
    },
    {
    id: 2,
    title: 'title 2',
    authorId: 1
    },
    {
        id: 3,
        title: 'title 3',
        authorId: 2
    }
]
   