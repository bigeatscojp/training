import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import i18nMessage from '@/common/js/i18n.js'
import mockjs from 'mockjs'
import mockTest from '@/common/js/mock_test.js'
console.log(mockjs)
console.log(mockTest)
console.log(i18nMessage)

for(let i=0;i<mockTest.length;i++){
	mockjs.mock(mockTest[i].url,mockTest[i].data)
}

Vue.use(VueI18n) 

const i18n = new VueI18n({  
  locale: 'jp',  
  messages: i18nMessage,  
})

Vue.prototype._i18n = i18n

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
