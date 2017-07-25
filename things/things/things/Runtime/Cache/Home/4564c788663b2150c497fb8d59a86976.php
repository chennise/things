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
			$.post("/things/IndexJson/improve", { 
						name :  $("#name").val() , 
						phone :  $("#phone").val() , 
						qq :  $("#qq").val() , 
						outsay :  $("#outsay").val() , 
						sex :  $("#sex").val() , 
						job :  $("#job").val() , 
						hobby :  $("#hobby").val() 
					}, function (data, textStatus){
					    var username = data.username;
						var content = data.content;
					    var txtHtml = "<div class='comment'><h6>"+username+":</h6><p class='para'>"+content+"</p></div>";
                        $("#resText").html(txtHtml); // 把返回的数据添加到页面上
					},"json");
	   })
	})
//]]>
</script>
</head>
<body>
<form id="form1" action="#">

  <p>昵称: <input type="text" name="username" id="username" /></p>
  <p>手机号: <input type="text" name="phone" id="phone" /></p>
  <p>其他联系方式: <input type="text" name="qq" id="qq" /></p>
  <p>交友宣言: <input type="text" name="outsay" id="outsay" /></p>
  <p>性别: <input type="text" name="sex" id="sex" /></p>
 <p>职业: <input type="text" name="job" id="job" /></p>
 <p>兴趣爱好: <input type="text" name="hobby" id="hobby" /></p>
 <p><input type="button" id="send" value="提交"/></p>
</form>




</body>
</html>