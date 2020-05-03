<template functional>
  <section class="about page-block">
    <span class="about__title">Опыт работы</span>

    <ul class="about__list">
      <li class="about__item">
        <span class="about__label">* Все мы сначала фрилансили</span>
        <span class="about__value">
          Лендинги на заказ, личные сайты преподам,
          система тестирования для колледжа, приложуха
          для создания постов в инстаграм и прочий давнокод...
        </span>
      </li>

      <li class="about__item">
        <span class="about__label">* Но однажды пришлось повзрослеть</span>
        <span class="about__value">
          Первый неудачный опыт в маленькой веб-студии,
          бегающей от налогов; первая развилка с легким (CMS-ным)
          и TRUEдным путём; скитания, старания, <strike>страдания...</strike>
        </span>
      </li>

      <li class="about__item">
        <span class="about__label">* И вот он - первый серьёзный проект</span>
        <span class="about__value">
          ПДО - портал персонифицированного доп. образования.
          Всероссийский, между прочим! Делаем SPA из фулстечного монстра на Yii,
          воюем с консерватизмом, не признающим понятие "качество кода",
          через 10 месяцев из-за этого и уходим.
        </span>
      </li>

      <li class="about__item">
        <span class="about__label">* Ethereum Blockchain, Face Recognition</span>
        <span class="about__value">
          AVATAR Lab - однозначно шаг вперёд. SCRUM, интенсивный обмен опытом,
          интересные проекты. Blockchain, TypeScript, Vue.js + Prerender - работаем!
        </span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.about {
  margin-top: 60px;

  &__title {
    display: block;
    width: 60%;
    margin-left: 40%;
    margin-bottom: 25px;
    font-family: $titleFont;
    font-size: 22px;
    line-height: 120%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    position: relative;

    @media screen and (min-width: 768px) {
      width: 50%;
      margin-left: 50%;
      margin-bottom: 50px;
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
        left: -310px;
        top: 0;
        font-size: inherit;
      }
    }
  }

  &__item {
    display: block;
    font-family: $commonFont;
    font-size: 18px;
    margin-bottom: 25px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  &__label {
    padding-right: 10px;
    font-weight: bold;
  }

  &__value {
    display: block;
    line-height: 120%;
    padding-top: 15px;
    padding-left: 20px;

    @media screen and (min-width: 520px) {
      max-width: 80%;
    }

    @media screen and (min-width: 768px) {
      padding-left: 30px;
    }

    @media screen and (min-width: 1024px) {
      max-width: 800px;
    }
  }
}
</style>
