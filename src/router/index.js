import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue';
import ReadView from '../views/ReadView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path:'/detail/:manga',
    name: 'detail',
    component: DetailView
   },
   {
    path:'/read/:manga/:read_manga/:chapter',
    name: 'read',
    component: ReadView
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
