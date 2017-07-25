<?php
namespace Home\Controller;
use Think\Controller;
class CodeJsonController extends Controller {
	public function index(){}
		
	public function tie(){
		session_start();
		$data['username']=$_SESSION['username'];
		$data['name']=isset($_POST['name'])?$_POST['name']:'';
		
		$new_url='Public/pic/'.rand(1,100000).$_FILES['pic']['name'];
		if(move_uploaded_file($_FILES['pic']['tmp_name'],$new_url)){
			$data['picture']='/things/'.$new_url;
		}
		
		$data['remark']=isset($_POST['remark'])?$_POST['remark']:'';
		$model=M('goods');
		if($model->where('url_id="'.$_SESSION['id'].'"')->save($data)){
			$json['result']='ok';
		}else{
			$json['result']='no';
		}
		$_SESSION['id']=null;
		echo json_encode($json,JSON_UNESCAPED_UNICODE); 
		header('location: /things/LostAndFound/user.html');
	}
	
	public function show(){
		session_start();
		$id=$_SESSION['show_id'];
		$_SESSION['show_id']=null;
		$model1=M('goods');
		$model2=M('user');
		$rs1=$model1->where('url_id="'.$id.'"')->select();
		$rs2=$model2->where('username="'.$rs1[0]['username'].'"')->select();
		$json['name']=$rs2[0]['name'];
		$json['picture1']=$rs2[0]['picture'];
		$json['phone']=$rs2[0]['phone'];
		$json['qq']=$rs2[0]['qq'];
		$json['wechat']=$rs2[0]['wechat'];
		$json['email']=$rs2[0]['email'];
		$json['name2']=$rs1[0]['name'];
		$json['picture2']=$rs1[0]['picture'];
		$json['remark']=$rs1[0]['remark'];
		
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
	public function state(){
		session_start();
		if(isset($_SESSION['username'])){//已登录
			$json['state1']='已登录';
			$model=M('user');
			if($model->where('username="'.$_SESSION['username'].'"')->getField('name')!==null){
				//已完善
				$json['state2']='已完善';
			}else{
				//未完善
				$json['state2']='未完善';
			}
		}else{//未登录
			$json['state1']='未登录';
			$json['state2']='未完善';
		}
		
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
}