<template>
  <div>
    <Banner />
    <FewWords />
    <About />
    <Experience />
    <Hobby />
    <Skills />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Banner from '@/components/home/Banner.vue';
import FewWords from '@/components/home/FewWords.vue';
import About from '@/components/home/About.vue';
import Experience from '@/components/home/Experience/index.vue';
import Hobby from '@/components/home/Hobby.vue';
import Skills from '@/components/home/Skills.vue';

export default Vue.extend({
  components: {
    Banner,
    FewWords,
    About,
    Experience,
    Hobby,
    Skills,
  },
});
</script>
