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
	   $("#send").click(function(){
			$.post("/things/IndexJson/release", { 
						action :  $("#action").val() , 
						content :  $("#content").val()  ,
						money : $("#money").val()
					}, function (data, textStatus){
					    
					},"json");
	   })
	})
//]]>
</script>
</head>
<body>
<form id="form1" action="/things/IndexJson/release" enctype='multipart/form-data' method='post'>

 失物还是招领: <input type="text" name="action" id="action" />你弄成单选框，最终发JSON值</br></br>
 内容: <input type="text" name="content" id="content" /></br></br>
 物品图片: <input type="file" name="pic" id="pic" /></br></br>
 内容: <input type="text" name="money" id="money" /></br></br>
 <p><input type="submit" id="" value="发布"/></p>
</form>




</body>
</html>