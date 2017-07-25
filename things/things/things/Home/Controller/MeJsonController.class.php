<?php
namespace Home\Controller;
use Think\Controller;


class MeJsonController extends Controller {
	public function index(){
		session_start();
		if(!isset($_SESSION['username'])){
			$json['state']='未登录';
		}else{
			$json['state']='已登录';
			$model=M('user');
			$rs=$model->where('username="'.$_SESSION['username'].'"')->select();
			$json['name']=$rs[0]['name'];
			$json['picture']=$rs[0]['picture'];
			$json['phone']=$rs[0]['phone'];
			$json['qq']=$rs[0]['qq'];
			$json['wechat']=$rs[0]['wechat'];
			$json['email']=$rs[0]['email'];
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
	public function changepw(){
		session_start();
		$password=isset($_POST['password'])?$_POST['password']:'';
		$newpw=isset($_POST['newpw'])?$_POST['newpw']:'';
		$model=M('user');
		$rs=$model->where('username="'.$_SESSION['username'].'"')->select();
		
			if($rs[0]['password']!=$password){
				$json['result']='原密码错误';
			}else{
				$data['password']=$newpw;
				$model->where('username="'.$_SESSION['username'].'"')->save($data);
				$json['result']='修改成功';
			}
			echo json_encode($json,JSON_UNESCAPED_UNICODE); 
		
	}
	
	public function changeme(){
		session_start();
		$username=isset($_SESSION['username'])?$_SESSION['username']:0;
		$data['name']=isset($_POST['name'])?$_POST['name']:'';
		
		$new_url='Public/pic/'.rand(1,100000).$_FILES['pic']['name'];
		if(move_uploaded_file($_FILES['pic']['tmp_name'],$new_url)){
			$data['picture']='/things/'.$new_url;
		}
		
		$data['phone']=isset($_POST['phone'])?$_POST['phone']:'';
		$data['qq']=isset($_POST['qq'])?$_POST['qq']:'';
		$data['wechat']=isset($_POST['wechat'])?$_POST['wechat']:'';
		$data['email']=isset($_POST['email'])?$_POST['email']:'';
		
		$model=M('user');
		if($model->where('username="'.$username.'"')->save($data)){
			$json['result']='ok';
		}else{
			$json['result']='no';
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
		header('location: /things/LostAndFound/user.html');
	}
	
	public function goods(){
		session_start();
		$model=M('goods');
		$json=$model->where('username="'.$_SESSION['username'].'"')->select();
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
	}
	
	public function good(){
		if($_GET['act']=='change'){
			session_start();
			$data['id']=isset($_POST['id'])?$_POST['id']:0;
			$data['name']=isset($_POST['name'])?$data['name']=$_POST['name']:'';
			$data['remark']=isset($_POST['remark'])?$_POST['remark']:'';
			
			$new_url='Public/pic/'.rand(1,100000).$_FILES['pic']['name'];
			if(move_uploaded_file($_FILES['pic']['tmp_name'],$new_url)){
				$data['picture']='/things/'.$new_url;
			}
			
			
			
			$model=M('goods');
			if($model->where('id='.$data['id'].' and username="'.$_SESSION['username'].'"')->save($data)){
				$json['result']='ok';
			}else{
				$json['result']='no';
			}
			
			header('location: /things/LostAndFound/user.html');
		
		}else if ($_GET['act']=='del'){
			$model=M('goods');
			$data['username']=$data['name']=$data['remark']='';
			$data['picture']='/things/Public/pic/none.png';
			if($model->where('id='.$_POST['id'])->save($data)){
				$model2=M('goods_discuss');
				$model2->where('goods_id='.$_POST['id'])->delete();
				
				$model3=M('swap');
				$model3->where('goods_id='.$_POST['id'])->delete();
				
				$json['result']='ok';
			}else{
				$json['result']='no';
			}
		}else{
			$id=isset($_POST['id'])?$_POST['id']:0;
			$model=M('goods');
			$json=$model->where('id='.$id)->select();
		}
		echo json_encode($json,JSON_UNESCAPED_UNICODE);
		
	}
}


