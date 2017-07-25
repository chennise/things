<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    //主页
	public function index(){
        $this->display('index');
    }
    //注册
    public function register(){
    	$this->display('register');
    }
    //登录
	public function login(){
		$this->display('login');
	}
	//登出
	public function logout(){
		session_start();
		session_destroy();
	}
	//发布
	public function release(){
		session_start();
		if(!isset($_SESSION['username'])){
			die('非法访问');
		}
		$this->display('release');
	}
}