<template>
  <div class="blog-main page-block">
    <h1 class="blog-main__title">
      Статьи про фронтенд
    </h1>

    <Articles />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Articles from '@/components/blog/Articles/Articles.vue';

export default Vue.extend({
  components: {
    Articles,
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/blog.scss';

.blog-main {
  &__title {
    font-size: 22px;
    text-align: right;
    padding-bottom: 5px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.7);

    @media screen and (min-width: 768px) {
      font-size: 28px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 36px;
      padding-bottom: 6px;
    }
  }
}
</style>
