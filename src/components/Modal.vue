<template>
  <div class="modal is-active">
    <div class="modal-background" @click="TOGGLE_MODAL"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ getTitle }}</p>
        <button
          class="delete"
          aria-label="close"
          @click="TOGGLE_MODAL"
        ></button>
      </header>
      <section class="modal-card-body">
        <slot name="content"></slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["showModal", "getTitle"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),
  },
};
</script>
  
  <style scoped>
.modal-content {
  padding: 1.5rem;
}
</style>