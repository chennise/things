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
			$.post("/things/CodeJson/state", { 
						
					}, function (data, textStatus){
					    
                        
					},"json");
	   })
	})
	
	$(function(){
	   $("#send").click(function(){
			$.post("/things/CodeJson/tie", { 
						name :  $("#name").val() , 
						picture :  $("#picture").val()  ,
						remark :  $("#remark").val()
					}, function (data, textStatus){
					    
                        
					},"json");
	   })
	})
//]]>
</script>
</head>
<body>
<form id="form" action="#">
 <p><input type="button" id="get" value="请求"/></p>
</form>
<form id="form1" action="/things/CodeJson/tie" enctype='multipart/form-data' method='post'>

 <p>物品名称: <input type="text" name="name" id="name" /></p>
 <p>图片: <input type="file" name="pic" id="pic" /></p>
 <p>备注: <input type="text" name="remark" id="remark" /></p>
 
 <p><input type="submit" id="" value="提交"/></p>
</form>




</body>
</html>