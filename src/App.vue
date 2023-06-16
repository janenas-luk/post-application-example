<template>
  <div id="app" class="columns is-desktop">
    <div class="column is-one-quarter"></div>
    <div class="column">
      <button @click="openCreateForm">Create post</button>
      <Modal v-if="showModal">
        <template v-slot:content>
          <component :is="getComponent"></component>
        </template>
      </Modal>
      <Notification></Notification>
      <router-view></router-view>
    </div>
    <div class="column is-one-quarter"></div>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import Notification from "./components/Notification.vue";
import CreatePost from "./components/Forms/CreatePost.vue";
import EditPost from "./components/Forms/EditPost.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Modal,
    CreatePost,
    EditPost,
    Notification,
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "SET_TITLE", "SET_COMPONENT"]),
    openCreateForm() {
      this.SET_TITLE("Create post");
      this.SET_COMPONENT("CreatePost");
      this.TOGGLE_MODAL();
    },
  },
  computed: { ...mapGetters(["getComponent", "showModal"]) },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>