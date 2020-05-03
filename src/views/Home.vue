<template>
  <div>
    <section class="page-block">
      <h2>Сухие данные</h2>

      <ul>
        <li>
          1
        </li>
        <li>
          1
        </li>
        <li>
          1
        </li>
        <li>
          1
        </li>
        <li>
          1
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    age() {
      const birthday = new Date('February 02, 1999');
      const now = new Date();

      return now.getFullYear() - birthday.getFullYear();
    },
    experience() {
      const start = new Date('November 01, 2018');
      const now = new Date();

      return now.getFullYear() - start.getFullYear();
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
