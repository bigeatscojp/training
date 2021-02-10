<template>
	<view class="container">
		test
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			goto: (url) => {
				uni.navigateTo({ url })
			}
		}
	}
</script>

<style>
	.container {
	}
</style>
