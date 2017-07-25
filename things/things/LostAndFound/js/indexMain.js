$(function  (argument) {

	J_loginBtn();
	registerNew();

	// 获取失物招领的信息
	getFind();

	// 获取寻物启事的信息
	getAnswer();

})





// 快捷登录方式
function J_loginBtn() {
	$('#J_loginBtn').click(function() {
		var signUsesName = $('#username_').val();
		var SignInUserPassword = $('#password3_').val();

		var url = ' /things/IndexJson/login';
		var json = {
			"username": signUsesName,
			"password": SignInUserPassword

		}

		$.post(url, json, function(data) {
			var jsobObj = eval("(" + data + ")");
			var result = jsobObj.result;
			if (result == '登录成功') {
				alert('登录成功');
				$('.NavTopUserName').html(signUsesName);
				$('.logResList').hide();
				$('.userStation').show();
				$('#J_loginGuide').hide();
			} else if (result == '密码错误') {
				alert('密码错误');
			} else if (result == '用户名不存在'){
				alert('用户名不存在')
			}
		})
	})
}

// 转到注册
function registerNew() {
	$('.registerNew').click(function() {
		// alert('b');
		$('#J_loginGuide').hide();
		var winHeight = $('body').height();
		var winWidth = $('body').width();
		$('#mark').height(winHeight);
		$('#mark').width(winWidth);

		$('#mark').show();
		$('.registerBox').show();

		return;

	})
}

function getFind(){
	var url = '/things/IndexJson/index';
	var json = {
		"page" : 1 ,
		"size" : 20 , 
		"action" : 'lost'
	}

	$.post( url , json , function(data){
		$('#findGoodsEvent').empty();
		var jsobObj = eval("(" + data + ")");
		console.log( jsobObj.state );
		if(  jsobObj.state != 'no'){
				$('.NavTopUserName').html(jsobObj.state);
				$('.logResList').hide();
				$('.userStation').show();

		}
		$.each( jsobObj.list , function( index , res ){
			var li = '';
			if( res.money == 0 ){
				li = '<li class="findSthItem" data-id="' + res.id + '"><a href="detail.html"><p class="findSthItemTxt">'+ res.content +'</p><i class="f-fr findIcon">赏</i><span class="findSthItemTime">'+ res.time +'</span></a></li>';
			}else{
				li = '<li class="findSthItem" data-id="' + res.id + '"><a href="detail.html"><p class="findSthItemTxt">'+ res.content +'</p><span class="findSthItemTime">'+ res.time +'</span></a></li>';
			}
			$('#findGoodsEvent').append(li);
			
		})

	} )
	
	
}


function getAnswer(){
	var url = '/things/IndexJson/index';
	var json = {
		"page" : 1 ,
		"size" : 20 , 
		"action" : 'found'
	}

	$.post( url , json , function(data){
		$('#answerGoodsEvent').empty();
		var jsobObj = eval("(" + data + ")");
		//console.log( jsobObj.list.length );
		console.log( jsobObj.state );
		if(  jsobObj.state != 'no'){
				$('.NavTopUserName').html(jsobObj.state);
				$('.logResList').hide();
				$('.userStation').show();

		}
		$.each( jsobObj.list , function( index , res ){
			var li = '';
			//console.log( jsobObj.list[0] );
			// if( res.list.money == 0 ){
				// li = '<li class="findSthItem"><a href="detail.html"><p class="findSthItemTxt">'+ res.content +'</p><i class="f-fr findIcon">赏</i><span class="findSthItemTime">'+ res.list.time +'</span></a></li>';
			// }else{
				li = '<li class="findSthItem" data-id="' + res.id + '"><a href="detail.html"><p class="findSthItemTxt">'+ res.content +'</p><span class="findSthItemTime">'+ res.time +'</span></a></li>';
			// }
			$('#answerGoodsEvent').append(li);
			
		})

	} )
}









































