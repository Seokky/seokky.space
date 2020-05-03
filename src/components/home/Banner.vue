<template functional>
  <section class="banner">
    <h1 class="banner__position">
      Frontend-разработчик

      <h2 class="banner__nickname">
        <a
          class="banner__tg-link"
          target="_blank"
          href="https://t.me/seokky"
          title="Telegram"
        >@seokky</a>
      </h2>
    </h1>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.banner {
  margin-top: 30px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 90px;
  }

  &__position {
    font-family: $titleFont;
    font-size: 36px;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 46px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 54px;
    }
  }

  &__tg-link {
    font-size: 24px;
    color: black;
    opacity: 0.5;
    text-decoration: none;
    padding: 0 10px;

    @media screen and (min-width: 768px) {
      font-size: 32px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 36px;
    }

    &:hover,
    &:focus {
      color: blue;
      opacity: 0.6;
      transition: all 0.15s ease-in;
    }
  }
}
</style>
