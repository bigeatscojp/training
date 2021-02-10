import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// 定义仓库
const store = new Vuex.Store({
	// 状态
	state: {
		classification: '',
		index: '',
		name: '',
		address: '',
	},
	mutations: {
		setClassification(state, classification) {
			this.state.classification = classification
		},
		setIndex(state, index) {
			console.log('setIndex')
			this.state.index = index
		},
		setName(state, name) {
			console.log('setName')
			this.state.name = name
		},
		setAddress(state, address) {
			console.log('setAddress')
			this.state.address = address
		},
		setTel(state, Aaddress) {
			console.log('setAddress')
			this.state.address = address
		},
	}
})
export default store
