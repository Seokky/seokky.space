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

import articleRepository from '@/repository/articleRepository';
import imageRepository from '@/repository/imageRepository';

import ArticleParser from '@/classes/ArticleParser';

import ArticleBody from '@/components/blog/article/Body.vue';
import ArticleHeader from '@/components/blog/article/Header.vue';

export default Vue.extend({
  components: {
    ArticleBody,
    ArticleHeader,
  },

  data() {
    return {
      meta: {
        title: '',
        description: '',
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

  async created() {
    const articleHTML = await articleRepository.get(this.id);
    this.articleParser = new ArticleParser(articleHTML);

    this.$nextTick(() => {
      this.getArticleMeta();
      this.getArticleBodyHtml();
      this.unsetLoading();
      this.$nextTick(this.replaceImageSources);
    });
  },

  methods: {
    unsetLoading() {
      this.loading = false;
    },

    getArticleBodyHtml() {
      this.bodyHTML = this.articleParser!.getBody();
    },

    getArticleMeta() {
      this.meta = this.articleParser!.getMeta();
    },

    replaceImageSources() {
      this.articleParser!
        .getImages()
        .forEach((img: HTMLElement) => {
          if (!img.hasAttribute('data-name')) {
            throw new Error('Article image do not have \'data-name\' attribute');
          }

          const name = img.getAttribute('data-name') as string;
          const { original, webp } = imageRepository.get(name);

          this.wrapImageWithPicture(img, webp, original);
          img.removeAttribute('data-name');
        });
    },

    wrapImageWithPicture(img: HTMLElement, webpSrc: string, originalSrc: string) {
      img.setAttribute('src', originalSrc);

      const picture = document.createElement('picture');

      if (webpSrc) {
        const source = document.createElement('source');
        source.setAttribute('srcset', webpSrc);
        source.setAttribute('type', 'image/webp');
        picture.appendChild(source);
      }

      (picture as any).wrap([img]);
    },
  },
});
</script>

<style lang="scss">
@import '@/styles/article';
</style>
