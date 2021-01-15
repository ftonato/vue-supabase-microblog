import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
Vue.use(VueRouter);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.name !== 'posts-list' && !to.params.title) {
    next({
      name: 'posts-list',
    });
    return;
  }
  next();
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
