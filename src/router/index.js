import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import select from '@/components/select'
import MainPage from '@/components/MainPage'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/main',
      name: 'main-page',
      component: MainPage
    }
  ]
})
