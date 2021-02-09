import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// 定义仓库
const store = new Vuex.Store({
	// 状态
	state: {
		count: 6,
		index:'',
		name:'',
		address:'',
	},
	mutations:{
		add(state){
			this.state.count++
		},
		change(state,number){
			console.log(number)
			this.state.count+=number
		},
		setIndex(state,index){
			console.log('setIndex')
			this.state.index = index
		},
		setName(state,name){
			console.log('setName')
			this.state.name = name
		},
		setAddress(state,address){
			console.log('setAddress')
			this.state.address = address
		},				
	}
})
export default store