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
      :to="{ name: 'Blog' }"
    >
      Блог
    </router-link>

    <a
      class="navigation__item"
      target="_blank"
      href="https://medium.com/@seokky"
      title="Medium"
    >
      <picture>
        <source
          srcset="@/assets/img/medium.webp"
          type="image/webp"
        >
        <img
          src="@/assets/img/medium.png"
          alt="Medium logo"
        >
      </picture>
      Medium
    </a>

    <a
      class="navigation__item"
      target="_blank"
      href="https://habr.com/ru/users/SeokkySss/posts/"
      title="Habr"
    >
      <picture>
        <source
          srcset="@/assets/img/habr.webp"
          type="image/webp"
        >
        <img
          src="@/assets/img/habr.png"
          alt="Habr logo"
        >
      </picture>
      Habr
    </a>

    <a
      class="navigation__item"
      target="_blank"
      href="https://github.com/Seokky"
      title="GitHub профиль"
    >
      <picture>
        <source
          srcset="@/assets/img/github.webp"
          type="image/webp"
        >
        <img
          src="@/assets/img/github.png"
          alt="GitHub logo"
        >
      </picture>
      GitHub
    </a>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 10px;

  @media screen and (min-width: 500px) {
    justify-content: flex-end;
    margin-bottom: 60px;
  }

  &__item {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: $commonFont;
    font-size: 16px;
    color: black;

    @media screen and (min-width: 370px) {
      font-size: 20px;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &--active {
      font-weight: bold;
    }

    img {
      display: none;
      margin-right: 4px;
      height: 20px;
      border-radius: 50%;

      @media screen and (min-width: 550px) {
        display: block;
      }
    }

    & + * {
      margin-left: 10px;

      @media screen and (min-width: 550px) {
        margin-left: 15px;
      }

      @media screen and (min-width: 1100px) {
        margin-left: 25px;
      }
    }
  }
}
</style>
