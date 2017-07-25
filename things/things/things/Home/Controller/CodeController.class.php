<?php
namespace Home\Controller;
use Think\Controller;
use Org\Util\Date;
class CodeController extends Controller {
    public function index(){
    	$id=isset($_GET['id'])?$_GET['id']:0;
    	$model=M('goods');
    	if($rs=$model->where('url_id="'.$id.'"')->select()){
    		//数据库中有该二维码
    		session_start();
    		if($rs[0]['username']){
    			//已绑定
    			$model2=M('swap');
    			$data['goods_id']=$rs[0]['id'];
    			$data['master']=$rs[0]['username'];
    			$data['swaper']=isset($_SESSION['username'])?$_SESSION['username']:0;
    			$data['time']=Date('Y-m-d H:i:s');
    			$model2->add($data);
    			header('location: /things/code/show?id='.$id);
    		}else{
    			//未绑定
    			$_SESSION['id']=$id;
    			header('location: /things/code/tie');
    		}
    	}else{
    		//数据库中没有该二维码
    		die('该二维码不存在');
    	}
    }
    
    public function tie(){
    	
    	$this->display('code_edit');
    	
    }
    
    public function show(){
    	session_start();
    	$id=isset($_GET['id'])?$_GET['id']:0;
    	$model=M('goods');
    	if($model->where('url_id="'.$id.'"')->select()){
    		//二维码存在
    		$_SESSION['show_id']=$id;//用来传数据，很快被清除
    		
    		$this->display('code_show');
    	}else{
    		//二维码不存在
    		die('二维码不存在');
    	}
    	
    }


	//创造一个16位字符串的goods，做完后删掉
	public function create(){
    	$a='abcdefghijklmnopqrstuvwxyz1234567890';
    	$len=16;
    	$max=strlen($a)-1;
    	$str='';
    	for($i=0;$i<$len;$i++){
    		$str=$str.$a[rand(0,$max)];
    	}
    	$model=M('goods');
    	$data['url_id']=$str;
    	if($model->add($data)){
    		echo 'ok';
    	}else{
    		echo 'no';
    	}
    }
}