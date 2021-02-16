import Vue from 'vue'
import App from './App'
import store from './store'
import {
	mock
} from '@/api/mock_test.js'
import VueI18n from 'vue-i18n'
import {
	getI18nMessage,
	getDefaultLocale
} from '@/common/js/i18n.js'
import {
	getLang
} from '@/common/js/storage.js'
import mockjs from 'mockjs'
import mockTest from '@/common/js/mock_test.js'
import redirect from '@/common/js/redirect.js'

console.log(mockjs)
console.log(mockTest)
for (let i = 0; i < mockTest.length; i++) {
	mockjs.mock(mockTest[i].url, mockTest[i].data)
}
Vue.use(VueI18n)

// 使用vuex的简单store模式 https://ask.dcloud.net.cn/article/35021
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

mock();

let currentLang = getLang()

if (!currentLang) {
	currentLang = getDefaultLocale();
}

const i18n = new VueI18n({
	locale: currentLang,
	messages: getI18nMessage(),
})

Vue.prototype._i18n = i18n

const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()

Vue.prototype.checkLogin = function(){
	let token = getToken();
	// var SUID  = uni.getStorageSync('SUID');
	// var SRAND = uni.getStorageSync('SRAND');
	if(!token){
		uni.redirectTo({url:'/pages/account/index.nvue'});
		return false;

	else{
		
	}
}}
	return [token];

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
// 		console.log('需要登录');
// 		if (localStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
// 			next();
// 		} else {
// 			next({
// 				path: '@/pages/account/index',
// 				query: {
// 					redirect: to.fullPath
// 				} // 将跳转的路由path作为参数，登录成功后跳转到该路由
// 			})
// 		}
// 	} else {
// 		next();
// 	}
// });
