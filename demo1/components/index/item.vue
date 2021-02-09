<template>
	<view class="c-list__item" v-on:tap="goToEdit">
		<view class="">
			<text class="c-list__name">{{name}}</text>
		</view>
		<view class="">
			<text class="c-list__address">{{address}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number
			},
			name: {
				type: String,
				default () {
					return "name5"
				}
			},
			address: {
				type: String,
				default () {
					return "name4"
				}
			},
		},
		data() {
			return {
				// name:'',
				// address:'',
			}
		},
		methods: {
			goToEdit(){
				console.log(this.index)
				uni.navigateTo({
					url: '../../pages/index/edit?index='+this.index+"&name="+this.name+"&address="+this.address
				})
				// 通知父组件
				this.$emit('goToEdit',{
					name:this.name
				})
			},
		}
	}
</script>

<style>
	.c-list__item {
		padding: 10px;
		border-top: 1px solid #3F536E;
	}
</style>
