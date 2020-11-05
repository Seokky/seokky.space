<template>
  <section class="few-words page-block">
    <span class="few-words__title">Пару слов</span>

    <p class="few-words__paragraph">
      Увлеченный фронтендер (по выходным ещё и бэкендер).
    </p>
    <p class="few-words__paragraph">
      Люблю работать над интересными, значимыми проектами.
    </p>
    <p class="few-words__paragraph">
      Служитель культа "Совершенного кода" С. Макконнелла и airbnb.
    </p>

    <span class="few-words__list-title">
      Принимал участие:
    </span>

    <ul class="few-words__list">
      <li class="few-words__item">
        Портал персонифицированного доп. образования
      </li>
      <li class="few-words__item">
        Ethereum лото
      </li>
      <li class="few-words__item">
        Облачное видеонаблюдение с распознаванием лиц
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  getAgeByBirthday,
  getExperienceByStartDate,
} from '@/utils/date-calculator';

export default Vue.extend({
  data: () => ({
    age: '',
    experience: '',
  }),

  mounted() {
    this.age = getAgeByBirthday('February 02, 1999');
    this.experience = getExperienceByStartDate('November 01, 2018');
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.few-words {
  &__title {
    display: block;
    width: 60%;
    margin-left: 40%;
    margin-bottom: 25px;
    font-family: $titleFont;
    font-size: 22px;
    line-height: 120%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.7);

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
  }

  &__paragraph {
    font-size: 19px;
    line-height: 120%;
    margin: 10px 0;

    @media screen and (min-width: 768px) {
      font-size: 22px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }

    &:last-of-type {
      margin-bottom: 30px;
    }
  }

  &__list-title {
    font-size: 19px;
    font-weight: bold;
    display: block;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
      font-size: 22px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }

  &__list {
    list-style: disc;
    padding-left: 30px;
  }

  &__item {
    font-family: $commonFont;
    font-size: 19px;
    line-height: 110%;

    @media screen and (min-width: 768px) {
      font-size: 22px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }

    &:not(:last-of-type) {
      width: 100%;
      margin-bottom: 7px;

      @media screen and (min-width: 768px) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
