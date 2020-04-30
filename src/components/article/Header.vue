<template functional>
  <header class="article__header">
    <h1
      class="article__title"
      v-text="props.title"
    />
    <span
      class="article__date"
      v-text="props.date"
    /> &nbsp;
    <span
      class="article__author"
      v-text="props.author"
    />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
});
</script>
