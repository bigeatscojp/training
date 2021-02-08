<template>
	<view class="">
		account
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
			 return this.$t('account')  
			}  
		},
		
		onShow() {
			// 动态设置tabBar标题
			const tabBar = this.$t('tabBar');
			uni.setTabBarItem({
				index: 3,
				text:tabBar.account
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
