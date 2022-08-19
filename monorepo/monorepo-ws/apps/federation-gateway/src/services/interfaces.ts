export interface SupergraphStorageManager{
    getSupergraph(): Promise<Buffer>
}