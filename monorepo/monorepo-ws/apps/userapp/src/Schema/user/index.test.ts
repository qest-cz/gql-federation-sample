import * as funkce from './index'
describe('test users', () => {
    test('count array is 4', () => {
        const len: number = funkce.getUsers().length
        expect(len).toBe(4)
    })
})