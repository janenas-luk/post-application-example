const state = {
    posts_count: 0,
    pages: 1,
    current_page: 1
}

const actions = {
    CHANGE_PAGE({ commit, state, dispatch }, page) {
        if (page == 0) {
            page = 1
        }
        if (page == state.pages || page > state.pages) {
            page = state.pages
        }
        commit('SET_CURRENT_PAGE', page)
        dispatch('FETCH_POSTS', page)
    }
}

const getters = {
    totalPosts: state => state.posts_count,
    totalPages: state => state.pages,
    currentPage: state => state.current_page
}

const mutations = {
    SET_POSTS_COUNT(state, payload) {
        state.posts_count = payload.total
        state.pages = Math.ceil(state.posts_count / POSTS_PER_PAGE);
    },
    SET_CURRENT_PAGE(state, page) {
        state.current_page = page
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}