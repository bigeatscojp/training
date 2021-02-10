<template>
	<view class="loginView">
	    <view class="top">
	        <text class="tittle">{{ accountTittle }}</text>
	        <input class="textBox" v-model="userName">
	        <text class=" tittle">{{ passTittle }}</text>
	        <input class="textBox" v-model="passWord" type="password">
	    </view>
	
	     <view class="bottom" style="margin-top: 100px;">
	        <button type="button" @click="login">ログイン</button>
	        <text>{{ war }}</text>
	        <a href="http://www.google.com">{{ link }}</a>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				accountTittle : "携帯番号またはメールアドレス",
				passTittle : "パスワード",
				war : "By proceeding you agree to there",
				link : "Terms and Conditions",
				userName : "",
				passWord : ""
			}
		},
		onLoad() {
	
		},
		methods: {
			login : function(){
				alert("ユーザー：" + this.userName + "\nパスワード:" + this.passWord);
	}
		}
	}
</script>

<style>
	.loginView{
	    margin: 0 auto;
	    width: 375px;
	    text-align: center;
	}
	.bottom{
	    margin: 200rpx, 0, 0;
	}
	.tittle{
		height: 14rpx;
		font-size: 14rpx;
	}
</style>
