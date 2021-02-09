<template>
	<view class="c-edit">
		<view class="c-edit__group">
			<input type="text" placeholder="请输入名字" v-model="name">
		</view>
		<view class="c-edit__group">
			<input type="text" placeholder="请输入地址" v-model="address">
		</view>
		<view class="c-edit__btn-group">
			<button type="default" v-on:click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		// state
		data() {
			return {
				name: '',
				address: '',
				index:'',
			}
		},
		onLoad(obj) {
			console.log(obj)
			this.name = obj.name
			this.address = obj.address
			this.index = obj.index
		},
		// mutations
		methods:{
			submit(){
				console.log('submit')
				// uni.setStorageSync('index',this.index)
				// uni.setStorageSync('name',this.name)
				// uni.setStorageSync('address',this.address)
				this.$store.commit('setIndex', this.index)
				this.$store.commit('setName', this.name)
				this.$store.commit('setAddress', this.address)
				// 返回上一个页面
				uni.navigateBack({})
			}
		}
	}
</script>

<style>
	.c-edit {
		padding: 16px;
	}

	.c-edit__group {
		margin-bottom: 16px;
	}
</style>
