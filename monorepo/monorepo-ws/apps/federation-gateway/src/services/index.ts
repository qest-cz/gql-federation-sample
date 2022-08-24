export const checkActualSuperGraph =  (actual: Buffer, newSupergraph: Buffer) : boolean => {
    return actual.equals(newSupergraph)
}
