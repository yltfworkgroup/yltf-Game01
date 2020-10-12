import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/yltfhome.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  }
  // ,{
  //   path: '/about',
  //   name: 'About',
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
