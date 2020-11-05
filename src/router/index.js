import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component:() => { return import('@/views/Home.vue') },
    children:[
      {
        path:'/proview',
        name:'proview',
        component:() => { return import('@/components/projectView.vue') }
      },
      {
        path:'/firstgame',
        name:'firstgame',
        component:() => { return import('@/views/gamePage/firstgame.vue') }
      }
    ]
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
