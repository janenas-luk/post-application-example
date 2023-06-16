import "babel-polyfill";
import axios from 'axios'

const postsAPI = store => {
    store.http = axios.create({ baseURL: SERVER_ADDR })

    store.getPosts = async function (page) {
        page = page ?? 1
        const posts = await this.http.get(`/posts?_expand=author&_page=${page}&_limit=` + POSTS_PER_PAGE)
        let data = { posts: posts.data, total: parseInt(posts.headers['x-total-count']) }
        return data
    }

    store.getPost = async function (id) {
        const post = await this.http.get('/posts?_expand=author', { params: { id: id } })
        return post.data[0]
    }

    store.updatePost = async function (post) {
        const response = await this.http.put('/posts/' + post.id, { id: post.id, title: post.title, body: post.body, authorId: post.authorId, created_at: post.created_at, updated_at: new Date() })
        return response
    }

    store.createPost = async function (title, body, author) {
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

    store.destroyPost = async function (id) {
        const response = await this.http.delete('/posts/' + id)
        return response
    }
};

export default postsAPI;