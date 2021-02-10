<template>
	<view class="list-item" v-on:tap="edit">
		<view class="title">
			<text class="title-text">{{ sendName }}</text>
		</view>
		<view class="adderess">
			<text class="title-text">{{ address }}</text>
		</view>
		<view class="user-imfor">
			<text class="title-text">{{ name }}</text>
			<text class="title-text">{{ tel }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			//可以是数组或对象，用于接收来自父组件的数据
			index: {
				type: Number
			},
			sendName: {
				type: String,
				default () {
					return "自宅"
				}
			},
			address: {
				type: String,
				default () {
					return "東京"
				}
			},
			name: {
				type: String,
				default () {
					return "原田"
				}
			},
			tel: {
				type: String,
				default () {
					return "1158222"
				}
			}
		},
		methods: {
			edit() {
				console.log(this.index)
				uni.navigateTo({
					url: '../../pages/index/addressEdit?index=' + this.index + "&sendName=" + this.sendName + "&address=" + this.address +
						"&name=" + this.name + "&tel=" + this.tel
				})
			}
		}
	}
</script>

<style>
	.list-item {
		padding: 10px;
		border-bottom: 2px solid #F0AD4E;
	}
</style>
