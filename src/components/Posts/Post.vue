<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">#{{ id }} {{ title }}</p>
      <!-- <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button> -->
    </header>
    <div class="card-content">
      <div class="content">
        {{ body }}
        <br />
        Author: {{ author }}
        <br />
        Post created: <time datetime="2016-1-1">{{ date }}</time>
      </div>
    </div>
    <footer class="buttons card-footer is-flex is-justify-content-center">
      <button
        class="button is-link is-light is-fullwidth"
        @click="goToPost(id)"
      >
        Go to
      </button>
      <button
        class="button is-primary is-light is-fullwidth"
        @click="editPost(id)"
      >
        Edit
      </button>
      <button class="button is-danger is-light is-fullwidth">Delete</button>
    </footer>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "Post",
  props: {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    author: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  methods: {
    ...mapMutations(["SET_TITLE", "SET_COMPONENT", "TOGGLE_MODAL"]),
    ...mapActions(["FETCH_POST"]),
    async editPost(id) {
      this.SET_COMPONENT("EditPost");
      this.SET_TITLE("Edit post");
      await this.FETCH_POST(id);
      this.TOGGLE_MODAL();
    },
    goToPost(id) {},
  },
};
</script>