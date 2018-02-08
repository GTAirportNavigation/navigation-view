import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import select from '@/components/select'
import MintUI from 'mint-ui'

Vue.use(Router);
Vue.use(MintUI);

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

  ]
})
