<template>
	<view class="">
		shop
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		
		onLoad() {

		},
		
		methods: {

		},
		
		computed: {  
			i18n () {  
			 return this.$t('sale')  
			}  
		},
		
		onShow() {
			// 动态设置tabBar标题
			const tabBar = this.$t('tabBar');
			uni.setTabBarItem({
				index: 1,
				text:tabBar.sale
			})
		},
		
		onReady() {
			// 动态设置导航标题
			const { navbar } = this.i18n;
			uni.setNavigationBarTitle({
				title: navbar
			});		
		}
		
	}	
</script>

<style>
</style>
