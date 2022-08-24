export interface SupergraphManager {
    getSupergraph(): Promise<Buffer> 
    saveSupergraph(newFile: Buffer)
    checkSupergraph(actual: Buffer): boolean
    setActualSupergraph(actual: Buffer)
}