import { getUsers } from './index'
describe('test users', () => {
    test('count array is 4', () => {
        const len: number = getUsers().length
        expect(len).toBe(4)
    })
})