import { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Главная | Seokky | Фронтенд-разработчик',
      description: 'Увлеченный фронтендер (по выходным ещё и бэкендер). Люблю работать над интересными, значимыми проектами. Служитель культа "Совершенного кода" С. Макконнелла и airbnb.',
    },
  },
  {
    path: '/blog/:slug',
    name: 'Article',
    component: () => import(/* webpackChunkName: "article" */ '@/views/Article.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      title: 'Блог | Seokky | Фронтенд-разработчик',
      description: 'Здесь я делюсь интересным на мой взгляд опытом преимущественно в рамках фронтенда. Данный блог не позиционируется в качестве средства массовой информации и источника достоверных данных.',
    },
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog.vue'),
  },
  {
    path: '/not-found',
    name: '404',
    meta: {
      title: 'Пустошь поглотила вас | Seokky',
    },
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/404.vue'),
  },
] as Array<RouteConfig>;
