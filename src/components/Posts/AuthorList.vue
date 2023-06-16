<template>
  <div class="select">
    <select>
      <option value="" disabled selected>Select author</option>
      <option v-for="author in authors" :value="author.id" :key="author.id">
        {{ author.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "AuthorList",
  data() {
    return {
      authors: null,
    };
  },
  async created() {
    this.authors = await this.$authors.getAuthors();
  },
};
</script>