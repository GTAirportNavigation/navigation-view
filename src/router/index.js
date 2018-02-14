import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import select_page from '@/components/select'
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
      name: 'select_page',
      component: select_page
    },
    {
      path: '/main',
      name: 'main-page',
      component: MainPage
    }
  ]
})
