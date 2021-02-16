const list = [
	{
		url:'/api/login',
		data:{
			status: 200,
			message:'操作失败'
		}
	}
]
export default list
// Mock.mock("请求地址","请求方式",{返回数据的规则});

// //例：
// Mock.mock('./StudentInfo.do', "get", { 
//             'list|4': [{
//                 'id|+1': 1,              //对象的id属性名依次加1
//                 "name": '@cname()',     //随机产生一个中文名
//                 addr: '@county(true)',   //随机产生一个地址
//                 'age|18-60': 1,         //随机产生一个数字 （范围在18~60之间）
//                 birth: '@date()',       //随机产生一个日期
//                 sex: '@integer(0, 1)',  //随机产生一个数学（0/1，0代表男，1代表女）
//                 email: '@EMAIL()',      //随机产生一个邮箱地址
//                 'like|1':['看书','运动','听音乐'],//在数组中随机选择一个
//                 'num1|1-100.2': 1,          //1~100中随机产生一个数字并保留两位小数
//                 mobile: /^1[3-9][0-9]{9}$/  //以正则产生一个手机号
//             }]
//         })
