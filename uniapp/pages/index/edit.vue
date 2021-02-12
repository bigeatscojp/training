<template>
	<view class="c-edit">
		<view class="c-edit__title">
			<input type="text" placeholder="请输入名字" v-model="name" />
		</view>
		<view class="c-edit__title">
			<input type="text" placeholder="请输入地址" v-model="address" />
		</view>
		<view class="c-edit__button">
			<button type="default" v-on:click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		//state
		data() {
			return {
				name: '',
				address: '',
				index: ''
			}
		},
		onLoad(obj) {
			this.index = obj.index
			this.name = obj.name
			this.address = obj.address
		},
		methods: {
			submit() {
				console.log("submit")
				this.$store.commit("setIndex", this.index)
				this.$store.commit("setName", this.name)
				this.$store.commit("setAddress", this.address)
				uni.navigateBack()
			}
		}
	}
</script>

<style>
</style>
