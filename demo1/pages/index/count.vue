<template>
	<view class="c-count">
		<view class="">
			<text>{{count}}</text>
		</view>
		<view class="">
			<button type="default" v-on:click="add">加一</button>
			<button type="default" v-on:click="change">加9</button>
		</view>
	</view>
</template>

<script>
	export default {
		computed:{
			count(){
				return this.$store.state.count
			}
		},
		onLoad() {
			// Vue
			console.log('vue',this)
			// store
			console.log('store',this.$store)
			// state
			console.log('state',this.$store.state)
			console.log('count',this.$store.state.count)
		},
		methods:{
			add(){
				// this.$store.state.count++
				this.$store.commit('add')
			},
			change(){
				this.$store.commit('change', 9)
			}
		}
	}
</script>

<style>
</style>
