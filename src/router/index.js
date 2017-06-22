import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Login from '@/components/Login'

import Home from '@/components/Home'

import Notfund404 from '@/components/Notfund404'

import Form from '@/components/part1/Form'

import List from '@/components/part1/List'

import Table from '@/components/part1/Table'

import Page4 from '@/components/part2/page4'

import Page5 from '@/components/part2/page5'

import Page6 from '@/components/part3/page6'

import Chart from '@/components/charts/chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      hidden: true,
      component: Login
    },
    {
    	path: '/',
    	name: '导航一',
    	component: Home,
      iconCls: 'el-icon-message',
      children: [
            { path: '/table', component: Table, name: 'Table' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: List, name: '列表' },
        ] 
    },
    {
      path: '/',
      name: '导航二',
      component: Home,
      iconCls: 'el-icon-message',
      children: [
            { path: '/page4', component: Page4, name: '页面4' },
            { path: '/page5', component: Page5, name: '页面5' }
        ] 
    },
    {
      path: '/',
      // name: '导航三',
      component: Home,
      iconCls: 'el-icon-message',
      leaf: true,
      children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ] 
    },
    {
      path: '/',
      name: 'charts',
      component: Home,
      iconCls: 'el-icon-message',
      children: [
            { path: '/chart', component: Chart, name: 'chart1' }
        ] 
    },
    {
      path: '/404',
      hidden: true,
      component: Notfund404
    },
    {
      path: '*',
      hidden: true,
      redirect: {
        path: '/404'
      }
    }
  ]
})
