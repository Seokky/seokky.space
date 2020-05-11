import { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная | Seokky',
      description: 'Увлеченный фронтендер (по выходным ещё и бэкендер). Люблю работать над интересными, значимыми проектами. Служитель культа "Совершенного кода" С. Макконнелла и airbnb.',
    },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog.vue'),
    meta: {
      title: 'Блог | Seokky',
      description: 'Здесь я делюсь интересным на мой взгляд опытом преимущественно в рамках фронтенда. Данный блог не позиционируется в качестве средства массовой информации и источника достоверных данных.',
    },
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '@/views/Article.vue'),
  },
  {
    path: '/not-found',
    name: '404',
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/404.vue'),
    meta: {
      title: 'Пустошь поглотила вас | Seokky',
    },
  },
] as Array<RouteConfig>;
