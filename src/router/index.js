import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
},{
      path: '/next',
      // component: () => import('@/components/layout/index.vue'),
      children: [{
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta:{title:'首页'}
      }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
