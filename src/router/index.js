import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TweetsView from '../views/TweetsView.vue';

const routes = [
  { path: '/',  name: 'home', component: HomeView },
  { path: '/tweets',  name: 'tweets', component: TweetsView },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
