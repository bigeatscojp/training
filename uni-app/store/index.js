import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

//创建仓库
const store = new Vuex.Store({
	//状态
	state: {
		index: '',
		sendName: '',
		mail: '',
		address: '',
		name: '',
		tel: ''
	},
	mutations: {
		setIndex(state, index) {
			console.log('setIndex')
			this.state.index = index
		},
		setSendName(state, sendName) {
			console.log('setSendName')
			this.state.sendName = sendName
		},
		setMail(state, mail) {
			console.log('setMail')
			this.state.mail = mail
		},
		setAddress(state, address) {
			console.log('setAddress')
			this.state.address = address
		},
		setName(state, name) {
			console.log('setName')
			this.state.name = name
		},
		setTel(state, tel) {
			console.log('setTel')
			this.state.tel = tel
		}
	}
})

export default store
