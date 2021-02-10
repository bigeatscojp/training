<template>
	<view>
		<view class="addressEditView">
			<text class="text">お届け先名</text>
			<input class="addressEditInput" v-model="classification" type="text" />
			<text class="text">郵便番号</text>
			<input class="addressEditInput" v-model="postCode" type="text" />
			<text class="text">アドレス</text>
			<input class="addressEditInput" v-model="address" type="text" />
			<text class="text">お名前</text>
			<input class="addressEditInput" v-model="name" type="text" />
			<text class="text">電話番号</text>
			<input class="addressEditInput" v-model="tel" type="text" />
		</view>
		<view class="c-edit__btn-group">
			<button type="default" v-on:click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: '',
				classification: '',
				postCode: '134 0088',
				address: '',
				name: '',
				tel: ''
			}
		},

		onLoad(option) {
			this.classification = option.classification
			this.address = option.address
			this.name = option.name
			this.tel = option.tel
			this.index = option.index
		},

		methods: {
			submit() {
				console.log('submit')
				// uni.setStorageSync('classification', this.remark)
				// uni.setStorageSync('address', this.address)
				// uni.setStorageSync('name', this.name)
				// uni.setStorageSync('tel', this.tel)
				this.$store.commit('setIndex', this.index)
				this.$store.commit('setClassification', this.classification)
				this.$store.commit('setAddress', this.address)
				this.$store.commit('setTel', this.tel)
				this.$store.commit('setName', this.name)
				// 返回上一个页面
				uni.navigateBack({})
			}
		}
	}
</script>

<style>
	.text {
		color: #b4b4b4;
		font-size: 14px;
		margin-left: 40rpx;
	}

	.addressEditInput {
		/* 圆角 */
		border-radius: 10px;
		background: #f3f3f3;
		margin: 0px auto;
		height: 35px;
		width: 330px;
		border: 0;
	}

	.saveButton {
		width: 250px;
		height: 40px;
		border-radius: 6px;
		margin: 0px auto;
		margin-top: 225px;
		background: #fccc00;
		border-radius: 20px;
		border: none;
		font-size: 18px;
		font-weight: 700;
		color: #000000;
	}

	.c-edit {
		padding: 16px;
	}

	.c-edit__group {
		margin-bottom: 16px;
	}
</style>
