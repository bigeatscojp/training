<template>
	<view>
		<view class="top">
		  <view class="title">新規お届け先</view>
		</view>
		<view class="addressEditView">
			<text>お届け先名</text>
			<input class="addressEditInput" v-model="remark" type="text">{{remark}}</input>
			<text>郵便番号</text>
			<input class="addressEditInput" v-model="postCode" type="text">{{postCode}}</input>
			<text>アドレス</text>
			<input class="addressEditInput" v-model="address" type="text">{{address}}</input>
			<text>お名前</text>
			<input class="addressEditInput" v-model="name" type="text">{{name}}</input>
			<text>電話番号</text>
			<input class="addressEditInput" v-model="tel" type="text">{{tel}}</input>
		</view>
		<view class="saveButton">
			<button v-on:click="save">保存する</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			save: function () { },
		}
	}
</script>

<style>

</style>
