<template>
	<view class="c-list">
		<view class="" v-on:tap="goToEdit">
			<text>点击</text>
		</view>
		<item v-for="(item,index) in list" :key="index" :name="item.name" :address="item.address" :index="index"
		 v-on:goToEdit="childGoToEdit"></item>
		<!-- 		<view class="c-list__item" v-for="(item,index) in list" :key="index">
			<view class="">
				<text class="c-list__name">{{item.name}}</text>
			</view>
			<view class="">
				<text class="c-list__address">{{item.address}}</text>
			</view>			
		</view> -->
	</view>
</template>

<script>
	import item from '@/components/index/item.vue'
	export default {
		computed:{
			index(){
				return this.$store.state.index
			},
			name(){
				return this.$store.state.name
			},
			address(){
				return this.$store.state.address
			},						
		},
		components: {
			item,
		},
		data() {
			return {
				title: 'Hello',
				list: []
			}
		},
		// 加载数据的地方
		onLoad() {
			console.log('onLoad')
			this.load()
			console.log(this.list)
		},
		onShow() {
			this.refresh()
		},
		methods: {
			load: function() {
				for (var i = 0; i < 10; i++) {
					this.list[i] = {
						name: 'name' + i,
						address: 'address' + i,
						id: i,
					}
				}
			},
			refresh() {
				if (!this.index) {
					return
				}
				console.log(this.$store.state)
				this.list.splice(this.index,1, {
					name: this.name,
					address: this.address,
					id: this.index,
				})
				console.log('refresh')
			},
			childGoToEdit(obj) {
				console.log('childGoToEdit', obj)
				// alert('跳转了')
			}
		}
	}
</script>

<style>
</style>
