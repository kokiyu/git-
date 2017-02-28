
var app = new Vue({
	el: '#all',
	data: {
		seen: false,
		seenQQ:'hidden',
		seenQQimg:'image/QQ.png',
		seenWechat:'hidden',
		seenWechatImg:'image/wechat.png',
		seenWeibo:'hidden',
		seenWeiboImg:'image/weibo.png'
	},
	methods: {
		// var that =this;
		openQQway:function(){
			this.seenQQ = 'visible';
			this.seenQQimg = 'image/QQ_beSelected.png';
		},
		closeQQWay:function(){
			this.seenQQ = 'hidden';
			this.seenQQimg = 'image/QQ.png';

		},
		openWechatWay:function(){
			this.seenWechat = 'visible';
			this.seenWechatImg = 'image/wechat__beSelected.png';
		},
		closeWechatWay:function(){
			this.seenWechat = 'hidden';
			this.seenWechatImg = 'image/wechat.png';
		},
		openWeiboWay:function(){
			this.seenWeibo = 'visible';
			this.seenWeiboImg = 'image/weibo__beSelected.png';

		},
		closeWeiboWay:function(){
			this.seenWeibo = 'hidden';
			this.seenWeiboImg = 'image/weibo.png';

		}
	}
})
