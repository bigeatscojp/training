<script>
	export default {
		globalData: {
			_i18n: {},
			$t: {}
		},
		onLaunch: function() {
			console.log('App Launch')
			this.globalData._i18n = this.$i18n
			this.globalData.$t = (str, paramObj={}) => {
				return paramObj ? this.$t(str, paramObj) : this.$t(str)
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	/* nvue不支持公共样式 */
	/* https://uniapp.dcloud.io/frame?id=%e5%85%a8%e5%b1%80%e6%a0%b7%e5%bc%8f%e4%b8%8e%e5%b1%80%e9%83%a8%e6%a0%b7%e5%bc%8f */
	/* #ifndef APP-PLUS */
	page {
		height: 100%;
		background-color: $color-gray-2;
	}

	// 让h5端兼容app的默认样式
	view {
		display: flex;
		flex-direction: column;
	}

	/* #endif */
</style>
