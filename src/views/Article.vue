<template>
  <article
    v-if="!loading"
    class="article"
  >
    <ArticleHeader
      :title="meta.title"
      :date="meta.date"
      :author="meta.author"
    />

    <ArticleBody :html="bodyHTML" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue';
import articleRepository from '@/articleRepository';
import imageRepository from '@/imageRepository';
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
      },
      bodyHTML: '',
      loading: true,
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
    }

    this.$nextTick(() => {
      this.setArticleMeta(articleHTML as string);
      this.setArticleBodyHtml(articleHTML as string);
      this.unsetLoading();
      this.$nextTick(this.replaceImageSources);
    });
  },

  methods: {
    unsetLoading() {
      this.loading = false;
    },

    setArticleMeta(articleHtml: string) {
      const header = articleHtml
        .split('</header>')[0]
        .replace('<header ', '')
        .slice(0, -1);

      const headerMatches = header.match(/\w+="(\w|\d|\s|\.)+"/g);

      if (!headerMatches || headerMatches.length !== 3) {
        throw new Error('Invalid article header');
      }

      const [rawTitle, rawDate, rawAuthor] = headerMatches;
      const matchRe = /".+"/;
      const replpaceRe = /"/g;

      this.meta.title = rawTitle.match(matchRe)![0].replace(replpaceRe, '');
      this.meta.date = rawDate.match(matchRe)![0].replace(replpaceRe, '');
      this.meta.author = rawAuthor.match(matchRe)![0].replace(replpaceRe, '');
    },

    setArticleBodyHtml(articleHtml: string) {
      /* eslint-disable-next-line */
      this.bodyHTML = articleHtml.split('</header>')[1];
    },

    replaceImageSources() {
      const images = Array.from(
        document.getElementsByClassName('article__image'),
      );

      images.forEach(async (img) => {
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
