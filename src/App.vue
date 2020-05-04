<template>
  <div id="app">
    <Navigation />

    <router-view />

    <SocialLinks />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navigation from '@/components/Navigation.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Navigation,
    SocialLinks,
    Footer,
  },
});
</script>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/fontface.scss';
@import '@/styles/vars.scss';
@import '@/styles/common.scss';

#app {
  max-width: 1200px;
  margin: 0 auto;
  font-family: $commonFont;
}
</style>
