<template functional>
  <section
    class="article__body article-block"
    v-html="props.html"
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    html: {
      type: String,
      required: true,
    },
  },
});
</script>
