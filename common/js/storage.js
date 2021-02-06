// 本地用户信息
const USER_KEY = 'USER_KEY';
// token信息
const TOKEN_KEY = 'TOKEN_KEY';
// 当前设置语言
const CURRENT_LANG = 'CURRENT_LANG';

export function getUser() {
	var ret = '';
	ret = uni.getStorageSync(USER_KEY);
	if (!ret) {
		ret = '{}';
	}
	return JSON.parse(ret);
}

export function setUser(userInfo) {
	uni.setStorageSync(USER_KEY, JSON.stringify(userInfo));
}

export function getToken() {
	var ret = '';
	ret = uni.getStorageSync(TOKEN_KEY);
	console.log('getToken storage.js',ret)
	if (!ret) {
		ret = '';
	}
	return ret;
}

export function setToken(token) {
	uni.setStorageSync(TOKEN_KEY, token);
}

export function setLang(lang) {
	uni.setStorageSync(CURRENT_LANG, lang);
}

export function getLang() {
	return uni.getStorageSync(CURRENT_LANG);
}

//清除本地缓存
export function clearAll() {
	let array = ['USER_KEY', 'TOKEN_KEY', 'CURRENT_LANG']
	for (var i = 0; i < array.length; i++) {
		uni.setStorageSync(array[i], '')
	}
}
