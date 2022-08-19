import { PrismaClient } from "@monorepo-ws/prisma-federation-gateway-client";
import { resolve } from "path";
import { SupergraphStorageManager } from "./interfaces";

export const prisma = new PrismaClient()

export class PrismaManager implements SupergraphStorageManager{
    constructor(private readonly prisma: PrismaClient) {           
    }
    async getSupergraph(): Promise<Buffer> {
        const file = await this.prisma.supergraph.findFirstOrThrow({
            select: {
                file: true
            },
            where: {
                id: process.env.SUPERGRAPH_FILE_NAME
            }
        })
        return new Promise<Buffer>((resolve) => {
            const buff: Buffer = Buffer.from(file.file, "utf-8");
           resolve(buff)
        })
    }
}