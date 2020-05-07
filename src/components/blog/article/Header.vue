<template functional>
  <header class="article__header article-block">
    <h1
      class="article__title"
      v-text="props.data.title"
    />
    <span
      class="article__date"
      v-text="props.data.date"
    /> &nbsp;
    <span
      class="article__author"
      v-text="props.data.author"
    />
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { ArticleMeta } from '@/types/ArticleMeta';

export default Vue.extend({
  props: {
    data: {
      type: Object as () => ArticleMeta,
      required: true,
    },
  },
});
</script>
