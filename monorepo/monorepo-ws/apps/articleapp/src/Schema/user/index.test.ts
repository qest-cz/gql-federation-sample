import { server } from "@qest/express-utils"
import { gql } from "apollo-server"
import { server as testServer } from "../../test-utils"

const query = gql`
    query {
        getUser {
            id,
            articles {
                id,
                title,
                authorId
            }
        }
    }
`


describe('user resolver', () => {
    it('get article of user', async () => {
        const result = await testServer.executeOperation({
            query: query
        })
        console.log(JSON.stringify(result.data))
        expect(result.data).toMatchSnapshot({getUser: userArticleMatcher})
    })
})

const userArticleMatcher = {
    id: expect.any(String),
    articles: [
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
    ]
}