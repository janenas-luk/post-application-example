<template>
  <div>
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          v-model="title"
          class="input"
          type="text"
          placeholder="Text input"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Author</label>
      <div class="control">
        <div class="select">
          <select v-model="author">
            <option value="" disabled selected>Select author</option>
            <option
              v-for="author in authors"
              :value="author.id"
              :key="author.id"
            >
              {{ author.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label">Post body</label>
      <div class="control">
        <textarea
          v-model="body"
          class="textarea"
          placeholder="Content"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" @click="saveForm">Save</button>
      </div>
      <div class="control">
        <button class="button" @click="TOGGLE_MODAL">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "CreatePost",
  data() {
    return {
      authors: null,
      author: null,
      title: null,
      body: null,
    };
  },
  methods: {
    ...mapActions(["CREATE_POST", "FETCH_POSTS"]),
    ...mapMutations(["TOGGLE_MODAL"]),
    saveForm() {
      const post = {
        title: this.title,
        body: this.body,
        author: this.author,
      };
      this.CREATE_POST(post);
      this.FETCH_POSTS(this.currentPage);
      this.TOGGLE_MODAL();
    },
  },
  async created() {
    this.authors = await this.$authors.getAuthors();
  },
  computed: {
    ...mapGetters(["currentPage"]),
  },
};
</script>