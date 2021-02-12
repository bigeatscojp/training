import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		index: '',
		name: '',
		address: ''
	},
	mutations: {
		setIndex(state, index) {
			this.state.index = index
		},
		setName(state, name) {
			this.state.name = name
		},
		setAddress(state, address) {
			this.state.address = address
		}
	}
})
export default store
