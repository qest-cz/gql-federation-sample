import { gql } from 'apollo-server';
import { getUsers } from './index'
import { server as testServer } from '../../test-utils'

describe('test users', () => {
    test('count array is 4', () => {
        const len: number = getUsers().length
        expect(len).toBe(4)
    })
})

const query = gql`
    query {
        users{
            id,
            name,
            married,
            age
            friends {
                name
            }
        } 
    }
`
const userByNameQuery = gql`
    query abc($name: String!) {
        getUserByName(name: $name){
            id,
            name,
            married,
             age
        }
    }
`

describe('user resolver', () => {
    it('should return articles for user', async () => {
        const result = await testServer.executeOperation({
            query 
        })
        console.log(JSON.stringify(result.data))
        expect(result.data).toMatchSnapshot({users: usersMatcher})
    })
    it('get user by name', async() => {
       const result = await testServer.executeOperation({
        query: userByNameQuery,
        variables: {name: 'Jakub'}
       })       
    expect(result.data).toMatchSnapshot({getUserByName: getUserByNameMatcher})
    })
})

const getUserByNameMatcher = {
    id: expect.any(String),
    name: expect.any(String),    
    married: expect.any(Boolean),
    age: expect.any(Number),
}

const usersMatcher = [{
    id: expect.any(String),
    name: expect.any(String),    
    married: expect.any(Boolean),
    age: expect.any(Number),
    friends: [{
        name: expect.any(String)
    },
    {   
        name: expect.any(String)}        
    ]
    },
    {
        id: expect.any(String),
        name: expect.any(String),    
        married: expect.any(Boolean),
        age: expect.any(Number),
        friends: []  
    },
    {
        id: expect.any(String),
        name: expect.any(String),    
        married: expect.any(Boolean),
        age: expect.any(Number),
        friends: []  
    },
    {
        id: expect.any(String),
        name: expect.any(String),    
        married: expect.any(Boolean),
        age: expect.any(Number),
        friends: []  
    }
]

