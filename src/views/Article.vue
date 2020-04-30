<template>
  <article
    v-if="article"
    class="article"
  >
    <ArticleHeader
      :title="article.title"
      :date="article.date"
      :author="article.author"
    />

    <ArticleBody :article-parts="articleParts" />
  </article>
</template>

<script>
import articleRepository from '@/articleRepository';
import imageRepository from '@/imageRepository';
import ArticleBody from '@/components/article/Body.vue';
import ArticleHeader from '@/components/article/Header.vue';

export default {
  components: {
    ArticleBody,
    ArticleHeader,
  },

  data() {
    return {
      article: null,
      articleParts: [],
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  async mounted() {
    this.article = await articleRepository.get(+this.id);

    if (this.article) {
      this.parseArticle();
    } else {
      this.$router.replace({ name: '404' });
    }
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
