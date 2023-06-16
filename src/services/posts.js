import "babel-polyfill";
import axios from "axios";

export const posts = {}


posts.http = axios.create({ baseURL: SERVER_ADDR })


posts.getPosts = async function (page) {
    page = page ?? 1
    const posts = await this.http.get(`/posts?_expand=author&_page=${page}&_limit=` + POSTS_PER_PAGE)
    let data = { posts: posts.data, total: parseInt(posts.headers['x-total-count']) }
    return data
}

posts.getPost = async function (id) {
    const post = await this.http.get('/posts', { params: { id: id } })
    return post.data
}

posts.createPost = async function (title, body, author) {
    const post = {
        "title": title,
        "body": body,
        "authorId": author,
        "created_at": new Date(),
        "updated_at": new Date()
    }
    const response = await this.http.post('/posts', post)
    return response
}

posts.destroyPost = async function (id) {
    const response = await this.http.delete('/posts/' + id)
    return response
}

export default {
    install(Vue) {
        Vue.prototype.$posts = posts
    }
}