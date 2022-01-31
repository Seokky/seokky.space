<template>
  <section class="skills page-block">
    <span class="skills__title">Технологии</span>

    <div class="skills__row">
      <div class="skills__column">
        <div class="skills__item">
          JavaScript
        </div>
        <div class="skills__item">
          TypeScript
        </div>
      </div>

      <div class="skills__column">
        <div class="skills__item skills__item--righter">
          Vue.js
        </div>
      </div>

      <div class="skills__column">
        <div class="skills__item">
          React.js
        </div>
      </div>

      <div class="skills__column">
        <div class="skills__item">
          Flux
        </div>
      </div>
    </div>

    <div class="skills__row">
      <div class="skills__column">
        <div class="skills__item">
          HTML
        </div>
      </div>

      <div class="skills__column">
        <div class="skills__item">
          JSX
        </div>
      </div>
    </div>

    <div class="skills__row">
      <div class="skills__column">
        <div class="skills__item">
          CSS
        </div>
      </div>

      <div class="skills__column">
        <div class="skills__item">
          SASS(SCSS)
        </div>
      </div>

      <div class="skills__column">
        <div class="skills__item">
          CSS Modules
        </div>
      </div>
    </div>

    <div class="skills__other">
      <div class="skills__item">
        Webpack
      </div>
      <div class="skills__item">
        Ethereum
      </div>
      <div class="skills__item">
        Prerender
      </div>
      <div class="skills__item">
        ООП
      </div>
      <div class="skills__item">
        Unit Tests
      </div>
      <div class="skills__item">
        SOLID
      </div>
      <div class="skills__item">
        Design Patterns
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

$lines-color: rgba(gray, 0.25);

.skills {
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
      content: 'Древо талантов';
      position: absolute;
      left: 0;
      top: -24px;
      font-size: 20px;
      text-decoration: line-through;

      @media screen and (min-width: 768px) {
        left: -275px;
        top: 0;
        font-size: inherit;
      }

      @media screen and (min-width: 1024px) {
        left: -300px;
        top: 0;
        font-size: inherit;
      }
    }
  }

  &__row {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    overflow: auto;

    &:not(:last-of-type) {
      margin-bottom: 15px;

      @media screen and (min-width: 768px) {
        margin-bottom: 25px;
      }
    }
  }

  &__column {
    display: inline-flex;
    flex-direction: column;

    &:first-of-type .skills__item {
      background-color: lavenderblush;
      font-weight: bold;
      margin-left: 0;
    }

    &:not(:last-of-type) .skills__item:after {
      content: '';
      display: block;
      height: 1px;
      width: 20px;
      background: $lines-color;
      position: absolute;
      right: -20px;
      top: 0;
      margin-top: 1.5em;
    }

    &:not(:first-of-type) .skills__item:before {
      content: '';
      display: block;
      height: 1px;
      width: 20px;
      background: $lines-color;
      position: absolute;
      left: -20px;
      top: 0;
      margin-top: 1.5em;
    }

    .skills__item:nth-of-type(2):before {
      content: '';
      display: block;
      height: 125%;
      width: 1px;
      background: $lines-color;
      position: absolute;
      right: -20px;
      top: -75%;
    }
  }

  &__item {
    padding: 1em;
    margin: 5px 10px;
    border: 1px solid rgba(gray, 0.5);
    border-radius: 10px;
    position: relative;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 18px;
    }

    &--righter {
      margin-left: 27px;
    }
  }

  &__other {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .skills__item {
      margin-left: 0;
      margin-right: 10px;
    }
  }
}
</style>
