import { userSchema } from './user/user-schema'
import { user } from './user'

export const modules = [
    {
        typeDefs: userSchema,
        resolvers: user
    }
]