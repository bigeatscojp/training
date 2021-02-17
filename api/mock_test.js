// mockjs是通过npm的方式安装的
// uniapp npm安装 https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81
import Mock from 'mockjs'
import {
	domain
} from './domain'
// Mock的总开关，true开启，false关闭
const isMock = true;
let mockList = [{
		url: 'user/login',
		// 标记是否要开启mock
		isMock: true,
		// http://mockjs.com/examples.html
		mock: {
			status: 100,
			message: '登录成功',
			token: 'token'
		},
	},
	// 其他api...
]

const mockFun = () => {
	if (isMock) {
		mockList.forEach((item, index) => {
			item.url = domain() + item.url
			// console.log(item)
			if (item.isMock) {
				// console.log('do')
				Mock.mock(item.url, item.mock)
			}
		})
	}
}

module.exports = {
	mock: mockFun
}
