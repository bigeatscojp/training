const i18nobj = {
	'jp':{
		login:{
			username:'携帯番号またはメールアドレス',
			password:'パスワード',
			numText:'注文{num}回'
		}
	},
	'zh':{

	}
}

export default i18nobj
const i18nMessage = {
	// 日文
	jp: {
		login:{
			username:'携帯番号またはメールアドレス',
			password:'パスワード',
			numText:'注文{num}回'
		},
		// ホーム
		index: {
			// 导航栏标题，每个页面都要设置
			navbar: 'ホーム',
			addressBtn: '変更する',
			popular: 'お近くの人気店',
			allBtn: 'すべて表示',
			recommendedOrder: 'お勧め',
			popularOrder: '人気順',
			commentOrder: '評価順',
			deliverTimeOrder: '配達時間',
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
		// 注文履歴
		history: {
			navbar: '注文履歴',
			orderNum: '注文回数順',
			number: '注文{num}回',
			doing: '配達中',
			end: '配達完了',
			seeShop: '店舗を見る',
			comment: 'レビューを書く'
		},
		// アカウント
		account: {
			navbar: 'アカウント',
			test: 'テスト account',
		},
		// お気に入り
		accountCollect: {
			navbar: 'お気に入り',
		},
		// 店舗詳細
		detail: {
			navbar: '店舗詳細'
		},
		cart: {
			navbar: 'カート',
			sendAddress: 'お届け先'
		},
		// demo
		demo: {
			navbar: 'デモン',
			button: 'ボタン',
		},
		// 组件bottom_cart
		bottomCart: {
			goToCart: 'カートを見る',
			goToBill: 'レージへ',
			order: '注文する',
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
