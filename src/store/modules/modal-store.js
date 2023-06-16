import Vue from 'vue'

const state = {
    showModal: false,
    component: '',
    title: "Modal"
}

const actions = {

}

const getters = {
    showModal: state => state.showModal,
    getComponent: state => state.component,
    getTitle: state => state.title
}

const mutations = {
    TOGGLE_MODAL(state) {
        state.showModal = !state.showModal;
    },
    SET_TITLE(state, title) {
        state.title = title
    },
    SET_COMPONENT(state, component) {
        state.component = component
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}