# Typecho博客搬迁记

之前贪便宜99块撸了腾讯云的1核1G服务器，同时手上又一台阿里云，结果阿里云续费了800多，腾讯云到期要672块，还是算了吧，玩玩爬虫布几个网址、搭个博客一台是很够应用的了，腾讯云一定知道我这种买了基本没什么用计算存储资源所以才卖那么便宜！

## 数据库迁移

因为不想折腾，直接用了[宝塔Linux面板]( https://www.bt.cn/bbs/thread-19376-1-1.html )安装，Typecho基本实现点击按钮就部署完成了。

找到数据库，在对应网站数据库点击管理，从phpMyAdmin中把数据库下载到本地。

![phpMyAdmin](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-01-08.png)

![dump](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-01-33.png)

**在着之前，请记录一下数据库名字、数据库密码、网站的后台管理名字、后台管理密码**

在新网站的宝塔Linux面板中的phpMyAdmin创建一个跟原数据库一样名字的数据表（其实可以在typecho安装的时候指定相应的名字）格式我选的是utf-8general-ic

创建之后是导入原来的数据文件

![orignal](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-15-44.png)

但是如果你遇到的是这样的报错，原因在于数据库中没有这个数据表，必须先创建后才能在它下面导入。

![sql](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-26-28.png)

## 安装Typecho

宝塔Linux提供了源码一键安装，位置是控制面板->软件商店->宝塔一键部署源码，然后点击设置：

![one btn](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-56-51.png)

点击Typecho的一键部署：

![onbutton](https://huixiong.oss-cn-beijing.aliyuncs.com/blog/Snipaste_2019-11-19_15-57-06.png)

数据库的名字写以前的数据库名字，为了保险起见密码也写以前的密码，域名就填解析过的域名。

## 域名解析

在域名服务商那里把域名重新指定到新服务器的IP

## 登录

等解析完成之后，敲入网址会直接进入Typecho的数据库导入面板，注意数据库名和数据库用户名是一样的。跳完之后应该会显示导入失败，这时选择连接已有数据库。

输入原先的后台管理账号密码就可以快乐玩耍啦！

## 常用的配置

进入后台管理：https://www.hackslog.com/admin

在自己的网站添加/admin即可

