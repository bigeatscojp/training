<template>
	<view class="content">
		<loading :is-loading="isLoadList"></loading>
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<text class="title">{{i18n.test}}</text>			
		</view>
	</view>
</template>

<script>
	import loading from '@/components/loading/loading.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				isLoadList: true
			}
		},
		
		onLoad() {

		},
		
		methods: {

		},
		
		computed: {  
			i18n () {  
			 return this.$t('index')  
			}  
		},
		
		onShow() {
			// console.log('onShow')
			// 动态设置tabBar标题
			const tabBar = this.$t('tabBar');
			// console.log(tabBar)
			uni.setTabBarItem({
				index: 0,
				text:tabBar.index
			})
		},
		
		onReady() {
			// console.log('onReady')
			// 动态设置导航标题
			const { navbar } = this.i18n;
			uni.setNavigationBarTitle({
				title: navbar
			});		
		}
		
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		// color: rgba($color: #F9F9F9, $alpha: .94);
		color: black;
	}
</style>
