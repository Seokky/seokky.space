<template>
  <section class="social page-block">
    <a
      href="https://t.me/seokky"
      target="_blank"
      class="social__link"
      title="Telegram"
    >Telegram</a>

    <a
      href="mailto:noverin@yandex.ru"
      class="social__link"
      title="Электронная почта"
    >Email</a>

    <a
      href="https://github.com/Seokky"
      target="_blank"
      title="GitHub профиль"
      class="social__link"
    >GitHub</a>

    <router-link
      to="/blog"
      class="social__link"
      title="Мой типа-блог"
    >
      Блог
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.social {
  font-size: 14px;
  display: flex;
  justify-content: center;

  &__link {
    color: black;
    text-decoration: none;
    padding: 0 10px;
    font-size: 18px;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
