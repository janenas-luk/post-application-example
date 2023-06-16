import Vue from 'vue'

const state = {
    showNotification: false,
    body: '',
    title: "Notification"
}

const actions = {

}

const getters = {
    showNotification: state => state.showNotification,
    getNotificationBody: state => state.body,
    getNotificationTitle: state => state.title
}

const mutations = {
    CLOSE_NOTIFICATION(state) {
        state.showNotification = false
    },
    OPEN_NOTIFICATION(state) {
        state.showNotification = true
    },
    SET_NOTIFICATION_TITLE(state, title) {
        state.title = title
    },
    SET_NOTIFICATION_BODY(state, body) {
        state.body = body
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}