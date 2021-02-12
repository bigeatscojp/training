<template>
	<view class="c-login">
		<text class="c-login__title">{{title1}}</text>
		<input class="c-login__input" type="text" v-model="id" />
		<text class="c-login__title">{{title2}}</text>
		<input class="c-login__input" type="password" v-model="password" />
		<button class="c-login__button" v-on:click="login">ログイン</button>
		<text class="c-login__text">{{text1}}</text><br />
		<uni-link class="c-login__text" href="https://ljob74fhkn.feishu.cn/docs/doccnngntufqW1KwGo2wVY07lCg" text="Terms and Conditions"></uni-link>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title1: '携帯番号またはメールアドレス',
				title2: 'パスワード',
				text1: 'by proceeding, you agree to these',
			}
		},
		methods:{
			//弹出登录数据
			login() {
				alert("id : " + this.id + '\n' + "password : " + this.password);
			}
		}
	}
</script>

<style>
	.c-login {
		text-align: center;
	}

	.c-login__title {
		color: #B4B4B4;
	}

	.c-login__input {
		height: 30px;
		width: 300px;
		margin: 0 auto;
		border-radius: 10px;
		background-color: #F3F3F3;
		text-align: center;
		font-weight: bold;
	}

	.c-login__button {
		height: 40px;
		width: 300px;
		margin-top: 200px;
		border-radius: 25px;
		background-color: #FCCC00;
		font-weight: bold;
	}

	.c-login__text {
		color: #B4B4B4;
	}
</style>
