import Router from 'vue-router';

import List from '@/components/List';
import Post from '@/components/Post';

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'posts-list',
      component: List,
    },
    {
      path: '/post',
      name: 'post-item',
      component: Post,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
