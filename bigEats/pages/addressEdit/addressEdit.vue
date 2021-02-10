<template>
	<view>
		<!-- 		<view class="top">
		  <view class="title">新規お届け先</view>
		</view> -->
		<view class="addressEditView">
			<text class="text">お届け先名</text>
			<input class="addressEditInput" v-model="classification" type="text">{{classification}}</input>
			<text class="text">郵便番号</text>
			<input class="addressEditInput" v-model="postCode" type="text">{{postCode}}</input>
			<text class="text">アドレス</text>
			<input class="addressEditInput" v-model="address" type="text">{{address}}</input>
			<text class="text">お名前</text>
			<input class="addressEditInput" v-model="name" type="text">{{name}}</input>
			<text class="text">電話番号</text>
			<input class="addressEditInput" v-model="tel" type="text">{{tel}}</input>
		</view>
		<view>
			<button v-on:click="goto('../index/index')" class="saveButton">保存する</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				remark: '0',
				postCode: '1',
				address: '1.5',
				name: '2',
				tel: '3'
			}
		},

		methods: {
			goto: (url) => {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>
	.text {
		color: #b4b4b4;
		font-size: 14px;
		margin-left: 40rpx;
	}

	.addressEditInput {
		/* 圆角 */
		border-radius: 10px;
		background: #f3f3f3;
		margin: 0px auto;
		height: 35px;
		width: 330px;
		border: 0;
	}

	.saveButton {
		width: 250px;
		height: 40px;
		border-radius: 6px;
		margin: 0px auto;
		margin-top: 225px;
		background: #fccc00;
		border-radius: 20px;
		border: none;
		font-size: 18px;
		font-weight: 700;
		color: #000000;
	}
</style>
