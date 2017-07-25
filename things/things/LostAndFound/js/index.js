$(function() {
	//  滑杆控制nav的出现
	scrollNav();

	// 回到顶部
	backToTop();

	// 登录
	signIn();
	signInBtn();

	// 注册
	register();
	registerBtn();

	// 关闭弹出框
	closeCtrl();

	// 检查记住密码，注册时同意用户协议
	check();



	// 删除已发布的消息
	delAnnouceMes();

	// 弹出发布信息框
	releaseMes();

	// 确认发布的按钮
	goodMesBtn();

	// 底下浮动层的关闭
	boxClose();

	// 登出
	logOut();


	$('#findGoodsEvent').on( 'click' , '.findSthItem' ,function(){
		var newHref = $(this).find('a').attr('href') + '?type=news&action=lost&id=' + $(this).data('id');
		$(this).find('a').attr('href' , newHref );
		return ;
	})
	$('#answerGoodsEvent').on( 'click' , '.findSthItem' ,function(){
		var newHref = $(this).find('a').attr('href') + '?type=news&action=found&id=' + $(this).data('id');
		$(this).find('a').attr('href' , newHref );
		return ;
	})
})
var locHref ;
// 登录按钮
function signIn() {
	$('#signIn').click(function() {
		locHref = window.location.href;
		var winHeight = $('body').height();
		var winWidth = $('body').width();
		$('#mark').height(winHeight);
		$('#mark').width(winWidth);

		$('#J_loginGuide').hide();
		$('#mark').show();
		$('.signInBox').show();

		return;
	})
}

// 注册按钮
function register() {
	$('#register').click(function() {
		var winHeight = $('body').height();
		var winWidth = $('body').width();
		$('#mark').height(winHeight);
		$('#mark').width(winWidth);

		$('#J_loginGuide').hide();
		$('#mark').show();
		$('.registerBox').show();

		return;
	})
}

// 弹出框的关闭按钮
function closeCtrl() {
	$('.closePart').click(function() {
		$(this).parents('.ctrlBox').hide();
		$('#mark').hide();
		// $('.ctrlBox input').val('');
		$('.errTip').hide();
	})
}

// 登录确认
function signInBtn() {
	$('#signInBtn').click(function() {

		var signUsesName = $('#signUsesName').val();
		var SignInUserPassword = $('#SignInUserPassword').val();

		var url = '/things/IndexJson/login';
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
				window.location.href = locHref; 
			} else if (result == '密码错误') {
				alert('密码错误');
			} else if (result == '用户名不存在'){
				alert('用户名不存在')
			}
		})


		$(this).parents('.ctrlBox').hide();
		$('#mark').hide();
	})
}



// 注册确认
function registerBtn() {
	$('#registerBtn').click(function() {

		var regUsesName = $('#regUsesName').val();
		var regPW = $('#regPW').val();
		var regCheckPW = $('#regCheckPW').val();

		if (regPW != regCheckPW) {
			$('.confirmPW .errTip').show();
			return;
		}
		var url = '/things/IndexJson/register';
		var json = {
			"username": regUsesName,
			"password": regPW

		}
		$.post(url, json, function(data) {
			var jsobObj = eval("(" + data + ")");
			var result = jsobObj.result;

			if (result == '注册成功') {
				alert('注册成功');
				$('.NavTopUserName').html(regUsesName);
				$('.logResList').hide();
				$('.userStation').show();
			} else {
				alert('用户已存在');
			}
		})
		$(this).parents('.ctrlBox').hide();
		$('#mark').hide();
		$('.ctrlBox input').val('');



	})
}

// 登出
function logOut(argument) {
	$('.logOut').click(function() {
		$('.logResList').show();
		$('.userStation').hide();


		var url = '/things/index/logout';
		var json = {};
		$.post( url , json  );
		
			window.location.href="index.html"; 
	})
}

// 是否记住密码
function check() {
	$('#checkbox1').click(function() {
		$('#checkImg1').css('display') == 'block' ? $('#checkImg1').css('display', 'none') : $('#checkImg1').css('display', 'block');
	});
	$('#checkbox2').click(function() {
		$('#checkImg2').css('display') == 'block' ? $('#checkImg2').css('display', 'none') : $('#checkImg2').css('display', 'block');
	});
}

