import Vue from 'vue';
import VueRouter from 'vue-router';
import ArticleParser from '@/classes/ArticleParser';
import articleRepository from '@/repository/articleRepository';
import routes from './routes';
import routerUtils from './utils';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name === 'Article') {
    const articleHTML = await articleRepository.get(to.params.slug);

    if (!articleHTML) {
      next({ name: '404' });
      return;
    }

    const parser = new ArticleParser(articleHTML);
    const meta = parser.getMeta();

    routerUtils.setPageTitle(meta.title);
    routerUtils.setPageDescription(meta.description);
  } else {
    routerUtils.setPageTitle(to.meta.title);
    routerUtils.setPageDescription(to.meta.description);
  }

  next();
});

export default router;
