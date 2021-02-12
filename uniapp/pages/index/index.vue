<template>
	<view class="content">
		<text class="title">{{title1}}</text>
		<input class="textBox" v-model="id"/>
		<text class="title">{{title2}}</text>
		<input class="textBox" v-model="password" type="password"/>
		<view class="bottom">
			<button
				id="button"
				class="loginButton"
				type="button" 
				v-on:click="login()">
				ログイン
			</button>
			<text class="bottomText">{{bottomText1}}</text>
			<text class="bottomText" v-bind:href="url">{{bottomText2}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title1: '携帯番号またはメールアドレス',
				title2: 'パスワード',
				bottomText1:'by proceeding, you agree to these',
				bottomText2:'Terms and Conditions'
			}
		},
		onLoad() {

		},
		methods: {
			//弹出登录数据
			login : function () {
				// var buttonEl = document.getElementById("button");
				// buttonEl.style="background-color: #F3F3F3; color: #9E9E9E;";
				alert("id : " + this.id + '\n' + "password : " + this.password);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #B4B4B4;
	}
	
	.textBox{
		height		: 30px;
		width		: 300px;
		border-radius: 10px;
		background-color: #F3F3F3;
		text-align	:center;
		font-weight	: bold;
	}
	
	.bottom{
		margin: 200px 0 0 0;
		text-align: center;
	}
	
	.loginButton{
		height			: 40px;
		width			: 300px;
		border-radius	: 25px;
		background-color: #FCCC00;
		font-weight		: bold;
	}
	
	.bottomText{
		color: #B4B4B4;
	}
</style>
