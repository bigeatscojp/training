import Vue from 'vue'
import Vuex from 'vuex'
import {
	getToken,
	setToken,
	getUser,
	setUser
} from '@/common/js/storage.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		user: getUser(),
		//任務二
		index: '',
		sendName: '',
		mail: '',
		address: '',
		name: '',
		tel: ''
	},
	mutations: {
		login(state, data) {
			setToken(data.token)
			setUser(data.user)
			state.user = data.user
			state.hasLogin = true;
		},
		logout(state) {
			setToken('')
			state.user = {}
			state.hasLogin = false;
		},
		//任務二
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
