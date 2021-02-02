import {
	domain
} from './domain'
//登录
export function login(account, password) {
	return {
		url: domain() + 'user/login',
		method: 'post',
		param: {
			account: account,
			password: password
		}
	}
}
