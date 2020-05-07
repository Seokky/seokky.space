<template>
  <section class="articles">
    <ArticlePreview
      v-for="(article, idx) in articles"
      :key="idx"
      :data="article"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { ArticleMetaWithId } from '@/types/ArticleMetaWithId';
import articleRepository from '@/articleRepository';
import ArticlePreview from './Preview.vue';

export default Vue.extend({
  components: {
    ArticlePreview,
  },

  data: () => ({
    articles: [] as ArticleMetaWithId[],
  }),

  async beforeMount() {
    this.articles = await this.getArticles();
  },

  methods: {
    getArticles() {
      return articleRepository.getAll();
    },
  },
});
</script>

<style lang="scss" scoped>
.articles {
  margin-top: 60px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
