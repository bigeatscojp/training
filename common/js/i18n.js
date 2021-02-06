const i18nMessage = {
	// 日文
	jp: {
		// ホーム
		index: {
			// 导航栏标题，每个页面都要设置
			navbar: 'ホーム',	
			test: 'テスト index',
		},
		// 直売
		sale: {
			navbar: '直売',	
			test: 'テスト sale',
		},	
		// 注文
		order: {
			navbar: '注文',	
			test: 'テスト order',
		},
		// アカウント
		account: {
			navbar: 'アカウント',	
			test: 'テスト account',
		},					
		// demo
		demo: {
			navbar: 'デモン',
			button: 'ボタン',
		},
		// 底部栏
		tabBar: {
			index: 'ホーム',
			sale: '直売',
			order: '注文',
			account: 'アカウント'
		},
		// 后台接口返回信息国际化
		api: {
			// 具体的规范需要和后端协调后才定
		}
	},
	// 简体中文
	'zh_CN': {
		
	},
	// 繁体中文
	'zh_HK': {
		
	},
	// 英文
	'en': {
		
	},	
};
export function getI18nMessage() {
	return i18nMessage;
}
/**
 * 获取默认的语言设置，通过获取用户默认的语言设置来设置对应的语言包
 * 现在简单点处理，默认返回'jp'就行了
 */
export function getDefaultLocale() {
	// const res = uni.getSystemInfoSync()
	// return res.language
	return 'jp'
}