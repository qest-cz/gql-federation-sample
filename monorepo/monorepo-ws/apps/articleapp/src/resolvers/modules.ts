import { userSchema } from './user/user-schema'
import { articleSchema } from './article/article-schema'
import { user } from './user'
import { article } from './article'

export const modules = [
    {    
        typeDefs: userSchema,
        resolvers: user       
    },
    {   typeDefs: articleSchema,
        resolvers: article
    }
]