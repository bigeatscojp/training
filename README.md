# IDE
HbuilderX

# 项目目录结构
## 官网说明
 - https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e8%a7%84%e8%8c%83

## 本项目特有的目录（uniapp默认的目录不进行说明）

```
.
├── api
│   ├── api.js （后台请求的url列表）
│   ├── domain.js （请求的域名）
│   ├── mock_test.js （把mock的代码放到这里）
│   └── request.js （封装后台请求的js）
├── common
│   ├── js （定义的公共js）
│   │   ├── i18n.js（国际化语言包）
│   │   ├── storage.js（和本地存储相关）
│   │   └── util.js（常用的函数可以放到这里）
│   └── scss （定义的公共scss）
│       ├── base.scss
│       ├── components
│       ├── components.scss
│       ├── controls
│       │   ├── button.scss
│       │   └── input.scss
│       ├── controls.scss
│       └── variables.scss（定义的公共样式变量）
├── components
│   ├── common（公共的组件）
│   │   ├── body.nvue
│   │   ├── demo.nvue（模板组件）
│   │   ├── item.nvue
│   │   └── search.nvue
│   ├── detail（店铺详情对应的组件,其他的页面对应的组件也类似，把该页面专属的组件放到和页面同样名字的文件夹里面）
│   │   ├── cart.nvue
│   │   ├── food.nvue
│   │   └── header.nvue
├── node_modules（使用npm安装方式之后，那些插件会收录到这里）
├── package-lock.json
├── package.json（定义依赖的js插件）
├── pages
│   ├── account（“我的”页面，其他的页面也类型，如果是和“我的”相关的，可以把那些页面都定义到account这个文件夹里面）
│   │   └── index.nvue
│   ├── demo（和例子相关的页面）
│   │   ├── controls.vue
│   │   └── index.nvue（模板页面）
├── store（vuex的简单的store模型）
│   └── index.js
                
```

# scss变量引用
scss和less差不多是css预编译语言，就是在css的基础上追加函数定义和变量定义等功能，目前项目中基本只会用变量定义和引用即可
 - https://www.sasscss.com/

## 相关代码位置
 - /common/scss/variables.scss
 - /common/scss/controls.scss
 - uni.scss

## variables.scss里面定义的内容

```
/* 颜色相关 */
$color-main: #FCCC00; 
$color-gray-1: #B4B4B4;
$color-gray-2: #F3F3F3;
$color-gray-3: #9E9E9E;
$color-gray-4: #4F4F4F;

$color-black-1: #000000;
$color-black-2: #263238;
$color-black-3: #5E5A5A;

$color-blue-1: #0375C7;

$color-red-1: #BE111B;
$color-red-2: rgba(#F40D0D, .71);


/* 字体大小 需要换算rpx */
$font-small-1: 18rpx; // 9px
$font-small-2: 20rpx; // 10px
$font-small-3: 24rpx; //12px
$font-normal: 28rpx; // 14px
$font-big-1: 32rpx; // 16px
$font-big-2: 36rpx; // 18px
$font-big-3: 40rpx; //20px
$font-big-4: 44rpx; // 22px
```

## 什么时候引用变量？
遇到和字体大小和颜色相关的地方基本需要，这里面没有定义到的就不需要引用

## 引用变量

```
/pages/....index.nvue
/components/....xxx.nvue:

// scoped lang="scss" 这两个属性要带上
<style scoped lang="scss">
    // 引入button的样式
	@import '@/common/scss/controls/button.scss';
	// 引入input的样式
	@import '@/common/scss/controls/input.scss';
	.c-xxx {
	    // 引用主题色
	    background-color: $color-main;
	}
</style>
```

# rpx单位编写
 - 效果图的宽度是375px，而uniapp默认的rpx单位是对照750px的，所以写rpx的数值的时候要对应效果图的数值的**两倍**
 - 效果图里面的图片宽度是100px，那在代码里面应该写200rpx
 - HBuilderX中自动转换px为upx：https://ask.dcloud.net.cn/article/35445  这里给rpx设定为0.5

