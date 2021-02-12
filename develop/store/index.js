import Vue from 'vue'
import Vuex from 'vuex'
import {getToken, setToken, getUser, setUser} from '@/common/js/storage.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		hasLogin:false,
		user: getUser(),
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
        }
    }
})

export default store
