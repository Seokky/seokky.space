<template functional>
  <div class="article-preview">
    <div class="article-preview__content">
      <h2
        class="article-preview__title"
        v-text="props.data.title"
      />
      <span
        class="article-preview__author"
        v-text="props.data.author"
      />
      <span
        class="article-preview__date"
        v-text="props.data.date"
      />
    </div>

    <div class="article-preview__action-wrapper">
      <router-link
        class="article-preview__action-link"
        :to="{ name: 'Article', params: { slug: props.data.slug } }"
      >
        Читать
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ArticleMetaExtended } from '@/types/ArticleMetaExtended';

export default Vue.extend({
  props: {
    data: {
      type: Object as () => ArticleMetaExtended,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.article-preview {
  padding: 30px 20px;
  margin: 10px 0;
  display: inline-flex;
  flex-wrap: wrap;
  background-color: whitesmoke;

  &__title {
    $underline-outer-space: 10px;

    font-weight: bold;
    font-size: 20px;
    padding-right: 20px;
    padding-bottom: $underline-outer-space;
    margin-bottom: $underline-outer-space;
    border-bottom: 2px solid rgba(black, 0.7);
    position: relative;
    bottom: -5px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 26px;
    }
  }

  &__date,
  &__author {
    opacity: 0.7;
    font-size: 19px;
  }

  &__author {
    display: inline-block;
    flex-basis: 100%;
    margin-right: 10px;
  }

  &__date {
    display: inline-block;
    flex-basis: 100%;
  }

  &__action-wrapper {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  &__action-link {
    background-color: rgba(black, 0.9);
    color: white;
    font-family: $commonFont;
    font-size: 20px;
    text-decoration: none;
    padding: 7px 22px;

    &:hover,
    &:focus {
      cursor: pointer;
      background-color: white;
      color: black;
      border: 2px solid black;
      transition: background-color 0.2s ease-in;
      outline: none;
      padding: 5px 20px;
    }
  }
}
</style>
