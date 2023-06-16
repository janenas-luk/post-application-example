<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a
      @click="CHANGE_PAGE(currentPage - 1)"
      class="pagination-previous"
      :class="{ 'is-disabled': currentPage == 1 }"
      >Previous</a
    >
    <a
      @click="CHANGE_PAGE(currentPage + 1)"
      class="pagination-next"
      :class="{ 'is-disabled': currentPage == totalPages }"
      >Next page</a
    >
    <ul class="pagination-list">
      <li v-for="page in totalPages" :key="page">
        <a
          @click="CHANGE_PAGE(page)"
          class="pagination-link"
          :class="{ 'is-current': currentPage == page }"
          >{{ page }}</a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["SET_CURRENT_PAGE"]),
    ...mapActions(["CHANGE_PAGE"]),
  },
  computed: {
    ...mapGetters(["totalPosts", "totalPages", "currentPage"]),
  },
};
</script>