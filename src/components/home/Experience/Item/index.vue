<template functional>
  <li class="experience__item">
    <span
      class="experience__label"
      v-text="props.label"
    />
    <span
      class="experience__value"
      v-html="props.value"
    />
  </li>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.experience {
  &__item {
    display: block;
    font-family: $commonFont;
    font-size: 19px;
    margin-bottom: 25px;

    @media screen and (min-width: 768px) {
      font-size: 22px;
    }

    @media screen and (min-width: 1024px) {
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
