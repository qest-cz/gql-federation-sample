import { Article, articles } from "../FakeData/FakeData";

export const resolvers = {
    Query: {
        getAllArticles(){
            return getArticles()
        },
        articles(){
            return articles
        },
    },
    User: {
        articles(user){
            return articles.filter(article => article.authorId == user.id)
        }
    }
    ,
    Mutation:{
    }
}

function getArticles(): Article[] {
    return articles
}