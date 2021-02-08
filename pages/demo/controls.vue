<template>
	<view class="c-list">
		<view class="c-list__container">
			<view class="c-list__title">
				<text>Button控件</text>
			</view>
			<view class="c-list__body">
				<view class="c-list__item">
					<button class="c-button c-button--primary">保存する</button>
				</view>
				<view class="c-list__item">
					<button class="c-button c-button--disabled" disabled="disabled">保存する</button>
				</view>
				<view class="c-list__item">
					<button class="c-button c-button--primary c-button--small">保存する</button>
				</view>
				<view class="c-list__item">
					<button class="c-button c-button--primary c-button--medium">保存する</button>
				</view>					
			</view>
		</view>		
		<view class="c-list__container">
			<view class="c-list__title">
				<text>input控件</text>
			</view>
			<view class="c-list__body">
				<view class="c-list__item">
					<input type="text" class="c-input c-input--bold" placeholder="请输入内容" value="080-3552-7480"/>
				</view>							
				<view class="c-list__item">
					<input type="text" class="c-input c-input--left c-input--long" placeholder="请输入内容" value="東京都中央区銀座１丁目8-19 キラリト銀座"/>
				</view>					
			</view>
		</view>							
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import '@/common/scss/controls/button.scss';
	@import '@/common/scss/controls/input.scss';
	.c-list__title,
	.c-list__body,
	.c-list__container,
	.c-list__item {
		margin-top: 20rpx;
	}
	.c-list__title{
		text-align: center;
	}
	.c-list__item {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	.c-input {
		margin: 0 auto;
	}
</style>
