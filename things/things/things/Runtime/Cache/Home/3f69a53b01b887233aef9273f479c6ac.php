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
			$.post("/things/MessageJson/goods_discuss?act=show", { 
						
						goods_id: $("#goods_id").val()
					}, function (data, textStatus){
					   
					},"json");
	   })
	})
	
	$(function(){
	   $("#add").click(function(){
			$.post("/things/MessageJson/goods_discuss?act=add", { 
						goods_id :  $("#goods_id").val() ,
						content :  $("#content").val()
					}, function (data, textStatus){
					
					},"json");
	   })
	})
//]]>
</script>
</head>
<body>
<form id="form2" action="#">

 物品的id：<input type='text' name='goods_id' id='goods_id' ></br></br>
 <input type="button" id="get" value="请求得到评论信息"/></br></br>
</form>

<form id="form1" action="#">
 物品id：<input type='text' name='goods_id' id='goods_id' ></br></br>
 评论内容：<input type='text' name='content' id='content' ></br></br>
 <input type="button" id="add" value="提交评论"/></br></br>
</form>




</body>
</html>