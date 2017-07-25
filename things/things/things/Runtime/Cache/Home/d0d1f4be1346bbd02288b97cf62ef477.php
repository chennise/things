<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/ TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title></title>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
* { margin:0; padding:0;}
body { font-size:12px;}
.comment { margin-top:10px; padding:10px; border:1px solid #ccc;background:#DDD;}
.comment h6 { font-weight:700; font-size:14px;}
.para { margin-top:5px; text-indent:2em;background:#DDD;}
</style>
 <!--   引入jQuery -->
<script src="/things/Public/scripts/jquery.js" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
    $(function(){
	   $("#get").click(function(){
			$.post("/things/MeJson/index", { 
						
					}, function (data, textStatus){
					   
					},"json");
	   })
	})
	
	$(function(){
	   $("#send").click(function(){
			$.post("/things/MeJson/changeme", { 
						name :  $("#name").val() , 
						phone :  $("#phone").val() ,
						qq :  $("#qq").val() ,
						wechat :  $("#wechat").val() ,
						email :  $("#email").val() ,
					}, function (data, textStatus){
					   
					},"json");
	   })
	})
//]]>
</script>
</head>
<body>
<form id="form1" action="/things/MeJson/changeme" enctype='multipart/form-data' method='post' >
<p><input type="button" id="get" value="进入网页自动触发的请求，我不会弄，弄个按钮"/></p>
</br>
 <p>昵称：<input type="text" name="name" id="name" /></p></br>
 <p>头像: <input type="file" name="pic" id="pic" ></p></br>
 <p>手机：<input type="text" name="phone" id="phone" /></p></br>
 <p>Q Q ：<input type="text" name="qq" id="qq" /></p></br>
 <p>微信：<input type="text" name="wechat" id="wechat" /></p></br>
 <p>邮箱：<input type="text" name="email" id="email" /></p></br>
 <p><input type="submit" id="" value="保存"/></p></br>
 四个联系方式至少填一个

</form>




</body>
</html>