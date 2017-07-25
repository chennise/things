var userState = true;
$(function(){
	// 判断登录状态
	state1();
	state2();

	// 发表评论
	comment();
	// var locHref = window.location.href;
	getCommentMes();
	// console.log( getUrlParam('id') )
})


function getUrlParam(name)
{
var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
var r = window.location.search.substr(1).match(reg);  //匹配目标参数
if (r!=null) return unescape(r[2]); return null; //返回参数值
} 


// 登录状态
function state1(){
	var url = '/things/MessageJson/index';
	var json = {};
	$.post( url , json ,function(data){
		var jsobObj = eval("(" + data + ")");
		console.log(jsobObj.state);
		if( jsobObj.state == 'no' ){
			// alert('请先登录');
			// window.location.href="index.html"; 
		}else{
			$('.NavTopUserName').html(jsobObj.state);
			$('.logResList').hide();
			$('.userStation').show();
		}
	})
}

function state2(){
	var url = '/things/CodeJson/state';
	var json = {};
	$.post( url , json , function(data){
		var jsobObj = eval("(" + data + ")");
		if( jsobObj.state2 == '已完善'  ){
			userState = true;
		}else{
			userState = false;
		}
	})
}

function getCommentMes(){
	var id = getUrlParam('id');
	var type = getUrlParam('type');
	if( type == 'news'  ){
		var url = '/things/MessageJson/discuss?act=show';
		var json = {
			"message_id" : id
		}
		var action ;
		if( getUrlParam('action') == 'lost' ){
			action = '寻物启事';
		}
		else{
			action = '失物招领'
		}
		$.post( url , json , function(data){
			var jsobObj = eval("(" + data + ")");

			var mesTop = '<div class="mesTop clearfix"><div class="f-fl leftArea"><div class="seeAndRea"><p class="react">回复:<span>'+ jsobObj.message.count +'</span></p></div></div><div class="f-fl rightArea"><h1 class="mesTitle"><p>'+ action +'</p><span> 发表于 '+ jsobObj.message.time +'</span></h1></div><hr class="bb3"></div>'

			$('#commentBody').empty().append(mesTop);

			var mesUser = '<div class="mesMain clearfix"><div class="f-fl leftArea"><h2 class="userName"><a href="#">'+ jsobObj.user.name +'</a></h2><div class="userImg"><img src="'+  jsobObj.user.picture +'" alt=""/></div><div class="userMesBox"></div></div><div class="f-fl rightArea"><div class="goodsMesTxtBoxWrap"><p class="goodsMesTxtBox clearfix"><span class="goodsMesTxtTitle">联系方式：</span><i class="goodsMesTxt">phone: '+ jsobObj.user.phone +'<br>qq: '+ jsobObj.user.qq+'<br>wechat: '+ jsobObj.user.wechat +'<br>email: '+ jsobObj.user.email +'</i></p><p class="goodsMesTxtBox clearfix"><span class="goodsMesTxtTitle">悬赏金额：</span><i class="goodsMesTxt">￥'+ jsobObj.message.money +'</i></p><p class="goodsMesTxtBox clearfix"><span class="goodsMesTxtTitle">备注：</span><i class="goodsMesTxt">'+ jsobObj.message.content +'</i></p><div class="goodsImg goodsMesTxtBox clearfix"><p class="goodsMesTxtTitle">上传照片：</p><div class="f-fl goodsImgList"><img src="'+ jsobObj.message.picture +'" alt="" class="goodsImgItem"></div></div></div></div></div>';
			$('#commentBody').append(mesUser);

			$.each( jsobObj.list , function( index , res ){
				var mesComment = '<div class="mesMain clearfix conmentMain"><div class="f-fl leftArea minH335"><h2 class="userName"><a href="#">' + res.name + '</a></h2><div class="userImg"><img src="'+ res.picture +'" alt=""/></div><div class="userMesBox"></div></div><div class="f-fl rightArea minH335"><hr class="bb3"><div class="commentBox">'+ res.content +'</div><span class="commentTime">发表于 '+ res.time +'</span></div></div>';
				$('#commentBody').append(mesComment);
			})
		} )
	}else{
		var url = '/things/MessageJson/goods_discuss?act=show';
		var json = {
			"goods_id" : id
		}
		$.post( url , json , function(data){
			var jsobObj = eval("(" + data + ")");

			
			$('#commentBody').empty();
			console.log( jsobObj.goods[0].remark )
			var mesUser = '<div class="mesMain clearfix"><div class="f-fl leftArea"><h2 class="userName"><a href="#">'+ jsobObj.goods[0].name +'</a></h2><div class="userImg"><img src="'+  jsobObj.goods[0].picture +'" alt=""/></div><div class="userMesBox"></div></div><div class="f-fl rightArea"><div class="goodsMesTxtBoxWrap"><p class="goodsMesTxtBox clearfix"><span class="goodsMesTxtTitle">备注：</span><i class="goodsMesTxt">'+ jsobObj.goods[0].remark +'</i></p><div class="goodsImg goodsMesTxtBox clearfix"><p class="goodsMesTxtTitle">上传照片：</p><div class="f-fl goodsImgList"><img src="'+ jsobObj.goods[0].picture +'" alt="" class="goodsImgItem"></div></div></div></div></div>';
			$('#commentBody').append(mesUser);
			
			$.each( jsobObj.list , function( index , res ){
				//console.log( res.user.name )
				console.log(1)
				var mesComment = '<div class="mesMain clearfix conmentMain"><div class="f-fl leftArea minH335"><h2 class="userName"><a href="#">'+ res.user.name +'</a></h2><div class="userImg"><img src="' + res.user.picture + '" alt=""/></div><div class="userMesBox"></div></div><div class="f-fl rightArea minH335"><hr class="bb3"><div class="commentBox">'+ res.content +'</div><span class="commentTime">发表于 '+ res.time +'</span></div></div>';
				$('#commentBody').append(mesComment);
			})
		} )
	}
	
}	


//发表评论
function comment() {
	$('.comInputCon').click(function() {
		var locHref = window.location.href;
		var type = getUrlParam('type');
		console.log( locHref );
		var comInputArea = $('.comInputArea').val();

		console.log( comInputArea );
		
		if( userState ){
			
			if( type == 'news' ){
				var url = '/things/MessageJson/discuss?act=add';
				var json = {
					"message_id" : getUrlParam('id'),
					"content" : comInputArea
				}
				$.post( url , json , function(data){
					var jsobObj = eval("(" + data + ")");
					if( jsobObj.result == 'ok' ){
						alert('评论成功');
						window.location.href = locHref; 
					}else{
						alert('评论失败')
					}
				} )
			}else{
				var url = '/things/MessageJson/goods_discuss?act=add';
				var json = {
					"goods_id" : getUrlParam('id'),
					"content" : comInputArea
				}
				$.post( url , json , function(data){
					var jsobObj = eval("(" + data + ")");
					if( jsobObj.result == 'ok' ){
						alert('评论成功');
						window.location.href = locHref; 
					}else{
						alert('评论失败')
					}
				} )
			}
			
		}else{
			alert('未登陆或未完善信息不可发表评论');
			return false;
			$('.comInputArea').val('')
		}

		return;
	})
}

































