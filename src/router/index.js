import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import select from '@/components/select'
import ElementUI from 'element-ui'

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
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
    }
  ]
})
