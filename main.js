import Vue from 'vue'
import App from './App'
import store from './store'
import { mock } from '@/api/mock_test.js'
import VueI18n from 'vue-i18n'
import { getI18nMessage, getDefaultLocale } from '@/common/js/i18n.js'
import { getLang } from '@/common/js/storage.js'

//任務参
import mockjs from 'mockjs'
import mockTest from '@/common/js/mock_test.js'
console.log(mockjs)
console.log(mockTest)

for(let i=0;i<mockTest.length;i++){
	mockjs.mock(mockTest[i].url,mockTest[i].data)
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
