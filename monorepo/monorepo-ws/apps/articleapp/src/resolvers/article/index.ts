import { articles } from "../../fake-data/fake-data"
import { Article } from "../interfaces"

export const article = {
    Query: {
        getAllArticles(){
            return getArticles()
        },
        articles(){
            return articles
        },
    },
    Mutation:{
    }
}

function getArticles(): Article[] {
    return articles
}