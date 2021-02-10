<template>
	<view class="edit">
		<view class="text-area">
			<text class="text-Tittle">{{ sendNameTittle }}</text>
			<input class="text" v-model="sendName" placeholder="お届け先名を入力してください" />
			<text class="text-Tittle">{{ mailTittle }}</text>
			<input class="text" v-model="mail" 　placeholder="郵便番号を入力してください" />
			<text class="text-Tittle">{{ addressTittle }}</text>
			<input class="text" v-model="address" 　placeholder="アドレスを入力してください" />
			<text class="text-Tittle">{{ nameTittle }}</text>
			<input class="text" v-model="name" 　placeholder="お名前を入力してください" />
			<text class="text-Tittle">{{ telTittle }}</text>
			<input class="text" v-model="tel" 　placeholder="電話番号を入力してください" />
		</view>
		<view class="bottom">
			<button v-on:click="safe">保存する</button>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				sendNameTittle: "お届け先名",
				sendName: "",
				mailTittle: "郵便番号",
				mail: '',
				addressTittle: "アドレス",
				address: "",
				nameTittle: "お名前",
				name: "",
				telTittle: "電話番号",
				tel: '',
				index:''
			}
		},
		onLoad(obj) {
			console.log('edit' + obj)
			this.index= obj.index
			this.sendName = obj.sendName
			this.mail = obj.mail
			this.address = obj.address
			this.name = obj.name
			this.tel = obj.tel
		},
		methods: {
			safe: function() {
				console.log('safe')
				this.$store.commit('setIndex', this.index)
				this.$store.commit('setSendName', this.sendName)
				this.$store.commit('setMail', this.mail)
				this.$store.commit('setAddress', this.address)
				this.$store.commit('setName', this.name)
				this.$store.commit('setTel', this.tel)
				uni.navigateBack({})
			}
		}
	}
</script>

<style>
	.edit {
		padding: 12px;
	}

	.text-area {
		font-size: 16px;
	}

	.text-Tittle {
		color: #DD524D;
	}

	.text {
		padding-top: 2px;
		padding-bottom: 6px;
		border-bottom: 2rpx solid #808080;
	}

	.bottom {
		margin-top: 50px;
	}
</style>
