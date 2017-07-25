<?php
namespace Home\Controller;
use Think\Controller;
use Org\Util\Date;


class MessageJsonController extends Controller {
	public function index(){
		session_start();
		if(isset($_SESSION['username'])){
			$json['state']=$_SESSION['username'];
		}else{
			$json['state']='no';
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
	public function mymessage(){
		$act=isset($_GET['act'])?$_GET['act']:'show';
		session_start();
		if($act=='del'){
			$id=isset($_POST['id'])?$_POST['id']:0;
			$model=M('message');
			$result=$model->where("id=$id and username='".$_SESSION['username']."'")->delete();
			if($result){
				$json['result']='删除成功';
				$model2=M('discuss');
				$model2->where('message_id='.$id)->delete();
			}else{
				$json['result']='删除失败';
			}
			echo json_encode($json,JSON_UNESCAPED_UNICODE);
		}else{
			
			$page=isset($_POST['page'])?(int)$_POST['page']:1;
			$size=isset($_POST['size'])?(int)$_POST['size']:10;
			$model=M('message');
			$json['all']=$model->count();
			$json['list']=$model->where('username="'.$_SESSION['username'].'"')->limit(($page-1)*$size,$size)->order('id desc')->getField('id,time,action,content,picture,count,money');
			foreach ($json['list'] as $v => $k){
				$json['list'][$v]['username']=$_SESSION['username'];
			}
			echo json_encode($json,JSON_UNESCAPED_UNICODE);
		}
	}
	
	public function discuss(){
		session_start();
		$act=isset($_GET['act'])?$_GET['act']:'show';
		if($act=='add'){
			if(!isset($_SESSION['username'])){
				die('非法访问');
			}
			$model=M('discuss');
			$data['username']=$_SESSION['username'];
			$data['time']=Date('Y-m-d H:i:s');
			$data['content']=$_POST['content'];
			$data['message_id']=$_POST['message_id'];
			if($model->add($data)){
				$model2=M('message');
				$count['count']=$model2->where('id='.$data['message_id'])->getField('count');
				$count['count']=$count['count']+1;
				$model2->where('id='.$data['message_id'])->save($count);
				$json['result']='ok';
			}else{
				$json['result']='no';
			}
			echo json_encode($json,JSON_UNESCAPED_UNICODE);
		}else{//显示评论信息
			$page=isset($_POST['page'])?(int)$_POST['page']:1;
			$size=isset($_POST['size'])?(int)$_POST['size']:999;
			$message_id=isset($_POST['message_id'])?$_POST['message_id']:0;
			
			//查看当前用户是否登录和是否完善个人信息
			$model2=M('user');
			if(isset($_SESSION['username'])){
				$json['state1']='已登录';
				$name=$model2->where('username="'.$_SESSION.'"')->getField('name');
				if($name===null){
					$json['state2']='未完善';
				}else{
					$json['state2']='已完善';
				}
			}else{
				$json['state1']='未登录';
				$json['state2']='未完善';
			}
			
			$model=M('discuss');
			$json['all']=$model->count();
			$rs=$model->where('message_id='.$message_id)->limit(($page-1)*$size,$size)->order('id desc')->select();
			
			foreach($rs as $k=>$v){
				$rs["$k"]["name"]=$model2->where('username="'.$v['username'].'"')->getField('name');
				$rs["$k"]["picture"]=$model2->where('username="'.$v['username'].'"')->getField('picture');
			}
			$json['list']=$rs;
			
			$model3=M('message');
			$username=$model3->where('id='.$message_id)->getField('username');
			$json['user']=$model2->where('username="'.$username.'"')->select()[0];
			
			$json['message']=$model3->where('id='.$message_id)->select()[0];
			
			echo json_encode($json,JSON_UNESCAPED_UNICODE);
			
		}
	}

	public function my_swap(){
		session_start();
		if(!isset($_SESSION['username'])){
			die('未登录');
		}
		$model=M('swap');
		$model2=M('goods');
		$model3=M('user');


		$rs=$model->where('swaper="'.$_SESSION['username'].'"')->select();
		
		foreach($rs as $k => $v){
			$rs[$k]['master']=$model3->where('username="'.$v['master'].'"')->select()[0];
			$rs[$k]['goods']=$model2->where('id='.$v['goods_id'])->select()[0];
			unset($rs[$k]['master']['password']);
		}
		$json=$rs;
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
	public function who_swap(){
		session_start();
		if(!isset($_SESSION['username'])){
			die('未登录');
		}
		$model=M('swap');
		$model2=M('goods');
		$model3=M('user');
		
		
		$rs=$model->where('master="'.$_SESSION['username'].'"')->select();
		
		foreach($rs as $k => $v){
			$rs[$k]['swaper']=$model3->where('username="'.$v['swaper'].'"')->select()[0];
			$rs[$k]['goods']=$model2->where('id='.$v['goods_id'])->select()[0];
			unset($rs[$k]['swaper']['password']);
		}
		$json=$rs;
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
	public function goods_discuss(){
		session_start();
		$model=M('goods_discuss');
		if($_GET['act']=='add'){
			$data['goods_id']=isset($_POST['goods_id'])?$_POST['goods_id']:0;
			$data['username']=isset($_SESSION['username'])?$_SESSION['username']:'';
			$data['content']=isset($_POST['content'])?$_POST['content']:'';
			$data['time']=Date('Y-m-d H:i:s');
			if($model->add($data)){
				$json['result']='ok';
			}else{
				$json['result']='no';
			}
		}else{
			$model2=M('user');
			$goods_id=$_POST['goods_id'];
			$rs=$model->where('goods_id='.$goods_id)->order('id desc')->select();
			foreach($rs as $k => $v){
				$rs[$k]['user']=$model2->where('username="'.$v['username'].'"')->select()[0];
				unset($rs[$k]['user']['password']);
				unset($rs[$k]['username']);
			}
			$json['list']=$rs;
			
			$model3=M('goods');
			$json['goods']=$model3->where('id='.$goods_id)->select();
			
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
}


