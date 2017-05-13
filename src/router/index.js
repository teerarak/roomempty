import Vue from 'vue'
import Router from 'vue-router'
import Feeds from '@/components/Feeds'
import Reservations from '@/components/Reservations'
import profile from '@/components/profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feeds',
      component: Feeds
    },
    {
      path: '/reservations/:id/:time',
      name: 'Reservations',
      props: true,
      component: Reservations
    },
    {
      path: '/profile/:id/:amount',
      name: 'profile',
      props: true,
      component: profile
    }
  ]
})
