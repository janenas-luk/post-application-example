import "babel-polyfill";
import axios from "axios";

export const authors = {}


authors.http = axios.create({ baseURL: SERVER_ADDR })


authors.getAuthors = async function () {
    const authors = await this.http.get("/authors")
    return authors.data
}

authors.getAuthor = async function (id) {
    const author = await this.http.get('/authors', { params: { id: id } })
    return author.data
}


export default {
    install(Vue) {
        Vue.prototype.$authors = authors
    }
}