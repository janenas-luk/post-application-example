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
        <input v-model="authorId" class="input is-hidden" />
        <input
          v-model="author.name"
          class="input is-disabled"
          type="text"
          disabled
        />
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
        <button class="button is-success" @click="saveForm">Update</button>
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
      id: null,
      authorId: null,
      title: null,
      body: null,
      createdAt: null,
      author: null,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),
    ...mapActions(["PUT_POST"]),
    saveForm() {
      const post = {
        author: this.author,
        title: this.title,
        body: this.body,
        authorId: this.authorId,
        id: this.id,
        created_at: this.createdAt,
        updated_at: new Date(),
      };
      this.PUT_POST(post);
      this.TOGGLE_MODAL();
    },
  },
  created() {
    const post = this.getPost;
    this.id = post.id;
    this.authorId = post.authorId;
    this.title = post.title;
    this.body = post.body;
    this.createdAt = post.created_at;
    this.author = post.author;
  },
  computed: {
    ...mapGetters(["getPost"]),
  },
};
</script>