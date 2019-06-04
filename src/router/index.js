import Vue from 'vue'
import Router from 'vue-router'

import VietPrivacy from '../components/VietPrivacy'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/vietprivacy',
      name: 'vietprivacy',
      component: VietPrivacy
    }
  ]
})
