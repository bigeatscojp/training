import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// 定义仓库
const store = new Vuex.Store({
	// 状态
	state: {
		classification: '',
		name: '',
		address: '',
		tel: '',
		index: '',
	},
	mutations: {
		setIndex(state, index) {
			this.state.index = index
		},
		setClassification(state, classification) {
			this.state.classification = classification
		},
		setName(state, name) {
			console.log('setName')
			this.state.name = name
		},
		setAddress(state, address) {
			console.log('setAddress')
			this.state.address = address
		},
		setTel(state, tel) {
			this.state.tel = tel
		},
	}
})
export default store
