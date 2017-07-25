-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 04 月 29 日 06:11
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `things`
--
CREATE DATABASE IF NOT EXISTS `things` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `things`;

-- --------------------------------------------------------

--
-- 表的结构 `things_discuss`
--

CREATE TABLE IF NOT EXISTS `things_discuss` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `time` varchar(30) NOT NULL,
  `content` varchar(300) NOT NULL,
  `message_id` int(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

--
-- 转存表中的数据 `things_discuss`
--

INSERT INTO `things_discuss` (`id`, `username`, `time`, `content`, `message_id`) VALUES
(1, 'admin', '2016-04-10 15:26:01', '哈哈哈', 3),
(13, 'admin', '2016-04-10 15:46:54', '啊', 1),
(14, 'admin', '2016-04-10 15:47:58', '啊', 1),
(15, 'admin', '2016-04-10 15:47:59', '啊', 1),
(16, 'admin', '2016-04-10 15:47:59', '啊', 1),
(17, 'admin', '2016-04-10 15:47:59', '啊', 1),
(18, 'admin', '2016-04-10 15:47:59', '啊', 1),
(19, 'admin', '2016-04-10 15:47:59', '啊', 1),
(20, 'admin', '2016-04-10 15:48:00', '啊', 1),
(21, 'admin', '2016-04-10 15:48:00', '啊', 1),
(22, 'admin', '2016-04-10 15:48:28', '啊', 1),
(23, 'admin', '2016-04-10 15:48:29', '啊', 1),
(24, 'admin', '2016-04-10 15:48:29', '啊', 1),
(25, 'biao', '2016-04-28 14:48:33', '小明', 1),
(26, 'biao', '2016-04-28 14:48:33', '小明', 1),
(27, 'biao', '2016-04-28 14:51:36', '大明', 1),
(28, 'biao', '2016-04-28 14:53:46', '刚发的发广大发生过', 1),
(29, 'biao', '2016-04-28 14:54:41', '个梵蒂冈发给各个', 1),
(30, 'biao', '2016-04-28 14:55:04', '是', 53),
(31, 'biao', '2016-04-28 14:55:50', '啊', 53),
(32, 'biao', '2016-04-28 15:04:25', 'adfas', 74),
(33, 'biao', '2016-04-28 15:47:06', '阿萨德发的发', 1),
(34, 'biao', '2016-04-28 15:49:11', '大幅度', 1),
(35, 'biao', '2016-04-28 16:17:07', '的示范法', 74),
(36, 'haha', '2016-04-29 13:52:30', '我的', 96),
(37, 'haha', '2016-04-29 13:55:01', '我的', 96),
(38, 'haha', '2016-04-29 13:55:07', '事实上', 96);

-- --------------------------------------------------------

--
-- 表的结构 `things_goods`
--

CREATE TABLE IF NOT EXISTS `things_goods` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `url_id` varchar(30) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `picture` varchar(40) DEFAULT '/things/Public/pic/none.png',
  `remark` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `things_goods`
--

INSERT INTO `things_goods` (`id`, `url_id`, `username`, `name`, `picture`, `remark`) VALUES
(1, 'i3hb5y1uq4ureov3', 'biao', '饭卡啊', '/things/Public/pic/5503326197logo.png', 'aa'),
(2, 'qfe8ulb7auye6f5v', 'biao', '手机', '/things/Public/pic/none.png', '捡到还给我'),
(3, '32745xzywsv1ivp6', 'biao', 'asf', '/things/Public/pic/5688830683logo.png', 'sssa'),
(4, '2ntad5i76da4k95m', 'haha', '手机', '/things/Public/pic/6063026197logo.png', '捡到还给我啊'),
(5, 'c2iuoodcbg88h8z3', NULL, NULL, '/things/Public/pic/none.png', NULL),
(6, 'va7zpkpkpd5x4jbl', NULL, NULL, '/things/Public/pic/none.png', NULL),
(7, 'lesqftiwb5z8g849', NULL, NULL, '/things/Public/pic/none.png', NULL),
(8, 'kce3vesc5qs4i8dy', NULL, NULL, '/things/Public/pic/none.png', NULL),
(9, 'q5y13cju68lkak4s', NULL, NULL, '/things/Public/pic/none.png', NULL),
(10, '6qhjymrhfidns0ao', NULL, NULL, '/things/Public/pic/none.png', NULL),
(11, 'r8zok9g7wn5b1ayp', NULL, NULL, '/things/Public/pic/none.png', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `things_goods_discuss`
--

CREATE TABLE IF NOT EXISTS `things_goods_discuss` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `goods_id` int(6) NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `content` varchar(150) DEFAULT NULL,
  `time` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- 转存表中的数据 `things_goods_discuss`
--

INSERT INTO `things_goods_discuss` (`id`, `goods_id`, `username`, `content`, `time`) VALUES
(3, 1, 'biao', '嗯', '2016-04-20 00:33:33'),
(5, 2, 'biao', '哦', '2016-04-20 00:39:51'),
(6, 2, 'biao', '哈哈哈', '2016-04-20 00:41:06'),
(7, 1, 'admin', '哈哈哈', '2016-04-20 00:42:22'),
(8, 2, 'admin', '哈哈哈', '2016-04-20 00:43:16'),
(9, 2, 'admin', '哈哈哈', '2016-04-20 00:51:33'),
(10, 1, 'biao', '按时大大发', '2016-04-28 15:51:19'),
(11, 1, 'biao', '发生过的爽肤水', '2016-04-28 15:58:48'),
(12, 1, 'biao', '发生过的爽肤水', '2016-04-28 15:59:01'),
(13, 1, 'biao', '啊啊啊啊啊啊', '2016-04-28 15:59:11'),
(14, 1, 'biao', '啊啊啊啊啊啊', '2016-04-28 15:59:19'),
(15, 1, 'biao', '啊啊啊啊啊啊', '2016-04-28 15:59:27'),
(16, 1, 'biao', '大发发', '2016-04-28 16:16:23'),
(17, 1, 'biao', 'd d ', '2016-04-28 16:29:59'),
(18, 1, 'biao', 'd d ', '2016-04-28 16:30:08'),
(19, 1, 'biao', 'afasdfa', '2016-04-28 16:30:26'),
(20, 1, 'biao', 'adfafsdadfaf', '2016-04-28 16:30:37'),
(21, 1, 'biao', '发表', '2016-04-29 14:00:47'),
(22, 1, 'biao', '发表', '2016-04-29 14:00:56'),
(23, 1, 'biao', '', '2016-04-29 14:01:02');

-- --------------------------------------------------------

--
-- 表的结构 `things_message`
--

CREATE TABLE IF NOT EXISTS `things_message` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `time` varchar(30) NOT NULL,
  `action` varchar(6) NOT NULL,
  `content` varchar(300) NOT NULL,
  `picture` varchar(50) DEFAULT '/things/Public/pic/none.png',
  `count` int(6) NOT NULL DEFAULT '0',
  `money` int(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=100 ;

--
-- 转存表中的数据 `things_message`
--

INSERT INTO `things_message` (`id`, `username`, `time`, `action`, `content`, `picture`, `count`, `money`) VALUES
(1, 'biao', '2016-04-25 20:58:11', '招领', '1111', '/things/Public/pic/none.png', 7, 1111),
(53, 'admin', '2016-04-09 20:56:59', '招领', '捡到东西', '/things/Public/pic/none.png', 1, 0),
(56, 'admin', '2016-04-09 20:58:32', '招领', '捡到东西', '/things/Public/pic/none.png', 0, 11),
(65, 'admin', '2016-04-16 12:56:32', '失物', '啊', '/things/Public/pic/none.png', 0, 0),
(66, 'admin', '2016-04-16 13:04:14', '失物', '啊', '/things/Public/pic/501logo.png', 0, 0),
(69, 'biao', '2016-04-25 20:58:31', '招领', '1111', '/things/Public/pic/44663logo.png', 0, 1111),
(71, 'biao', '2016-04-25 21:07:53', '失物', '小明', '/things/Public/pic/6604.png', 0, 0),
(72, 'biao', '2016-04-25 21:08:27', '失物', '小明', '/things/Public/pic/26197logo.png', 0, 0),
(73, 'biao', '2016-04-25 21:11:21', '失物', '小明', '/things/Public/pic/80570logo.png', 0, 11),
(74, 'biao', '2016-04-25 21:14:11', '失物', '大名', '/things/Public/pic/30683logo.png', 2, 1),
(96, 'haha', '2016-04-29 13:50:39', '失物', '捡到了东西，要的来拿', '/things/Public/pic/706736604.png', 3, 0);

-- --------------------------------------------------------

--
-- 表的结构 `things_swap`
--

CREATE TABLE IF NOT EXISTS `things_swap` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `goods_id` int(6) NOT NULL,
  `master` varchar(30) NOT NULL,
  `swaper` varchar(30) NOT NULL,
  `time` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `things_swap`
--

INSERT INTO `things_swap` (`id`, `goods_id`, `master`, `swaper`, `time`) VALUES
(1, 1, 'admin', 'admin', '2016-04-17 19:31:24'),
(2, 1, 'admin', 'biao', '2016-04-17 19:32:54'),
(3, 1, 'biao', 'biao', '2016-04-17 19:39:57'),
(4, 1, 'admin', 'biao', '2016-04-17 19:53:34'),
(5, 1, 'biao', 'biao', '2016-04-29 01:02:10'),
(6, 3, '', 'biao', '2016-04-29 01:04:27'),
(7, 3, '', 'biao', '2016-04-29 01:04:52'),
(8, 1, 'biao', '0', '2016-04-29 12:39:12'),
(9, 1, 'biao', '0', '2016-04-29 13:05:34'),
(10, 2, 'biao', 'haha', '2016-04-29 13:56:29');

-- --------------------------------------------------------

--
-- 表的结构 `things_user`
--

CREATE TABLE IF NOT EXISTS `things_user` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `picture` varchar(50) DEFAULT '/things/Public/pic/none.png',
  `phone` varchar(20) DEFAULT NULL,
  `qq` varchar(20) DEFAULT NULL,
  `wechat` varchar(30) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `things_user`
--

INSERT INTO `things_user` (`id`, `username`, `password`, `name`, `picture`, `phone`, `qq`, `wechat`, `email`) VALUES
(1, 'f', 's', NULL, '/things/Public/pic/none.png', '', NULL, NULL, NULL),
(2, 'biao', '123', '标', '/things/Public/pic/6745748807none.png', '12faaa', '1', '2', '3'),
(3, 'admin', '111', '随便', '/things/Public/pic/328533.png', '110', '', '', ''),
(4, 'ming', '123', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(5, 'a', 'a', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(6, 'b', 'b', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(7, 'aasd', '1234', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(8, 'asdfa', '1234', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(9, 'asfdf', '1234', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(10, 'aaaaaa', 's', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(11, 'asdfaq', 's', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(12, 'sa', 's', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(13, 'dda', 's', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(14, 'as', 'as', NULL, '/things/Public/pic/none.png', NULL, NULL, NULL, NULL),
(15, 'haha', '123', '名', '/things/Public/pic/958080570logo.png', '13110120119', '没有', 'ss', 'ss');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
