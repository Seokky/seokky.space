<template>
  <footer class="footer">
    <SocialLinks class="footer__links" />

    <div class="footer__copyright">
      © Все права <b>не</b> защищены
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import SocialLinks from '@/components/SocialLinks.vue';

export default Vue.extend({
  components: {
    SocialLinks,
  },
});
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 60px;
  padding-bottom: 40px;
  border-top: 1px solid rgba(black, 0.2);

  &__links {
    margin-top: 30px;
  }

  &__copyright {
    margin-top: 30px;
    text-align: center;
    color: rgba(black, 0.7);

    b {
      font-weight: bold;
    }
  }
}
</style>
