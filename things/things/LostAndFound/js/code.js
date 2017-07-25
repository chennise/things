$(function(){

	// 判断登录状态
	stateGood();
	state();
})



	

function stateGood(){
	var url = '/things/CodeJson/state';
	var json = {}
	$.post( url , json , function(data){
		var jsobObj = eval("(" + data + ")");
		if( jsobObj.state1 == '未登录' ){
			alert('该码未绑定，请先登录再扫码，即将跳到网站首页');
			window.location.href = '/things/LostAndFound/index.html';
			//var winHeight = $('body').height();
			//var winWidth = $('body').width();
			//$('#mark').height(winHeight);
			//$('#mark').width(winWidth);

			//$('#mark').show();
			//$('.signInBox').show();
			return ;
		}else if( jsobObj.state2  == '未完善'){
			alert('请先完善信息');
			window.location.href = '/things/LostAndFound/user.html';
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

































