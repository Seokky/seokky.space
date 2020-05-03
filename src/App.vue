<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
