<template>
  <article
    v-if="!loading"
    class="article"
  >
    <ArticleHeader :data="meta" />
    <ArticleBody :html="bodyHTML" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import { ArticleMeta } from '@/types/ArticleMeta';

import articleRepository from '@/articleRepository';
import imageRepository from '@/imageRepository';

import ArticleParser from '@/classes/ArticleParser';

import ArticleBody from '@/components/article/Body.vue';
import ArticleHeader from '@/components/article/Header.vue';

export default Vue.extend({
  components: {
    ArticleBody,
    ArticleHeader,
  },

  data() {
    return {
      meta: {
        title: '',
        date: '',
        author: '',
      } as ArticleMeta,
      bodyHTML: '',
      loading: true,
      articleParser: null as null | ArticleParser,
    };
  },

  computed: {
    id() {
      return Number(this.$route.params.id);
    },
  },

  async mounted() {
    const articleHTML = await articleRepository.get(this.id);

    if (!articleHTML) {
      this.$router.replace({ name: '404' });
      return;
    }

    this.articleParser = new ArticleParser(articleHTML);

    this.$nextTick(() => {
      this.setArticleMeta();
      this.setArticleBodyHtml();
      this.unsetLoading();
      this.$nextTick(this.replaceImageSources);
    });
  },

  methods: {
    unsetLoading() {
      this.loading = false;
    },

    setArticleMeta() {
      this.meta = this.articleParser!.getMeta();
    },

    setArticleBodyHtml() {
      this.bodyHTML = this.articleParser!.getBody();
    },

    replaceImageSources() {
      this.articleParser!
        .getImages()
        .forEach(async (img) => {
          if (!img.hasAttribute('data-name')) {
            throw new Error('Article image do not have \'data-name\' attribute');
          }

          const imgName = img.getAttribute('data-name') as string;
          const imgSrc = await imageRepository.get(imgName);

          if (!imgSrc) {
            throw new Error(`Invalid article image name: ${imgName}`);
          }

          img.setAttribute('src', imgSrc);
          img.removeAttribute('data-name');
        });
    },
  },
});
</script>

<style lang="scss">
@import '@/styles/article';
</style>
