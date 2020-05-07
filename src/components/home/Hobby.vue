<template>
  <section class="hobby page-block">
    <span
      class="hobby__title"
      v-text="title"
    />
    <p class="hobby__paragraph">
      В зависимости от фазы Луны пишу что-то в опенсорс,
      занимаюсь личными проектами, упарываюсь в книжки
      (как художественные, так и профессиональной направленности),
      стачиваю пальцы о струны гитары, кручу педали.
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    title() {
      return window.innerWidth < 768 ? 'Увлечения' : 'Хобби, увлечения';
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.hobby {
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }

  &__title {
    display: block;
    width: 60%;
    margin-left: 40%;
    margin-bottom: 25px;
    font-family: $titleFont;
    font-size: 22px;
    line-height: 120%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.7);
    position: relative;

    @media screen and (min-width: 768px) {
      width: 50%;
      margin-left: 50%;
      margin-bottom: 50px;
      font-size: 32px;
      line-height: 43px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 36px;
      line-height: 47px;
    }

    &:before {
      content: 'Немного воды';
      position: absolute;
      left: 0;
      top: -24px;
      font-size: 20px;
      text-decoration: line-through;

      @media screen and (min-width: 768px) {
        left: -250px;
        top: 0;
        font-size: inherit;
      }

      @media screen and (min-width: 1024px) {
        left: -275px;
        top: 0;
        font-size: inherit;
      }
    }
  }

  &__paragraph {
    max-width: 720px;
    font-family: $commonFont;
    font-size: 18px;
    line-height: 120%;

    @media screen and (min-width: 768px) {
      font-size: 22px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }
}
</style>
