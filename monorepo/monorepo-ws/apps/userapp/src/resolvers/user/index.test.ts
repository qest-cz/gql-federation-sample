import { gql } from 'apollo-server';
import { server as testServer } from '../../test-utils';
import { getUsers } from './index';

describe('test users', () => {
  test('count array is 4', () => {
    const len: number = getUsers().length;
    expect(len).toBe(4);
  });
});

const query = gql`
  query {
    users {
      id
      name
      married
      age
      friends {
        name
      }
    }
  }
`;
const userByNameQuery = gql`
  query abc($name: String!) {
    getUserByName(name: $name) {
      id
      name
      married
      age
    }
  }
`;

describe('user resolver', () => {
  it('should return users', async () => {
    const result = await testServer.executeOperation({
      query,
    });
    expect(result.data).toMatchSnapshot({
      users: [
        {
          id: expect.any(String),
          name: expect.any(String),
          married: expect.any(Boolean),
          age: expect.any(Number),
          friends: [
            {
              name: expect.any(String),
            },
            {
              name: expect.any(String),
            },
          ],
        },
        {
          id: expect.any(String),
          name: expect.any(String),
          married: expect.any(Boolean),
          age: expect.any(Number),
          friends: [],
        },
        {
          id: expect.any(String),
          name: expect.any(String),
          married: expect.any(Boolean),
          age: expect.any(Number),
          friends: [],
        },
        {
          id: expect.any(String),
          name: expect.any(String),
          married: expect.any(Boolean),
          age: expect.any(Number),
          friends: [],
        },
      ],
    });
  });
  it('get user by name', async () => {
    const result = await testServer.executeOperation({
      query: userByNameQuery,
      variables: { name: 'Jakub' },
    });
    expect(result.data).toMatchSnapshot({
      getUserByName: {
        id: expect.any(String),
        name: expect.any(String),
        married: expect.any(Boolean),
        age: expect.any(Number),
      },
    });
  });
});
