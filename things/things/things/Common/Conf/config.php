<?php
return array(
	//简化URL
	'URL_ROUTER_ON' => true, //开启路由
	'URL_ROUTE_RULES'=>array(
			''=>'',//待填
	),
	'MODULE_ALLOW_LIST'    =>    array('Home'),
	'DEFAULT_MODULE'       =>    'Home',//隐藏URL中的Home
	'URL_CASE_INSENSITIVE' =>	 true,//URL不区分大小写
		
	 /* 数据库设置 */
    'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  'localhost', // 服务器地址
    'DB_NAME'               =>  'things',          // 数据库名
    'DB_USER'               =>  'root',      // 用户名
    'DB_PWD'                =>  '123456',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    'DB_PREFIX'             =>  'things_',    // 数据库表前缀
    'DB_PARAMS'          	=>  array(), // 数据库连接参数    
    'DB_DEBUG'  			=>  false, // 数据库调试模式 开启后可以记录SQL日志
	'DB_FIELDS_CACHE'       =>  true,        // 启用字段缓存
	'DB_CHARSET'            =>  'utf8',      // 数据库编码默认采用utf8
);