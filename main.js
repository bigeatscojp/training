import Vue from 'vue'
import App from './App'
import store from './store'
import { mock } from '@/api/mock_test.js'
// 使用vuex的简单store模式 https://ask.dcloud.net.cn/article/35021
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

mock();

const app = new Vue({
	store,
    ...App
})
app.$mount()
