$(function  (argument) {


	
	// 判断登录状态
	state();

	// 删除已发布的消息
	delAnnouceMes();
	
	// 评论的tab切换
	commentTab();
	$('.announceBox').empty()
	var url = '/things/MessageJson/mymessage?act=show';
	var json =  {}
	$.post( url , json , function(data){
		var jsobObj = eval("(" + data + ")");

		$.each( jsobObj.list , function( index , res ){
			var li = '<li class="announceItem" data-id="' + res.id + '"><a href="detail.html?type=news" class="link"><div class="announceTop clearfix"><h2>'+ res.username +'</h2><span>'+ res.time +'</span><div class="answer"></div></div><div class="announceCenter"><p class="goodsMesTxt">'+ res.content +'</p><div class="goodsMesImg"><img src="'+ res.picture +'" alt=""></div></div><div class="announceBottom clearfix"><a href="javascript:;" class="btn delAnnouceMes">删除信息</a></a></li>'

			$('.announceBox').append(li);
		})
	} )
})


// 登录状态
function state(){
	var url = '/things/MessageJson/index';
	var json = {};
	$.post( url , json ,function(data){
		var jsobObj = eval("(" + data + ")");
		console.log(jsobObj.state);
		if( jsobObj.state == 'no' ){
			alert('请先登录');
			window.location.href="index.html"; 
		}else{
			$('.NavTopUserName').html(jsobObj.state);
			$('.logResList').hide();
			$('.userStation').show();
		}
	})
}




// 评论页的tab
function commentTab() {
	var commentCtrlBox = $('.commentCtrlBox');
	var leftItem = $('.leftItem');

	// console.log( $(leftItem).length );
	for (var i = 1; i < $(leftItem).length; i++) {

		$(leftItem[i]).click(function() {
			$('.RChead h1').text( $(this).text() )
			var id = $(this).index();


			// console.log(id);
			// var li = '<li class="commentItem clearfix"><a href="detail.html" class="clearfix"><div class="f-fl commenterImg"><img src="img/noavatar_middle.gif" alt="" /></div><div class="f-fl commentTxt"><h1 class="commenterName">我是润芳大小姐</h1><p class="commenterCont">明哥真帅啊真帅啊</p><div class="myComment"><p><span>来自我的消息：</span>广州市：丢失啊标一只</p></div><div class="from">1月10日 13:01</div></div></a></li>';
			// if( id == 1 ){
			// 	li = '<li class="announceItem"><a href="#" class="link"><div class="announceTop clearfix"><h2>广州市：丢失啊标一只1</h2><span>2016-04-12</span><div class="answer"></div></div><div class="announceCenter"><p class="goodsMesTxt">这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是</p><div class="goodsMesImg"><img src="img/g3.jpg" alt=""></div></div><div class="announceBottom clearfix"><a href="javascript:;" class="btn delAnnouceMes">删除信息</a></a></li>'
			// }

			switch (id){
				// 消息评论
				case 0: 
					

				// 发布记录
				case 1: 
					// alert('发布记录')

					var url = '/things/MessageJson/mymessage?act=show';
					var json =  {}
					$.post( url , json , function(data){
						var jsobObj = eval("(" + data + ")");

						$.each( jsobObj.list , function( index , res ){
							var li = '<li class="announceItem" data-id="' + res.id + '"><a href="detail.html?type=news" class="link"><div class="announceTop clearfix"><h2>'+ res.username +'</h2><span>'+ res.time +'</span><div class="answer"></div></div><div class="announceCenter"><p class="goodsMesTxt">'+ res.content +'</p><div class="goodsMesImg"><img src="'+ res.picture +'" alt=""></div></div><div class="announceBottom clearfix"><a href="javascript:;" class="btn delAnnouceMes">删除信息</a></a></li>'

							$(commentCtrlBox[id]).append(li);
						})
					} )


					break;

				// 宝贝回来
				case 2: 
					// alert('宝贝回来');

					var url = '/things/MessageJson/my_swap';
					var json = {};
					$.post( url , json , function(date){
						
						var jsobObj = eval("(" + date + ")");
						//console.log(jsobObj)
						
						$.each( jsobObj , function( index , res ){console.log(res.swaper)
							
							var li = '<li class="commentItem clearfix" data-id="'+ res.goods_id +'"><a href="detail.html?type=goods" class="clearfix"><div class="f-fl commenterImg"><img src="'+ res.master.picture +'" alt="" /></div><div class="f-fl commentTxt"><h1 class="commenterName">'+ res.master.name +'</h1><div class="myComment"><p><span>来自物品：</span>'+ res.goods.name +'</p></div><div class="from">'+ res.time +'</div></div></a></li>';
							
							$(commentCtrlBox[id]).append(li);
						})
					})
					break;

				// 我扫了谁
				case 3: 
					// alert('我扫了谁')

					var url = '/things/MessageJson/who_swap';
					var json = {};
					$.post( url , json , function(date){
						
						var jsobObj = eval("(" + date + ")");
						console.log(jsobObj)
						
						$.each( jsobObj , function( index , res ){console.log(res.swaper)
							
							var li = '<li class="commentItem clearfix" data-id="'+ res.goods_id +'"><a href="detail.html?type=goods" class="clearfix"><div class="f-fl commenterImg"><img src="'+ res.swaper.picture +'" alt="" /></div><div class="f-fl commentTxt"><h1 class="commenterName">'+ res.swaper.name +'</h1><div class="myComment"><p><span>来自物品：</span>'+ res.goods.name +'</p></div><div class="from">'+ res.time +'</div></div></a></li>';
							
							$(commentCtrlBox[id]).append(li);
						})
					})
					break;
			}
			$('.leftItem').removeClass('on');
			$(this).addClass('on');
			$('.commentCtrlBox').hide();
			 $(commentCtrlBox[id]).empty();

			//var li = '<li class="announceItem" data-id="1"><a href="javascript:;" class="link"><div class="announceTop clearfix"><h2>广州市：丢失啊标一只1</h2><span>2016-04-12</span><div class="answer"></div></div><div class="announceCenter"><p class="goodsMesTxt">这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是</p><div class="goodsMesImg"><img src="img/g3.jpg" alt=""></div></div><div class="announceBottom clearfix"><a href="javascript:;" class="btn delAnnouceMes">删除信息</a></a></li>'
			//$('.commentCtrlBox').eq(1).append(li);	


			$(commentCtrlBox[id]).show();
		});
	}

	return;

}







// 删除发布记录
$(".rightContent").on('click','.delAnnouceMes',function(e){

	//console.log( $(this).parents('.announceItem').data('id') )
	var mymessage = confirm("是否删除该信息？");
	var _this = this;
	if (mymessage) {
		var id = $(this).parents('.announceItem').data('id');
		var url = '/things/MessageJson/mymessage?act=del';
		var json = {
			"id" : id
		}
		$.post( url , json , function(data){
			var jsobObj = eval("(" + data + ")");
			if( jsobObj.result = '删除成功' ){
			}

		$(_this).parents('.announceItem').remove();
		} )
		
	}
	e.stopPropagation();

	return ;
})






$(".rightContent").on('click','.commentCtrlBox li',function(){

	console.log( $(this).data('id') )
	var newHref = $(this).find('a').attr('href') + '&id='  + $(this).data('id');
	$(this).find('a').attr( 'href' , newHref) ;
	return ;
})















