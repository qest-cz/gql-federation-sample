import { gql } from "apollo-server";
import { server as testServer } from '../../test-utils'

const queryArticle = gql`
    query{
        articles{
            id,
            title,
            authorId
        }
    }
`
const getArticles = gql`
    query {
        getAllArticles {
            id,
            title,
            authorId
        }
    }
`

describe('article resolver', () => {
    it('should return articles', async () =>{
        const result = await testServer.executeOperation({
            query: queryArticle
        }) 
        expect(result.data).toMatchSnapshot({articles: [
            {
                id: expect.any(String),
                title: expect.any(String),
                authorId: expect.any(String)
            },
            {
                id: expect.any(String),
                title: expect.any(String),
                authorId: expect.any(String)
            },
            {
                id: expect.any(String),
                title: expect.any(String),
                authorId: expect.any(String)
            }
        ]})        
    }),
    it('shoult return articles from getArticles', async () => {
        const result = await testServer.executeOperation({
            query: getArticles
        })
        expect(result.data).toMatchSnapshot({getAllArticles: 
            [
            {
                id: expect.any(String),
                title: expect.any(String),
                authorId: expect.any(String)
            },
            {
                id: expect.any(String),
                title: expect.any(String),
                authorId: expect.any(String)
            },
            {
                id: expect.any(String),
                title: expect.any(String),
                authorId: expect.any(String)
            }
        ]})
    })
})
