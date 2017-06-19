import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Login from '@/components/Login'

import Home from '@/components/Home'

import Notfund404 from '@/components/Notfund404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      // hidden: true,
      component: Login
    },
    {
    	path: '/',
    	name: 'home',
    	component: Home
    },
    {
      path: '/404',
      hidden: true,
      component: Notfund404
    },
    {
      path: '*',
      redirect: {
        path: '/404'
      }
    }
  ]
})
