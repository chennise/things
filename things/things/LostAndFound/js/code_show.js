$(function(){
	getCommentMes();

	// 判断登录状态
	stateGood();
	state();
})



function getCommentMes(){
	var url = '/things/CodeJson/show';
	var json = {};
	$.post( url , json , function(data){
		var jsobObj = eval("(" + data + ")");

		var li = '<div class="mesMain clearfix"><div class="f-fl leftArea"><h2 class="userName"><a href="#">'+ jsobObj.name +'</a></h2><div class="userImg"><img src="'+ jsobObj.picture1 +'" alt=""/></div><div class="userMesBox"></div></div><div class="f-fl rightArea"><div class="goodsMesTxtBoxWrap"><p class="goodsMesTxtBox clearfix"><span class="goodsMesTxtTitle">物品名称</span><i class="goodsMesTxt">'+ jsobObj.name2 +'</i></p><p class="goodsMesTxtBox clearfix"><span class="goodsMesTxtTitle">联系方式：</span><i class="goodsMesTxt">phone:'+ jsobObj.phone +'<br>qq:'+ jsobObj.qq +'<br>wechat:'+ jsobObj.wechat +'<br>email:'+ jsobObj.email +'</i></p><p class="goodsMesTxtBox clearfix"><span class="goodsMesTxtTitle">备注：</span><i class="goodsMesTxt">'+ jsobObj.remark +'</i></p><div class="goodsImg goodsMesTxtBox clearfix"><p class="goodsMesTxtTitle">上传照片：</p><div class="f-fl goodsImgList"><img src="'+ jsobObj.picture2 +'" alt="" class="goodsImgItem"></div></div></div></div></div>';

		$('#commentBody').empty().append(li);

	})
	
}	

function stateGood(){
	var url = '/things/CodeJson/state';
	var json = {}
	$.post( url , json , function(data){
		var jsobObj = eval("(" + data + ")");
		if( jsobObj.state1 == '未登录' ){
			
		}else if( jsobObj.state2  == '未完善'){
			alert('请先完善信息');
			window.location.href = 'user.html';
		}
	})
}

// 登录状态
function state(){
	var url = '/things/MessageJson/index';
	var json = {};
	$.post( url , json ,function(data){
		var jsobObj = eval("(" + data + ")");
		console.log(jsobObj.state);
		if( jsobObj.state == 'no' ){
			//alert('请先登录');
			//window.location.href="index.html"; 
		}else{
			$('.NavTopUserName').html(jsobObj.state);
			$('.logResList').hide();
			$('.userStation').show();
		}
	})
}

































