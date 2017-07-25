$(function(){

	showGoodsMes();
	goodsMesDel();
	goodsMesCon();

	editUserMes();

	// 判断登录状态
	state();

	getUserMes()
	getGoods()
	showGoods()
	changePwBtn()
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

var goodsId ;
// 显示物品信息
function showGoodsMes() {
	$('#mediaList').on('click' , '.mediaItem' , function(){
		mediaNum = $(this).index();
		console.log(mediaNum);
		console.log( $(this).data('id') )
		goodsId = $(this).data('id');
		
			$('.goodsMesEdit').val( goodsId );
		var url = '/things/MeJson/good?act=show';
		console.log(goodsId);
		var json = {
			"id" : goodsId

		}
		var contactWay = 'phone:'+ $('#contactPhone').text() +'<br>qq:'+ $('#contactQQ').text() +'<br>wechat:'+ $('#contactWechat').text() +'<br>email:' + $('#contactEmail').text()
		$.post( url , json , function(data){
			var jsobObj = eval("(" + data + ")");
			console.log( jsobObj[0].name )
			$('.goodsMesSmall .goodsMesTxtName').text( jsobObj[0].name );
			$('.goodsMesSmall .goodsMesTxtContact').html( contactWay );
			$('.goodsMesSmall .goodsMesTxtNote').text( jsobObj[0].remark );
			$('.goodsMesSmall .goodsImgItem').attr(  'src' , jsobObj[0].picture );

		});
		var winHeight = $('body').height();
		var winWidth = $('body').width();
		$('#mark').height(winHeight);
		$('#mark').width(winWidth);

		$('#mark').show();
		$('.goodsMesSmall').show();

	})
	
}

			
// 管理物品--修改信息
function goodsMesCon() {
	$('.goodsMesCon').click(function() {
		
		var _this = this;
		if( $(this).text() == "修改物品信息" ){
			$(this).text( '确定' );
			$('.uploadUserImgGoods').show();
			$('.goodsInputMesName').val( $('.goodsMesTxtName').text() )
			$('.goodsInputMesArea').val( $('.goodsMesTxtNote').text() )
			$('.goodsMesTxtCan').hide();
			$('.goodsInputMes').show();
			//$('.goodsMesSmall .goodsMesTxtBoxCan').each(function( index ){
			//	var input = '<input type="text" value="'+ $(this).find('i').text() +'" class="editGoods">';
			//	console.log( index );

			//	if (index > 0){
			//		input = '<textarea name="content" id="" cols="30" rows="10"  class="goodMesTextarea editGoods" >'+ $(this).find('i').text() +'</textarea>';
			//	}
			//	$(this).find('i').hide();
			//	$(this).append( input );
			//})
		}else{


			console.log( $('.editGoods').eq(0).val() ) ;
			console.log( $('.goodMesTextarea').val() ) ;
			
			$('.uploadUserImgGoods').hide();
			//$('.SubmitTrigger').trigger('click')
			var url = '/things/MeJson/good?act=change';
			var json = {
				"id" : goodsId,
				"name" : $('.editGoods').eq(0).val() ,
				"remark" : $('.goodMesTextarea').val()
			}
			//$.post( url , json  );
			$('.goodsMesTxtName').text( $('.goodsInputMesName').val() )
			$('.goodsMesTxtNote').text( $('.goodsInputMesArea').val() )
			//$('.goodsMesTxtName').text( $('.editGoods').eq(0).val() );
			//$('.goodsMesTxtNote').text( $('.goodMesTextarea').val() );
			//$('.editGoods').remove();
			//$('.goodsMesTxt').show();
			$(this).text( '修改物品信息' );
			$('.goodsMesTxtCan').show();
			$('.goodsInputMes').hide();
			$('.SubmitTrigger').trigger('click');
			//window.location.href = 'user.html';

		}

		return;
	})
}

// 管理物品--删除
function goodsMesDel() {
	$('.goodsMesDel').click(function() {
		var mymessage = confirm("是否删除该物品？");
		if (mymessage) {

			// 删除物品
			var url = '/things/MeJson/good?act=del';
			var json = {
				"id" : goodsId
			}
			$.post( url , json  );

			
			$('.goodsMesSmall').hide();
			$('#mark').hide();
			$('body').css('overflow', 'visible');
			scrollNav();
			$('#mediaList .mediaItem:eq(' + mediaNum + ')').remove();
		}

		return;
	})
}


function editUserMes(){
	$('.editUserMes').click(function(){

		// console.log( $('.edit').length );
		var editIetm = $('.edit');
		var editLength = $('.edit').length;
		var nullLength = 0;
		


		if( $(this).text() == '修改信息' ){
			$(this).text('确认');
			$('.uploadUserImgCtrl').show();
			// var input = '<input type="text" class="edit">';
			
			$('.userInforItem').each(function(){
				// console.log( $(this).find('span').text() );
				//var input = '<input type="text" value="'+ $(this).find('span').text() +'" class="edit">'
				$(this).find('.edit').val( $(this).find('span').text() );
				//$(this).append( input );
			})
			$('.userInforItem span').hide();
			$('.edit').show();

		}else{
			$(this).text('修改信息');
			$('.uploadUserImgCtrl').hide();
			$('.btnPartSubmitUserMes').trigger('click')
			// if( $('.edit:gt(1)').val() == 0 ){
			// 	alert(1);
			// }
			// console.log( $('.edit:gt(1)').val() );

			//var nickName = $('.edit').eq(0).val();
			//var conPhone = $('.edit').eq(1).val();
			//var conQQ = $('.edit').eq(2).val();
			//var conWechat = $('.edit').eq(3).val();
			//var conEmail = $('.edit').eq(4).val();

			// console.log( 
			// 	nickName + conPhone + conQQ + conWechat + conEmail

			//  )
			//var url = '/things/MeJson/changeme';
			var json = {
				"name" : nickName , 
				"phone" : conPhone , 
				"qq" : conQQ , 
				"wechat" : conWechat , 
				"email" : conEmail
			}
			//$.post( url , json );


			$('.userInforItem').each(function(){
				$(this).find('span').text( $(this).find('.edit').val() ).show();
				//$(this).find('.edit').remove();

			})
			
			window.location.href = 'user.html';

		}
		
		// alert(1);
	})
}
function changePwBtn(){
	$('#changePwBtn').click(function(){
		// alert(1);
		var currentPasswd = $('#currentPasswd').val();
		var newPasswd = $('#newPasswd').val();
		var passwdCheck = $('#passwdCheck').val();

		if( newPasswd == '' ||  passwdCheck == '' || currentPasswd == ''){
			alert('密码不可为空!');
			return ;
		}
		if( passwdCheck != newPasswd ){
			alert('两次密码不一致');
			return ;
		}


		var url = '/things/MeJson/changepw';
		var json = {
			"password" : currentPasswd ,
			"newpw" : newPasswd
		}
		$.post( url , json ,function(data){
		var jsobObj = eval("(" + data + ")");
		console.log( jsobObj.data )
			if( jsobObj.result == '原密码错误' ){
				alert('原密码错误')
			}else if( jsobObj.result == '修改成功' ){
				alert('修改成功');
			}
			
		});
	})
}


function getUserMes(){
	var url = '/things/MeJson/index';
	var json = {};
	$.post( url , json , function( data ){


		var jsobObj = eval("(" + data + ")");
		$('.userImg').attr('src' , jsobObj.picture);
		$('#nickname').text( jsobObj.name );
		$('#contactPhone').text( jsobObj.phone );
		$('#contactQQ').text( jsobObj.qq );
		$('#contactWechat').text( jsobObj.wechat );
		$('#contactEmail').text( jsobObj.email );


	})
}

function getGoods(){
	var url = '/things/MeJson/goods';
	var json = {}
	$.post( url , json , function(data){
		$('#mediaList').empty();
		var jsobObj = eval("(" + data + ")");
		$.each( jsobObj , function( index , res ){
			var li = '<li class="mediaItem clearfix" data-id="'+ res.id +'"><div class="wrap"><div class="f-fl imgBox"><img src="'+ res.picture +'" alt="pic" class="mediaImg"></div><div class="f-fl txtBox"><h2 class="mediaTitle">'+ res.name +'</h2><p class="mediaExplain">'+ res.remark +'</p></div></div></li>';

			$('#mediaList').append(li);
		} )
		
	})
}

function showGoods(){

}

