<template>
	<view class="c-list__item" v-on:click="toEdit">
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
				type: Number,
			},
			name: {
				type: String,
				default () {
					return "name"
				}
			},
			address: {
				type: String,
				default () {
					return "address"
				}
			}
		},
		data() {
			return {}
		},
		methods: {
			toEdit() {
				uni.navigateTo({
					url: "../../pages/index/edit?index=" + this.index + "&name=" + this.name + "&address=" + this.address
				})
				this.$emit('toEdit', {
					name: this.name
				})
			}
		}
	}
</script>

<style>
	.c-list__item {
		padding: 10px;
	}
</style>
