<template>
	<view class="c-list">
		<item v-for="(item,index) in list" :key="index" :name="item.name" :address="item.address" :index="index">
		</item>
	</view>
</template>

<script>
	//导入组件
	import item from '@/components/index/item.vue'
	export default {
		computed: {
			index() {
				return this.$store.state.index
			},
			name() {
				return this.$store.state.name
			},
			address() {
				return this.$store.state.address
			}
		},
		components: {
			item
		},
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.load();
		},
		onShow() {
			this.refresh();
		},
		methods: {
			load: function() {
				for (var i = 0; i < 10; i++) {
					this.list[i] = {
						name: "name" + i,
						address: "address" + i,
					}
				}
			},
			refresh() {
				console.log(this.$store.state)
				this.list.splice(this.index, 1, {
					name: this.name,
					address: this.address
				})
			}
		}
	}
</script>

<style>
	.c-list__item {
		border-bottom: 1px solid #555555;
	}
</style>
