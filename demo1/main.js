import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// console.log('main')

// let obj = {
// 	user:'user',
// 	password:'passsword'
// }
// console.log(obj)
// obj.id = 1
// console.log(obj)

// setInterval(function(){
// 	store.state.count++;
// },1000)
