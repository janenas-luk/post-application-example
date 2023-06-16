<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"><slot name="title"></slot></p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <slot name="content"></slot>
      </section>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>
    
  <script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {},
  methods: {},
};
</script>
    
    <style scoped>
.modal-content {
  padding: 1.5rem;
}
</style>