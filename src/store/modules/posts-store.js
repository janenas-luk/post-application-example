const state = {
    posts: [],
    posts_count: 0,
    post: null
}

const actions = {
    async FETCH_POSTS({ commit }, page) {
        try {
            const data = await this.getPosts(page)
            commit('SET_POSTS', { posts: data.posts })
            commit('SET_POSTS_COUNT', { total: data.total })
        } catch (e) {
            console.log('Unable to get posts')
        }
    },
    async CREATE_POST({ commit }, post) {
        this.createPost(post.title, post.body, post.author)
    },
    async FETCH_POST({ commit }, id) {
        const post = await this.getPost(id)
        commit('SET_POST', post)
    },
    async PUT_POST({ commit }, post) {
        const response = await this.updatePost(post)
        commit('UPDATE_POST', post)
    }
}

const getters = {
    allPosts: state => state.posts,
    getPost: state => state.post
}

const mutations = {
    SET_POSTS(state, payload) {
        state.posts = payload.posts
    },
    SET_POST(state, post) {
        state.post = post
    },
    UPDATE_POST(state, postT) {
        const postIndex = state.posts.findIndex(post => post.id === postT.id);
        if (postIndex !== -1) {
            state.posts.splice(postIndex, 1, postT);
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}