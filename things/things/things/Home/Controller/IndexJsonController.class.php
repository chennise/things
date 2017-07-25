<?php
namespace Home\Controller;
use Think\Controller;
use Org\Util\Date;


class IndexJsonController extends Controller {
	public function index(){
		
		$json['state']=isset($_SESSION['username'])?$_SESSION['username']:'no';
		
		$action=isset($_POST['action'])?$_POST['action']:'lost';
		if($action=='lost'){
			$page=isset($_POST['page'])?(int)$_POST['page']:1;
			$size=isset($_POST['size'])?(int)$_POST['size']:10;
			$model=M('message');
			$json['all']=$model->where('action="失物"')->count();
			$rs=$model->where('action="失物"')->limit(($page-1)*$size,$size)->order('id desc')->select();
			$model2=M('user');
			foreach($rs as $k=>$v){
				$rs["$k"]["name"]=$model2->where('username="'.$v['username'].'"')->getField('name');
				$rs["$k"]["picture2"]=$model2->where('username="'.$v['username'].'"')->getField('picture');
			}
			$json['list']=$rs;
		}else{
			$page=isset($_POST['page'])?(int)$_POST['page']:1;
			$size=isset($_POST['size'])?(int)$_POST['size']:10;
			$model=M('message');
			$json['all']=$model->where('action="招领"')->count();
			$rs=$model->where('action="招领"')->limit(($page-1)*$size,$size)->order('id desc')->select();
			$model2=M('user');
			foreach($rs as $k=>$v){
				$rs["$k"]["name"]=$model2->where('username="'.$v['username'].'"')->getField('name');
				$rs["$k"]["picture2"]=$model2->where('username="'.$v['username'].'"')->getField('picture');
			}
			$json['list']=$rs;
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	//注册
	public function register(){
		$username=$_POST['username'];
		$password=$_POST['password'];
		$model=M('user');
		$rs=$model->where('username="'.$username.'"')->select();
		if($rs==array()){
			$data['username']=$username;
			$data['password']=$password;
			if($model->add($data)){
				$json['result']='注册成功';
				session_start();
				$_SESSION['username']=$username;
			}else{
				$json['result']='未知错误';
			}
		}else{
			$json['result']='用户名已存在';
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	//登录
	public function login(){
		$username=$_POST['username'];
		$password=$_POST['password'];
		$model=M('user');
		$rs=$model->where('username="'.$username.'"')->select();
		if($rs==array()){
			$json['result']='用户名不存在';
		}else{
			if($rs[0]['password']!=$password){
				$json['result']='密码错误';
			}else{
				$json['result']='登录成功';
				session_start();
				$_SESSION['username']=$username;
			}
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
	//发布
	public function release(){
		session_start();
		$data['username']=$_SESSION['username'];
		$data['time']=Date('Y-m-d H:i:s');
		$data['action']=isset($_POST['action'])?$_POST['action']:'';
		$data['content']=isset($_POST['content'])?$_POST['content']:'';
		$data['money']=isset($_POST['money'])?$_POST['money']:0;
		
		$new_url='Public/pic/'.rand(1,100000).$_FILES['pic']['name'];
		if(move_uploaded_file($_FILES['pic']['tmp_name'],$new_url)){
			$data['picture']='/things/'.$new_url;
		}
		
		$model=M('message');
		
		if($model->add($data)){
			$json['result']='ok';
		}else{
			$json['result']='no';
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
		header('location: /things/LostAndFound/index.html');
	}
}


