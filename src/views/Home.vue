<template>
  <div>
    <Banner />
    <About />
    <Experience />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/home/Banner.vue';
import About from '@/components/home/About.vue';
import Experience from '@/components/home/Experience.vue';

export default Vue.extend({
  components: {
    Banner,
    About,
    Experience,
  },
});
</script>
