import Vue from 'vue'
import Vuex from 'vuex'
import ModalStore from '../store/modules/modal-store'
import PostsStore from '../store/modules/posts-store'
import PostsAPI from '../store/plugins/posts-api'
import PaginationStore from './modules/pagination-store'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        PaginationStore,
        ModalStore,
        PostsStore,

    },
    plugins: [PostsAPI]
})