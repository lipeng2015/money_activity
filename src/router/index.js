import Vue from 'vue'
import Router from 'vue-router'

import VietPrivacy from '../components/VietPrivacy'
import IndonesPrivacy from '../components/IndonesPrivacy'
import TemanPrivacy from '../components/TemanPrivacy'
import HelpCenter from '../components/HelpCenter'
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
    },
    {
      path: '/temanprivacy',
      name: 'temanprivacy',
      component: TemanPrivacy,
      meta:{
        title: 'Teman privasi'
      }
    },
    {
      path: '/helpcenter',
      name: 'center_help',
      component: HelpCenter,
      meta:{
        title: 'center help'
      }
    }
  ]
})
