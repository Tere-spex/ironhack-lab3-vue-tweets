import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TweetsView from '../views/TweetsView.vue';
import TweetsByComponents from '../views/TweetsView2.vue';

const routes = [
  { path: '/',  name: 'home', component: HomeView },
  { path: '/tweets',  name: 'tweets', component: TweetsView },
  { path: '/tweetsbycomponents',  name: 'tweetsbycomponents', component: TweetsByComponents },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
