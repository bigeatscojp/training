<template>
	<view>
		<view>
			<view class="top">
				<!-- <view class="title">お届け先</view> -->
				<!-- <navigator url="../addressInfo/addressInfo">新規</navigator> -->
				<view class="new">新規</view>
			</view>
		</view>
		<item v-for="(item,index) in list" :key="index" :classification="item.classification" :address="item.address" :index="index"
		 :name="item.name" :tel="item.tel" v-on:click="childGoToEdit"></item>
		<!-- <view>
			
			<view class="list-item addressDiv" v-for="item in list" url="../addressEdit/index">
				<text class="classification">{{item.classification}}</text>
				<view>
					<text class="address">{{item.address}}</text>
				</view>
				<view>
					<span class="nameAndTel">{{item.name}}</span>
				</view>
				<view>
					<span class="nameAndTel">{{item.tel}}</span>
				</view>
			</view>
		</view> -->
	</view>
</template>
<script>
	import item from '@/components/item/item.vue'
	import addressEdit from '@/pages/addressEdit/addressEdit.vue'
	export default {
		components: {
			item,
		},
		computed: {
			classification() {
				return this.$store.state.classification
			},
			name() {
				return this.$store.state.name
			},
			address() {
				return this.$store.state.address
			},
			tel() {
				return this.$store.state.tel
			},
		},

		// onLoad() {
		// 	this.load()
		// 	console.log('onLoad')
		// },


		data() {
			return {
				 list: [
				//	{
				// 		classification: "自宅",
				// 		address: "東京都中央区銀座1丁目8-19 キラリトギンザ　11F",
				// 		name: "佐藤 貞英",
				// 		tel: "08034981199",
				// 		// classification: this.$store.state.classification,
				// 		// address: this.$store.state.address,
				// 		// name: this.$store.state.name,
				// 		// tel: this.$store.state.tel,
				// 	},
				// 	{
				// 		classification: "自宅",
				// 		address: "東京都中央区銀座1丁目8-19 キラリトギンザ　11F",
				// 		name: "佐藤 貞英",
				// 		tel: "08034981199",
				// 	},
				],
			}
		},
		onLoad() {
			console.log('onLoad')
			this.load()
			console.log(this.list)
		},
		methods: {
			load: function() {
				for (var i = 0; i < 10; i++) {
					this.list[i] = {
						classfication: 'classfication' + i,
						address: 'address' + i,
						name: 'name' + i,
						tel: 'tel' + i,
						id: i,
					}
				}
			},
			childGoToEdit(obj) {
				console.log('childGoToEdit', obj)
				// alert('跳转了')
			},

		}
	}
</script>

<style>
	.top {
		height: 30px;
		background-color: #f3f3f3;
	}

	.title {
		/* display: block; */
		text-align: center;
		margin-top: 30px;
	}

	.new {
		/* display: block; */
		width: 80px;
		margin: -23px 0 0 285px;
	}

	.addressDiv {
		padding: 10px;
		background-color: #fff;
		border-bottom: 10px solid #f3f3f3;
		height: 120px;
		width: 340px;
	}

	.classification {
		border: solid 2px #ffc300;
		padding: 6px;
		height: 8px;
		width: 40px;
		text-align: center;
		font-size: 10px;
		color: #ffc300;
		/* 圆角 */
		border-radius: 30px;
	}

	.address {
		font-size: 14px;
		color: #b4b4b4;
	}

	.nameAndTel {
		font-size: 10px;
	}
</style>
