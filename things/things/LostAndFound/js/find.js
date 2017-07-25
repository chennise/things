$(function(){
	// alert(1);

	// var li = '<li class="findGoodsItem"><a href="detail.html"><div class="f-fl userImg"><img src="'+ res.picture2 +'" alt="" class="userImgTouxiang"><p class="userName">'+ res.username +'</p><img src="img/reward.png" alt="" class="rewardImg"></div><div class="f-fl findGoodsMes"><h3 class="findGoodsTltle clearfix"><p>'+ res.action +'</p><span>'+ res.time +'</span></h3><p class="goodsDesc">'+ res.content +'</p><div class="goodsImg"><img src="'+ res.picture +'" alt=""></div></div><div class="answer"><p>评论：<i>'+ res.count +'</i></p></div></a></li>';

	var url = '/things/IndexJson/index';
	var MingSize = 10 ;
	var json = {
		"page" : 1 , 
		"size" : MingSize ,	
		"action" : "lost"
	}
	// $('.findGoodsList').empty().append(li);
	$.post( url , json , function(data){
		var jsobObj = eval("(" + data + ")");
		console.log( jsobObj.all );

		// 翻页插件
		var pages = Math.ceil(jsobObj.all / MingSize );
		$('#light-pagination').pagination({
			pages : pages,
			cssStyle: 'light-theme',
			displayedPages: 3,
			edges: 2
		});

		// 清空原有内容
		$('.findGoodsList').empty()

		$.each( jsobObj.list , function( index , res ){


			var li = '<li class="findGoodsItem" data-id="'+ res.id +'"><a href="detail.html"><div class="f-fl userImg"><img src="'+ res.picture2 +'" alt="" class="userImgTouxiang"><p class="userName">'+ res.username +'</p><img src="img/reward.png" alt="" class="rewardImg"></div><div class="f-fl findGoodsMes"><h3 class="findGoodsTltle clearfix"><p>'+ res.action +'</p><span>'+ res.time +'</span></h3><p class="goodsDesc">'+ res.content +'</p><div class="goodsImg"><img src="'+ res.picture +'" alt=""></div></div><div class="answer"><p>评论：<i>'+ res.count +'</i></p></div></a></li>';


			if( res.money == '0' ){
				li = '<li class="findGoodsItem" data-id="'+ res.id +'"><a href="detail.html"><div class="f-fl userImg"><img src="'+ res.picture2 +'" alt="" class="userImgTouxiang"><p class="userName">'+ res.username +'</p></div><div class="f-fl findGoodsMes"><h3 class="findGoodsTltle clearfix"><p>'+ res.action +'</p><span>'+ res.time +'</span></h3><p class="goodsDesc">'+ res.content +'</p><div class="goodsImg"><img src="'+ res.picture +'" alt=""></div></div><div class="answer"><p>评论：<i>'+ res.count +'</i></p></div></a></li>';

			}
			$('.findGoodsList').append(li)

		})


	})

	$('.findGoodsList').on( 'click' , '.findGoodsItem'  , function(){
		var newHref = $(this).find('a').attr('href') + '?type=news&action=lost&id=' + $(this).data('id');
		$(this).find('a').attr('href' , newHref );
		return ; 
	})
})























































