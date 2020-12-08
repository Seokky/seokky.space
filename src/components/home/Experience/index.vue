<template>
  <section class="experience page-block">
    <span class="experience__title">Опыт работы</span>

    <ul class="experience__list">
      <ExperienceItem
        v-for="item in items"
        :key="item.label"
        v-bind="item"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ExperienceItem from './Item/index.vue';

export default Vue.extend({
  components: {
    ExperienceItem,
  },

  data: () => ({
    items: [
      {
        label: '* Все мы сначала фрилансили',
        value: `Лендинги на заказ, личные сайты преподам,
          система тестирования для колледжа, приложуха
          для создания постов в инстаграм и прочий давнокод...`,
      },
      {
        label: '* Но однажды пришлось повзрослеть',
        value: `Первый неудачный опыт в маленькой веб-студии,
          бегающей от налогов; первая развилка с легким (CMS-ным)
          и TRUEдным путём; скитания, старания, <strike>страдания...</strike>`,
      },
      {
        label: '* И вот он - первый серьёзный проект',
        value: `ПДО - портал персонифицированного доп. образования.
          Всероссийский, между прочим! Делаем SPA из фулстечного монстра на Yii,
          пишем много сложных форм и валидируем их.`,
      },
      {
        label: '* Ethereum Blockchain, Face Recognition',
        value: `AVATAR Lab - однозначно шаг вперёд. SCRUM, интенсивный обмен опытом,
          интересные проекты. Blockchain, TypeScript, Vue.js + Prerender - работаем!`,
      },
      {
        label: '* Первая крупная компания',
        value: `Timeweb. Принимаем активное участие в проекте топ-3 хостинга Российского
          сегмента интернета. Продвигаем культуру кода и строгую типизацию.`,
      },
      {
        label: '* Первая огромная компания',
        value: `МТС - компания, ради которой, кажется, был проделан весь путь.
          Технически компетентное руководство, развитая культура кода и интересные проекты.
          Вносим свой вклад и продолжаем развиваться!`,
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.experience {
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
      content: 'Мокрые данные';
      position: absolute;
      left: 0;
      top: -24px;
      font-size: 20px;
      text-decoration: line-through;

      @media screen and (min-width: 768px) {
        left: -280px;
        top: 0;
        font-size: inherit;
      }

      @media screen and (min-width: 1024px) {
        left: -310px;
        top: 0;
        font-size: inherit;
      }
    }
  }
}
</style>
