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
			$.post("/things/MessageJson/mymessage?act=show", { 
						page :  $("#page").val() , 
						size :  $("#size").val()
					}, function (data, textStatus){
					   
					},"json");
	   })
	})
	$(function(){
	   $("#del").click(function(){
			$.post("/things/MessageJson/mymessage?act=del", { 
						id :  $("#id").val() 
						
					}, function (data, textStatus){
					   
					},"json");
	   })
	})
//]]>
</script>
</head>
<body>
<form id="form1" action="#">
 当前页：<input type='text' name='page' id='page' ></br></br>
 每页显示条数：<input type='text' name='size' id='size' ></br></br>
 <input type="button" id="send" value="请求"/></br></br>
</form>
<form id="form2" action="#">
 你要删除的信息id：<input type='text' name='id' id='id' ></br></br>
 <input type="button" id="del" value="删除"/></br></br>
</form>



</body>
</html>