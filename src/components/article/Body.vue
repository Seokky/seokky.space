<template functional>
  <section class="article__body">
    <div
      v-for="(part, psIndex) in props.articleParts"
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    articleParts: {
      type: Array,
      required: true,
    },
  },
});
</script>
