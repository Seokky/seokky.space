<template>
  <article
    v-if="article"
    class="article"
  >
    <ArticleHeader
      :title="meta.title"
      :date="meta.date"
      :author="meta.author"
    />

    <ArticleBody :html="html" />
  </article>
</template>

<script>
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
      article: null,
      html: '',
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

    this.$nextTick(() => {
      if (this.article) {
        this.getArticleMeta();
        this.getHtml();
        this.replaceImageSources();
      } else {
        this.$router.replace({ name: '404' });
      }
    });
  },

  methods: {
    getArticleMeta() {
      let header = this.article.split('</header>')[0];
      header = header.replace('<header ', '');
      header = header.slice(0, -1);

      const [rawTitle, rawDate, rawAuthor] = header.match(/\w+="(\w|\d|\s|\.)+"/g);

      this.meta.title = rawTitle.match(/".+"/)[0].replace(/"/g, '');
      this.meta.date = rawDate.match(/".+"/)[0].replace(/"/g, '');
      this.meta.author = rawAuthor.match(/".+"/)[0].replace(/"/g, '');
    },

    getHtml() {
      /* eslint-disable-next-line */
      this.html = this.article.split('</header>')[1];
    },

    replaceImageSources() {
      this.$nextTick(async () => {
        const img = document.getElementsByClassName('article__image')[0];
        const src = await imageRepository.get(
          img.getAttribute('data-name'),
        );
        img.setAttribute('src', src);
        img.removeAttribute('data-name');
      });
    },
  },
});
</script>

<style lang="scss">
@import '@/styles/article';
</style>
