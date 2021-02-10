<template>
	<view class="container">
		<navigator url="../test/test">test</navigator>
		<button v-on:click="goto('../test/test')">test</button>
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
