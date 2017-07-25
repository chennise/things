<?php
namespace Home\Controller;
use Think\Controller;
class TestController extends Controller {
    public function index(){
    	$model=M('goods');
    	$id='by7gively07fpdev';
    	$rs=$model->where('url_id="'.$id.'"')->select();
    	print_r($rs);
    }
    
	
}