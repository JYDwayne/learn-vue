// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css' 

Vue.config.productionTip = false

import Mock from './mock'

Mock.bootstrap();

Vue.use(ElementUI)

/* eslint-disable no-new */
router.beforeEach( (to, from, next) => {
	// console.log(to);
	//判断路径是不是登录路径
	
	if (to.path == '/login') {
		// localStorage.removeItem('userinfo')
	} 

	//如果没有存储登录信息,并且路径不是login,跳转到login
	let suerInfo = JSON.parse(localStorage.getItem('userinfo'));
	if (!suerInfo && to.path != '/login') {

		next({path: '/login'})
	} else {
		next()
	}
	
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
