<template>
  <article
    v-if="article"
    class="article"
  >
    <header class="article__header">
      <h1
        class="article__title"
        v-text="article.title"
      />
      <span
        class="article__date"
        v-text="article.date"
      /> &nbsp;
      <span
        class="article__author"
        v-text="article.author"
      />
    </header>

    <section class="article__body">
      <div
        v-for="(part, psIndex) in articleParts"
        :key="psIndex"
      >
        <template
          v-for="(contentBlock, cbIndex) in part"
        >
          <h2
            v-if="contentBlock.type === 'subtitle'"
            :key="cbIndex"
            class="article__subtitle"
            v-text="contentBlock.content"
          />
          <span
            v-if="contentBlock.type === 'attention'"
            :key="cbIndex"
            class="article__attention"
            v-text="contentBlock.content"
          />
          <p
            v-if="contentBlock.type === 'paragraph'"
            :key="cbIndex"
            class="article__paragraph"
            v-text="contentBlock.content"
          />
          <blockquote
            v-if="contentBlock.type === 'quote'"
            :key="cbIndex"
            class="article__quote"
          >
            <p v-text="contentBlock.content" />
          </blockquote>
          <img
            v-if="contentBlock.type === 'image'"
            :key="cbIndex"
            :src="contentBlock.src"
            :style="{ maxWidth: contentBlock.maxWidth}"
          >
        </template>
      </div>
    </section>
  </article>
</template>

<script>
import articleRepository from '@/articleRepository';
import imageRepository from '@/imageRepository';

export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },

  data() {
    return {
      article: null,
      articleParts: [],
    };
  },

  async mounted() {
    this.article = await articleRepository.get(+this.id);

    this.parseArticle();
  },

  methods: {
    parseArticle() {
      this.article.content.forEach((el, idx) => {
        const passage = this.article.content[idx];
        const result = [];

        Object.keys(passage).forEach(async (key) => {
          if (key === 'subtitle') {
            result.push({
              type: 'subtitle',
              content: passage[key],
            });
          }

          if (key === 'paragraph') {
            result.push({
              type: 'paragraph',
              content: passage[key],
            });
          }

          if (key === 'quote') {
            result.push({
              type: 'quote',
              content: passage[key],
            });
          }

          if (key === 'attention') {
            result.push({
              type: 'attention',
              content: passage[key],
            });
          }

          if (key === 'image') {
            const imageName = passage[key].name;
            const image = await imageRepository.get(imageName);
            result.push({
              type: 'image',
              src: image,
              maxWidth: passage[key].maxWidth || 'none',
            });
          }
        });

        this.articleParts.push(result);
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/article';
</style>
