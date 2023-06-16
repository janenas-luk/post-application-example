<template>
  <div>
    <h1 class="is-size-1">Posts</h1>
    <div class="block" v-for="post in allPosts" :key="post.id">
      <Post
        :id="post.id"
        :title="post.title"
        :body="post.body"
        :date="post.created_at"
        :author="post.author.name"
      ></Post>
    </div>
    <Pagination @change-page="changePage"></Pagination>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Post from "../components/Posts/Post.vue";
import Pagination from "../components/Posts/Pagination.vue";
import AuthorList from "../components/Posts/AuthorList.vue";

export default {
  name: "Posts",
  components: { Post, Pagination, AuthorList },
  data() {
    return {};
  },
  async created() {
    const data = await this.FETCH_POSTS();
  },
  methods: {
    ...mapActions(["FETCH_POSTS"]),
    changePage(page) {
      this.FETCH_POSTS(page);
    },
  },
  computed: {
    ...mapGetters(["allPosts"]),
  },
};
</script>