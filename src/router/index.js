import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import select_page from '@/components/select'
import parkingLot from '@/components/parkingLot'
import rideshare from '@/components/RideShare'
import rental from '@/components/rental'
import MainPage from '@/components/MainPage'
import restaurants from '@/components/restaurants'
import restaurant_detail from '@/components/restaurant_detail'

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
      path: '/parking_lot',
      name: 'parking_lot',
      component: parkingLot
    },
    {
      path: '/ride_share',
      name: 'ride_share',
      component: rideshare
    },
    {
      path: '/rental',
      name: 'rental',
      component: rental
    },
    {
      path: '/main',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/restaurants',
      name: 'restaurants-overview',
      component: restaurants
    },
    {
      path: '/restaurant-detail/:name',
      name: 'restaurant-detail',
      component: restaurant_detail
    }
  ]
})
