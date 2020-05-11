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
import { ArticleMetaExtended } from '@/types/ArticleMetaExtended';
import articleRepository from '@/repository/articleRepository';
import ArticlePreview from './Preview.vue';

export default Vue.extend({
  components: {
    ArticlePreview,
  },

  data: () => ({
    articles: [] as ArticleMetaExtended[],
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
  margin-top: 20px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 60px;
  }
}
</style>
