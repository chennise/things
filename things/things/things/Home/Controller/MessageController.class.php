<?php
namespace Home\Controller;
use Think\Controller;
class MessageController extends Controller {
    public function index(){
        $this->display('index');
    }
    
    public function mymessage(){
    	$this->display('mymessage');
    }
    
    public function discuss(){
    	$this->display('discuss');
    }
    
    public function my_swap(){
    	$this->display('my_swap');
    }
    
    public function who_swap(){
    	$this->display('who_swap');
    }
    
    public function goods_discuss(){
    	$this->display();
    }
}