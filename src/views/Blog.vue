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
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
