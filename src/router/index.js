import Vue from 'vue'
import Router from 'vue-router'

import VietPrivacy from '../components/VietPrivacy'
import IndonesPrivacy from '../components/IndonesPrivacy'
import TemanPrivacy from '../components/TemanPrivacy'
import HelpCenter from '../components/HelpCenter'
import PhiPrivacy from '../components/PhiPrivacy'
import Home from '../components/Home';
import appPrivacy from '../components/appPrivacy';
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
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title: '首页'
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
      path: '/appPrivacy',
      name: 'appPrivacy',
      component: appPrivacy,
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
    },
    {
      path: '/phiprivacy',
      name: 'phiPrivacy',
      component: PhiPrivacy,
      meta:{
        title: 'phi pravicy'
      }
    }
  ]
})
