# 《左手MongoDB右手Redis》-谢乾坤



## 基础知识

### 安装与连接MongoDB

安装mongodb, 我只关注了Linux的服务器，因为自己有一台阿里云的服务器，每年800+不能浪费，所以直接连接远程数据库。

最新的资料当然是官方文档，但是也是遇到了一些坑连接不上。

系统Ubuntu18.04安装过程：[Guide](<https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/>) 

```
// 创建列表
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

// 更新本地软件包的数据
sudo apt-get update

// 安装
sudo apt-get install -y mongodb-org

// 禁止自动更新版本，可选。我选了，避免一些程序的错误
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections

//运行MongoDB
sudo service mongod start

// 检查MongoDB的状态
sudo service mongod status

// 停止运行
sudo service mongod stop

// 重启
sudo service mongod restart

// 运行shell
mongo
```

要连接阿里云，注意设置安全组开放27017端口入方向，并且Ubuntu18.04默认开启了防火墙，所以需要开放防火墙的27017端口：

```
sudo ufw allow 27017
```

然后MongoDB配置是默认运行在本地，在配置文件里修改：

```
vi /etc/mongod.conf
```

按键盘的`i`进入编辑模式，把光标移到

```
net:
	port: 27017
	bindIp: 127.0.0.1
```

把`127.0.0.1` 修改为`0.0.0.0` 然后按`Esc` 键输入`:wq!` 回车

MongoDB没有设置密码，所以要添加用户来管理数据库

```
//进入MongoDB shell
mongo

// 切换db到admin
> use admin

// 添加用户
> db.createUser({
	user: "你要设定的用户名",
	pwd: "你要设定的密码",
	roles: [{ role: "userAdminAnyDatabase", db: "admin"}],
    mechanisms: ["SCRAM-SHA-1"]})
   })
   
// 检查用户是否有效，返回为1为成功
> db.auth("你设定过的用户名", "你设定过的密码")

// 加入创建的时候写错了，你可以Ctrl + C终止，或者回车之后删除那个用户
> db.dropUser("设置过的用户名")

// 退出MongoDB shell
> quit()

// 这个非常重要！！！
sudo service mongod restart

```

然后使用桌面工具[Robo 3T](<https://robomongo.org/>)连接远程MongoDB，可视化管理里面的数据。

安装完后，左上角的小电脑里选择`Manage Connections` ，然后创建，或者编辑

![manage connection](http://oss.hackslog.cn/coding/Snipaste_2019-11-16_13-24-41.png)

输入服务器的IP

![ip](http://oss.hackslog.cn/coding/Snipaste_2019-11-16_13-23-34.png)

`Authentication` 中输入账户密码，如果是admin的话可以创建和编辑里面的任意数据库，你也可以使用其他账户将他们的权限设置为读写就会安全些

![password](https://huixiong.oss-cn-beijing.aliyuncs.com/coding/Snipaste_2019-11-16_13-24-15.png)

保存之后就可以连接上了！！！

## 快速入门





## 高级应用





## 商业实战





