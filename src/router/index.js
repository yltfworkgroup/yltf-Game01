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
    children:[{
        path:'/proview',
        name:'proview',
        component:() => { return import('@/components/projectView.vue') }
      },
      {
        path:'/jisuanqi',
        name:'jisuanqi',
        component:() => { return import('@/components/jisuanqi.vue') }
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