// 滑杆动作
function scrollNav() {
	$(window).scroll(function() {
		$(window).scrollTop() > 239 ? $('#navBarMain').show(500) : $('#navBarMain').hide(500);
		// $(window).scrollTop() > 300 ? function(){}
		if ($(window).scrollTop() > 300) {
			$('.leftNav').css({
				'position': 'fixed',
				'top': '30px'
			});
		} else {
			$('.leftNav').css({
				'position': 'absolute',
				'top': '15px'
			});

		}
	})
}
var mediaNum;






// 回到顶部
function backToTop() {
	var oBtn = document.getElementById('backTop');
	var oHeight = document.documentElement.clientHeight;
	var timer = null;
	var myTop = true;
	if (!oBtn) return;
	oBtn.onclick = function() {
		timer = setInterval(function() {
			var oTop = document.documentElement.scrollTop || document.body.scrollTop;
			// 向上取整，比如0.5会取整为1
			var iSpeed = Math.ceil(oTop / 5);
			// 每次都把myTop设为ture，才不会一直卡
			myTop = true;
			document.documentElement.scrollTop = document.body.scrollTop = oTop - iSpeed;
			oTop == 0 && clearInterval(timer);
		}, 30);
	}
	window.onscroll = function() {
		var oTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (oTop > 0) {
			oBtn.style.display = 'block';
		} else {
			oBtn.style.display = 'none';
		}
		if (!myTop) {
			clearInterval(timer);
		}
		myTop = false;
	}
}


// 删除发布记录
function delAnnouceMes() {
	$('.delAnnouceMes').click(function() {
		var mymessage = confirm("是否删除该信息？");
		if (mymessage) {
			$(this).parents('.announceItem').remove();

		}

		return;
	})
}





// 弹出发布信息框
function releaseMes() {
	$('.releaseMes').click(function() {

		var winHeight = $('body').height();
		var winWidth = $('body').width();
		$('#mark').height(winHeight);
		$('#mark').width(winWidth);

		$('#mark').show();
		$('.goodsMesBig').show();
	});
}

// 确认发布按钮
function goodMesBtn() {
	$('#goodMesBtn').click(function() {

		var GoodsMesEvent = $('input[name="event"]:checked').val();
		// var goodMesName = $('.goodMesName').val();
		// var goodMesTitle = $('.goodMesTitle').val();
		// var goodMesTime = $('.goodMesTime').val();
		// var goodMesPlace = $('.goodMesPlace').val();
		var goodMesMoney = $('.goodMesMoney').val();
		var goodMesTextarea = $('.goodMesTextarea').val();

		console.log( GoodsMesEvent +　goodMesMoney　+ goodMesTextarea );

		var curtTime = getToday();

		// 信息判断

		// if (!goodMesName) {
		// 	alert('物品名称不能为空!');
		// 	return;
		// }
		// if (!goodMesTitle) {
		// 	alert('信息标题不能为空!');
		// 	return;
		// }
		// if (!goodMesTextarea) {
		// 	alert('物品描述不能为空!');
		// 	return;
		// }


		var string1 = '<li class="findSthItem"><a href="detail.html"><p class="findSthItemTxt">' + goodMesTextarea + '</p><span class="findSthItemTime">' + curtTime + '</span></a></li>';
		var string2 = '<li class="findSthItem"><a href="detail.html"><p class="findSthItemTxt">' + goodMesTextarea + '</p><i class="f-fr findIcon">赏</i><span class="findSthItemTime">' + curtTime + '</span></a></li>';


		$('#mark').hide();
		$('.goodsMesBig').hide();

		if (GoodsMesEvent == 0) {
			
			$('#answerGoodsEvent li:eq(19)').remove();
			$('#answerGoodsEvent').prepend(string1);


		} else {

			if (!goodMesMoney) {

				$('#findGoodsEvent li:eq(19)').remove();
				$('#findGoodsEvent').prepend(string1);

			} else {

				$('#findGoodsEvent li:eq(19)').remove();
				$('#findGoodsEvent').prepend(string2);
			}

		}

		$('.goodsMesForm')[0].reset();
		// window.location.href = "index.html";
	});
}

// 获取今日日期
function getToday() {
	var d = new Date();
	var vYear = d.getFullYear();
	var vMon = d.getMonth() + 1;
	var vDay = d.getDate();
	vMon = vMon < 10 ? '0' + vMon : vMon;
	vDay = vDay < 10 ? '0' + vDay : vDay;
	var today = vYear + 　'-' + vMon + '-' + vDay;

	return today;
}

// 关闭底部浮动栏
function boxClose() {
	$('.box-close').click(function() {
		$(this).parents('.login-wrap').hide();

		return;
	})
}

