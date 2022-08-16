import { PrismaClient, User, FriendShip } from "@monorepo-ws/prisma-user-app-client"
import { ApolloError } from "apollo-server-core"
import * as GqlInterfaces from "../../resolvers/interfaces"

export const prisma = new PrismaClient()

export function exportUser(user: User): GqlInterfaces.GqlUser {
    return {...user, friends: []}
}

export function exportUsers(users: User[]): GqlInterfaces.GqlUser[]{
    return users.map(exportUser)
}

