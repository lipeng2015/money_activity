import Vue from 'vue'
import Router from 'vue-router'

import VietPrivacy from '../components/VietPrivacy'
import IndonesPrivacy from '../components/IndonesPrivacy'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/vietprivacy',
      name: 'vietprivacy',
      component: VietPrivacy,
      meta:{
        title: 'Thỏa thuận bảo mật'
      }
    },
    {
      path: '/indonesprivacy',
      name: 'indonesPrivacy',
      component: IndonesPrivacy,
      meta:{
        title: 'Perjanjian privasi'
      }
    }
  ]
})
