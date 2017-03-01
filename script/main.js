
var app = new Vue({
	el: '#all',
	data: {
		seenQQ:'hidden',
		seenQQimg:'image/QQ.png',
		seenWechat:'hidden',
		seenWechatImg:'image/wechat.png',
		seenWeibo:'hidden',
		seenWeiboImg:'image/weibo.png',
		show:true
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

		},
		enter1:function(){
			console.log("哈哈!");
			this.show = !this.show;
		},

	},
	 route:{
        data() {
            /*每次切换路由，在渲染出页面前都会执行*/
			console.log('show is: ' + this.show);
        }
    }
})

