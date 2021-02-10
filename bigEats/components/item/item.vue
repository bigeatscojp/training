<template>
	<view>
		<view class="addressItemList" v-on:tap="goToEdit">
			<view>
				<text class="classification">{{classification}}</text>
			</view>
			<view>
				<text class="address">{{address}}</text>
			</view>
			<view>
				<text class="nameAndTel">{{name}}</text>
			</view>
			<view>
				<text class="nameAndTel">{{tel}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number
			},
			classification: {
				type: String,
				default () {
					return "name5"
				}
			},
			address: {
				type: String,
				default () {
					return "name4"
				}
			},
			name: {
				type: String,
				default () {
					return "name4"
				}
			},
			tel: {
				type: String,
				default () {
					return "name4"
				}
			},
		},
		data() {
			return {

			};
		},
		methods: {
			goToEdit() {
				uni.navigateTo({
					url: '../../pages/edit/edit?index='+this.index+"&classification="+this.classification+"&address="+this.address+"&name="+this.name+"&tel="+this.tel
				}),
				
				console.log(this.$store.state.name)
				// 通知父组件
				this.$emit('goToEdit', {
					name: this.name
				})
			},
		}
	}
</script>

<style>
	.addressItemList {
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
