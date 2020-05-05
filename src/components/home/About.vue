<template>
  <section class="about page-block">
    <span class="about__title">Сухие данные</span>

    <ul class="about__list">
      <li class="about__item">
        <span class="about__label">Возраст:</span>
        <span
          class="about__value"
          v-text="age"
        />
      </li>
      <li class="about__item">
        <span class="about__label">Стаж:</span>
        <span
          class="about__value"
          v-text="experience"
        />
      </li>
      <li class="about__item">
        <span class="about__label"><strike>ЧСВ</strike> Позиция:</span>
        <span class="about__value">Middle</span>
      </li>
      <li class="about__item">
        <span class="about__label">Настроение:</span>
        <span class="about__value">боевое</span>
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

.about {
  &__title {
    display: block;
    width: 60%;
    margin-left: 40%;
    margin-bottom: 25px;
    font-family: $titleFont;
    font-size: 22px;
    line-height: 120%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);

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

  &__item {
    display: inline-block;
    font-family: $commonFont;
    font-size: 18px;
    position: relative;

    @media screen and (min-width: 768px) {
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

  &__label {
    padding-right: 10px;
    font-weight: bold;
  }
}
</style>
