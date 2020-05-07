<template>
  <nav class="navigation page-block">
    <router-link
      class="navigation__item"
      active-class="navigation__item--active"
      title="Главная страница"
      exact
      :to="{ name: 'Home' }"
    >
      Главная
    </router-link>

    <router-link
      class="navigation__item"
      active-class="navigation__item--active"
      title="Мой типа-блог"
      exact
      :to="{ name: 'Blog' }"
    >
      Блог
    </router-link>

    <a
      class="navigation__item"
      target="_blank"
      href="https://github.com/Seokky"
      title="GitHub профиль"
    >
      <picture>
        <source
          :srcset="githubLogoWebp"
          type="image/webp"
        >
        <img
          :src="githubLogoPng"
          alt="GitHub logo"
        >
      </picture>
      GitHub
    </a>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import githubLogoWebp from '@/assets/img/github.webp';
import githubLogoPng from '@/assets/img/github.png';

export default Vue.extend({
  data: () => ({
    githubLogoWebp,
    githubLogoPng,
  }),
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }

  &__item {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: $commonFont;
    font-size: 20px;
    color: black;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &:nth-of-type(2) {
      margin: 0 15px;
    }

    &--active {
      font-weight: bold;
    }

    img {
      margin-right: 4px;
      height: 20px;
    }
  }
}
</style>
