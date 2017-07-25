<?php
namespace Home\Controller;
use Think\Controller;
class MeController extends Controller {
    public function index(){
        $this->display('index');
    }
    
    //修改密码
    public function changepw(){
    	session_start();
    	if(!isset($_SESSION['username'])){
    		die('非法登录');
    	}
    	$this->display('changepw');
    }
    
    //修改个人信息
    public function changeme(){
    	session_start();
    	if(!isset($_SESSION['username'])){
    		die('非法登录');
    	}
    	$this->display('changeme');
    }
    
    public function call(){
    	$this->display('call');
    }
    
    public function goods(){
    	$this->display('goods');
    }
}