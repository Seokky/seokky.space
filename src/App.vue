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

// Wrap an HTMLElement around each element in an HTMLElement array.
(HTMLElement as any).prototype.wrap = function (elms: HTMLElement[]) {
  // Loops backwards to prevent having to clone the wrapper on the
  // first element (see `child` below).
  for (let i = elms.length - 1; i >= 0; i -= 1) {
    const child = (i > 0) ? this.cloneNode(true) : this;
    const el = elms[i];

    // Cache the current parent and sibling.
    const parent = el.parentNode!;
    const sibling = el.nextSibling;

    // Wrap the element (is automatically removed from its current
    // parent).
    child.appendChild(el);

    // If the element had a sibling, insert the wrapper before
    // the sibling to maintain the HTML structure; otherwise, just
    // append it to the parent.
    if (sibling) {
      parent.insertBefore(child, sibling);
    } else {
      parent.appendChild(child);
    }
  }
};
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