# 国际化处理
## 相关代码位置
 - /common/js/i18n.js
 - /common/js/storage.js
 - main.js
 - App.vue

## 写法
1. 定义对应页面或者组件的语言包，在/common/js/i18n.js，如

```
	// 日文
	jp: {
		// ホーム
		index: {
			// 导航栏标题，每个页面都要设置
			navbar: 'ホーム',	
			addressBtn: '変更する',
			popular: 'お近くの人気店',
			allBtn: 'すべて表示',
			recommendedOrder: 'お勧め',
			popularOrder: '人気順',
			commentOrder: '評価順',
			deliverTimeOrder: '配達時間',
			test: 'テスト index',
		},
		// 底部栏
		tabBar: {
			index: 'ホーム',
			sale: '直売',
			order: '注文',
			account: 'アカウント'
		},
		// 后台接口返回信息国际化
		api: {
			// 具体的规范需要和后端协调后才定
		}
	},
```

2. 在页面或者组件引入i18n对象并使用

```
<template>
	<cbody>
		<view class="c-index">
			<text>{{i18n.test}}</text>
		</view>
	</cbody>
</template>
<script>
	// Get the globalData
	const globalData = getApp().globalData	
	export default {
		computed: {
			i18n() {
			    // 这里的index对应了页面或者组件的代号
				return globalData.$t('index')
			}
		},
	}
</script>
```

# page页面模板
/pages/demo/index.nvue

# 组件模板
/components/common/demo.nvue

# nvue注意事项
## CSS写法
 - 这篇博客有详细说明：https://cloud.tencent.com/developer/article/1688223
 - 官网说明：https://uniapp.dcloud.io/nvue-css

## 运行
 - 同时运行到浏览器和手机模拟器，确保两边的样式和编译没有出错

## 报错提示
 - HbuilderX底下有控制台会输出对应的错误信息
 - 找到对应的错误信息然后google一下 “uniapp ” + 错误信息
 

# 代码提交流程

## 场景说明
通常我们会在个人分支进行开发，假设为分支test，现在我们需要把test分支的代码给反应到develop分支上面，也就是说把test分支的代码合并到develop分支，让develop分支可以获取到test的最新代码。

这里很多时候我们也需要反过来的操作，比如让自己的分支可以拿到最新的develop分支的代码的时候，要注意下面的操作不要弄反了。

## 合并操作
假设现在你在test分支。
1. git add "需要提交的文件"
2. git commit -m "commit message"
3. git pull origin test 
4. git push origin test （把test分支本地代码更新到服务器）
5. git checkout develop（切换到develop分支）
6. git pull origin develop （更新develop分支的最新代码）
7. git merge --no-ff -m "merge message" test（合并test分支）
8. git push origin main（把合并的结果反映到线上）

## 解决冲突
如果在步骤7遇到冲突，解决冲突后进行重复提交操作。
即：
1. git add "解决好冲突的文件"
2. git commit -m "commit message"
3. git pull origin main
4. git push origin main

## 其他注意事项
 - 请确保代码可以正常编译和运行再提交

# class编写规则
BEM命名，令见BEM命名规范文档

# 命名规则
## JS命名规则
和JAVA一样和驼峰命名

## css和class相关的
见BEM命名

## nvue文件命名和组件命名
用_来连接不同单词，和python，PHP，C++差不多

# 页面默认样式
 - 背景颜色：$color-gray-2
 - APP的情况：高度设置通过flex: 1;设定
 - H5的情况： height: 100%;

# 安装外部js插件
 - https://uniapp.dcloud.io/frame?id=npm%e6%94%af%e6%8c%81

# 安装HbuilderX的插件
 - scss插件安装，如果没有安装过的话，编译项目会报错的，安装报错信息去安装就好了
 - 其他插件也是一样




```bash
npm i mockjs
npm i vue-i18n
```
