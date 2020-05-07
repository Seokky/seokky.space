<template>
  <div id="app">
    <Navigation />

    <router-view id="view" />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Navigation,
    Footer,
  },
});
</script>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/fontface.scss';
@import '@/styles/vars.scss';
@import '@/styles/common.scss';

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: $commonFont;
  display: flex;
  flex-direction: column;
}

#view {
  flex-grow: 1;
}
</style>
