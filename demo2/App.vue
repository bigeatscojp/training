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

<style>
	/*每个页面公共css */
	/*  #ifndef APP-NVUE  */
	page {
		height: 100%;
	}
	/*  #endif  */		

</style>
