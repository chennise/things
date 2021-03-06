<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>一物一码</title>
	<meta author="chenhanming" time="2016-04-12">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">  
	<link rel="stylesheet" href="/things/LostAndFound/css/public.css">
	<link rel="stylesheet" href="/things/LostAndFound/css/layout.css">
	<link rel="stylesheet" href="/things/LostAndFound/css/detail.css">
	<script src="/things/LostAndFound/js/jquery-2.1.4.min.js"></script>

</head>
<body>
	<div class="header" id="header">
		<div class="headerNav">
			<div class="wrap">
				<div class="address clearfix">
					<div class="f-fl">
						<p>你好，欢迎来到 <b>一物一码</b> !</p>
					</div>
					<div class="f-fr logRes">
						<ul style="display:block" class="logResList clearfix">
							<li><a href="javascript:;" id="signIn">登录</a></li>
							<li><a href="javascript:;" id="register">注册</a></li>
						</ul>
						<div class="userStation" style="display:none">
							<p>欢迎你：</p>
							<span class="NavTopUserName">啊标叔</span>
							<a href="javascript:;" class="logOut">[登出]</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ad clearfix">
			<img src="/things/LostAndFound/img/logo.png" alt="" class="f-fl" />
			<div class="navBar f-fr">
				<ul class="navList">
					<li class="navItem"><a href="/things/LostAndFound/index.html">首页</a></li>
					<li class="navItem"><a href="/things/LostAndFound/comment.html">消息评论</a></li>
					<li class="navItem"><a href="/things/LostAndFound/user.html">个人信息</a></li>
					<li class="navItem"><a href="/things/LostAndFound/about.html">关于我们</a></li>
					<li class="navItem"><a href="/things/LostAndFound/javascript:void();" class="releaseMes">发布消息</a></li>
				</ul>
			</div>
		</div>
		<div class="wrap">
			<hr>
		</div>
		<div class="navBarMain" id="navBarMain" style="display:none">
			<div class="wrap">
				<ul class="navList clearfix">
					<li class="navItem"><a href="/things/LostAndFound/index.html">首页</a></li>
					<li class="navItem"><a href="/things/LostAndFound/comment.html">消息评论</a></li>
					<li class="navItem"><a href="/things/LostAndFound/user.html">个人信息</a></li>
					<li class="navItem"><a href="/things/LostAndFound/about.html">关于我们</a></li>
					<li class="navItem"><a href="/things/LostAndFound/javascript:;" class="releaseMes">发布消息</a></li>
				</ul>	

			</div>
		</div>
	</div>
	<div class="bigAD">
		诚招广告商
	</div>
	<div class="mainBody detail" id="mainBody">
		<div class="wrap clearfix" id="commentBody">
			
			<div class="mesMain clearfix">
				<div class="f-fl leftArea">
					<h2 class="userName"><a href="#">Charming</a></h2>
					<div class="userImg">
						<img src="/things/LostAndFound/img/noavatar_middle.gif" alt=""/>
					</div>
					<div class="userMesBox">
					</div>
				</div>
				<div class="f-fl rightArea">
					<div class="goodsMesTxtBoxWrap">
						
						<p class="goodsMesTxtBox clearfix">
							<span class="goodsMesTxtTitle">物品名称</span>
							<i class="goodsMesTxt">￥100.00</i>
						</p>
						<p class="goodsMesTxtBox clearfix">
							<span class="goodsMesTxtTitle">联系方式：</span>
							<i class="goodsMesTxt">phone:12345678910<br>
							phone:12345678910<br>
							phone:12345678910<br>phone:12345678910</i>
						</p>
						<p class="goodsMesTxtBox clearfix">
							<span class="goodsMesTxtTitle">悬赏金额：</span>
							<i class="goodsMesTxt">￥100.00</i>
						</p>
						<p class="goodsMesTxtBox clearfix">
							<span class="goodsMesTxtTitle">备注：</span>
							<i class="goodsMesTxt">很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机很帅很帅的手机</i>
						</p>
						<div class="goodsImg goodsMesTxtBox clearfix">
							<p class="goodsMesTxtTitle">上传照片：</p>
							<div class="f-fl goodsImgList">
								<img src="/things/LostAndFound/img/page4_0.png" alt="" class="goodsImgItem">
							</div>
						</div>
					</div>
				</div>
			</div>
		

		</div>

		
	</div>

	<div class="footer" id="footer">
		<div class="wrap">
			<p class="copyright">
				Copyright ©20015-2025&nbsp;&nbsp;&nbsp;BY --&nbsp;Charming
			</p>
		</div>
	</div>
	<div class="mark" id="mark" style="display:none"></div>
	<!-- 登录框 -->
	<div class="signInBox ctrlBox" style="display:none">
		<h1 class="ctrlBoxTitle">登录</h1>
		<div class="input regUserName">
			<input type="text" placeholder="账户名" id="signUsesName">
			<span class="icon">
				<img src="/things/LostAndFound/img/user_icon.png" alt="pic">
			</span>
			<!-- 错误提示 -->
			<p class="errTip">用户名不能为空！</p>
		</div>
		<div class="input password">
			<input type="password" placeholder="密码" id="SignInUserPassword">
			<span class="icon">
				<img src="/things/LostAndFound/img/iconfont-mima.png" alt="pic">
			</span>
		</div>
		<div class="txtPart">
			<span class="checkbox" id="checkbox1">
				<img id="checkImg1" src="/things/LostAndFound/img/iconfont-svg15.png" alt="pic" style="display:none" class="checkImg">
			</span>
			<p class="agree" id="agree">记住我的账号</p>
		</div>
		<div class="btnPart">
			<a href="javascript:;" id="signInBtn">登&nbsp;录</a>
		</div>
		<span class="closePart">X</span>
	</div>
	<!-- 注册框 -->
	<div class="registerBox ctrlBox" style="display:none">
		<h1 class="ctrlBoxTitle">注册</h1>
		<div class="input regUserName">
			<input type="text" placeholder="账户名" id="regUsesName">
			<span class="icon">
				<img src="/things/LostAndFound/img/user_icon.png" alt="pic">
			</span>
			<!-- 错误提示 -->
			<p class="errTip">用户名不能为空！</p>
		</div>
		<div class="input password">
			<input type="password" placeholder="密码" id="regPW">
			<span class="icon">
				<img src="/things/LostAndFound/img/iconfont-mima.png" alt="pic">
			</span>
			<!-- 错误提示 -->
			<p class="errTip">密码长度为8~16个字符</p>
		</div>
		<div class="input confirmPW">
			<input type="password" placeholder="确认密码" id="regCheckPW">
			<span class="icon">
				<img src="/things/LostAndFound/img/iconfont-mima.png" alt="pic">
			</span>
			<!-- 错误提示 -->
			<p class="errTip">两次密码不一样</p>
		</div>
		<div class="txtPart">
			<span class="checkbox" id="checkbox2">
				<img id="checkImg2" src="/things/LostAndFound/img/iconfont-svg15.png" alt="pic" style="display:none" class="checkImg">
			</span>
			<p class="agree">我已阅读并接受<a href="#">《用户协议》</a></p>
		</div>
		<div class="btnPart">
			<a href="javascript:;" id="registerBtn">注册</a>
		</div>
		<span class="closePart">X</span>
	</div>

	<!-- 发布信息框 -->
	<div class="goodsMes ctrlBox goodsMesBig" style="display:none">
		<h1 class="ctrlBoxTitle">物品详情</h1>
		<form id="form1" action="/things/IndexJson/release" enctype='multipart/form-data' method='post'>
		<p class="goodsMesTxtBox clearfix goodMesEvent">
			<span class="goodsMesTxtTitle">类型：</span>
			<input type="radio" name="action" id="answerEvent" value="招领"><label for="answerEvent">招领启事</label>
			<input type="radio" name="action" id="findEvent" value="失物" checked="checked"><label for="findEvent">寻物启事</label>
		</p>
		<p class="goodsMesTxtBox clearfix">
			<span class="goodsMesTxtTitle">悬赏金额：</span>
			<input type="text" placeholder="0.00"  class="mesInput goodMesMoney"  name="money" id="money" />
		</p>
		<p class="goodsMesTxtBox clearfix">
			<span class="goodsMesTxtTitle">内容：</span>
			<textarea name="content" id="" cols="30" rows="10" placeholder="物品描述" class="goodMesTextarea" /></textarea>
		</p>
		<p class="goodsMesTxtBox clearfix">
			<span class="goodsMesTxtTitle">上传图片：</span>
			<input type="file" value="上传图片" id="pic"  class="mesInput goodMesuploadFile" name="pic" >
		</p>
		<div class="btnPart">
			<p><input type="submit" id="" value="发布" class="btnPartSubmit" /></p>
		</div>
 
</form>
		
		<span class="closePart">X</span>
	</div>
	
	

<a href="javascript:;" id="backTop" style="display:none">回到<br>顶部</a>


	<script src="/things/LostAndFound/js/index.js"></script>
	<script src="/things/LostAndFound/js/code_show.js"></script>
</body>
</html>